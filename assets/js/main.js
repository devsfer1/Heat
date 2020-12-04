var menuBtn = document.querySelector('.nav__bars');
var burger = document.querySelector('.nav__burger');
var navList = document.querySelector('.nav__list');
var navbar = document.querySelector('.nav');
var header = document.querySelector('#header');
var navLink = document.getElementsByClassName('nav__link');
var menuOpen = false;

//Eventos
menuBtn.addEventListener('click', btnAnimation);
menuBtn.addEventListener('click', ativarNavbar);
window.addEventListener('scroll', stickyNav);


//Sticky nav
function stickyNav() {
    header.classList.toggle('sticky', window.scrollY > 20);
};

//Ativar nav
function ativarNavbar() {
    navList.classList.toggle('hidden');
    header.style.backgroundColor = '#fafffb';
};


//Animação menu bars
function btnAnimation(){
    if (menuOpen == false) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
};
