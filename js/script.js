//slick-slider
var overlay = $('.overlay');

$(document).ready(function () {
  $('.watch__inner').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    adaptiveHeight: true,
  });

  //функция переключения табов
  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    }
  );

  //функция переключения слайдера
  function toggleClass(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-element__main')
          .eq(i)
          .toggleClass('catalog-element__main_active');
        $('.catalog-element__additional')
          .eq(i)
          .toggleClass('catalog-element__additional_active');
      });
    });
  }

  toggleClass('.catalog-element__link');
  toggleClass('.catalog-element__link_back');

  var inputField = $('[data-name="input"]');

  //ограничение на всплывающее окно при незаполненных полях
  // $('[data-form="formIncludes"]').on('click', function (e) {
  //   for (let i = 0; i < inputField.length; i++) {
  //     if (inputField[i].value === '') {
  //       console.log('Please select a value');
  //       return false;
  //     } else {
  //       e.preventDefault();
  //       console.log('дерьмо');
  //       $('.overlay, #consultation').fadeIn(500);
  //     }
  //   }
  // });

  //Открытие модального кона консультаций
  $('[data-modal="consultation"]').on('click', function () {
    $('.overlay, #consultation').fadeIn(500);
  });

  //кнопка покупки товара
  $('.catalog-element__btn').each(function (i) {
    //this - устанавливаем, что нажатие проиходит на один из элементов
    // i перебора, которые в свою очередь являются кнопками
    $(this).on('click', function () {
      $('#order .modal__descr').text(
        $('.catalog-element__main .catalog-element__subtitle').eq(i).text()
      );
      $('.overlay, #order').fadeIn(500);
      console.log($('label[class="error"]'));
    });
  });

  //закрытие модального окна
  $('.modal__close').on('click', function (i) {
    overlay.fadeOut('fast');
  });

  //Валидация форм с помощью jqueryvalidator

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        number: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Пожалуйста, представьтесь',
          name: 'Так как вы говорите вас зовут?',
          minlength: 'Введите хотябы следующее количество символов: {0}',
        },
        email: {
          required:
            'Ваша почта нам нужна для отправки дополнительной информации. Мы ее никуда не продадим :)',
          email:
            'Неправильно введен адрес почты. Вы уверены, что проверили его? хмм..',
        },
        number:
          'Как бы вы не были экстравертны, нам нужно с вами обсудить детали',
      },
    });
  }

  validateForms('#consultationForm');
  validateForms('#consultation form');
  validateForms('#order form');
});
