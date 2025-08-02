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

//header スクロールした時に背景色をつける
$(function() {
    const header = $('#header');
    const feature = $('#feature');

    function checkScroll() {
        const scrollTop = $(window).scrollTop();
        const target = feature.offset().top;

        let offset = 20;

        if (scrollTop >= target - offset) {
            header.addClass('header-scroll');
        } else {
            header.removeClass('header-scroll');
        }
    }

    $(window).on('scroll', checkScroll);
    $(window).on('resize', checkScroll);
    checkScroll();  
});



// モーダル
$(function () {
    function openModalFrom($trigger) {
        const $img = $trigger.closest('.course__item').find('img');
        const modalSrc = $img.data('modal');
        const name = $img.data('name');
        const price = $img.data('price');

        $('#modalImage').attr('src', modalSrc);
        $('#modalName').text(name);
        $('#modalPrice').text(price);
        $('#modal').fadeIn();
        $('body').addClass('modal-open');
    }

    // 画像をクリックした時
    $('.course__item img').on('click', function () {
        openModalFrom($(this));
        $('html, body').css('overflow', 'hidden');
    });

    // テキストをクリックした時
    $('.course__ttl').on('click', function () {
        openModalFrom($(this));
    });

    // 閉じる処理
    $('#modalClose, #modalOverlay').on('click', function () {
        $('#modal').fadeOut();
        $('#modalImage').attr('src', '');
        $('body').removeClass('modal-open'); 
        $('html, body').removeAttr('style');
    });

});


// トップへ戻るボタン
$('.page-top').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 300)
    });

// トップへ戻るボタン途中で表示させる
$(document).ready(function(){
    $('.page-top').hide();

    $(window).on('scroll',function(){
        if($(this).scrollTop() >700) {
            $('.page-top').fadeIn();
        }else {
            $('.page-top').fadeOut();
        }
    });
});

//スクロールした時にふわっとでる 

function initAOS() {
    const windowWidth = window.innerWidth;
  
    $('.course__item').each(function (i) {
      $(this).attr('data-aos', 'fade-up');
  
      if (windowWidth < 768) {
        $(this).attr('data-aos-delay', i * 100);
      } else {
        $(this).attr('data-aos-delay', 0);
      }
    });
  
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }
  
  $(document).ready(function () {
    initAOS();
  
    $(window).on('resize orientationchange', function () {
      initAOS();
      AOS.refresh();
    });
  });

  