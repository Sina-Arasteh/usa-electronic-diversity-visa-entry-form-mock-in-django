from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Entrant, MailingAddress
from .forms import EntryForm
import datetime
import string
from random import choice


def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')


def generator(len):
    characters = string.ascii_uppercase + string.digits
    generated = []
    for i in range(len):
        generated.append(choice(characters))
    generated_value = "".join(generated)
    if Entrant.objects.filter(confirmation_Number=generated_value) or Entrant.objects.filter(digital_Signature=generated_value):
        generator(len)
    else:
        return generated_value


def entry_form_view(request):
    if request.method == 'POST':
        form = EntryForm(request.POST, request.FILES)
        if form.is_valid():
            entrant_birth_date = datetime.date(form.cleaned_data["birth_year"], form.cleaned_data["birth_month"], form.cleaned_data["birth_day"])
            entrant_confirmation_number = generator(16)
            entrant_digital_signature = "202X" + generator(36)
            if form.cleaned_data['eligibility_country'] == '':
                form.cleaned_data['eligibility_country'] = form.cleaned_data['birth_country']
            
            entrant_mailing_address = MailingAddress(
                in_Care_Of = form.cleaned_data['in_care_of'],
                address_Line_1 = form.cleaned_data['address_line_one'],
                address_Line_2 = form.cleaned_data['address_line_two'],
                city = form.cleaned_data['city'],
                province = form.cleaned_data['province'],
                zip_Code = form.cleaned_data['zip_code'],
                country = form.cleaned_data['country']
            )
            entrant_mailing_address.save()

            entrant_info = Entrant(
                last_Name = form.cleaned_data['last_name'],
                first_Name = form.cleaned_data['first_name'],
                middle_Name = form.cleaned_data['middle_name'],
                gender = form.cleaned_data['gender'],
                birth_Date = entrant_birth_date,
                birth_City = form.cleaned_data['birth_city'],
                birth_Country = form.cleaned_data['birth_country'],
                eligibility_Country = form.cleaned_data['eligibility_country'],
                entrant_Photograph = form.cleaned_data['entrant_photograph'],
                mailing_Address = entrant_mailing_address,
                residence_Country = form.cleaned_data['residence_country'],
                phone_Number = form.cleaned_data['phone_number'],
                email_Address = form.cleaned_data['email_address'],
                education_Level = form.cleaned_data['education_level'],
                marital_Status = form.cleaned_data['marital_status'],
                children_Number = form.cleaned_data['children_number'],
                confirmation_Number = entrant_confirmation_number,
                digital_Signature = entrant_digital_signature
            )
            entrant_info.save()
            entrant_pk = entrant_info.pk
            return HttpResponseRedirect('submission-confirmation-' + str(entrant_pk))

        return HttpResponseRedirect('unexpected-error')

    return render(request, 'entry_form/entry_form.html')


def submission_confirmation(request, pk):
    entrant_info = Entrant.objects.get(pk=pk)
    context = {
        'last_name': entrant_info.last_Name,
        'first_name': entrant_info.first_Name,
        'middle_name': entrant_info.middle_Name,
        'confirmation_number': entrant_info.confirmation_Number,
        'birth_year': entrant_info.birth_Date.year,
        'digital_signature': entrant_info.digital_Signature,
    }
    return render(request, "entry_form/submission_confirmation.html", context)


def unexpected_error_view(request):
    return render(request, "entry_form/unexpected_error.html")

