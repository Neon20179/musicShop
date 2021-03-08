from rest_framework import serializers
from api.models import Track, Tag, Order, OrderItem, Author, Rating, Album
from .support_serializers import ShortAuthorSerializer, ShortTagSerializer


class TrackSerializer(serializers.ModelSerializer):
    tags = ShortTagSerializer(many=True)
    author = ShortAuthorSerializer(many=True)

    class Meta:
        model = Track
        fields = ["id", "name", "track", "image", "author", "lyrics", "price", "tags", "rating", "quantity"]


class AlbumSerializer(serializers.ModelSerializer):
    album_tracks = TrackSerializer(many=True)

    class Meta:
        model = Album
        fields = ["id", "name", "image", "album_tracks"]


class AuthorSerializer(serializers.ModelSerializer):
    author_albums = AlbumSerializer(many=True)

    class Meta:
        model = Author
        fields = ["id", "name", "bio", "url", "image", "author_albums"]


class TagSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True)

    class Meta:
        model = Tag
        fields = ['id', 'name', 'url', 'tracks', 'image']


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['track', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['name', 'total', 'email', 'order_items']

    def create(self, validated_data):
        order_items = validated_data.pop('order_items')
        order = Order.objects.create(**validated_data)
        
        for order_item in order_items:
            OrderItem.objects.create(**order_item, order=order)
        return order


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = "__all__"
