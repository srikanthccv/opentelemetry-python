"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor = ...

class AnyValue(google.protobuf.message.Message):
    """AnyValue is used to represent any type of attribute value. AnyValue may contain a
    primitive value such as a string or integer or it may contain an arbitrary nested
    object containing arrays, key-value lists and primitives.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    STRING_VALUE_FIELD_NUMBER: builtins.int
    BOOL_VALUE_FIELD_NUMBER: builtins.int
    INT_VALUE_FIELD_NUMBER: builtins.int
    DOUBLE_VALUE_FIELD_NUMBER: builtins.int
    ARRAY_VALUE_FIELD_NUMBER: builtins.int
    KVLIST_VALUE_FIELD_NUMBER: builtins.int
    BYTES_VALUE_FIELD_NUMBER: builtins.int
    string_value: typing.Text = ...
    bool_value: builtins.bool = ...
    int_value: builtins.int = ...
    double_value: builtins.float = ...
    @property
    def array_value(self) -> global___ArrayValue: ...
    @property
    def kvlist_value(self) -> global___KeyValueList: ...
    bytes_value: builtins.bytes = ...
    def __init__(self,
        *,
        string_value : typing.Text = ...,
        bool_value : builtins.bool = ...,
        int_value : builtins.int = ...,
        double_value : builtins.float = ...,
        array_value : typing.Optional[global___ArrayValue] = ...,
        kvlist_value : typing.Optional[global___KeyValueList] = ...,
        bytes_value : builtins.bytes = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal[u"array_value",b"array_value",u"bool_value",b"bool_value",u"bytes_value",b"bytes_value",u"double_value",b"double_value",u"int_value",b"int_value",u"kvlist_value",b"kvlist_value",u"string_value",b"string_value",u"value",b"value"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"array_value",b"array_value",u"bool_value",b"bool_value",u"bytes_value",b"bytes_value",u"double_value",b"double_value",u"int_value",b"int_value",u"kvlist_value",b"kvlist_value",u"string_value",b"string_value",u"value",b"value"]) -> None: ...
    def WhichOneof(self, oneof_group: typing_extensions.Literal[u"value",b"value"]) -> typing.Optional[typing_extensions.Literal["string_value","bool_value","int_value","double_value","array_value","kvlist_value","bytes_value"]]: ...
global___AnyValue = AnyValue

class ArrayValue(google.protobuf.message.Message):
    """ArrayValue is a list of AnyValue messages. We need ArrayValue as a message
    since oneof in AnyValue does not allow repeated fields.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    VALUES_FIELD_NUMBER: builtins.int
    @property
    def values(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___AnyValue]:
        """Array of values. The array may be empty (contain 0 elements)."""
        pass
    def __init__(self,
        *,
        values : typing.Optional[typing.Iterable[global___AnyValue]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"values",b"values"]) -> None: ...
global___ArrayValue = ArrayValue

class KeyValueList(google.protobuf.message.Message):
    """KeyValueList is a list of KeyValue messages. We need KeyValueList as a message
    since `oneof` in AnyValue does not allow repeated fields. Everywhere else where we need
    a list of KeyValue messages (e.g. in Span) we use `repeated KeyValue` directly to
    avoid unnecessary extra wrapping (which slows down the protocol). The 2 approaches
    are semantically equivalent.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    VALUES_FIELD_NUMBER: builtins.int
    @property
    def values(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___KeyValue]:
        """A collection of key/value pairs of key-value pairs. The list may be empty (may
        contain 0 elements).
        """
        pass
    def __init__(self,
        *,
        values : typing.Optional[typing.Iterable[global___KeyValue]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"values",b"values"]) -> None: ...
global___KeyValueList = KeyValueList

class KeyValue(google.protobuf.message.Message):
    """KeyValue is a key-value pair that is used to store Span attributes, Link
    attributes, etc.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    KEY_FIELD_NUMBER: builtins.int
    VALUE_FIELD_NUMBER: builtins.int
    key: typing.Text = ...
    @property
    def value(self) -> global___AnyValue: ...
    def __init__(self,
        *,
        key : typing.Text = ...,
        value : typing.Optional[global___AnyValue] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal[u"value",b"value"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"key",b"key",u"value",b"value"]) -> None: ...
global___KeyValue = KeyValue

class StringKeyValue(google.protobuf.message.Message):
    """StringKeyValue is a pair of key/value strings. This is the simpler (and faster) version
    of KeyValue that only supports string values.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    KEY_FIELD_NUMBER: builtins.int
    VALUE_FIELD_NUMBER: builtins.int
    key: typing.Text = ...
    value: typing.Text = ...
    def __init__(self,
        *,
        key : typing.Text = ...,
        value : typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"key",b"key",u"value",b"value"]) -> None: ...
global___StringKeyValue = StringKeyValue

class InstrumentationLibrary(google.protobuf.message.Message):
    """InstrumentationLibrary is a message representing the instrumentation library information
    such as the fully qualified name and version.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    NAME_FIELD_NUMBER: builtins.int
    VERSION_FIELD_NUMBER: builtins.int
    name: typing.Text = ...
    """An empty instrumentation library name means the name is unknown."""

    version: typing.Text = ...
    def __init__(self,
        *,
        name : typing.Text = ...,
        version : typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"name",b"name",u"version",b"version"]) -> None: ...
global___InstrumentationLibrary = InstrumentationLibrary
