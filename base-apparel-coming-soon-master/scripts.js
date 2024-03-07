const banner = document.querySelector('.banner-wrapper');
const content = document.querySelector('.content-wrapper');
const article = document.querySelector('main article');
const main = document.querySelector('main');


const emailField = document.querySelector('input[type="email"]');
const btnSubmit = document.querySelector('.btn-submit');

const emailBox = document.querySelector('.email-box');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const errorIcon = createErrorIcon();

emailField.addEventListener('input', (event) => {
    if (emailField.value.length === 0) return emailField.classList.remove('error');
    if (isValidEmail()) {
        emailField.classList.remove('error')
        errorIcon.remove();
        return;
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        onSubmit();
    }
})

btnSubmit.addEventListener('click', onSubmit)

reorderBanner();
window.addEventListener('resize', (event) => {
    reorderBanner();
});

function onSubmit() {
    if (!isValidEmail()) {
        emailField.classList.add('error');
        emailBox.insertBefore(errorIcon, btnSubmit);
        return;
    }
    emailField.classList.remove('error');
    errorIcon.remove();
    emailField.value = "";
}

function isValidEmail() {
    return regexEmail.test(emailField.value);
}

function reorderBanner() {
    if (window.innerWidth <= 800) {
        article.insertBefore(banner, content);
    } else {
        main.append(banner);
    }
}

function createErrorIcon() {
    const img = document.createElement('img');
    img.src = 'images/icon-error.svg';
    img.alt = 'Error Icon';

    img.style.position = 'absolute';
    img.style.right = 'clamp(5rem, 4.2298rem + 3.2864vi, 7.1875rem)';
    img.style.top = 'clamp(0.75rem, 0.662rem + 0.3756vi, 1rem)';
    img.style.bottom = '0';
    return img;
}
