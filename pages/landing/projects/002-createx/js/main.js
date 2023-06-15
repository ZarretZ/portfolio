$(function () {
  //---------------------------------------------------------
  // СОРТИРОВКА ОТОБРАЖЕНИЯ ВЫБРАННЫХ ПОСТОВ!
  //---------------------------------------------------------
  /* Для использования нужен скрипт mixitup */
  var mixer = mixitup('.directions__list');

  /* Для использования нужен скрипт jquery */
  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active');
    $(this).addClass('directions__filter-btn--active');
  });
  //---------------------------------------------------------
  // НАСТРОЙКА СЛАЙДЕРОВ!
  //---------------------------------------------------------
  //Slick Slider. Для использования нужен скрипт jquery
  $('.team__slider').slick({
    arrows: false,
    inFinite: true,
    slidesToShow: 4,
    draggable: false,
    waitForAnimate: false,
  });

  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault();
    $('.team__slider').slick('slickPrev');
  });
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault();
    $('.team__slider').slick('slickNext');
  });

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
  });

  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault();
    $('.testimonials__slider').slick('slickPrev');
  });

  $('.testimonials__next').on('click', function (e) {
    e.preventDefault();
    $('.testimonials__slider').slick('slickNext');
  });
  //---------------------------------------------------------
  // НАСТРОЙКА АККОРДИОНА.
  //---------------------------------------------------------
  // Вариант - 1, открываються вкладки вручную. МОжно открыть все.

  // $('.course__lesson-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('course__lesson-link--active')
  //   $(this).children('.course__lesson-text').slideToggle()
  // })

  // Вариант - 2, Одна открыта. все закрыты.
  $('.course__lesson-link').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('course__lesson-link--active')) {
      $(this).removeClass('course__lesson-link--active');
      $(this).children('.course__lesson-text').slideUp();
    } else {
      $('.course__lesson-link').removeClass('course__lesson-link--active');
      $('.course__lesson-text').slideUp();
      $(this).addClass('course__lesson-link--active');
      $(this).children('.course__lesson-text').slideDown();
    }
  });
  //---------------------------------------------------------
  //ПЛАВНЫЙ СКРОЛЛИНГ ДО БЛОКА!
  //---------------------------------------------------------
  $('.header__nav-list a, .header__consult-btn, .footer__bottom-link').on(
    'click',
    function (e) {
      //отменяем стандартную обработку нажатия по ссылке
      e.preventDefault();
      //забираем идентификатор блока с атрибута href
      var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1000);
    }
  );

  // КАРТА.
  // Подключение - https://developers.google.com/maps/documentation/javascript/overview?hl=ru#maps_map_simple-javascript

  //---------------------------------------------------------
  //АДАПТИВ HEADER -1100px - Jquerry
  //---------------------------------------------------------
  setInterval(() => {
    if (
      $(window).scrollTop() > 0 &&
      $('.header__top').hasClass('header__top--open') === false
    ) {
      $('.burger').addClass('burger--follow');
    } else {
      $('.burger').removeClass('burger--follow');
    }
  }, 0);
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault();
    $('.header__top').toggleClass('header__top--open');
    $('.overlay').toggleClass('overlay--show');
  });

  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle();
  });
});
