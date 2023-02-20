from django.urls import path

# from e_raktflow.users.views import (
#     user_detail_view,
#     user_redirect_view,
#     user_update_view,
# )
from e_raktflow.users.api.views import (
    ResendOtpViewset,
    Test,
    UserLoginViewset,
    UserSignUpViewset,
)

app_name = "users"
urlpatterns = [
    path("signup/", view=UserSignUpViewset.as_view({"post": "create"}), name="signup"),
    path("login/", view=UserLoginViewset.as_view({"post": "create"}), name="login"),
    path(
        "verify-otp/<slug:uuid>/",
        view=UserSignUpViewset.as_view({"patch": "update"}),
        name="verify_otp",
    ),
    path(
        "resend-otp/<slug:uuid>/",
        view=ResendOtpViewset.as_view({"get": "retrieve"}),
        name="verify_otp",
    ),
    path(
        "test/",
        view=Test.as_view({"post": "create"}),
        name="test",
    ),
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    # path("~update/", view=user_update_view, name="update"),
    # path("<str:username>/", view=user_detail_view, name="detail"),
]
