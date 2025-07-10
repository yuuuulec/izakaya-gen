// FVスライダー
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
// ハンバーガーメニュー
$(".hamburger").click(
    function() {
    $(this).toggleClass("active");
        $(".header__nav").toggleClass("active");
    });



// モーダル
$(function () {
    // 画像をクリックした時
    $(`.course__item img`).on(`click`, function () {
        const modalSrc = $(this).data(`modal`);
        const name = $(this).data('name');
        const price = $(this).data('price');

        $(`#modalImage`).attr(`src`, modalSrc);
        $('#modalName').text(name);
        $('#modalPrice').text(price);
        $(`#modal`).fadeIn();
    });

    // 閉じる処理
    $('#modalClose, #modalOverlay').on(`click`, function () {
        $(`#modal`).fadeOut();
        $(`#modalImage`).attr(`src`, '');
    });
});

// トップへ戻るボタン
$('.page-top').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 1000)
    });

// トップへ戻るボタン途中で表示させる
$(document).ready(function(){
    $('.page-top').hide();

    $(window).on('scroll',function(){
        if($(this).scrollTop() >1300) {
            $('.page-top').fadeIn();
        }else {
            $('.page-top').fadeOut();
        }
    });
});