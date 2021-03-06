/*
	Here, « this » is typeof globalThis and refer to the global object, window
	.innerHeight: the window height, divisible by [1.1 ; 2]
	.innerWidth: the window width
*/

addEventListener('scroll', () => {
	const nav = document.querySelector('.navbar'),
		scrollingUp = document.querySelector('.scrollingUp');
	let blockPosition = document.querySelector('.block__with_content').getBoundingClientRect().top;	

	this.scrollY > 0 ? nav.classList.add('fixed') : nav.classList.remove('fixed');
	this.innerWidth >= 995 && nav.classList.toggle('sticky', this.scrollY > 0);


	scrollingUp.addEventListener('click', () => {
		this.scrollBy({
			top: blockPosition-75,
			left: 0,
			behavior: "smooth"
		})
	})

	scrollingUp.style.visibility = blockPosition < this.innerHeight-1575 ? "visible" : "hidden";
})
