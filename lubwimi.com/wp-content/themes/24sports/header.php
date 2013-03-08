<!DOCTYPE html>
<html>
	<head>
		<meta  charset="utf-8" />
		<title><?php bloginfo('name'); ?> - <?php the_title(); ?></title>
		<link rel="stylesheet" type="text/css" href="<?php echo bloginfo('template_url'); ?>/style.css" />
		<?php wp_head(); ?>
	</head>
	<body>
	<div id="wrapper">
		<div id="container">
			
					<a class="sidtitel" href="<?php bloginfo('url'); ?>">24sports.se</a>
					<img style="margin:0;padding:0;" src="<?php echo bloginfo('template_url'); ?>/images/assemble.jpg" />
			
				
			<nav>
				
					<?php wp_nav_menu(); ?>
				
			</nav>
			