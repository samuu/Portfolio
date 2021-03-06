var mapSectionToNavSelector = {
	intro: null,
	about: '#who',
	andabout: '#who',
	work: '#works',
	work_one: '#works',
	work_two: '#works',
	work_three: '#works',
	work_four: '#works',
	contact: '#hi',
};
var allNavSelector = '.nav';

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		licenseKey: '17428C99-F60848AF-92ACD7F9-90ECDA8E',
		autoScrolling: true,
		recordHistory: false,
		sectionsColor: ['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7'],
		anchors: ['intro', 'about', 'andabout', 'work', 'work_one', 'work_two', 'work_three', 'work_four', 'contact'],
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