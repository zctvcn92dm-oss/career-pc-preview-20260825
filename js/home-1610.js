/* ============================================================
   v41 · 16:10 固定画布缩放（MacBook Air 13"：1440×900）
   ------------------------------------------------------------
   本脚本最后加载：包装 render()，在每次渲染（含切页、弹窗、标签切换）之后
   重新给 body 打标记并按当前视口等比缩放居中画布。
   s = min(innerWidth / 1440, innerHeight / 900)
   画布本体是 .app-shell；body.mba-canvas 下的几何规则见 css/home-1610.css。
   ============================================================ */
(function () {
  var W = 1440, H = 900;
  var originalRender = render;

  function currentPage() {
    // app.js 顶层用 let page 声明（全局词法环境），其它脚本可直接读取。
    try { if (typeof page === 'string') return page; } catch (e) { /* ignore */ }
    return new URLSearchParams(location.search).get('page') || 'home';
  }

  function markPage() {
    document.documentElement.classList.add('mba-canvas');
    document.body.classList.add('mba-canvas');
    /* v42：这里必须用 data-canvas-page，绝不能写 data-page。
       app.js 的 bind() 用 document.querySelectorAll('[data-page]') 给所有匹配元素
       绑点击跳页；若给 <body> 写上 data-page，body 会被当成导航按钮，
       任何点击冒泡到 body 都会再触发一次 render()，把 archive-intro.js 刚挂到
       .workspace 的 .gx-intro 动画层连同 DOM 一起重建掉（动画消失、人物插画
       背景图加载被中断）。CSS 选择器已同步改成 [data-canvas-page]。 */
    document.body.setAttribute('data-canvas-page', currentPage());
  }

  function fit() {
    markPage();

    var shell = document.querySelector('.app-shell');
    if (!shell) return;

    var s = Math.min(innerWidth / W, innerHeight / H);
    var dx = Math.max(0, (innerWidth - W * s) / 2);
    var dy = Math.max(0, (innerHeight - H * s) / 2);
    shell.style.width = W + 'px';
    shell.style.height = H + 'px';
    shell.style.transformOrigin = '0 0';
    shell.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(' + s + ')';
  }

  render = function () {
    /* 渲染前先同步页面标记：否则新页面的 DOM 在 bind() 那一刻仍命中上一页的
       CSS（例如档案页 main 被套上首页五行 grid，被压到 100px 并裁掉插画）。 */
    markPage();
    originalRender();
    fit();
  };

  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
  // 最后执行的 fit：此时 DOM 已由 archive-intro.js / growth-archive.js 的包装渲染完毕
  fit();

  /* v42：提前把基本信息卡右侧人物插画放进缓存。
     .gx-hero 是 CSS 背景图，若刚创建的元素立刻被重建，图片请求会被打断，
     用户会看到一块纯白圆角框（截图里的「人物形象不见了」）。
     首屏就预取，点击成长档案时可直接从缓存绘制。 */
  try {
    var heroPreload = new Image();
    heroPreload.src = 'assets/archive-hero-scene-design.jpg';
  } catch (e) { /* 忽略 */ }
})();
