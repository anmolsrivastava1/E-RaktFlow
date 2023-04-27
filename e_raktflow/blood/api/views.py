from rest_framework import viewsets
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    UpdateModelMixin,
    RetrieveModelMixin,
)
from rest_framework.viewsets import GenericViewSet
from e_raktflow.blood.api.serializers import (
    BloodRequestSerializer,
    OxygenRequestSerializer,
    PatientSerializer,
)
from e_raktflow.blood.models import BloodRequest, OxygenRequest
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class RaiseBloodRequest(
    GenericViewSet, CreateModelMixin, ListModelMixin, RetrieveModelMixin
):
    queryset = BloodRequest.objects.all()
    serializer_class = BloodRequestSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "uuid"
    lookup_url_kwarg = "uuid"

    def get_queryset(self):
        return self.queryset.exclude(blood_requester_raiser=self.request.user)

    def create(self, request, *args, **kwargs):
        patient_serializer = PatientSerializer(data=request.data)
        patient_serializer.is_valid(raise_exception=True)
        patient = patient_serializer.create(patient_serializer.validated_data)
        data = request.data.copy()
        data.update({"patient": patient.id, "blood_requester_raiser": request.user.id})

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        blood_request = serializer.create(serializer.validated_data)
        blood_request.is_active = True
        blood_request.save()

        return Response(
            {
                "message": "Blood Request Raised Successfully",
                "data": BloodRequestSerializer(blood_request).data,
            }
        )


class RaiseOxygenRequest(
    GenericViewSet, CreateModelMixin, ListModelMixin, RetrieveModelMixin
):
    queryset = OxygenRequest.objects.all()
    serializer_class = OxygenRequestSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "uuid"
    lookup_url_kwarg = "uuid"

    def get_queryset(self):
        return self.queryset.exclude(oxygen_requester=self.request.user)

    def create(self, request, *args, **kwargs):
        patient_serializer = PatientSerializer(data=request.data)
        patient_serializer.is_valid(raise_exception=True)
        patient = patient_serializer.create(patient_serializer.validated_data)
        data = request.data.copy()
        data.update({"patient": patient.id, "oxygen_requester": request.user.id})

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        oxygen_request = serializer.create(serializer.validated_data)
        oxygen_request.is_active = True
        oxygen_request.save()

        return Response(
            {
                "message": "Blood Request Raised Successfully",
                "data": self.serializer_class(oxygen_request).data,
            }
        )


class MyRequests(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        blood = BloodRequest.objects.filter(blood_requester_raiser=request.user)
        oxygen = OxygenRequest.objects.filter(oxygen_requester=request.user)

        return Response(
            {
                "message": "Blood Request Raised Successfully",
                "data": {
                    "blood_requests": BloodRequestSerializer(blood, many=True).data,
                    "oxygen_requests": OxygenRequestSerializer(oxygen, many=True).data,
                },
            }
        )
