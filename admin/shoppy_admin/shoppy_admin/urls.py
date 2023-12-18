"""
URL configuration for shoppy_admin project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings 
from django.conf.urls.static import static 
from dashboard.services import *
from dashboard.api.home_pb2_grpc import *
from dashboard.api.users_pb2_grpc import *
from dashboard.api.products_pb2_grpc import *
from dashboard.api.orders_pb2_grpc import *

urlpatterns = [
    path('admin/', admin.site.urls),
]

if settings.DEBUG:     
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

def grpc_handlers(server):
    add_HomeOperationsServicer_to_server(HomeService.as_servicer(), server)
    add_UserOperationsServicer_to_server(UsersService.as_servicer(), server)
    add_ProductOperationsServicer_to_server(ProductsService.as_servicer(), server)
    add_OrdersOperationsServicer_to_server(OrdersService.as_servicer(), server)