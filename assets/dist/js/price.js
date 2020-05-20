$(document).ready(function(){

    $('.price-item .text').matchHeight({
        byRow: false
    });

    $('.price-item .text h4').matchHeight({
        byRow: false
    });
    
    $('.price-item').matchHeight({
        byRow: false
    });

    $('.currency').find('li').on('click', function(){
        var sun = $(this).data('sun');
        var currency = $(this).data('currency');
        $(this).parent('.currency').find('li').removeClass('active');
        $(this).addClass('active');
        $(this).parent('.currency').prev('.buy-content').find('.uan span').html(currency);
        $(this).parent('.currency').prev('.buy-content').find('.uan strong').animateNumber({ number: sun });
    });

    var priceSlider = $('.slider-price');

    priceSlider.on("init", function(event, slick){
        $(".price_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    priceSlider.on("afterChange", function(event, slick, currentSlide){
        $(".price_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    priceSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><img src="../img/slider-next.png"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="../img/slider-prev.png"></button>',
    });

});

$(window).resize(function(){

    

});


