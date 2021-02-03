const navBurger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');

const showMenu = ()=>{
    mobileMenu.classList.toggle('nav__menu--active');
    navLinks.forEach(function(link){
        link.classList.toggle('nav__link--active');
    }
    )

}



navBurger.addEventListener('click', showMenu)