<?php if ( have_rows( 'photo_gallery_repeater' ) ) : ?>
	<section id="portfolio">

	    <div class="portfolioFilters text-center grayBackground">
			<div class="" id="filters">
				<button class="btn btn-default btn-black" data-filter="*" data-toggle="tooltip" data-placement="top" title="" data-original-title="18" data-scroll-reveal="enter bottom move 10px over 1s after 0.2s">Show All</button>
				<?php
				$terms = get_terms('work-category', array(
					'hide_empty' => false
				));
				foreach ($terms as $key => $value) {
					printf('<button class="btn btn-default btn-black" data-filter="%s" data-toggle="tooltip" data-placement="top" title="" data-original-title="%s" data-scroll-reveal="enter bottom move 10px over 1s after 0.3s">%s</button>', $value->slug, $value->term_id, $value->name);
				}
				?>
			</div>
		</div>

		<div id="smart-gallery-container">

			<?php while ( have_rows( 'photo_gallery_repeater' ) ) : the_row(); ?>
				<?php $photo_category_term = get_sub_field( 'photo_category' ); ?>

				<?php $photo = get_sub_field( 'photo' ); ?>
				<?php if ( $photo ) { ?>
					<a class="smart-gallery-item overlay-ajax <?php echo $photo_category_term->slug; ?>" href="<?php echo $photo['url']; ?>" data-toggle="modal">
						<div class="smart-gallery">
								<img src="<?php echo $photo['url']; ?>" alt="thumbnail" class="galleryImage first hidden-xs hidden-sm" data-src="<?php echo $photo['url']; ?>"/>
									<!-- <img src="<?php echo $cdn ?>/assets/img/brotsky-loading-portfolio.gif" data-src="<?php echo $cdn ?>/assets/img/portfolio/lum-tec-1.jpg"> -->
						</div>
						<div class="smart-overlay">
							<h4><?php the_sub_field( 'photo_heading' ); ?></h4>
							<?php if ( $photo_category_term ): ?>
								<p><?php echo $photo_category_term->name; ?></p>
							<?php endif; ?>
							<!-- <div class="btn" href="#">Learn More</div> -->
						</div>
					</a>
				<?php } ?>
		    <?php endwhile; ?>

		</div>

	</section>
<?php endif; ?>