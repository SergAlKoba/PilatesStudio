$(document).ready(function(){

    $('.video').on('click', function(){
        $('.video-popup').addClass('active');
        var video_data = $(this).data('src');
        $('.video-popup iframe').attr('src', video_data);
    });

    $('.cloze').on('click', function(){
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    });

    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });

});

$(window).resize(function(){



});


