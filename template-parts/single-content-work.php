<?php
/**
 * Template part for displaying content for single work
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Infinite_Group
 */

?>

<?php
$random_animation_direction_cls = array("dir_from_top", "dir_from_bottom");
$i = 0;
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="container-fluid full_height_element">
		<header class="row entry-header">
			<div class="col-sm-6 no_side_padding animate_image_parent touch_sides dir_from_top">
				<div class="work_title_wrapper animate_child">
					<p class="entry-subtitle"><?php the_field('subtitle'); ?></p>
					<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
				</div>
			</div>

			<div class="col-sm-6 no_side_padding">
				<div class="thumbnail_wrapper animate_image_parent touch_sides">
					<div class="thumbnail_bg animate_child" style="background-image: url(<?php echo get_the_post_thumbnail_url( get_the_id(), 'full'); ?>);"></div>
				</div>
			</div>
			<div class="col-sm-12 text-center absolute_header_bottom">
				<div class="down_icon_wrapper">
					<div class="arrow_icon"><i class="fas fa-arrow-down"></i></div>
				</div>
			</div>
		</header><!-- .entry-header -->
	</div>

	<div class="entry-content">
		<?php if ( have_rows( 'content' ) ): ?>
			<?php while ( have_rows( 'content' ) ) : the_row(); ?>
				<?php if ( get_row_layout() == 'fluid_width_layout' ) : ?>
					<div class="container-fluid no-flex">
				<?php else : ?>
					<div class="container">
				<?php endif; ?>
					<div class="row <?php echo get_row_layout(); ?>">
						<?php if ( get_row_layout() == 'half_width_layout' ) : ?>

							<?php if ( have_rows( 'layout_wrapper' ) ) : ?>
								<div class="work_layout_box col-sm-12">
									<?php while ( have_rows( 'layout_wrapper' ) ) : the_row();
										$i = $i % 2;
										?>
										<div class="work_layout row no-flex">
											<div class="col-sm-7 image-wrap animate_image_parent <?php echo $random_animation_direction_cls[$i]; ?>">
												<?php $image = get_sub_field( 'image' ); ?>
												<?php if ( $image ) { ?>
													<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
												<?php } ?>
											</div>
											<div class="col-sm-5">
												<?php the_sub_field( 'content' ); ?>
											</div>
										</div>
									<?php
										$i++;
									endwhile; ?>
								</div>
							<?php endif; ?>

						<?php elseif ( get_row_layout() == 'simple_content_layout' ) : ?>

							<?php if ( have_rows( 'layout_wrapper' ) ) : ?>
								<div class="work_layout_box col-sm-12">
									<?php while ( have_rows( 'layout_wrapper' ) ) : the_row(); ?>
										<div class="work_layout row no-flex">
											<div class="col-sm-6 offset-sm-3">
												<?php the_sub_field( 'content' ); ?>
											</div>
										</div>
									<?php endwhile; ?>
								</div>
							<?php endif; ?>

						<?php elseif ( get_row_layout() == 'fluid_width_layout' ) : ?>

							<?php
							$full_width_image = get_sub_field( 'full_width_image' );
							if ( $full_width_image ) { ?>
								<div class="animate_image_parent <?php echo $random_animation_direction_cls[$i]; ?> touch_sides">
									<img src="<?php echo $full_width_image['url']; ?>" alt="<?php echo $full_width_image['alt']; ?>" />
								</div>
							<?php
							}
							?>

						<?php endif; ?>
					</div><!-- .row -->
				</div><!-- .container/.container-fluid -->
			<?php endwhile; ?>
		<?php endif; ?>

		<?php if ( have_rows( 'gallery' ) ) : ?>
			<div class="container gallery_listing_box">
				<div class="row">
					<?php
					while ( have_rows( 'gallery' ) ) : the_row();
						$wrapper_class = (get_sub_field( 'width' ) == 'full') ? 'col-sm-12' : 'col-sm-6';

						$image = get_sub_field( 'image' );
						$i = $i % 2;
						if ( $image ) { ?>
							<div class="<?php echo $wrapper_class; ?> gallery_image_col animate_image_parent <?php echo $random_animation_direction_cls[$i]; ?>">
								<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
							</div>
						<?php }
						$i++;
					endwhile; ?>
				</div>
			</div>
		<?php endif; ?>

		<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'infinite_group' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
