$(function() {
    console.log('こんにちは')
    $(document).ready(function(){
        $('.slideshow').slick({
            autoplay: true,
            autoplaySpeed: 5000, // 5秒ごとにスライド
            fade: true,          // フェードアニメーション
            arrows: true,       // 矢印を非表示にする場合
            dots: true,           // ドットインジケーターを表示
            cssEase: 'linear'
        });
    });
});