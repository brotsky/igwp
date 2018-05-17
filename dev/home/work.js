jQuery(function ($) {
  var resizeHomeWorkContainers = function() {
    setTimeout(function(){
      var homeWorks = $('#home-works');

      if(homeWorks.length === 0) return;
      var containers = $(homeWorks).find('.fold-col');
      if(containers.length === 0) return;

      for(var i = 0 ; i < containers.length ; i+=1) {
        var container = containers[i];

        // reset height
        $(container).find('.text-content-row').attr('style', '');

        var columnHeight = $(window).height() - 100,
            imageHeight = $(container).find('.image-content-row img').height(),
            newTextHeight = columnHeight - imageHeight;

        // setting height
        $(container).find('.text-content-row').css({
          height: newTextHeight
        });
        
      }
    }, 50);
  };

  $(document).ready(resizeHomeWorkContainers);
  $(window).resize(resizeHomeWorkContainers);
});