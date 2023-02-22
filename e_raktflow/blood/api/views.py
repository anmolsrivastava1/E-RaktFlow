from rest_framework import viewsets
from rest_framework.mixins import ListModelMixin, CreateModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from e_raktflow.blood.api.serializers import (
    BloodRequestSerializer,
    PatientSerializer,
)
from e_raktflow.blood.models import BloodRequest
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class RaiseBloodRequest(GenericViewSet, CreateModelMixin, ListModelMixin):
    queryset = BloodRequest.objects.all()
    serializer_class = BloodRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(blood_requester_raiser=self.request.user)

    def create(self, request, *args, **kwargs):
        patient_serializer = PatientSerializer(data=request.data)
        patient_serializer.is_valid(raise_exception=True)
        patient = patient_serializer.create(patient_serializer.validated_data)
        data = request.data.copy()
        data.update({"patient": patient.id, "blood_requester_raiser": request.user.id})

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        blood_request = serializer.create(serializer.validated_data)

        return Response(
            {
                "message": "Blood Request Raised Successfully",
                "data": BloodRequestSerializer(blood_request).data,
            }
        )
