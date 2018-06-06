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

	var $title_wrapper_padding = ($('.work_title_wrapper').parent().height() - $('.work_title_wrapper').height() - $('.absolute_header_bottom').height()) / 2;
	$('.work_title_wrapper').css('padding-top',$title_wrapper_padding + 'px');

	var $simple_content_layout_height = $(window).height() - $('header#masthead').height();
	$('.simple_content_layout').css('min-height', $simple_content_layout_height + 'px');
	var $padding = $simple_content_layout_height - $('.simple_content_layout .work_layout').height();
	if($padding > 0){
		$('.simple_content_layout').css('padding-top',$padding/2 + 'px');
		$('.simple_content_layout').css('padding-bottom',$padding/2 + 'px');
	}
});

$(window).on("resize", function(){
	$('body.single-work .full_height_element header').height($(window).height() - $('header#masthead').height() - $('#content.site-content').offset().top);
});