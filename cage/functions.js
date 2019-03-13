$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		licenseKey: '17428C99-F60848AF-92ACD7F9-90ECDA8E',
		autoScrolling:true,
		sectionsColor: ['#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7', '#F7F7F7']
		// anchors:['intro', 'about', 'andabout', 'work', 'contact']
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});