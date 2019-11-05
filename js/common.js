$(document).ready(function () {
	
	// Меню на мобильном
	$('.mob-btn').on('click',function () {
		$(this).toggleClass('active');
		$('.header__nav').toggleClass('active');
	});

	//slider
	$('.main-slider').slick({
		asNavFor: '.slider-preview'
	});

	$('.slider-preview').slick({
		slidesToShow: 3,
		focusOnSelect: true,
		centerMode: true,
		asNavFor: '.main-slider',
		arrows: false
	});

	// Смена картинки 
	$('.cloth-preview__item').on('click',function () {
		var img = $(this).find('img').attr('src');

		$('.cloth-img').find('img').attr('src', img);
	})
})