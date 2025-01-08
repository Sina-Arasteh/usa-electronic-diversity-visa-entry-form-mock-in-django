from django.shortcuts import render
from .forms import EntrantsForm
import datetime


def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')

def entry_form_view(request):
    if request.method == 'POST':
        birth_date = datetime.date(request.POST['birth-year'], request.POST['birth-month'], request.POST['birth-day'])
        pass

    return render(request, 'entry_form/entry_form.html')