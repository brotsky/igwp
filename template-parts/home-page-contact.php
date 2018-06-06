<section class="fold" id="home-contact" data-section-name="contact">
	<div class="container">
    	<div class="row">
			<?php if ( have_rows( 'contact_fold_content' ) ): ?>
				<?php while ( have_rows( 'contact_fold_content' ) ) : the_row(); ?>
					<?php if ( get_row_layout() == 'one_column_content' ) : ?>
						<div class="col-sm-8 offset-sm-2">
							<?php the_sub_field( 'content' ); ?>
						</div>
					<?php elseif ( get_row_layout() == 'two_column_content' ) : ?>
						<div class="col-sm-6">
							<?php the_sub_field( 'left_column_content' ); ?>
						</div>
						<div class="col-sm-6">
							<?php the_sub_field( 'right_column_content' ); ?>
						</div>
					<?php endif; ?>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</section>