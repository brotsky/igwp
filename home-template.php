<?php
/*
Template Name: Home Page
Template Post Type: page
*/

get_header();
?>
<main id="main" class="site-main">
    <?php get_template_part("template-parts/home-page-carousel"); ?>
    <?php get_template_part("template-parts/home-page-about"); ?>
    <?php get_template_part("template-parts/home-page-works"); ?>
    <?php get_template_part("template-parts/home-page-contact"); ?>
</main><!-- #main -->
<?php
get_footer();