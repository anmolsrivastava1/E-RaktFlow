# Generated by Django 4.0.9 on 2023-04-23 07:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('domains', '0001_initial'),
        ('users', '0003_user_mfa_hash'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='domains.domaintype'),
        ),
    ]
