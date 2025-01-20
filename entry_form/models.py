from django.db import models


class MailingAddress(models.Model):
    in_Care_Of = models.CharField(max_length=33)
    address_Line_1 = models.CharField(max_length=33)
    address_Line_2 = models.CharField(max_length=33)
    city = models.CharField("City/Town", max_length=33)
    province = models.CharField("District/County/Province/State", max_length=33)
    zip_Code = models.CharField("Postal Code/Zip Code", max_length=33)
    country = models.CharField(max_length=40)


class Entrant(models.Model):
    last_Name = models.CharField("Last/Family Name", max_length=33)
    first_Name = models.CharField(max_length=33)
    middle_Name = models.CharField(max_length=33)
    gender = models.CharField(max_length=6)
    birth_Date = models.DateField()
    birth_City = models.CharField(max_length=33)
    birth_Country = models.CharField(max_length=40)
    eligibility_Country = models.CharField(max_length=40)
    entrant_Photograph = models.ImageField(upload_to="")
    mailing_Address = models.OneToOneField(MailingAddress, on_delete=models.CASCADE)
    residence_Country = models.CharField(max_length=40)
    phone_Number = models.CharField(max_length=33)
    email_Address = models.EmailField()
    education_Level = models.CharField(max_length=33)
    marital_Status = models.CharField(max_length=85)
    children_Number = models.PositiveSmallIntegerField()
    confirmation_Number = models.CharField(max_length=16, unique=True)
    digital_Signature = models.CharField(max_length=40, unique=True)

