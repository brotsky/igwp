<?php
  $images = get_field('images');
  if($images) { ?>
<section class="fold" id="home-slides" data-section-name="home">
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
          <?php foreach($images as $slide) {
            $backgroundUrl = $slide['background']['url'];
            ?>
            <li class="glide__slide">
              <div class="slide-background" style="background-image: url(<?php echo $backgroundUrl; ?>)">
              
              </div>
            </li>
          <?php } ?>
      </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <?php foreach($images as $key => $slide) { ?>
      <button class="glide__bullet" data-glide-dir="=<?php echo $key; ?>"></button>
      <?php } ?>
    </div>
  </div>
</section>
<?php } ?>