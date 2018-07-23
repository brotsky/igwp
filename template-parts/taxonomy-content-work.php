<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Infinite_Group
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('col-sm-6'); ?>>
	<a class="tax-article-detail" style="background-image: url(<?php echo get_the_post_thumbnail_url(get_the_id(), 'full'); ?>);" href="<?php echo esc_url( get_permalink() ); ?>">
		<?php the_title( '<h2 class="entry-title text-center">', '</h2>' ); ?>
	</a>
</article><!-- #post-<?php the_ID(); ?> -->
