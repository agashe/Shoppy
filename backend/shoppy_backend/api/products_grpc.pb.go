// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.25.1
// source: products.proto

package __

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ProductOperationsClient is the client API for ProductOperations service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProductOperationsClient interface {
	FetchProducts(ctx context.Context, in *FetchProductsRequest, opts ...grpc.CallOption) (*FetchProductsResponse, error)
	FetchProduct(ctx context.Context, in *FetchProductRequest, opts ...grpc.CallOption) (*FetchProductResponse, error)
}

type productOperationsClient struct {
	cc grpc.ClientConnInterface
}

func NewProductOperationsClient(cc grpc.ClientConnInterface) ProductOperationsClient {
	return &productOperationsClient{cc}
}

func (c *productOperationsClient) FetchProducts(ctx context.Context, in *FetchProductsRequest, opts ...grpc.CallOption) (*FetchProductsResponse, error) {
	out := new(FetchProductsResponse)
	err := c.cc.Invoke(ctx, "/shoppy_backend.ProductOperations/FetchProducts", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productOperationsClient) FetchProduct(ctx context.Context, in *FetchProductRequest, opts ...grpc.CallOption) (*FetchProductResponse, error) {
	out := new(FetchProductResponse)
	err := c.cc.Invoke(ctx, "/shoppy_backend.ProductOperations/FetchProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProductOperationsServer is the server API for ProductOperations service.
// All implementations must embed UnimplementedProductOperationsServer
// for forward compatibility
type ProductOperationsServer interface {
	FetchProducts(context.Context, *FetchProductsRequest) (*FetchProductsResponse, error)
	FetchProduct(context.Context, *FetchProductRequest) (*FetchProductResponse, error)
	mustEmbedUnimplementedProductOperationsServer()
}

// UnimplementedProductOperationsServer must be embedded to have forward compatible implementations.
type UnimplementedProductOperationsServer struct {
}

func (UnimplementedProductOperationsServer) FetchProducts(context.Context, *FetchProductsRequest) (*FetchProductsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FetchProducts not implemented")
}
func (UnimplementedProductOperationsServer) FetchProduct(context.Context, *FetchProductRequest) (*FetchProductResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FetchProduct not implemented")
}
func (UnimplementedProductOperationsServer) mustEmbedUnimplementedProductOperationsServer() {}

// UnsafeProductOperationsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProductOperationsServer will
// result in compilation errors.
type UnsafeProductOperationsServer interface {
	mustEmbedUnimplementedProductOperationsServer()
}

func RegisterProductOperationsServer(s grpc.ServiceRegistrar, srv ProductOperationsServer) {
	s.RegisterService(&ProductOperations_ServiceDesc, srv)
}

func _ProductOperations_FetchProducts_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FetchProductsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductOperationsServer).FetchProducts(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/shoppy_backend.ProductOperations/FetchProducts",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductOperationsServer).FetchProducts(ctx, req.(*FetchProductsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductOperations_FetchProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FetchProductRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductOperationsServer).FetchProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/shoppy_backend.ProductOperations/FetchProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductOperationsServer).FetchProduct(ctx, req.(*FetchProductRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ProductOperations_ServiceDesc is the grpc.ServiceDesc for ProductOperations service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ProductOperations_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "shoppy_backend.ProductOperations",
	HandlerType: (*ProductOperationsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "FetchProducts",
			Handler:    _ProductOperations_FetchProducts_Handler,
		},
		{
			MethodName: "FetchProduct",
			Handler:    _ProductOperations_FetchProduct_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "products.proto",
}
