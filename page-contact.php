<?php get_header(); ?>

<main id="content" class="site-content">
  <div id="starry-background"></div>
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
      <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
    </header>

    <div class="entry-content">
      <div id="contact-details">
        <h1 class="how-to-reach-suzy">How to reach Suzy</h1>
        <div class="contact-item" id="contact-name">Suzy Easton</div>
        <div class="contact-item" id="contact-location">Burnaby, BC</div>
        <div class="contact-item" id="contact-email">
          <script>
            document.write('<a href="mailto:' + 'info' + '@' + 'suzyeaston' + '.' + 'tech">info@suzyeaston.tech</a>');
          </script>
        </div>
        <div class="contact-item" id="contact-instagram"><a href="https://www.instagram.com/officialsuzyeaston/" target="_blank">officialsuzyeaston (Instagram)</a></div>
        <div class="contact-item" id="contact-twitter"><a href="https://twitter.com/officialsuzye" target="_blank">officialsuzye (Twitter)</a></div>
      </div>
    </div>
  </article>
</main>

<?php get_footer(); ?>
