var l = $('.navbar-main');

var vTop = $(window).scrollTop();

// Add class for the header if the window height is =100

if (vTop > 50) {
    l.addClass('navbar-main-fixed');
} else {
    l.removeClass('navbar-main-fixed');
}

$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});

$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        autoPlay: false,
        items: 4,
        itemsMobile: [479, 2],
        navigation: true,
        pagination: false
    });

});

$('.dropdown-submenu').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});