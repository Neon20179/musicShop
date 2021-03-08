from inspect import stack
from typing import Union

from api.models import Track


def whoami():
    """ Return function name """
    return stack()[1][3]


def _count_total_or_false(order_items: list) -> Union[float, bool]:
    """ Returns the sum calculated based on class instance.
     Returns false if the quantity of order items is greater than the quantity from DB. """
    if not order_items: return False

    try:
        total = 0

        for order_item in order_items:
            track = Track.objects.get(pk=order_item['track'])
            track_quantity_diff = track.quantity - order_item['quantity']
            if track_quantity_diff >= 0:
                total += order_item['quantity'] * track.price
            else:
                return False
        return round(total, 2)
    except Exception as ex:
        print(f"Error in {whoami()}. Excaption: {ex}")


def _substract_track_quantity(order_items: list) -> None:
    for order_item in order_items:
        track = Track.objects.get(pk=order_item['track'])
        track.quantity -= order_item['quantity']
        track.save()


def _get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def _update_track_rating(track_id: int, rating: int) -> None:
    try: 
        track = Track.objects.get(pk=track_id)
        new_track_rating = (track.rating_quantity * track.rating + rating) / (track.rating_quantity + 1)
        track.rating = new_track_rating
        track.rating_quantity += 1
        track.save()
    except Exception as ex:
        print(f"Error in {whoami()}. Excaption: {ex}")
