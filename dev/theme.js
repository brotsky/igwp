$(document).ready(function() {
  new Glide('.glide').mount();

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