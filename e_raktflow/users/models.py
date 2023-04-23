from random import randint
from django.contrib.auth.models import AbstractUser
from django.db.models import (
    CharField,
    BooleanField,
    ForeignKey,
    PROTECT,
    UniqueConstraint,
    OneToOneField,
)
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from e_raktflow.core.behaviours import StatusMixin, UUIDMixin
from rest_framework_simplejwt.tokens import RefreshToken

from e_raktflow.core.tokens import CustomRefreshToken


class User(AbstractUser, UUIDMixin, StatusMixin):
    """
    Default custom user model for E-Raktflow.
    If adding fields that need to be filled at user signup,
    check forms.SignupForm and forms.SocialSignupForms accordingly.
    """

    #: First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)
    # first_name = None  # type: ignore
    # last_name = None  # type: ignore
    is_verified = BooleanField(default=False)
    mfa_hash = CharField(max_length=50, null=True, blank=True)
    user_type = ForeignKey(
        "domains.DomainType",
        null=True,
        blank=True,
        on_delete=PROTECT,
    )

    # def get_absolute_url(self):
    #     """Get url for user's detail view.

    #     Returns:
    #         str: URL for user detail.

    #     """
    #     return reverse("users:detail", kwargs={"username": self.username})

    def tokens(self):
        refresh = CustomRefreshToken.for_user(self)
        return {"refresh": str(refresh), "access": str(refresh.access_token)}

    def save(self, *args, **kwargs):
        if not self.username:
            username = self.first_name.lower() + "." + self.last_name.lower()
            is_valid = False

            while not is_valid:
                try:
                    User.objects.get(username=username)
                    username += str(randint(0, 9))
                except User.DoesNotExist:
                    is_valid = True
            self.username = username

        super().save(*args, **kwargs)
