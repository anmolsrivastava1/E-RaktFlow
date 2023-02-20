from django.db import models

from e_raktflow.core.behaviours import StatusMixin, UUIDMixin

# Create your models here.


# class BloodRequest(UUIDMixin, StatusMixin):
#     blood_group = models.CharField(max_length=10)
#     blood_unit = models.CharField(max_length=10)
#     blood_purpose = models.CharField(max_length=10)
#     blood_location = models.CharField(max_length=10)
#     blood_date = models.DateField()
#     blood_status = models.CharField(max_length=10)
#     blood_requester = models.CharField(max_length=10)

#     def __str__(self):
#         return self.blood_group

# class OxygenRequest(UUIDMixin, StatusMixin):
#     oxygen_location = models.CharField(max_length=10)
#     oxygen_date = models.DateField()
#     oxygen_status = models.CharField(max_length=10)
#     oxygen_requester = models.CharField(max_length=10)

#     def __str__(self):
#         return self.oxygen_location