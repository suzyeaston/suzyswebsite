<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="starry-background"></div>
  <header class="site-header">
    <nav>
      <ul>
        <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
        <li><a href="<?php echo esc_url(home_url('/suzys-online-80s-video-game')); ?>">Suzy's Online 80s Video Game</a></li>
        <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact</a></li>
      </ul>
    </nav>
  </header>

