"use strict";

//mainvisual監視イベント
document.addEventListener('DOMContentLoaded', function () {
  // mainvisualの監視対象を取得
  var mainvisual = document.querySelector('.mainvisual__wrapper');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        mainvisual.style.clipPath = 'inset(0 0 500px 0)'; // 下から500pxをクリップ
      } else {
        mainvisual.style.clipPath = 'inset(0 0 0 0)'; // 元の状態に戻す
      }
    });
  }, {
    root: null,
    threshold: 0.6 // 要素が60%表示された時に処理を実行
  });
  observer.observe(mainvisual);
});

//mainvisual下の隠れロゴ
document.addEventListener('DOMContentLoaded', function () {
  // 監視する要素を指定
  var targetElement = document.querySelector('.logo img');

  // IntersectionObserverの設定
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // 画像がビューポートに入った時の処理
        targetElement.style.width = "800px";
        // 必要であればtransformも追加
        // targetElement.style.transform = "translateX(0)";
      } else {
        // 画像がビューポート外に出た時の処理
        targetElement.style.width = "0";
        // 必要であればtransformも追加
        // targetElement.style.transform = "translateX(-200%)";
      }
    });
  }, {
    root: null,
    // ビューポートを基準に監視
    threshold: 0.1 // 画像の10%が表示されたら処理を実行
  });

  // 監視を開始
  observer.observe(targetElement);
});

//hoursの監視イベント
document.addEventListener('DOMContentLoaded', function () {
  // hoursの監視対象を取得
  var hoursWrapper = document.querySelector('.hours__wrapper');
  var hours = document.querySelector('.hours');
  var access = document.querySelector('.access');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var scrollY = window.scrollY;
      var stopPosition = hours.offsetTop;
      var accessPosition = access.offsetTop;

      // 固定するかどうかの処理
      if (scrollY >= stopPosition - 100) {
        hoursWrapper.style.position = 'fixed';
        hoursWrapper.style.top = '50%';
        hoursWrapper.style.left = '10%';
        hoursWrapper.style.transform = 'translateY(-50%)';
        hoursWrapper.style.zIndex = '1';
      } else {
        hoursWrapper.style.position = 'relative';
        hoursWrapper.style.zIndex = '0';
      }

      // フェードイン・アウトの処理
      if (scrollY >= accessPosition - 500) {
        hoursWrapper.style.display = 'none'; // フェードアウト代わり
      } else {
        hoursWrapper.style.display = 'block'; // フェードイン代わり
      }
    });
  }, {
    root: null,
    threshold: 0.1
  });
  observer.observe(hoursWrapper);
});

//accessのイベント監視
document.addEventListener('DOMContentLoaded', function () {
  // accessの監視対象を取得
  var accessWrapper = document.querySelector('.access__wrapper');
  var access = document.querySelector('.access');
  var bgAttachment = document.querySelector('.bg-attachment-fors');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var scrollY = window.scrollY;
      var stopPosition = access.offsetTop;
      var bgAttachmentPosition = bgAttachment.offsetTop;

      // 固定するかどうかの処理
      if (scrollY >= stopPosition - 100) {
        accessWrapper.style.position = 'fixed';
        accessWrapper.style.top = '50%';
        accessWrapper.style.left = '50%';
        accessWrapper.style.transform = 'translate(-50%, -50%)';
        accessWrapper.style.zIndex = '1';
      } else {
        accessWrapper.style.position = 'relative';
        accessWrapper.style.zIndex = '0';
      }

      // フェードイン・アウトの処理
      if (scrollY >= bgAttachmentPosition - 500) {
        accessWrapper.style.display = 'none'; // フェードアウト代わり
      } else {
        accessWrapper.style.display = 'block'; // フェードイン代わり
      }
    });
  }, {
    root: null,
    threshold: 0.1
  });
  observer.observe(accessWrapper);
});