from django_grpc_framework import proto_serializers
from dashboard.api.home_pb2 import *
from dashboard.api.users_pb2 import *
from dashboard.models import *


class ProductProtoSerializer(proto_serializers.ModelProtoSerializer):
    class Meta:
        model = Product
        proto_class = ProductData
        fields = ['id', 'name', 'category', 'image', 'price', 'stock', 'description']

class CategoryProtoSerializer(proto_serializers.ModelProtoSerializer):
    class Meta:
        model = Category
        proto_class = CategoryData
        fields = ['id', 'name']

class UserProtoSerializer(proto_serializers.ModelProtoSerializer):
    class Meta:
        model = User
        proto_class = UserData
        fields = ['id', 'name', 'email', 'address', 'password']