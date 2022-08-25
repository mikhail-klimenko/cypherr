$('document').ready(function () {
	// ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА И ОБОЗНАЧЕНИЕ СТРЕЛОК МОИМИ КЛАССАМИ
	$('.banner__list').slick({
		prevArrow: '.banner__previous',
		nextArrow: '.banner__next',
	});

	// ДОБАВЛЕНИЕ И УДАЛЕНИЕ АКТИВНОГО КЛАССА ДЛЯ НОМЕРА СЛАЙДЕРА
	$('.banner__list').on('afterChange', function (currentSlide) {
		var banners = $(".banner__number")
		var currentSlide = $('.banner__list').slick('slickCurrentSlide');

		banners[currentSlide].classList.add("banner__number--active")
		$('.banner__number').not(banners[currentSlide]).removeClass('banner__number--active')
	})

	// ВЫЗОВ МОДАЛКИ НА ЗАПРОС
	$('.request-btn').on('click', function () {
		$('.request-popup').addClass('request-popup--active')
		$('body').addClass('no-overflow')
	})
	$('.request-popup__close').on('click', function () {
		$('.request-popup').removeClass('request-popup--active')
		$('body').removeClass('no-overflow')
	})

    // МАСКА ДЛЯ ВВОДА ТЕЛЕФОНА
	$("#phone-number").mask("+7 (999) 999-9999");
})
