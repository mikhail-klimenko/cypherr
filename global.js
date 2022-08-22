$('document').ready(function () {
	// ВЫПАДАЮЩЕЕ МЕНЮ ПРИ НАВЕДЕНИИ И ЕГО ПРОПАЖА ПРИ ОТВЕДЕНИИ
	$('.header__menu li').mouseenter(function () {
		$('.drop-menu').addClass("show");
	})
	$(".header__menu li").mouseleave(function () {
		$('.drop-menu').removeClass('show');
	})

	// СМЕНА БУРГЕРА НА КРЕСТИК И КРЕСТИКА НА БУРГЕР
	// ТАК ЖЕ ЗАПРЕТ СКРОЛЛА ДЛЯ БОДИ И ПОЯВЛЕНИЕ И ИСЧЕЗАНИЕ МЕНЮ БУРГЕРА
	$('.header__burger').on('click', function () {
		$('.header__burger-line').toggleClass('header__burger--active')
		$('.header__burger-menu').toggleClass('header__burger-menu--active')
		$('body').toggleClass('no-overflow')
	})

	// ЗАМЕНА СЛОВА "МОБИЛЬНЫЕ" НА "МОБ" ПРИ РАЗРЕШЕНИЯХ 1050 И НИЖЕ
	if (document.documentElement.clientWidth <= 1050) {
		var menuTitle = $(".header__menu-item")
		for (var i = 0; i < menuTitle.length; i++) {
			if (menuTitle[i].textContent == "Мобильные приложения ") {
				menuTitle[i].textContent = "Моб. приложения"
			}
		}
	}
})

//projects tabs
const tabsItems = Array.from(document.querySelectorAll('.projects__tab-item'))
const contentItems = Array.from(document.querySelectorAll('.projects__tab-content-item'))

const setActiveClass = (element, index, className = 'active') => {
	element[index].classList.add(`${className}`)
}

const clearActiveClass = (element, className = 'active') => {
	element.find(item => item.classList.remove(`${className}`))
}

const checkoutTabs = (item, index) => {
	item.addEventListener('click', () => {

		if (item.classList.contains('active')) return
		console.log(item)

		clearActiveClass(tabsItems)
		clearActiveClass(contentItems)


		setActiveClass(tabsItems, index)
		setActiveClass(contentItems, index)
	})
}

tabsItems.forEach(checkoutTabs)

