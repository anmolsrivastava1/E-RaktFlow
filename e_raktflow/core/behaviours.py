# django imports
from django.db import models
from django.utils.translation import gettext_lazy as _

# third party imports
import uuid
from model_utils.models import TimeStampedModel

# local imports
from .managers import StatusMixinManager
from .validators import validator_ascii
from .utils import create_slug


class StatusMixin(models.Model):
    is_active = models.BooleanField(_("active"), default=True, blank=False, null=False)
    is_deleted = models.BooleanField(
        _("deleted"), default=True, blank=False, null=False
    )
    objects = StatusMixinManager

    def activate(self):
        if not self.is_active:
            self.is_active = True
            self.save()

    def deactivate(self):
        if self.is_active:
            self.is_active = False
            self.save()

    def remove(self):
        if not self.is_deleted:
            self.is_deleted = True
            self.save()

    def has_changed(self, field):
        model = self.__class__.__name__
        return getattr(self, field) != getattr(
            self, "_" + model + "__original_" + field
        )

    def save(self, *args, **kwargs):
        if self.is_active:
            self.is_deleted = False
        super(StatusMixin, self).save(*args, **kwargs)

    class Meta:
        abstract = True


class AddressMixin(models.Model):
    address = models.TextField(
        _("Address Line 1"),
        max_length=100,
        blank=True,
        null=True,
        validators=[validator_ascii],
        help_text="The length of this field can't be longer than 100",
    )
    state = models.ForeignKey("core.State", models.SET_NULL, blank=True, null=True)
    city = models.ForeignKey("core.City", models.SET_NULL, blank=True, null=True)
    pin_code = models.ForeignKey("core.PINCode", models.SET_NULL, blank=True, null=True)

    def get_address(self):
        address = ""
        if self.address:
            address += self.address
        if self.city and self.city.name:
            address += ", " + self.city.name
            if self.city.state and self.city.state.name:
                address += ", " + self.city.state.name
                if self.city.state.country and self.city.state.country.name:
                    address += ", " + self.city.state.country.name
        if self.pin_code:
            address += " - " + str(self.pin_code.value)

        if address == "":
            return None
        else:
            return "".join([i if ord(i) < 128 else " " for i in address])

    class Meta:
        abstract = True


class UUIDMixin(TimeStampedModel):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, db_index=True)

    class Meta:
        abstract = True


class SlugMixin(models.Model):
    slug = models.CharField(
        max_length=60,
        help_text="Maximum 50 characters",
        db_index=True,
        blank=True,
        null=True,
    )

    class Meta:
        abstract = True


class ProfileMixin(models.Model):
    first_name = models.CharField(
        _("First name"),
        max_length=150,
        help_text="field length cannot be greater than 150 characters",
    )
    last_name = models.CharField(
        _("Last name"),
        max_length=150,
        help_text="field length cannot be greater than 150 characters",
    )
    email = models.EmailField(
        _("email"), max_length=150, help_text="field length cannot be greater than 150"
    )

    class Meta:
        abstract = True
