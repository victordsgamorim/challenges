const form = document.getElementById('form');
const emailField = document.querySelector('input[type="email"]');


const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
const errorElement = createErrorElement();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateEmail();
})

function validateEmail() {
    if (regexEmail.test(emailField.value)) {
        emailField.classList.remove('error')
        errorElement.remove();
        emailField.value = '';
        return;
    }

    emailField.insertAdjacentElement('afterend', errorElement);
    emailField.classList.add('error')
}

function createErrorElement() {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('email_error');
    errorDiv.textContent = "Please provide a valid email address";
    return errorDiv;
}
