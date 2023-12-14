from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductData(_message.Message):
    __slots__ = ("id", "name", "image", "price", "stock", "description")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    STOCK_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    image: str
    price: float
    stock: int
    description: str
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ..., image: _Optional[str] = ..., price: _Optional[float] = ..., stock: _Optional[int] = ..., description: _Optional[str] = ...) -> None: ...

class CategoryData(_message.Message):
    __slots__ = ("id", "name")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ...) -> None: ...

class HomePageData(_message.Message):
    __slots__ = ("products", "categories")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[ProductData]
    categories: _containers.RepeatedCompositeFieldContainer[CategoryData]
    def __init__(self, products: _Optional[_Iterable[_Union[ProductData, _Mapping]]] = ..., categories: _Optional[_Iterable[_Union[CategoryData, _Mapping]]] = ...) -> None: ...

class FetchHomePageRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class FetchAboutPageRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SendContactUsMessageRequest(_message.Message):
    __slots__ = ("name", "email", "body")
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    BODY_FIELD_NUMBER: _ClassVar[int]
    name: str
    email: str
    body: str
    def __init__(self, name: _Optional[str] = ..., email: _Optional[str] = ..., body: _Optional[str] = ...) -> None: ...

class FetchHomePageResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: HomePageData
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[_Union[HomePageData, _Mapping]] = ...) -> None: ...

class FetchAboutPageResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: str
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[str] = ...) -> None: ...

class SendContactUsMessageResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: str
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[str] = ...) -> None: ...
