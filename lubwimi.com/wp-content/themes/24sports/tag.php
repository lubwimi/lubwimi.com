<?php get_header(); ?>

		<div id="box">
			<?php get_sidebar(); ?>
			<div id="main">
				<?php if (have_posts()): ?>
					
					<?php while (have_posts()) : the_post(); ?>
						
						<div class="datum"><?php the_date(); ?></div>
						<h1><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
							
							
						
						<div class="content"><?php the_content(); ?></div>
						
						Kategori: <?php the_category(', '); ?>
						
						<hr />
						
						
				<?php endwhile;?>
				
			<?php endif; ?>
			
			</div><!-- #main -->
		</div><!-- #box -->
			
			
<?php get_footer(); ?>
