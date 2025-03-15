document.addEventListener("DOMContentLoaded", function() {
	// Fade in the page on load
	document.body.classList.add("fade-in");
});

// Intercept all internal link clicks
var links = document.querySelectorAll("a:not([target='_blank'])");
links.forEach(function(link) {
	link.addEventListener("click", function(e) {
		var href = link.getAttribute("href");
		if (href && href.indexOf("#") !== 0) {
			e.preventDefault();
			// Fade out the page
			document.body.classList.remove("fade-in");
			// Wait for the fade-out to finish before navigating
			setTimeout(function() {
				window.location.href = href;
			}, 500); // 500ms matches the CSS transition duration
		}
	});
});
