from django.contrib import admin
from django.urls import reverse
from django.utils.safestring import mark_safe 
from .models import User, Category, Product, Order, Message
import json

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'products_count', 'created_at', 'action_buttons')
    search_fields = ['name']

    def action_buttons(self, obj):
        edit_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_category_change", args=(obj.pk,)),
            'Edit'
        )
        delete_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_category_delete", args=(obj.pk,)),
            'Delete'
        )
        return mark_safe(edit_link + ' | ' + delete_link)
    action_buttons.short_description = 'actions'

class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'message', 'created_at', 'action_buttons')
    list_filter = ['created_at']
    search_fields = ['name', 'email', 'body']

    def message(self, obj):
        return f'{obj.body[:100]} ...'
    def action_buttons(self, obj):
        edit_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_message_change", args=(obj.pk,)),
            'Edit'
        )
        delete_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_message_delete", args=(obj.pk,)),
            'Delete'
        )
        return mark_safe(edit_link + ' | ' + delete_link)
    action_buttons.short_description = 'actions'

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'code', 'user_link', '_total', 'items_count', '_status', 'shipped_at', 'created_at', 'action_buttons')
    list_filter = ['status', 'created_at']
    search_fields = ['code', 'user__name', 'user__email']
    exclude = ['items']
    readonly_fields = ['total', 'items_count', 'order_items']

    def order_items(self, obj):
        order_items = json.loads(obj.items)
        items = ""
        index = 1

        for item in order_items:
            print(item['product_name'])
            product_link = reverse("admin:dashboard_product_change", args=(item['product_id'],))
            
            items += f'''
                <tr>
                    <td>{index}</td>
                    <td><a href="{product_link}">{item['product_name']}</a></td>
                    <td>${item['price']}</td>
                    <td>{item['quantity']}</td>
                </tr>
            '''

            index += 1

        return mark_safe(f'''
            <table>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                {items}
            </table>
        ''')
    def _total(self, obj):
        return f'${obj.total}'
    def _status(self, obj):
        return obj.status.title()
    def _items(self, obj):
        return 'test'
    def user_link(self, obj):
        return mark_safe('<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_user_change", args=(obj.user.pk,)),
            obj.user.name
        ))
    user_link.short_description = 'user'
    def action_buttons(self, obj):
        edit_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_order_change", args=(obj.pk,)),
            'Edit'
        )
        delete_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_order_delete", args=(obj.pk,)),
            'Delete'
        )
        return mark_safe(edit_link + ' | ' + delete_link)
    action_buttons.short_description = 'actions'

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', '_price', 'stock', 'created_at', 'action_buttons')
    list_filter = ['category', 'created_at']
    search_fields = ['name']

    def _price(self, obj):
        return f'${obj.price}'
    def action_buttons(self, obj):
        edit_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_product_change", args=(obj.pk,)),
            'Edit'
        )
        delete_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_product_delete", args=(obj.pk,)),
            'Delete'
        )
        return mark_safe(edit_link + ' | ' + delete_link)
    action_buttons.short_description = 'actions'
    
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'orders_count', 'address', 'joined_at', 'action_buttons')
    readonly_fields = ['orders_count']
    list_filter = ['created_at']
    search_fields = ['name']
    
    def joined_at(self, obj):
        return obj.created_at
    def action_buttons(self, obj):
        edit_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_user_change", args=(obj.pk,)),
            'Edit'
        )
        delete_link = '<a href="{}">{}</a>'.format(
            reverse("admin:dashboard_user_delete", args=(obj.pk,)),
            'Delete'
        )
        return mark_safe(edit_link + ' | ' + delete_link)
    action_buttons.short_description = 'actions'

admin.site.register(Message, MessageAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(User, UserAdmin)

