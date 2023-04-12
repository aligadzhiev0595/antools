/**
 * brief: logic for loading additional cards
 */

export function loadingCards() {
	document.querySelector('.tools__more').onclick = function () {
		document.querySelector('.tools__more').classList.toggle('active')
		if (document.querySelector('.tools__more').classList.contains('active')) {
			document.querySelector('.tools__more').textContent = 'Hide'
		} else {
			document.querySelector('.tools__more').textContent = 'Load more...'
		}
		document.querySelectorAll('.hide').forEach(el => {
			el.classList.toggle('active')
		})
	}
}
