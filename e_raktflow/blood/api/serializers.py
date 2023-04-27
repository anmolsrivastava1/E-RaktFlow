from rest_framework import serializers

from e_raktflow.blood.models import BloodRequest, OxygenRequest, Patient


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = "__all__"


class BloodRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodRequest
        fields = "__all__"

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data["patient"] = PatientSerializer(instance.patient).data

        return data


class OxygenRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = OxygenRequest
        fields = "__all__"

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data["patient"] = PatientSerializer(instance.patient).data

        return data
