ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [52.445184, 30.9919744],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'images/myIcon.gif',
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([52.445184, 30.9919744], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});



async function getWeather() {  
    const url = 'http://api.openweathermap.org/data/2.5/weather?id=627907&appid=fff0026d1fd72a7c60e7894402f4345c';
    const res = await fetch(url);
    const data = await res.json(); 
    document.querySelector('.weatherTitle').textContent = data.name;
    document.querySelector('.weatherForecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;'+'C';
    document.querySelector('.weatherTime').textContent = data.weather[0]['description'];
  }
   getWeather();
  
   // функция местоположени
  navigator.geolocation.getCurrentPosition((position) => {
      document.querySelector('.latitude').innerHTML ='широта:'+ position.coords.latitude; document.querySelector('.longitude').innerHTML='долгота:'+ position.coords.longitude;
    
  });
  

 
 














