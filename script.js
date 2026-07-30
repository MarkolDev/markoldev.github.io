var infos = {
    // ----- PROJECTS ----- (информация не используется, т.к. открывается ссылка)
    "kuizsmp": {
        "text": [
            "<h1>KuizSMP</h1>",
            "<h3>Майнкрафт сервер</h3>",
            "<p>Сервер для игры с друзьями. Версия 1.20+.</p>"
        ]
    },
    "markuiz": {
        "text": [
            "<h1>Маркуйз</h1>",
            "<h3>Социальная сеть</h3>",
            "<p>Моя собственная соцсеть для общения и публикаций.</p>"
        ]
    },

    // ----- DEVICES -----
    "mainpc": {
        "text": [
            "<h1>Основная печка</h1>",
            "<h3>Кастомный ПК</h3>",
            "<p>Intel Core i5-10050, RTX 4060 TI, 512 GB SSD, 4 TB HDD, 1 TB SSD, 32 GB RAM, ASUS ROG</p>"
        ]
    },
    "notebook": {
        "text": [
            "<h1>Ноутбук</h1>",
            "<h3>Lenovo T14s</h3>",
            "<p>11th Gen Intel Core i7-1185G7 @ 3.00GHz, 32 GB DDR4 RAM, 512 GB NVMe SSD, сенсорный экран, поддержка Windows Hello, Intel Iris Xe Graphics</p>"
        ]
    },
    "server": {
        "text": [
            "<h1>Сервер</h1>",
            "<h3>Lenovo X280</h3>",
            "<p>Intel Core i5-8350U, 8 GB RAM, 256 GB NVMe. Используется как хост для соцсети и майнкрафт-серверов.</p>"
        ]
    },
    "phone": {
        "text": [
            "<h1>Телефон</h1>",
            "<h3>Pixel 10</h3>",
            "<p>Новый основной смартфон. Отличная камера и чистый Android.</p>"
        ]
    },
    "huawei": {
        "text": [
            "<h1>Huawei</h1>",
            "<h3>Huawei Mate 50 Pro (полумёртвый)</h3>",
            "<p>Произошёл баг прошивки. Жду патча, чтобы восстановился.</p>"
        ]
    },
    "oldphone": {
        "text": [
            "<h1>Кирпич</h1>",
            "<h3>Poco M4 Pro</h3>",
            "<p>Старый телефон, теперь лежит без дела (кирпич).</p>"
        ]
    },
    "nas": {
        "text": [
            "<h1>NAS-сервер</h1>",
            "<h3>QNAP TS-253E-8G</h3>",
            "<p>Сетевой накопитель для хранения файлов и бэкапов.</p>"
        ]
    },
    "tablet": {
        "text": [
            "<h1>Планшет</h1>",
            "<h3>Xiaomi Pad 5</h3>",
            "<p>Использую для потребления контента и рисования.</p>"
        ]
    },

    // ----- SOCIALS -----
    "markuiz_social": {
        "text": [
            "<h1>Маркуйз</h1>",
            "<h3>Моя страница</h3>",
            "<p>Мой профиль в социальной сети Маркуйз.</p>",
            "<p><a href='https://markuiz.markoldev15.crazedns.ru/markol' target='_blank'>Перейти в профиль</a></p>"
        ]
    }
};

// Обработчик кликов с поддержкой data-link (открытие сайта)
document.querySelectorAll('.elbox').forEach(function(el) {
    el.addEventListener('click', function(e) {
        // Если клик был по ссылке внутри, не обрабатываем (чтобы не мешать)
        if (e.target.closest('a')) return;

        // Если есть data-link, открываем в новой вкладке и выходим
        if (this.dataset.link) {
            window.open(this.dataset.link, '_blank');
            return;
        }

        // Иначе стандартная логика с панелью
        if (document.querySelector('.elbox.active') === this) {
            document.querySelector('.elbox.active').classList.remove('active');
            document.getElementById('infocontainer').classList.add('hide');
            return;
        }
        if (document.querySelector('.elbox.active')) {
            document.querySelector('.elbox.active').classList.remove('active');
        }
        this.classList.add('active');
        document.getElementById('infocontainer').innerHTML = infos[this.getAttribute('info')].text.join('');
        document.getElementById('infocontainer').insertAdjacentHTML('afterbegin', `<div class="closebutton" onclick="document.querySelector('.elbox.active').click()">Закрыть</div>`);
        if (document.getElementById('infocontainer').classList.contains('hide')) {
            document.getElementById('infocontainer').classList.remove('hide');
        }
    });
});
