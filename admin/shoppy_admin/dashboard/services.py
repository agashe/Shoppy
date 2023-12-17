from django_grpc_framework import generics
from dashboard.api.home_pb2 import *
from dashboard.api.users_pb2 import *
from dashboard.models import *
from dashboard.serializers import *


class HomeService(generics.ModelService):
    def FetchHomePage(self, request, context):
        latest_products = Product.objects.all().order_by('-created_at')
        categories = Category.objects.all()

        products_serializer = ProductProtoSerializer(latest_products, many=True)
        categories_serializer = CategoryProtoSerializer(categories, many=True)

        return FetchHomePageResponse(
            status=True,
            message="Homepage's data was loaded successfully !",
            data=HomePageData(
                products=products_serializer.message,
                categories=categories_serializer.message
            )
        )

    def FetchAboutPage(self, request, context):
        return FetchAboutPageResponse(
            status=True,
            message="About page was loaded successfully !",
            data="About page content"
        )

    def SendContactUsMessage(self, request, context):
        message = Message.objects.create(
            name=request.name,
            email=request.email,
            body=request.body
        )

        return SendContactUsMessageResponse(
            status=True,
            message="Your message was sent successfully !",
            data=""
        )

class UsersService(generics.ModelService):
    def GetUser(self, request, context):
        user = User.objects.get(email=request.email)
        users_serializer = UserProtoSerializer(user)

        return GetUserResponse(
            status=True,
            message="User's account was loaded successfully !",
            data=users_serializer.message
        )

    def CreateUser(self, request, context):
        user = User.objects.create(
            name=request.name,
            email=request.email,
            address=request.address,
            password=request.password
        )

        users_serializer = UserProtoSerializer(user)

        return CreateUserResponse(
            status=True,
            message="User's account was created successfully !",
            data=users_serializer.message
        )

    def UpdateUser(self, request, context):
        user = User.objects.get(id=request.id)

        user.name = request.name
        user.email = request.email
        user.address = request.address
        
        if request.password != '':
            user.password = request.password

        user.save()

        users_serializer = UserProtoSerializer(user)

        return UpdateUserResponse(
            status=True,
            message="User's account was updated successfully !",
            data=users_serializer.message
        )