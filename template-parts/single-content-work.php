<?php
/**
 * Template part for displaying content for single work
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Infinite_Group
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<?php infinite_group_post_thumbnail(); ?>

	<div class="entry-content">
		<?php if ( have_rows( 'content' ) ): ?>
			<?php while ( have_rows( 'content' ) ) : the_row(); ?>
				<?php if ( get_row_layout() == 'fluid_width_layout' ) : ?>
					<div class="container-fluid no-flex">
				<?php else : ?>
					<div class="container">
				<?php endif; ?>
					<div class="row <?php echo get_row_layout(); ?>">
						<?php if ( get_row_layout() == 'work_specification' ) : ?>

							<?php if ( have_rows( 'specifications' ) ) : ?>
								<div class="col-sm-8 specs_box">
									<ul class="specs_ul">
										<?php while ( have_rows( 'specifications' ) ) : the_row(); ?>
											<li class="specs_li">
												<span class="specs_label"><?php the_sub_field( 'label' ); ?></span>
												<span class="specs_value"><?php the_sub_field( 'value' ); ?></span>
											</li>
										<?php endwhile; ?>
									</ul>
								</div>
							<?php endif; ?>
							<div class="col-sm-4 what_we_did_box">
								<p class="label">What we did</p>
								<?php the_sub_field( 'what_we_did' ); ?>
							</div>

						<?php elseif ( get_row_layout() == 'half_width_layout' ) : ?>

							<?php if ( have_rows( 'layout_wrapper' ) ) : ?>
								<div class="work_layout_box col-sm-12">
									<?php while ( have_rows( 'layout_wrapper' ) ) : the_row(); ?>
										<div class="work_layout row">
											<div class="col-sm-7 image-wrap">
												<?php $image = get_sub_field( 'image' ); ?>
												<?php if ( $image ) { ?>
													<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
												<?php } ?>
											</div>
											<div class="col-sm-5">
												<?php the_sub_field( 'content' ); ?>
											</div>
										</div>
									<?php endwhile; ?>
								</div>
							<?php endif; ?>
						<?php elseif ( get_row_layout() == 'fluid_width_layout' ) : ?>

							<?php $full_width_image = get_sub_field( 'full_width_image' ); ?>
							<?php if ( $full_width_image ) { ?>
								<img src="<?php echo $full_width_image['url']; ?>" alt="<?php echo $full_width_image['alt']; ?>" />
							<?php } ?>

						<?php elseif ( get_row_layout() == 'work_overview' ) : ?>

							<?php if ( have_rows( 'meta_field' ) ) : ?>
								<div class="work_meta_box row col-sm-12">
									<?php while ( have_rows( 'meta_field' ) ) : the_row(); ?>
										<div class="work_meta text-center col-sm-4">
											<div class="">
												<div class="meta_label"><?php the_sub_field( 'label' ); ?></div>
												<div class="meta_value"><?php the_sub_field( 'value' ); ?></div>
											</div>
										</div>
									<?php endwhile; ?>
								</div>
							<?php endif; ?>
						<?php endif; ?>
					</div><!-- .row -->
				</div><!-- .container/.container-fluid -->
			<?php endwhile; ?>
		<?php endif; ?>

		<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'infinite_group' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php infinite_group_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
