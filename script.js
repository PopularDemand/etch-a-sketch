function start() {
	$("section").empty();

	size = prompt("What dimension would you like your space? (integer only)");
	size *= size;

	for (i=0; i<size; i++) {
		$("section").append("<div></div>");
	}

	return Math.sqrt(size)
};

$(document).ready(function(){
	size = start();

	dimension = 960/size;
	$("div").height(dimension);
	$("div").width(dimension);

	$("div").mouseenter(function(){
		$(this).toggleClass('filled');
	});
})