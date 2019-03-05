var mapSectionToNavSelector = {
	intro: null,
	about: '#who',
	andabout: '#who',
	work: '#works',
	work_one: '#works',
	work_two: '#works',
	work_three: '#works',
	contact: '#hi',
};
var allNavSelector = '.nav';

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		recordHistory: false,
		sectionsColor: ['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7'],
		anchors: ['intro', 'about', 'andabout', 'work', 'work_one', 'work_two', 'work_three', 'contact'],
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

			// show nav only when not on the first slide

		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});