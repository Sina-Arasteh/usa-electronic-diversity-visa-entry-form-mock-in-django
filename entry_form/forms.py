from django import forms
from . import models

class EntrantsForm(forms.ModelForm):
    class Meta:
        model = models.Entrants
        fields = '__all__'