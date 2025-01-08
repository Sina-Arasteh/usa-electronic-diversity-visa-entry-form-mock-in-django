from django import forms
from . import models


class MailingAddressForm(forms.ModelForm):
    class Meta:
        model = models.MailingAddress
        fields = '__all__'


class EntrantsForm(forms.ModelForm):
    class Meta:
        model = models.Entrants
        fields = '__all__'

