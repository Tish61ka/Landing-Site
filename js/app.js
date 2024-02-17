$(document).ready(function () {
    const cards = document.querySelectorAll('.cost__card')

    //анимациия при наведении на карточки с примерами

    $('.flex-net > div div').height($('.flex-net>div img').height());

    $('.flex-net > div').each(function () {
        $('.flex-net > div').hover(function () {
            $(this).addClass('hovered')
        }, function () {
            $(this).removeClass('hovered')
        }
        );
    });

    //модалка

    const contentModal = {
        'work-1': [
            //картинка в хедере
            'image/yandex-modal.png',
            // Заголовок
            'Яндекс1',
            //Подзаголовок
            'Разработка одностраничного сайта для лица компании с функционалом расчета стоимости и обратным звонком',
            //картинка - 1
            '/image/Joy.png',
            //текст - 1
            'Текст текст текст текст текст текст текст текст',
            //картинка - 2
            '/image/Joy.png',
            //текст - 2
            'Текст текст текст текст текст текст текст текст',
            //картинка - 3
            '/image/Joy.png',
            //текст - 3
            'Текст текст текст текст текст текст текст текст',
        ],
        'work-2': [
            //картинка в хедере
            'image/yandex-modal.png',
            // Заголовок
            'Яндекс2',
            //Подзаголовок
            'Разработка одностраничного сайта для лица компании с функционалом расчета стоимости и обратным звонком',
            //картинка - 1
            '/image/Joy.png',
            //текст - 1
            'Текст текст текст текст текст текст текст текст',
            //картинка - 2
            '/image/Joy.png',
            //текст - 2
            'Текст текст текст текст текст текст текст текст',
            //картинка - 3
            '/image/Joy.png',
            //текст - 3
            'Текст текст текст текст текст текст текст текст',
        ],
        'work-3': [
            //картинка в хедере
            'image/yandex-modal.png',
            // Заголовок
            'Яндекс3',
            //Подзаголовок
            'Разработка одностраничного сайта для лица компании с функционалом расчета стоимости и обратным звонком',
            //картинка - 1
            '/image/Joy.png',
            //текст - 1
            'Текст текст текст текст текст текст текст текст',
            //картинка - 2
            '/image/Joy.png',
            //текст - 2
            'Текст текст текст текст текст текст текст текст',
            //картинка - 3
            '/image/Joy.png',
            //текст - 3
            'Текст текст текст текст текст текст текст текст',
        ],
        'work-4': [
            //картинка в хедере
            'image/yandex-modal.png',
            // Заголовок
            'Яндекс4',
            //Подзаголовок
            'Разработка одностраничного сайта для лица компании с функционалом расчета стоимости и обратным звонком',
            //картинка - 1
            '/image/Joy.png',
            //текст - 1
            'Текст текст текст текст текст текст текст текст',
            //картинка - 2
            '/image/Joy.png',
            //текст - 2
            'Текст текст текст текст текст текст текст текст',
            //картинка - 3
            '/image/Joy.png',
            //текст - 3
            'Текст текст текст текст текст текст текст текст',
        ],
        'shablon': [
            //картинка в хедере
            'image/yandex-modal.png',
            // Заголовок
            'Шаблон',
            //Подзаголовок
            'Разработка одностраничного сайта для лица компании с функционалом расчета стоимости и обратным звонком',
            //картинка - 1
            '/image/Joy.png',
            //текст - 1
            'Текст текст текст текст текст текст текст текст',
            //картинка - 2
            '/image/Joy.png',
            //текст - 2
            'Текст текст текст текст текст текст текст текст',
            //картинка - 3
            '/image/Joy.png',
            //текст - 3
            'Текст текст текст текст текст текст текст текст',
        ],
        'under-key': [
            //картинка в хедере
            'image/yandex-modal.png',
            // Заголовок
            'Под ключ',
            //Подзаголовок
            'Разработка одностраничного сайта для лица компании с функционалом расчета стоимости и обратным звонком',
            //картинка - 1
            '/image/Joy.png',
            //текст - 1
            'Текст текст текст текст текст текст текст текст',
            //картинка - 2
            '/image/Joy.png',
            //текст - 2
            'Текст текст текст текст текст текст текст текст',
            //картинка - 3
            '/image/Joy.png',
            //текст - 3
            'Текст текст текст текст текст текст текст текст',
        ],
        'all-in-clusive': [
            //картинка в хедере
            'image/yandex-modal.png',
            // Заголовок
            'Все включено',
            //Подзаголовок
            'Разработка одностраничного сайта для лица компании с функционалом расчета стоимости и обратным звонком',
            //картинка - 1
            '/image/Joy.png',
            //текст - 1
            'Текст текст текст текст текст текст текст текст',
            //картинка - 2
            '/image/Joy.png',
            //текст - 2
            'Текст текст текст текст текст текст текст текст',
            //картинка - 3
            '/image/Joy.png',
            //текст - 3
            'Текст текст текст текст текст текст текст текст',
        ],
    };

    function closeModal() {
        $('.modal__example-container').removeClass('open');
        $('html').css('overflow-y', 'scroll');
    }
    function openModal(className) {
        $('.modal__example-container').addClass('open');
        $('.modal_example-header>img').attr('src', contentModal[className][0]);
        $('.modal_example-main h1').text(contentModal[className][1]);
        $('.subtitle').text(contentModal[className][2]);
        $('.img-modal-1>img').attr('src', contentModal[className][3]);
        $('.img-modal-1 + p').text(contentModal[className][4]);
        $('.img-modal-2>img').attr('src', contentModal[className][5]);
        $('.img-modal-2 + p').text(contentModal[className][6]);
        $('.img-modal-3>img').attr('src', contentModal[className][7]);
        $('.img-modal-3 + p').text(contentModal[className][8]);
        $('html').css('overflow-y', 'hidden');
    }

    $('.modal_example-header button').click(function (e) {
        closeModal()
        e.preventDefault();
    });
    $('.modal_example-main button').click(function () {
        closeModal()
    });

    //Открытие модалки в блоке примеры

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

    //Анимация в блоке faq


    $('.section-3>div:last-child>div:last-child>div span').click(function () {
        if ($(this).hasClass('active') == false) {
            $(this).addClass('closed').addClass('active');
        } else {
            $(this).removeClass('closed');
            $(this).removeClass('active');
        }
        $(this).next().children().slideToggle(400);

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
