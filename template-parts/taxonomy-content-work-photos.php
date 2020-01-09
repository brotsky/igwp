<a class="smart-gallery-item overlay-ajax1" href="<?php echo get_the_permalink(get_the_id()); ?>">
	<div class="smart-gallery">
		<img src="<?php echo get_the_post_thumbnail_url(get_the_id(), 'full'); ?>" alt="thumbnail" class="galleryImage first hidden-xs hidden-sm">
	</div>
	<div class="smart-overlay">
		<?php
		the_title( '<h4>', '</h4>' );
		?>
	</div>
</a>