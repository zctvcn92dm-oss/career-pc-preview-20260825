/* ===== 成长档案（严格还原设计稿）2026-10-22 ===== */
(function () {
  var ca = state.careerArchive;

  /* ---------- 1. 设计稿口径数据 ---------- */
  ca.basicInfo = {
    gradeYear: '2025—2026学年', school: '测试学校 · 数字创意学院',
    name: '林晓宇', gender: '女',
    studentNo: '2025070806', idCard: '4301**********1234',
    education: '本科', phone: '138****6688',
    major: '数字媒体技术', email: 'linxy@stu.test.edu.cn',
    enrollDate: '2025年9月', duration: '四年',
    className: '数字媒体2501班', campusCard: 'C2025-07086'
  };

  ca.sideTagGroups = [
    { stage: '职业探索', tone: 'a', tags: ['基本信息', '线上课', '微视频', '线上咨询', '预约咨询', '职业测评'] },
    { stage: '职业规划', tone: 'b', tags: ['生涯体验周', '生涯活动'] },
    { stage: '职业实训', tone: 'c', tags: ['AI简历', 'AI面试', '职业礼仪', '职场沟通技巧', '就业活动'] },
    { stage: '竞赛成长', tone: 'd', tags: ['大学生职业规划大赛', '大学生创新大赛'] },
    { stage: '就业实习', tone: 'e', tags: ['就业意向', '宣讲会', '双选会'] }
  ];

  ca.radar5 = [
    { name: '职业探索', value: 72 },
    { name: '职业实践', value: 88 },
    { name: '竞赛成长', value: 60 },
    { name: '职业实训', value: 56 },
    { name: '职业规划', value: 68 }
  ];

  ca.aiSummary = {
    total: '本学期该学生在德智体美劳各方面发展良好，学习态度端正，成绩稳中有升，尊敬师长，团结同学，集体荣誉感责任感较强，积极参与体育竞技，艺术活动和社会实践，身心素质整体健康，展现出积极向上的成长态势。但在英语口语等个别学科上仍有薄弱环节，学习方法不够系统，面对考试压力时偶有焦虑，实践活动的持续性还有待加强。',
    advice: '下一步学生本人应针对薄弱学科制定专项提升计划，坚持错题整理和口语练习，学会主动沟通调节情绪，并选择1-2项实践活动长期坚持；教师需在课堂中多给予展示机会和正向鼓励，定期开展学法指导与个别谈话，做到因材施教；家长应营造轻松的家庭氛围，关注孩子情绪变化，配合学校督促孩子习惯养成。通过家校协同，精准施策，帮助学生在新学期实现全面和谐的成长发展。'
  };

  ca.currentGrade = '第四年';
  ca.gradeRecords = {
    '第一年': [], '第二年': [], '第三年': [],
    '第四年': [
      { created_at: '2024年09月22日 00:46:58', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中建西部建设湖南有限公司】宣讲会' },
      { created_at: '2024年09月18日 16:39:02', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【长沙理工大学2025届毕业生秋季综合双选会（第一场）暨第八届校友企业专场招聘会】双选会' },
      { created_at: '2024年09月18日 15:39:57', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【安克创新科技股份有限公司深圳分公司】宣讲会' },
      { created_at: '2024年09月16日 13:11:22', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中石化湖南石油化工有限公司】宣讲会' },
      { created_at: '2024年09月11日 08:10:07', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中广核集团】宣讲会' },
      { created_at: '2024年09月09日 22:41:59', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【全国重点高校2025届毕业生秋季巡回招聘会长沙理工大学站】双选会' },
      { created_at: '2024年09月09日 22:36:58', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【广州市邦普电脑技术开发有限公司】宣讲会' },
      { created_at: '2024年09月09日 14:58:57', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【美的集团股份有限公司】宣讲会' }
    ]
  };

  /* ---------- 2. 装饰图形 ---------- */
  function gxStar(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2l5.6 11.2 12.4 1.8-9 8.8 2.1 12.3L20 30.3 8.9 36.1 11 23.8 2 15l12.4-1.8z"/></svg>';
  }
  function gxClip(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 34 74" aria-hidden="true"><path d="M12 20v34a10 10 0 0020 0V14a7 7 0 00-14 0v38a4 4 0 008 0V20" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>';
  }
  function gxBooks() {
    return '<svg class="gx-books" viewBox="0 0 130 110" aria-hidden="true">' +
      '<ellipse cx="66" cy="96" rx="52" ry="9" fill="#eef3e2"/>' +
      '<rect x="18" y="74" width="86" height="14" rx="5" fill="#dce9c6"/><rect x="18" y="74" width="86" height="5" rx="2.5" fill="#c9dfa9"/>' +
      '<rect x="24" y="60" width="82" height="14" rx="5" fill="#efd9a6"/><rect x="24" y="60" width="82" height="5" rx="2.5" fill="#e4c886"/>' +
      '<rect x="32" y="47" width="70" height="13" rx="5" fill="#f6f9ee"/><rect x="32" y="47" width="70" height="4" rx="2" fill="#e3ecd4"/>' +
      '<path d="M60 47V27h26v20" fill="#8ec25e"/><path d="M55 30q17-9 34 0v6q-17-9-34 0z" fill="#a3d171"/>' +
      '<path d="M86 30q9 1 9 8t-9 8" fill="#7bb14e"/>' +
      '<path d="M74 27c-2-9 3-15 10-16 2 8-2 14-10 16z" fill="#a8c97f"/>' +
      '<path d="M68 27c-6-6-5-13 1-17 4 7 3 13-1 17z" fill="#bcd79a"/>' +
      '</svg>';
  }
  function gxTape(cls) {
    return '<span class="' + cls + '"></span>';
  }

  /* 右侧插画：绿色自然背景 + 学生真人照片（设计稿同构版面） */
  function gxHeroArt() {
    return '<div class="gx-hero">' +
      '<svg class="gx-hero-art" viewBox="0 0 460 400" preserveAspectRatio="none" aria-hidden="true">' +
      /* 云 / 飞鸟 */
      '<ellipse cx="118" cy="74" rx="54" ry="16" fill="#ffffff" opacity=".9"/>' +
      '<ellipse cx="148" cy="62" rx="30" ry="12" fill="#ffffff" opacity=".75"/>' +
      '<path d="M252 92q9-9 18 0M280 102q8-8 16 0M306 84q7-7 14 0" fill="none" stroke="#a9c48c" stroke-width="2.2" stroke-linecap="round"/>' +
      /* 远山 */
      '<path d="M-20 336c62-96 150-108 236-44v128H-20z" fill="#dfeecb"/>' +
      '<path d="M110 420c34-112 148-172 272-162 54 44 92 100 98 162z" fill="#c6e0ac"/>' +
      '<path d="M240 420c30-78 94-110 168-102 32 34 50 66 54 102z" fill="#b3d497" opacity=".78"/>' +
      '<path d="M-20 386c90-26 190-14 260 16l-4 18H-20z" fill="#cfe4b8" opacity=".85"/>' +
      /* 左侧草丛 */
      '<path d="M28 420q-10-46 4-68M48 420q-6-40 8-58M70 420q-4-32 8-48" fill="none" stroke="#a9c78a" stroke-width="2.2" stroke-linecap="round"/>' +
      '<g fill="#ffffff"><circle cx="40" cy="378" r="4.6"/><circle cx="62" cy="392" r="4"/></g>' +
      '<g fill="#f5efae"><circle cx="40" cy="378" r="1.8"/><circle cx="62" cy="392" r="1.6"/></g>' +
      /* 右侧花枝 */
      '<path d="M330 420c4-56 12-94 22-120" fill="none" stroke="#8fb26e" stroke-width="2.6"/>' +
      '<path d="M352 302c-4-26 6-44 22-52 2 24-8 42-22 52z" fill="#bcd79a"/>' +
      '<path d="M336 340c-14-16-14-34-2-48 12 16 13 33 2 48z" fill="#cbe0ab"/>' +
      '<path d="M300 420q-8-44 4-64M318 420q-4-38 8-54M356 420q0-30 10-44" fill="none" stroke="#a9c78a" stroke-width="2.2" stroke-linecap="round"/>' +
      '<g fill="#ffffff"><circle cx="344" cy="386" r="5.4"/><circle cx="366" cy="374" r="4.6"/><circle cx="382" cy="392" r="4.2"/><circle cx="324" cy="402" r="4.6"/></g>' +
      '<g fill="#f5efae"><circle cx="344" cy="386" r="2.1"/><circle cx="366" cy="374" r="1.8"/><circle cx="382" cy="392" r="1.6"/><circle cx="324" cy="402" r="1.8"/></g>' +
      /* 台座 */
      '<path d="M96 320v24c0 15 47 27 104 27s104-12 104-27v-24z" fill="#f9fbf4" stroke="#e2ecd6" stroke-width="1.4"/>' +
      '<ellipse cx="200" cy="320" rx="104" ry="27" fill="#eef5e5" stroke="#e2ecd6" stroke-width="1.4"/>' +
      '<text class="gx-platform-cap" x="200" y="345" text-anchor="middle">记录青春的模样</text>' +
      '</svg>' +
      '<picture class="gx-student-photo"><source srcset="assets/growth-archive-student.webp" type="image/webp"><img src="assets/growth-archive-student.png" alt="学生照片"></picture>' +
      '<span class="gx-note"><i></i><i></i><i></i><i></i></span>' +
      '</div>';
  }

  /* ---------- 3. 左侧阶段标签栏 ---------- */
  function gxRail() {
    return '<aside class="gx-rail">' +
      '<div class="gx-binder"><i></i><i></i><i></i><i></i><i></i></div>' +
      '<div class="gx-brand"><button class="gx-logo" data-page="home" title="返回学生端首页">图标</button><b>成长档案</b></div>' +
      '<div class="gx-groups">' +
      ca.sideTagGroups.map(function (g) {
        return '<div class="gx-group tone-' + g.tone + '">' +
          '<span class="gx-stage">' + g.stage + '</span>' +
          '<div class="gx-items">' +
          g.tags.map(function (t) {
            return '<button class="gx-item' + (t === activeSideTag ? ' active' : '') + '" data-side-tag="' + t + '"><i></i>' + t + '</button>';
          }).join('') +
          '</div></div>';
      }).join('') +
      '</div></aside>';
  }

  /* ---------- 4. 基本资料卡 ---------- */
  function gxBasicCard() {
    var b = ca.basicInfo;
    var rows = [
      ['毕业年份', b.gradeYear], ['学校/学院', b.school],
      ['姓名', b.name], ['性别', b.gender],
      ['学号', b.studentNo], ['身份证号', b.idCard],
      ['学历', b.education], ['手机号码', b.phone],
      ['专业', b.major], ['电子邮件', b.email],
      ['入学时间', b.enrollDate], ['学制', b.duration],
      ['所在班级', b.className], ['校园卡编号', b.campusCard]
    ];
    return '<section class="gx-card gx-basic">' +
      gxStar('gx-basic-star') +
      '<div class="gx-fields">' + rows.map(function (r) {
        return '<p class="gx-field"><b>' + r[0] + '：</b><span>' + (r[1] || '—') + '</span></p>';
      }).join('') + '</div>' +
      gxHeroArt() + '</section>';
  }

  /* ---------- 5. AI 总结及建议卡 ---------- */
  function gxRadar() {
    var ds = ca.radar5, cx = 190, cy = 152, r = 124, n = ds.length;
    function pt(k, i) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * r * k, cy + Math.sin(a) * r * k]; }
    var rings = [0.25, 0.5, 0.75, 1].map(function (k) {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * k).toFixed(1) + '"/>';
    }).join('');
    var axes = ds.map(function (_, i) {
      var p = pt(1, i);
      return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '"/>';
    }).join('');
    var poly = ds.map(function (d, i) { return pt(d.value / 100, i).map(function (v) { return v.toFixed(1); }).join(','); }).join(' ');
    var dots = ds.map(function (d, i) {
      var p = pt(d.value / 100, i);
      return '<circle class="gx-dot" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4.4"/>';
    }).join('');
    var labels = ds.map(function (d, i) {
      var p = pt(1.16, i), anchor = 'middle';
      if (i === 1) anchor = 'start';
      if (i === 2) anchor = 'start';
      if (i === 3) anchor = 'end';
      if (i === 4) anchor = 'end';
      return '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 4).toFixed(1) + '" text-anchor="' + anchor + '">' + d.name + '</text>';
    }).join('');
    return '<svg class="gx-radar-svg" viewBox="0 0 380 320" role="img" aria-label="能力画像雷达图">' +
      '<g class="gx-rings">' + rings + axes + '</g>' +
      '<polygon class="gx-area" points="' + poly + '"/>' + dots +
      '<g class="gx-labels">' + labels + '</g></svg>';
  }
  function gxAiCard() {
    return '<section class="gx-card gx-ai">' +
      '<h3 class="gx-ai-title">AI总结及建议</h3>' +
      '<div class="gx-radar">' + gxRadar() + '</div>' +
      '<div class="gx-ai-text"><h4>总结：</h4><p>' + ca.aiSummary.total + '</p>' +
      '<h4>建议：</h4><p>' + ca.aiSummary.advice + '</p></div>' +
      gxTape('gx-tape') + '</section>';
  }

  /* ---------- 6. 学年时间线卡 ---------- */
  function gxTimelineCard() {
    var records = ca.gradeRecords[activeArchiveGrade] || [];
    return '<section class="gx-card gx-time">' +
      '<div class="gx-tabs">' + ca.gradeStages.map(function (x) {
        return '<button class="' + (x.id === activeArchiveGrade ? 'active' : '') + '" data-archive-grade="' + x.id + '">' + x.title + '</button>';
      }).join('') + '</div>' +
      (records.length ?
        '<div class="gx-records">' + records.map(function (x) {
          return '<article class="gx-record"><i></i>' +
            '<div class="gx-meta"><time>' + x.created_at + '</time>' +
            '<em>' + x.business_type + '</em><em>' + x.ability_dimension + '</em></div>' +
            '<p>' + x.description + '</p></article>';
        }).join('') + '</div>' :
        '<div class="gx-records-empty"><p>' + activeArchiveGrade + '暂无成长记录</p></div>') +
      gxStar('gx-time-star') + gxBooks() + '</section>';
  }

  /* ---------- 7. 其他标签的内容卡 ---------- */
  function gxModuleCard() {
    var records = (ca.gradeRecords[activeArchiveGrade] || []).filter(function (x) {
      return x.business_type === activeSideTag || x.business_type.indexOf(activeSideTag) > -1 || activeSideTag.indexOf(x.business_type) > -1 || (x.description || '').indexOf(activeSideTag) > -1;
    }).slice(0, 8);
    return '<section class="gx-card gx-module">' +
      '<div class="gx-module-head"><h2>' + activeSideTag + '</h2><p>来自云生涯后台该模块的使用记录与阶段成果</p></div>' +
      (records.length ?
        '<div class="gx-records">' + records.map(function (x) {
          return '<article class="gx-record"><i></i><div class="gx-meta"><time>' + x.created_at + '</time>' +
            '<em>' + x.business_type + '</em><em>' + x.ability_dimension + '</em></div><p>' + x.description + '</p></article>';
        }).join('') + '</div>' :
        '<div class="gx-records-empty"><p>暂无「' + activeSideTag + '」相关记录，完成该模块学习或参与后将自动归档至此。</p></div>') +
      '</section>';
  }

  /* ---------- 8. 页面装配 ---------- */
  function gxArchivePage() {
    var isValid = activeSideTag === '基本信息';
    return '<div class="gx-page">' + gxRail() +
      '<main class="gx-sheet">' + gxClip('gx-clip') +
      (isValid
        ? gxBasicCard() + '<div class="gx-bottom">' + gxAiCard() + gxTimelineCard() + '</div>'
        : gxModuleCard() +
        '<div class="gx-bottom"><div class="gx-card gx-hint"><h4>' + activeSideTag + '模块</h4>' +
        '<p>该模块沿用云生涯Max现有功能页面，成长档案仅做统一归档与展示，点击左侧其他标签可切换查看。</p></div></div>') +
      '</main></div>';
  }

  function gxEligible() {
    return state.student.bound && ca.status !== 'error' && ca.status !== 'empty';
  }

  var gxOriginalRender = render;
  render = function () {
    if (page === 'archive' && gxEligible()) {
      app.innerHTML = gxArchivePage();
      bind();
      syncUrl();
      return;
    }
    gxOriginalRender();
  };
  render();
})();
