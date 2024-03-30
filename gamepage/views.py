from django.shortcuts import render
from django.shortcuts import redirect, reverse

# Create your views here.
from django.http import HttpResponse


def index(request):
    return render(request, 'gamepage.html',)