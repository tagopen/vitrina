(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

  $(function() {
    $('#video__play').on('click', function(e) {
      let dataYoutube = $(this).closest('.video').data('youtube');
      $(this).replaceWith('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
      e.preventDefault();
    });
  });

  // Header slick slider
  if ($('#carousel-header').length) { 
    $('#carousel-header').slick({
      dots: true,
      dotsClass: "slick-dots slick-dots--inverse",
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      mobileFirst: true,
      swipeToSlide: '15',
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick",
        }
      ]
    });
  }
  // Service slick slider
  if ($('#tab-panel--service1').length) {
    $('#tab-panel--service1').slick({
      dotsClass: "slick-dots slick-dots--service",
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      mobileFirst: true,
      swipeToSlide: '15',
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick",
        }
      ]
    });
  }

  // Shop slick slider
  if ($('#carousel-shop').length) { 
    $('#carousel-shop').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      mobileFirst: true,
      swipeToSlide: '15',
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick",
        }
      ]
    });
  }

})(jQuery); // End of use strict