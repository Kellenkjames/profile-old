window.onload = function() {
	
	lax.setup({
		breakpoints: { mobile: 576, tablet: 768, laptop: 992, desktop: 1200 }
	})

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}