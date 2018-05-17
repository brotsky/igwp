jQuery(function ($) {
  var resizeHomeWorkContainers = function() {

    var homeWorks = $('#home-works');

    if(homeWorks.length === 0) return;
    var containers = $(homeWorks).find('.fold-col');
    if(containers.length === 0) return;

    for(var i = 0 ; i < containers.length ; i+=1) {
      console.log(containers[i]);
    }
    
    // we need to resize the containers so they cover the screen
  };

  $(document).ready(resizeHomeWorkContainers);
  $(window).resize(resizeHomeWorkContainers);
});