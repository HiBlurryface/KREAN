// Header
window.onscroll = function showHeader() {
    var header = document.querySelector('.header__row');
    if(window.pageYOffset > 1){
        header.classList.add('active');
    } else{
        header.classList.remove('active');
    }
}

// Burger 

$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__burger,.menu__body').toggleClass('active');
	})
})

// Модальное окно

// открыть по кнопке
$('.works__block').click(function() { 
	
	$('.popup').fadeIn();
	$('.popup').addClass('disabled');
});

// закрыть на крестик
$('.popup__close').click(function() { 
	$('.popup').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.popup__content');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.popup').fadeOut();
	}
});

// SLider 

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		draggable: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.slider__company').slick({
		arrows: false,
		slidesToShow: 6,
		autoplay: true,
		autoplaySpeed: 1000,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
				breakpoint: 425,
				settings: {
					slidesToShow: 2,
				}
			},
						{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				}
			}
		],
	});
});