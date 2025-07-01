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
