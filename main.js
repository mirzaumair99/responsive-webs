const backtotopbutton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {

    if (window.scrollY > 700) {
        backtotopbutton.classList.remove('hidden')
    } else {
        backtotopbutton.classList.add('hidden')
    }
})