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
              <div class="slide-content">
                <div class="title-top"><?php echo $slide['title_top']; ?></div>
                <div class="title-bottom"><?php echo $slide['title_bottom']; ?></div>
                <div class="description"><?php echo $slide['description']; ?></div>
                <?php echo do_shortcode(
                  "
                  [infinite_button section-name='about-us']
                    Learn More
                  [/infinite_button]
                  "
                  ); ?>
              </div>
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