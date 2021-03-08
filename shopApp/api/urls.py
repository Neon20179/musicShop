from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'tags', views.TagReadOnlyViewSet)
router.register(r'authors', views.AuthorReadOnlyViewSet)

urlpatterns = [
    # GET
    path('', include(router.urls)),
    path('track/<int:pk>/', views.TrackRetriveApiView.as_view()),
    path('find_track/', views.FindTrack.as_view()),
    path('get_track_quantity/', views.get_track_quantity),

    # POST
    path('order/', views.make_order),
    path('rate_track/', views.rate_track)
]
