$(window).load(function(){

    var headerHeight = $('.header').height();
    var footerHeight = $('footer').height();

    $('body').css({
        'padding-top': headerHeight + 20,
        'padding-bottom': footerHeight,
    });

});

$(document).ready(function(){

    $('.currency').find('li').on('click', function(){
        var sun = $(this).data('sun');
        var currency = $(this).data('currency');
        $(this).parent('.currency').find('li').removeClass('active');
        $(this).addClass('active');
        console.log($(this).parent('.currency').prev('.buy-content').find('.uan span'));
        $(this).parent('.currency').prev('.buy-content').find('.uan span').html(currency);
        $(this).parent('.currency').prev('.buy-content').find('.uan strong').animateNumber({ number: sun });
    });

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

    $('.img-kont').zoom();

});

$(window).resize(function(){

    var headerHeight = $('.header').height();
    var footerHeight = $('footer').height();

    $('body').css({
        'padding-top': headerHeight,
        'padding-bottom': footerHeight,
    });

});
