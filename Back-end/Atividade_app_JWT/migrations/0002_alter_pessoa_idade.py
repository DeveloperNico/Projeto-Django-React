# Generated by Django 5.1.7 on 2025-04-03 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Atividade_app_JWT', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pessoa',
            name='idade',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
