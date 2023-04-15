import { burgerMenu } from './burgerMenu.js'
import { loadingCards } from './loadingCards.js'
import { popupForm } from './popupForm.js'
import { slider } from './slider.js'
import { animation } from './animation.js'

const burger = document.querySelector('.burger'),
	nav = document.querySelector('.header__nav'),
	link = document.querySelectorAll('.header__link')

burgerMenu(burger, nav, link)

popupForm(burger, nav)

loadingCards()

slider()

animation()
