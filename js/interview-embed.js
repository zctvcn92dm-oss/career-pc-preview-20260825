(function () {
  const embedUrl = 'https://ysyaipc.bysjy.com.cn/';

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
    if (page === 'interview') return interviewEmbedPage();
    return previousSimple();
  };

  const previousBind = bind;
  bind = function () {
    previousBind();
    if (page !== 'interview') return;
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
