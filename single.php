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
          <?php the_content(); ?>

          <?php
          // Display post metadata (date, author, categories, etc.) if you want
          // the_post_navigation(); // Displays the navigation to the next/previous post
          ?>

        </div>
        <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if (comments_open() || get_comments_number()) :
          comments_template();
        endif;
        ?>
      </article>

    <?php endwhile;
  else :
    get_template_part('template-parts/content', 'none');
  endif;
  ?>
</main>

<?php get_footer(); ?>
