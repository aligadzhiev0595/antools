/**
 * brief: burger menu
 */
export function burgerMenu(burger, nav, link) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		nav.classList.toggle('active')
		document.body.classList.toggle('overflow')
	})

	link.forEach(el => {
		el.addEventListener('click', () => {
			burger.classList.remove('active')
			nav.classList.remove('active')
			document.body.classList.remove('overflow')
		})
	})
}
