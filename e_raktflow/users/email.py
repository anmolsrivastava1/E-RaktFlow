from django.core.mail import EmailMessage
from typing import List


def send_email(subject: str, message: str, to: List):
    email = EmailMessage(subject=subject, body=message, to=to)

    email.send()
