import pyotp
from rest_framework import serializers
from e_raktflow.core.exceptions import APIExceptionBadRequest
from e_raktflow.users.email import send_email
from e_raktflow.users.models import User


class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "password", "uuid"]
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
            "email": {"required": True},
            "password": {"required": True, "write_only": True},
        }

    def create(self, validated_data):
        user = super().create(validated_data)

        user.set_password(validated_data["password"])
        user.is_active = True
        user.is_verified = False
        user.mfa_hash = pyotp.random_base32()
        user.save()
        totp = pyotp.TOTP(s=user.mfa_hash, interval=300)

        send_email(
            subject="Verify your email",
            to=[user.email],
            message="Your OTP is {}".format(totp.now()),
        )
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "uuid"]


class UserVerifyOtpSerializer(serializers.Serializer):
    email = serializers.CharField(required=True)
    otp = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ["email", "otp"]

    def update(self, instance, validated_data):
        totp = pyotp.TOTP(s=instance.mfa_hash, interval=300)
        if totp.verify(validated_data["otp"]):
            instance.is_verified = True
            instance.save()
        else:
            raise APIExceptionBadRequest({"otp": "Invalid OTP"})

        return instance


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=False, write_only=True)
    message = serializers.SerializerMethodField(read_only=True)
    tokens = serializers.SerializerMethodField(read_only=True)
    uuid = serializers.SerializerMethodField(read_only=True)

    def get_message(self, obj):
        return self.context["message"]

    def get_tokens(self, obj):
        return self.context.get("tokens")

    def get_uuid(self, obj):
        return self.context["user"].uuid

    def create(self, validated_data):
        email = validated_data.get("email", None)
        password = validated_data.get("password", None)
        try:
            user = User.objects.get(email=email)
            self.context["user"] = user
        except User.DoesNotExist:
            raise APIExceptionBadRequest({"email": "User does not exist"})

        if not password:
            user.mfa_hash = pyotp.random_base32()
            user.save()
            totp = pyotp.TOTP(s=user.mfa_hash, interval=300)

            send_email(
                subject="Login OTP",
                to=[user.email],
                message="Your OTP is {}".format(totp.now()),
            )
            self.context["message"] = "Otp has been sent to your email."
        else:
            if user.check_password(password):
                self.context["message"] = "Login successful"
                self.context["tokens"] = user.tokens()
            else:
                raise APIExceptionBadRequest({"password": "Invalid password"})

        return user
