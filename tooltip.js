$(function() {
	
	var selectors = [
		"#show-all",
		"#hide-all",
		'#left-column .cross',
		'#left-column .checkmark',
	];

	for (var i=0; i<selectors.length; i++) {
		$(selectors[i]).tooltip();
	}

});