$(document).ready(function(){
	$('#burger-icon').bind('click', function(){
		$(this).toggleClass('open');
		$('.responsive-menu').slideToggle();
		return false;	
	});
	var menuItem = $('.responsive-menu').find('a');
	menuItem.on('click', function() {
		$('.responsive-menu').slideUp();
		$('#burger-icon').removeClass('open');
	})
});