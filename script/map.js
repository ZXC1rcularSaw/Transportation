document.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(init);

    function init() {
        // Создание карты
        var map = new ymaps.Map("map", {
            center: [53.586900, 49.773269], // Центр карты (Москва)
            zoom: 10 // Масштаб
        });

        // Можно добавить дополнительные элементы на карту
        // Например, маркер:
        var myPlacemark = new ymaps.Placemark([53.586900, 49.773269], {
            hintContent: 'Наш офис.',
            balloonContent: 'Мы здесь!'
        });

        map.geoObjects.add(myPlacemark);
    }
});