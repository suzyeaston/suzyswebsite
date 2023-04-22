(function($) {
  $(document).ready(function() {
    $('nav a').on('click', function(e) {
      const href = $(this).attr('href');
      const isContact = href.indexOf('/contact') !== -1;

      if (isContact) {
        e.preventDefault();

        // Load the Contact page content
        $('#content').load(href + ' #content > *', function() {
          // Trigger the post-load event
          document.body.dispatchEvent(new Event('post-load'));
        });
      }
    });
  });
})(jQuery);
