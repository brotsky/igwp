<section class="fold" id="home-about" data-section-name="about-us">
	<div class="about-us-wrapper">
		
		<div class="about-us-left">
			<h3>About Us</h3>
			<?php if ( have_rows( 'paragraph' ) ) : ?>
				<?php while ( have_rows( 'paragraph' ) ) : the_row(); ?>
					<div class="<?php echo get_sub_field( 'type' ); ?>">
						<?php echo get_sub_field( 'content' ); ?>
					</div>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>

		<div class="about-us-right">
			<?php if ( have_rows( 'about_us_slider' ) ) : ?>
				<div class="glide-about-us glide">
					<div data-glide-el="track" class="glide__track">
						<ul class="glide__slides">
						<?php while ( have_rows( 'about_us_slider' ) ) : the_row(); ?>
							<?php $slide = get_sub_field( 'slide' ); ?>
							<?php if ( $slide ) { ?>
								<li class="glide__slide">
									<div class="slide-background" style="background-image: url(<?php echo $slide['url']; ?>);"></div>
								</li>
							<?php } ?>
						<?php endwhile; ?>
						</ul>
					</div>
				</div>
				<div class="social-icon-wrapper">
					<a href="#"><i class="fab fa-instagram"></i></a>
					<a href="#"><i class="fab fa-twitter-square"></i></a>
					<a href="#"><i class="fab fa-facebook-square"></i></a>
				</div>
			<?php endif; ?>
		</div>

	</div>
</section>