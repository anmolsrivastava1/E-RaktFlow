from django.contrib import admin

# Register your models here.
from e_raktflow.domains.models import *

admin.site.register(Domain)
admin.site.register(DomainType)
admin.site.register(DomainOxygen)
admin.site.register(DomainBlood)
