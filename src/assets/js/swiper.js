const swiper = new Swiper('.swiper-container', {
  effect: 'fade',       // フェードエフェクト
  loop: true,           // ループを有効化
  autoplay: {
      delay: 5000,      // 3秒ごとにスライド
      disableOnInteraction: false,  // インタラクション後も自動再生を続ける
  },
  fadeEffect: {
      crossFade: true   // フェードの際にスライドが重ならないようにする
  },
  speed: 4000,
  zoom: {               // ズームモジュールの有効化
      maxRatio: 1.2,    // 最大ズーム倍率
      toggle: false     // ズームを手動でトリガーしない
  },
  parallax: true, 
});