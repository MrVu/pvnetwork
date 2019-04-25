(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
                Magnific PopUp
        ----------------------------------------------------*/
		var $magnificPopupSelector = $('.popup-video');
        $magnificPopupSelector.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
        });
        /*---------------------------------------------------
           location carousel
        ----------------------------------------------------*/
        var $locationCarousel = $('#location-carousel');
        $locationCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            autoPlayTimeout: 1000,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
				599: {
                    items: 2
                },
                768: {
                    items: 3
                },
                960: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });
		/*-----------------------------------
			testimonial carousel
		-----------------------------------*/
        var $testimonialCarousel = $('#testimonial-carousel');
			$testimonialCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            items: 2,
            autoPlayTimeout: 1000,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        /*---------------------------------------------------
            Smooth Scroll
        ----------------------------------------------------*/
		$(document).on('click','a[href*="#"]:not([href="#"]):not([data-toggle])',function(){
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
		});

    });

    
    $(window).on('scroll', function () {
		/*---------------------------------------------------
        Sticky Header
    ----------------------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header").removeClass("sticky");
        } else {
            $("#header").addClass("sticky");
        }
    });

    
    $(window).on('load', function () {
		/*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/
        $('.site-preloader').fadeOut(500);
        /*---------------------------------------------------
            WOW JS Activation
        ----------------------------------------------------*/
        new WOW().init();
    });
    


}(jQuery));
