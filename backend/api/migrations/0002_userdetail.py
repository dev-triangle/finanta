# Generated by Django 4.0.6 on 2022-10-27 07:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age', models.IntegerField()),
                ('job', models.CharField(max_length=100)),
                ('t_income', models.FloatField()),
                ('nt_income', models.FloatField()),
                ('tax_percentage', models.FloatField()),
                ('miscellaneous_expenditure', models.FloatField()),
                ('place', models.CharField(max_length=100)),
                ('user_foreign', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
