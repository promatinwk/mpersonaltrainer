const navBurger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');
const carouselTrack = document.querySelector('.certificates__carousel__track');
const carouselSlides = document.querySelectorAll('.certificates__carousel__slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const contactBtn = document.querySelector('.ask-us');
const emailForm = document.querySelector('.email-site');
const closeBtn = document.querySelector('.close-email');




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

//slider certificates

let counter = 1;
const size = carouselSlides[0].clientWidth;

carouselTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';

//btns listeners

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselSlides.length - 1) return;
    carouselTrack.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0 ) return;
    carouselTrack.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselTrack.addEventListener('transitionend', ()=>{
    if(carouselSlides[counter].id === 'lastClone'){
        carouselTrack.style.transition = 'none';
        counter = carouselSlides.length - 2;
        carouselTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }else if (carouselSlides[counter].id === 'firstClone'){
        carouselTrack.style.transition = 'none';
        counter = carouselSlides.length - counter;
        carouselTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})






contactBtn.addEventListener('click', ()=>{
    emailForm.classList.add('active');
    console.log('klik!')
})
closeBtn.addEventListener('click', ()=>{
    emailForm.classList.remove('active');
    console.log('klik2!')
})


scrollWebsite()
navBurger.addEventListener('click', showMenu)