let buttonMore = document.querySelector('.about-company__main-column--text--more')
let buttonMoreImage = document.querySelector('.more-text-img')
let buttonText = document.querySelector('.more-text')
let blockMoreInfo = document.querySelector('.more-info')

let blockCompany = document.querySelector('.body-company');

buttonMore.addEventListener('click', function(evt) {
	if (blockCompany.classList.contains('body-hidden')) {
		blockCompany.classList.remove('body-hidden')
		buttonMoreImage.classList.add('rotate')
		blockMoreInfo.classList.add('pad');
		buttonText.textContent = 'Скрыть'
	} else {
		blockCompany.classList.add('body-hidden')
		buttonMoreImage.classList.remove('rotate')
		blockMoreInfo.classList.remove('pad');
		buttonText.textContent = 'Показать ещё'
	}
});

/* Swiper
**************************************************************/
var swiper = Swiper;
var init = false;

/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 498px)');
    let tablet = window.matchMedia('(min-width: 499px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper', {
				// freeMode: true,
				slidesPerView: "auto",
				loop: true,
				spaceBetween: 20,
				pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
				  type: 'bullets',
				},
				breakpoints: {

                    767: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        effect: 'coverflow',

                        coverflowEffect: {
                            rotate: 0,
                            stretch: 20,
                            depth: 120,
                            modifier: 3,
                            slideShadows: false,
                        }
                    }
			  	},
			});
        }
	}	else if(tablet.matches) {
        	swiper.destroy();
        	init = false;
    	}
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});


/* let swiperOne = document.querySelector('.swiper-one');

const windowInnerWidth = window.innerWidth;


document.addEventListener('DOMContentLoaded', () => {
	const width = window.innerWidth
	if (width < 498){
	  const slider = new Swiper('.swiper', {
		// freeMode: true,
		slidesPerView: "auto",
		loop: true,
		spaceBetween: 20,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		  type: 'bullets',
		},
	  });
	}
  }) */