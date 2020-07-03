window.onload = function() {
	
	lax.setup({
		breakpoints: { small: 576, medium: 768, large: 992 }
	})

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}