let activityPhotosSwiper = new Swiper ('.activity-photos .swiper', {
    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

let illustPhotosSwiper = new Swiper ('.illust-photos .swiper2', {
    slidesPerView: 1,

    pagination: {
        el: ".swiper2-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper2-button-next",
        prevEl: ".swiper2-button-prev"
    }
});