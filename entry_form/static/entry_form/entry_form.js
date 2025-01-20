// 1. Name ---------------> Last/Family Name:

const lastNameElement = document.getElementById('lname');
const lastNameErrorMsg = document.getElementById('lname-error-msg');
const lastNameInfo = document.getElementById('lname-info');

function lastNameValidation() {
    if (!lastNameElement.validity.valid) {
        lastNameErrorMsg.classList.remove('d-none');
        if (lastNameElement.validity.valueMissing) {
            lastNameErrorMsg.innerHTML = "You must provide a last/family name. 'NLN' and 'LNU' are not accepted. You may need to move First Name or Middle Name to the Last/Family Name.";
        } else if (lastNameElement.validity.tooLong) {
            lastNameErrorMsg.innerHTML = "Your Last/Family Name cannot be longer than 33 characters.";
        } else if (lastNameElement.validity.patternMismatch) {
            lastNameErrorMsg.innerHTML = "Last/Family name must contain only letters, apostrophes, hyphens, and single spaces.";
        }
    } else {
        lastNameErrorMsg.classList.add('d-none');
        lastNameInfo.innerHTML = lastNameElement.value;
    }
}
lastNameElement.addEventListener('change', lastNameValidation);



// 1. Name ---------------> First Name:

const firstNameElement = document.getElementById('fname');
const firstNameErrorMsg = document.getElementById('fname-error-msg');
const noFirstName = document.getElementById('no-fname');
const firstNameInfo = document.getElementById('fname-info');

function firstNameValidation() {
    if (!firstNameElement.validity.valid) {
        firstNameErrorMsg.classList.remove('d-none');
        if (firstNameElement.validity.valueMissing) {
            firstNameErrorMsg.innerHTML = "You must provide a first name. If you have no first name, enable the 'No First Name' checkbox. ";
        } else if (firstNameElement.validity.tooLong) {
            firstNameErrorMsg.innerHTML = "Your First Name cannot be longer than 33 characters.";
        } else if (firstNameElement.validity.patternMismatch) {
            firstNameErrorMsg.innerHTML = "First name must contain only letters, apostrophes, hyphens, and single spaces.";
        }
    } else {
        firstNameErrorMsg.classList.add('d-none');
        firstNameInfo.innerHTML = firstNameElement.value;
    }
}
firstNameElement.addEventListener('change', firstNameValidation);

function disableFirstName() {
    if (noFirstName.checked) {
        firstNameElement.value = null;
        firstNameElement.disabled = true;
        firstNameErrorMsg.classList.add('d-none');
        firstNameInfo.innerHTML = null;
    } else {
        firstNameElement.disabled = false;
    }
}
noFirstName.addEventListener('click', disableFirstName);



// 1. Name ---------------> Middle Name:

const middleNameElement = document.getElementById('mname');
const middleNameErrorMsg = document.getElementById('mname-error-msg');
const noMiddleName = document.getElementById('no-mname');
const middleNameInfo = document.getElementById('mname-info');
const NameErrorMsg = document.getElementById('name-error-msg');

function middleNameValidation() {
    if (!middleNameElement.validity.valid) {
        middleNameErrorMsg.classList.remove('d-none');
        if (middleNameElement.validity.valueMissing) {
            middleNameErrorMsg.innerHTML = "You must provide a middle name. If you have no middle name, enable the 'No Middle Name' checkbox.";
        } else if (middleNameElement.validity.tooLong) {
            middleNameErrorMsg.innerHTML = "Your Middle Name cannot be longer than 33 characters.";
        } else if (middleNameElement.validity.patternMismatch) {
            middleNameErrorMsg.innerHTML = "Middle name must contain only letters, apostrophes, hyphens, and single spaces.";
        }
    } else {
        middleNameErrorMsg.classList.add('d-none');
        middleNameInfo.innerHTML = middleNameElement.value;
    }
}
middleNameElement.addEventListener('change', middleNameValidation);

function disableMiddleName() {
    if (noMiddleName.checked) {
        middleNameElement.value = null;
        middleNameElement.disabled = true;
        middleNameErrorMsg.classList.add('d-none');
        middleNameInfo.innerHTML = null;
    } else {
        middleNameElement.disabled = false;
    }
}
noMiddleName.addEventListener('click', disableMiddleName);

function nameErrorVisibility() {
    if (lastNameErrorMsg.classList.contains('d-none') && firstNameErrorMsg.classList.contains('d-none') && middleNameErrorMsg.classList.contains('d-none')) {
        NameErrorMsg.classList.add('d-none');
        console.log('A');
    } else {
        NameErrorMsg.classList.remove('d-none');
        console.log('B');
    }
}
lastNameElement.addEventListener('change', nameErrorVisibility);
firstNameElement.addEventListener('change', nameErrorVisibility);
middleNameElement.addEventListener('change', nameErrorVisibility);
noFirstName.addEventListener('click', nameErrorVisibility);
noMiddleName.addEventListener('click', nameErrorVisibility);



// 2. Gender:

const genderchoices = [document.getElementById('male'), document.getElementById('female')];
const genderErrorMsg = document.getElementById('gender-error-msg');
const genderInfo = document.getElementById('gender-info');
let selectedGender = 0;

function genderValidation() {
    for (let gen of genderchoices) {
        if (gen.checked) {
            selectedGender = 1;
        }
    }
    if (selectedGender == 0) {
        genderErrorMsg.classList.remove('d-none');
        genderErrorMsg.innerHTML = "You must select a gender.";
    } else {
        genderErrorMsg.classList.add('d-none');
        for (let cho of genderchoices) {
            if (cho.checked) {
                genderInfo.innerHTML = cho.value;
            }
        }
    }
}
genderchoices[0].addEventListener('click', genderValidation);
genderchoices[1].addEventListener('click', genderValidation);



// 3. Birth Date ---------------> Month:

const birthMonthElement = document.getElementById('bmonth');
const birthMonthErrorMsg = document.getElementById('bmonth-error-msg');
const birthMonthInfo = document.getElementById('bmonth-info');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function birthMonthValidation() {
    if (!birthMonthElement.validity.valid) {
        birthMonthErrorMsg.classList.remove('d-none');
        if (birthMonthElement.validity.valueMissing || birthMonthElement.validity.rangeUnderflow || birthMonthElement.validity.rangeOverflow) {
            birthMonthErrorMsg.innerHTML = "You must provide a one to two digit birth month between 1 and 12.";
        }
    } else {
        birthMonthErrorMsg.classList.add('d-none');
        birthMonthInfo.innerHTML = months[birthMonthElement.value - 1];
    }
}
birthMonthElement.addEventListener('change', birthMonthValidation);



// 3. Birth Date ---------------> Day:

const birthDayElement = document.getElementById('bday');
const birthDayErrorMsg = document.getElementById('bday-error-msg');
const birthDayInfo = document.getElementById('bday-info');

function birthDayValidation() {
    if (!birthDayElement.validity.valid) {
        birthDayErrorMsg.classList.remove('d-none');
        if (birthDayElement.validity.valueMissing || birthDayElement.validity.rangeUnderflow || birthDayElement.validity.rangeOverflow) {
            birthDayErrorMsg.innerHTML = "You must provide a one to two digit birth day between 1 and 31.";
        }
    } else {
        birthDayErrorMsg.classList.add('d-none');
        birthDayInfo.innerHTML = String(birthDayElement.value).padStart(2, '0');
    }
}
birthDayElement.addEventListener('change', birthDayValidation);



// 3. Birth Date ---------------> Year:

const birthYearElement = document.getElementById('byear');
const birthYearErrorMsg = document.getElementById('byear-error-msg');
const birthYearInfo = document.getElementById('byear-info');
const birthDateErrorMsg = document.getElementById('b-error-msg');

function birthYearValidation() {
    if (!birthYearElement.validity.valid) {
        birthYearErrorMsg.classList.remove('d-none');
        if (birthYearElement.validity.valueMissing || birthYearElement.validity.rangeUnderflow || birthYearElement.validity.rangeOverflow) {
            birthYearErrorMsg.innerHTML = "You must provide a four digit birth year between 1907 and 2011.";
        }
    } else {
        birthYearErrorMsg.classList.add('d-none');
        birthYearInfo.innerHTML = birthYearElement.value;
    }
}
birthYearElement.addEventListener('change', birthYearValidation);

function birthDateErrorMsgVisibility() {
    if (birthMonthErrorMsg.classList.contains('d-none') && birthDayErrorMsg.classList.contains('d-none') && birthYearErrorMsg.classList.contains('d-none')) {
        birthDateErrorMsg.classList.add('d-none');
    } else {
        birthDateErrorMsg.classList.remove('d-none');
    }
}
birthMonthElement.addEventListener('change', birthDateErrorMsgVisibility);
birthDayElement.addEventListener('change', birthDateErrorMsgVisibility);
birthYearElement.addEventListener('change', birthDateErrorMsgVisibility);



// 4. City Where You Were Born:

const birthCityElement = document.getElementById('bcity');
const birthCityErrorMsg = document.getElementById('bcity-error-msg');
const noBirthCity = document.getElementById('no-bcity');
const birthCityInfo = document.getElementById('bcity-info');

function birthCityValidation() {
    if (!birthCityElement.validity.valid) {
        birthCityErrorMsg.classList.remove('d-none');
        if (birthCityElement.validity.valueMissing) {
            birthCityErrorMsg.innerHTML = "You must provide the city name where you were born. If your birth city is unknown, enable the 'Birth City Unknown' checkbox.";
        } else if (birthCityElement.validity.tooLong) {
            birthCityErrorMsg.innerHTML = "Birth city name must not be longer than 33 characters.";
        }
    } else {
        birthCityErrorMsg.classList.add('d-none');
        birthCityInfo.innerHTML = birthCityElement.value;
    }
}
birthCityElement.addEventListener('change', birthCityValidation);

function disableBCity() {
    if (noBirthCity.checked) {
        birthCityElement.value = null;
        birthCityElement.disabled = true;
        birthCityErrorMsg.classList.add('d-none');
        birthCityInfo.innerHTML = null;
    } else {
        birthCityElement.disabled = false;
    }
}
noBirthCity.addEventListener('click', disableBCity);



// 5. Country Where You Were Born:

const birthCountryElement = document.getElementById('bcountry');
const birthCountryErrorMsg = document.getElementById('bcountry-error-msg');
const birthCountryInfo = document.getElementById('bcountry-info');

function birthCountryValidation() {
    if (!birthCountryElement.validity.valid) {
        birthCountryErrorMsg.classList.remove('d-none');
        if (birthCountryElement.validity.valueMissing) {
            birthCountryErrorMsg.innerHTML = "You must select the country where you were born.";
        }
    } else {
        birthCountryErrorMsg.classList.add('d-none');
        birthCountryInfo.innerHTML = birthCountryElement.value;
    }
}
birthCountryElement.addEventListener('change', birthCountryValidation);



// 6. Country of Eligibility for the DV Program:

const eligibilityCountryElement = document.getElementById('elig-country');
const yesBirthCountryEligibility = document.getElementById('yes-bcountry-eligibility');
const noBirthCountryEligibility = document.getElementById('no-bcountry-eligibility');
const eligibilityCountryErrorMsg = document.getElementById('elig-country-error-msg');
const eligibilityCountryInfo = document.getElementById('elig-country-info');

function eligibilityCountryValidation() {
    if (!eligibilityCountryElement.validity.valid && !yesBirthCountryEligibility.checked) {
        eligibilityCountryErrorMsg.classList.remove('d-none');
        if (eligibilityCountryElement.validity.valueMissing) {
            eligibilityCountryErrorMsg.innerHTML = "You must select the country from which you are clainming eligibility. If you are claiming eligibility based on the country where you were born, enable the 'Yes' radio button.";
        }
    } else {
        eligibilityCountryErrorMsg.classList.add('d-none');
        if (eligibilityCountryElement.value) {
            eligibilityCountryInfo.innerHTML = eligibilityCountryElement.value;
        }
    }
}
eligibilityCountryElement.addEventListener('change', eligibilityCountryValidation);

function disableEligCountry() {
    eligibilityCountryElement.selectedIndex = '0';
    eligibilityCountryElement.disabled = true;
    eligibilityCountryErrorMsg.classList.add('d-none');
    eligibilityCountryInfo.innerHTML = birthCountryElement.value;
}
yesBirthCountryEligibility.addEventListener('click', disableEligCountry);

function removedisabilityEligCountry() {
    eligibilityCountryElement.disabled = false;
}
noBirthCountryEligibility.addEventListener('click', removedisabilityEligCountry);



// 7. Entrant Photograph:

const entrantPhotograph = document.getElementById('entrant-photograph');
const entrantPhotographTrigger = document.getElementById('entrant-photograph-trigger');
const entrantPhotographName = document.getElementById('entrant-photograph-name');
const fileObjectImage = document.getElementById('entrant-photograph-show');
const entrantPhotographErrorMsg = document.getElementById('entrant-photograph-error-msg');

function fileInputTrigger() {
    entrantPhotograph.click();
}
entrantPhotographTrigger.addEventListener('click', fileInputTrigger);

function entrantPhotographProcesses() {
    const fileObject = entrantPhotograph.files[0];
    if (fileObject) {
        entrantPhotographName.value = fileObject.name;
        const fileObjectURL = URL.createObjectURL(fileObject);
        fileObjectImage.src = fileObjectURL;
        fileObjectImage.height = 120;
        fileObjectImage.width = 120;
        fileObjectImage.classList.remove('d-none');
        if (fileObject.size > 240 * 1024) {
            entrantPhotograph.setCustomValidity("The size of the selected photograph is more than 240 kB.");
        } else {
            entrantPhotograph.setCustomValidity("");
        }
    }

    if (!entrantPhotograph.validity.valid) {
        entrantPhotographErrorMsg.classList.remove('d-none');
        if (entrantPhotograph.validity.valueMissing) {
            entrantPhotographErrorMsg.innerHTML = "You must provide a photograph.";
        } else if (entrantPhotograph.validity.customError) {
            entrantPhotographErrorMsg.innerHTML = entrantPhotograph.validationMessage;
        }
    } else {
        entrantPhotographErrorMsg.classList.add('d-none');
    }
}
entrantPhotograph.addEventListener('change', entrantPhotographProcesses);



// 8. Mailing Address ---------------> In Care Of:

const inCareOfElement = document.getElementById('in-care-of');
const inCareOfErrorMsg = document.getElementById('in-care-of-error-msg');
const inCareOfInfo = document.getElementById('in-care-of-info');

function inCareOfElementValidation() {
    if (!inCareOfElement.validity.valid) {
        inCareOfErrorMsg.classList.remove('d-none');
        if (inCareOfElement.validity.tooLong) {
            inCareOfErrorMsg.innerHTML = "In care of must not be longer than 33 characters.";
        }
    } else {
        inCareOfErrorMsg.classList.add('d-none');
        inCareOfInfo.innerHTML = inCareOfElement.value;
    }
}
inCareOfElement.addEventListener('change', inCareOfElementValidation);



// 8. Mailing Address ---------------> Address Line 1:

const addressLineOneElement = document.getElementById('address-line1');
const addressLineOneErrorMsg = document.getElementById('address-line1-error-msg');
const addressLineOneInfo = document.getElementById('address-line1-info');

function addressLineOneElementValidation() {
    if (!addressLineOneElement.validity.valid) {
        addressLineOneErrorMsg.classList.remove('d-none');
        if (addressLineOneElement.validity.valueMissing) {
            addressLineOneErrorMsg.innerHTML = "You must provide an address line.";
        } else if (addressLineOneElement.validity.tooLong) {
            addressLineOneErrorMsg.innerHTML = "Address line must not be longer than 33 characters.";
        }
    } else {
        addressLineOneErrorMsg.classList.add('d-none');
        addressLineOneInfo.innerHTML = addressLineOneElement.value;
    }
}
addressLineOneElement.addEventListener('change', addressLineOneElementValidation);



// 8. Mailing Address ---------------> Address Line 2:

const addressLineTwoElement = document.getElementById('address-line2');
const addressLineTwoErrorMsg = document.getElementById('address-line2-error-msg');
const addressLineTwoInfo = document.getElementById('address-line2-info');

function addressLineTwoElementValidation() {
    if (!addressLineTwoElement.validity.valid) {
        addressLineTwoErrorMsg.classList.remove('d-none');
        if (addressLineTwoElement.validity.tooLong) {
            addressLineTwoErrorMsg.innerHTML = "Address line must not be longer than 33 characters.";
        }
    } else {
        addressLineTwoErrorMsg.classList.add('d-none');
        addressLineTwoInfo.innerHTML = addressLineTwoElement.value;
    }
}
addressLineTwoElement.addEventListener('change', addressLineTwoElementValidation);



// 8. Mailing Address ---------------> City/Town:

const cityElement = document.getElementById('city');
const cityErrorMsg = document.getElementById('city-error-msg');
const cityInfo = document.getElementById('city-info');

function cityElementValidaty() {
    if (!cityElement.validity.valid) {
        cityErrorMsg.classList.remove('d-none');
        if (cityElement.validity.valueMissing) {
            cityErrorMsg.innerHTML = "You must provide a city/town name.";
        } else if (cityElement.validity.tooLong) {
            cityErrorMsg.innerHTML = "The city/town name must not be longer than 33 characters.";
        }
    } else {
        cityErrorMsg.classList.add('d-none');
        cityInfo.innerHTML = cityElement.value;
    }
}
cityElement.addEventListener('change', cityElementValidaty);



// 8. Mailing Address ---------------> District/Country/Province/State:

const provinceElement = document.getElementById('province');
const provinceErrorMsg = document.getElementById('province-error-msg');
const provinceInfo = document.getElementById('province-info');

function provinceElementValidaty() {
    if (!provinceElement.validity.valid) {
        provinceErrorMsg.classList.remove('d-none');
        if (provinceElement.validity.valueMissing) {
            provinceErrorMsg.innerHTML = "You must provide a District/Country/Province/State name.";
        } else if (provinceElement.validity.tooLong) {
            provinceErrorMsg.innerHTML = "The District/Country/Province/State name must not be longer than 33 characters.";
        }
    } else {
        provinceErrorMsg.classList.add('d-none');
        provinceInfo.innerHTML = provinceElement.value;
    }
}
provinceElement.addEventListener('change', provinceElementValidaty);



// 8. Mailing Address ---------------> Postal Code/Zip Code:

const zipCodeElement = document.getElementById('zcode');
const zipCodeErrorMsg = document.getElementById('zcode-error-msg');
const noZipCode = document.getElementById('no-zcode');
const zipCodeInfo = document.getElementById('zcode-info');

function zipCodeElementValidation() {
    if (!zipCodeElement.validity.valid) {
        zipCodeErrorMsg.classList.remove('d-none');
        if (zipCodeElement.validity.valueMissing) {
            zipCodeErrorMsg.innerHTML = "You must provide a postal/zip code. If there is no postal/zip code, enable the 'No Postal Code / Zip Code' checkbox.";
        } else if(zipCodeElement.validity.tooLong) {
            zipCodeErrorMsg.innerHTML = "The Posta/Zip code must not be longer than 33 characters.";
        }
    } else {
        zipCodeErrorMsg.classList.add('d-none');
        zipCodeInfo.innerHTML = zipCodeElement.value;
    }
}
zipCodeElement.addEventListener('change', zipCodeElementValidation);

function disableZipCodeElement() {
    if (noZipCode.checked) {
        zipCodeElement.value = null;
        zipCodeElement.disabled = true;
        zipCodeErrorMsg.classList.add('d-none');
        zipCodeInfo.innerHTML = null;
    } else {
        zipCodeElement.disabled = false;
    }
}
noZipCode.addEventListener('click', disableZipCodeElement);



// 8. Mailing Address ---------------> Country:

const countryElement = document.getElementById('country');
const countryErrorMsg = document.getElementById('country-error-msg');
const countryInfo = document.getElementById('country-info');

function countryElementValidation() {
    if (!countryElement.validity.valid) {
        countryErrorMsg.classList.remove('d-none');
        if (countryElement.validity.valueMissing) {
            countryErrorMsg.innerHTML = "You must select a country.";
        }
    } else {
        countryErrorMsg.classList.add('d-none');
        countryInfo.innerHTML = countryElement.value;
    }
}
countryElement.addEventListener('change', countryElementValidation);



// 9. Country Where You Live Today:

const residenceCountryElement = document.getElementById('residence-country');
const residenceCountryErrorMsg = document.getElementById('residence-country-error-msg');
const residenceCountryInfo = document.getElementById('residence-country-info');

function residenceCountryElementValidation() {
    if (!residenceCountryElement.validity.valid) {
        residenceCountryErrorMsg.classList.remove('d-none');
        if (residenceCountryElement.validity.valueMissing) {
            residenceCountryErrorMsg.innerHTML = "You must select a country.";
        }
    } else {
        residenceCountryErrorMsg.classList.add('d-none');
        residenceCountryInfo.innerHTML = residenceCountryElement.value;
    }
}
residenceCountryElement.addEventListener('change', residenceCountryElementValidation);



// 10. Phone Number:

const phoneNumberElement = document.getElementById('phone');
const phoneNumberErrorMsg = document.getElementById('phone-error-msg');
const phoneNumberInfo = document.getElementById('phone-info');

function phoneNumberElementValidation() {
    if (!phoneNumberElement.validity.valid) {
        phoneNumberErrorMsg.classList.remove('d-none');
        if (phoneNumberElement.validity.tooLong) {
            phoneNumberErrorMsg.innerHTML = "Phone number must not be longer than 33 characters.";
        }
    } else {
        phoneNumberErrorMsg.classList.add('d-none');
        phoneNumberInfo.innerHTML = phoneNumberElement.value;
    }
}
phoneNumberElement.addEventListener('change', phoneNumberElementValidation);



// 11. E-mail Address:

const emailAddressElement = document.getElementById('email-address');
const emailAddressConfirmationElement = document.getElementById('email-address-confirm');
const emailAddressErrorMsg = document.getElementById('email-address-error-msg');
const emailAddressInfo = document.getElementById('email-address-info');

function emailAddressValidation() {
    if (!emailAddressElement.validity.valid) {
        emailAddressErrorMsg.classList.remove('d-none');
        if (emailAddressElement.validity.typeMismatch) {
            emailAddressErrorMsg.innerHTML = "Please provide a valid email address.";
        } else if (emailAddressElement.validity.valueMissing) {
            emailAddressErrorMsg.innerHTML = "You must provide an email address.";
        } else if (emailAddressElement.validity.tooLong) {
            emailAddressErrorMsg.innerHTML = "Email address must not be longer than 33 characters.";
        }

        emailAddressConfirmationElement.value = null;
        emailAddressConfirmationElement.disabled = true;
    } else {
        emailAddressInfo.innerHTML = emailAddressElement.value;
        emailAddressErrorMsg.classList.add('d-none');
        emailAddressConfirmationElement.disabled = false;
    }
}
emailAddressElement.addEventListener('change', emailAddressValidation);

function emailAddressConfirmationProcess() {
    if (!emailAddressElement.validity.valid) {
        emailAddressConfirmationElement.value = null;
        emailAddressConfirmationElement.disabled = true;
    } else {
        if (emailAddressConfirmationElement.value != emailAddressElement.value) {
            emailAddressConfirmationElement.setCustomValidity("Email address confirmation failed.");
        } else {
            emailAddressConfirmationElement.setCustomValidity("");
        }
        if (!emailAddressConfirmationElement.validity.valid) {
            emailAddressErrorMsg.classList.remove('d-none');
            if (emailAddressConfirmationElement.validity.valueMissing) {
                emailAddressErrorMsg.innerHTML = "You must confirm the provided email address.";
            } else if (emailAddressConfirmationElement.validity.customError) {
                emailAddressErrorMsg.innerHTML = emailAddressConfirmationElement.validationMessage;
            }
        } else {
            emailAddressErrorMsg.classList.add('d-none');
        }
    }
}
emailAddressConfirmationElement.addEventListener('change', emailAddressConfirmationProcess);

function emailAddressVisibility() {
    emailAddressErrorMsg.classList.remove('d-none');
    if (emailAddressElement.validity.valid && emailAddressConfirmationElement.validity.valid) {
        emailAddressErrorMsg.classList.add('d-none');
    }
}



// 12. What is the highest level of education you have achieved, as of today?

const educationLevelChoices = [document.getElementById('pso'), document.getElementById('hsnd'), document.getElementById('hsd'), document.getElementById('vs'), document.getElementById('suc'), document.getElementById('ud'), document.getElementById('sglc'), document.getElementById('md'), document.getElementById('sdlc'), document.getElementById('dd')];
const educationLevelErrorMsg = document.getElementById('education-error-msg');
const educationLevelInfo = document.getElementById('education-info');
let selectedEducationLevel = 0;

function educationLevelValidation() {
    for (let edu of educationLevelChoices) {
        if (edu.checked) {
            selectedEducationLevel = 1;
        }
    }
    if (selectedEducationLevel == 0) {
        educationLevelErrorMsg.classList.remove('d-none');
        educationLevelErrorMsg.innerHTML = "You must select an education level.";
    } else {
        educationLevelErrorMsg.classList.add('d-none');
        for (let cho of educationLevelChoices) {
            if (cho.checked) {
                educationLevelInfo.innerHTML = cho.value;
            }
        }
    }
}
educationLevelChoices[0].addEventListener('click', educationLevelValidation);
educationLevelChoices[1].addEventListener('click', educationLevelValidation);
educationLevelChoices[2].addEventListener('click', educationLevelValidation);
educationLevelChoices[3].addEventListener('click', educationLevelValidation);
educationLevelChoices[4].addEventListener('click', educationLevelValidation);
educationLevelChoices[5].addEventListener('click', educationLevelValidation);
educationLevelChoices[6].addEventListener('click', educationLevelValidation);
educationLevelChoices[7].addEventListener('click', educationLevelValidation);
educationLevelChoices[8].addEventListener('click', educationLevelValidation);
educationLevelChoices[9].addEventListener('click', educationLevelValidation);



// 13. What is your current marital status?

const Unmarried = document.getElementById('unmarried');
const marriedSpouseNot = document.getElementById('married-spouse-not');
const marriedSpouse = document.getElementById('married-spouse');
const divorced = document.getElementById('divorced');
const widowed = document.getElementById('widowed');
const legallySeparated = document.getElementById('legally-separated');
const maritalStatusChoices = [Unmarried, marriedSpouseNot, marriedSpouse, divorced, widowed, legallySeparated];
const spouseInfo = document.getElementById('spouse-info');
const maritalStatusErrorMsg = document.getElementById('marital-status-error-msg');
const maritalStatusInfo = document.getElementById('marital-status-info');
let selectedMaritalStatus = 0;

function maritalStatusValidation() {
    for (let mar of maritalStatusChoices) {
        if (mar.checked) {
            selectedMaritalStatus = 1;
        }
    }
    if (selectedMaritalStatus == 0) {
        maritalStatusErrorMsg.classList.remove('d-none');
        maritalStatusErrorMsg.innerHTML = "You must select an marital status.";
    } else {
        maritalStatusErrorMsg.classList.add('d-none');
        for (let cho of maritalStatusChoices) {
            if (cho.checked) {
                maritalStatusInfo.innerHTML = cho.value;
            }
        }
    }
}
maritalStatusChoices[0].addEventListener('click', maritalStatusValidation);
maritalStatusChoices[1].addEventListener('click', maritalStatusValidation);
maritalStatusChoices[2].addEventListener('click', maritalStatusValidation);
maritalStatusChoices[3].addEventListener('click', maritalStatusValidation);
maritalStatusChoices[4].addEventListener('click', maritalStatusValidation);
maritalStatusChoices[5].addEventListener('click', maritalStatusValidation);

function undisableSpouseInfo() {
    if (legallySeparated.checked) {
        spouseInfo.disabled = false;
    }
}
legallySeparated.addEventListener('click', undisableSpouseInfo);

function disableSpouseInfo() {
    if (Unmarried.checked || marriedSpouseNot.checked || marriedSpouse.checked || divorced.checked || widowed.checked) {
        spouseInfo.disabled = true;
    }
}
Unmarried.addEventListener('click', disableSpouseInfo);
marriedSpouseNot.addEventListener('click', disableSpouseInfo);
marriedSpouse.addEventListener('click', disableSpouseInfo);
divorced.addEventListener('click', disableSpouseInfo);
widowed.addEventListener('click', disableSpouseInfo);



// 14. Number of Children

const childrenNumberElement = document.getElementById('children-number');
const childrenNumberErrorMsg = document.getElementById('children-number-error-msg');
const childrenNumberInfo = document.getElementById('children-number-info');

function childrenNumberValidation() {
    if (!childrenNumberElement.validity.valid) {
        childrenNumberErrorMsg.classList.remove('d-none');
        if (childrenNumberElement.validity.valueMissing) {
            childrenNumberErrorMsg.innerHTML = "You must enter the number of your children.";
        } else if (childrenNumberElement.validity.rangeUnderFlow || childrenNumberElement.validity.rangeOverFlow) {
            childrenNumberErrorMsg.innerHTML = "Only numeric values between 0 and 20 are allowed.";
        }
    } else {
        childrenNumberErrorMsg.classList.add('d-none');
        childrenNumberInfo.innerHTML = String(childrenNumberElement.value).padStart(2, '0');
    }
}
childrenNumberElement.addEventListener('change', childrenNumberValidation);



// Buttons:

const formElement = document.querySelector('form');
const entryFormElements = document.querySelectorAll('.entry-form');
const entrantInfoElements = document.querySelectorAll('.entrant-info');
const continueBtn = document.getElementById('continue-btn');
const submitBtn = document.getElementById('form-submission');
const goBackBtn = document.querySelectorAll('.go-back-btn');
const generalErrorMsg = document.getElementById('general-error-msg');

function renderEntrantInfo() {
    if (formElement.checkValidity()) {
        generalErrorMsg.setAttribute('class', 'bg-danger p-3 d-none');
        for (let node of entryFormElements) {
            node.classList.add('d-none');
        }
        for (let node of entrantInfoElements) {
            node.classList.remove('d-none');
        }
    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    
        formElement.setAttribute('id', 'sbmt-form');
        submitBtn.setAttribute('form', formElement.id);
    } else {
        generalErrorMsg.classList.remove('d-none');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
continueBtn.addEventListener('click', renderEntrantInfo);

function goBack() {
    for (let node of entryFormElements) {
        node.classList.remove('d-none');
    }
    for (let node of entrantInfoElements) {
        node.classList.add('d-none');
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    formElement.setAttribute('action', '');
    formElement.removeAttribute('id');
    submitBtn.removeAttribute('form');
}
goBackBtn[0].addEventListener('click', goBack);
goBackBtn[1].addEventListener('click' , goBack);

continueBtn.addEventListener('click', lastNameValidation);
continueBtn.addEventListener('click', firstNameValidation);
continueBtn.addEventListener('click', middleNameValidation);
continueBtn.addEventListener('click', nameErrorVisibility);
continueBtn.addEventListener('click', genderValidation);
continueBtn.addEventListener('click', birthMonthValidation);
continueBtn.addEventListener('click', birthDayValidation);
continueBtn.addEventListener('click', birthYearValidation);
continueBtn.addEventListener('click', birthDateErrorMsgVisibility);
continueBtn.addEventListener('click', birthCityValidation);
continueBtn.addEventListener('click', birthCountryValidation);
continueBtn.addEventListener('click', eligibilityCountryValidation);
continueBtn.addEventListener('click', entrantPhotographProcesses);
continueBtn.addEventListener('click', inCareOfElementValidation);
continueBtn.addEventListener('click', addressLineOneElementValidation);
continueBtn.addEventListener('click', addressLineTwoElementValidation);
continueBtn.addEventListener('click', cityElementValidaty);
continueBtn.addEventListener('click', provinceElementValidaty);
continueBtn.addEventListener('click', zipCodeElementValidation);
continueBtn.addEventListener('click', countryElementValidation);
continueBtn.addEventListener('click', residenceCountryElementValidation);
continueBtn.addEventListener('click', phoneNumberElementValidation);
continueBtn.addEventListener('click', emailAddressConfirmationProcess);
continueBtn.addEventListener('click', emailAddressValidation);
continueBtn.addEventListener('click', emailAddressVisibility);
continueBtn.addEventListener('click', educationLevelValidation);
continueBtn.addEventListener('click', maritalStatusValidation);
continueBtn.addEventListener('click', childrenNumberValidation);


