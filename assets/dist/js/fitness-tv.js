$(document).ready(function(){

    $('.videocontent').on('click', function(ev){

        var iframe_src  = $(this).data('iframe');
    
        $('.video-popup').addClass('active');
        $('.video-popup').find('iframe').attr('src', iframe_src);
    
    });
    
    $('.video-popup span').on('click', function () {
        $('.video-popup').removeClass('active');
        $('.video-popup').find('iframe').attr('src', '');
    });

    $('.cloze').on('click', function(ev){

        $('.popup-ytube').fadeOut();
    
    });

    $('.cloze-popup').on('click', function(ev){

        $('.popup-ytube').fadeOut();
    
    });

    setTimeout(function () {
        $('.popup-ytube').fadeIn();
    }, 5000);

    setTimeout(function () {
        $('.popup-ytube').fadeOut();
    }, 15000);

});

$(window).resize(function(){



});


