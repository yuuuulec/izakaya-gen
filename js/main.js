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
    let scrollPosition = 0;

    function openModalFrom($trigger) {
        const $img = $trigger.closest('.course__item').find('img');
        const modalSrc = $img.data('modal');
        const name = $img.data('name');
        const price = $img.data('price');

        $('#modalImage').attr('src', modalSrc);
        $('#modalName').text(name);
        $('#modalPrice').text(price);

        scrollPosition = $(window).scrollTop();
        $('body').css({
            position: 'fixed',
            top: `-${scrollPosition}px`,
            width: '100%'
        });

        $('#modal').fadeIn();
        $('body').addClass('modal-open');
    }

    // 画像クリック
    $('.course__item img').on('click', function () {
        openModalFrom($(this));
    });

    // テキストクリック
    $('.course__ttl').on('click', function () {
        const $item = $(this).closest('.course__item');
        const $img = $item.find('img');
        openModalFrom($img);
    });

    // **ここから閉じる処理**
    $('#modalClose, #modalOverlay').on('click', function () {
        $('#modal').fadeOut(200, function () {
            $('#modalImage').attr('src', '');
            $('body').removeClass('modal-open');

            // bodyの固定解除
            $('body').css({
                position: '',
                top: '',
                width: ''
            });

            // スクロール位置を戻すときに smooth を一時的に解除
        setTimeout(() => {
            $('html, body').css('scroll-behavior', 'auto'); 
            $(window).scrollTop(scrollPosition);            
            $('html, body').css('scroll-behavior', '');      
        }, 0);
        });
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
  
    $('.course__list').attr('data-aos', 'fade-up');
    
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

  