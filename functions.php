<?php
function orion_theme_setup() {
    // Add theme support for various features
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    // Register navigation menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'suzyswebsite'),
    ));

    // Add theme support for HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'orion_theme_setup');

function orion_theme_scripts() {
    // Enqueue styles
    wp_enqueue_style('style', get_stylesheet_uri());

    // Enqueue scripts
    wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/custom.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'orion_theme_scripts');
?>
