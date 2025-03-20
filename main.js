const backToTopBtnEl = document.querySelector('.back-to-top');
backToTopBtnEl.addEventListener('click', () => {
    scrollToTop()
})

function scrollToTop() {
    window.scrollTo(0, 0)
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        backToTopBtnEl.classList.remove('hidden')
    } else {
        backToTopBtnEl.classList.add('hidden')
    }
})