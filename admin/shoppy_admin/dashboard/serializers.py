from django.contrib.auth.models import User
from django_grpc_framework import proto_serializers
from dashboard.api.home_pb2 import *


# class UserProtoSerializer(proto_serializers.ModelProtoSerializer):
#     class Meta:
#         model = User
#         proto_class = home_pb2.User
#         fields = ['id', 'username', 'email', 'groups']