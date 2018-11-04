'use strict';
$(function () {
    // variables
    let jQwindow = $(window);
    let screenHeight = jQwindow.height();
    let screenWidth = jQwindow.width();
    let bannerHeight = $('.banner').height();

    // scroll events
    jQwindow.scroll(function (event) {
        let scrollPos = jQwindow.scrollTop();
        //    header menu fixer
        if ($('header').css('position') === 'absolute' && scrollPos >= bannerHeight) {
            $('header').css({
                position: 'fixed',
                top: 0,
                backgroundColor: '#000000f4',
                animation: 'slideInTop 0.3s forwards'
            });
        }
        else if ($('header').css('position') === 'fixed' && scrollPos <= bannerHeight) {
            $('header').fadeOut(200, 'linear', function () {
                let header = $('header');
                header.css({
                    position: 'absolute',
                    top: '0px',
                    backgroundColor: 'transparent',
                    animation: 'none'
                });
                setTimeout(function () {
                    header.fadeIn(200);
                }, 100)
            });
        }
    });

//    toggleMenu
    $('.menu-toggler').click(function () {
        $('header > nav').addClass('show');
        $('.menu-toggler').fadeOut(200);
    });
    $('header .menu-closer').click(function () {
        $('header > nav').removeClass('show');
        $('header > nav').addClass('unshow');
        $('.menu-toggler').fadeIn(600);
        setTimeout(function () {
            $('header > nav').removeClass('unshow');
        }, 600);
    });

    // anchor links slow scroll
    $('.anchor').click(function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});