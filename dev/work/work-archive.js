function adjust_heading(){
	var $heading_padding = ($('.flexslider1').height() - $('.flexslider1 .flex-viewport').height()) / 2;
	$('.flexslider1 .flex-viewport').css('padding-top',$heading_padding + 'px');
}

$(window).on("load", function(){
	$('.flexslider1').flexslider({
		before: function(slider){
			$('.flexslider2').flexslider(slider.animatingTo);
			adjust_heading();
		},
		start: function(){
			adjust_heading();
		},
		animation: 'slide',
		controlNav: false,
		directionNav: false,
		mousewheel: true,
		slideshow: false,
		initDelay: 200
	});

	$('.flexslider2').flexslider({
		controlNav: false,
		directionNav: false,
		animation: 'slide',
		direction: 'vertical',
		// mousewheel: true,
		slideshow: false,
		initDelay: 200
	});

	$('.custom_slider_control a').click(function(){
		$('.flexslider1').flexslider($(this).data('dir'));
	});
});

$(window).on("load resize", function(){
	$('#slider_row').height($(window).height() - $('header#masthead').height() - $('#content.site-content').offset().top - 70);

	$('.slider_instance, .flexslider2.slider_instance li').height($(window).height() - $('header#masthead').height() - $('#content.site-content').offset().top - 70);
});