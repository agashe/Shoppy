from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductEntity(_message.Message):
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

class CategoryEntity(_message.Message):
    __slots__ = ("id", "name")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ...) -> None: ...

class ProductsPageData(_message.Message):
    __slots__ = ("products", "categories", "pages")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    PAGES_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[ProductEntity]
    categories: _containers.RepeatedCompositeFieldContainer[CategoryEntity]
    pages: int
    def __init__(self, products: _Optional[_Iterable[_Union[ProductEntity, _Mapping]]] = ..., categories: _Optional[_Iterable[_Union[CategoryEntity, _Mapping]]] = ..., pages: _Optional[int] = ...) -> None: ...

class FetchProductsRequest(_message.Message):
    __slots__ = ("category_id", "search_keyword", "page")
    CATEGORY_ID_FIELD_NUMBER: _ClassVar[int]
    SEARCH_KEYWORD_FIELD_NUMBER: _ClassVar[int]
    PAGE_FIELD_NUMBER: _ClassVar[int]
    category_id: int
    search_keyword: str
    page: int
    def __init__(self, category_id: _Optional[int] = ..., search_keyword: _Optional[str] = ..., page: _Optional[int] = ...) -> None: ...

class FetchProductRequest(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: int
    def __init__(self, id: _Optional[int] = ...) -> None: ...

class FetchProductsResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: ProductsPageData
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[_Union[ProductsPageData, _Mapping]] = ...) -> None: ...

class FetchProductResponse(_message.Message):
    __slots__ = ("status", "message", "data")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    status: bool
    message: str
    data: ProductEntity
    def __init__(self, status: bool = ..., message: _Optional[str] = ..., data: _Optional[_Union[ProductEntity, _Mapping]] = ...) -> None: ...
