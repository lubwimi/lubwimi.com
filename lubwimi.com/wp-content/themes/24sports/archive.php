<?php get_header(); ?>

		<div id="box">
			<?php get_sidebar(); ?>
			<div id="main">
				<?php if (have_posts()): ?> <!-- Om det finns inlägg på blogg   -->
					
					<?php while (have_posts()) : the_post(); ?> <!-- Loop som hämta alla blogginlägg -->
						
						<div class="datum"><?php the_date(); ?></div> <!-- Function som hämtar datum -->
						<h1><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1> <!--  -->
							
							
						
						<div class="content"><?php the_content(); ?></div>
						
						Kategori: <?php the_category(', '); ?>
						
						<hr />
						
						
				<?php endwhile;?>
				
			<?php endif; ?>
			
			</div><!-- #main -->
		</div><!-- #box -->
			
			
<?php get_footer(); ?>
