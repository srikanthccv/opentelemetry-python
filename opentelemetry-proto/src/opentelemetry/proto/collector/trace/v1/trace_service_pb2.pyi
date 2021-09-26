"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import opentelemetry.proto.trace.v1.trace_pb2
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor = ...

class ExportTraceServiceRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    RESOURCE_SPANS_FIELD_NUMBER: builtins.int
    @property
    def resource_spans(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[opentelemetry.proto.trace.v1.trace_pb2.ResourceSpans]:
        """An array of ResourceSpans.
        For data coming from a single resource this array will typically contain one
        element. Intermediary nodes (such as OpenTelemetry Collector) that receive
        data from multiple origins typically batch the data before forwarding further and
        in that case this array will contain multiple elements.
        """
        pass
    def __init__(self,
        *,
        resource_spans : typing.Optional[typing.Iterable[opentelemetry.proto.trace.v1.trace_pb2.ResourceSpans]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"resource_spans",b"resource_spans"]) -> None: ...
global___ExportTraceServiceRequest = ExportTraceServiceRequest

class ExportTraceServiceResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    def __init__(self,
        ) -> None: ...
global___ExportTraceServiceResponse = ExportTraceServiceResponse
