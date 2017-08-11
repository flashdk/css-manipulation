$(document).ready(function () {
    $('#menu-menu2').on('click',function () {
        $('.visible').toggle().slideDown
    });
    $('#menu-menu1').on('click',function () {
        $('.visible2').toggle().slideDown
    })

    $('.home').mouseenter(function () {
        var t = $(this).find('#homesousmenu').css('top');
        $(this).find('#homesousmenu').css({
            top:127
        })
        $(this).find('#homesousmenu').css({
            top: t - 3
        }).animate({
            top: 50
        });

    });

    $('.events').mouseenter(function () {
        var t = $(this).find('#eventssousmenu').css('top');
        $(this).find('#eventssousmenu').css({
            top:127
        })
        $(this).find('#eventssousmenu').css({
            top: t - 3
        }).animate({
            top: 50
        });

    });

    $('.blogs').mouseenter(function () {
        var t = $(this).find('#blogssousmenu').css('top');
        $(this).find('#blogssousmenu').css({
            top:127
        })
        $(this).find('#blogssousmenu').css({
            top: t - 3
        }).animate({
            top: 50
        });

    });
    $('.courses').mouseenter(function () {
        var t = $(this).find('#coursessousmenu').css('top');
        $(this).find('#coursessousmenu').css({
            top:127
        })
        $(this).find('#coursessousmenu').css({
            top: t - 3
        }).animate({
            top: 50
        });

    });
    $('.shop').mouseenter(function () {
        var t = $(this).find('#shopsousmenu').css('top');
        $(this).find('#shopsousmenu').css({
            top:127
        })
        $(this).find('#shopsousmenu').css({
            top: t - 3
        }).animate({
            top: 50
        });

    });
    $('.page').mouseenter(function () {
        var t = $(this).find('#pagessousmenu').css('top');
        $(this).find('#pagessousmenu').css({
            top:127
        })
        $(this).find('#pagessousmenu').css({
            top: t - 3
        }).animate({
            top: 50
        });

    });
    $('.les-cadres').mouseenter(function () {
        var timg = $(this).find('#blue-hover1, #blue-hover2, #blue-hover3').css('width');
        var position = $(this).find('#fa-link1, #fa-link2, #fa-link3').css('left');
        $(this).find('#blue-hover1, #blue-hover2, #blue-hover3').css({
            width: 10,
        }).animate({
            width: 350
        });
        $(this).find('#fa-link1, #fa-link2, #fa-link3').css({
            display: 'block',
            left: position,
        }).animate({
            left: 160
        });
    });
    $('.les-cadres').mouseleave(function () {
        var timg = $(this).find('#blue-hover1, #blue-hover2, #blue-hover3').css('width');
        var position = $(this).find('#fa-link1, #fa-link2, #fa-link3').css('left');
        $(this).find('#blue-hover1, #blue-hover2, #blue-hover3').css({
            width: timg,
        }).animate({
            width: 0
        });
        $(this).find('#fa-link1, #fa-link2, #fa-link3').css({
            left: position,
        }).animate({
            left: 320,
        })
        var position = $(this).find('#fa-link1, #fa-link2, #fa-link3').css('left');
        if(position = 320) {
            $(this).find('#fa-link1, #fa-link2, #fa-link3').fadeOut
        }
    });
    $('.les-cadres').mouseenter(function () {
        var ttringle = $(this).find('#blue-hover-pied1, #blue-hover-pied2, #blue-hover-pied3').css('background-color');
        $(this).find('#blue-hover-pied1, #blue-hover-pied2, #blue-hover-pied3').css({
            'background-color': '#253990',
        })
    });
    $('.les-cadres').mouseleave(function () {
        var ttringle = $(this).find('#blue-hover-pied1, #blue-hover-pied2, #blue-hover-pied3').css('background-color');
        $(this).find('#blue-hover-pied1, #blue-hover-pied2, #blue-hover-pied3').css({
            'background-color': '#999999',
        })
    });

})