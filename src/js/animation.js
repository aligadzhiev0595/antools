export function animation() {
	gsap.to('.home', {
		scrollTrigger: {
			trigger: '.home',
			start: '50 0',
			scrub: true,
			// markers: true
		},
		yPercent: 5,
		duration: 1,
	})

	gsap.from('.tools__title', {
		scrollTrigger: {
			trigger: '.home',
			start: '100 0',
			scrub: true,
			// markers: true
		},
		y: 100,
		autoAlpha: 0,
		duration: 1,
	})

	gsap.from('.tools__subtitle', {
		scrollTrigger: {
			trigger: '.home',
			start: '100 0',
			scrub: true,
			// markers: true
		},
		y: 120,
		autoAlpha: 0,
		duration: 1,
	})

	gsap.from('.wrapper__card-top', {
		scrollTrigger: {
			trigger: '.tools',
			start: '-300 0',
			scrub: true,
			// markers: true
		},
		scale: 0,
		duration: 1,
		stagger: 0.2
	})
	gsap.from('.wrapper__card-text', {
		scrollTrigger: {
			trigger: '.tools',
			start: '-300 0',
			scrub: true,
			// markers: true
		},
		scale: 0,
		duration: 1,
		stagger: 0.2
	})
	gsap.from('.wrapper__card-bottom', {
		scrollTrigger: {
			trigger: '.tools',
			start: '-300 0',
			scrub: true,
			// markers: true
		},
		scale: 0,
		duration: 1,
		stagger: 0.2
	})
	gsap.from('.tools__more', {
		scrollTrigger: {
			trigger: '.tools',
			start: '-300 0',
			scrub: true,
			// markers: true
		},
		y:120,
		autoAlpha: 0,
		duration: 1,
	})
	gsap.from('.companions', {
		scrollTrigger: {
			trigger: '.tools',
			start: '100 0',
			scrub: true,
			markers: true
		},
		y:200,
		autoAlpha: 0,
		duration: 1,
	})
}
