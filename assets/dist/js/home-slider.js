$(document).ready(function(){

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

    $('.diplomas-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.diploms-nav',
        nextArrow: '<button class="slick-arrow next"><img src="../img/slider-next.png"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="../img/slider-prev.png"></button>',
    });

    $('.diploms-nav').slick({
        arrows: false,
        slidesToShow: 14,
        slidesToScroll: 14,
        focusOnSelect: true,
        asNavFor: '.diplomas-slider',
    });

  

});

$(window).resize(function(){

    

});


