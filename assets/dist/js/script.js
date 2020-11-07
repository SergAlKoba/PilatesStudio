$(document).ready(function(){

    $(".menu a").click(function () {
        var el = $(this).data('href');
        var hash = el.split('#')[1];
        var elementClick = $('#' + hash);
        var destination = $(elementClick).position().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });

    $(".fix-menu a").click(function () {
        var el = $(this).data('href');
        var hash = el.split('#')[1];
        var elementClick = $('#' + hash);
        var destination = $(elementClick).position().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    
    var headerHeight = $('header').height();
    var footerHeight = $('footer').height();

    $('body').css({
        'padding-top': headerHeight,
        'padding-bottom': footerHeight,
    });

    if( $(document).scrollTop() >= 20 ){
        $('header').addClass('active');
        $('.sale').addClass('active');
    }else{
        $('header').removeClass('active');
        $('.sale').removeClass('active');
    }

    $('.drow').on('click', function(){
        $(this).find('ul').toggle('show');
        $(this).toggleClass('active');
    });

    $('.manu-open').on('click', function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('header').toggleClass('open');
    });

    $('.main-close').on('click', function(){
        $('header').removeClass('open');
        $('.manu-open').removeClass('active');
        $('.main-menu').removeClass('active');
    });
    
    var menuM = $('.main-content').height();
    var menuHeader = $('.main-header').height();
    var mainFooter = $('.main-footer').height();

    $('.fix-menu').css({
        'height': menuM - menuHeader - mainFooter
    });

    $('.question-icon').on('click', function(){
        $('.question-items').addClass('active');
    });

    $('.question .text').on('click', function(){
        $('.question-items').addClass('active');
    });

    $('.close').on('click', function(){
        $('.question-items').removeClass('active');
    });

    $('.cloze').on('click', function(){
        $('.popup-sencs').removeClass('active');
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    });

    $('.cloze-popup').on('click', function(){
        $('.popup-sencs').removeClass('active');
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    });

    setTimeout (function(){
        $('.loading').removeClass('loading');
    }, 3000);

});

$(window).resize(function(){
    
    var menuM = $('.main-content').height();
    var menuHeader = $('.main-header').height();
    var mainFooter = $('.main-footer').height();

    $('.fix-menu').css({
        'height': menuM - menuHeader - mainFooter
    });

    var headerHeight = $('header').height();
    var footerHeight = $('footer').height();

    $('body').css({
        'padding-top': headerHeight,
        'padding-bottom': footerHeight,
    });

});

$(window).scroll(function(){

    $('.question-items').removeClass('active');

    if( $(document).scrollTop() >= 20 ){
        $('header').addClass('active');
        $('.sale').addClass('active');
    }else{
        $('header').removeClass('active');
        $('.sale').removeClass('active');
    }

});

$(document).keyup(function(e) { 
    
    if(e.which == 27){
        $('.manu-open').removeClass('active');
        $('.main-menu').removeClass('active');
        $('header').removeClass('open');
        $('.popup-sencs').removeClass('active');
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    }

});

var target = $('.price');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $('.question').addClass('hover');
  }else{
    $('.question').removeClass('hover');
  }
});

