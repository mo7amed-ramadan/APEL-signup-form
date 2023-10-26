// Declaring constants
const submit = document.getElementById("submit");
const arabicName = document.getElementById("arabic-name");
const englishName = document.getElementById("english-name");
const emailName = document.getElementById("email");
const phoneNum = document.getElementById("phone-num");
const nationalId = document.getElementById("national-id");
const arError = document.getElementById("ar-error");
const enError = document.getElementById("en-error");
const emError = document.getElementById("em-error");
const phError = document.getElementById("ph-error");
const ntError = document.getElementById("nt-error");
// validate form
submit.addEventListener("click", (e) => {
  e.preventDefault();
  validateArName();
  validateEnName();
  validateEmail();
  validatePhone();
  validateNational();
  submit.addEventListener("submit");
});
// Validate Arabic Names
function validateArName() {
  const arNamePattern = /^[\u0600-\u06FF\s]+$/;
  const arName = arabicName.value.trim();
  if (arName == "" || !arNamePattern.test(arName)) {
    arabicName.classList.add("error");
    arError.classList.remove("hide");
    arError.classList.add("show");
    arError.innerText = "ادخل اسمك باللغة العربية بشكل صحيح";
  } else {
    arabicName.classList.remove("error");
    arError.innerText = "";
    arError.classList.add("hide");
    arError.classList.remove("show");
  }
}
// Validate English Names
function validateEnName() {
  const enNamePattern = /^[A-Za-z\s]+$/;
  const enName = englishName.value.trim();
  if (enName == "" || !enNamePattern.test(enName)) {
    englishName.classList.add("error");
    enError.classList.remove("hide");
    enError.classList.add("show");
    enError.innerText = "ادخل اسمك باللغة الإنجليزية بشكل صحيح";
  } else {
    englishName.classList.remove("error");
    enError.innerText = "";
    enError.classList.add("hide");
    enError.classList.remove("show");
  }
}
// Validate Email
function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = emailName.value.trim();
  if (email == "" || !emailPattern.test(email)) {
    emailName.classList.add("error");
    emError.classList.remove("hide");
    emError.classList.add("show");
    emError.innerText = "ادخل الايميل بشكل صحيح";
  } else {
    emailName.classList.remove("error");
    emError.innerText = "";
    emError.classList.add("hide");
    emError.classList.remove("show");
  }
}
// Validate Phone
phoneNum.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  const maxLength = 10;

  if (inputValue.length > maxLength) {
    event.target.value = inputValue.slice(0, maxLength);
  }
});
function validatePhone() {
  const phonePattern = /^\d{10}$/;
  const phoneValue = phoneNum.value.trim();
  if (phoneValue == "" || !phonePattern.test(phoneValue)) {
    phoneNum.classList.add("error");
    phError.classList.remove("hide");
    phError.classList.add("show");
    phError.innerText = "ادخل رقم الهاتف بشكل صحيح";
  } else {
    phoneNum.classList.remove("error");
    phError.innerText = "";
    phError.classList.add("hide");
    phError.classList.remove("show");
  }
}
// Validate National Id
function validateNational() {
  const nationalPattern = /^\d{14}$/;
  const nationalValue = nationalId.value.trim();
  if (nationalValue == "" || !nationalPattern.test(nationalValue)) {
    nationalId.classList.add("error");
    ntError.classList.remove("hide");
    ntError.classList.add("show");
    ntError.innerText = "ادخل رقم الهوية الوطنية بشكل صحيح";
  } else {
    phoneNum.classList.remove("error");
    ntError.innerText = "";
    ntError.classList.add("hide");
    ntError.classList.remove("show");
  }
}
