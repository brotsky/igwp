<?php

add_shortcode( 'infinite_button', 'infinite_button_shortcode' );

function infinite_button_shortcode( $atts, $content = 'Learn More' ) {

  $a = shortcode_atts( array(
		'section-name' => false,
  ), $atts );
  
  $sectionName = $a['section-name'];

	ob_start();
  ?>
    <div class="infinite-button-wrapper">
      <div class='infinite-button-border'></div>
      <button class="infinite-button hvr-sweep-to-top"<?php if($sectionName) echo "data-section-name='$sectionName'"; ?>>
        <?php echo $content; ?>
      </button>
    </div>
  <?php
	return ob_get_clean();
}