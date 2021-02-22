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
const scrollWebsite = () => {
    navLinks.forEach(link => link.addEventListener('click', scrollToSection));
}



function scrollToSection(){
    smoothScroll(event)
    
    if(mobileMenu.classList.contains('nav__menu--active')){ //zamykanie menu na małym ekranie
        showMenu();
}
}

const smoothScroll = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);//ten console.log pokazuje co zostało kliknięte
    const targetClass = event.currentTarget.getAttribute('href');
    window.scrollTo({
        top: targetClass==="#" ? 0 : document.querySelector(targetClass).offsetTop,
        behavior:"smooth"
    })
}

document.querySelector('.nav__logo a').addEventListener('click', scrollToSection);

scrollWebsite();






navBurger.addEventListener('click', showMenu)