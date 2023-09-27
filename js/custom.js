(function ($) {
  "use strict";

  // Function to toggle between light and dark mode
  function toggleColorMode() {
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
    // Save the current mode to local storage
    var isDarkMode = $('body').hasClass('dark-mode');
    localStorage.setItem('colorMode', isDarkMode ? 'dark' : 'light');
  }

  // COLOR MODE
  $('.color-mode').click(function () {
    toggleColorMode();
  });

  // Check and set the initial color mode from local storage
  var storedColorMode = localStorage.getItem('colorMode');
  if (storedColorMode === 'dark') {
    $('body').addClass('dark-mode');
    $('.color-mode-icon').addClass('active');
  }

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);
