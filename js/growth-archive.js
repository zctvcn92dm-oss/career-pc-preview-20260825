/* ===== 成长档案 · 复古纸张版式（对齐 2026-10-23 设计稿） ===== */
(function () {
  var ca = state.careerArchive;

  /* ---------- 1. 数据 ---------- */
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
    { name: '职业探索', value: 74 },
    { name: '职业实践', value: 82 },
    { name: '竞赛成长', value: 60 },
    { name: '职业实训', value: 58 },
    { name: '职业规划', value: 70 }
  ];

  ca.aiSummary = {
    total: '本学期该学生在德智体美劳各方面发展良好，学习态度端正，成绩稳中有升，尊敬师长，团结同学，集体荣誉感和责任感较强，积极参与各项锻炼、艺术活动和社会实践，身心素质整体健康，展现出积极向上的成长态势。但在英语口语等个别学科上仍有薄弱环节，学习方法不够系统，面对考试压力时偶有焦虑，竞赛活动的持续性也有待加强。',
    advice: '下一步学生本人应针对薄弱学科制定专项提升计划，坚持错题整理和口语练习，学会主动沟通调节情绪，并选择1-2项竞赛活动长期坚持；教师需在课堂中多给予展示机会和正向鼓励，定期开展学法指导与个别谈话，做到因材施教；家长应营造轻松的家庭氛围，关注孩子情绪变化，配合学校督促良好习惯养成。通过家校协同，精准施策，帮助孩子在新学期实现全面的进步与展望。'
  };

  ca.currentGrade = '第四年';
  ca.gradeRecords = {
    '第一年': [
      { created_at: '2023年06月18日 10:24:31', business_type: '职业测评', ability_dimension: '自我认知能力', description: '完成【霍兰德职业兴趣测评】测评，测评结果是:艺术型、社会型、研究型' },
      { created_at: '2023年05月09日 15:02:47', business_type: '生涯活动', ability_dimension: '职业认知能力', description: '参加了【优秀校友职场分享会】生涯活动' },
      { created_at: '2023年03月22日 20:11:06', business_type: '线上课', ability_dimension: '职业规划能力', description: '完成【大学生职业生涯规划】线上课学习，累计课时 12 节' },
      { created_at: '2022年12月05日 14:38:20', business_type: '预约咨询', ability_dimension: '自我认知能力', description: '预约了【一对一生涯咨询】，咨询主题:专业方向与职业选择' },
      { created_at: '2022年10月14日 09:27:52', business_type: '职业测评', ability_dimension: '自我认知能力', description: '完成【职业性格测评】测评，测评结果是:内向、直觉、情感、知觉' }
    ],
    '第二年': [
      { created_at: '2024年06月25日 16:45:12', business_type: '生涯体验周', ability_dimension: '职业认知能力', description: '参加了【行业体验周 · 互联网产品经理岗位】生涯体验周活动' },
      { created_at: '2024年05月16日 10:08:33', business_type: '生涯活动', ability_dimension: '职业认知能力', description: '参加了【企业开放日 · 数字创意产业园区参访】生涯活动' },
      { created_at: '2024年04月08日 21:19:44', business_type: '线上课', ability_dimension: '职业规划能力', description: '完成【行业认知与职业选择】线上课学习，累计课时 10 节' },
      { created_at: '2023年11月20日 19:52:07', business_type: '微视频', ability_dimension: '职业认知能力', description: '学习了【数字媒体行业岗位解读】微视频课程' },
      { created_at: '2023年09月12日 11:03:58', business_type: '职业测评', ability_dimension: '自我认知能力', description: '完成【职业价值观测评】测评，测评结果是:成就、独立、认同' }
    ],
    '第三年': [
      { created_at: '2025年06月30日 17:26:09', business_type: '大学生职业规划大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生职业规划大赛】，获得校级二等奖' },
      { created_at: '2025年05月21日 20:41:35', business_type: 'AI面试', ability_dimension: '求职表现能力', description: '完成【AI模拟面试】训练，岗位:数字媒体运营，综合评分 82 分' },
      { created_at: '2025年04月17日 13:55:28', business_type: 'AI简历', ability_dimension: '求职表现能力', description: '使用【AI简历】生成并优化了个人简历，岗位匹配度 78%' },
      { created_at: '2025年03月10日 15:14:03', business_type: '职业礼仪', ability_dimension: '职业素养能力', description: '完成【职场礼仪与形象管理】线上课学习，累计课时 8 节' },
      { created_at: '2024年12月03日 18:33:41', business_type: '职场沟通技巧', ability_dimension: '职业素养能力', description: '完成【职场沟通技巧】训练营，累计课时 8 节' },
      { created_at: '2024年10月28日 09:47:16', business_type: '就业活动', ability_dimension: '求职表现能力', description: '参加了【2025届实习生双选洽谈会】就业活动' }
    ],
    '第四年': [
      { created_at: '2024年09月22日 00:46:58', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中建西部建设湖南有限公司】宣讲会' },
      { created_at: '2024年09月18日 16:39:02', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【长沙理工大学2025届毕业生秋季综合双选会（第一场）暨第八届校友企业专场招聘会】双选会' },
      { created_at: '2024年09月18日 15:39:57', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【安克创新科技股份有限公司深圳分公司】宣讲会' },
      { created_at: '2024年09月16日 13:11:22', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中石化湖南石油化工有限公司】宣讲会' },
      { created_at: '2024年09月11日 08:10:07', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中广核集团】宣讲会' },
      { created_at: '2024年09月09日 22:41:59', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【全国重点高校2025届毕业生秋季巡回招聘会长沙理工大学站】双选会' },
      { created_at: '2024年09月09日 22:36:58', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【广州市海康电梯技术开发有限公司】宣讲会' },
      { created_at: '2024年09月09日 14:58:57', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【美的集团股份有限公司】宣讲会' }
    ]
  };

  /* ---------- 2. 装饰图形 ---------- */
  function gxClover(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 32 32" aria-hidden="true">' +
      '<g fill="none" stroke="#7f9c5e" stroke-width="1.6">' +
      '<circle cx="16" cy="10.5" r="5"/><circle cx="10.5" cy="16" r="5"/>' +
      '<circle cx="21.5" cy="16" r="5"/><circle cx="16" cy="21.5" r="5"/>' +
      '</g><circle cx="16" cy="16" r="2.2" fill="#7f9c5e"/></svg>';
  }
  function gxPaperclip(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 30 66" aria-hidden="true">' +
      '<path d="M11 18v31a8 8 0 0016 0V13a5.6 5.6 0 00-11.2 0v34a3.2 3.2 0 006.4 0V18" ' +
      'fill="none" stroke="#b3ada0" stroke-width="2.6" stroke-linecap="round"/></svg>';
  }
  function gxBotanical(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 220 420" aria-hidden="true">' +
      '<g fill="none" stroke="#8aa06f" stroke-width="1.6" stroke-linecap="round">' +
      '<path d="M120 420C112 300 118 200 140 110"/>' +
      '<path d="M126 330c-30-6-48-26-52-52 26 4 46 22 52 52z"/>' +
      '<path d="M124 268c30-4 50-22 56-48-26 2-48 20-56 48z"/>' +
      '<path d="M128 208c-26-8-40-26-42-50 22 6 38 24 42 50z"/>' +
      '<path d="M136 152c26-6 42-22 48-46-22 4-42 20-48 46z"/>' +
      '<path d="M120 420c-24-10-40-30-44-54 22 8 38 28 44 54z"/>' +
      '<path d="M118 356c22-12 34-30 36-54-20 8-34 28-36 54z"/>' +
      '</g></svg>';
  }
  function gxPlatform() {
    return '<svg class="gx-platform" viewBox="0 0 340 120" aria-hidden="true">' +
      '<ellipse cx="170" cy="86" rx="120" ry="20" fill="#efeee3" opacity=".8"/>' +
      '<path d="M50 46v30c0 11 54 20 120 20s120-9 120-20V46z" fill="#fbfaf3" stroke="#e6e4d4" stroke-width="1.2"/>' +
      '<ellipse cx="170" cy="46" rx="120" ry="22" fill="#fdfcf7" stroke="#e6e4d4" stroke-width="1.2"/>' +
      '<path d="M50 70c0 11 54 20 120 20s120-9 120-20" fill="none" stroke="#dfe6d2" stroke-width="1.2"/>' +
      '</svg>';
  }
  function gxPen(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 40 220" aria-hidden="true">' +
      '<path d="M20 4c6 0 9 5 9 12v118H11V16c0-7 3-12 9-12z" fill="#f6f2e4" stroke="#cdc7b4" stroke-width="1.4"/>' +
      '<path d="M11 134h18v18H11z" fill="#b8c6a0" stroke="#9fae86" stroke-width="1.2"/>' +
      '<path d="M11 152h18l-9 44z" fill="#f1eddd" stroke="#cdc7b4" stroke-width="1.4"/>' +
      '<path d="M14 196h12l-6 12z" fill="#8a8a80"/>' +
      '<path d="M20 24v96" stroke="#dcd6c2" stroke-width="1.2"/>' +
      '<path d="M15 30h10v8H15z" fill="#d9d2bd" opacity=".8"/></svg>';
  }
  function gxRibbon() {
    return '<span class="gx-ribbon" aria-hidden="true"></span>';
  }

  /* ---------- 3. 左侧线圈笔记本标签栏 ---------- */
  function gxRail() {
    var rings = '';
    for (var i = 0; i < 14; i++) rings += '<i></i>';
    return '<aside class="gx-rail">' +
      '<div class="gx-spiral">' + rings + '</div>' +
      '<div class="gx-rail-page">' +
      '<div class="gx-brand">' + gxClover('gx-clover') + '<b>成长档案</b></div>' +
      '<div class="gx-groups">' +
      ca.sideTagGroups.map(function (g) {
        return '<div class="gx-group tone-' + g.tone + '">' +
          '<span class="gx-stage">' + g.stage + '</span>' +
          '<div class="gx-items">' +
          g.tags.map(function (t) {
            var active = t === activeSideTag;
            var current = t === '生涯体验周';
            return '<button class="gx-item' + (active ? ' active' : current ? ' current' : '') + '" data-side-tag="' + t + '">' +
              (active || current ? '<i class="gx-ring"></i>' : '') + '<span>' + t + '</span>' +
              (current ? gxClover('gx-item-clover') : '<em class="gx-chev">›</em>') +
              '</button>';
          }).join('') +
          '</div></div>';
      }).join('') +
      '</div></div></aside>';
  }

  /* ---------- 4. 基本资料卡 ---------- */
  function gxBasicCard() {
    var b = ca.basicInfo;
    var left = [['毕业年份', b.gradeYear], ['姓名', b.name], ['学号', b.studentNo], ['学历', b.education], ['专业', b.major], ['入学时间', b.enrollDate], ['所在班级', b.className]];
    var right = [['学校/学院', b.school], ['性别', b.gender], ['身份证号', b.idCard], ['手机号码', b.phone], ['电子邮件', b.email], ['学制', b.duration], ['校园卡编号', b.campusCard]];
    var col = function (rows) {
      return '<div class="gx-fcol">' + rows.map(function (r) {
        return '<p class="gx-field" title="' + (r[1] || '') + '"><b>' + r[0] + '：</b></p>';
      }).join('') + '</div>';
    };
    var punch = '';
    for (var i = 0; i < 7; i++) punch += '<i></i>';
    return '<section class="gx-card gx-basic">' +
      gxPaperclip('gx-paperclip') +
      gxRibbon() +
      '<div class="gx-punch">' + punch + '</div>' +
      '<div class="gx-fields">' + col(left) + col(right) + '</div>' +
      '<div class="gx-hero">' + gxBotanical('gx-hero-botanical') + gxPlatform() +
      '<picture class="gx-student"><source srcset="assets/growth-archive-student.webp" type="image/webp"><img src="assets/growth-archive-student.png" alt="学生照片"></picture>' +
      '</div>' +
      gxClover('gx-basic-clover') +
      '</section>';
  }

  /* ---------- 5. AI 总结及建议卡 ---------- */
  function gxRadar() {
    var ds = ca.radar5, cx = 190, cy = 152, r = 120, n = ds.length;
    function pt(k, i) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * r * k, cy + Math.sin(a) * r * k]; }
    var rings = [0.25, 0.5, 0.75, 1].map(function (k) {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * k).toFixed(1) + '"/>';
    }).join('');
    var spokes = ds.map(function (_, i) {
      var p = pt(1, i);
      return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '"/>';
    }).join('');
    var poly = ds.map(function (d, i) { return pt(d.value / 100, i).map(function (v) { return v.toFixed(1); }).join(','); }).join(' ');
    var dots = ds.map(function (d, i) {
      var p = pt(d.value / 100, i);
      return '<circle class="gx-dot" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4.2"/>';
    }).join('');
    var labels = ds.map(function (d, i) {
      var p = pt(1.16, i), anchor = 'middle';
      if (i === 1 || i === 2) anchor = 'start';
      if (i === 3 || i === 4) anchor = 'end';
      return '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 4).toFixed(1) + '" text-anchor="' + anchor + '">' + d.name + '</text>';
    }).join('');
    return '<svg class="gx-radar-svg" viewBox="0 0 380 320" role="img" aria-label="能力画像雷达图">' +
      '<g class="gx-rings">' + rings + spokes + '</g>' +
      '<polygon class="gx-area" points="' + poly + '"/>' + dots +
      '<g class="gx-labels">' + labels + '</g></svg>';
  }
  function gxAiCard() {
    return '<section class="gx-card gx-ai">' +
      gxPaperclip('gx-ai-clip') +
      '<h3 class="gx-ai-title">AI总结及建议</h3>' +
      '<div class="gx-radar">' + gxRadar() + '</div>' +
      '<div class="gx-ai-text"><h4>总结：</h4><p>' + ca.aiSummary.total + '</p>' +
      '<h4>建议：</h4><p>' + ca.aiSummary.advice + '</p></div>' +
      '</section>';
  }

  /* ---------- 6. 学年时间线卡 ---------- */
  function gxBody(text) {
    return text.replace(/[】\s]*(宣讲会|双选会|招聘会)$/, '】');
  }
  function gxChip(text) {
    var t = /双选会|招聘会/.test(text) ? '双选会' : /宣讲会/.test(text) ? '宣讲会' : '';
    return t ? '<em class="gx-chip">' + t + '</em>' : '';
  }
  function gxTimelineCard() {
    var records = ca.gradeRecords[activeArchiveGrade] || [];
    return '<section class="gx-card gx-time">' +
      '<div class="gx-tabs">' + ca.gradeStages.map(function (x) {
        return '<button class="' + (x.id === activeArchiveGrade ? 'active' : '') + '" data-archive-grade="' + x.id + '">' + x.title + '</button>';
      }).join('') + '</div>' +
      (records.length ?
        '<div class="gx-records">' + records.map(function (x) {
          return '<article class="gx-record"><i class="gx-node"></i>' +
            '<div class="gx-meta"><time>' + x.created_at + '</time>' +
            '<em class="gx-tag gx-tag-a">' + x.business_type + '</em>' +
            '<em class="gx-tag gx-tag-b">' + x.ability_dimension + '</em></div>' +
            '<p>' + gxBody(x.description) + gxChip(x.description) + '</p></article>';
        }).join('') + '</div>' :
        '<div class="gx-records-empty"><p>' + activeArchiveGrade + '暂无成长记录</p></div>') +
      gxBotanical('gx-time-botanical') + '</section>';
  }

  /* ---------- 7. 其他标签的内容卡 ---------- */
  function gxModuleCard() {
    var records = (ca.gradeRecords[activeArchiveGrade] || []).filter(function (x) {
      return x.business_type === activeSideTag || x.business_type.indexOf(activeSideTag) > -1 || activeSideTag.indexOf(x.business_type) > -1 || (x.description || '').indexOf(activeSideTag) > -1;
    }).slice(0, 8);
    return '<section class="gx-card gx-module">' +
      '<div class="gx-module-head"><h2>' + activeSideTag + '</h2><p>来自云生涯后台该模块的使用记录与阶段成果</p></div>' +
      (records.length ?
        '<div class="gx-records gx-records-module">' + records.map(function (x) {
          return '<article class="gx-record"><i class="gx-node"></i><div class="gx-meta"><time>' + x.created_at + '</time>' +
            '<em class="gx-tag gx-tag-a">' + x.business_type + '</em><em class="gx-tag gx-tag-b">' + x.ability_dimension + '</em></div>' +
            '<p>' + gxBody(x.description) + gxChip(x.description) + '</p></article>';
        }).join('') + '</div>' :
        '<div class="gx-records-empty"><p>暂无「' + activeSideTag + '」相关记录，完成该模块学习或参与后将自动归档至此。</p></div>') +
      '</section>';
  }

  /* ---------- 8. 页面装配 ---------- */
  function gxArchivePage() {
    var isValid = activeSideTag === '基本信息';
    return '<div class="gx-page">' +
      gxBotanical('gx-page-botanical gx-page-botanical-r') +
      gxBotanical('gx-page-botanical gx-page-botanical-l') +
      gxPen('gx-pen') +
      gxRail() +
      '<main class="gx-sheet">' +
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
