$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		sectionsColor: ['#FDD2D5', '#FDD2D5', '#FDD2D5', '#FDD2D5', '#FDD2D5', '#FDD2D5']
		// anchors:['intro', 'about', 'andabout', 'work', 'contact']
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});