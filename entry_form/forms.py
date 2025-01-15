from django import forms
from . import models


class EntryForm(forms.Form):
    last_name = forms.CharField(max_length=33)
    first_name = forms.CharField(max_length=33, required=False)
    middle_name = forms.CharField(max_length=33, required=False)
    gender = forms.CharField(max_length=6)
    birth_month = forms.IntegerField(min_value=1, max_value=12)
    birth_day = forms.IntegerField(min_value=1, max_value=31)
    birth_year = forms.IntegerField(min_value=1907, max_value=2012)
    birth_city = forms.CharField(max_length=33, required=False)
    birth_country = forms.CharField(max_length=40)
    eligibility_country = forms.CharField(max_length=40, required=False)
    entrant_photograph = forms.ImageField()
    in_care_of = forms.CharField(max_length=33, required=False)
    address_line_one = forms.CharField(max_length=33)
    address_line_two = forms.CharField(max_length=33, required=False)
    city = forms.CharField(max_length=33)
    province = forms.CharField(max_length=33)
    zip_code = forms.CharField(max_length=33, required=False)
    country = forms.CharField(max_length=40)
    residence_country = forms.CharField(max_length=33)
    phone_number = forms.CharField(max_length=33, required=False)
    email_address = forms.EmailField()
    education_level = forms.CharField(max_length=33)
    marital_status = forms.CharField(max_length=85)
    children_number = forms.IntegerField(min_value=0, max_value=20)

