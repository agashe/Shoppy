from django_grpc_framework import generics
from dashboard.api.home_pb2 import *
from dashboard.api.users_pb2 import *
from dashboard.api.products_pb2 import *
from dashboard.models import *
from dashboard.serializers import *
import urllib.parse
import math
import json


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
    
class ProductsService(generics.ModelService):
    def FetchProducts(self, request, context):
        pages = 1
        per_page = 12

        if request.category_id != 0:            
            products = Product.objects.filter(category__pk=request.category_id)
        elif request.search_keyword != '':
            products = Product.objects.all().filter(name__icontains=urllib.parse.unquote(request.search_keyword))
        else:
            products = Product.objects.all()

        categories = Category.objects.all()

        products_serializer = ProductSerializer(products, many=True)
        categories_serializer = CategorySerializer(categories, many=True)

        if len(products) > per_page:
            pages = (math.ceil(len(products) / per_page))

        return FetchProductsResponse(
            status=True,
            message="Products data was loaded successfully !",
            data=ProductsPageData(
                products=products_serializer.message,
                categories=categories_serializer.message,
                pages=pages
            )
        )

    def FetchProduct(self, request, context):
        product = Product.objects.get(pk=request.id)
        products_serializer = ProductSerializer(product)

        return FetchProductResponse(
            status=True,
            message="Product's data was loaded successfully !",
            data=products_serializer.message
        )

class OrdersService(generics.ModelService):
    def FetchOrders(self, request, context):
        pages = 1
        per_page = 10
        
        orders = Order.objects.filter(user__pk=request.user_id)
        orders_serializer = OrderProtoSerializer(orders, many=True)

        if len(orders) > per_page:
            pages = (math.ceil(len(orders) / per_page))

        return FetchOrdersResponse(
            status=True,
            message="Orders list was loaded successfully !",
            data=OrdersPageData(
                orders=orders_serializer.message,
                pages=pages
            )
        )

    def FetchOrder(self, request, context):
        order = Order.objects.get(user__pk=request.user_id, pk=request.order_id)
        orders_serializer = OrderProtoSerializer(order)

        return FetchOrderResponse(
            status=True,
            message="Order was created successfully !",
            data=orders_serializer.message
        )

    def CreateOrder(self, request, context):
        items = json.loads(request.items)

        total = 0
        for item in items:
            total += float(item['price'])
        
        user = User.objects.get(pk=request.user_id)

        order = Order.objects.create(
            code="",
            user=user,
            total = total,
            items_count = len(items),
            items = request.items
        )
        
        orders_serializer = OrderProtoSerializer(order)

        return CreateOrderResponse(
            status=True,
            message="Order was created successfully !",
            data=orders_serializer.message
        )