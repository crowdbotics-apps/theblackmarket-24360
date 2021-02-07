from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CategoryViewSet,
    FaqViewSet,
    FavoritesViewSet,
    LocationViewSet,
    MyScheduleViewSet,
    PresenterViewSet,
    SponsorViewSet,
    VendorViewSet,
    VendorDetailViewSet,
)

router = DefaultRouter()
router.register("presenter", PresenterViewSet)
router.register("myschedule", MyScheduleViewSet)
router.register("sponsor", SponsorViewSet)
router.register("favorites", FavoritesViewSet)
router.register("category", CategoryViewSet)
router.register("vendor", VendorViewSet)
router.register("faq", FaqViewSet)
router.register("vendordetail", VendorDetailViewSet)
router.register("location", LocationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
