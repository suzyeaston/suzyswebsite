<?php get_header(); ?>

<main id="content" class="site-content">
  <?php
  if (have_posts()) :
    while (have_posts()) : the_post(); ?>

      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header">
          <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
        </header>

        <div class="entry-content">
          <?php
          the_content();

          wp_link_pages(array(
            'before' => '<div class="page-links">' . __('Pages:', 'your-theme-textdomain'),
            'after'  => '</div>',
          ));
          ?>
        </div>
      </article>

    <?php endwhile;
  else :
    get_template_part('template-parts/content', 'none');
  endif;
  ?>
</main>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
