import { emailValidation } from "./emailValidation.js";

const emailField = document.querySelector('input[type="email"]');
const errorMessage = document.querySelector(".error-message");
const btnSubscribe = document.getElementById("btn-subscribe");
const btnDismiss = document.getElementById("btn-dismiss");

const infoCard = document.querySelector(".info");
const successCard = document.querySelector(".success");

emailField.addEventListener('blur', () => {
    isValidEmail();
});

emailField.addEventListener('invalid', (event) => event.preventDefault())

btnSubscribe.addEventListener('click', (event) => {
    event.preventDefault();
    const isValid = isValidEmail();
    if (isValid) {
        infoCard.classList.add('hidden')
        successCard.classList.remove('hidden')
    }
});

btnDismiss.addEventListener('click', (event) => {
    event.preventDefault();
    emailField.value = "";
    infoCard.classList.remove('hidden')
    successCard.classList.add('hidden')
})

function isValidEmail() {
    const isValid = emailValidation(emailField.value);
    if (!isValid) {
        errorMessage.textContent = "Valid email required";
        emailField.classList.add("error-input");
    } else {
        errorMessage.textContent = "";
        emailField.classList.remove("error-input");
    }
    return isValid;
}
