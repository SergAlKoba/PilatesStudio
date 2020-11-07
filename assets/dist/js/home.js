$(document).ready(function(){

    if($(window).width() >= 768){
        new WOW().init();
    }

    if($(window).width() < 1024){

        $('.issue-certificate-content .example').expandable({
            'height': 218,
            'more':'Читать далее...',
            'less':'Скрыть',
            'animation_duration': 275
        });

        $('.short-time-content .example').expandable({
            'height': 245,
            'more':'Читать далее...',
            'less':'Скрыть',
            'animation_duration': 275
        });

        $('.why-created-text .example').expandable({
            'height': 130,
            'more':'Читать далее...',
            'less':'Скрыть',
            'animation_duration': 275
        });

    }
    
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

    $( "#accordion" ).accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });

    $('.readmore-js-toggle').on('click', function(){
        $('.reviews-item .text').removeClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.fagTabs').responsiveTabs({
        duration: 200,
        startCollapsed: 'accordion',
        animation: 'slide',
    });

    var timeout1, timeout2, setImeout, current1 = 0,
    textArr1 = document.querySelectorAll('.svg-site')

    function ovalIconInit1 () {
        timeout1 = setTimeout(function() {
            $('.site-text').removeClass('active');
            $('.' + $('.svg-site.active').data('text')).addClass('active');
            textArr1.forEach(function(i) { (i) >= i.classList.remove('active') });
            textArr1[current1].classList.add("active");
            (current1 === 15) ? current1 = 0 : current1++;
            ovalIconInit1();
        }, 2000);
    };

    ovalIconInit1();

    $('.video').on('click', function(){
        $('.video-popup').addClass('active');
        var video_data = $(this).data('src');
        $('.video-popup iframe').attr('src', video_data);
    });

    $('.cloze').on('click', function(){
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    });

    $('.cloze-popup').on('click', function(){
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    });

    $('.slider-for').find('.certificate-item').each(function(){
        $(this).find('img').attr('src', $(this).data('item'));
    })
    
    $('.slider-nav').find('.certificate-item').each(function(){
        $(this).find('img').attr('src', $(this).data('item'));
    })

    // $(".menu").on("click","a", function (event) {
	// 	event.preventDefault();
    //     var id  = $(this).data('href'),
    //         top = $(id).offset().top -100;
	// 	$('body,html').animate({scrollTop: top}, 500);
    // });

    $(".price-top").on("click", function (event) {
		event.preventDefault();
        var id  = $(this).data('href'),
            top = $(id).offset().top -50;
		$('body,html').animate({scrollTop: top}, 500);
    });
    
    $('.currency').find('li').on('click', function(){
        var sun = $(this).data('sun');
        var old = $(this).data('old');
        var currency = $(this).data('currency');
        $(this).parent('.currency').find('li').removeClass('active');
        $(this).addClass('active');
        console.log($(this).parent('.currency').prev('.buy-content').find('.uan span'));
        $(this).parent('.currency').prev('.buy-content').find('.uan span').html(currency);
        $(this).parent('.currency').prev('.buy-content').find('.uan strong').animateNumber({ number: sun });
        $(this).parent('.currency').prev('.buy-content').find('.uan-old strong').animateNumber({ number: old });
    });

    $('.contact-link').on('click', function(){
        $(this).prev().toggleClass('active');
    });

});

$(window).resize(function(){

    

});


