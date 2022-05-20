# Copyright The OpenTelemetry Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import logging
from collections import abc
from typing import Any, List, Optional

from opentelemetry.sdk.metrics.export import (
    Gauge,
    Histogram,
    Sum,
)

from opentelemetry.sdk.metrics.export import (
    MetricsData,
)

from opentelemetry.proto.collector.metrics.v1.metrics_service_pb2 import (
    ExportMetricsServiceRequest,
)

from opentelemetry.proto.common.v1.common_pb2 import AnyValue as PB2AnyValue
from opentelemetry.proto.common.v1.common_pb2 import (
    ArrayValue as PB2ArrayValue,
)
from opentelemetry.proto.common.v1.common_pb2 import (
    InstrumentationScope as PB2InstrumentationScope,
)
from opentelemetry.proto.common.v1.common_pb2 import KeyValue as PB2KeyValue
from opentelemetry.proto.resource.v1.resource_pb2 import (
    Resource as PB2Resource,
)
from opentelemetry.proto.metrics.v1.metrics_pb2 import (
    ScopeMetrics as PB2ScopeMetrics,
)
from opentelemetry.proto.metrics.v1.metrics_pb2 import (
    ResourceMetrics as PB2ResourceMetrics,
)
from opentelemetry.proto.metrics.v1.metrics_pb2 import (
    Metric as PB2Metric,
    NumberDataPoint as PB2NumberDataPoint,
    HistogramDataPoint as PB2HistogramDataPoint,
)
from opentelemetry.sdk.util.instrumentation import InstrumentationScope
from opentelemetry.util.types import Attributes

_logger = logging.getLogger(__name__)


class _ProtobufEncoder:
    _CONTENT_TYPE = "application/x-protobuf"

    @classmethod
    def serialize(cls, data: MetricsData) -> str:
        return cls.encode(data).SerializeToString()

    @staticmethod
    def encode(data: MetricsData) -> ExportMetricsServiceRequest:
        return ExportMetricsServiceRequest(resource_metrics=_encode_data(data))


def _encode_data(
    data: MetricsData,
) -> List[PB2ResourceMetrics]:

    resource_metrics_dict = {}

    for resource_metrics in data.resource_metrics:

        resource = resource_metrics.resource

        # It is safe to assume that each entry in data.resource_metrics is
        # associated with an unique resource.
        scope_metrics_dict = {}

        resource_metrics_dict[resource] = scope_metrics_dict

        for scope_metrics in resource_metrics.scope_metrics:

            instrumentation_scope = scope_metrics.scope

            # The SDK groups metrics in instrumentation scopes already so
            # there is no need to check for existing instrumentation scopes
            # here.
            pb2_scope_metrics = PB2ScopeMetrics(
                scope=PB2InstrumentationScope(
                    name=instrumentation_scope.name,
                    version=instrumentation_scope.version,
                )
            )

            scope_metrics_dict[instrumentation_scope] = pb2_scope_metrics

            for metric in scope_metrics.metrics:
                pb2_metric = PB2Metric(
                    name=metric.name,
                    description=metric.description,
                    unit=metric.unit,
                )

                if isinstance(metric.data, Gauge):
                    for data_point in metric.data.data_points:
                        pt = PB2NumberDataPoint(
                            attributes=_encode_attributes(
                                data_point.attributes
                            ),
                            time_unix_nano=data_point.time_unix_nano,
                        )
                        if isinstance(data_point.value, int):
                            pt.as_int = data_point.value
                        else:
                            pt.as_double = data_point.value
                        pb2_metric.gauge.data_points.append(pt)

                elif isinstance(metric.data, Histogram):
                    for data_point in metric.data.data_points:
                        pt = PB2HistogramDataPoint(
                            attributes=_encode_attributes(
                                data_point.attributes
                            ),
                            time_unix_nano=data_point.time_unix_nano,
                            start_time_unix_nano=(
                                data_point.start_time_unix_nano
                            ),
                            count=data_point.count,
                            sum=data_point.sum,
                            bucket_counts=data_point.bucket_counts,
                            explicit_bounds=data_point.explicit_bounds,
                        )
                        pb2_metric.histogram.aggregation_temporality = (
                            metric.data.aggregation_temporality
                        )
                        pb2_metric.histogram.data_points.append(pt)

                elif isinstance(metric.data, Sum):
                    for data_point in metric.data.data_points:
                        pt = PB2NumberDataPoint(
                            attributes=_encode_attributes(
                                data_point.attributes
                            ),
                            start_time_unix_nano=(
                                data_point.start_time_unix_nano
                            ),
                            time_unix_nano=data_point.time_unix_nano,
                        )
                        if isinstance(data_point.value, int):
                            pt.as_int = data_point.value
                        else:
                            pt.as_double = data_point.value
                        # note that because sum is a message type, the
                        # fields must be set individually rather than
                        # instantiating a pb2.Sum and setting it once
                        pb2_metric.sum.aggregation_temporality = (
                            metric.data.aggregation_temporality
                        )
                        pb2_metric.sum.is_monotonic = metric.data.is_monotonic
                        pb2_metric.sum.data_points.append(pt)
                else:
                    _logger.warn("unsupported datapoint type %s", metric.point)
                    continue

                pb2_scope_metrics.metrics.append(pb2_metric)


def _encode_attributes(
    attributes: Attributes,
) -> Optional[List[PB2KeyValue]]:
    if attributes:
        pb2_attributes = []
        for key, value in attributes.items():
            try:
                pb2_attributes.append(_encode_key_value(key, value))
            except Exception as error:  # pylint: disable=broad-except
                _logger.exception(error)
    else:
        pb2_attributes = None
    return pb2_attributes


def _encode_value(value: Any) -> PB2AnyValue:
    if isinstance(value, bool):
        any_value = PB2AnyValue(bool_value=value)
    elif isinstance(value, str):
        any_value = PB2AnyValue(string_value=value)
    elif isinstance(value, int):
        any_value = PB2AnyValue(int_value=value)
    elif isinstance(value, float):
        any_value = PB2AnyValue(double_value=value)
    elif isinstance(value, abc.Sequence):
        any_value = PB2AnyValue(
            array_value=PB2ArrayValue(values=[_encode_value(v) for v in value])
        )
    else:
        raise Exception(f"Invalid type {type(value)} of value {value}")
    return any_value


def _encode_key_value(key: str, value: Any) -> PB2KeyValue:
    any_value = _encode_value(value)
    return PB2KeyValue(key=key, value=any_value)
