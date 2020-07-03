window.onload = function() {
	
	lax.setup({
		breakpoints: { small: 576, medium: 992, large: 1200 }
	})

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}