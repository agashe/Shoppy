from django.contrib.auth.models import User
from django_grpc_framework import generics
from dashboard.api.home_pb2 import *
from dashboard.models import *


class HomeService(generics.ModelService):
    def FetchHomePage(self, request, context):
        return FetchHomePageResponse(
            status=True,
            message="Homepage's data was loaded successfully !",
            data=HomePageData(
                products=[],
                categories=[]
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