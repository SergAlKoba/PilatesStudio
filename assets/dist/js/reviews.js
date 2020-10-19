$(document).ready(function(){

    var reviewsSlider = $('.reviews-slider');

    reviewsSlider.on("init", function(event, slick){
        $(".reviews_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    reviewsSlider.on("afterChange", function(event, slick, currentSlide){
        $(".reviews_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    reviewsSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><img src="../img/slider-next.png"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="../img/slider-prev.png"></button>',
    });

    if($(window).width() < 1360){

        $('.reviews-slider .example').expandable({
            'height': 126,
            'more':'Читать далее...',
            'less':'Скрыть',
            'animation_duration': 275
        });

    }

    if($(window).width() > 1360){

        $('.reviews-slider .example').expandable({
            'height': 230,
            'more':'Читать далее...',
            'less':'Скрыть',
            'animation_duration': 275
        });

    }

});

$(window).resize(function(){



});


