jQuery(function ($) {
  $(document).ready(function(){
    var buttons = $(".infinite-button");
    $(buttons).hover(
      function(){
        $(this).closest('.infinite-button-wrapper').addClass("hover");
      },
      function(){
        $(this).closest('.infinite-button-wrapper').removeClass("hover");
      }
    );
  });
});