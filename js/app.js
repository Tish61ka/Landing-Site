$(document).ready(function () {
    const cards = document.querySelectorAll('.cost__card')

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
    function openModal(className) {
        const renameClass = '.' + className;
        $(renameClass).addClass('open');
        $('html').css('overflow-y', 'hidden');
    }

    $('.modal_example-header button').click(function (e) {
        closeModal()
        e.preventDefault();
    });
    $('.modal_example-main button').click(function () {
        closeModal()
    });
    $('.flex-net>div').click(function (e) {
        const idAttr = $(this).attr('id');
        openModal(idAttr);
        e.preventDefault();
    });

    //Открытие цены - примеры

    $('.cost__card-bot a').click(function (e) {
        const hrefAttr = $(this).attr('href');
        openModal(hrefAttr);
        e.preventDefault();
    });

    // Анимация карточек

    VanillaTilt.init(cards, {
        max: 7,
        glare: true,
        'max-glare': 0.4,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
    });


    //Взятие информации из input-file
    $('#inputFile').change(function (e) {
        for (let i = 0; i <= e.target.files.length; i++) {
            if ($('#inputFile + div').length == 0) {
                $('#inputFile').after('<div></div>');
            }
            $('#inputFile + div').append("<span class='selected-files'>" + e.target.files[i].name) + "</span>";
        }
    })
});
