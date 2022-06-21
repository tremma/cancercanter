/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

// burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

if(burger){
  burger.addEventListener('click', function(){
    this.classList.toggle('burger--active');
    nav.classList.toggle('active');
    body.classList.toggle('lock');
  })
}
// ==========================================================================================
//scroll-to-top
const scrollSize = 100;
const scrollUp = document.querySelector('.scroll-to-top');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


window.addEventListener('scroll', () => {
   if (getTop() > scrollSize) {
      scrollUp.classList.add('show');
   } else {
      scrollUp.classList.remove('show');
   }
});

scrollUp.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});

// popup

const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelectorAll('.popup-open-btn');
const popupCloseBtn = document.querySelectorAll('.popup-close');

  // open
  popupOpenBtn.forEach(function(popupBtn){
    popupBtn.addEventListener('click', function(e){
      e.preventDefault();
      popup.classList.toggle('popup-open');
      body.classList.add('lock');
    })
  })

    // close
    popupCloseBtn.forEach(function(closeBtn){
      closeBtn.addEventListener('click', function(e){
        
        popup.classList.remove('popup-open');
        body.classList.remove('lock');
      })
    })
  
// ===========================================================================

// accordion

const accordionItems = document.querySelectorAll('.accordion__item');
		
if(accordionItems.length > 0){
  
  for(let i=0; i < accordionItems.length; i++){
    accordionItems[i].addEventListener('click', function(){
      
      this.classList.toggle('active')
    })
  }
}
	
// hero slider
var heroSlider = new Swiper('.hero__slider', {
  effect: 'fade',
  slidesPerView: 1,
  speed: 2400,
  parallax: true,
  loop: true,
  autoplay: {
     delay: 8000,
   },
  //  breakpoints: {
  //   320: {
  //     slidesPerView: 'auto',
  //     centeredSlides: false,
  //   },
  //   800: {
  //     effect: 'coverflow',
  //     slidesPerView: 'auto',
  //     centeredSlides: true,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 400,
  //       depth: 200,
  //       modifier: 1,
  //       slideShadows : true,
  //     },
  //   },
  //   1125: {
  //     slidesPerView: 'auto',
  //   },
  //  },  
   pagination: {
    el: '.hero__slider-pug',
  },
});

const textSlider = new Swiper('.text__slider', {
  direction: 'vertical',
  speed: 2400,
  loop: true,
  parallax: true,
  
});

heroSlider.controller.control = textSlider;
textSlider.controller.control = heroSlider;

// testimon slider
var testimonSlider = new Swiper('.testimon__slider', {
  slidesPerView: 1,
  speed: 2400,
  parallax: true,
  loop: true,
  autoplay: {
     delay: 8000,
   },
       // Navigation arrows
  navigation: {
    nextEl: '.testimon-slider-prev',
    prevEl: '.testimon-slider-next',
  },
  //  breakpoints: {
  //   320: {
  //     slidesPerView: 'auto',
  //     centeredSlides: false,
  //   },
  //   800: {
  //     effect: 'coverflow',
  //     slidesPerView: 'auto',
  //     centeredSlides: true,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 400,
  //       depth: 200,
  //       modifier: 1,
  //       slideShadows : true,
  //     },
  //   },
  //   1125: {
  //     slidesPerView: 'auto',
  //   },
  //  },  

});

// partners slider
var partnersSlider = new Swiper('.partners__slider', {
  slidesPerView: 4,
  // centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  // grabCursor: true,
  autoplay: {
     delay: 6000,
   },
   breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    620: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 4,
      // centeredSlides: true,
      spaceBetween: 10,
    },
    1125: {
      slidesPerView: 4,
    },
   },  
  
});