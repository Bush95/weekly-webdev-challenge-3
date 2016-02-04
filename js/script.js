var is_mobile = $('.js_trigger').css('visibility') == 'visible';

$(".js_trigger, .menu__link").on('click',function(){
    if ($('.js_trigger').css('visibility') == 'visible')
        $('.js_menu').toggle('fast');
});

$('.menu__link').on('click', function(event){
    if (is_mobile){ 
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $(".menu__header").height()
        }, 500);
        return false;
    }
    else {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    }
    
});