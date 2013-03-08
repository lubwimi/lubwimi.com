<div id="sidebar">
	<br />
	<a href="<?php echo site_url('/wp-login.php?action=register'); ?>">Registrera dig</a>
	<br />
	<br />	
	<a href="<?php echo wp_login_url(); ?>">Logga in</a>
	<br />
	<br />
	
	<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
	<?php endif; ?>
	
	<a href="http://localhost/forum">Home</a>
</div><!-- #sidebar -->			