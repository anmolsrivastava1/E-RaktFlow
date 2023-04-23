from django.db import models

from e_raktflow.core.behaviours import SlugMixin, StatusMixin, UUIDMixin
from e_raktflow.core.utils import create_slug
from e_raktflow.users.models import User

# Create your models here.


class DomainType(SlugMixin, StatusMixin):
    title = models.CharField(
        max_length=50, help_text="Maximum length is 50", verbose_name="Domain Title"
    )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = create_slug(self)
        if self.slug:
            self.slug = self.slug.replace(" ", "")

        super(DomainType, self).save(*args, **kwargs)


class Domain(UUIDMixin, StatusMixin):
    user = models.ForeignKey(User, on_delete=models.PROTECT, unique=True)
    type = models.ForeignKey(DomainType, on_delete=models.PROTECT, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)


class DomainBlood(UUIDMixin, StatusMixin):
    domain = models.ForeignKey(
        Domain,
        on_delete=models.PROTECT,
        related_name="domain_blood",
        related_query_name="domain_blood",
    )
    blood_group = models.CharField(max_length=10, null=True, blank=True)
    unit = models.IntegerField(null=True, blank=True)


class DomainOxygen(UUIDMixin, StatusMixin):
    domain = models.ForeignKey(
        Domain,
        on_delete=models.PROTECT,
        related_name="domain_oxygen",
        related_query_name="domain_oxygen",
    )
    quantity = models.IntegerField(null=True, blank=True)
