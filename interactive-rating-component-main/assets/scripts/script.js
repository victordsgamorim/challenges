const numbers = document.querySelectorAll(".card__rating-numbers li");
const btnSubmit = document.querySelector(".btn-submit");
const ratingCard = document.querySelector(".rating-card");
const greetingCard = document.querySelector(".greeting-card");
const ratingNumber = document.querySelector(".rating-result");

const selectedClass = 'selected';
let selectedValue = null;

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        const selected = document.querySelector(`.${selectedClass}`);
        if (selected !== null) selected.classList.remove(selectedClass);
        number.classList.add(selectedClass);
        selectedValue = number.innerText;
    })
});

btnSubmit.addEventListener('click', (event) => {

    if (selectedValue === null) {
        alert("Please, select a rating number!")
        return;
    }
    ratingCard.classList.add('hidden');
    greetingCard.classList.remove('hidden');
    ratingNumber.innerText = selectedValue;
})