(function () {
  const embedUrl = 'https://ysyaipc.bysjy.com.cn/';

  /* 静态预览（GitHub Pages / 本地 file://）不拉生产 iframe：
     正式 AI 面试服务跑在校方平台内，需要登录态与同源 Cookie，
     嵌在静态原型里必然报「请求异常」，还会污染控制台。这里改渲染原型占位页。 */
  function isStaticPreview() {
    return location.protocol === 'file:' || /\.github\.io$/i.test(location.hostname);
  }

  const JOBS = ['产品经理', '运营专员', '数据分析师', '行政助理', '人力资源专员'];

  function previewView() {
    return `<section class="interview-embed-page interview-preview">
      <header class="interview-preview-top">
        <div><h1>AI 面试</h1><p>模拟真实面试场景，自动生成能力评估报告</p></div>
        <a href="${embedUrl}" target="_blank" rel="noopener noreferrer">在新窗口打开正式页面</a>
      </header>
      <div class="interview-preview-body">
        <div class="interview-preview-main">
          <h2>选择面试岗位</h2>
          <div class="interview-jobs">${JOBS.map(function (j, i) {
      return '<button class="interview-job' + (i === 0 ? ' active' : '') + '">' + j + '</button>';
    }).join('')}</div>
          <div class="interview-stage">
            <div class="interview-cam"><span class="interview-cam-dot"></span><em>摄像头与麦克风预览区</em></div>
            <button class="interview-start">开始面试</button>
            <p class="interview-tip">面试时长约 15 分钟，共 6 道题目，结束后生成作答回放与能力雷达图。</p>
          </div>
        </div>
        <aside class="interview-preview-side">
          <h3>历史面试</h3>
          <ul>
            <li><b>产品经理 · 第 2 轮</b><span>综合 82 分</span><time>2024-09-12</time></li>
            <li><b>运营专员 · 第 1 轮</b><span>综合 76 分</span><time>2024-08-30</time></li>
            <li><b>数据分析师 · 第 1 轮</b><span>综合 71 分</span><time>2024-08-21</time></li>
          </ul>
        </aside>
      </div>
      <p class="interview-preview-note">原型预览环境：正式 AI 面试服务位于校方平台，需学生登录态才可连接，此处为静态示意。</p>
    </section>`;
  }

  function interviewEmbedPage() {
    return `<section class="interview-embed-page">
      <iframe class="interview-embed-frame" data-interview-frame src="${embedUrl}" title="AI面试" allow="camera; microphone; fullscreen; autoplay" allowfullscreen></iframe>
      <div class="interview-embed-loading" data-interview-loading><span></span><p>AI面试服务加载中…</p></div>
      <div class="interview-embed-error" data-interview-error hidden>
        <h2>AI面试服务暂时无法加载</h2>
        <p>请检查网络连接后重新加载，或直接打开正式AI面试页面。</p>
        <div><button data-interview-reload>重新加载</button><a href="${embedUrl}" target="_blank" rel="noopener noreferrer">在新窗口打开正式页面</a></div>
      </div>
    </section>`;
  }

  const previousSimple = simple;
  simple = function () {
    if (page === 'interview') return isStaticPreview() ? previewView() : interviewEmbedPage();
    return previousSimple();
  };

  const previousBind = bind;
  bind = function () {
    previousBind();
    if (page !== 'interview') return;

    // 静态占位页：岗位可切换，开始面试给出环境提示
    const jobs = document.querySelectorAll('.interview-job');
    jobs.forEach(function (btn) {
      btn.onclick = function () {
        jobs.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      };
    });
    const start = document.querySelector('.interview-start');
    if (start) start.onclick = function () {
      const job = document.querySelector('.interview-job.active');
      window.alert('原型预览环境无法连接正式 AI 面试服务。\n模拟岗位：' + (job ? job.textContent : '未选择'));
    };

    const frame = document.querySelector('[data-interview-frame]');
    const loading = document.querySelector('[data-interview-loading]');
    const error = document.querySelector('[data-interview-error]');
    if (!frame || !loading || !error) return;
    let settled = false;
    const showReady = function () {
      settled = true;
      loading.hidden = true;
      error.hidden = true;
    };
    const showError = function () {
      if (settled) return;
      loading.hidden = true;
      error.hidden = false;
    };
    frame.addEventListener('load', showReady, { once: true });
    frame.addEventListener('error', showError, { once: true });
    window.setTimeout(showError, 12000);
    const reload = document.querySelector('[data-interview-reload]');
    if (reload) reload.onclick = function () {
      settled = false;
      error.hidden = true;
      loading.hidden = false;
      frame.src = embedUrl;
      window.setTimeout(showError, 12000);
    };
  };

  render();
})();
