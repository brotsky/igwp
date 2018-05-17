<?php
  $featured_works = get_field('featured_works');

?>

<section class="fold" id="home-works" data-section-name="works">
  <div class="container-fluid">
    <div class="row">
      <?php
        if(sizeof($featured_works) > 0) {
          foreach($featured_works as $featured_work) {

            if($featured_work['work']) {
              $work = get_work($featured_work['work']->ID);
              $image = $work->get_home_page_image();
              if($image)
                $imageUrl = $image['url'];

              $desktopSize = $featured_work['desktop_size'];
              $captionLocation = $featured_work['caption_location'];
              $col = 'col';
              if($desktopSize === 'half')
                $col = 'col-md-6';
              else if($desktopSize === 'quarter')
                $col = 'col-md-3';

              ?>

              <div class="fold-col <?php echo $col ?> d-flex align-content-stretch flex-wrap">
                <?php if($captionLocation === 'top') { ?>
                  <div class="row text-content-row brown-background">
                    <div class="col-sm-8 offset-sm-2">
                      <?php echo $work->content; ?>
                    </div>
                  </div>
                <?php } // end if($captionLocation === 'top') ?>
                <?php
                if($image) {
                  ?>
                  <div class="row image-content-row">
                    <div class="image-container">
                      <img src="<?php echo $imageUrl; ?>" alt="" />
                    </div>
                  </div>
                  <?php
                } // end if($image)
                ?>

                <?php if($captionLocation === 'bottom') { ?>
                  <div class="row text-content-row brown-background">
                    <div class="col-sm-8 offset-sm-2">
                      <?php echo $work->content; ?>
                    </div>
                  </div>
                <?php } // end if($captionLocation === 'bottom') ?>

              </div>
              <?php
            } // end if($featured_work['work'])
          } // end foreach($featured_works as $featured_work)
        } // end if(sizeof($featured_works) > 0)
      ?>
    </div>
  </div>
</section>