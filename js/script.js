$(".js_trigger, .menu__link").on('click',function(){
    if ($('.js_trigger').css('visibility') == 'visible')
        $('.js_menu').toggle('fast');
});