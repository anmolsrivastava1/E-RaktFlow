from __future__ import unicode_literals, absolute_import

from django.core.validators import RegexValidator

validator_mobile_number = RegexValidator(
    regex=r"^[1-9]\d{9}$", message="Invalid Mobile Number"
)
validator_ascii = RegexValidator(
    regex=r"^[\x00-\x7F]*$", message="Only ASCII characters allowed"
)