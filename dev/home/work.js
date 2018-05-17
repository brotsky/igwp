jQuery(function ($) {

  var homeWorks = $('#home-works');

  var resizeHomeWorkContainers = function() {
    if(homeWorks.length == 0) return;

    var containers = $(homeWorks).find('.fold-col');
    
    // we need to resize the containers so they cover the screen
  };

  $(document).ready(resizeHomeWorkContainers);
  $(window).resize(resizeHomeWorkContainers);
});