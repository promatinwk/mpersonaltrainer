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
        let targetPosition = scrollTarget.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let distance;
        if(startPosition > 1){
            distance = targetPosition - startPosition;
        }else if(targetPosition < 1){
            distance = startPosition - targetPosition;
        }
        let startTime = null;
        console.log(startPosition);
        console.log(targetPosition);
        
        


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





// //dziala ale bedzie zmiana na requestAnimationFrame
// const scrollWebsite = () => {
//     navLinks.forEach(link => link.addEventListener('click', scrollToSection));
// }


// //dziala ale bedzie zmiana na requestAnimationFrame
// function scrollToSection(){
//     smoothScroll(event)
    
//     if(mobileMenu.classList.contains('nav__menu--active')){ //zamykanie menu na małym ekranie
//         showMenu();
// }
// }


// //dziala ale bedzie zmiana na requestAnimationFrame
// const smoothScroll = (event) => {
//     event.preventDefault();
//     console.log(event.currentTarget);//ten console.log pokazuje co zostało kliknięte
//     const targetClass = event.currentTarget.getAttribute('href');
//     window.scrollTo({
//         top: targetClass==="#" ? 0 : document.querySelector(targetClass).offsetTop,
//         behavior:"smooth"
//     })
// }

// document.querySelector('.nav__logo a').addEventListener('click', scrollToSection);

// scrollWebsite();






navBurger.addEventListener('click', showMenu)