/* 成长档案：进入详情页前先播放「打开档案」开场动画
   规则：page 从「非 archive」变为「archive」时播放一次；档案页内部切换
   左侧标签 / 学年页签（page 始终为 archive）不重复播放。 */
(function () {
  var INTRO_SRC = 'assets/archive-open-intro.mp4?v=20261029-archive-intro-v6';
  var FADE_MS = 450;
  var MAX_MS = 9000;          // 保险丝：超时强制进入，避免卡在动画层

  var gxIntroPrevRender = render;
  var gxPrevPage = null;
  var layer = null;
  var fadeTimer = null;
  var maxTimer = null;

  function gxArchiveReady() {
    var ca = state && state.careerArchive;
    return !!(state && state.student && state.student.bound &&
      ca && ca.status !== 'error' && ca.status !== 'empty');
  }

  function gxFinishIntro(reason) {
    if (!layer) return;
    var el = layer;
    layer = null;
    el.setAttribute('data-reason', reason || 'manual');
    document.removeEventListener('keydown', gxIntroKey);
    if (fadeTimer) clearTimeout(fadeTimer);
    if (maxTimer) clearTimeout(maxTimer);
    fadeTimer = setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
      document.body.classList.remove('gx-intro-lock');
    }, FADE_MS);
    el.classList.add('is-out');
  }

  function gxBuildLayer() {
    var el = document.createElement('div');
    el.className = 'gx-intro';
    el.innerHTML =
      '<video class="gx-intro-video" muted playsinline preload="auto" src="' + INTRO_SRC + '"></video>' +
      '<div class="gx-intro-loading"><i></i>正在打开成长档案</div>';
    // 挂到标准菜单壳的内容区（.workspace）内，动画只在框架里播放，
    // 侧栏与顶栏作为壳的一部分始终盖在动画之上、保持可见
    var host = document.querySelector('.workspace') || document.body;
    host.appendChild(el);
    document.body.classList.add('gx-intro-lock');

    var video = el.querySelector('.gx-intro-video');
    var loading = el.querySelector('.gx-intro-loading');

    function start() {
      // 开场动画无需声音，始终静音播放（同时满足浏览器自动播放策略）
      video.muted = true;
      var p = video.play();
      if (p && p.catch) p.catch(function () { gxFinishIntro('playfail'); });
    }

    video.addEventListener('canplay', function () {
      loading.classList.add('is-hidden');
      start();
    });
    video.addEventListener('ended', function () { gxFinishIntro('ended'); });
    video.addEventListener('error', function () { gxFinishIntro('error'); });
    /* 保险丝：只要播放还在推进就不断后延，只有真正卡死（无 timeupdate）才兜底进入 */
    video.addEventListener('timeupdate', function () {
      if (!layer) return;
      if (maxTimer) clearTimeout(maxTimer);
      var left = Math.max(0, (video.duration || 5) - video.currentTime) * 1000;
      maxTimer = setTimeout(function () { gxFinishIntro('timeout'); }, left + 6000);
    });

    document.addEventListener('keydown', gxIntroKey);   // Esc 仍可跳过（键盘，不显示按钮）

    maxTimer = setTimeout(function () { gxFinishIntro('timeout'); }, MAX_MS);
    return el;
  }

  function gxIntroKey(e) {
    if (e.key === 'Escape') gxFinishIntro();
  }

  function gxPlayIntro() {
    gxFinishIntro();                       // 幂等：清掉可能残留的动画层
    document.removeEventListener('keydown', gxIntroKey);
    layer = gxBuildLayer();
  }

  /* 供详情页「点击档案重新打开」调用：在已渲染的详情页之上再播一次开场动画 */
  window.gxReplayIntro = gxPlayIntro;

  /* URL 带 intro=0 / intro=off 时强制跳过开场动画（调试、截图、客户演示详情页时用） */
  function gxIntroDisabled() {
    var v = (new URLSearchParams(location.search).get('intro') || '').toLowerCase();
    return v === '0' || v === 'off' || v === 'false' || v === 'no';
  }

  render = function () {
    var shouldIntro = (page === 'archive') && gxPrevPage !== 'archive' &&
      gxArchiveReady() && !gxIntroDisabled();
    gxIntroPrevRender();                   // 先把详情页完整渲染出来，动画层盖在其上
    gxPrevPage = page;
    if (shouldIntro) gxPlayIntro();
    else if (page !== 'archive') gxFinishIntro('leave');
  };
  render();

  /* 预加载：空闲时先把视频拉进缓存，点击菜单后基本能秒播 */
  window.setTimeout(function () {
    try {
      var pre = document.createElement('video');
      pre.preload = 'auto';
      pre.muted = true;
      pre.src = INTRO_SRC;
      pre.style.display = 'none';
      document.body.appendChild(pre);
    } catch (e) { /* 忽略 */ }
  }, 1200);
})();
