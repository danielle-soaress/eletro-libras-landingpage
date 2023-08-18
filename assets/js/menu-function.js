const nav = document.querySelector ('nav')
const closeButton = document.querySelector('.close')
const menuButton = document.querySelector ('.menu_button')
menuButton.addEventListener ('click', () => menuShow())
closeButton.addEventListener ('click', () => menuShow())

function menuShow() {
    nav.classList.toggle('opened_menu')
    menuButton.classList.toggle('hide')
    closeButton.classList.toggle('hide')
}
