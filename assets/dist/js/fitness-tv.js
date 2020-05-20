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

});

$(window).resize(function(){



});


