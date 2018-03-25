$(document).ready(function(){
	$('#header_nav--icon').click(function(){
		$(this).toggleClass('open');
	});
	$('.click').click(function(){
		$('#header_nav--icon').toggleClass('open');
	});
});