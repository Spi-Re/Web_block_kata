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

let swiperOne = document.querySelector('.swiper-one');

const windowInnerWidth = window.innerWidth;



function initSlider() {
	new Swiper('.swiper', {
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


function detectDevice() {
	if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && windowInnerWidth <= 498){
	  // true for mobile device
	  initSlider();
	  
	}else{
	  // false for not mobile device
	  
	}
  }
  
  detectDevice();