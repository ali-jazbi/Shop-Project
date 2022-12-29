(function ($) {
    'use strict';
  
    /* ========================================================================= */
    /*	Page Preloader
    /* ========================================================================= */
    $(window).on('load', function () {
      $('#preloader').fadeOut('slow', function () {
        $(this).remove();
      });
    });
    
    //Hero Slider
    $('.hero-slider').slick({
      autoplay: true,
      infinite: true,
      arrows: true,
      prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
      nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
      dots: false,
      autoplaySpeed: 7000,
      pauseOnFocus: false,
      pauseOnHover: false
    });
    $('.hero-slider').slickAnimation();
  
    /* ========================================================================= */
    /*	Portfolio Filtering Hook
    /* =========================================================================  */
    // filter
    setTimeout(function(){
      var containerEl = document.querySelector('.filtr-container');
      var filterizd;
      if (containerEl) {
        filterizd = $('.filtr-container').filterizr({});
      }
    }, 500);
  
    /* ========================================================================= */
    /*	Testimonial Carousel
    /* =========================================================================  */
    //Init the slider
    $('.testimonial-slider').slick({
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000
    });
  
  
    /* ========================================================================= */
    /*	Clients Slider Carousel
    /* =========================================================================  */
    //Init the slider
    $('.clients-logo-slider').slick({
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      }
      ]
    });
  
    /* ========================================================================= */
    /*	Company Slider Carousel
    /* =========================================================================  */
    $('.company-gallery').slick({
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
      ]
    });

  })(jQuery);
  