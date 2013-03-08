<?php get_header(); ?>

		<div id="box">
			<?php get_sidebar(); ?>
			<div id="main">
				<?php if (have_posts()): ?>
					
					<?php while (have_posts()) : the_post(); ?>
						
						<div class="datum"><?php the_date(); ?></div>
						<h1><?php the_title(); ?></h1>
							
							
						
						<div class="content"><?php the_content(); ?></div>
						
						Kategori: <?php the_category(', '); ?>
						
						<?php comments_template(); ?>
						<?php comment_form($args, $post_id); ?>
						
						
				<?php endwhile;?>
				
			<?php endif; ?>
			
			</div><!-- #main -->
		</div><!-- #box -->
			
			
<?php get_footer(); ?>
