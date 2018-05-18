$(document).ready(function() {
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
        lineDelayOffset = 1.1,
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
      delay: delayVariable * 2 + 1,
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
        1,
        {
          drawSVG: '100% 100%',
          delay: h * blueprintDelayVariable + lineDelayOffset + 2.5
        }
      );
    }

    for(var k = 0 ; k < infiniteLetters.length ; k++) {
      TweenMax.set(
        '#infinite-' + infiniteLetters[k],
        {
          opacity: 0,
          x: -3.5,
          y: 2
        }
      );
      TweenMax.to(
        '#infinite-' + infiniteLetters[k],
        1,
        {
          opacity: 1,
          x: 0,
          y: 0,
          delay: k * 0.4 + 2.5
        }
      );
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

    TweenMax.set(
      ['#manufacturing', '#group'],
      {
        opacity: 0,
        x: -3.5,
        y: 2
      }
    );
    TweenMax.to(
      ['#manufacturing', '#group'],
      2,
      {
        opacity: 1,
        x: 0,
        y: 0,
        delay: 4
      }
    );

    TweenMax.to(preloader, 0.6, {opacity: 0, delay: 8.25, onComplete: function() {
      $(preloader).remove();
    }});
  }
});