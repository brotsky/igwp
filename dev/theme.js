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
        blueprintDelayVariable = 0.05,
        colors = [
          'red-orange',
          'red',
          'orange'
        ],
        blueprintLines = $('#blueprints line'),
        infiniteLetters = [
          'i1',
          'n1',
          'f',
          'i2',
          'n2',
          'i3',
          't',
          'e',
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
    
    for(var c = 0 ; c < colors.length ; c+=1) {
      for(var j = 0 ; j < 4; j++) {
        TweenMax.to(
          "#icon-" + colors[c] + "-dot-" + (j + 1),
          3,
          {
            morphSVG:"#icon-" + colors[c] + "-" + (j + 1),
            ease: Elastic.easeOut,
            delay: j * delayVariable + lineDelayOffset
          }
        );
      }
    }

    for(var h = 0 ; h < blueprintLines.length ; h+=1) {
      TweenMax.set(
        blueprintLines[h],
        {
          drawSVG: '0% 0%'
        }
      );
      TweenMax.to(
        blueprintLines[h],
        0.5,
        {
          drawSVG: '0% 100%',
          delay: h * blueprintDelayVariable + lineDelayOffset
        }
      );
      TweenMax.to(
        blueprintLines[h],
        0.5,
        {
          drawSVG: '100% 100%',
          delay: h * blueprintDelayVariable + lineDelayOffset + 2.5
        }
      );
    }

    for(var k = 0 ; k < infiniteLetters.length ; k++) {
      TweenMax.set('#infinite-' + infiniteLetters[k], { opacity: 0 });
      TweenMax.to('#infinite-' + infiniteLetters[k], 1, { opacity: 1, delay: k * 0.4 + 2.5 });
    }

    TweenMax.to(
      blueprintLines[0],
      3,
      {
        drawSVG: '100% 100%',
        delay: 5.25
      }
    );
    TweenMax.to(
      blueprintLines[1],
      3,
      {
        drawSVG: '100% 100%',
        delay: 6.25
      }
    );

    TweenMax.set(['#manufacturing', '#group'], { opacity: 0 });
      TweenMax.to(['#manufacturing', '#group'], 2, { opacity: 1, delay: 4 });

    TweenMax.to(preloader, 0.5, {opacity: 0, delay: 8, onComplete: function() {
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
    before:function(index, sections){
      var section_name = $.scrollify.current().data('section-name');
      $('#fold-navigation li').removeClass('active');
      $('#fold-navigation li[data-section-name="'+section_name+'"]').addClass('active');
      $('.main-navigation li').removeClass('current_page_item').removeClass('current-menu-item');
      $('.main-navigation li.'+section_name).addClass('current_page_item').addClass('current-menu-item');
    },
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });

  $('#fold-navigation li').click(function(){
    var $id = $(this).data('section-name');
    $.scrollify.move('#'+$id);
  });

  if($.scrollify.current()){
    var section_name = $.scrollify.current().data('section-name');
    $('#fold-navigation li').removeClass('active');
    $('#fold-navigation li[data-section-name="'+section_name+'"]').addClass('active');
    $('.main-navigation li').removeClass('current_page_item').removeClass('current-menu-item');
    $('.main-navigation li.'+section_name).addClass('current_page_item').addClass('current-menu-item');
  }

  $('body.home .main-navigation a').click(function(e){
    e.preventDefault();
    var $_this = $(this);
    $('#fold-navigation li').each(function(index){
      if($_this.parent().hasClass($(this).data('section-name'))){
        var $id = $(this).data('section-name');
        $.scrollify.move('#'+$id);
      }
    });
  });
});