from rest_framework_simplejwt.tokens import Token, RefreshToken


class CustomToken(Token):
    @classmethod
    def for_user(cls, user):
        token = super().for_user(user)
        token["name"] = user.first_name
        return token


class CustomRefreshToken(RefreshToken, CustomToken):
    pass
