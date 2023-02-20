import pyotp
from rest_framework import viewsets
from rest_framework.mixins import RetrieveModelMixin, CreateModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from e_raktflow.users.api.serializers import (
    UserLoginSerializer,
    UserSerializer,
    UserSignUpSerializer,
    UserVerifyOtpSerializer,
)
from e_raktflow.users.email import send_email

from e_raktflow.users.models import User
from rest_framework.response import Response

from rest_framework_simplejwt.authentication import JWTAuthentication


class UserSignUpViewset(GenericViewSet, CreateModelMixin, UpdateModelMixin):
    queryset = User.objects.all()
    # serializer_class = UserSignUpSerializer
    lookup_field = "uuid"

    def get_serializer_class(self):
        if self.action == "create":
            return UserSignUpSerializer
        elif self.action == "update":
            return UserVerifyOtpSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.update(instance, serializer.validated_data)
        data = UserSerializer(instance).data
        return Response({"user": data, "token": instance.tokens()})


class UserLoginViewset(GenericViewSet, CreateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserLoginSerializer


class ResendOtpViewset(GenericViewSet, RetrieveModelMixin):
    queryset = User.objects.all()
    lookup_field = "uuid"

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.mfa_hash = pyotp.random_base32()
        instance.save()
        totp = pyotp.TOTP(s=instance.mfa_hash, interval=300)

        send_email(
            subject="Resend Otp",
            to=[instance.email],
            message="Your OTP is {}".format(totp.now()),
        )
        return Response({"message": "OTP sent successfully"})


# class Test(GenericViewSet, CreateModelMixin):
#     queryset = User.objects.all()
#     serializer_class = UserSignUpSerializer
#     authentication_classes = (JWTAuthentication,)

#     def create(self, request, *args, **kwargs):
#         import ipdb

#         ipdb.set_trace()
#         return Response({"test": "test"})
