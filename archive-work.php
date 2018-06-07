<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Infinite_Group
 */

get_header();

/*// Define taxonomy prefix
// Replace NULL with the name of the taxonomy eg 'category'
$taxonomy_prefix = 'category';

$term_id = NULL;

$term_id_prefixed = $taxonomy_prefix .'_'. $term_id;*/
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<div class="container-fluid">
				<div id="slider_row" class="row">

				<?php
				$work = new Work($post);
				$work_category_ids = $work::get_category_ids();
				?>
					<div class="col-sm-6 no_side_padding">
						<div class="flexslider1 slider_instance">
							<ul class="slides">
							<?php
							foreach ($work_category_ids as $work_category_id) {
								?>
								<!-- Place somewhere in the <body> of your page -->
								<li class="slider_title text-center">
									<h3><?php echo get_cat_name( $work_category_id ); ?></h3>
								</li>
								<?php
							}
							?>
							</ul>
						</div>
					</div>

					<div class="col-sm-6 no_side_padding">
						<div class="flexslider2 slider_instance">
							<ul class="slides">
							<?php
							foreach ($work_category_ids as $work_category_id) {
								?>
								<!-- Place somewhere in the <body> of your page -->
								<?php
								$thumbnail = get_field( 'thumbnail', 'category_'.$work_category_id );
								if ( $thumbnail ) { ?>
								<li class="slider_thumb_wrapper">
									<div class="slider_thumb" style="background-image:url(<?php echo $thumbnail['url']; ?>);" alt="<?php echo $thumbnail['alt']; ?>">
										&nbsp;
									</div>
										<!-- <img src="<?php echo $thumbnail['url']; ?>" alt="<?php echo $thumbnail['alt']; ?>" /> -->
								</li>
								<?php
								}
							}
							?>
							</ul>
						</div>
					</div>

					<div class="col-sm-12 no_side_padding custom_slider_control fixed_at_bottom text-center">
						<a data-dir="next" class="down"><i class="fas fa-chevron-down"></i></a>
						<a data-dir="prev" class="up"><i class="fas fa-chevron-up"></i></a>
					</div>

					<?php
				?>

				</div>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->
<?php
get_footer();
