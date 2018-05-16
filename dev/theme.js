$(document).ready(function() {
  new Glide('.glide').mount();

  var preloader = $('#preloader');
  if(preloader.length > 0) {

    TweenMax.set(preloader, { opacity: 1 });

    TweenMax.to(preloader, 0.5, {opacity: 0, delay: 3, onComplete: function() {
      $(preloader).remove();
    }});
  }

});