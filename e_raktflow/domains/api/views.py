from rest_framework.mixins import ListModelMixin, CreateModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from e_raktflow.domains.api.serializers import DomainBloodSerializer, DomainOxygenSerializer, DomainSerializer
from e_raktflow.domains.models import Domain, DomainBlood, DomainOxygen, DomainType


class DomainView(GenericViewSet, CreateModelMixin):
    queryset = Domain.objects.all()
    serializer_class = DomainSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data.update({"user": request.user.id, "type": request.user.user_type.slug})
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        domain = serializer.create(serializer.validated_data)
        domain.is_active = True
        domain.save()

        return Response(
            {
                "message": "Domain Object Created Successfully",
                "data": self.serializer_class(domain).data,
            }
        )

    def create_domain_blood(self, request, *args, **kwargs):
        domain = self.get_queryset().first()

        data = request.data.copy()
        data.update({"domain": domain.pk})
        serializer = DomainBloodSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        domain_blood = serializer.create(serializer.validated_data)
        domain_blood.is_active = True
        domain_blood.save()

        return Response(
            {
                "message": "Domain Blood Object Created Successfully",
                "data": DomainBloodSerializer(domain_blood).data,
            }
        )

    def create_domain_oxygen(self, request, *args, **kwargs):
        domain = self.get_queryset().first()
        
        data = request.data.copy()
        data.update({"domain": domain.pk})
        serializer = DomainOxygenSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        domain_oxygen = serializer.create(serializer.validated_data)
        domain_oxygen.is_active = True
        domain_oxygen.save()

        return Response(
            {
                "message": "Domain Oxygen Object Created Successfully",
                "data": DomainBloodSerializer(domain_oxygen).data,
            }
        )
