const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
}) ;

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skill__persents'),
    lines = document.querySelectorAll('.skill__orangeblock');

counters.forEach( (item, i) =>{
    lines[i].style.width = item.innerHTML;
});  