from django.shortcuts import render
from .models import Routes

import json


def index(request):
    with open('millennium-falcon.json') as f:
        mil_falc = json.load(f)
    mil_falc = json.dumps(mil_falc)
    with open('main/static/js/declare.js', 'w') as f:
        f.write('var mil_falc_raw = \'{}\''.format(mil_falc))

    queryset_to_list = list(Routes.objects.all())
    routes = []
    for i in queryset_to_list:
        temp = i.__str__().split()
        route = {'origin': temp[0],
                 'destination': temp[1],
                 'travel_time': int(temp[2])}
        routes.append(json.dumps(route))
    with open('main/static/js/declare.js', 'a') as f:
        f.write('\nvar routes_raw = {}'.format(routes))

    return render(request, 'index.html')
