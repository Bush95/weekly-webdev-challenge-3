var is_mobile = $('.js_trigger').css('visibility') == 'visible';

function toggle_menu() {
    $(".js_trigger, .menu__link").on('click', function () {
        if ($('.js_trigger').css('visibility') == 'visible')
            $('.js_menu').toggle('fast');
    });
}

function smooth_menu_scroll() {
    $('.menu__link, .section-title__header>.btn').on('click', function (event) {
        if (is_mobile) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - $(".menu__header").height() // substract fixed menu height
            }, 500);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
            return false;
        }
    });
}

function track_menu(menu_li_class, menu_li_active_class, positive_margin) {

    var current_position = $(window).scrollTop();
    var menu_li = [];

    $('.' + menu_li_class).each(function () {
        menu_li.push( //add all links from menu and their targets positions to objects
            {
                'target': $(this),
                'position': $($(this).attr('href')).offset().top
            });
    });
    menu_li.push({
        'target': $('footer'),
        'position': $('footer').offset().top
    });

    $(window).scroll(function () {
        for (var i = 0; i < menu_li.length - 1; i++) {
            if ($(window).scrollTop() >= (menu_li[i].position - positive_margin) && $(window).scrollTop() < (menu_li[i + 1].position - positive_margin)) {
                $('.' + menu_li_active_class).removeClass(menu_li_active_class);
                menu_li[i].target.addClass(menu_li_active_class);
            }
        }
    });
}

$(document).ready(function(){
    toggle_menu();
    smooth_menu_scroll();
    track_menu('menu__link','menu__link--active', '100');
});