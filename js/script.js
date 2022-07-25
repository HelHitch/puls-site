//slick-slider

$(document).ready(function () {
  $(".watch__inner").flickity({
    // options
    cellAlign: "center",
    contain: true,
    adaptiveHeight: true,
  });

  //функция переключения табов
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  //функция переключения слайдера
  function toggleClass(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-element__main")
          .eq(i)
          .toggleClass("catalog-element__main_active");
        $(".catalog-element__additional")
          .eq(i)
          .toggleClass("catalog-element__additional_active");
      });
    });
  }

  toggleClass(".catalog-element__link");
  toggleClass(".catalog-element__link_back");
});
