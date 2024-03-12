import { emailValidation } from "./email-validation.js";

const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('.input-form');
const btnSubmit = document.querySelector('button[type="submit"]');


inputs.forEach((input) => {
    input.addEventListener('blur', () => validateFields(input))
    input.addEventListener('invalid', (event) => event.preventDefault())
})

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    inputs.forEach((input) => validateFields(input))
})

function validateFields(input) {
    if (input.name === 'firstName') {
        verifyField(input, "First Name cannot be empty", input.checkValidity());
        return;
    }

    if (input.name === "secondName") {
        verifyField(input, "Second Name cannot be empty", input.checkValidity());
        return;
    }

    if (input.name === "email") {
        verifyField(input, "Looks like this is not an email", emailValidation(input.value));
        return;
    }
    verifyField(input, "Password cannot be empty", input.checkValidity());
}

function verifyField(input, message, isValid) {
    let m = '';
    if (!isValid) {
        m = message;
        input.classList.add("input-error");
    } else {
        m = '';
        input.classList.remove("input-error");
    }

    const errorMessage = input.parentNode.querySelector('.message-error');
    errorMessage.textContent = m;
}