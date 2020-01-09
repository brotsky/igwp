<?php
/**
 * Category Template: Work Category
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Infinite_Group
 */

get_header();
?>
<main id="main" class="site-main">
	<section id="portfolio">
		<div id="smart-gallery-container">
			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				// get_template_part( 'template-parts/taxonomy-content', get_post_type() );

				get_template_part("template-parts/taxonomy-content-work-photos");
			endwhile;
			?>
		</div>
	</section>
</main><!-- #main -->
<?php
get_footer();
