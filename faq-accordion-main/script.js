const radioBtn = document.querySelectorAll('input[type=radio]');
const paragraphs = document.querySelectorAll('.card__paragraph');
const indicators = document.querySelectorAll('.expansion-tile__indicator');

const cardVisibility = 'card-visibility';
const minusIcon = 'assets/images/icon-minus.svg';
const plusIcon = 'assets/images/icon-plus.svg';

radioBtn.forEach((element, index) => {

    element.addEventListener('click', (event) => {
        toggleParagraph(paragraphs[index]);
        toggleIndicator(indicators[index]);
    })

})

function toggleParagraph(paragraph) {
    document.querySelector(`.${cardVisibility}`).classList.toggle(cardVisibility);
    paragraph.classList.add(cardVisibility);
}

function toggleIndicator(indicator) {
    const img = document.querySelector(`img[src="${minusIcon}"]`);
    img.setAttribute('src', plusIcon);
    indicator.setAttribute('src', minusIcon)
}
