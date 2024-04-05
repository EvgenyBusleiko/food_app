# Generated by Django 5.0.3 on 2024-03-29 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=40, unique=True),
        ),
        migrations.AlterField(
            model_name='ingredient',
            name='name',
            field=models.CharField(max_length=80, unique=True),
        ),
    ]
