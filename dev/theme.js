$(document).ready(function() {
  if($(".glide").length > 0) {
    new Glide('.glide').mount();
  }
  if($(".glide.glide-about-us").length > 0) {
    new Glide('.glide.glide-about-us', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 1
        },
        480: {
          perView: 1
        }
      }
    }).mount();
  }
});

$(window).on("load scroll resize", function(){
  $('.work_specification, .image-wrap').each(function () {
    if ($(this).offset().top + 50 < $(window).scrollTop() + $(window).height()) {
      $(this).addClass('animate-block');
    }else{
      $(this).removeClass('animate-block');
    }
  });
});