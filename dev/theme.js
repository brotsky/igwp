$(document).ready(function() {
  if($(".glide").length > 0) {
    new Glide('.glide').mount();
  }
  if($(".glide.glide-about-us").length > 0) {
    new Glide('.glide.glide-about-us', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 1
        },
        480: {
          perView: 1
        }
      }
    }).mount();
  }
});