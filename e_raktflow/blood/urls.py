from django.urls import path
from e_raktflow.blood.api.views import (
    MyRequests,
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
        "get-blood-request/<slug:uuid>/",
        view=RaiseBloodRequest.as_view({"get": "retrieve"}),
        name="retrieve_blood_requests",
    ),
    path(
        "raise-request/oxygen/",
        view=RaiseOxygenRequest.as_view({"post": "create"}),
        name="raise_request_oxygen",
    ),
    path(
        "list-requests/oxygen/",
        view=RaiseOxygenRequest.as_view({"get": "list"}),
        name="list_request_oxygen",
    ),
    path(
        "get-oxygen-request/oxygen/<slug:uuid>/",
        view=RaiseOxygenRequest.as_view({"get": "retrieve"}),
        name="retrieve_oxygen_requests",
    ),
    path(
        "my-requests/",
        view=MyRequests.as_view(),
        name="retrieve_oxygen_requests",
    ),
]
