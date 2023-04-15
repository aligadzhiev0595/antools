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
			trigger: '.tools',
			start: '-350 0',
			scrub: true,
			duration:1
		},
		yPercent:40,
		xPercent: -100,
		scale:0.5,
	})
}