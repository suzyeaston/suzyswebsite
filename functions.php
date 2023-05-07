<?php
function suzyeaston_theme_setup() {
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'suzyeaston_theme_setup');

function suzyeaston_scripts() {
  wp_enqueue_style('suzyswebsite-main-style', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
  wp_enqueue_style('suzyswebsite-border-animation', get_template_directory_uri() . '/border-animation.css', array(), '1.0', 'all');
  wp_enqueue_script('suzyswebsite-custom-js', get_template_directory_uri() . '/js/custom.js', array('jquery'), '1.0', true);
  wp_enqueue_script('suzyswebsite-galaxy-js', get_template_directory_uri() . '/js/galaxy.js', array('jquery'), '1.0', true);
  wp_enqueue_script('suzyswebsite-skyline-js', get_template_directory_uri() . '/js/skyline.js', array('jquery'), '1.0', true);

  wp_enqueue_script('suzyswebsite-typing-effect-js', get_template_directory_uri() . '/js/typing-effect.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'suzyeaston_scripts', 5);

function enqueue_retro_style() {
  if (is_page_template('page-contact.php')) {
    wp_enqueue_style('retro-style', get_template_directory_uri() . '/retro-style.css', array(), '1.0');
  }
}
add_action('wp_enqueue_scripts', 'enqueue_retro_style');

function suzyeaston_menus() {
  register_nav_menus(
    array(
      'primary' => __('Primary Menu'),
      'footer' => __('Footer Menu'),
    )
  );
}
add_action('init', 'suzyeaston_menus');
?>
