from django.db import models


class Routes(models.Model):
    origin = models.TextField()
    destination = models.TextField()
    travel_time = models.IntegerField()

    class Meta:
        db_table = 'routes'

    def __str__(self):
        return '{} {} {}'.format(
            self.origin, self.destination, self.travel_time)
