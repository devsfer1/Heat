const menuBtn = document.querySelector('.nav__bars');
const burger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const navbar = document.querySelector('.nav');
const header = document.querySelector('#header');
const navLink = document.getElementsByClassName('nav__link');
const menuOpen = false;

//Eventos
menuBtn.addEventListener('click', btnAnimation);
window.addEventListener('scroll', stickyNav);


function ativarNavbar() {
    navList.classList.toggle('hidden');
};

//Sticky nav
function stickyNav() {
    header.classList.toggle('sticky', window.scrollY > 20);
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
