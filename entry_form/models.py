from django.db import models
from . import constants
from django.core.validators import (
    RegexValidator,
    MaxValueValidator,
)


class MailingAddress(models.Model):
    in_Care_Of = models.CharField(max_length=33, blank=True)
    address_Line_1 = models.CharField(max_length=33)
    address_Line_2 = models.CharField(max_length=33, blank=True)
    city = models.CharField("City/Town", max_length=33)
    province = models.CharField("District/County/Province/State", max_length=33)
    zip_Code = models.CharField("Postal Code/Zip Code", max_length=33, blank=True)
    country = models.CharField(max_length=40, choices=constants.COUNTRY_CHOICES)


class Entrant(models.Model):
    last_Name = models.CharField("Last/Family Name", max_length=33, validators=[RegexValidator(regex="[a-zA-Z`\s\-]+")])
    first_Name = models.CharField(max_length=33, validators=[RegexValidator(regex="[a-zA-Z`\s\-]+")], blank=True)
    middle_Name = models.CharField(max_length=33, validators=[RegexValidator(regex="[a-zA-Z`\s\-]+")], blank=True)
    gender = models.CharField(max_length=6, choices=constants.GENDER_CHOICES)
    birth_Date = models.DateField()
    birth_City = models.CharField(max_length=33, blank=True)
    birth_Country = models.CharField(max_length=40, choices=constants.COUNTRY_CHOICES)
    eligibility_Country = models.CharField(max_length=40, choices=constants.COUNTRY_CHOICES, blank=True)
    entrant_Photograph = models.ImageField(upload_to="")
    mailing_Address = models.OneToOneField(MailingAddress, on_delete=models.CASCADE)
    residence_Country = models.CharField(max_length=40, choices=constants.COUNTRY_CHOICES)
    phone_Number = models.CharField(max_length=33, blank=True)
    email_Address = models.EmailField("E-Mail Address")
    education_Level = models.CharField(max_length=33, choices=constants.EDUCATION_LEVEL_CHOICES)
    marital_Status = models.CharField(max_length=85, choices=constants.MARITAL_STATUS_CHOICES)
    children_Number = models.PositiveSmallIntegerField(validators=[MaxValueValidator(20)])
    entry_Datetime = models.DateTimeField(auto_now_add=True)
    confirmation_Number = models.CharField(max_length=16, unique=True)
    digital_Signature = models.CharField(max_length=40, unique=True)
