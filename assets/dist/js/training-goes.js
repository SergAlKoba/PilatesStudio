$(window).load(function(){


    $('.slider-for').find('.certificate-item').each(function(){
        $(this).find('img').attr('src', $(this).data('item'));
    })
    
    $('.slider-nav').find('.certificate-item').each(function(){
        $(this).find('img').attr('src', $(this).data('item'));
    })

    $('.slider-for').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        nextArrow: '<button class="slick-arrow next"><img src="../img/slider-next.png"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="../img/slider-prev.png"></button>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    fade: false,
                }
            },
        ]
    });

    $('.slider-nav').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
    });

    var headerHeight = $('.header').height();
    var footerHeight = $('footer').height();

    $('body').css({
        'padding-top': headerHeight + 20,
        'padding-bottom': footerHeight,
    });

});

$(document).ready(function(){

    $('.course .text').readmore({
        speed: 175,
        maxHeight: 128,
        moreLink: '<a href="#">Читать далее...</a>',
        lessLink: '<a href="#">Скрыть</a>'
    });

    $('.video').on('click', function(){
        $('.video-popup').addClass('active');
        var video_data = $(this).data('src');
        $('.video-popup iframe').attr('src', video_data);
    });

    $('.cloze').on('click', function(){
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    });

    $('.contact-link').on('click', function(){
        $(this).prev().toggleClass('active');
    });

});

$(window).resize(function(){

    var headerHeight = $('.header').height();
    var footerHeight = $('footer').height();

    $('body').css({
        'padding-top': headerHeight,
        'padding-bottom': footerHeight,
    });

});
