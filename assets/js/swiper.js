const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.slider-arrow-next',
      prevEl: '.slider-arrow-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});