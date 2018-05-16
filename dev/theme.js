$(document).ready(function() {
  new Glide('.glide').mount();

  var preloader = $('#preloader');
  if(preloader.length > 0) {

    TweenMax.set(preloader, { opacity: 1 });

    TweenMax.to(preloader, 0.5, {opacity: 0, delay: 3, onComplete: function() {
      $(preloader).remove();
    }});
  }

  $.scrollify({
    section : "body.home section.fold",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });

  $('#fold-navigation li').click(function(){
  	var $id = $(this).data('section-name');
  	$.scrollify.move('#'+$id);
  });
});