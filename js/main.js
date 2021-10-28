const slide =() => {
    const ham = document.querySelector('.hamb-right');
    const navParent = document.querySelector('.header-nav');
    const nav = document.querySelector('.nav-options');
    const navBar = document.querySelector('.right-content');
    const links = document.querySelectorAll('.nav-options li');

    ham.addEventListener('click', () => {
        nav.classList.toggle('nav-is-pressed');
        
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `animateLinkItems 0.5s ease forwards ${index/7 + 0.8}s`;
            }
        });
        navParent.classList.toggle('nav-is-pressed-bkg');
        if(navParent.classList.contains('header-nav')) {
            navParent.classList.remove('header-nav');
        } else {
            navParent.classList.add('header-nav');
        }
        ham.classList.toggle('toggle');
    })
}
slide();

const options = document.querySelectorAll('.nav-options li');
const links = document.querySelectorAll('.nav-options li a');
const nav = document.querySelector('.nav-options');
const ham = document.querySelector('.hamb-right');
const navParent = document.querySelector('.header-nav');


links.forEach((elm) => {
    elm.addEventListener('click', () => {
        nav.classList.remove('nav-is-pressed');
        ham.classList.remove('toggle');
        options.forEach((link, index) => {
            link.style.animation = ``;
        });
        navParent.classList.add('header-nav');
        navParent.classList.remove('nav-is-pressed-bkg');
    })
})
const mentorList = document.querySelectorAll('.mentor-slider');
const circleSlider = document.querySelectorAll('.circle-slider-pos');
const numberOfSlides = mentorList.length;
var  currentSlideNumber = 0;

var repeater = () => {
    autoPlay = setInterval(()=> {
        mentorList.forEach((slide) => {
            slide.classList.remove('pos');
            slide.style.animation = '';
        })
        circleSlider.forEach((elm) => {
            elm.classList.remove('posit');
        })
        currentSlideNumber++;
    
        if (currentSlideNumber > (numberOfSlides-1)) {
            currentSlideNumber = 0;
        }
        circleSlider[currentSlideNumber].classList.add("posit");
        mentorList[currentSlideNumber].style.animation ='animateMentors 1s ease';
        mentorList[currentSlideNumber].classList.add("pos");
    }, 3000);
}
repeater();

