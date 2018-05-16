$(document).ready(function() {
  new Glide('.glide').mount();

  var preloader = $('#preloader'),
      preloaderSvg = $('#preloader-svg');
  
  if(preloader.length > 0) {

    TweenMax.set(preloader, { opacity: 1 });
    TweenMax.set('#icon-dot', { y: -15 });

    $(preloaderSvg).addClass('show');
    var containerWidth = $('#preloader .container').width(),
        containerHeight = $('#preloader .container').height(),
        logoBoundingBox = $('#logo-wrapper')[0].getBBox(),
        logoWidth = logoBoundingBox.width,
        logoHeight = logoBoundingBox.height,
        logoXOffset = (containerWidth - logoWidth) / 2,
        logoYOffset = (containerHeight - logoHeight) / 2,
        logoScale = logoWidth < containerWidth * 0.9 ? 1 : containerWidth / logoWidth * 0.9;
    $(preloaderSvg).attr('width', containerWidth + 'px');
    $(preloaderSvg).attr('height', containerHeight + 'px');
    $(preloaderSvg).attr('viewBox', '0 0 ' + containerWidth + ' ' + containerHeight);
    $(preloaderSvg).attr('style', 'enable-background:new 0 0 ' + containerWidth + ' ' + containerHeight);

    TweenMax.set('#logo-wrapper', {
      x: logoXOffset,
      y: logoYOffset,
      scale: logoScale,
      transformOrigin:"50% 50%"
    });

    TweenMax.set('#icon-dot', {
      y: -logoYOffset - logoHeight,
    });

    TweenMax.to('#icon-dot', 1, {
      y: 0,
      ease: Bounce.easeOut,
    });

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