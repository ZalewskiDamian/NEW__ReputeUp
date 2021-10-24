//SWIPER FOR GOOGLE
var swiper = new Swiper('.swiper-google', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.pagination-google',
    },
    navigation: {
      nextEl: '.arrow-next-google',
      prevEl: '.arrow-prev-google',
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
//SWIPER FOR FACEBOOK
var swiper2 = new Swiper('.swiper-facebook', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.pagination-facebook',
    },
    navigation: {
      nextEl: '.arrow-next-facebook',
      prevEl: '.arrow-prev-facebook',
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
//SWIPER FOR TRIPADVISOR
var swiper3 = new Swiper('.swiper-tripadvisor', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.pagination-tripadvisor',
    },
    navigation: {
      nextEl: '.arrow-next-tripadvisor',
      prevEl: '.arrow-prev-tripadvisor',
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