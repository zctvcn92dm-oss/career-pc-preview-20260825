(function () {
  const toolConfigs = {
    resume: {
      title: 'AI简历',
      icon: '简',
      tokenKind: 'business',
      path: '/resume/edit/pchome',
      credentials: '学校 school_token、登录信息中的 bfr_token',
      targetLabel: 'AI工具站点 /resume/edit/pchome',
      description: '复用原PC简历创建、编辑、模板和记录功能。',
      verifiedFeatures: ['简历指导', '我的简历', 'AI创建简历', '上传简历文件', '微信扫码诊断', '简历模板', '优秀简历', '收藏模板']
    },
    interview: {
      title: 'AI面试',
      icon: '面',
      tokenKind: 'login',
      productionBase: 'https://ysyaipc.bysjy.com.cn',
      testBase: 'https://tsyaipc.bysjy.com.cn',
      credentials: '普通登录 token（不使用 bfr_token）',
      targetLabel: '学生AI面试PC站点',
      description: '进入现有学生AI面试流程，不访问后台管理统计页面。',
      verifiedFeatures: ['社招模拟面试', '公职模拟面试', '面试记录', '我的']
    },
    etiquette: {
      title: '职业礼仪',
      icon: '礼',
      tokenKind: 'business',
      path: '/lab/game/CTR_3003',
      credentials: '学校 school_token、登录信息中的 bfr_token',
      targetLabel: 'AI工具站点 /lab/game/CTR_3003',
      description: '复用原职业礼仪PC业务页面。',
      verifiedFeatures: ['微信扫码上传', '选择服装', '岗位名称', '着装场景', '拍照并解析']
    }
  };

  const toolPages = Object.keys(toolConfigs);
  let handoffState = null;

  state.entitlements = state.entitlements || {};
  toolPages.forEach(function (id) {
    if (typeof state.entitlements[id] === 'undefined') state.entitlements[id] = true;
  });

  function isLocalPrototype() {
    return location.protocol === 'file:' || /^(localhost|127\.0\.0\.1)$/i.test(location.hostname);
  }

  function isTestEnvironment() {
    return isLocalPrototype() || location.hostname === 'tsyxs.bysjy.com.cn';
  }

  function getAiSiteBaseUrl() {
    if (location.hostname === 'tsyxs.bysjy.com.cn') return 'https://tsyh5.bysjy.com.cn';
    if (location.hostname === 'usyxs.bysjy.com.cn') return 'https://usyh5.bysjy.com.cn';
    if (location.hostname === 'ysyxs.bysjy.com.cn') return 'https://ysyh5.bysjy.com.cn';
    return '';
  }

  function safePortal() {
    return window.StudentPortalBridge || window.AiToolPortalBridge ||
      (window.PortalLoginSupport && typeof window.PortalLoginSupport === 'object' ? window.PortalLoginSupport : null);
  }

  function officialTargetLabel(id) {
    if (id === 'interview') {
      return isTestEnvironment() ? toolConfigs.interview.testBase : toolConfigs.interview.productionBase;
    }
    return toolConfigs[id].targetLabel;
  }

  function setHandoff(id, status, title, message) {
    page = id;
    handoffState = { id: id, status: status, title: title, message: message };
    render();
    scrollTo(0, 0);
  }

  function handoffPage(id) {
    const config = toolConfigs[id];
    const current = handoffState && handoffState.id === id ? handoffState : {
      status: 'loading',
      title: '正在进入正式PC页面',
      message: '正在校验统一学生身份、学校权限与登录凭证。'
    };
    const isRetryable = current.status !== 'prototype' && current.status !== 'not-entitled' && current.status !== 'unbound';
    const note = current.status === 'prototype'
      ? '本地HTML原型未接入统一登录凭证，因此不会拼接或展示模拟Token。正式环境校验通过后将直接在当前页面打开目标业务。'
      : current.message;

    return pageHead(config.title, '直接复用现有正式学生PC业务页面') +
      '<section class="ai-tool-handoff"><div class="ai-tool-handoff-card">' +
        '<span class="ai-tool-handoff-icon">' + config.icon + '</span>' +
        '<h2>' + current.title + '</h2>' +
        '<p>' + config.description + '</p>' +
        '<dl class="ai-tool-handoff-meta">' +
          '<div><dt>正式目标</dt><dd>' + officialTargetLabel(id) + '</dd></div>' +
          '<div><dt>所需凭证</dt><dd>' + config.credentials + '</dd></div>' +
          '<div><dt>打开方式</dt><dd>当前浏览器页面完整跳转</dd></div>' +
        '</dl>' +
        '<div class="ai-tool-handoff-note">' + note + '</div>' +
        '<div class="ai-tool-handoff-actions">' +
          (isRetryable ? '<button class="primary" data-ai-tool-retry="' + id + '">重新校验</button>' : '') +
          '<button data-page="home">返回首页</button>' +
        '</div>' +
      '</div></section>';
  }

  async function readLoginInfo(portal) {
    if (typeof portal.getLoginInfo === 'function') return await portal.getLoginInfo();
    return null;
  }

  async function readSchoolToken(portal) {
    if (typeof portal.getPortalSchoolToken === 'function') return await portal.getPortalSchoolToken();
    return '';
  }

  async function readLoginToken(portal, loginInfo) {
    if (typeof portal.getAiInterviewToken === 'function') return await portal.getAiInterviewToken();
    if (typeof portal.getToken === 'function') return await portal.getToken();
    return loginInfo && loginInfo.token ? loginInfo.token : '';
  }

  function buildSchoolTokenUrl(portal, baseUrl, schoolToken, bfrToken) {
    if (typeof portal.buildSchoolTokenUrl === 'function') {
      return portal.buildSchoolTokenUrl(baseUrl, { token: bfrToken });
    }
    if (typeof portal.buildUrlWithSchoolToken === 'function') {
      return portal.buildUrlWithSchoolToken(baseUrl, { token: bfrToken });
    }
    const target = new URL(baseUrl);
    target.searchParams.set('school_token', schoolToken);
    target.searchParams.set('token', bfrToken);
    return target.toString();
  }

  async function openOfficialTool(id) {
    const config = toolConfigs[id];
    if (!config) return;

    if (state.entitlements[id] === false) {
      setHandoff(id, 'not-entitled', '学校未开通该服务', '当前学校未采购' + config.title + '，已停止跳转。');
      return;
    }
    if (!state.student || state.student.bound === false) {
      setHandoff(id, 'unbound', '请先绑定学号', '完成统一学生身份绑定后可进入' + config.title + '。');
      return;
    }
    if (isLocalPrototype()) {
      setHandoff(id, 'prototype', '正式环境将直接进入', '本地原型不读取或生成正式凭证。');
      return;
    }

    setHandoff(id, 'loading', '正在进入正式PC页面', '正在校验统一学生身份、学校权限与登录凭证。');
      const portal = safePortal();
    if (!portal) {
      setHandoff(id, 'missing-login', '统一登录能力不可用', '当前页面未加载统一登录组件，无法安全获取登录凭证。');
      return;
    }

    try {
      let ensuredLoginToken = '';
      if (typeof portal.ensureLoginToken === 'function') {
        ensuredLoginToken = await portal.ensureLoginToken('openStudentAiTool', id);
        if (!ensuredLoginToken) return;
      } else if (typeof portal.checkLoginStatus === 'function') {
        const loginStatus = await portal.checkLoginStatus();
        if (loginStatus === false || (loginStatus && loginStatus.loggedIn === false)) {
          setHandoff(id, 'not-logged-in', '请先登录', '登录成功后可继续进入' + config.title + '。');
          return;
        }
      }

      const loginInfo = await readLoginInfo(portal);
      let targetUrl = '';
      if (config.tokenKind === 'login') {
        const loginToken = (typeof portal.getAiInterviewToken === 'function')
          ? await portal.getAiInterviewToken()
          : (await readLoginToken(portal, loginInfo)) || ensuredLoginToken;
        if (!loginToken) {
          setHandoff(id, 'missing-token', '登录凭证缺失', '未取得普通登录Token，已停止跳转。');
          return;
        }
        const interviewBase = isTestEnvironment() ? config.testBase : config.productionBase;
        const target = new URL(interviewBase);
        target.searchParams.set('token', loginToken);
        targetUrl = target.toString();
      } else {
        const aiBase = getAiSiteBaseUrl();
        if (!aiBase) {
          setHandoff(id, 'missing-domain', '业务域名未配置', '当前门户域名未配置对应的AI工具站点。');
          return;
        }
        const schoolToken = await readSchoolToken(portal);
        const bfrToken = typeof portal.getAiToolBfrToken === 'function'
          ? await portal.getAiToolBfrToken()
          : (loginInfo && loginInfo.bfr_token ? loginInfo.bfr_token : '');
        if (!schoolToken || !bfrToken) {
          setHandoff(id, 'missing-token', '业务凭证缺失', '未取得学校Token或bfr_token，已停止跳转。');
          return;
        }
        targetUrl = buildSchoolTokenUrl(portal, aiBase + config.path, schoolToken, bfrToken);
      }

      window.location.assign(targetUrl);
    } catch (error) {
      console.error('[AI tool redirect] credential validation failed');
      setHandoff(id, 'error', '暂时无法进入', '登录或权限校验失败，请稍后重试。');
    }
  }

  const previousSimple = simple;
  simple = function () {
    return toolConfigs[page] ? handoffPage(page) : previousSimple();
  };

  const previousBind = bind;
  bind = function () {
    previousBind();
    document.querySelectorAll('[data-page="resume"], [data-page="interview"], [data-page="etiquette"]').forEach(function (node) {
      node.onclick = function (event) {
        event.preventDefault();
        openOfficialTool(node.dataset.page);
      };
    });
    document.querySelectorAll('[data-ai-tool-retry]').forEach(function (node) {
      node.onclick = function () { openOfficialTool(node.dataset.aiToolRetry); };
    });
  };

  if (toolConfigs[page]) {
    window.setTimeout(function () { openOfficialTool(page); }, 0);
  } else {
    render();
  }
})();
