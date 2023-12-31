# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import dashboard.api.products_pb2 as products__pb2


class ProductOperationsStub(object):
    """*
    Services
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.FetchProducts = channel.unary_unary(
                '/shoppy_backend.ProductOperations/FetchProducts',
                request_serializer=products__pb2.FetchProductsRequest.SerializeToString,
                response_deserializer=products__pb2.FetchProductsResponse.FromString,
                )
        self.FetchProduct = channel.unary_unary(
                '/shoppy_backend.ProductOperations/FetchProduct',
                request_serializer=products__pb2.FetchProductRequest.SerializeToString,
                response_deserializer=products__pb2.FetchProductResponse.FromString,
                )


class ProductOperationsServicer(object):
    """*
    Services
    """

    def FetchProducts(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def FetchProduct(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ProductOperationsServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'FetchProducts': grpc.unary_unary_rpc_method_handler(
                    servicer.FetchProducts,
                    request_deserializer=products__pb2.FetchProductsRequest.FromString,
                    response_serializer=products__pb2.FetchProductsResponse.SerializeToString,
            ),
            'FetchProduct': grpc.unary_unary_rpc_method_handler(
                    servicer.FetchProduct,
                    request_deserializer=products__pb2.FetchProductRequest.FromString,
                    response_serializer=products__pb2.FetchProductResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'shoppy_backend.ProductOperations', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ProductOperations(object):
    """*
    Services
    """

    @staticmethod
    def FetchProducts(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/shoppy_backend.ProductOperations/FetchProducts',
            products__pb2.FetchProductsRequest.SerializeToString,
            products__pb2.FetchProductsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def FetchProduct(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/shoppy_backend.ProductOperations/FetchProduct',
            products__pb2.FetchProductRequest.SerializeToString,
            products__pb2.FetchProductResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
