new WOW().init();

/*main swiper*/
const swiper = new Swiper('.about__swiper', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.about__pagination',
      type: 'bullets',
      clickable: true, 
  },

  navigation: {
    nextEl: ".about__next",
    prevEl: ".about__prev",
  },
  });
  