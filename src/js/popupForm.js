/**
 * brief: btn login & sign-up
 */

export function popupForm(burger, nav) {
	document.querySelector('.header__btn-login').onclick = function () {
		document.querySelector('.overlay').classList.add('overlay_active')
		document
			.querySelector('.popup__form-login')
			.classList.add('popup__form-login_active')
		burger.classList.remove('active')
		nav.classList.remove('active')
		document.body.classList.remove('overflow')
	}
	document.querySelector('.header__btn-signup').onclick = function () {
		document.querySelector('.overlay').classList.add('overlay_active')
		document
			.querySelector('.popup__form-signup')
			.classList.add('popup__form-signup_active')
		burger.classList.remove('active')
		nav.classList.remove('active')
		document.body.classList.remove('overflow')
	}
	document.querySelector('.popup__close').onclick = function () {
		document.querySelector('.overlay').classList.remove('overlay_active')
		document
			.querySelector('.popup__form-login')
			.classList.remove('popup__form-login_active')
		document
			.querySelector('.popup__form-signup')
			.classList.remove('popup__form-signup_active')
	}
}
