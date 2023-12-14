// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.25.1
// source: home.proto

package __

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// *
// Data Objects
type ProductData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Image       string  `protobuf:"bytes,3,opt,name=image,proto3" json:"image,omitempty"`
	Price       float32 `protobuf:"fixed32,4,opt,name=price,proto3" json:"price,omitempty"`
	Stock       int32   `protobuf:"varint,5,opt,name=stock,proto3" json:"stock,omitempty"`
	Description string  `protobuf:"bytes,6,opt,name=description,proto3" json:"description,omitempty"`
}

func (x *ProductData) Reset() {
	*x = ProductData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProductData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProductData) ProtoMessage() {}

func (x *ProductData) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProductData.ProtoReflect.Descriptor instead.
func (*ProductData) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{0}
}

func (x *ProductData) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ProductData) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ProductData) GetImage() string {
	if x != nil {
		return x.Image
	}
	return ""
}

func (x *ProductData) GetPrice() float32 {
	if x != nil {
		return x.Price
	}
	return 0
}

func (x *ProductData) GetStock() int32 {
	if x != nil {
		return x.Stock
	}
	return 0
}

func (x *ProductData) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

type CategoryData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   int32  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *CategoryData) Reset() {
	*x = CategoryData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CategoryData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CategoryData) ProtoMessage() {}

func (x *CategoryData) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CategoryData.ProtoReflect.Descriptor instead.
func (*CategoryData) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{1}
}

func (x *CategoryData) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *CategoryData) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type HomePageData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Products   []*ProductData  `protobuf:"bytes,1,rep,name=products,proto3" json:"products,omitempty"`
	Categories []*CategoryData `protobuf:"bytes,2,rep,name=categories,proto3" json:"categories,omitempty"`
}

func (x *HomePageData) Reset() {
	*x = HomePageData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HomePageData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HomePageData) ProtoMessage() {}

func (x *HomePageData) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HomePageData.ProtoReflect.Descriptor instead.
func (*HomePageData) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{2}
}

func (x *HomePageData) GetProducts() []*ProductData {
	if x != nil {
		return x.Products
	}
	return nil
}

func (x *HomePageData) GetCategories() []*CategoryData {
	if x != nil {
		return x.Categories
	}
	return nil
}

// *
// Requests
type FetchHomePageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *FetchHomePageRequest) Reset() {
	*x = FetchHomePageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FetchHomePageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FetchHomePageRequest) ProtoMessage() {}

func (x *FetchHomePageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FetchHomePageRequest.ProtoReflect.Descriptor instead.
func (*FetchHomePageRequest) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{3}
}

type FetchAboutPageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *FetchAboutPageRequest) Reset() {
	*x = FetchAboutPageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FetchAboutPageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FetchAboutPageRequest) ProtoMessage() {}

func (x *FetchAboutPageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FetchAboutPageRequest.ProtoReflect.Descriptor instead.
func (*FetchAboutPageRequest) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{4}
}

type SendContactUsMessageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Email string `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	Body  string `protobuf:"bytes,3,opt,name=body,proto3" json:"body,omitempty"`
}

func (x *SendContactUsMessageRequest) Reset() {
	*x = SendContactUsMessageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendContactUsMessageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendContactUsMessageRequest) ProtoMessage() {}

func (x *SendContactUsMessageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendContactUsMessageRequest.ProtoReflect.Descriptor instead.
func (*SendContactUsMessageRequest) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{5}
}

func (x *SendContactUsMessageRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SendContactUsMessageRequest) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *SendContactUsMessageRequest) GetBody() string {
	if x != nil {
		return x.Body
	}
	return ""
}

// *
// Responses
type FetchHomePageResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status  bool          `protobuf:"varint,1,opt,name=status,proto3" json:"status,omitempty"`
	Message string        `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Data    *HomePageData `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *FetchHomePageResponse) Reset() {
	*x = FetchHomePageResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FetchHomePageResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FetchHomePageResponse) ProtoMessage() {}

func (x *FetchHomePageResponse) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FetchHomePageResponse.ProtoReflect.Descriptor instead.
func (*FetchHomePageResponse) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{6}
}

func (x *FetchHomePageResponse) GetStatus() bool {
	if x != nil {
		return x.Status
	}
	return false
}

func (x *FetchHomePageResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *FetchHomePageResponse) GetData() *HomePageData {
	if x != nil {
		return x.Data
	}
	return nil
}

type FetchAboutPageResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status  bool   `protobuf:"varint,1,opt,name=status,proto3" json:"status,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Data    string `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *FetchAboutPageResponse) Reset() {
	*x = FetchAboutPageResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FetchAboutPageResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FetchAboutPageResponse) ProtoMessage() {}

func (x *FetchAboutPageResponse) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FetchAboutPageResponse.ProtoReflect.Descriptor instead.
func (*FetchAboutPageResponse) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{7}
}

func (x *FetchAboutPageResponse) GetStatus() bool {
	if x != nil {
		return x.Status
	}
	return false
}

func (x *FetchAboutPageResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *FetchAboutPageResponse) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

type SendContactUsMessageResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status  bool   `protobuf:"varint,1,opt,name=status,proto3" json:"status,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Data    string `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *SendContactUsMessageResponse) Reset() {
	*x = SendContactUsMessageResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_home_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendContactUsMessageResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendContactUsMessageResponse) ProtoMessage() {}

func (x *SendContactUsMessageResponse) ProtoReflect() protoreflect.Message {
	mi := &file_home_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendContactUsMessageResponse.ProtoReflect.Descriptor instead.
func (*SendContactUsMessageResponse) Descriptor() ([]byte, []int) {
	return file_home_proto_rawDescGZIP(), []int{8}
}

func (x *SendContactUsMessageResponse) GetStatus() bool {
	if x != nil {
		return x.Status
	}
	return false
}

func (x *SendContactUsMessageResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *SendContactUsMessageResponse) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

var File_home_proto protoreflect.FileDescriptor

var file_home_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x68, 0x6f, 0x6d, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x73, 0x68,
	0x6f, 0x70, 0x70, 0x79, 0x5f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x22, 0x95, 0x01, 0x0a,
	0x0b, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x44, 0x61, 0x74, 0x61, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x14, 0x0a, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x02, 0x52, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x14, 0x0a, 0x05,
	0x73, 0x74, 0x6f, 0x63, 0x6b, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73, 0x74, 0x6f,
	0x63, 0x6b, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x22, 0x32, 0x0a, 0x0c, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79,
	0x44, 0x61, 0x74, 0x61, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x85, 0x01, 0x0a, 0x0c, 0x48, 0x6f, 0x6d,
	0x65, 0x50, 0x61, 0x67, 0x65, 0x44, 0x61, 0x74, 0x61, 0x12, 0x37, 0x0a, 0x08, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x68,
	0x6f, 0x70, 0x70, 0x79, 0x5f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x50, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x44, 0x61, 0x74, 0x61, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63,
	0x74, 0x73, 0x12, 0x3c, 0x0a, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x73, 0x68, 0x6f, 0x70, 0x70, 0x79, 0x5f,
	0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79,
	0x44, 0x61, 0x74, 0x61, 0x52, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73,
	0x22, 0x16, 0x0a, 0x14, 0x46, 0x65, 0x74, 0x63, 0x68, 0x48, 0x6f, 0x6d, 0x65, 0x50, 0x61, 0x67,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x17, 0x0a, 0x15, 0x46, 0x65, 0x74, 0x63,
	0x68, 0x41, 0x62, 0x6f, 0x75, 0x74, 0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x22, 0x5b, 0x0a, 0x1b, 0x53, 0x65, 0x6e, 0x64, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74,
	0x55, 0x73, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x12, 0x0a, 0x04, 0x62, 0x6f,
	0x64, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x62, 0x6f, 0x64, 0x79, 0x22, 0x7b,
	0x0a, 0x15, 0x46, 0x65, 0x74, 0x63, 0x68, 0x48, 0x6f, 0x6d, 0x65, 0x50, 0x61, 0x67, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x30, 0x0a, 0x04, 0x64, 0x61, 0x74,
	0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x73, 0x68, 0x6f, 0x70, 0x70, 0x79,
	0x5f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x48, 0x6f, 0x6d, 0x65, 0x50, 0x61, 0x67,
	0x65, 0x44, 0x61, 0x74, 0x61, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x5e, 0x0a, 0x16, 0x46,
	0x65, 0x74, 0x63, 0x68, 0x41, 0x62, 0x6f, 0x75, 0x74, 0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x18, 0x0a,
	0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x64, 0x0a, 0x1c, 0x53,
	0x65, 0x6e, 0x64, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x55, 0x73, 0x4d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x12, 0x0a,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x64, 0x61, 0x74,
	0x61, 0x32, 0xc8, 0x02, 0x0a, 0x0e, 0x48, 0x6f, 0x6d, 0x65, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x12, 0x5e, 0x0a, 0x0d, 0x46, 0x65, 0x74, 0x63, 0x68, 0x48, 0x6f, 0x6d,
	0x65, 0x50, 0x61, 0x67, 0x65, 0x12, 0x24, 0x2e, 0x73, 0x68, 0x6f, 0x70, 0x70, 0x79, 0x5f, 0x62,
	0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x46, 0x65, 0x74, 0x63, 0x68, 0x48, 0x6f, 0x6d, 0x65,
	0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x73, 0x68,
	0x6f, 0x70, 0x70, 0x79, 0x5f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x46, 0x65, 0x74,
	0x63, 0x68, 0x48, 0x6f, 0x6d, 0x65, 0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x12, 0x61, 0x0a, 0x0e, 0x46, 0x65, 0x74, 0x63, 0x68, 0x41, 0x62, 0x6f,
	0x75, 0x74, 0x50, 0x61, 0x67, 0x65, 0x12, 0x25, 0x2e, 0x73, 0x68, 0x6f, 0x70, 0x70, 0x79, 0x5f,
	0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x46, 0x65, 0x74, 0x63, 0x68, 0x41, 0x62, 0x6f,
	0x75, 0x74, 0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e,
	0x73, 0x68, 0x6f, 0x70, 0x70, 0x79, 0x5f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x46,
	0x65, 0x74, 0x63, 0x68, 0x41, 0x62, 0x6f, 0x75, 0x74, 0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x73, 0x0a, 0x14, 0x53, 0x65, 0x6e, 0x64, 0x43,
	0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x55, 0x73, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12,
	0x2b, 0x2e, 0x73, 0x68, 0x6f, 0x70, 0x70, 0x79, 0x5f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64,
	0x2e, 0x53, 0x65, 0x6e, 0x64, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x55, 0x73, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x73,
	0x68, 0x6f, 0x70, 0x70, 0x79, 0x5f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65,
	0x6e, 0x64, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x55, 0x73, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x04, 0x5a, 0x02,
	0x2e, 0x2f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_home_proto_rawDescOnce sync.Once
	file_home_proto_rawDescData = file_home_proto_rawDesc
)

func file_home_proto_rawDescGZIP() []byte {
	file_home_proto_rawDescOnce.Do(func() {
		file_home_proto_rawDescData = protoimpl.X.CompressGZIP(file_home_proto_rawDescData)
	})
	return file_home_proto_rawDescData
}

var file_home_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_home_proto_goTypes = []interface{}{
	(*ProductData)(nil),                  // 0: shoppy_backend.ProductData
	(*CategoryData)(nil),                 // 1: shoppy_backend.CategoryData
	(*HomePageData)(nil),                 // 2: shoppy_backend.HomePageData
	(*FetchHomePageRequest)(nil),         // 3: shoppy_backend.FetchHomePageRequest
	(*FetchAboutPageRequest)(nil),        // 4: shoppy_backend.FetchAboutPageRequest
	(*SendContactUsMessageRequest)(nil),  // 5: shoppy_backend.SendContactUsMessageRequest
	(*FetchHomePageResponse)(nil),        // 6: shoppy_backend.FetchHomePageResponse
	(*FetchAboutPageResponse)(nil),       // 7: shoppy_backend.FetchAboutPageResponse
	(*SendContactUsMessageResponse)(nil), // 8: shoppy_backend.SendContactUsMessageResponse
}
var file_home_proto_depIdxs = []int32{
	0, // 0: shoppy_backend.HomePageData.products:type_name -> shoppy_backend.ProductData
	1, // 1: shoppy_backend.HomePageData.categories:type_name -> shoppy_backend.CategoryData
	2, // 2: shoppy_backend.FetchHomePageResponse.data:type_name -> shoppy_backend.HomePageData
	3, // 3: shoppy_backend.HomeOperations.FetchHomePage:input_type -> shoppy_backend.FetchHomePageRequest
	4, // 4: shoppy_backend.HomeOperations.FetchAboutPage:input_type -> shoppy_backend.FetchAboutPageRequest
	5, // 5: shoppy_backend.HomeOperations.SendContactUsMessage:input_type -> shoppy_backend.SendContactUsMessageRequest
	6, // 6: shoppy_backend.HomeOperations.FetchHomePage:output_type -> shoppy_backend.FetchHomePageResponse
	7, // 7: shoppy_backend.HomeOperations.FetchAboutPage:output_type -> shoppy_backend.FetchAboutPageResponse
	8, // 8: shoppy_backend.HomeOperations.SendContactUsMessage:output_type -> shoppy_backend.SendContactUsMessageResponse
	6, // [6:9] is the sub-list for method output_type
	3, // [3:6] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_home_proto_init() }
func file_home_proto_init() {
	if File_home_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_home_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProductData); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_home_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CategoryData); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_home_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HomePageData); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_home_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FetchHomePageRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_home_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FetchAboutPageRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_home_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendContactUsMessageRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_home_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FetchHomePageResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_home_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FetchAboutPageResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_home_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendContactUsMessageResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_home_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_home_proto_goTypes,
		DependencyIndexes: file_home_proto_depIdxs,
		MessageInfos:      file_home_proto_msgTypes,
	}.Build()
	File_home_proto = out.File
	file_home_proto_rawDesc = nil
	file_home_proto_goTypes = nil
	file_home_proto_depIdxs = nil
}
