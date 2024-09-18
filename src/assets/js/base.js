$(function () {

$(".hours__date span:not(:last)").append('/');
$(".hours__time span:not(:last)").append('/');
  /**
   * header__menu 実装
   * 背景透過
   * navメニュー表示
   */


//   $(".header__btn").click(function () {
//     $(".header__btn").toggleClass("active");
//     $(".header__nav").toggleClass("active");
//     $(".header__bg").toggleClass("active");
//   });

//   //navメニューをクリックしたらheader__menuのactiveクラスを解除する処理
//   $('a[href^="#"]').on("click", function () {
//     $(".header__btn").removeClass("active");
//     $(".header__nav").removeClass("active");
//     $(".header__bg").removeClass("active");

//     const href = $(this).attr("href");
//     const target = $(href == "#" || href == "" ? "html" : href);
//     const position = target.offset().top;
//     let speed = 500;
//     $("html , body").animate({ scrollTop: position }, speed, "swing");
//     return false;
//   });

//   //topへ戻るボタン実装
//   const topPage = $(".topPage");
//   topPage.hide();
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 80) {
//       topPage.fadeIn();
//     } else {
//       topPage.fadeOut();
//     }
//   });
//   topPage.click(function () {
//     $("body , html").animate({ scrollTop: 0 }, 500);
//     return false;
//   });

//   //アコーディオンメニュー実装
//   $(".js-qa").click(function () {
//     $(this).next().slideToggle(200);
//     $(this).find("span").toggleClass("active");
//   });

//   $(window).scroll(function () {
//     let pageHeight = $(document).innerHeight();
//     let windowHeight = $(window).innerHeight();
//     let pageBottom = pageHeight - windowHeight;
//     let ad = $('.ad');
//     ad.hide();
//     if (pageBottom <= $(window).scrollTop()) {
//         ad.fadeOut();
//     } else {
//         ad.fadeIn();
//     }
//   });

  const slides = document.querySelectorAll('.mainvisual__menu__list');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 2000); // 3秒ごとにスライドを切り替え

  });

  $(window).on('scroll', function() {
    // スクロール位置を取得
    var scrollY = $(window).scrollTop();
    
    // mainvisualのオフセットと高さを取得
    var mainvisual = $('.mainvisual__wrapper');
    var mainvisualHeight = mainvisual.outerHeight();  
    var mainvisualOffset = mainvisual.offset().top;

    // 8割スクロールした場合のトリガーポイントを計算
    var triggerPoint = mainvisualOffset + (mainvisualHeight * 0.6);


    // スクロール位置がトリガーポイントを超えたらclip-pathを調整
    if (scrollY >= triggerPoint) {
        mainvisual.css({
            'clip-path': 'inset(0 0 500px 0)' // 下から500pxをクリップして表示エリアを狭める
        });
    } else {
        mainvisual.css({
            'clip-path': 'inset(0 0 0 0)' // 元の状態に戻す
        });
    }
});


$(window).on('scroll', function() {
  let scrollY = $(window).scrollTop();
  let windowHeight = $(window).height();

  // Header
  let header = $('.header');
  let hourTarget = $(".hours").offset().top;

  

  if (scrollY >= hourTarget) {
    header.fadeOut(300);
  } else {
    header.fadeIn(300);
  }


  // Logo Image Resize
  let imgPosition = $('.logo').offset().top;
  if (scrollY + windowHeight >= imgPosition + 200) {
    $('.logo > img').css({
      "width": "800px"
    });
  } else {
    $('.logo > img').css({
      "width": "0"
    });
  }

  $(document).ready(function(){
    // スムーススクロールの設定
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault(); // デフォルトの動作を無効化
        var target = $(this.getAttribute('href')); // クリックされたリンクのターゲット取得
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top // ターゲットまでスクロール
            }, 800); // 800ミリ秒のスムーススクロール
        }
    });
  });

  
});














