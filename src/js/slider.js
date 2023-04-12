/**
 * brief: logic for  sliders
 */

export function slider() {
	const prev = document.querySelector('.btn-prev'),
		next = document.querySelector('.btn-next'),
		sliders = document.querySelectorAll('.review__wrapper'),
		dots = document.querySelectorAll('.dot')

	let index = 0

	const activeSlide = n => {
		// for (slide of sliders) {
		// 	slide.classList.remove('active')
		// }
		sliders.forEach(slide => slide.classList.remove('active'))
		sliders[n].classList.add('active')
	}
	const activeDot = n => {
		// for (dot of dots) {
		// 	dot.classList.remove('active')
		// }
		dots.forEach(dot => dot.classList.remove('active'))
		dots[n].classList.add('active')
	}

	const prepareCurrentSlide = ind => {
		activeSlide(ind)
		activeDot(ind)
	}

	const nextSlide = () => {
		if (index == sliders.length - 1) {
			index = 0
			prepareCurrentSlide(index)
		} else {
			index++
			prepareCurrentSlide(index)
		}
	}
	const prevSlide = () => {
		if (index == 0) {
			index = sliders.length - 1
			prepareCurrentSlide(index)
		} else {
			index--
			prepareCurrentSlide(index)
		}
	}

	dots.forEach((item, indexDot) => {
		item.addEventListener('click', () => {
			index = indexDot
			prepareCurrentSlide(index)
		})
	})

	next.addEventListener('click', nextSlide)
	prev.addEventListener('click', prevSlide)

	// setInterval(nextSlide, 2500)
}
