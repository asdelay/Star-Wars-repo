from django.db import models


class Route(models.Model):
    origin = models.TextField()
    destination = models.TextField()
    travel_time = models.IntegerField()

    class Meta:
        db_table = 'route'

    def __str__(self):
        return '{} {} {}'.format(
            self.origin, self.destination, self.travel_time)
