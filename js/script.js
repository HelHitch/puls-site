//slick-slider

$(document).on("ready", function () {
  $(".watch__inner").slick({
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/icons/left.svg" /> </button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/icons/right.svg" /></button>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          prevArrow: '<button type="button" class="slick-prev"> </button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
        },
      },
    ],
  });
});
