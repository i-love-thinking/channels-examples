from django.shortcuts import render

# Create your views here.
import datetime
from django.http import HttpResponse

async def vue_index(request):
    now = datetime.datetime.now()
    return render(request, 'index.html',{'now': now})