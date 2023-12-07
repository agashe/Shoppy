# Generated by Django 5.0 on 2023-12-07 10:58

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_alter_category_options_product_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='dashboard.user'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.FileField(upload_to=''),
        ),
    ]
