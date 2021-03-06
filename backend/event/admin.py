from django.contrib import admin
from .models import (
    Category,
    Favorites,
    Location,
    MySchedule,
    Sponsor,
    Vendor,
    VendorDetail,
)

admin.site.register(MySchedule)
admin.site.register(Sponsor)
admin.site.register(Favorites)
admin.site.register(Category)
admin.site.register(Vendor)
admin.site.register(VendorDetail)
admin.site.register(Location)

# Register your models here.
