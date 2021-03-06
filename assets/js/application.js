(function($) {

    var $window = $(window);

    // Disable certain links in docs
    $('section [href^=#]').click(function(e) {
      e.preventDefault()
    });

    // side bar
    setTimeout(function () {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 },
          bottom: 270
        }
      });
    }, 100);

})(jQuery);
