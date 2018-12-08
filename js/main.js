$(document).ready(function() {
    $(function () {
        $("#inheadfavorite").click(function () {
            $('#dropdown_favorite').toggleClass("active");
        })
    });

    $('#main-banners').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        autoplay: false,
    });
    $('.reviews-owl-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        autoplay: false,
        navText: []
    });



    $('#features').owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        autoplay:false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:true
            },
            1459:{
                items:4,
                nav:false,
                loop:true
            }
        }
    });

    $('.productsmini-owl-slider').owlCarousel({
        loop:false,
        dots:false,
        nav:false,
        autoplay:false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            },
            1459:{
                items:5,
                nav:false
            }
        }
    });

    $('.newslistcol-list').owlCarousel({
        loop: false,
        dots:false,
        nav: true,
        autoplay:false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            600:{
                items:2,
                nav: true
            },
            1000:{
                items:3,
                nav: true
            },
            1459:{
                items:4,
                nav: true
            }
        }
    });
    
    $('.products-new, .category-owl-slider, .partners-owl-slider, .portfolio-owl-slider').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        navText: [],
        autoplay:false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:2,
                nav:true
            },
            755:{
                items:3,
                nav:true
            },
            955:{
                items:4,
                nav:true,
                loop:true
            },
            1550:{
                items:6,
                nav:true,
                loop:true
            }
        }
    });

    $('.category-detail-owl-slider').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        navText: [],
        autoplay:false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            767:{
                items:2,
                nav:true
            },
            1199:{
                items:3,
                nav:true
            }
        }
    });

    $('.news-owl-slider').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        autoplay:false,
        margin:24,
        navText: [],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            },
        }
    });

    $('.js-toggle-mainmenu').click(function(e) {
      var windowPos = $(window).scrollTop();

      if(!$('body').hasClass('opened-mobile-menu')) {
        $('body').addClass('opened-mobile-menu');

        if(window.matchMedia('(min-width: 768px)').matches){
          $('.fly-header--fixed').css('top', windowPos + 'px');
        }
        $('.js-mobile-menu').css('top', windowPos + 'px');
      } else {
        $('body').removeClass('opened-mobile-menu');

        if(window.matchMedia('(min-width: 768px)').matches){
          $('.fly-header--fixed').css('top', '0');
        }
        $('.js-mobile-menu').css('top', '0');
      }
    });

    $('.mobile-menu-nav__link').click(function(e) {
      if (!$(this).hasClass('back')) {
        var $drop = $(this).next();

        if ($drop.length) {
          e.preventDefault();
          $drop.addClass('open')
        }
      } else {
        var $drop = $(this).closest('.mobile-menu-nav__submenu');
        $drop.removeClass('open');
      }
    });

    $('#dropdown_basket_link').click(function(e) {
      e.preventDefault()
      var $basket = $('#dropdown_basket');

      if ($basket.is(':hidden')) {
        $basket.show()
      } else {
        $basket.hide()
      }
    });

    $('#inheadfavorite').click(function(e) {
      e.preventDefault()
      var $basket = $('#dropdown_favorite');

      if ($basket.is(':hidden')) {
        $basket.show()
      } else {
        $basket.hide()
      }
    });

    $('.js-views-switcher').click(function(e) {
        var view = $(this).attr('data-index');
        $('.product-view').removeClass('active');
        $('#' + view).addClass('active')
    });

    if(window.matchMedia('(min-width: 768px)').matches){
        $(window).scroll(function(event) {
          var windowPos = $(this).scrollTop();
          var headerPos = $('#fly-header').scrollTop();

          if (windowPos > headerPos) {
            $('#fly-header').addClass('fly-header--fixed');
          } else {
            $('#fly-header').removeClass('fly-header--fixed');
          }
        });
    }

    if(window.matchMedia('(max-width: 767px)').matches){
      $('#fly-header').addClass('fly-header--fixed');
    }
    
});