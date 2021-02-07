from rest_framework import serializers
from event.models import (
    Category,
    Favorites,
    Location,
    MySchedule,
    Sponsor,
    Vendor,
    VendorDetail,
)


class MyScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = MySchedule
        fields = "__all__"


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = "__all__"


class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"


class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = VendorDetail
        fields = "__all__"


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = "__all__"
