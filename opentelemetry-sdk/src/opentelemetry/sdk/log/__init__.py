import abc
import collections
import concurrent.futures
import threading
from logging import Handler, getLogger
from time import time_ns
from typing import List, Optional, Union

from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.util.instrumentation import InstrumentationInfo
from opentelemetry.trace import get_current_span
from opentelemetry.trace.span import TraceFlags

_logger = getLogger(__name__)


class LogRecord:
    def __init__(
        self,
        timestamp=None,
        trace_id=None,
        span_id=None,
        trace_flags=None,
        severity_text=None,
        severity_number=None,
        name=None,
        body=None,
        resource=None,
        attributes=None,
    ):
        self._timestamp = timestamp
        self._trace_id = trace_id
        self._span_id = span_id
        self._trace_flags = trace_flags
        self._severity_text = severity_text
        self._severity_number = severity_number
        self._name = name
        self._body = body
        self._resource = resource
        self._attributes = attributes


class LogData:
    def __init__(self, record, instrumentation_info):
        self._record = record
        self._instrumentation_info = instrumentation_info


class LogProcessor(abc.ABC):
    @abc.abstractmethod
    def emit(self, log_data):
        """"""

    @abc.abstractmethod
    def shutdown(self):
        """"""

    @abc.abstractmethod
    def force_flush(self):
        """"""


class LogExporter(abc.ABC):
    @abc.abstractmethod
    def export(self):
        """"""

    @abc.abstractmethod
    def shutdown(self):
        """"""


class ConsoleExporter(LogExporter):
    def export(self, records):
        print(records)

    def shutdown(self):
        pass


class LogEmitter(Handler):
    def __init__(self, resource, active_log_processor, instrumentation_info):
        super().__init__()
        self._resoure = resource
        self._multi_log_processor = active_log_processor
        self._instrumentation_info = instrumentation_info

    def emit(self, record):
        timestamp = record.created * 1e9
        span_context = get_current_span().get_span_context()
        attributes = {
            "process.pid": record.process,
            "process.executable.path": record.pathname,
        }
        log_record = LogRecord(
            timestamp=timestamp,
            trace_id=span_context.trace_id,
            span_id=span_context.span_id,
            trace_flags=span_context.trace_flags,
            severity_text=record.levelname,
            severity_number=record.levelno,
            name=record.name,
            body=record.msg,
            resource=self._resoure,
            attributes=attributes,
        )
        log_data = LogData(log_record, self._instrumentation_info)
        self._multi_log_processor.emit(log_data)

    def flush(self):
        self._multi_log_processor.force_flush()


class SynchronousMultiLogProcessor(LogProcessor):
    def __init__(self):
        self._log_processors = ()
        self._lock = threading.Lock()

    def add_log_processor(self, processor: LogProcessor):
        with self._lock:
            self._log_processors = self._log_processors + (processor,)

    def emit(self, log_data):
        for lp in self._log_processors:
            lp.emit(log_data)

    def shutdown(self):
        for lp in self._log_processors:
            lp.shutdown()

    def force_flush(self):
        for lp in self._log_processors:
            lp.force_flush()


class ConcurrentMultiLogProcessor(LogProcessor):
    def __init__(self, max_workers=2):
        self._log_processors = ()
        self._lock = threading.Lock()
        self._executor = concurrent.futures.ThreadPoolExecutor(
            max_workers=max_workers
        )

    def add_log_processor(self, processor: LogProcessor):
        with self._lock:
            self._log_processors = self._log_processors + (processor,)

    def emit(self, log_data):
        futures = []
        for lp in self._log_processors:
            futures.append(self._executor.submit(lp.emit, log_data))
        for future in futures:
            future.result()

    def shutdown(self):
        futures = []
        for lp in self._log_processors:
            futures.append(self._executor.submit(lp.shutdown))
        for future in futures:
            future.result()

    def force_flush(self):
        futures = []
        for lp in self._log_processors:
            futures.append(self._executor.submit(lp.force_flush))
        for future in futures:
            future.result()


class SimpleLogProcessor(LogProcessor):
    def __init__(self, exporter):
        self._exporter = exporter

    def emit(self, log_data):
        self._exporter.export(log_data)

    def shutdown(self):
        pass

    def force_flush(self):
        pass


class _FlushRequest:
    __slots__ = ["event", "num_log_records"]

    def __init__(self):
        self.event = threading.Event()
        self.num_log_records = 0


class BatchLogPorcessor(LogProcessor):
    def __init__(
        self,
        exporter,
        schedule_delay_millis=5000,
        max_export_batch_size=512,
        export_timeout_millis=30000,
    ):
        self._exporter = exporter
        self._queue = collections.deque()
        self._schedule_delay_millis = schedule_delay_millis
        self._max_export_batch_size = max_export_batch_size
        self._export_timeout_millis = export_timeout_millis
        self._flush_request = None
        self._worker_thread = threading.Thread(target=self.worker, daemon=True)
        self._condition = threading.Condition(threading.Lock())
        self._done = False
        # precallocated list to send logs to exporter
        self._log_records = [
            None
        ] * self._max_export_batch_size  # type: List[Optional[LogData]]
        self._worker_thread.start()

    def emit(self, log_data):
        self._queue.appendleft(log_data)
        if len(self._queue) >= self._max_export_batch_size:
            with self._condition:
                self._condition.notify()

    def worker(self):
        timeout = self._schedule_delay_millis / 1e3
        flush_request = None
        while not self._done:
            with self._condition:
                if self._done:
                    break
                flush_request = self._get_and_unset_flush_request()
                if (
                    len(self._queue) < self._max_export_batch_size
                    and flush_request is None
                ):
                    self._condition.wait(timeout)
                    flush_request = self._get_and_unset_flush_request()
                    if not self._queue:
                        self._notify_flush_request_finished(flush_request)
                        flush_request = None
                        timeout = self._schedule_delay_millis / 1e3
                        continue
                    if self._done:
                        break

            start_time = time_ns()
            self._export(flush_request)
            end_time = time_ns()
            timeout = self._schedule_delay_millis / 1e3 - (
                end_time - start_time
            )

        with self._condition:
            shutdown_flush_request = self._get_and_unset_flush_request()

        self._drain_queue()
        self._notify_flush_request_finished(flush_request)
        self._notify_flush_request_finished(shutdown_flush_request)

    def _get_and_unset_flush_request(self):
        flush_request = self._flush_request
        self._flush_request = None
        if flush_request:
            flush_request.num_log_records = len(self._queue)
        return flush_request

    @staticmethod
    def _notify_flush_request_finished(flush_request):
        if flush_request:
            flush_request.event.set()

    def _get_or_create_flush_request(self):
        if self._flush_request is None:
            self._flush_request = _FlushRequest()
        return self._flush_request

    def _export(self, flush_request):
        if not flush_request:
            self._export_batch()
            return
        num_log_records = flush_request.num_log_records
        while self._queue:
            exported = self._export_batch()
            num_log_records -= exported

            if num_log_records <= 0:
                break

    def _export_batch(self):
        idx = 0
        while self._queue and idx < self._max_export_batch_size:
            record = self._queue.pop()
            self._log_records[idx] = record
            idx += 1
        try:
            self._exporter.export(self._log_records[:idx])
        except Exception:
            pass
        for index in range(idx):
            self._log_records[index] = None
        return idx

    def _drain_queue(self):
        while self._queue:
            self._export_batch()

    def shutdown(self):
        self._done = True
        with self._condition:
            self._condition.notify_all()
        self._worker_thread.join()
        self._exporter.shutdown()

    def force_flush(self, timeout_millis=None):
        if timeout_millis is None:
            timeout_millis = self._export_timeout_millis

        if self._done:
            return True
        with self._condition:
            flush_request = self._get_or_create_flush_request()
            self._condition.notify_all()
        ret = flush_request.event.wait(timeout_millis)
        if not ret:
            _logger.warning("Timedout in force_flush")

        return ret


class LogEmitterProvider:
    def __init__(
        self,
        resource: Resource = Resource.create(),
        active_log_processor: Union[
            SynchronousMultiLogProcessor, ConcurrentMultiLogProcessor
        ] = None,
    ):
        self._resource = resource
        self._multi_log_processor = (
            active_log_processor or SynchronousMultiLogProcessor()
        )

    def get_log_emitter(
        self,
        instrumenting_module_name: str,
        instrumenting_library_version: str,
    ):
        return LogEmitter(
            self._resource,
            self._multi_log_processor,
            InstrumentationInfo(
                instrumenting_module_name, instrumenting_library_version
            ),
        )

    def add_log_processor(self, processor: LogProcessor):
        self._multi_log_processor.add_log_processor(processor)

    def shutdown(self):
        self._multi_log_processor.shutdown()

    def force_flush(self):
        self._multi_log_processor.force_flush()
