var infos = {
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
            "<h3>Lenovo X280</h3>",
            "<p>Intel Core i5-8350U, 8 GB RAM, 256 GB NVMe, Intel UHD Graphics 620</p>"
        ]
    },
    "phone": {
        "text": [
            "<h1>Телефон</h1>",
            "<h3>Huawei mate 50 pro</h3>",
            "<p>Основной смартфон для связи и соцсетей</p>"
        ]
    },
    "oldphone": {
        "text": [
            "<h1>Старый телефон</h1>",
            "<h3>Poco m4 pro</h3>",
            "<p>Теперь второй телефон</p>"
        ]
    },
    "nas": {
        "text": [
            "<h1>NAS-сервер</h1>",
            "<h3>QNAP TS-253E-8G</h3>",
            "<p>Сетевой накопитель для хранения файлов</p>"
        ]
    },
    "tablet": {
        "text": [
            "<h1>Планшет</h1>",
            "<h3>Xiaomi Pad 5</h3>",
            "<p>Использую для потребления контента</p>"
        ]
    },
    "youtube": {
        "text": [
            "<h1>YouTube</h1>",
            "<h3>Канал: N/A/h3>",
            "<p>N/A подписчик, N/A видео</p>",
            "<p><a href='https://www.youtube.com/@N/A-' target='_blank'>Перейти на канал</a></p>"
        ]
    },
    "tiktok": {
        "text": [
            "<h1>TikTok</h1>",
            "<h3>Аккаунт: @N/A</h3>",
            "<p>N/A подписчиков, N/A лайка</p>",
            "<p><a href='https://tiktok.com/@t4кцйкцй' target='_blank'>Перейти в TikTok</a></p>"
        ]
    }
};

document.querySelectorAll('.elbox').forEach(function(el) {
    el.addEventListener('click', function() {
        var linkarray = Array.from(document.querySelectorAll('a:not(#infocontainer a)'));
        if (linkarray.includes(document.activeElement)) {
            return;
        }
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
