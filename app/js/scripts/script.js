// js jquery
$(document).ready(function() {
    var swiper = new Swiper('.index-slider', {
        preventClicks: false,
        preventClicksPropagation: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed: 1500,
        loop: true,
        effect: "fade",
        pagination: {
            el: '.index-slider__pagination',
            clickable: true,
            bulletClass: 'index-slider__bullet',
            bulletActiveClass: 'index-slider__bullet_active',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        }
    });

    var swiper = new Swiper('.last-news__slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.last-news__next',
            prevEl: '.last-news__prev'
        }
    });

    var swiper = new Swiper('.partners__slider', {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
            nextEl: '.partners__next',
            prevEl: '.partners__prev'
        }
    });
    var swiper = new Swiper('.instagram__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.instagram__next',
            prevEl: '.instagram__prev'
        }
    });
});