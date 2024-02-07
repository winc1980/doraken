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
        nextEl: ".triangle-next-2",
        prevEl: ".triangle-prev-2"
    }
});

let katudouGallery = new Swiper ('.swiper-katudou-gallery .swiper', {
    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination-katudou-gallery",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    observer:true,
    observerParents:true,
});

