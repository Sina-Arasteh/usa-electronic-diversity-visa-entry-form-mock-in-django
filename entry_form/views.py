from django.shortcuts import render
from .models import MailingAddress, Entrants
from .forms import EntryForm
import datetime


def begin_entry_view(request): 
    return render(request, 'entry_form/begin_entry.html')


def entry_form_view(request):
    if request.method == 'POST':
        form = EntryForm(request.POST, request.FILES)
        # print(request.FILES['entrant_photograph'])
        # print(request.FILES['entrant_photograph'].name)
        # print(request.FILES['entrant_photograph'].size)
        # print(request.FILES['entrant_photograph'].content_type)
        if form.is_valid():
            birth_date = datetime.date(form.cleaned_data["birth_year"], form.cleaned_data["birth_month"], form.cleaned_data["birth_day"])
            print("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
            print(form.is_valid())
            print("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
            print(form.cleaned_data)
            print("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
            return render(request, "entry_form/entrant_info.html", {
                'form': form.cleaned_data,
                'birth': birth_date.strftime('%B %d, %Y'),
            })

        print("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
        print(form.is_valid())
        print("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
        for field in form:
            print(field.errors + "\n")
        print("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
        print(request.POST)
        print("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
        return render(request, 'entry_form/begin_entry.html')
        # birth_date = datetime.date(int(request.POST['birth-year']), int(request.POST['birth-month']), int(request.POST['birth-day']))
        # updated_request = request.POST.copy()
        # updated_request.update({'birth_date': birth_date.isoformat()})
        # mailing_address_form = MailingAddressForm(request.POST)
        # mailing_address_form_unbound = MailingAddressForm()
        # entrant_form = EntrantsForm(updated_request)
        # entrant_form_unbound = EntrantsForm()
        # return render(request, "entry_form/testttt.html", {
        #     'mailing_address_form': mailing_address_form,
        #     'mailing_address_form_unbound': mailing_address_form_unbound,
        #     'entrant_form': entrant_form,
        #     'entrant_form_unbound': entrant_form_unbound,
        #     'birth_date': birth_date,
        # })
        # if mailing_address_form.is_valid():
        #     print(mailing_address_form.cleaned_data)
        #     print(entrant_form.cleaned_data)


    return render(request, 'entry_form/entry_form.html')


