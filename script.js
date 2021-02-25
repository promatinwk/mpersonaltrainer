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
    navLinks.forEach(link => link.addEventListener('click', smoothScroll));
}

const smoothScroll = (event)=>{ 
        let targetId = event.currentTarget.getAttribute('href'); // w tą zmienną pobieram atrybut href elementu który kliknąłem.
    const scroll = (target, duration) => {
        let scrollTarget = document.querySelector(targetId);
        let targetPosition = scrollTarget.offsetTop;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let startTime = null;
        
        


        const animationScroll = (currentTime) => {
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let runScroll = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, runScroll);
        if(timeElapsed < duration)requestAnimationFrame(animationScroll);
        }

        function ease (t, b, c, d) {
	        t /= d/2;
	        if (t < 1) return c/2*t*t*t + b;
	        t -= 2;
	        return c/2*(t*t*t + 2) + b;
        };
        requestAnimationFrame(animationScroll) 
    }
    if(mobileMenu.classList.contains('nav__menu--active')){ //zamykanie menu na małym ekranie
       showMenu();
     }

     

    scroll(targetId, 2000);
}




scrollWebsite()






navBurger.addEventListener('click', showMenu)