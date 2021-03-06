<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Infinite_Group
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'infinite_group' ); ?></a>

	<header id="masthead" class="site-header fixed-top">
		<div class="site-branding">
			<img id="logo" src="<?php echo get_template_directory_uri() ?>/images/infinite-logo.svg" />
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
				<div class="mobile-menu-bar"></div>
				<div class="mobile-menu-bar"></div>
				<div class="mobile-menu-bar"></div>
			</button>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->

		<?php if(is_front_page()){ ?>
		<ul id="fold-navigation">
			<li data-section-name="home">01</li>
			<li data-section-name="about-us">02</li>
			<li data-section-name="works">03</li>
			<li data-section-name="contact">04</li>
		</ul>
		<?php } ?>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
