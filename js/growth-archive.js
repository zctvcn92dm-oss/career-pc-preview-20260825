/* ===== 成长档案 · 复古纸张版式（严格对齐 2026-10-23 设计稿 1920×1080） ===== */
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
    { stage: '就业实践', tone: 'e', tags: ['毕业意向', '宣讲会', '双选会', '在线招聘'] }
  ];

  ca.radar5 = [
    { name: '职业探索', value: 74 },
    { name: '职业实践', value: 82 },
    { name: '竞赛成长', value: 60 },
    { name: '职业实训', value: 58 },
    { name: '职业规划', value: 70 }
  ];

  ca.aiSummary = {
    total: '本学期该学生在德智体美劳各方面发展良好，学习态度端正，成绩稳中有升，尊敬师长，团结同学，集体荣誉感和责任感较强，积极参与各项实践、艺术活动和社会实践，身心素质整体健康，展现出积极向上的成长态势。但在英语口语等个别学科上仍有薄弱环节，学习方法不够系统，面对考试压力时偶有焦虑，竞赛活动的持续性也有待加强。',
    advice: '下一步学生本人应针对薄弱学科制定专项提升计划，坚持错题整理和口语练习，学会主动沟通调节情绪，并遴选1-2项竞赛活动长期坚持；教师需在课堂中多给予展示机会和正向鼓励，定期开展学法指导与个别谈话，做到因材施教；家长应营造轻松的家庭氛围，关注孩子情绪变化，配合学校督促良好习惯养成，共同关注其心理韧性的建设。通过家校协同、精准施策，帮助学生在新的阶段实现全面的进步与提升。'
  };

  ca.currentGrade = '第四年';
  ca.gradeRecords = {
    '第一年': [
      { created_at: '2023年06月18日 10:24:31', business_type: '职业测评', ability_dimension: '自我认知能力', description: '完成【霍兰德职业兴趣测评】测评，测评结果是：艺术型、社会型、研究型' },
      { created_at: '2023年05月09日 15:02:47', business_type: '生涯活动', ability_dimension: '职业认知能力', description: '参加了【优秀校友职场分享会】生涯活动' },
      { created_at: '2023年03月22日 20:11:06', business_type: '线上课', ability_dimension: '职业规划能力', description: '完成【大学生职业生涯规划】线上课学习，累计课时 12 节' },
      { created_at: '2022年12月05日 14:38:20', business_type: '预约咨询', ability_dimension: '自我认知能力', description: '预约了【一对一生涯咨询】，咨询主题：专业方向与职业选择' },
      { created_at: '2022年10月14日 09:27:52', business_type: '职业测评', ability_dimension: '自我认知能力', description: '完成【职业性格测评】测评，测评结果是：内向、直觉、情感、知觉' }
    ],
    '第二年': [
      { created_at: '2024年06月25日 16:45:12', business_type: '生涯体验周', ability_dimension: '职业认知能力', description: '参加了【行业体验周 · 互联网产品经理岗位】生涯体验周活动' },
      { created_at: '2024年05月16日 10:08:33', business_type: '生涯活动', ability_dimension: '职业认知能力', description: '参加了【企业开放日 · 数字创意产业园区参访】生涯活动' },
      { created_at: '2024年04月08日 21:19:44', business_type: '线上课', ability_dimension: '职业规划能力', description: '完成【行业认知与职业选择】线上课学习，累计课时 10 节' },
      { created_at: '2023年11月20日 19:52:07', business_type: '微视频', ability_dimension: '职业认知能力', description: '学习了【数字媒体行业岗位解读】微视频课程' },
      { created_at: '2023年09月12日 11:03:58', business_type: '职业测评', ability_dimension: '自我认知能力', description: '完成【职业价值观测评】测评，测评结果是：成就、独立、认同' }
    ],
    '第三年': [
      { created_at: '2025年06月30日 17:26:09', business_type: '大学生职业规划大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生职业规划大赛】，获得校级二等奖' },
      { created_at: '2025年05月21日 20:41:35', business_type: 'AI面试', ability_dimension: '求职表现能力', description: '完成【AI模拟面试】训练，岗位：数字媒体运营，综合评分 82 分' },
      { created_at: '2025年04月17日 13:55:28', business_type: 'AI简历', ability_dimension: '求职表现能力', description: '使用【AI简历】生成并优化了个人简历，岗位匹配度 78%' },
      { created_at: '2025年03月10日 15:14:03', business_type: '职业礼仪', ability_dimension: '职业素养能力', description: '完成【职场礼仪与形象管理】线上课学习，累计课时 8 节' },
      { created_at: '2024年12月03日 18:33:41', business_type: '职场沟通技巧', ability_dimension: '职业素养能力', description: '完成【职场沟通技巧】训练营，累计课时 8 节' },
      { created_at: '2024年10月28日 09:47:16', business_type: '就业活动', ability_dimension: '求职表现能力', description: '参加了【2025届实习生双选洽谈会】就业活动' }
    ],
    '第四年': [
      { created_at: '2024年10月12日 09:35:21', business_type: '毕业意向', ability_dimension: '职业规划能力', description: '填报了毕业意向，意向方向为：直接就业 · 数字媒体运营类岗位' },
      { created_at: '2024年10月08日 15:22:47', business_type: '大学生创新大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生创新大赛】，项目名称：基于AIGC的校园文创设计平台，获校级三等奖' },
      { created_at: '2024年09月25日 20:06:13', business_type: '线上咨询', ability_dimension: '自我认知能力', description: '完成【线上生涯咨询】，咨询主题：就业与考研的权衡选择' },
      { created_at: '2024年09月22日 00:46:58', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中建西部建设湖南有限公司】宣讲会' },
      { created_at: '2024年09月18日 16:39:02', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【长沙理工大学2025届毕业生秋季综合双选会（第一场）暨第八届校友企业专场招聘会】双选会' },
      { created_at: '2024年09月18日 15:39:57', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【安克创新科技股份有限公司深圳分公司】宣讲会' },
      { created_at: '2024年09月16日 13:11:22', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中石化湖南石油化工有限公司】宣讲会' },
      { created_at: '2024年09月11日 08:10:07', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中广核集团】宣讲会' },
      { created_at: '2024年09月09日 22:41:59', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【全国重点高校2025届毕业生秋季巡回招聘会长沙理工大学站】双选会' },
      { created_at: '2024年09月09日 22:36:58', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【广州市海康电梯技术开发有限公司】宣讲会' },
      { created_at: '2024年09月09日 14:58:57', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【美的集团股份有限公司】宣讲会' },
      { created_at: '2024年09月02日 10:18:36', business_type: '在线招聘', ability_dimension: '求职表现能力', description: '通过【长沙理工大学就业信息网】在线投递简历并关注3家目标企业岗位' }
    ]
  };

  /* ---------- 1b. AI 模拟面试数据 ---------- */
  var activeInterviewJob = 'j1';
  var activeTrendMode = 'total';
  var activeRecordFilter = 'all';
  var activeReportId = '';

  function gxAscend(final, n) {
    var arr = [], base = Math.round(final * 0.74), i;
    for (i = 0; i < n; i++) {
      var t = i / (n - 1);
      var v = base + (final - base) * t + (1 - t) * (final * 0.05) * Math.sin(i * 1.7 + 1);
      arr.push(Math.max(40, Math.round(v)));
    }
    arr[n - 1] = final;
    return arr;
  }
  ca.interviewDims = ['透明沟通', '抗压能力', '行为礼貌', '逻辑思维', '专业素养', '倾听理解'];
  ca.interviewJobs = [
    { id: 'j1', name: '目标岗位1', score: 82 },
    { id: 'j2', name: '目标岗位2', score: 85 },
    { id: 'j3', name: '班主任老师', score: 88 },
    { id: 'j4', name: '辅导员老师', score: 88 }
  ];
  ca.interviewSessions = ['第1次', '第2次', '第3次', '第4次', '第5次'];
  ca.interviewTrend = {};
  ca.interviewJobs.forEach(function (j) {
    var total = gxAscend(j.score, 5);
    var dims = {};
    ca.interviewDims.forEach(function (d, di) {
      var f = Math.max(50, Math.min(98, Math.round(j.score + (di - 2.5) * 2.6)));
      dims[d] = gxAscend(f, 5);
    });
    ca.interviewTrend[j.id] = { total: total, dims: dims };
  });
  ca.interviewRecords = [
    { id: 'r1', job: '目标岗位1', score: 82, status: 'pass',
      report: { score: 89.5,
        dims: { '透明沟通': 90, '抗压能力': 84, '行为礼貌': 92, '逻辑思维': 86, '专业素养': 88, '倾听理解': 91 },
        comment: '林晓宇同学在本场模拟面试中整体表现优秀。开场自我介绍条理清晰，能围绕岗位胜任力展开论述；在「抗压能力」情境题中面对连续追问保持了稳定的情绪与表达节奏，思路未被带偏。建议在「逻辑思维」维度进一步强化论证层次感，多用 STAR 等结构化框架组织案例，并适当放慢语速，给面试官更充分的倾听空间。' } },
    { id: 'r2', job: '目标岗位2', score: 85, status: 'comment',
      report: { score: 87.2,
        dims: { '透明沟通': 88, '抗压能力': 82, '行为礼貌': 90, '逻辑思维': 84, '专业素养': 86, '倾听理解': 89 },
        comment: '本场面试在「专业素养」维度表现突出，对岗位所需的工具与方法论掌握扎实，能结合课程项目举例。相对薄弱的是「抗压能力」——被要求限时作答时语速加快、出现重复表述。建议通过限时演练提升临场稳定性，并在回答前用 2 秒深呼吸稳定节奏。' } },
    { id: 'r3', job: '班主任老师', score: 88, status: 'pass',
      report: { score: 90.4,
        dims: { '透明沟通': 91, '抗压能力': 87, '行为礼貌': 93, '逻辑思维': 89, '专业素养': 90, '倾听理解': 92 },
        comment: '面对教师岗的情境模拟，沟通与礼貌维度尤为亮眼，能自然使用称呼与过渡语，体现育人岗位的亲和力。逻辑维度整体良好，个别追问下偶有发散。后续可在复盘环节主动总结「我刚才的回答要点」，强化收束能力。' } },
    { id: 'r4', job: '辅导员老师', score: 88, status: 'fail',
      report: { score: '83.0',
        dims: { '透明沟通': 85, '抗压能力': 78, '行为礼貌': 88, '逻辑思维': 80, '专业素养': 84, '倾听理解': 86 },
        comment: '本场在「抗压能力」与「逻辑思维」两个维度上未达通过线。被问及突发事件处置时，先入为主给出结论、缺少分步推演，倾听环节也未能完整复述面试官的问题要点。建议先复述问题、再分层作答，并针对危机场景做专项话术训练。' } }
  ];
  ca.interviewStatusText = { pass: '已通过', fail: '未通过', comment: '已点评' };
  if (!activeReportId && ca.interviewRecords[0]) activeReportId = ca.interviewRecords[0].id;

  /* ---------- 2. 装饰图形 ---------- */
  function gxClover(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 32 32" aria-hidden="true">' +
      '<g fill="#8D9E70">' +
      '<path d="M15 15c-1.6-5.4-4.6-7.6-6.6-6.2s-1.2 6 3.4 6.6c-4.6.6-5 4.4-3 5.6s4.6-.8 6.2-6z"/>' +
      '<path d="M17 15c1.6-5.4 4.6-7.6 6.6-6.2s1.2 6-3.4 6.6c4.6.6 5 4.4 3 5.6s-4.6-.8-6.2-6z" opacity=".86"/>' +
      '<path d="M15 17c-5.4 1.6-7.6 4.6-6.2 6.6s6 1.2 6.6-3.4c.6 4.6 4.4 5 5.6 3s-.8-4.6-6-6.2z" opacity=".72"/>' +
      '<path d="M17 17c5.4 1.6 7.6 4.6 6.2 6.6s-6 1.2-6.6-3.4c.6-4.6-4.4-5-5.6-3s.8 4.6 6 6.2z" opacity=".58"/>' +
      '</g></svg>';
  }
  function gxBrassClip(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 30 66" aria-hidden="true">' +
      '<path d="M12 20v30a7.5 7.5 0 0015 0V13a5.6 5.6 0 00-11.2 0v35a3.4 3.4 0 006.8 0V20" ' +
      'fill="none" stroke="#C7AE72" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M12 20v30a7.5 7.5 0 0015 0V13a5.6 5.6 0 00-11.2 0v35a3.4 3.4 0 006.8 0V20" ' +
      'fill="none" stroke="#EBDCB4" stroke-width="1" stroke-linecap="round" transform="translate(-.5,-.6)"/></svg>';
  }
  function gxPaperclip(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 30 66" aria-hidden="true">' +
      '<path d="M12 20v30a7.5 7.5 0 0015 0V13a5.6 5.6 0 00-11.2 0v35a3.4 3.4 0 006.8 0V20" ' +
      'fill="none" stroke="#C9BE9E" stroke-width="2.4" stroke-linecap="round"/></svg>';
  }
  function gxSprig(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 78 62" aria-hidden="true">' +
      '<g fill="#EAF0DC" opacity=".92">' +
      '<path d="M40 60C26 50 16 34 18 18c9 6 22 26 22 42z"/>' +
      '<path d="M44 58C44 40 52 20 68 8c2 18-6 40-24 50z"/>' +
      '<path d="M36 62C26 54 20 42 20 30c8 6 16 20 16 32z" opacity=".75"/>' +
      '</g></svg>';
  }
  function gxStar(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M12 3.4l2.5 5.6 6.1.7-4.5 4.2 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.7l6.1-.7z" ' +
      'fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  }
  function gxBotanical(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 200 300" aria-hidden="true">' +
      '<g fill="none" stroke="#94AB77" stroke-width="1.5" stroke-linecap="round">' +
      '<path d="M108 300C100 214 104 138 122 74"/>' +
      '<path d="M112 236c-24-5-38-21-42-42 21 3 37 18 42 42z"/>' +
      '<path d="M110 190c24-3 40-18 45-39-21 2-38 16-45 39z"/>' +
      '<path d="M113 146c-21-6-32-21-34-40 18 5 30 19 34 40z"/>' +
      '<path d="M119 104c21-5 34-18 39-37-18 3-34 16-39 37z"/>' +
      '<path d="M106 268c19-10 29-24 31-43-17 6-29 22-31 43z"/>' +
      '</g></svg>';
  }
  function gxPen(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 40 200" aria-hidden="true">' +
      '<path d="M20 6c5 0 8 4 8 10v100H12V16c0-6 3-10 8-10z" fill="#F3F1E6" stroke="#C9C4AE" stroke-width="1.3"/>' +
      '<path d="M12 116h16v16H12z" fill="#8FA771" stroke="#7B9460" stroke-width="1"/>' +
      '<path d="M12 132h16l-8 40z" fill="#EFEDE0" stroke="#C9C4AE" stroke-width="1.3"/>' +
      '<path d="M15 172h10l-5 11z" fill="#8A8A80"/>' +
      '<path d="M20 24v84" stroke="#DED8C4" stroke-width="1.1"/></svg>';
  }

  /* ---------- 3. 左侧线圈笔记本 ---------- */
  function gxRail() {
    var rings = '', i;
    for (i = 0; i < 17; i++) rings += '<i></i>';
    return '<aside class="gx-rail">' +
      '<div class="gx-spiral">' + rings + '</div>' +
      '<div class="gx-rail-page">' +
      '<span class="gx-tape" aria-hidden="true"></span>' + gxBrassClip('gx-brassclip') +
      '<div class="gx-brand"><span class="gx-brand-badge">' + gxClover('gx-brand-clover') + '</span><b>成长档案</b></div>' +
      '<div class="gx-groups">' +
      ca.sideTagGroups.map(function (g) {
        return '<div class="gx-group">' +
          '<span class="gx-stage">' + g.stage + '</span>' +
          '<div class="gx-items">' +
          g.tags.map(function (t) {
            var active = t === activeSideTag;
            var current = t === '生涯体验周';
            var cls = 'gx-item' + (active ? ' active' : current ? ' current' : '');
            var right = active ? gxSprig('gx-item-sprig')
              : current ? gxStar('gx-item-star')
                : '<em class="gx-chev">›</em>';
            var left = active ? '<i class="gx-thread"></i><i class="gx-loop"></i>' : '';
            return '<button class="' + cls + '" data-side-tag="' + t + '">' +
              left + '<span>' + t + '</span>' + right + '</button>';
          }).join('') +
          '</div></div>';
      }).join('') +
      '</div></div>' +
      '<div class="gx-spiral gx-spiral-r">' + rings + '</div>' +
      '</aside>';
  }

  /* ---------- 4. 基本资料卡 ---------- */
  function gxBasicCard() {
    var b = ca.basicInfo;
    var left = [['毕业年份', b.gradeYear], ['姓名', b.name], ['学号', b.studentNo], ['学历', b.education], ['专业', b.major], ['入学时间', b.enrollDate], ['所在班级', b.className]];
    var right = [['学校/学院', b.school], ['性别', b.gender], ['身份证号', b.idCard], ['手机号码', b.phone], ['电子邮件', b.email], ['学制', b.duration], ['校园卡编号', b.campusCard]];
    var col = function (rows) {
      return '<div class="gx-fcol">' + rows.map(function (r) {
        return '<p class="gx-field"><b>' + r[0] + '：</b><span>' + (r[1] || '—') + '</span></p>';
      }).join('') + '</div>';
    };
    var punch = '';
    for (var i = 0; i < 7; i++) punch += '<i></i>';
    return '<section class="gx-card gx-basic">' +
      gxPaperclip('gx-paperclip') +
      '<span class="gx-ribbon" aria-hidden="true"></span>' +
      '<div class="gx-punch">' + punch + '</div>' +
      '<div class="gx-fields">' + col(left) + col(right) + '</div>' +
      '<div class="gx-hero" aria-hidden="true"></div>' +
      gxClover('gx-basic-clover') +
      '</section>';
  }

  /* ---------- 5. AI 总结及建议 ---------- */
  function gxRadar(ds) {
    if (!ds) ds = ca.radar5;
    var cx = 210, cy = 170, rx = 145, ry = 132, n = ds.length;
    function pt(k, i) {
      var a = -Math.PI / 2 + i * 2 * Math.PI / n;
      return [cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k];
    }
    var rings = [0.28, 0.52, 0.76, 1].map(function (k) {
      return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (rx * k).toFixed(1) + '" ry="' + (ry * k).toFixed(1) + '"/>';
    }).join('');
    var spokes = ds.map(function (_, i) {
      var p = pt(1, i);
      return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '"/>';
    }).join('');
    var poly = ds.map(function (d, i) { return pt(d.value / 100, i).map(function (v) { return v.toFixed(1); }).join(','); }).join(' ');
    var dots = ds.map(function (d, i) {
      var p = pt(d.value / 100, i);
      return '<circle class="gx-dot" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4"/>';
    }).join('');
    var labels = ds.map(function (d, i) {
      var p = pt(1.13, i), anchor = 'middle';
      if (p[0] > cx + 4) anchor = 'start';
      else if (p[0] < cx - 4) anchor = 'end';
      return '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 4).toFixed(1) + '" text-anchor="' + anchor + '">' + d.name + '</text>';
    }).join('');
    return '<svg class="gx-radar-svg" viewBox="0 0 420 330" role="img" aria-label="能力画像雷达图">' +
      '<g class="gx-rings">' + rings + spokes + '</g>' +
      '<polygon class="gx-area" points="' + poly + '"/>' + dots +
      '<g class="gx-labels">' + labels + '</g></svg>';
  }
  function gxAiPane(stacked) {
    return '<div class="gx-ai' + (stacked ? ' gx-ai--stack' : '') + '">' +
      '<h3 class="gx-ai-title">AI总结及建议</h3>' +
      '<div class="gx-radar">' + gxRadar() + '</div>' +
      '<div class="gx-ai-text"><h4>总结：</h4><p>' + ca.aiSummary.total + '</p>' +
      '<h4>建议：</h4><p>' + ca.aiSummary.advice + '</p></div>' +
      '</div>';
  }

  function gxRadar6(dims) {
    var ds = ca.interviewDims.map(function (n) { return { name: n, value: dims[n] || 0 }; });
    return gxRadar(ds);
  }

  /* ---------- 6. 学年时间线 ---------- */
  function gxBody(text) {
    return text.replace(/[】\s]*(宣讲会|双选会|招聘会)$/, '】');
  }
  function gxTail(text) {
    var t = /招聘会|双选会/.test(text) ? '双选会' : /宣讲会/.test(text) ? '宣讲会' : '';
    return t ? '<em class="gx-tail">' + t + '</em>' : '';
  }
  function gxRecs(records, extraCls) {
    return '<div class="gx-records' + (extraCls || '') + '">' + records.map(function (x) {
      return '<article class="gx-record"><i class="gx-node"></i>' +
        '<div class="gx-meta"><time>' + x.created_at + '</time>' +
        '<em class="gx-tag gx-tag-a">' + x.business_type + '</em>' +
        '<em class="gx-tag gx-tag-b">' + x.ability_dimension + '</em></div>' +
        '<p>' + gxBody(x.description) + gxTail(x.description) + '</p></article>';
    }).join('') + '</div>';
  }
  function gxTimePane() {
    var records = ca.gradeRecords[activeArchiveGrade] || [];
    return '<div class="gx-time">' +
      '<div class="gx-tabs">' + ca.gradeStages.map(function (x) {
        return '<button class="' + (x.id === activeArchiveGrade ? 'active' : '') + '" data-archive-grade="' + x.id + '">' + x.title + '</button>';
      }).join('') + '</div>' +
      (records.length ? gxRecs(records)
        : '<div class="gx-records-empty"><p>' + activeArchiveGrade + '暂无成长记录</p></div>') +
      '</div>';
  }

  /* ---------- 7. 其他标签的内容卡 ---------- */
  function gxModuleCard() {
    var records = (ca.gradeRecords[activeArchiveGrade] || []).filter(function (x) {
      return x.business_type === activeSideTag || x.business_type.indexOf(activeSideTag) > -1 || activeSideTag.indexOf(x.business_type) > -1 || (x.description || '').indexOf(activeSideTag) > -1;
    }).slice(0, 8);
    return '<section class="gx-card gx-module">' +
      '<div class="gx-module-head"><h2>' + activeSideTag + '</h2><p>来自云生涯后台该模块的使用记录与阶段成果</p></div>' +
      (records.length ? gxRecs(records, ' gx-records-module')
        : '<div class="gx-records-empty"><p>暂无「' + activeSideTag + '」相关记录，完成对应模块学习或参与后将自动归档至此。</p></div>') +
      '</section>';
  }

  /* ---------- 8. 返回按钮 ---------- */
  var gxBackTarget = 'home';                 // 进入档案页前的上一个页面
  var BACK_NAMES = { home: '首页', archive: '成长档案', ability: '能力画像', path: '生涯路径图', mail: '未来信箱',
    assessment: '职业测评', course: '线上课', video: '微视频', major: '专业认知',
    week: '生涯体验周', activity: '生涯活动', 'career-consult': '生涯咨询',
    plan: 'AI生涯规划', resume: 'AI简历', interview: 'AI面试', etiquette: '职业礼仪',
    contest: '职业规划大赛', assistant: '生涯助理', profile: '个人中心' };

  function gxBackTo() {
    page = gxBackTarget && gxBackTarget !== 'archive' && gxBackTarget !== 'ability' ? gxBackTarget : 'home';
    render();
    try { window.scrollTo(0, 0); } catch (e) { /* 忽略 */ }
  }

  /* 页头：与「生涯路径图」等标准页面统一（标题 + 说明 + 右侧操作） */
  function gxPageHead() {
    var label = BACK_NAMES[gxBackTarget] || '首页';
    var isAbility = page === 'ability';
    return '<div class="page-head gx-head">' +
      '<div><h1>' + (isAbility ? '能力画像' : '成长档案') + '</h1>' +
      '<p>' + (isAbility
        ? '按能力维度汇总测评、课程、实践等成长证据，呈现你的能力发展画像'
        : '统一归集测评、课程、活动、竞赛等成长记录，并按学年形成成长时间线') + '</p></div>' +
      '<div class="gx-head-actions">' +
      '<button class="gx-reopen" type="button" title="重新播放「打开档案」开场动画">↺ 重新打开档案</button>' +
      '<button class="gx-back" type="button" data-gx-back="' + gxBackTarget + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" ' +
      'stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '<span>返回' + label + '</span></button>' +
      '</div></div>';
  }

  function gxBackKey(e) {
    // 开场动画播放期间不抢 Esc（那时 Esc 是「跳过动画」）
    if (e.key !== 'Escape') return;
    if (document.querySelector('.gx-intro')) return;
    gxBackTo();
  }

  function gxBindBack() {
    var btn = document.querySelector('.gx-back');
    if (btn) btn.onclick = gxBackTo;
    var reopen = document.querySelector('.gx-reopen');
    if (reopen) reopen.onclick = function () {
      if (window.gxReplayIntro) window.gxReplayIntro();
    };
    document.removeEventListener('keydown', gxBackKey);
    if (btn) document.addEventListener('keydown', gxBackKey);
  }

  /* ---------- 8b. AI 模拟面试详情（2×2 网格） ---------- */
  function gxLineChart(series, labels) {
    var W = 480, H = 236, padL = 34, padR = 12, padT = 12, padB = 26;
    var plotW = W - padL - padR, plotH = H - padT - padB, max = 100, min = 0;
    function x(i) { return padL + (labels.length === 1 ? plotW / 2 : plotW * i / (labels.length - 1)); }
    function y(v) { return padT + plotH * (1 - (v - min) / (max - min)); }
    var grid = [0, 25, 50, 75, 100].map(function (g) {
      var yy = y(g);
      return '<line x1="' + padL + '" y1="' + yy.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + yy.toFixed(1) + '" class="gx-grid-line"/>' +
        '<text x="' + (padL - 5) + '" y="' + (yy + 3).toFixed(1) + '" text-anchor="end" class="gx-grid-text">' + g + '</text>';
    }).join('');
    var xlabels = labels.map(function (lb, i) {
      return '<text x="' + x(i).toFixed(1) + '" y="' + (H - 7) + '" text-anchor="middle" class="gx-axis-text">' + lb + '</text>';
    }).join('');
    var paths = series.map(function (s) {
      var d = s.values.map(function (v, i) { return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1); }).join(' ');
      var dots = s.values.map(function (v, i) { return '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(v).toFixed(1) + '" r="2.6" fill="' + s.color + '"/>'; }).join('');
      return '<path d="' + d + '" fill="none" stroke="' + s.color + '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' + dots;
    }).join('');
    return '<svg class="gx-linechart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="成绩趋势折线图">' +
      '<g class="gx-grid">' + grid + '</g>' + paths + '<g class="gx-axis">' + xlabels + '</g></svg>';
  }

  function gxInterviewTrend() {
    var job = ca.interviewJobs.filter(function (j) { return j.id === activeInterviewJob; })[0] || ca.interviewJobs[0];
    var t = ca.interviewTrend[job.id];
    var labels = ca.interviewSessions;
    var palette = ['#7E9A68', '#C98B5E', '#6E9B9F', '#B0769B', '#8A86C4', '#C9B25E'];
    var series, legend = '';
    if (activeTrendMode === 'total') {
      series = [{ name: '总分', color: '#7E9A68', values: t.total }];
    } else {
      series = ca.interviewDims.map(function (d, i) {
        return { name: d, color: palette[i % palette.length], values: t.dims[d] };
      });
      legend = '<div class="gx-trend-legend">' + series.map(function (s) {
        return '<span class="gx-legend-item"><i style="background:' + s.color + '"></i>' + s.name + '</span>';
      }).join('') + '</div>';
    }
    var jobTabs = ca.interviewJobs.map(function (j) {
      return '<button class="' + (j.id === activeInterviewJob ? 'active' : '') + '" data-interview-job="' + j.id + '">' + j.name + '<em>' + j.score + '</em></button>';
    }).join('');
    var modeBtns = [
      { k: 'total', n: '总分趋势' }, { k: 'dim', n: '维度对比' }
    ].map(function (m) {
      return '<button class="' + (activeTrendMode === m.k ? 'active' : '') + '" data-trend-mode="' + m.k + '">' + m.n + '</button>';
    }).join('');
    return '<section class="gx-card gx-trend">' +
      '<div class="gx-card-head"><div class="gx-card-titles"><h3>成绩趋势</h3><p>基于你目标岗位的能力成长曲线</p></div>' +
      '<div class="gx-trend-modes">' + modeBtns + '</div></div>' +
      '<div class="gx-trend-jobs">' + jobTabs + '</div>' +
      legend +
      '<div class="gx-trend-chart">' + gxLineChart(series, labels) + '</div>' +
      '</section>';
  }

  function gxInterviewRecords() {
    var list = ca.interviewRecords.filter(function (r) {
      return activeRecordFilter === 'all' || r.status === activeRecordFilter;
    });
    var filters = [
      { k: 'all', n: '全部' }, { k: 'pass', n: '已通过' }, { k: 'fail', n: '未通过' }, { k: 'comment', n: '已点评' }
    ].map(function (f) {
      return '<button class="' + (activeRecordFilter === f.k ? 'active' : '') + '" data-record-filter="' + f.k + '">' + f.n + '</button>';
    }).join('');
    var items = list.length ? list.map(function (r) {
      var cls = 'gx-rec-item' + (r.id === activeReportId ? ' active' : '');
      return '<article class="' + cls + '" data-report-id="' + r.id + '">' +
        '<div class="gx-rec-top"><b>' + r.job + '</b><span class="gx-rec-score">' + r.score + ' 分</span></div>' +
        '<div class="gx-rec-foot"><em class="gx-rec-status gx-rec-status--' + r.status + '">' + ca.interviewStatusText[r.status] + '</em>' +
        '<button class="gx-rec-view" data-report-id="' + r.id + '" type="button">查看报告 ›</button></div>' +
        '</article>';
    }).join('') : '<div class="gx-records-empty"><p>暂无符合条件的面试记录</p></div>';
    return '<section class="gx-card gx-recs-card">' +
      '<div class="gx-card-head"><h3>面试记录</h3></div>' +
      '<p class="gx-recs-desc">基于你目标岗位的多次模拟面试，系统已为你生成结构化成长记录</p>' +
      '<div class="gx-recs-filters">' + filters + '</div>' +
      '<div class="gx-recs-list">' + items + '</div>' +
      '</section>';
  }

  function gxInterviewReport() {
    var rec = ca.interviewRecords.filter(function (r) { return r.id === activeReportId; })[0] || ca.interviewRecords[0];
    if (!rec) return '<section class="gx-card gx-report"><div class="gx-records-empty"><p>暂无面试报告</p></div></section>';
    return '<section class="gx-card gx-report">' +
      '<h3 class="gx-report-title">AI面试报告</h3>' +
      '<div class="gx-report-body">' +
      '<div class="gx-report-left">' +
      '<div class="gx-report-score"><span class="gx-report-score-label">面试表现</span><b class="gx-report-score-num">' + rec.report.score + '</b></div>' +
      '<div class="gx-report-radar">' + gxRadar6(rec.report.dims) + '</div>' +
      '</div>' +
      '<div class="gx-report-right"><h4>AI综合点评</h4><p>' + rec.report.comment + '</p></div>' +
      '</div>' +
      '</section>';
  }

  function gxInterviewSheet() {
    return '<main class="gx-sheet gx-sheet-interview">' +
      '<section class="gx-card gx-ai-card">' + gxAiPane(true) + '</section>' +
      gxInterviewTrend() +
      gxInterviewRecords() +
      gxInterviewReport() +
      '</main>';
  }

  function gxBindInterview() {
    document.querySelectorAll('[data-interview-job]').forEach(function (b) {
      b.onclick = function () { activeInterviewJob = b.getAttribute('data-interview-job'); render(); };
    });
    document.querySelectorAll('[data-trend-mode]').forEach(function (b) {
      b.onclick = function () { activeTrendMode = b.getAttribute('data-trend-mode'); render(); };
    });
    document.querySelectorAll('[data-record-filter]').forEach(function (b) {
      b.onclick = function () { activeRecordFilter = b.getAttribute('data-record-filter'); render(); };
    });
    document.querySelectorAll('[data-report-id]').forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        activeReportId = b.getAttribute('data-report-id');
        render();
      };
    });
  }

  /* ---------- 9. 页面装配 ---------- */
  /* 右栏纸张：基本资料 + AI 总结 + 学年时间线 / 其他标签的模块卡 */
  function gxSheet() {
    if (activeSideTag === 'AI面试') return gxInterviewSheet();
    var isValid = activeSideTag === '基本信息';
    return '<main class="gx-sheet">' +
      (isValid
        ? gxBasicCard() +
        '<section class="gx-card gx-bottom">' + gxAiPane() + gxTimePane() +
        gxBotanical('gx-bottom-botanical') + gxPen('gx-pen') + '</section>'
        : gxModuleCard() +
        '<section class="gx-card gx-bottom"><div class="gx-hint"><h4>' + activeSideTag + '模块</h4>' +
        '<p>该模块沿用云生涯Max现有功能页面，成长档案仅做统一归档与展示，点击左侧其他标签可切换查看。</p></div></section>') +
      '</main>';
  }

  /* 内嵌在标准菜单壳内（侧栏 + 顶栏 + 页头 + 内容面板），与生涯路径图等页面统一 */
  function gxArchivePage() {
    return gxPageHead() +
      '<section class="content-panel gx-embed-panel">' +
      '<div class="gx-page gx-page--embedded">' + gxRail() + gxSheet() + '</div>' +
      '</section>';
  }

  function gxEligible() {
    return state.student.bound && ca.status !== 'error' && ca.status !== 'empty';
  }

  var gxOriginalRender = render;
  render = function () {
    // 只要不在档案页，就把当前页记为「返回目标」
    if (page !== 'archive' && page !== 'ability') gxBackTarget = page;
    if ((page === 'archive' || page === 'ability') && gxEligible()) {
      // 走标准菜单壳：保留左侧导航与顶栏，档案内容内嵌在内容面板中
      app.innerHTML = shell(gxArchivePage());
      bind();
      gxBindBack();
      gxBindInterview();
      syncUrl();
      return;
    }
    document.removeEventListener('keydown', gxBackKey);
    gxOriginalRender();
  };
  render();
})();
