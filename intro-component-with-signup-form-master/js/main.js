const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('.input-form');

messages = [];

form.addEventListener('click', (event) => {
    event.preventDefault();
    inputs.forEach((element) => {

        const input = element.value;
        if (element.hasAttribute('data-firstName') && element.value.length == null) {
            console.log("Vai a merda")
            return;
        }

        if (element.hasAttribute('data-secondName') && element.value.length == null) {
            return;
        }

        if (element.hasAttribute('data-email') && element.value.length == null) {
            return;
        }
        if (element.value == null) {

        }
    })
})