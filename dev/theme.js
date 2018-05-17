function handle_fold_changes(){
  var section_name = $.scrollify.current().data('section-name');
  $('#fold-navigation li').removeClass('active');
  $('#fold-navigation li[data-section-name="'+section_name+'"]').addClass('active');
  $('.main-navigation li').removeClass('current_page_item').removeClass('current-menu-item');
  $('.main-navigation li.'+section_name).addClass('current_page_item').addClass('current-menu-item');
}

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
    before:function(index, sections){
      handle_fold_changes();
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
    handle_fold_changes();
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

  $('*[data-section-name]').click(function(e){
    e.preventDefault();
    var $id = $(this).data('section-name');
    $.scrollify.move('#'+$id);
    handle_fold_changes();
  });
});