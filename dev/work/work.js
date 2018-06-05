$(document).ready(function(){
	$('body.single-work .full_height_element header').height($(window).height() - $('header#masthead').height() - $('#content.site-content').offset().top);

	$('body.single-work .arrow_icon i').click(function(){
		$('html, body').animate({
			scrollTop: $('.entry-content').offset().top - $('header#masthead').height() - $('#content.site-content').offset().top
		}, 500);
	});
});

$(window).on("load scroll resize", function(){
	$('.work_specification, .image-wrap, .animate_image_parent').each(function () {
		if ($(this).offset().top + 50 < $(window).scrollTop() + $(window).height()) {
			$(this).addClass('animate-block');
		}else{
			$(this).removeClass('animate-block');
		}
	});
});

$(window).on("resize", function(){
	$('body.single-work .full_height_element header').height($(window).height() - $('header#masthead').height() - $('#content.site-content').offset().top);
});