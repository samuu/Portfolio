var mapSectionToNavSelector = {
	intro: null,
	about: '#who',
	andabout: '#who',
	work: '#works',
	contact: '#hi',
};
var allNavSelector = '.nav';

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		sectionsColor: ['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7'],
		anchors: ['intro', 'about', 'andabout', 'work', 'contact'],
		afterLoad: function(origin, destination) {
			// remove active class from all nav elements
			var allNavElements = document.querySelectorAll(allNavSelector);
			allNavElements.forEach(function(navElement) {
				navElement.classList.remove('active');
			});

			// add active class to current nav alement
			var selector = mapSectionToNavSelector[destination.anchor];
			if (selector) {
				var navElement = document.querySelector(selector);
				if (navElement) {
					navElement.classList.add('active');
				}
			}
		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});