"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
	
	
	/*---------------------------------------------*
     * Portfolio Pop Up Animation
     ---------------------------------------------*/

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
	/*---------------------------------------------*
     * Menu Background Change
     ---------------------------------------------*/
	
	var windowWidth = $(window).width();
    if (windowWidth > 757) {

        
          
            $(window).scroll(function () {
                if ($(this).scrollTop() > 500) {
                    $('.navbar').fadeIn(500);
                    $('.navbar').addClass('menu-bg');

                } else {
                    
                    $('.navbar').removeClass('menu-bg');
                }
            });
        
    }
	$('#bs-example-navbar-collapse-1').localScroll();


    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

		$.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

//    $('.statistic-counter').counterUp({
//        delay: 10,
//        time: 2000
//    });




    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

//        var wow = new WOW({
//            mobile: false // trigger animations on mobile devices (default is true)
//        });
//        wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

//    $('.testimonials').owlCarousel({
//        responsiveClass: true,
//        autoplay: false,
//        items: 1,
//        loop: true,
//        dots: true,
//        autoplayHoverPause: true
//
//    });


    //End
});

(function() { 
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.configure({
        thumbnails: "empty",
        showCounter: false,
        autoplay: 7000,
        fullscreenDoubleTap: true
    });
    Galleria.run('.galleria');
    /*Galleria.loadTheme('galleria/themes/dots/galleria.dots.js');
    
    $('#galleria').galleria();*/
}());


function nextsale() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Aanbiedingen',
        eventAction: 'images'
    });
}

function portfolieimg(name) {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Portfolio',
        eventAction: 'portfolio_' + name
    });
}

var offset = -10; //Offset of 20px
var speed = 1000;

$("#contactbutton").click(function() {
    
    $('html, body').animate({
        scrollTop: $("#contact").offset().top + offset
    }, speed);
});

$("#aanbiedingbutton").click(function() {

    $('html, body').animate({
        scrollTop: $("#aanbieding").offset().top + offset
    }, speed);
});

$("#aboutbutton").click(function() {

    $('html, body').animate({
        scrollTop: $("#about").offset().top + offset
    }, speed);
});

$("#portfoliobutton").click(function() {

    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top + offset
    }, speed);
});

var buttons = ['aanbieding', 'about', 'portfolio', 'contact']
/*var buttonoffset = []
for (var index in buttons) {
    var button = $("#" + buttons[index] + "button")
    
    if(window.pageYOffset > button.offset().top) {
        button.focus()
    }
}*/

$(window).on('scroll', function() {
    var y_scroll_pos = parseInt(window.pageYOffset) + (window.innerHeight/2);

    for (var index in buttons) {
        var button = $("#" + buttons[index] + "button")
        var section = $("#" + buttons[index])
        if(y_scroll_pos > parseInt(section.offset().top)) {
            button.focus()
            button.hover()
        }
    }
});