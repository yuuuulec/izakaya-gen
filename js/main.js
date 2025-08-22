// FVスライダー
$(function () {
    $("#slider").slick({
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1500,
        dots: false,
        arrows: false,
        pauseOnHover: false, 
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
    $(".header__nav a").click(function() {
        $(".hamburger").removeClass("active");
        $(".header__nav").removeClass("active");
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
            width: '100%',
            // paddingRight: `${scrollbarWidth}px`
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
                width: '',
            });

    // スクロール位置を戻す
            $('html, body').css('scroll-behavior', 'auto'); 
            $(window).scrollTop(scrollPosition);
            $('html, body').css('scroll-behavior', '');
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

// =======================================
// AOSとヘッダー背景色切り替えの初期化
// =======================================

// 1. AOS（スクロールアニメーション）とヘッダー背景の切り替え処理をまとめる
function initPageEffects() {

    // 2. 画面幅を取得（今回は参考用で使わない）
    const windowWidth = window.innerWidth;
  
    // 3. .course__list に AOS の属性を付与 → 下からふわっと出るアニメーション
    $('.course__list').attr('data-aos', 'fade-up');
  
    // 4. AOSを初期化
    AOS.init({
      duration: 1000,     // 5. アニメーションの時間は1000ms（1秒）
      once: true,         // 6. 1回だけアニメーション（スクロール戻っても再生しない）
      offset: 80,         // 7. 画面下から80px手前でアニメーション開始
      easing: 'ease-in-out' // 8. アニメーションの動き方を滑らかに設定
    });
  }
  
  // =======================================
  // ヘッダー背景色切り替え関数
  // =======================================
  function toggleHeaderBg() {
  
    // 9. header要素を取得
    const header = document.querySelector('header');
  
    // 10. #featureセクションを取得
    const feature = document.querySelector('#feature');
  
    // 11. どちらか存在しない場合は処理を中断
    if (!header || !feature) return;
  
    // 12. header の画面上での位置を取得（上端 top、下端 bottom など）
    const headerRect = header.getBoundingClientRect();
  
    // 13. #feature の画面上での位置を取得
    const featureRect = feature.getBoundingClientRect();
  
    // 14. 判定：ヘッダーが完全に #feature に入ったか？
    if (headerRect.top >= featureRect.top && headerRect.bottom <= featureRect.bottom) {
  
      // 15. 完全に入った場合 → 背景色用クラスを追加
      header.classList.add('header--bg');
    } else {
  
      // 16. 条件を満たさない場合 → 背景色用クラスを削除
      header.classList.remove('header--bg');
    }
  }
  
  // =======================================
  // ページ読み込み時に処理を開始
  // =======================================
  $(document).ready(function () {
  
    // 17. AOS初期化とアニメーション設定
    initPageEffects();
  
    // 18. ウィンドウサイズ変更やスマホの向き変更時にも再初期化
    $(window).on('resize orientationchange', function () {
      initPageEffects();  // AOSを再初期化
      AOS.refresh();      // アニメーション位置を再計算
    });
  
    // 19. スクロールするたびにヘッダー背景色をチェック
    $(window).on('scroll', function () {
      toggleHeaderBg();
    });
  });
  