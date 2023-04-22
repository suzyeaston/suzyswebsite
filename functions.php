<?php
function suzyeaston_theme_setup() {
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'suzyeaston_theme_setup');

function suzyeaston_scripts() {
  wp_enqueue_style('suzyswebsite-main-style', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
  wp_enqueue_style('suzyswebsite-border-animation', get_template_directory_uri() . '/border-animation.css', array(), '1.0', 'all'); // Add this line
  wp_enqueue_script('suzyswebsite-custom-js', get_template_directory_uri() . '/js/custom.js', array('jquery'), '1.0', true);
  wp_enqueue_script('suzyswebsite-galaxy-js', get_template_directory_uri() . '/js/galaxy.js', array('jquery'), '1.0', true);

  if (is_page('contact')) {
    wp_enqueue_script('suzyswebsite-contact-js', get_template_directory_uri() . '/js/contact.js', array('jquery'), '1.0', true);
  }

  wp_enqueue_script('suzyswebsite-typing-effect-js', get_template_directory_uri() . '/js/typing-effect.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'suzyeaston_scripts', 5);

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

