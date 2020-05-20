$(document).ready(function(){

    if($(window).width() >= 768){

        $('.plus-item .text').matchHeight({
            byRow: true
        });
        
        $('.price-item .text').matchHeight({
            byRow: true
        });

        $('.price-item .text h4').matchHeight({
            byRow: true
        });
        
        $('.price-item').matchHeight({
            byRow: true
        });
    }

    $('.map-item').matchHeight({
        byRow: false
    });

    if($(window).width() >= 1280){
        
        $('.price-item .text').matchHeight({
            byRow: false
        });

        $('.price-item').matchHeight({
            byRow: false
        });

    }

    $('.why-trust-item').matchHeight({
        byRow: true
    });
    
});

$(window).resize(function(){

    

});


