from rest_framework import serializers
from api.models import Author, Track, Tag, Album


class ShortAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["id", "name", "url", "image"]


class ShortTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"
