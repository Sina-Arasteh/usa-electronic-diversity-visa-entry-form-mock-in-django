from django.shortcuts import render


def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')

