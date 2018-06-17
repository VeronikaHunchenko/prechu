$('.burger-btn').on('click', function() {
	$('.nav-burger').stop();
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('.nav-burger').slideUp();
	} else {
		$(this).addClass('active');
		$('.nav-burger').slideDown();
	}
});

$(window).on('resize', function() {
	if ($(window).width() > 843) {
		$('.burger-btn').removeClass('active')
		$('.nav-burger').removeAttr('style')
	}
});