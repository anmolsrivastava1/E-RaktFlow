from rest_framework import serializers

from e_raktflow.domains.models import DomainType, Domain, DomainBlood, DomainOxygen


class DomainSerializer(serializers.ModelSerializer):
    type = serializers.SlugRelatedField(
        queryset=DomainType.objects.all(), slug_field="slug"
    )

    class Meta:
        model = Domain
        fields = "__all__"


class DomainBloodSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomainBlood
        fields = "__all__"


class DomainOxygenSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomainOxygen
        fields = "__all__"
