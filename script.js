const navBurger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');
// const slider = document.querySelector('.certificates__carousel__track');
// const slides = Array.from(document.querySelectorAll('.certificates__carousel__slide'));
// let dragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let previousTranslate = 0;
// let animationID = 0;
// let currentIndex = 0;

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

// slides.forEach((slide, index)=>{
//     const slideImage = slide.querySelector('img');
//     slideImage.addEventListener('dragstart', (e)=>e.preventDefault())

//     //touchEvents
//     slide.addEventListener('touchstart', touchStart(index))
//     slide.addEventListener('touchend', touchEnd)
//     slide.addEventListener('touchmove', touchMove)
//     //mouseEvents
//     slide.addEventListener('mousedown', touchStart(index))
//     slide.addEventListener('mouseup', touchEnd)
//     slide.addEventListener('mouseleave', touchEnd)
//     slide.addEventListener('mousemove', touchMove)
// })


//disable context menu
// window.oncontextmenu = function (event){
//     event.preventDefault();
//     event.stopPropagation(); 
//     return false;
// }

// function touchStart(index){
//     return function (event){
//         console.log('start');
//         startPos = getPositionX(event)
//         currentIndex = index;
//         dragging = true;
//         animationID = requestAnimationFrame(animate)
//     }
// }

// function touchEnd(){
//         dragging = false;
//         const movedBy = currentTranslate - previousTranslate 

//         if(movedBy < -100 && currentIndex < slides.length - 1){
//         currentIndex += 1;
//         }else if( movedBy > 100 && currentIndex > 0){
//             currentIndex =-1;
//         }

//         setPositionByIndex()

//         cancelAnimationFrame(animationID);
// }

// function touchMove(event){
//         if (dragging){
//             const currentPosition = getPositionX(event);
//             currentTranslate = previousTranslate + currentTranslate - startPos;
//         }
// }

// function getPositionX(event){
//    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
// }

// function animate(){
//     setSliderPosition()
//     if (dragging)requestAnimationFrame(animate)
// }


// function setSliderPosition(){
//     slider.style.transform = `translateX(${currentTranslate}px)`;
// }

// function setPositionByIndex(){
//     currentTranslate = currentIndex * -window.innerWidth;
//     previousTranslate = currentTranslate;
//     setSliderPosition();
// }








scrollWebsite()
navBurger.addEventListener('click', showMenu)