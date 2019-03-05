$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		sectionsColor: ['#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7']
		// anchors:['intro', 'about', 'andabout', 'work', 'contact']
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});