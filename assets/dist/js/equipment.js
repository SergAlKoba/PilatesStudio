$(window).load(function(){

    // $('body').css({
    //     'padding-top': headerHeight + 20,
    //     'padding-bottom': footerHeight,
    // });

    $('.video').on('click', function(){
        $('.video-popup').addClass('active');
        var video_data = $(this).data('src');
        $('.video-popup iframe').attr('src', video_data);
    });

    $('.cloze').on('click', function(){
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    });

    $('.currency').find('li').on('click', function(){
        var sun = $(this).data('sun');
        var currency = $(this).data('currency');
        $(this).parent('.currency').find('li').removeClass('active');
        $(this).addClass('active');
        console.log($(this).parent('.currency').prev('.buy-content').find('.uan span'));
        $(this).parent('.currency').prev('.buy-content').find('.uan span').html(currency);
        $(this).parent('.currency').prev('.buy-content').find('.uan strong').animateNumber({ number: sun });
    });

});