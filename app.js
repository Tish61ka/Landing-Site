$(document).ready(function () {

    $('.flex-net > div div').height($('.flex-net>div img').height());

    $('.flex-net > div').each(function () {
        $('.flex-net > div').hover(function () {
            $(this).addClass('hovered')
        }, function () {
            $(this).removeClass('hovered')
        }
        );
    });

    $('.section-3>div:last-child>div:last-child>div span').click(function () {
        if ($(this).hasClass('active') == false) {
            $(this).addClass('closed').addClass('active');
        } else {
            $(this).removeClass('closed');
            $(this).removeClass('active');
        }
        $(this).next().children().slideToggle(400);

    });
    function closeModal() {
        $('.modal__example-container').removeClass('open');
        $('html').css('overflow-y', 'scroll');
    }

    $('.modal_example-header button').click(function (e) {
        closeModal()
        e.preventDefault();
    });
    $('.modal_example-main button').click(function () {
        closeModal()
    });
    $('.flex-net>div').click(function (e) {
        $('.modal__example-container').addClass('open');
        $('html').css('overflow-y', 'hidden');
        e.preventDefault();
    });

});