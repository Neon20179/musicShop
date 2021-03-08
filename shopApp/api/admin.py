from django.contrib import admin
from .models import Track, Tag, Order, OrderItem, Author, Rating, Album


admin.site.register(Track)
admin.site.register(Album)
admin.site.register(Author)
admin.site.register(Tag)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Rating)
