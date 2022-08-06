from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.files.storage import FileSystemStorage
from json import dumps



def index(request):
    my_dict = {
        'Kostya': 18,
        'Sasha': 20,
        'Khan': 90
    }
    my_dict = dumps(my_dict)
    return render(request, 'index.html', {"data": my_dict})



