(function ($) {
    'use strict';

    var reen_window = $(window);

    // :: Preloader Active Code
    reen_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // :: Nav Active Code
    if ($.fn.classyNav) {
        $('#reenNav').classyNav();
    }

    // :: Welcome Carousel Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome_slides');

        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='arrow_left'</i>", "<i class='arrow_right'</i>"],
            dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        })
        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });
        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });
        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });
        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // :: Client Slides Active Code
    if ($.fn.owlCarousel) {
        $(".client_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            dots: true
        });

        var dot = $('.client_slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('#videobtn').magnificPopup({
            type: 'iframe'
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.reen-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.reen-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: allery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: Jarallax Active JS
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".timelineBody").niceScroll();
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        reen_window.scrollUp({
            scrollSpeed: 2000,
            scrollText: 'Scroll Top'
        });
    }

    // :: Sticky Active Code
    reen_window.on('scroll', function () {
        if (reen_window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });

    // :: onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeOutQuad'
        });
    }

    // :: Animated Headline Active Code
    if ($.fn.animatedHeadline) {
        $('.animated-ratate').animatedHeadline();
    }
    if ($.fn.animatedHeadline) {
        $('.animated_Headline').animatedHeadline({
            animationType: 'loading-bar'
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: Accordian Active Code
    var dd = $('dd');
    dd.filter(':nth-child(n+3)').hide();
    $('dl').on('click', 'dt', function () {
        $(this).next().slideDown(500).siblings('dd').slideUp(500);
    })

    // :: WOW Active Code
    if (reen_window.width() > 767) {
        new WOW().init();
    }

})(jQuery);
