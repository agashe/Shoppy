from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrderData(_message.Message):
    __slots__ = ("id", "code", "total", "items_count", "status", "shipped_at", "created_at", "items")
    ID_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    ITEMS_COUNT_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    SHIPPED_AT_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    id: int
    code: str
    total: float
    items_count: int
    status: str
    shipped_at: str
    created_at: str
    items: str
    def __init__(self, id: _Optional[int] = ..., code: _Optional[str] = ..., total: _Optional[float] = ..., items_count: _Optional[int] = ..., status: _Optional[str] = ..., shipped_at: _Optional[str] = ..., created_at: _Optional[str] = ..., items: _Optional[str] = ...) -> None: ...

class OrdersPageData(_message.Message):
    __slots__ = ("orders", "pages")
    ORDERS_FIELD_NUMBER: _ClassVar[int]
    PAGES_FIELD_NUMBER: _ClassVar[int]
    orders: _containers.RepeatedCompositeFieldContainer[OrderData]
    pages: int
    def __init__(self, orders: _Optional[_Iterable[_Union[OrderData, _Mapping]]] = ..., pages: _Optional[int] = ...) -> None: ...

class FetchOrdersRequest(_message.Message):
    __slots__ = ("user_id", "page")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    PAGE_FIELD_NUMBER: _ClassVar[int]
    user_id: int
    page: int
    def __init__(self, user_id: _Optional[int] = ..., page: _Optional[int] = ...) -> None: ...

class FetchOrderRequest(_message.Message):
    __slots__ = ("user_id", "code")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    user_id: int
    code: str
    def __init__(self, user_id: _Optional[int] = ..., code: _Optional[str] = ...) -> None: ...

class CreateOrderRequest(_message.Message):
    __slots__ = ("user_id", "items")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    user_id: int
    items: str
    def __init__(self, user_id: _Optional[int] = ..., items: _Optional[str] = ...) -> None: ...

class CancelOrderRequest(_message.Message):
    __slots__ = ("user_id", "code")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    user_id: int
    code: str
    def __init__(self, user_id: _Optional[int] = ..., code: _Optional[str] = ...) -> None: ...

class FetchOrdersResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: OrdersPageData
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[_Union[OrdersPageData, _Mapping]] = ...) -> None: ...

class FetchOrderResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: OrderData
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[_Union[OrderData, _Mapping]] = ...) -> None: ...

class CreateOrderResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: OrderData
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[_Union[OrderData, _Mapping]] = ...) -> None: ...

class CancelOrderResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: str
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[str] = ...) -> None: ...
