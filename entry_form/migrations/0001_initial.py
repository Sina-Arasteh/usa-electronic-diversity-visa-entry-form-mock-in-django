# Generated by Django 5.1.4 on 2025-01-20 09:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MailingAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('in_Care_Of', models.CharField(max_length=33)),
                ('address_Line_1', models.CharField(max_length=33)),
                ('address_Line_2', models.CharField(max_length=33)),
                ('city', models.CharField(max_length=33, verbose_name='City/Town')),
                ('province', models.CharField(max_length=33, verbose_name='District/County/Province/State')),
                ('zip_code', models.CharField(max_length=33, verbose_name='Postal Code/Zip Code')),
                ('country', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Entrant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_name', models.CharField(max_length=33, verbose_name='Last/Family Name')),
                ('first_Name', models.CharField(max_length=33)),
                ('middle_Name', models.CharField(max_length=33)),
                ('gender', models.CharField(max_length=6)),
                ('birth_Date', models.DateField()),
                ('birth_City', models.CharField(max_length=33)),
                ('birth_Country', models.CharField(max_length=40)),
                ('eligibility_Country', models.CharField(max_length=40)),
                ('entrant_Photograph', models.ImageField(upload_to='')),
                ('residence_Country', models.CharField(max_length=40)),
                ('phone_Number', models.CharField(max_length=33)),
                ('email_Address', models.EmailField(max_length=254)),
                ('education_Level', models.CharField(max_length=33)),
                ('marital_Status', models.CharField(max_length=85)),
                ('children_Number', models.PositiveSmallIntegerField()),
                ('confirmation_Number', models.CharField(max_length=16)),
                ('digital_Signature', models.CharField(max_length=40)),
                ('mailing_Address', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='entry_form.mailingaddress')),
            ],
        ),
    ]
