const fName = document.getElementById('fname');
const noFName = document.getElementById('no-fname');
function disableFName() {
    if (noFName.checked) {
        fName.value = null;
        fName.disabled = true;
    } else {
        fName.disabled = false;
    }
}
noFName.addEventListener('click', disableFName);


const mName = document.getElementById('mname');
const noMName = document.getElementById('no-mname');
function disableMName() {
    if (noMName.checked) {
        mName.value = null;
        mName.disabled = true;
    } else {
        mName.disabled = false;
    }
}
noMName.addEventListener('click', disableMName);


const bCity = document.getElementById('bcity');
const noBCity = document.getElementById('no-bcity');
function disableBCity() {
    if (noBCity.checked) {
        bCity.value = null;
        bCity.disabled = true;
    } else {
        bCity.disabled = false;
    }
}
noBCity.addEventListener('click', disableBCity);


const bEligCountry = document.getElementById('elig-country');
const yesBEligCountry = document.getElementById('yes-bcountry-eligibility');
const noBEligCountry = document.getElementById('no-bcountry-eligibility');
function disableEligCountry() {
    bEligCountry.value = "Select A Country...";
    bEligCountry.disabled = true;
}
function removedisabilityEligCountry() {
    bEligCountry.disabled = false;
}
yesBEligCountry.addEventListener('click', disableEligCountry);
noBEligCountry.addEventListener('click', removedisabilityEligCountry);


const zCode = document.getElementById('zcode');
const noZCode = document.getElementById('no-zcode');
function disableZCode() {
    if (noZCode.checked) {
        zCode.value = null;
        zCode.disabled = true;
    } else {
        zCode.disabled = false;
    }
}
noZCode.addEventListener('click', disableZCode);


const entrantPhotograph = document.getElementById('entrant-photograph');
const entrantPhotographTrigger = document.getElementById('entrant-photograph-trigger');
const entrantPhotographName = document.getElementById('entrant-photograph-name');
const fileObjectImage = document.getElementById('entrant-photograph-show');
function fileInputTrigger() {
    entrantPhotograph.click();
}
entrantPhotographTrigger.addEventListener('click', fileInputTrigger);
function presentSelectedImage() {
    const fileObject = entrantPhotograph.files[0];
    entrantPhotographName.value = fileObject.name;
    const fileObjectURL = URL.createObjectURL(fileObject);
    fileObjectImage.src = fileObjectURL;
    fileObjectImage.alt = fileObject.name;
    fileObjectImage.height = 120;
    fileObjectImage.width = 120;
}
entrantPhotograph.addEventListener('input', presentSelectedImage);


const Unmarried = document.getElementById('unmarried');
const marriedSpouseNot = document.getElementById('married-spouse-not');
const marriedSpouse = document.getElementById('married-spouse');
const divorced = document.getElementById('divorced');
const widowed = document.getElementById('widowed');
const legallySeparated = document.getElementById('legally-separated');
const spouseInfo = document.getElementById('spouse-info');
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