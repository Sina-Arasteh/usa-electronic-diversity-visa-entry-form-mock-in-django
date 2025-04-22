from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Entrant
from .forms import MailingAddressForm, EntrantForm
import datetime
import string
from random import choice
from django.core.exceptions import BadRequest


def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')


def generator(len):
    characters = string.ascii_uppercase + string.digits
    generated = [choice(characters) for i in range(len)]
    generated_value = "".join(generated)
    if Entrant.objects.filter(confirmation_Number=generated_value) or Entrant.objects.filter(digital_Signature=generated_value):
        generator(len)
    else:
        return generated_value


def entry_form_view(request):
    if request.method == 'POST':
        mailing_address_form = MailingAddressForm(request.POST)
        entrant_form = EntrantForm(request.POST, request.FILES)
        if mailing_address_form.is_valid() and entrant_form.is_valid():
            entrant_birth_date = datetime.date(
                entrant_form.cleaned_data["birth_year"],
                entrant_form.cleaned_data["birth_month"],
                entrant_form.cleaned_data["birth_day"]
            )
            entrant_confirmation_number = "202X" + generator(12)
            entrant_digital_signature = generator(40)
            if not entrant_form.cleaned_data.get('eligibility_country'):
                entrant_form.cleaned_data['eligibility_country'] = entrant_form.cleaned_data['birth_Country']
            
            mailing_address_instance = mailing_address_form.save()

            entrant = entrant_form.save(commit=False)
            entrant.birth_Date = entrant_birth_date
            entrant.mailing_Address = mailing_address_instance
            entrant.confirmation_Number = entrant_confirmation_number
            entrant.digital_Signature = entrant_digital_signature
            entrant.save()
            entrant_pk = entrant.pk

            return HttpResponseRedirect('submission-confirmation-' + str(entrant_pk))
        raise BadRequest
    mailing_address_form = MailingAddressForm()
    entrant_form = EntrantForm()
    context = {
        "mailing_address_form": mailing_address_form,
        "entrant_form": entrant_form,
    }
    return render(request, 'entry_form/entry_form.html', context)


def submission_confirmation(request, pk):
    entrant_info = Entrant.objects.get(pk=pk)
    context = {
        'last_name': entrant_info.last_Name,
        'first_name': entrant_info.first_Name,
        'middle_name': entrant_info.middle_Name,
        'confirmation_number': entrant_info.confirmation_Number,
        'birth_year': entrant_info.birth_Date.year,
        'digital_signature': entrant_info.digital_Signature,
        'entry_datetime': entrant_info.entry_Datetime,
    }
    return render(request, "entry_form/submission_confirmation.html", context)


def unexpected_error_view(request):
    return render(request, "entry_form/unexpected_error.html")
