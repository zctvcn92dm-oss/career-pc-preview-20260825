(function () {
  const assistantPageId = 'assistant';
  let assistantState = { status: 'idle', message: '' };
  let requestSequence = 0;

  function isStaticPreview() {
    return location.protocol === 'file:' || /\.github\.io$/i.test(location.hostname);
  }

  function feedbackView() {
    if (assistantState.status === 'loading' || assistantState.status === 'idle') {
      return '<section class="assistant-embed-page"><div class="assistant-embed-feedback"><div class="assistant-feedback-card"><span class="assistant-feedback-icon"><i class="assistant-loading-dot"></i></span><h2>正在连接生涯助理</h2><p>正在校验学生身份、学校权限与助理会话。</p></div></div></section>';
    }

    const messages = {
      not_logged_in: ['请先登录', '登录学生服务平台后，可继续使用生涯助理。'],
      unbound: ['请先绑定学号', '完成统一学生身份绑定后，可继续使用生涯助理。'],
      not_entitled: ['学校未开通该服务', '当前学校未采购生涯助理，无法进入服务页面。'],
      expired: ['会话已过期', '助理访问凭证已失效，请重新连接。'],
      unavailable: ['当前环境无法连接生涯助理服务', '该服务位于学校网络环境，当前静态预览无法访问。'],
      error: ['暂时无法连接', '生涯助理服务连接失败，请稍后重试。']
    };
    const copy = messages[assistantState.status] || messages.error;
    return '<section class="assistant-embed-page"><div class="assistant-embed-feedback"><div class="assistant-feedback-card">' +
      '<span class="assistant-feedback-icon">生</span><h2>' + copy[0] + '</h2><p>' + (assistantState.message || copy[1]) + '</p>' +
      '<div class="assistant-feedback-actions"><button data-assistant-retry>重新连接</button><button class="secondary" data-page="home">返回首页</button></div>' +
      '</div></div></section>';
  }

  function assistantView() {
    if (assistantState.status !== 'ready' || !assistantState.embedUrl) return feedbackView();
    return '<section class="assistant-embed-page">' +
      '<iframe class="assistant-embed-frame" data-assistant-frame title="生涯助理" src="' + assistantState.embedUrl + '" allow="microphone" referrerpolicy="same-origin"></iframe>' +
      '</section>';
  }

  function setState(next) {
    assistantState = Object.assign({}, assistantState, next);
    render();
  }

  async function loadAssistantSession(force) {
    if (page !== assistantPageId) return;
    if (!force && (assistantState.status === 'loading' || assistantState.status === 'ready')) return;
    const currentRequest = ++requestSequence;

    if (isStaticPreview()) {
      setState({ status: 'unavailable', embedUrl: '', message: '' });
      return;
    }

    setState({ status: 'loading', embedUrl: '', message: '' });
    try {
      const response = await fetch('/api/student/career-assistant/session', {
        method: 'GET', credentials: 'same-origin', cache: 'no-store', headers: { Accept: 'application/json' }
      });
      const payload = await response.json().catch(function () { return {}; });
      if (currentRequest !== requestSequence || page !== assistantPageId) return;
      if (response.ok && payload.status === 'ready' && payload.embed_url) {
        setState({ status: 'ready', embedUrl: payload.embed_url, expiresAt: payload.expires_at || '', message: '' });
        return;
      }
      setState({ status: payload.status || (response.status === 401 ? 'not_logged_in' : 'error'), embedUrl: '', message: payload.message || '' });
    } catch (error) {
      if (currentRequest === requestSequence && page === assistantPageId) setState({ status: 'error', embedUrl: '', message: '' });
    }
  }

  const previousSimple = simple;
  simple = function () {
    return page === assistantPageId ? assistantView() : previousSimple();
  };

  const previousRender = render;
  render = function () {
    previousRender();
    document.body.classList.toggle('assistant-mode', page === assistantPageId);
    if (page === assistantPageId && assistantState.status === 'idle') {
      window.setTimeout(function () { loadAssistantSession(false); }, 0);
    }
  };

  const previousBind = bind;
  bind = function () {
    previousBind();
    document.querySelectorAll('[data-assistant-retry]').forEach(function (node) {
      node.onclick = function () { loadAssistantSession(true); };
    });
  };

  render();
})();
