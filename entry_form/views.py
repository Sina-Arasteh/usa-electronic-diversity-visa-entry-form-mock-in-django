from django.shortcuts import render
from .models import MailingAddress, Entrants
from .forms import EntryForm
import datetime


def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')

def entry_form_view(request):
    if request.method == 'POST':
        birth_date = datetime.date(int(request.POST['birth-year']), int(request.POST['birth-month']), int(request.POST['birth-day']))
        updated_request = request.POST.copy()
        updated_request.update({'birth_date': birth_date.isoformat()})
        mailing_address_form = MailingAddressForm(request.POST)
        mailing_address_form_unbound = MailingAddressForm()
        entrant_form = EntrantsForm(updated_request)
        entrant_form_unbound = EntrantsForm()
        return render(request, "entry_form/testttt.html", {
            'mailing_address_form': mailing_address_form,
            'mailing_address_form_unbound': mailing_address_form_unbound,
            'entrant_form': entrant_form,
            'entrant_form_unbound': entrant_form_unbound,
            'birth_date': birth_date,
        })
        # if mailing_address_form.is_valid():
        #     print(mailing_address_form.cleaned_data)
        #     print(entrant_form.cleaned_data)


    return render(request, 'entry_form/entry_form.html')