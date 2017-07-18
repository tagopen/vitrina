(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function () {
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

  // Bootstrap tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Selectize
  $(function () {
    $(".disperse__select--desirable").select2({
      maximumInputLength: 2
    });
    $(".disperse__select--undesirable").select2({
      theme: "red"
    });
    $(".disperse__select--area, .disperse__select--parking").select2();
  });

  // Video preview
  $(function () {
    $('#video__play').on('click', function(e) {
      let dataYoutube = $(this).closest('.video').data('youtube');
      $(this).replaceWith('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
      e.preventDefault();
    });
  });
  
  // Tabs panel
  $(function () {
    $('.tab-control__link').on('click', function(e) {
      e.preventDefault();
      var $item = $(this).closest('.tab-control__item'),
          $contentItem = $('.tab__panel'),
          itemPostion = $(this).attr('href');


          $contentItem.filter(itemPostion)
                      .addClass('tab__panel--active')
                      .parent()
                      .siblings()
                      .find('.tab__panel')
                      .removeClass('tab__panel--active');

          $(this).addClass('tab-control__link--active')
                 .closest('.tab-control__item')
                 .siblings()
                 .find('.tab-control__link')
                 .removeClass('tab-control__link--active');
      $contentItem.resize();
    });
  });
  
  $(function () {
    var totalProducts = (function() {
      $('.show-all__visible').text($('.category__layout').has(':visible').length);
      $('.show-all__all').text($('.category__layout').length);
    });

    // show category item
    $(window).on('resize', function(){
      var $item = $('.category__layout'),
          delayStep = 200,
          showPerClick = 4,
          totalSize = $item.length;


      // hide elements on resize
      if ($('.show-all__link--catalog').is(':visible')) {
        $item.hide();
        if( $( window ).width() <= 767 ) {
          $('.category__layout:lt(4)').show();
        } else if( $( window ).width() <= 991 ) {
         $('.category__layout:lt(6)').show();
        } else {
          $('.category__layout:lt(7)').show();
        }
      }

      totalProducts();

      // Show hidden elements with fadein animation
      $(document).on("click", ".show-all__link--catalog", (function(e) {
        var visibleItems = $item.has(':visible').length,
            openItems    = (visibleItems + showPerClick <= totalSize) ? visibleItems + showPerClick : totalSize;

        $('.category__layout:lt(' + openItems + ')').each(function(i, item) {
          $(this).stop().fadeIn('slow').animate({opacity: 1}, delayStep)
        });

        totalProducts();
        if (visibleItems == totalSize)
          $('.show-all__link--catalog').hide();

        e.preventDefault();
      }));

    }).triggerHandler('resize');
  });

  // favorite active
  $(function() {
    $('.favorite').on('click', function(e) {
      $(this).toggleClass('favorite--active');
      e.preventDefault();
    });
  });

  // compare active
  $(function() {
    $('.compare').on('click', function(e) {
      $(this).toggleClass('compare--active');
      e.preventDefault();
    });
  });

  // custom dropdown
  $(function () {
    $('.slidedown').on('click', function(e) {
      e.preventDefault();
      
      var $item = $(this),
          $content = $item.siblings('.faq__answer');

      $item.addClass('faq__question--active')
      .siblings()
      .removeClass('faq__question--active');
    });
  });
  
  $(function () {
    $('#list-view').click(function( e ) {

      $('.category__col').attr('class', 'col category__col');
      $('.map--category').addClass('hidden-xs-up');
      $('.category__layout').attr('class', 'category__layout category__layout--list col col-24 col-lg-12');

      $('.view').removeClass('view--active');
      $(this).addClass('view--active');

      localStorage.setItem('display', 'list');

      e.preventDefault();
    });

    $('#map-view').click(function( e ) {
      $('.map--category').removeClass('hidden-xs-up');
      $('.category__col').attr('class', 'col col-24 col-md-10 col-lg-8 category__col category__col--map');

      $('.category__layout').attr('class', 'category__layout category__layout--map col col-24 col-md-24');

      $('.view').removeClass('view--active');
      $(this).addClass('view--active');

      localStorage.setItem('display', 'map');

      e.preventDefault();
    });

    $('#grid-view').click(function( e ) {
      var $cols = $('.category__layout');
      $cols.each(function(i, item) {
        if (i < 3) {
          $(this).attr('class', 'category__layout category__layout--grid category__layout--big col-24 col-sm-16 col-md-8');
        } else {
          $(this).attr('class', 'category__layout category__layout--grid col-24 col-sm-16 col-md-8 col-lg-6');
        }

      });

      $('.category__col').attr('class', 'col category__col');
      $('.map--category').addClass('hidden-xs-up');

      $('.view').removeClass('view--active');
      $(this).addClass('view--active');
      localStorage.setItem('display', 'grid');

      e.preventDefault();
    });

    if (localStorage.getItem('display') == 'list') {
      $('#list-view').trigger('click');
    } else if (localStorage.getItem('display') == 'map') {
      $('#map-view').trigger('click');
    } else {
      $('#grid-view').trigger('click');
    }
  });


})(jQuery); // End of use strict