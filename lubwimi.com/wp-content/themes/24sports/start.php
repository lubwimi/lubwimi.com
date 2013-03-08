/*
Template Name: Startsida
*/

<?php get_header(); ?>

		<div id="box">
			<?php get_sidebar(); ?>
			<div id="main">
				
				<?php if ( function_exists('show_nivo_slider') ) {
					show_nivo_slider(); 
				} ?>
				
				<?php if (have_posts()): ?>
					
					<?php while (have_posts()) : the_post(); ?>
						
						
						<h1><?php the_title(); ?></h1>
							
						
						<div class="content"><?php the_content(); ?></div>
						
						
						
						
						
						
				<?php endwhile;?>
				
			<?php endif; ?>
			
			</div><!-- #main -->
		</div><!-- #box -->
			
			
<?php get_footer(); ?>
