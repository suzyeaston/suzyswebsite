<?php get_header(); ?>

<main id="content" class="site-content">
  <?php
  if (have_posts()) :
    while (have_posts()) : the_post();
      get_template_part('template-parts/content', 'page');
    endwhile;
  else :
    get_template_part('template-parts/content', 'none');
  endif;
  ?>
</main>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
