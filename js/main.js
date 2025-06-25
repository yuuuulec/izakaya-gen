$(function () {
    $("#slider-pc,#slider-sp").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: false,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
});