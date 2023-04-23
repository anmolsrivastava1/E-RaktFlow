from django.urls import path
from e_raktflow.blood.api.views import (
    RaiseBloodRequest,
    RaiseOxygenRequest,
)

app_name = "blood"
urlpatterns = [
    path(
        "raise-request/",
        view=RaiseBloodRequest.as_view({"post": "create"}),
        name="raise_request",
    ),
    path(
        "list-requests",
        view=RaiseBloodRequest.as_view({"get": "list"}),
        name="list_requests",
    ),
    path(
        "raise-request/oxygen/",
        view=RaiseOxygenRequest.as_view({"post": "create"}),
        name="raise_request_oxygen",
    ),
]
