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
        logoScale = logoWidth < containerWidth * 0.9 ? 1 : containerWidth / logoWidth * 0.9,
        dots = [
          ['#icon-orange-dot-1', '#icon-red-dot-1', '#icon-red-orange-dot-1'],
          ['#icon-orange-dot-2', '#icon-red-dot-2', '#icon-red-orange-dot-2'],
          ['#icon-orange-dot-3', '#icon-red-dot-3', '#icon-red-orange-dot-3'],
          ['#icon-orange-dot-4', '#icon-red-dot-4', '#icon-red-orange-dot-4'],
        ],
        lineDelayOffset = 1.5,
        delayVariable = 0.3,
        colors = [
          'red-orange',
          'red',
          'orange'
        ];
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

    for(var i = 0 ; i < 4; i+=1) {
      TweenMax.set(dots[i], {
        y: -logoYOffset - logoHeight,
      });

      TweenMax.to(dots[i], 1.25, {
        y: 0,
        ease: Bounce.easeOut,
        delay: i * delayVariable,
      });
    }

    TweenMax.to('#icon-dot', 1, {
      y: 0,
      ease: Bounce.easeOut,
      delay: delayVariable * 4 + 1,
    });
    
    for(var c = 0 ; c < colors.length ; c+=1)
      for(var i = 0 ; i < 4; i++) {
        TweenMax.to(
          "#icon-" + colors[c] + "-dot-" + (i + 1),
          3,
          {
            morphSVG:"#icon-" + colors[c] + "-" + (i + 1),
            ease: Elastic.easeOut,
            delay: i * delayVariable + lineDelayOffset
          }
        );
      }

    TweenMax.to(preloader, 0.5, {opacity: 0, delay: 6, onComplete: function() {
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