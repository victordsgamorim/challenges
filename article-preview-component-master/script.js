const bthShare = document.querySelector('.btn-share');
const shareWrapper = document.querySelector('.share-wrapper');
const medias = document.querySelectorAll('.share__social-media li');

bthShare.addEventListener('click', (event) => {
    if (isGreaterThan800()) {
        shareWrapper.classList.toggle('on-share--bubble');
        return;
    }

    shareWrapper.classList.toggle('on-share');

})

medias.forEach((media) => {
    media.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

function isGreaterThan800() {
    return window.innerWidth >= 800;
}


window.addEventListener('resize', () => {
    const onShareSlide = document.querySelector('.on-share');
    const onShareBubble = document.querySelector('.on-share--bubble');
    if (onShareSlide != null && window.innerWidth >= 600) {
        shareWrapper.classList.remove('on-share');
    } else if (onShareBubble != null && window.innerWidth <= 900) {
        shareWrapper.classList.remove('on-share--bubble');
    }
})