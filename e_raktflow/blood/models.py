from django.db import models

from e_raktflow.core.behaviours import StatusMixin, UUIDMixin
from e_raktflow.users.models import User

# Create your models here.


class Patient(UUIDMixin, StatusMixin):
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=10)
    age = models.IntegerField()
    mobile = models.CharField(max_length=10)
    blood_group = models.CharField(max_length=10)

    def __str__(self):
        return self.first_name + " " + self.last_name


class BloodRequest(UUIDMixin, StatusMixin):
    blood_group = models.CharField(max_length=10)
    unit = models.IntegerField()
    location = models.CharField(max_length=255)
    requirement_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=10, default="PENDING", null=True, blank=True)
    mobile = models.CharField(max_length=10, null=True, blank=True)
    blood_requester_raiser = models.ForeignKey(User, on_delete=models.PROTECT)
    patient = models.ForeignKey(Patient, on_delete=models.PROTECT)

    def __str__(self):
        return (
            "BY :"
            + self.blood_requester_raiser.first_name
            + " "
            + self.blood_requester_raiser.last_name
        )


class OxygenRequest(UUIDMixin, StatusMixin):
    oxygen_location = models.CharField(max_length=255,null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)
    requirement_date = models.DateField(null=True, blank=True)
    oxygen_status = models.CharField(
        max_length=10, default="PENDING", null=True, blank=True
    )
    oxygen_requester = models.ForeignKey(User, on_delete=models.PROTECT)
    patient = models.ForeignKey(Patient, on_delete=models.PROTECT)

    def __str__(self):
        return (
            "BY :"
            + self.oxygen_requester.first_name
            + " "
            + self.oxygen_requester.last_name
        )
