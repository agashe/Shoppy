from django.db import models
from dashboard.api.home_pb2 import *

class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    password = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name
    def orders_count(self):
        return self.order_set.count()
    class Meta:
        db_table = "users"

class Category(models.Model):
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name
    def products_count(self):
        return self.product_set.count()
    class Meta:
        db_table = "categories"
        verbose_name_plural = "categories"

class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default='')
    image = models.FileField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name
    class Meta:
        db_table = "products"

order_statuses = (
    ('pending', 'Pending'),
    ('shipping', 'Shipping'),
    ('done', 'Done'),
    ('cancelled', 'Cancelled'),
)

class Order(models.Model):
    code = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default='')
    status = models.CharField(max_length=200, choices=order_statuses, default=order_statuses[0][0])
    total = models.DecimalField(max_digits=10, decimal_places=2)
    items_count = models.IntegerField()
    shipped_at = models.DateTimeField(blank=True, null=True)
    items = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return 'Order #' + self.code
    class Meta:
        db_table = "orders"

class Message(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name
    class Meta:
        db_table = "messages"
