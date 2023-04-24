<?php
function suzyeaston_theme_setup() {
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'suzyeaston_theme_setup');

function suzyeaston_scripts() {
  $theme_version = wp_get_theme()->get('Version');
  $timestamp = filemtime(get_stylesheet_directory() . '/style.css');

  wp_enqueue_style('suzyswebsite-main-style', get_template_directory_uri() . '/style.css', array(), $theme_version . '-' . $timestamp, 'all');
  wp_enqueue_style('suzyswebsite-border-animation', get_template_directory_uri() . '/border-animation.css', array(), $theme_version . '-' . $timestamp, 'all');

  wp_enqueue_script('suzyswebsite-custom-js', get_template_directory_uri() . '/js/custom.js', array('jquery'), $theme_version . '-' . $timestamp, true);
  wp_enqueue_script('suzyswebsite-galaxy-js', get_template_directory_uri() . '/js/galaxy.js', array('jquery'), $theme_version . '-' . $timestamp, true);

  if (is_page('contact')) {
    wp_enqueue_style('suzyswebsite-retro-style', get_template_directory_uri() . '/retro-style.css', array(), $theme_version . '-' . $timestamp, 'all');
    wp_enqueue_script('suzyswebsite-email-animation-js', get_template_directory_uri() . '/js/email-animation.js', array(), $theme_version . '-' . $timestamp, true);
  }

  wp_enqueue_script('suzyswebsite-nav-listener-js', get_template_directory_uri() . '/js/nav-listener.js', array('jquery'), $theme_version . '-' . $timestamp, true);
  wp_enqueue_script('suzyswebsite-typing-effect-js', get_template_directory_uri() . '/js/typing-effect.js', array(), $theme_version . '-' . $timestamp, true);
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
