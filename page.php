<?php get_header(); ?>

<main id="content" class="site-content">
  <div id="my-name">Suzy Easton</div>
  <div id="player-start">PLAYER 1</div>
  <?php
  if (have_posts()) :
    while (have_posts()) : the_post(); ?>

      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header">
          <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
        </header>

        <div class="entry-content">
          <?php if (is_page('level-1')): ?>
            <div id="bio-text"></div>
          <?php endif; ?>
          <?php the_content(); ?>
        </div>
      </article>

    <?php endwhile;
  else :
    get_template_part('template-parts/content', 'none');
  endif;
  ?>
</main>

<?php get_footer(); ?>
