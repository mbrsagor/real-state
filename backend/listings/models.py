from django.db import models
from django.utils.timezone import now

from realtors.models import Realtor


class Listing(models.Model):
    class SellType(models.TextChoices):
        For_SALE = 'For Sale'
        For_RENT = 'For Rent'

    class HomeType(models.TextChoices):
        HOUSE = 'House'
        CONDO = 'Condo'
        TOWNHOUSE = 'townhouse'

    realtor = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=100)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    sale_type = models.CharField(max_length=15, choices=SellType.choices, default=SellType.For_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    home_type = models.CharField(max_length=20, choices=HomeType.choices, default=HomeType.HOUSE)
    sqft = models.IntegerField()
    open_house = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to='realtor/%y/%m/%d/')
    photo_1 = models.ImageField(upload_to='realtor/%y/%m/%d/', blank=True, null=True)
    photo_2 = models.ImageField(upload_to='realtor/%y/%m/%d/', blank=True, null=True)
    photo_3 = models.ImageField(upload_to='realtor/%y/%m/%d/', blank=True, null=True)
    photo_4 = models.ImageField(upload_to='realtor/%y/%m/%d/', blank=True, null=True)
    photo_5 = models.ImageField(upload_to='realtor/%y/%m/%d/', blank=True, null=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.title
