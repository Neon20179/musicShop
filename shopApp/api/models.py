from django.db import models


def get_upload_path(instance, filename):
    return f'{instance.__class__.__name__}/{filename}'


class Tag(models.Model):
    name = models.CharField(help_text="Name", max_length=255)
    url = models.SlugField(help_text="Url", max_length=255, unique=True)
    image = models.ImageField(upload_to=get_upload_path, null=True)

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(help_text="Name", max_length=255)
    bio = models.TextField()
    image = models.ImageField(upload_to=get_upload_path)
    url = models.SlugField(help_text="Url", max_length=255, unique=True)

    def __str__(self):
        return self.name


class Album(models.Model):
    name = models.CharField(help_text="Album name", max_length=255)
    author = models.ForeignKey(Author, related_name="author_albums", on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_upload_path)

    def __str__(self):
        return f"{self.author} / {self.name}"


class Track(models.Model):
    name = models.CharField(help_text="Name", max_length=255)
    album = models.ManyToManyField(Album, related_name='album_tracks')
    author = models.ManyToManyField(Author, related_name='author_tracks')
    track = models.FileField(help_text="Track", upload_to=get_upload_path, null=True)
    lyrics = models.TextField(help_text="Lyrics")
    image = models.ImageField(help_text="Image", upload_to=get_upload_path)
    quantity = models.PositiveIntegerField(help_text="Quantity")
    price = models.FloatField(help_text="Price")
    tags = models.ManyToManyField(Tag, related_name='tracks')
    rating = models.FloatField(default=0)
    rating_quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


class Rating(models.Model):
    track = models.ForeignKey(Track, related_name='taring', on_delete=models.CASCADE)
    rating = models.SmallIntegerField()
    ip = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.track} | {self.rating} | {self.ip}"


class Order(models.Model):
    name = models.CharField(help_text="Owner name", max_length=255)
    total = models.FloatField(help_text="Total")
    email = models.EmailField(help_text="Email", max_length=50)
    accepted = models.BooleanField(help_text="Accepted", default=False)

    def __str__(self):
        return self.name


class OrderItem(models.Model):
    track = models.ForeignKey(Track, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True, related_name='order_items')
    quantity = models.PositiveIntegerField(help_text='Quantity')

    def __str__(self):
        return f'{self.order} | {self.track} x {self.quantity}'
