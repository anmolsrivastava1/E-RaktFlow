from django.contrib import admin

# Register your models here.
from e_raktflow.blood.models import *

admin.site.register(Patient)
admin.site.register(BloodRequest)
