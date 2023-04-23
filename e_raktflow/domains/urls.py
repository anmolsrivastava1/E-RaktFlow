from django.urls import path

from e_raktflow.domains.api.views import DomainView


app_name = "domain"
urlpatterns = [
    path(
        "",
        view=DomainView.as_view({"post": "create"}),
        name="domain",
    ),
    path(
        "create-blood/",
        view=DomainView.as_view({"post": "create_domain_blood"}),
        name="domain_blood",
    ),
    path(
        "create-oxygen/",
        view=DomainView.as_view({"post": "create_domain_oxygen"}),
        name="domain_oxygen",
    ),
]
