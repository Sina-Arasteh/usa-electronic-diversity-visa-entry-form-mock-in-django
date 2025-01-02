from django.shortcuts import render

# Create your views here.

def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')