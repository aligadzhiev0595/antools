export function animation(){
	// const timeLine = gsap.timeLine()
	// timeLine.fromTo(
	// 	'.title',{
	// 		x: -100,
	// 		opacity:0
	// 	},
	// 	{
	// 		x: 0,
	// 		opacity:1,
	// 		duration: 1
	// 	}
	// )
	gsap.to('.home', {
		scrollTrigger:{
			trigger: '.title',
			markers: true,
			start: 'center top',
			scrub: true,
			duration:5
		},
		yPercent:10,
		xPercent: -50,
		opacity: 0,
		scale:0.5,
	})
}