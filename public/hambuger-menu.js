const hambuger = document.querySelector('.header__mobile-menu');
const menu = document.querySelector('nav');

hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('open');
    menu.classList.toggle('show');
})