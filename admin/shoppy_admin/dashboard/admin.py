from django.contrib import admin
from .models import User, Category, Product, Order, Message

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_at')

class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'message', 'created_at')
    def message(self, obj):
        return f'{obj.body[:100]} ...'

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'code', '_total', 'items_count', 'status', 'shipped_at', 'created_at')
    def _total(self, obj):
        return f'${obj.total}'

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', '_price', 'stock', 'created_at')
    def _price(self, obj):
        return f'${obj.price}'
    
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'address', 'joined_at')
    def joined_at(self, obj):
        return obj.created_at

admin.site.register(Message, MessageAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(User, UserAdmin)

