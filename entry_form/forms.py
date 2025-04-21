from django import forms
from django.core.validators import FileExtensionValidator
from django.core.exceptions import ValidationError
from . import models


def photograph_validation(fileObj):
    if fileObj.size > 240 * 1024:
        raise ValidationError("An unexpected error occured.")
    elif fileObj.content_type != "image/jpeg":
        raise ValidationError("An unexpected error occured.")


class MailingAddressForm(forms.ModelForm):
    class Meta:
        model = models.MailingAddress
        fields = '__all__'
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['in_Care_Of'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['address_Line_1'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['address_Line_2'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['city'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['province'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['zip_Code'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['country'].widget.attrs.update({'class': 'form-select width-60'})


class EntrantForm(forms.ModelForm):
    birth_month = forms.IntegerField(label="Month", min_value=1, max_value=12)
    birth_day = forms.IntegerField(label="Day", min_value=1, max_value=31)
    birth_year = forms.IntegerField(label="Year", min_value=1907, max_value=2012)

    birth_month.widget.attrs.update({'class': "form-control", 'placeholder': "mm"})
    birth_day.widget.attrs.update({'class': "form-control", 'placeholder': "dd"})
    birth_year.widget.attrs.update({'class': "form-control", 'placeholder': "yyyy"})

    class Meta:
        model = models.Entrant
        exclude = [
            "mailing_Address",
            "birth_Date",
            "confirmation_Number",
            "digital_Signature",
            "entry_Datetime",
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['last_Name'].widget.attrs.update({'class': 'form-control'})
        self.fields['first_Name'].widget.attrs.update({'class': 'form-control'})
        self.fields['middle_Name'].widget.attrs.update({'class': 'form-control'})
        self.fields['birth_City'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['birth_Country'].widget.attrs.update({'class': 'form-select width-60'})
        self.fields['eligibility_Country'].widget.attrs.update({'class': 'form-select width-60', 'disabled': 'disabled'})
        self.fields['entrant_Photograph'].widget.attrs.update({'class': 'd-none', "accept": "image/jpeg"})
        self.fields['entrant_Photograph'].validators.append(FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp']))
        self.fields['entrant_Photograph'].validators.append(photograph_validation)
        self.fields['residence_Country'].widget.attrs.update({'class': 'form-select width-60'})
        self.fields['phone_Number'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['email_Address'].widget.attrs.update({'class': 'form-control width-60'})
        self.fields['children_Number'].widget.attrs.update({'class': 'form-control width-25', "max": 20})
