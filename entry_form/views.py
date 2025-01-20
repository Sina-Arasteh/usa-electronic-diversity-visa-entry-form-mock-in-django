from django.shortcuts import render
from django.http import HttpResponseRedirect
from .forms import EntryForm
import datetime


def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')


def entry_form_view(request):
    if request.method == 'POST':
        form = EntryForm(request.POST, request.FILES)
        if form.is_valid():
            birth_date = datetime.date(form.cleaned_data["birth_year"], form.cleaned_data["birth_month"], form.cleaned_data["birth_day"])
            
            return render(request, "entry_form/entrant_info.html", {
                'form': form.cleaned_data,
                'birth': birth_date.strftime('%B %d, %Y'),
            })

        return HttpResponseRedirect('unexpected-error')
        # birth_date = datetime.date(int(request.POST['birth-year']), int(request.POST['birth-month']), int(request.POST['birth-day']))
        # updated_request = request.POST.copy()
        # updated_request.update({'birth_date': birth_date.isoformat()})
        # mailing_address_form = MailingAddressForm(request.POST)
        # mailing_address_form_unbound = MailingAddressForm()
        # entrant_form = EntrantsForm(updated_request)

    return render(request, 'entry_form/entry_form.html')


def unexpected_error_view(request):
    return render(request, "entry_form/unexpected_error.html")