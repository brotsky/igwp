<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Infinite_Group
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info text-center">
				All Rights Reserved. Infinite Manufacturing Group &copy; <?php echo date('Y'); ?>
				<br/><br/>
				<?php
				printf( esc_html__( 'Website Developed by %1$s.', 'infinite_group' ), '<a href="https://www.cadre.haus">Cadre</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<?php if (site_url() === 'http://localhost:8888/infinite') { ?>
	<script src="http://localhost:35729/livereload.js"></script>
<?php } ?>

</body>
</html>
