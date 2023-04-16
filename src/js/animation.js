export function animation() {
	const screen = window.matchMedia('(min-width:1024px)')

	if (screen.matches) {
		//header
		gsap.fromTo(
			'.brand',
			{
				y: -50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
			}
		)
		gsap.fromTo(
			'.header__item',
			{
				y: -50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.2,
			}
		)
		gsap.fromTo(
			'.header__item-btn',
			{ y: -50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, stagger: 0.4 }
		)
		//home
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
		gsap.fromTo(
			'.home__title',
			{ y: -100, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1 }
		)
		gsap.fromTo(
			'.home__subtitle',
			{ y: -100, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1 }
		)
		gsap.fromTo(
			'.home__form',
			{ y: -100, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1 }
		)
		gsap.fromTo(
			'.home__inner',
			{ y: -50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, stagger: 0.2 }
		)
		gsap.fromTo('.home__image',
		 {scale:0},
		 {scale:1,duration:1}
		 )
		//tools
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
		gsap.from('.card-animate', {
			scrollTrigger: {
				trigger: '.tools',
				start: '-300 0',
				scrub: true,
				// markers: true
			},
			scale: 0,
			duration: 1,
			stagger: 0.2,
		})

		gsap.from('.tools__more', {
			scrollTrigger: {
				trigger: '.tools',
				start: '-300 0',
				scrub: true,
				// markers: true
			},
			y: 120,
			autoAlpha: 0,
			duration: 1,
		})
		//companions
		gsap.from('.companions', {
			scrollTrigger: {
				trigger: '.tools',
				start: '100 0',
				scrub: true,
				// markers: true
			},
			y: 200,
			autoAlpha: 0,
			duration: 1,
		})
		gsap.from('.new-tools__title', {
			scrollTrigger: {
				trigger: '.tools',
				start: '450 0',
				scrub: true,
				// markers: true
			},
			y: 100,
			autoAlpha: 0,
			duration: 1,
		})
		gsap.from('.new-tools__subtitle', {
			scrollTrigger: {
				trigger: '.tools',
				start: '450 0',
				scrub: true,
				// markers: true
			},
			y: 120,
			autoAlpha: 0,
			duration: 1,
		})
		gsap.from('.new-tools__btn', {
			scrollTrigger: {
				trigger: '.tools',
				start: '450 0',
				scrub: true,
				// markers: true
			},
			y: 140,
			autoAlpha: 0,
			duration: 1,
		})
		//review
		gsap.from('.review__circle', {
			scrollTrigger: {
				trigger: '.new-tools',
				start: '100 0',
				scrub: true,
				// markers: true
			},
			scale: 0,
			duration: 1,
		})
		gsap.from('.review__man', {
			scrollTrigger: {
				trigger: '.new-tools',
				start: '150 0',
				scrub: true,
				// markers: true
			},
			scale: 0,
			duration: 1,
		})
		gsap.from('.review__typography', {
			scrollTrigger: {
				trigger: '.new-tools',
				start: '100 0',
				scrub: true,
				// markers: true
			},
			scale: 0,
			duration: 1,
		})
		gsap.from('.btn-prev', {
			scrollTrigger: {
				trigger: '.new-tools',
				start: '100 0',
				scrub: true,
				// markers: true
			},
			scale: 0,
			duration: 1,
		})
		gsap.from('.btn-next', {
			scrollTrigger: {
				trigger: '.new-tools',
				start: '100 0',
				scrub: true,
				// markers: true
			},
			scale: 0,
			duration: 1,
		})
		gsap.from('.review__desc', {
			scrollTrigger: {
				trigger: '.new-tools',
				start: '100 0',
				scrub: true,
				// markers: true
			},
			y: 140,
			autoAlpha: 0,
			duration: 1,
		})
		gsap.from('.dots', {
			scrollTrigger: {
				trigger: '.new-tools',
				start: '100 0',
				scrub: true,
				// markers: true
			},
			y: 140,
			autoAlpha: 0,
			duration: 1,
		})
		//contact
		gsap.from('.contact__title', {
			scrollTrigger: {
				trigger: '.review',
				start: '-100 0',
				scrub: true,
				// markers: true
			},
			y: 100,
			autoAlpha: 0,
			duration: 1,
		})
		gsap.from('.contact__subtitle', {
			scrollTrigger: {
				trigger: '.review',
				start: '-80 0',
				scrub: true,
				// markers: true
			},
			y: 120,
			autoAlpha: 0,
			duration: 1,
		})
		gsap.from('.contact__form', {
			scrollTrigger: {
				trigger: '.review',
				start: '-60 0',
				scrub: true,
				// markers: true
			},
			y: 180,
			autoAlpha: 0,
			duration: 1,
		})
	}
}
