<?php get_header(); ?>

<main id="content" class="site-content">
  <?php if (is_front_page()): ?>
    <div id="my-name">Suzy Easton</div>
    <div id="player-start">PLAYER 1</div>
    <div id="click-hint">Click "Player 1" to start</div>
  <?php endif; ?>
  <?php
  if (have_posts()) :
    while (have_posts()) : the_post(); ?>

      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header">
          <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
        </header>

        <div class="entry-content">
          <?php if (is_page('contact')): ?>
          <div id="contact-details">
            <div class="contact-item" id="contact-name">Suzy Easton</div>
            <div class="contact-item" id="contact-location">Vancouver, BC</div>
            <div class="contact-item" id="contact-email">info@suzyeaston.tech</div>
            <div class="contact-item" id="contact-instagram"><a href="https://www.instagram.com/officialsuzyeaston/" target="_blank">officialsuzyeaston (Instagram)</a></div>
            <div class="contact-item" id="contact-twitter"><a href="https://twitter.com/officialsuzye" target="_blank">officialsuzye (Twitter)</a></div>
          </div>
          <?php endif; ?>
          <?php if (is_page('Suzy\'s Online 80s Video Game')): ?>
            <div id="bio-text"></div>
            <canvas id="guitar-canvas" width="300" height="800" style="display:none;"></canvas>
            <button id="start-game-button" style="display:none;">Let's goooooooo</button>
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

