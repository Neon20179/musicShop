from rest_framework import status, filters, generics, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .utils import _count_total_or_false, _substract_track_quantity ,_get_client_ip, _update_track_rating
from .models import Tag, Rating, Track, Author
from .serializers import serializers


class TagReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    """ Get tags/tag """
    queryset = Tag.objects.all()
    serializer_class = serializers.TagSerializer
    lookup_field = 'url'


class AuthorReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Author.objects.all()
    serializer_class = serializers.AuthorSerializer
    lookup_field = 'url'


class TrackRetriveApiView(generics.RetrieveAPIView):
    queryset = Track.objects.all()
    serializer_class = serializers.TrackSerializer


class FindTrack(generics.ListAPIView):
    """ Finds track by name """
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Track.objects.all()
    serializer_class = serializers.TrackSerializer


@api_view(["GET"])
def get_track_quantity(request):
    track_id = request.query_params.get('trackId')
    try:
        track = Track.objects.get(id=track_id)
        return Response(track.quantity, status=status.HTTP_200_OK)
    except Track.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Excaption as ex:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def make_order(request):
    order_items = request.data['order_items']
    total = _count_total_or_false(order_items)
    if request.data['total'] == total:
        serialized_order_data = serializers.OrderSerializer(data=request.data)
        if serialized_order_data.is_valid():
            _substract_track_quantity(order_items)
            serialized_order_data.save()
            return Response(serialized_order_data.data, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def rate_track(request):
    user_track_rating, user_track_id = request.data['rating'], request.data['track']
    user_ip = _get_client_ip(request)

    if not Rating.objects.filter(ip=user_ip, track=user_track_id) and user_track_rating <= 5:
        rating_data = {
            "track": user_track_id,
            "ip": user_ip,
            "rating": user_track_rating
        }

        serialized_rating_data = serializers.RatingSerializer(data=rating_data)
        if serialized_rating_data.is_valid():
            _update_track_rating(user_track_id, user_track_rating)
            serialized_rating_data.save()
            return Response(user_track_rating, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
