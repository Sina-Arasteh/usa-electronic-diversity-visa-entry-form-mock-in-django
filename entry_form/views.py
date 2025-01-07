from django.shortcuts import render


def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')

def entry_form_view(request):
    if request.method == 'POST':
        pass

    return render(request, 'entry_form/entry_form.html')