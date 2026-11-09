/* ===== 成长档案 · 复古纸张版式（严格对齐 2026-10-23 设计稿 1920×1080） ===== */
(function () {
  var ca = state.careerArchive;

  /* ---------- 1. 数据 ---------- */
  ca.basicInfo = {
    gradeYear: '2025—2026学年', school: '测试学校 · 数字创意学院',
    name: '杨强', gender: '女',
    studentNo: '2025070806', idCard: '4301**********1234',
    education: '本科', phone: '138****6688',
    major: '数字媒体技术', email: 'yangq@stu.test.edu.cn',
    enrollDate: '2025年9月', duration: '四年',
    className: '数字媒体2501班', campusCard: 'C2025-07086'
  };

  /* 左侧导航：阶段分组对齐全局侧栏词汇（生涯成长/学习与认知/体验与辅导/AI应用/赛事与我的）
     icon: 1=标签块顶部有绿色嫩芽图标。设计稿里「基本信息/职业探索/职业实训/就业实习」有图标，
     「职业规划/竞赛成长」只有竖排文字没有图标，此处照设计稿保留这个差异 */
  ca.sideTagGroups = [
    { stage: '', icon: 1, tags: ['基本信息'] },
    { stage: '职业探索', icon: 1, tags: ['线上课', '微视频', '线上咨询', '预约咨询', '职业测评'] },
    { stage: '职业规划', icon: 0, tags: ['生涯体验周', '生涯活动'] },
    { stage: '职业实训', icon: 1, tags: ['AI简历', 'AI面试', '职业礼仪', '职场沟通技巧', '就业活动'] },
    { stage: '竞赛成长', icon: 0, tags: ['大学生职业规划大赛', '大学生创新大赛'] },
    { stage: '就业实习', icon: 1, tags: ['毕业意向', '宣讲会', '双选会'] },
    { stage: '', tags: ['AI助理'] }
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
      /* v54：产品口径对齐 —— 预约咨询是「线下查看咨询师列表 → 选预约类别 → 选咨询师
         → 老师接受预约 → 线下一对一咨询」。原记录只写「预约了【一对一生涯咨询】」，
         补上选类别、选咨询师、老师接受与面询完成，使 AI 卡、转化分析图、归档记录三处口径一致。
         本次不改日期 / business_type / ability_dimension，避免影响年级时间轴。 */
      { created_at: '2022年12月05日 14:38:20', business_type: '预约咨询', ability_dimension: '自我认知能力', description: '在咨询师列表选择「生涯规划」类别的咨询师预约【线下一对一生涯咨询】，老师已接受预约并完成面询，咨询主题：专业方向与职业选择' },
      { created_at: '2022年10月14日 09:27:52', business_type: '职业测评', ability_dimension: '自我认知能力', description: '完成【职业性格测评】测评，测评结果是：内向、直觉、情感、知觉' }
    ],
    '第二年': [
      { created_at: '2024年06月25日 16:45:12', business_type: '生涯体验周', ability_dimension: '职业认知能力', description: '参加了【行业体验周 · 互联网产品经理岗位】生涯体验周活动' },
      { created_at: '2024年05月16日 10:08:33', business_type: '生涯活动', ability_dimension: '职业认知能力', description: '参加了【企业开放日 · 数字创意产业园区参访】生涯活动' },
      { created_at: '2024年04月08日 21:19:44', business_type: '线上课', ability_dimension: '职业规划能力', description: '完成【行业认知与职业选择】线上课学习，累计课时 10 节' },
      /* v52：产品口径对齐 —— 微视频是「职场礼仪 / 职场问题处理」短视频，学生可点赞、转发。
         原记录写的是「数字媒体行业岗位解读」，与产品定义不符，改为职场礼仪主题并带上互动动作，
         使 AI 总结、档案时间轴、微视频模块记录三处口径一致。 */
      { created_at: '2023年11月20日 19:52:07', business_type: '微视频', ability_dimension: '职业素养能力', description: '观看了【会议礼仪与商务着装】系列微视频 6 条，点赞 4 条、转发 1 条' },
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
      /* v53：产品口径对齐 —— 线上咨询发生在云生涯Max 小程序（学生移动端），
         核心动作是「自主选择老师类别 → 线上沟通」。原记录只写「完成线上生涯咨询」，
         补上渠道与老师类别，使 AI 卡、关联分析图、下方归档记录三处口径一致。
         本次不改日期 / business_type / ability_dimension，避免影响年级时间轴。 */
      { created_at: '2024年09月25日 20:06:13', business_type: '线上咨询', ability_dimension: '自我认知能力', description: '通过云生涯Max小程序选择「生涯规划师」完成【线上生涯咨询】，咨询主题：就业与考研的权衡选择' },
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

  /* ---------- 1c. v48 · 生涯体验周专属数据 ----------
     活动名 / 地点 / 周期取自云生涯后台「生涯活动 → 生涯体验周」列表截图。
     口径转换：后台的「报名数 / 签到数 / 浏览量 / 发布状态 / 操作」是运营视角，
     学生端不照搬，改为「我是否报名 / 我是否签到 / 我沉淀了什么成果」；
     并把活动状态翻成学生语言（进行中 / 已结束），补上成果与能力维度作为成长证据。 */
  ca.experienceWeek = {
    ai: {
      diag: '你已参与 5 场生涯体验周类活动，完成签到 3 场，覆盖岗位体验、行业参访、项目实践三类场景。整体呈现「参与面广、沉淀偏浅」的态势：活动类型分布较均衡，但成果多停留在体验记录层面，缺少可复用的岗位洞察与能力证据。近两场活动存在报名后未签到情况，建议先确认时间冲突再报名。',
      advice: '优先选择与目标行业直接相关的岗位体验场，并在活动结束后 48 小时内补齐一份「岗位观察笔记」（岗位职责 / 能力要求 / 与自己的匹配度三栏）；把已获得的结业证书与调研报告关联到对应能力维度，形成可对外展示的成长证据链。'
    },
    donut: [
      { name: '岗位体验', value: 34, color: '#20CFAE' },
      { name: '行业参访', value: 24, color: '#5CC7B4' },
      { name: '项目实践', value: 20, color: '#8FB9D6' },
      { name: '职业访谈', value: 14, color: '#A8D8C0' },
      { name: '其他', value: 8, color: '#DCEFE8' }
    ],
    kpi: { joined: 5, signed: 3, days: 9, works: 3 },
    abilities: [
      { name: '职业认知', value: 82 },
      { name: '岗位体验', value: 74 },
      { name: '自我管理', value: 71 },
      { name: '协作沟通', value: 68 },
      { name: '行业理解', value: 63 }
    ],
    works: [
      { name: '生涯体验周结业证书', type: '证书', from: '生涯体验周（食创楼）', date: '2025-11-07' },
      { name: '小组调研报告 · 自然美育场景', type: '作品', from: '探索自然之美 · 风景之地活动', date: '2024-10-23' },
      { name: '职业访谈记录 · 产品经理岗', type: '记录', from: '第一届就业活动周', date: '2024-09-30' }
    ],
    activities: [
      { name: '第一届生涯体验周', place: '长沙总部', period: '2026-10-01 ~ 10-31', days: 3, type: '岗位体验', status: '进行中', signup: true, signed: false, work: '', ability: '职业认知能力' },
      { name: '生涯体验周（食创楼）', place: '长沙总部', period: '2025-11-06 ~ 11-07', days: 2, type: '岗位体验', status: '已结束', signup: true, signed: true, work: '生涯体验周结业证书', ability: '职业认知能力' },
      { name: '山西警察学院生涯体验周', place: '山西', period: '2025-07-23 ~ 07-31', days: 2, type: '行业参访', status: '已结束', signup: true, signed: false, work: '', ability: '行业理解能力' },
      { name: '《探索自然之美 · 风景之地活动》', place: '长沙', period: '2024-09-18 ~ 10-23', days: 2, type: '项目实践', status: '已结束', signup: true, signed: true, work: '小组调研报告', ability: '协作沟通能力' },
      { name: '第一届就业活动周', place: '北京', period: '2024-09-05 ~ 09-30', days: 2, type: '职业访谈', status: '已结束', signup: true, signed: true, work: '职业访谈记录', ability: '职业认知能力' }
    ]
  };
  var activeEwFilter = 'all';

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
  ca.interviewDims = ['专业知识', '表达流畅度', '学习潜力', '行业趋势'];
  ca.interviewJobs = [
    { id: 'j1', name: '行政专员', score: 68, star: true },
    { id: 'j2', name: 'PHP开发工程师', score: 72 },
    { id: 'j3', name: '大客户销售', score: 65 },
    { id: 'j4', name: '研发技术助理', score: 70 },
    { id: 'j5', name: '爬虫开发工程师', score: 60 },
    { id: 'j6', name: '系统架构设计师', score: 74 }
  ];
  ca.interviewSessions = ['第1次', '第2次', '第3次', '第4次', '第5次'];
  ca.interviewTrend = {};
  ca.interviewJobs.forEach(function (j) {
    var total = gxAscend(j.score, 5);
    var dims = {};
    ca.interviewDims.forEach(function (d, di) {
      var f = Math.max(40, Math.min(80, Math.round(j.score + (di - 1.5) * 3)));
      dims[d] = gxAscend(f, 5);
    });
    ca.interviewTrend[j.id] = { total: total, dims: dims };
  });
  ca.interviewAi = {
    diag: '基于该生成长档案中历次 AI 面试数据的纵向追踪，整体呈「稳步向好、仍有短板」的态势。首次测评时自我介绍存在卡顿与重建，回答结构不够完整；经历多轮模拟练习后，语言流畅度与表达逻辑明显提升，综合分数稳步上升。当前主要短板在于：一是岗位匹配度判断不够精准，回答与目标岗位的胜任要求贴合度有限；二是对岗位的业务流程与事务性工作了解不足，细致度与规范意识有待补强；三是临场应变与语调把控偏弱，面对追问易出现紧张。总体判断：该生已具备面试的基本素养，但距离从「能对答」到「能胜任」仍有差距，岗位匹配与临场应变是主要突破方向。',
    advice: '学生本人应面向目标岗位的任职要求，系统梳理学习与实践经历，运用 STAR 法组织 2—3 个结果导向的核心案例，突出人岗匹配度；针对薄弱环节，可通过招聘信息拆解、岗位职责分析、行业与企业研究等方式补齐认知短板，提升岗位胜任力。院校可依托真实招聘信息安排三次以上模拟面试，形成「训练—复盘—再练」的闭环，并在反馈中聚焦表达结构、语调节奏与应变策略，逐步缩小与岗位要求的差距。'
  };
  /* v38：补齐为「最近 10 次」完整序列。seq / date 供右上角统计条、10 点折线、
     10 行明细与下方「面试记录」卡共用同一数据源，保证「累计 10 次」口径不冲突。 */
  ca.interviewRecords = [
    { id: 'r1', seq: 1, date: '09-08', job: '行政专员', score: 68, status: 'pass',
      dims: { '专业知识': 72, '表达流畅度': 78, '学习潜力': 60, '行业趋势': 55 },
      report: { comment: '杨强同学在本场行政专员模拟面试中表现达到通过线。自我介绍结构完整，能结合校园行政助理经历说明事务性工作能力；在「表达流畅度」维度尤为突出，应答节奏稳定、用词得体、过渡自然。建议在「行业趋势」维度继续补强——对行政职能的数字化、合规化发展趋势了解偏浅，可通过阅读行业报告、关注办公室管理新规补齐认知短板，并准备 1—2 个流程优化的具体案例以增强岗位说服力。' } },
    { id: 'r2', seq: 2, date: '09-15', job: 'PHP开发工程师', score: 72, status: 'comment',
      dims: { '专业知识': 80, '表达流畅度': 70, '学习潜力': 66, '行业趋势': 58 },
      report: { comment: '本场 PHP 开发工程师模拟面试在「专业知识」维度表现扎实，能准确阐述框架选型、数据库索引等核心技术点，并举例课程项目中的接口开发经验。相对薄弱的是「表达流畅度」——被追问高并发场景时语速加快、出现重复表述。建议通过限时演练提升临场稳定性，答题前用 2 秒梳理要点，并在回答结尾用一句话收束核心结论，让面试官更快抓住重点。' } },
    { id: 'r3', seq: 3, date: '09-22', job: '大客户销售', score: 65, status: 'fail',
      dims: { '专业知识': 60, '表达流畅度': 74, '学习潜力': 62, '行业趋势': 57 },
      report: { comment: '本场大客户销售模拟面试未达通过线。主要失分在「行业趋势」与「专业知识」：对 To B 销售的方法论（如 SPIN、客户成功体系）掌握不足，回答偏重通用话术、缺少对目标行业的理解，解决方案式表达不够充分。建议在复盘环节先完整复述面试官问题、再分层作答，并针对销售场景做专项话术训练，重点补强行业认知与结构化表达。' } },
    { id: 'r4', seq: 4, date: '09-29', job: '研发技术助理', score: 70, status: 'generated',
      dims: { '专业知识': 75, '表达流畅度': 68, '学习潜力': 72, '行业趋势': 60 },
      report: { comment: '本场研发技术助理模拟面试报告已生成。综合评分 70 分，各维度发展较均衡：「学习潜力」与「专业知识」表现较好，能结合实验课程说明问题排查思路；「表达流畅度」略有提升空间。系统建议后续关注「行业趋势」维度的补强，并围绕一次完整的排障经历用 STAR 法组织作答，提升人岗匹配度与回答的条理性。' } },
    { id: 'r5', seq: 5, date: '10-08', job: '爬虫开发工程师', score: 60, status: 'pass',
      dims: { '专业知识': 64, '表达流畅度': 58, '学习潜力': 62, '行业趋势': 52 },
      report: { comment: '本场爬虫开发工程师模拟面试达到通过线。技术基础扎实，能清晰说明反爬策略与数据清洗流程，「专业知识」维度表现稳定。短板在「行业趋势」——对数据采集的合规边界与行业监管动态了解不足。建议补充数据合规相关知识，并在表达上采用「先结论、后细节」的结构，让面试官更快地抓住回答重点。' } },
    { id: 'r6', seq: 6, date: '10-15', job: '系统架构设计师', score: 74, status: 'comment',
      dims: { '专业知识': 82, '表达流畅度': 72, '学习潜力': 70, '行业趋势': 66 },
      report: { comment: '本场系统架构设计师模拟面试综合评分 74 分，「专业知识」维度亮眼，能就高可用、扩展性给出有层次的方案。需在「表达流畅度」上进一步精炼——方案阐述较长、偶有发散。建议用「目标—约束—取舍」的结构组织回答，并针对架构演进路径准备 1 个端到端案例，强化系统设计叙事的完整性，避免细节淹没主线。' } },
    { id: 'r7', seq: 7, date: '10-22', job: '数字媒体运营', score: 71, status: 'pass',
      dims: { '专业知识': 74, '表达流畅度': 76, '学习潜力': 70, '行业趋势': 64 },
      report: { comment: '本场数字媒体运营模拟面试达到通过线。能结合课程项目说明内容选题、投放复盘与数据指标之间的关系，「表达流畅度」与「专业知识」表现稳定。需补强的是「行业趋势」——对短视频平台算法变化与内容合规要求了解偏浅。建议梳理 1 个从选题到复盘完整闭环的运营案例，用数据说明自己的判断依据，并关注平台规则更新。' } },
    { id: 'r8', seq: 8, date: '10-29', job: '产品经理助理', score: 73, status: 'comment',
      dims: { '专业知识': 76, '表达流畅度': 74, '学习潜力': 75, '行业趋势': 67 },
      report: { comment: '本场产品经理助理模拟面试综合评分 73 分，需求分析环节能主动澄清用户场景与约束条件，「学习潜力」维度较为突出。回答的不足在于方案阐述偏发散，优先级判断缺少明确依据。建议用「用户—场景—价值—成本」四步组织作答，先给结论再展开，并准备 1 个需求取舍案例说明如何权衡实现成本与体验收益。' } },
    { id: 'r9', seq: 9, date: '11-03', job: '前端开发工程师', score: 75, status: 'generated',
      dims: { '专业知识': 80, '表达流畅度': 73, '学习潜力': 76, '行业趋势': 70 },
      report: { comment: '本场前端开发工程师模拟面试报告已生成。综合评分 75 分，「专业知识」与「学习潜力」表现较好，能清楚说明组件化设计、状态管理与性能优化的基本思路，并举例课程项目中的首屏加载优化。建议继续补强「行业趋势」，关注前端工程化与跨端方案的发展；回答技术选型时用「约束—备选—取舍」结构收束，避免只罗列技术名词。' } },
    { id: 'r10', seq: 10, date: '11-05', job: '数据分析师', score: 76, status: 'pass',
      dims: { '专业知识': 82, '表达流畅度': 75, '学习潜力': 78, '行业趋势': 72 },
      report: { comment: '本场数据分析师模拟面试表现达到通过线，是近期 10 次训练中的最好成绩。能完整说明指标拆解、数据清洗与结论验证的流程，并主动指出样本偏差对结论的影响，「专业知识」与「学习潜力」均有明显提升。后续建议聚焦「行业趋势」与业务理解：在回答中补充结论对业务决策的实际价值，并针对一次完整分析项目用 STAR 法准备端到端案例，进一步缩小与岗位要求的差距。' } }
  ];
  ca.interviewStatusText = { pass: '已通过', fail: '未通过', comment: '已点评', generated: '已生成' };
  /* v38：最近 10 次统计视图（按 seq 时间正序），右上角所有统计与明细的唯一数据源 */
  ca.interviewHistory = ca.interviewRecords.slice().sort(function (a, b) { return a.seq - b.seq; });
  ca.interviewStats = (function () {
    var h = ca.interviewHistory;
    var sum = h.reduce(function (s, r) { return s + r.score; }, 0);
    var max = h.reduce(function (m, r) { return Math.max(m, r.score); }, 0);
    var pass = h.filter(function (r) { return r.status === 'pass'; }).length;
    return {
      count: h.length,
      avg: (sum / h.length).toFixed(1),
      max: max,
      delta: h[h.length - 1].score - h[0].score,
      pass: pass
    };
  })();
  if (!activeReportId && ca.interviewRecords[0]) activeReportId = ca.interviewRecords[0].id;

  /* ---------- 1c. 职业测评数据 ---------- */
  var activeAssessTab = '职业性格测评';
  var activeAssessIndex = 0;

  ca.assessmentTabs = ['职业锚测评', '职业性格测评', '多元智能测评', '职业倾向测评', '性格测评', '心理测评'];
  ca.assessmentSummary = {
    diag: '基于该学生成长档案中历次职业测评数据的纵向追踪，整体呈「定位逐渐清晰、发展仍不均衡」的态势。低年级以兴趣探索为主，职业锚与跨类兴趣逐步收敛，价值取向从「寻找新鲜感」转向「重视成长与稳定」，生涯成熟度稳步提升；测评期在专业方向与性格匹配度上表现较好，职业方向判断趋于明确。当前瓶颈在于三点：一是能力结构与目标职业要求相比仍有差距，历次分数波动较明显；二是职业认知多停留在「知识了解」层面，缺乏真实场景的实践验证；三是行动计划与探索投入不足，测评结果向行动的转化有限。总体判断：该生已完成从「不知道做什么」到「大致知道往哪走」的跨越，从「方向清晰」迈向「能力匹配、行动落地」是当前的主要突破方向。',
    advice: '学生本人应通过职业访谈、课程学习与实习实践验证测评结论，并针对能力短板制定阶段性提升计划，借助打卡与复盘机制强化执行力。院校应搭建「低年级自我探索—中年级方向聚焦—高年级实践验证」的贯通式测评体系，将历次测评数据整合进成长档案、形成可纵向对比的成长曲线，精准识别待提升环节；针对能力短板开设专项工作坊，组织校企联动的职业体验活动，通过「档案追踪—能力补强—实践验证—复盘调整」的闭环，推动学生从「方向清晰」走向「人职匹配」。',
    donut: [
      { name: '职业锚（稳定型）', color: '#4E6FA8', value: 18 },
      { name: '人才星图（ENFP）', color: '#8FBF5A', value: 16 },
      { name: '智能（空间/音乐）', color: '#E7B84B', value: 14 },
      { name: '兴趣（社会/传统/研究…）', color: '#E8833A', value: 17 },
      { name: '性格（活泼/稳定/支配…）', color: '#DE6D93', value: 18 },
      { name: '心理（活泼性）', color: '#8E7AB5', value: 17 }
    ],
    styleTitle: '行为风格分析及建议'
  };

  /* v50 · 线上课专属 AI 总结数据
     口径：线上课 = 线上课程学习，AI 结论必须围绕「课程 / 课时 / 主题 / 完课 / 测验 / 归档」
     展开，不能复用职业测评的「职业锚 / 人才星图 / 测评结论」语义。
     数字全部对齐 ca.gradeRecords 里已归档的课程记录：
       第一年《大学生职业生涯规划》12 节 / 第二年《行业认知与职业选择》10 节 /
       第三年《职场礼仪与形象管理》8 节（business_type=职业礼仪，description 含「线上课学习」），
     合计 3 门 30 节；第四年无课程记录 → 文案中的「学习断层」与下方空态自洽。
     章节测验均分 86 分为原型示例值，接真实平台数据时需替换。 */
  ca.onlineCourseSummary = {
    diag: '归集平台线上课程学习记录：自 2023 年 3 月至今累计完成 3 门课、30 节课时，均已完课，章节测验均分 86 分。主题从《大学生职业生涯规划》12 节、《行业认知与职业选择》10 节，转向《职场礼仪与形象管理》8 节，呈「低年级定方向—中年级补素养」路径，与「直接就业 · 数字媒体运营类岗位」的毕业意向基本吻合。短板有三：第四年暂无新增课程记录，毕业学年出现学习断层；课程偏通识与规划类，缺少内容运营、数据分析等岗位技能课；归档以完课课时为主，缺少测验、笔记与作业等过程证据，难以判断知识内化程度。',
    advice: '建议毕业学年补选 1—2 门岗位技能类课程，把章节测验、笔记摘要与课程作业同步归档，形成「学习—练习—沉淀」证据链；并用《行业认知与职业选择》的岗位结论复核 AI 面试与简历记录，检验课程认知是否与真实岗位要求一致。院校侧可建立「低年级规划—中年级素养—高年级岗位技能」选课导航，对第四年断层设置提醒，把完课与测验数据关联到档案能力维度，据此推送对应课程。',
    donut: [
      { name: '职业生涯规划 · 12 节', color: '#4E6FA8', value: 40 },
      { name: '行业认知选择 · 10 节', color: '#8FBF5A', value: 33 },
      { name: '职场礼仪形象 · 8 节', color: '#E7B84B', value: 27 }
    ]
  };
  ca.assessmentRecords = {
    '职业锚测评': [
      { title: '服务型 · 生活型', type: '职业锚测评', traits: '服务与奉献、工作生活平衡', time: '2025-06-18 10:24', status: '已生成', report: null }
    ],
    '职业性格测评': [
      { title: '竞选者 ENFP型', type: '职业性格测评', traits: '外向、直觉、情感、知觉', time: '2025-09-13 00:14', status: '已生成',
        /* 源设计图仅 344x1920，铺满卡片时浏览器要放大 1.63x（Retina 3.26x），小字发虚。
           改用 4x LANCZOS + 轻度锐化版（1376x7680，与原图严格等比），浏览器改为缩小显示。
           w/h 是 SVG 补丁的逻辑坐标系；因等比放大，viewBox 与补丁坐标全部保持不变。
           若拿到 >=1120px 的高清原图，替换 src 后需按新图像素重新测量补丁坐标。
           删掉本 designImage 字段即可回退到 gxFullReport() 的纯 HTML 矢量长报告。 */
        designImage: {
          src: 'assets/enfp-assessment-report-design-4x.jpg',
          w: 344, h: 1920,
          patch: { rect: [80, 49, 135, 28], text: [89, 68], fontSize: 12, fill: '#2F382B' }
        },
        report: {
          result: 'ENFP', duration: '3分4秒', tags: '热情洋溢、富有创造力、善于社交',
          dims: [
            { l: '外向(E)', lv: 62, r: '内向(I)', rv: 38 },
            { l: '实感(S)', lv: 40, r: '直觉(N)', rv: 60 },
            { l: '理性(T)', lv: 38, r: '情感(F)', rv: 62 },
            { l: '判断(J)', lv: 40, r: '知觉(P)', rv: 60 }
          ],
          summary: '总体来看，你是一个充满活力和创新精神的人，喜欢探索新的可能性，并且善于理解他人的情感。',
          styleIntro: 'ENFP 的行为风格是开放的、富有同情心的，善于理解和欣赏他人的潜力。',
          letters: [
            { k: 'E', t: '代表外向', tone: 'a', d: '你喜欢从外部世界和他人互动中获取能量，喜欢社交活动，乐于与人交往。' },
            { k: 'N', t: '代表直觉', tone: 'b', d: '你倾向于关注未来和可能，善于发现新事物和探索新的想法。' },
            { k: 'F', t: '代表感性', tone: 'a', d: '你重视人际关系，善于理解他人的情感和需求。' },
            { k: 'P', t: '代表知觉', tone: 'b', d: '你倾向于灵活和开放，不喜欢被固定的计划或规则束缚。' }
          ],
          population: [
            { v: '2%', t: '占总人口' }, { v: '1.5%', t: '占男性' }, { v: '2.5%', t: '占女性' }
          ],
          ultimate: '追求有意义的生活和领导力的工作环境。',
          adv: [
            { t: '富有创意和想象力', d: 'ENFP类型的人通常具有强大的创造力和想象力，他们能够提出独特的想法和解决方案，这使他们在需要创新思维的工作环境中特别有价值。他们的这种特质有助于打破常规，激发团队的活力，推动项目向前发展。' },
            { t: '善于人际交往', d: 'ENFP擅长建立和维护人际关系，他们能迅速理解他人的情感需求并提供支持。这使他们在客户服务、销售、人力资源等注重人际互动的领域表现出色。他们可以成为团队中的润滑剂，促进成员之间的良好沟通和合作。' },
            { t: '热情洋溢，鼓舞人心', d: 'ENFP的个性充满热情，他们能够感染周围的人，激励同事共同追求目标。这种正能量对于需要鼓舞士气的团队来说至关重要，能够推动团队克服困难，达成共识。' }
          ],
          dis: [
            { t: '容易分心', d: '尽管ENFP们想法活跃，但他们也可能因为过于关注各种可能性而难以集中精力完成任务，这种倾向可能会导致项目延期或者质量不达标的问题。' },
            { t: '情绪化决策', d: '由于ENFP倾向于从情感角度出发考虑问题，有时可能会受情绪的影响，做出冲动的决定。这在面对重大决策时可能带来风险。' },
            { t: '避免冲突', d: 'ENFP们通常不喜欢直接对抗。为了避免引发冲突，他们可能会选择回避冲突，这可能导致一些问题得不到及时解决。' }
          ],
          improve: [
            { t: '培养专注力', d: '学习时间管理和优先级设定技巧，提高工作效率。通过设定明确的目标和截止日期来减少分心的机会。' },
            { t: '增强决策能力', d: '在决策前收集更多的信息和数据，学会平衡理性和感性因素，以便全面地考虑各种可能性。' },
            { t: '提升抗压能力', d: '练习冷静应对批评和反对意见的能力，积极参与团队讨论，敢于表达自己的观点。' }
          ],
          org: [
            { t: '鼓励开放创新的文化', d: '在一个鼓励创新和开放的环境中，ENFP们可以更好地发挥其独特的优势，贡献新的见解和方案。' },
            { t: '灵活多变的团队结构', d: '具有高灵活性的工作环境能够使ENFP们更容易找到适合自己的角色，从而最大化个人潜能和团队效能。' }
          ],
          major: { name: '软件技术', note: '您的专业为信息与计算，结合您的ENFP性格特点，您擅长利用技术解决实际问题，并且具有创新思维。' },
          industry: { name: '信息技术', match: 82 },
          jobs: [
            { title: '产品经理', salary: '5K-7K/月', industry: '其他企业（含民营企业等） 信息传输、软件和信息技术服务业', type: '校招', edu: '大专及以上', company: '长沙变化网络科技有限公司', date: '2026-10-23' },
            { title: 'UI设计师', salary: '3K-7K/月', industry: '其他企业（含民营企业等） 信息传输、软件和信息技术服务业', type: '校招', edu: '本科及以上', company: '长沙云动信息科技有限公司', date: '2027-04-06' },
            { title: '产品设计-管培生', salary: '7K-8K/月', industry: '其他企业（含民营企业等） 信息传输、软件和信息技术服务业', type: '校招', edu: '不限', company: '长沙星野品牌管理有限公司', date: '2027-06-15' }
          ],
          foot: { tip: '提示：本内容由AI生成，不能完全保障真实，仅供参考', teacher: '生涯指导老师 云就业小管家', date: '2025-09-13 00:15:33' }
        } },
      { title: '提倡者 INFJ型', type: '职业性格测评', traits: '内向、直觉、情感、判断', time: '2025-08-07 10:42', status: '已生成',
        report: {
          result: 'INFJ', duration: '31分26秒', tags: '洞察敏锐、理想主义、富有责任感',
          dims: [
            { left: '外向(E)', lv: 38, right: '内向(I)', rv: 70 },
            { left: '实感(S)', lv: 42, right: '直觉(N)', rv: 68 },
            { left: '理性(T)', lv: 50, right: '情感(F)', rv: 72 },
            { left: '判断(J)', lv: 66, right: '知觉(P)', rv: 44 }
          ],
          summary: '总体来看，你是一个富有洞察力和责任感的人，重视意义与价值，善于体察他人的需要。',
          styleText: 'INFJ 的行为风格沉稳而坚定，富有同理心，善于在复杂情境中找到方向。'
        } },
      { title: '辩论家 ENTP型', type: '职业性格测评', traits: '外向、直觉、思考、知觉', time: '2025-07-19 15:42', status: '已生成',
        report: {
          result: 'ENTP', duration: '29分51秒', tags: '思维敏捷、创意十足、喜欢挑战',
          dims: [
            { left: '外向(E)', lv: 66, right: '内向(I)', rv: 46 },
            { left: '实感(S)', lv: 44, right: '直觉(N)', rv: 70 },
            { left: '理性(T)', lv: 70, right: '情感(F)', rv: 48 },
            { left: '判断(J)', lv: 42, right: '知觉(P)', rv: 68 }
          ],
          summary: '总体来看，你是一个思维活跃、乐于探索的人，善于发现新可能，也享受观点的碰撞。',
          styleText: 'ENTP 的行为风格开放而富有挑战性，善于举一反三，也乐于推动创新。'
        } }
    ],
    '多元智能测评': [
      { title: '旋律魔杖', type: '多元智能测评', traits: '音乐智能、空间智能突出', time: '2025-05-22 09:18', status: '已生成', report: null }
    ],
    '职业倾向测评': [
      { title: '传统型 · 研究型 · 艺术型', type: '职业倾向测评', traits: '条理、探索、创造并存', time: '2025-04-11 14:06', status: '已生成',
        designImage: {
          src: 'assets/career-tendency-assessment-report-design.jpg',
          w: 1190, h: 5840,
          patch: { rect: [277, 170, 467, 97], text: [308, 235], fontSize: 41.5, fill: '#2F382B' }
        },
        report: null }
    ],
    '性格测评': [
      { title: '活泼型 · 支配型 · 完美型', type: '性格测评', traits: '活跃、果断、追求完善', time: '2025-03-28 20:33', status: '已生成', report: null }
    ],
    '心理测评': [
      { title: '紧张性 · 稳定型', type: '心理测评', traits: '情绪总体稳定，偶有紧张', time: '2025-02-16 11:47', status: '已生成', report: null }
    ]
  };

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
  /* 小绿叶：用于基座文字两侧的装饰（设计稿有，此前缺失） */
  function gxLeaf(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16z"/>' +
      '<path d="M4 20C9 15 14 10 20 4" fill="none" stroke="#FFFFFF" stroke-opacity=".5" stroke-width="1.3" stroke-linecap="round"/>' +
      '</svg>';
  }
  /* 菜单项具象图标（设计稿每项有小圆形图标；原实现仅一个纯圆点）
     用 currentColor 描边，激活态自动随白字变白 */
  function gxTagIcon(tag) {
    var d;
    if (tag.indexOf('基本信息') >= 0) d = 'M8 8.4a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zM2.8 13.4c.5-2.4 2.6-3.8 5.2-3.8s4.7 1.4 5.2 3.8';
    else if (tag.indexOf('课') >= 0 || tag.indexOf('视频') >= 0) d = 'M6.2 5.6l4.2 2.4-4.2 2.4V5.6zM2.6 3.4h10.8v9.2H2.6z';
    else if (tag.indexOf('咨询') >= 0) d = 'M13.4 8.6c0 2.5-2.4 4.5-5.4 4.5-.7 0-1.4-.1-2-.3L2.6 13.8l1-2.7A4.3 4.3 0 012.6 8.6c0-2.5 2.4-4.5 5.4-4.5s5.4 2 5.4 4.5z';
    else if (tag.indexOf('测评') >= 0) d = 'M4.4 2.8h7.2v10.4H4.4zM6.2 6h3.6M6.2 8.6h3.6';
    else if (tag.indexOf('AI') >= 0) d = 'M8 2.4l1.3 3.1L12.4 6l-3.1 1.3L8 10.4 6.7 7.3 3.6 6l3.1-.5L8 2.4z';
    else if (tag.indexOf('简历') >= 0) d = 'M4 2.6h5l3 3v7.8H4zM9 2.6v3h3';
    else if (tag.indexOf('面试') >= 0) d = 'M5.6 7.4a2 2 0 100-4 2 2 0 000 4zM2.4 12.6c.4-1.8 1.6-2.8 3.2-2.8M10.4 5.6a2 2 0 100-4 2 2 0 000 4zM9.6 9.8c1.6 0 2.8 1 3.2 2.8';
    else if (tag.indexOf('礼仪') >= 0 || tag.indexOf('沟通') >= 0) d = 'M3.4 4.6h9.2v5.2H3.4zM6 9.8L5 13l3-1.6L11 13l-1-3.2';
    else if (tag.indexOf('大赛') >= 0) d = 'M5 2.8h6v2.4a3 3 0 11-6 0V2.8zM8 8.4V11M5.6 13.2h4.8';
    else if (tag.indexOf('意向') >= 0) d = 'M8 2.6l6 2.6-6 2.6-6-2.6 6-2.6zM4 8v2.6c0 1.3 1.8 2.4 4 2.4s4-1.1 4-2.4V8';
    else d = 'M3.4 3.6h9.2v8.8H3.4zM3.4 6.4h9.2M6 2.4v2.2M10 2.4v2.2';
    return '<svg class="gx-item-ic" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>';
  }
  function gxSprig(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 78 62" aria-hidden="true">' +
      '<g fill="#EAF0DC" opacity=".92">' +
      '<path d="M40 60C26 50 16 34 18 18c9 6 22 26 22 42z"/>' +
      '<path d="M44 58C44 40 52 20 68 8c2 18-6 40-24 50z"/>' +
      '<path d="M36 62C26 54 20 42 20 30c8 6 16 20 16 32z" opacity=".75"/>' +
      '</g></svg>';
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
  /* 分组顶部嫩芽图标（绿色圆头+短茎，对齐设计稿 stage 标签顶部图标） */
  /* 标签块顶部图标：设计稿为「绿色空心环 + 一片斜出的叶 + 环下一块浅绿柔光」 */
  function gxSprout(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 24 26" aria-hidden="true">' +
      '<circle cx="10.4" cy="17.6" r="8" fill="#DEEBD7"/>' +
      '<circle cx="11" cy="10.2" r="6" fill="none" stroke="#5CAD6A" stroke-width="3.1"/>' +
      '<ellipse cx="17.8" cy="13.6" rx="3.5" ry="2.1" transform="rotate(38 17.8 13.6)" fill="#5CAD6A"/></svg>';
  }
  /* 激活胶囊右端的橄榄绿枝叶（设计稿实测：42×38 设计px，取色 #93BC51：
     上方三叶呈 V 形 + 细枝干，下方两片小叶） */
  function gxPillSprig() {
    return '<svg class="gx-item-sprig" viewBox="0 0 44 36" aria-hidden="true">' +
      '<g fill="#93BC51">' +
      '<ellipse cx="12.4" cy="9.4" rx="7.4" ry="3.5" transform="rotate(-31 12.4 9.4)"/>' +
      '<ellipse cx="31.4" cy="8.6" rx="7.4" ry="3.5" transform="rotate(29 31.4 8.6)"/>' +
      '<ellipse cx="22" cy="5.6" rx="3.5" ry="5.4"/>' +
      '<ellipse cx="12.6" cy="26.6" rx="5.8" ry="3" transform="rotate(-13 12.6 26.6)"/>' +
      '<ellipse cx="25.4" cy="28.4" rx="5" ry="2.7" transform="rotate(15 25.4 28.4)"/>' +
      '</g>' +
      '<path d="M22 3.4v16.2" stroke="#93BC51" stroke-width="1.15" stroke-linecap="round"/></svg>';
  }
  /* 「基本信息」独立分组的种子圆盘图标（浅绿圆盘+深色芯） */
  function gxSeed(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 40 40" aria-hidden="true">' +
      '<circle cx="20" cy="20" r="18" fill="#E7F1E3"/>' +
      '<circle cx="20" cy="20" r="18" fill="none" stroke="#CDE2C6" stroke-width="1.5"/>' +
      '<ellipse cx="20" cy="20" rx="3.4" ry="5" fill="#6E9463"/></svg>';
  }
  /* ---------- 3. 左侧导航（对齐 2026-10-29 设计稿：白纸面板 + 线圈装订） ---------- */
  function gxRail(actions) {
    return '<aside class="gx-rail">' +
      '<div class="gx-rail-page">' +
      '<div class="gx-brand"><span class="gx-brand-badge">' + gxClover('gx-brand-clover') + '</span><b>成长档案</b></div>' +
      '<div class="gx-groups">' +
      ca.sideTagGroups.map(function (g) {
        var items = g.tags.map(function (t) {
          var active = t === activeSideTag;
          return '<button class="gx-item' + (active ? ' active' : '') + '" data-side-tag="' + t + '">' +
            '<span>' + t + '</span>' + (active ? gxPillSprig() : '') + '</button>';
        }).join('');
        /* 既无组名也无图标的（如「AI助理」）不画标签块，胶囊与其它组右对齐 */
        if (!g.stage && !g.icon) return '<div class="gx-group gx-group--solo">' + items + '</div>';
        var tag = '<div class="gx-stage' + (g.stage ? '' : ' gx-stage--icon') + '">' +
          (g.icon ? gxSprout('gx-stage-ic') : '') +
          (g.stage ? '<span class="gx-stage-txt">' + g.stage + '</span>' : '') + '</div>';
        return '<div class="gx-group">' + tag +
          '<div class="gx-items">' + items + '</div></div>';
      }).join('') +
      '</div></div>' +
      (actions || '') +
      '</aside>';
  }

  /* ---------- 4. 基本资料卡（白卡 + 绿色标题 + 双列字段 + 右侧插画） ---------- */
  function gxBasicCard() {
    var b = ca.basicInfo;
    var left = [['毕业年份', b.gradeYear], ['姓名', b.name], ['学号', b.studentNo], ['学历', b.education], ['专业', b.major], ['入学时间', b.enrollDate], ['所在班级', b.className]];
    var right = [['学校/学院', b.school], ['性别', b.gender], ['身份证号', b.idCard], ['手机号码', b.phone], ['电子邮箱', b.email], ['学制', b.duration], ['校园卡编号', b.campusCard]];
    var col = function (rows) {
      return '<div class="gx-fcol">' + rows.map(function (r) {
        return '<p class="gx-field"><b>' + r[0] + '：</b><span>' + (r[1] || '—') + '</span></p>';
      }).join('') + '</div>';
    };
    return '<section class="gx-card gx-basic">' +
      '<div class="gx-basic-head"><h2>基本信息</h2></div>' +
      '<div class="gx-basic-body">' +
      '<div class="gx-fields">' + col(left) + col(right) + '</div>' +
      '<div class="gx-hero">' +
      '<span class="gx-hero-title">成长档案</span>' +
      '<span class="gx-hero-slogan">' + gxLeaf('gx-hero-leaf') + '聚焦成长轨迹，见证青春绽放' + gxLeaf('gx-hero-leaf gx-hero-leaf--flip') + '</span>' +
      '</div>' +
      '</div></section>';
  }

  /* ---------- 5. AI 总结及建议（标题 + 年份 Tab + 雷达 / 总结建议 / 记录时间线） ---------- */
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
  /* 设计稿结构：卡头部（标题左 + 年份 Tab 右），身体三栏（雷达 / 总结建议 / 记录） */
  function gxAiCard() {
    var records = ca.gradeRecords[activeArchiveGrade] || [];
    return '<section class="gx-card gx-ai-card">' +
      '<div class="gx-ai-head">' +
      '<h3 class="gx-ai-title">AI总结及建议</h3>' +
      '<div class="gx-tabs">' + ca.gradeStages.map(function (x) {
        return '<button class="' + (x.id === activeArchiveGrade ? 'active' : '') + '" data-archive-grade="' + x.id + '">' + x.title + '</button>';
      }).join('') + '</div>' +
      '</div>' +
      '<div class="gx-ai-body">' +
      '<div class="gx-radar">' + gxRadar() + '</div>' +
      '<div class="gx-ai-text"><h4>总结：</h4><p>' + ca.aiSummary.total + '</p>' +
      '<h4>建议：</h4><p>' + ca.aiSummary.advice + '</p></div>' +
      '<div class="gx-time">' +
      (records.length ? gxRecs(records)
        : '<div class="gx-records-empty"><p>' + activeArchiveGrade + '暂无成长记录</p></div>') +
      '</div>' +
      '</div></section>';
  }

  function gxRadar6(dims) {
    var ds = ca.interviewDims.map(function (n) { return { name: n, value: dims[n] || 0 }; });
    return gxRadar(ds);
  }

  /* ---------- 6. 学年时间线（日期 + 绿/蓝双色标签 + 描述） ---------- */
  function gxRecs(records, extraCls) {
    return '<div class="gx-records' + (extraCls || '') + '">' + records.map(function (x) {
      return '<article class="gx-record"><i class="gx-node"></i>' +
        '<div class="gx-meta"><time>' + x.created_at + '</time>' +
        '<em class="gx-tag gx-tag-a">' + x.business_type + '</em>' +
        '<em class="gx-tag gx-tag-b">' + x.ability_dimension + '</em></div>' +
        '<p>' + x.description + '</p></article>';
    }).join('') + '</div>';
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
    var isAbility = page === 'ability';
    return '<div class="page-head gx-head">' +
      '<div><h1>' + (isAbility ? '能力画像' : '成长档案') + '</h1>' +
      '<p>' + (isAbility
        ? '按能力维度汇总测评、课程、实践等成长证据，呈现你的能力发展画像'
        : '统一归集测评、课程、活动、竞赛等成长记录，并按学年形成成长时间线') + '</p></div>' +
      '</div>';
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

  function gxBarChart(dims, colors) {
    var keys = ca.interviewDims;
    var W = 444, H = 204, padL = 28, padR = 10, padT = 18, padB = 30;
    var plotW = W - padL - padR, plotH = H - padT - padB, max = 100;
    var n = keys.length, slot = plotW / n, bw = Math.min(52, slot * 0.5);
    function y(v) { return padT + plotH * (1 - v / max); }
    var grid = [0, 25, 50, 75, 100].map(function (g) {
      var yy = y(g);
      return '<line x1="' + padL + '" y1="' + yy.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + yy.toFixed(1) + '" class="gx-grid-line"/>' +
        '<text x="' + (padL - 5) + '" y="' + (yy + 3).toFixed(1) + '" text-anchor="end" class="gx-grid-text">' + g + '</text>';
    }).join('');
    var bars = keys.map(function (k, i) {
      var v = dims[k] || 0;
      var x0 = padL + slot * i + (slot - bw) / 2;
      var y0 = y(v), h = padT + plotH - y0, cx = x0 + bw / 2;
      var color = colors ? colors[i % colors.length] : '#7E9A68';
      return '<rect x="' + x0.toFixed(1) + '" y="' + y0.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="4" fill="' + color + '"/>' +
        '<text x="' + cx.toFixed(1) + '" y="' + (y0 - 6).toFixed(1) + '" text-anchor="middle" class="gx-bar-val">' + v + '</text>' +
        '<text x="' + cx.toFixed(1) + '" y="' + (H - 9).toFixed(1) + '" text-anchor="middle" class="gx-bar-lab">' + k + '</text>';
    }).join('');
    return '<svg class="gx-barchart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="报告总结柱状图">' +
      '<g class="gx-grid">' + grid + '</g>' + bars + '</svg>';
  }

  function gxMiniBars(dims) {
    var keys = ca.interviewDims;
    return '<div class="gx-rec-bars">' + keys.map(function (k) {
      var v = dims[k] || 0;
      return '<div class="gx-rec-bar"><span class="gx-rec-bar-lab">' + k + '</span>' +
        '<div class="gx-rec-bar-track"><i style="width:' + v + '%"></i></div>' +
        '<span class="gx-rec-bar-val">' + v + '</span></div>';
    }).join('') + '</div>';
  }

  function gxInterviewAi() {
    return '<section class="gx-card gx-ai-card">' +
      '<div class="gx-card-head"><div class="gx-card-titles"><h3>AI总结及建议</h3>' +
      '<p>基于你历次 AI 模拟面试的纵向追踪</p></div></div>' +
      '<div class="gx-ai-card-body">' +
      '<h4 class="gx-ai-sub">诊断总结</h4><p>' + ca.interviewAi.diag + '</p>' +
      '<h4 class="gx-ai-sub">后续建议</h4><p>' + ca.interviewAi.advice + '</p>' +
      '</div></section>';
  }

  function gxInterviewTrendInner() {
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
      return '<button class="' + (j.id === activeInterviewJob ? 'active' : '') + '" data-interview-job="' + j.id + '">' +
        (j.star ? '<i class="gx-job-star" aria-hidden="true">★</i>' : '') +
        '<span>' + j.name + '</span><em>' + j.score + '</em></button>';
    }).join('');
    var modeBtns = [
      { k: 'total', n: '总分趋势' }, { k: 'dim', n: '维度对比' }
    ].map(function (m) {
      return '<button class="' + (activeTrendMode === m.k ? 'active' : '') + '" data-trend-mode="' + m.k + '">' + m.n + '</button>';
    }).join('');
    return '<div class="gx-card-head gx-trend-head"><div class="gx-card-titles"><h3>成绩趋势</h3>' +
      '<p>基于你目标岗位的能力成长曲线</p></div>' +
      '<div class="gx-trend-modes">' + modeBtns + '</div></div>' +
      '<div class="gx-trend-jobs">' + jobTabs + '</div>' +
      legend +
      '<div class="gx-trend-chart">' + gxLineChart(series, labels) + '</div>';
  }
  /* v37 回滚路径：独立的「成绩趋势」卡。现已整块并入顶部整宽卡的右栏。 */
  function gxInterviewTrend() {
    return '<section class="gx-card gx-trend">' + gxInterviewTrendInner() + '</section>';
  }

  function gxInterviewRecords() {
    var list = ca.interviewRecords.filter(function (r) {
      return activeRecordFilter === 'all' || r.status === activeRecordFilter;
    });
    var filters = [
      { k: 'all', n: '全部' }, { k: 'pass', n: '已通过' }, { k: 'fail', n: '未通过' }, { k: 'comment', n: '已点评' }, { k: 'generated', n: '已生成' }
    ].map(function (f) {
      return '<button class="' + (activeRecordFilter === f.k ? 'active' : '') + '" data-record-filter="' + f.k + '">' + f.n + '</button>';
    }).join('');
    var items = list.length ? list.map(function (r) {
      var cls = 'gx-rec-item' + (r.id === activeReportId ? ' active' : '');
      return '<article class="' + cls + '" data-report-id="' + r.id + '">' +
        '<div class="gx-rec-top"><b>' + r.job + '</b><span class="gx-rec-score">' + r.score + ' 分</span></div>' +
        gxMiniBars(r.dims) +
        '<div class="gx-rec-foot"><em class="gx-rec-status gx-rec-status--' + r.status + '">' + ca.interviewStatusText[r.status] + '</em>' +
        '<button class="gx-rec-view" data-report-id="' + r.id + '" type="button">查看报告 ›</button></div>' +
        '</article>';
    }).join('') : '<div class="gx-records-empty"><p>暂无符合条件的面试记录</p></div>';
    return '<section class="gx-card gx-recs-card">' +
      '<div class="gx-card-head"><div class="gx-card-titles"><h3>面试记录</h3></div></div>' +
      '<p class="gx-recs-desc">基于你目标岗位的多次模拟面试，系统已为你生成结构化成长记录</p>' +
      '<div class="gx-recs-filters">' + filters + '</div>' +
      '<div class="gx-recs-list">' + items + '</div>' +
      '</section>';
  }

  function gxInterviewReport() {
    var rec = ca.interviewRecords.filter(function (r) { return r.id === activeReportId; })[0] || ca.interviewRecords[0];
    if (!rec) return '<section class="gx-card gx-report"><div class="gx-records-empty"><p>暂无面试报告</p></div></section>';
    var barColors = ['#7E9A68', '#C98B5E', '#6E9B9F', '#B0769B'];
    return '<section class="gx-card gx-report">' +
      '<h3 class="gx-report-title">AI面试报告</h3>' +
      '<div class="gx-report-body">' +
      '<div class="gx-report-head2">' +
      '<div class="gx-report-score"><span class="gx-report-score-label">面试表现</span><b class="gx-report-score-num">' + rec.score + '</b></div>' +
      '<div class="gx-report-chart">' + gxBarChart(rec.dims, barColors) + '</div>' +
      '</div>' +
      '<div class="gx-report-advice"><h4>专业分析建议</h4><p>' + (rec.report.comment || '') + '</p></div>' +
      '</div>' +
      '</section>';
  }

  /* ---------- v38：右上角统计区（面试次数统计 + 10 点成绩趋势 + 10 次明细） ----------
     用户口径：不设标题，全部集中在一个区域内；顶部卡仍锁 306px，右栏内部滚动。
     原「成绩趋势」的岗位按钮 / 维度对比 / 卡片标题整体退役（函数保留作回滚）。 */
  function gxTenPointChart(h) {
    var W = 560, H = 116, padL = 28, padR = 12, padT = 10, padB = 20;
    var plotW = W - padL - padR, plotH = H - padT - padB, min = 40, max = 100;
    function x(i) { return padL + plotW * i / (h.length - 1); }
    function y(v) { return padT + plotH * (1 - (v - min) / (max - min)); }
    var grid = [40, 60, 80, 100].map(function (g) {
      var yy = y(g).toFixed(1);
      return '<line x1="' + padL + '" y1="' + yy + '" x2="' + (W - padR) + '" y2="' + yy + '" stroke="#E7F3EC" stroke-width="1"/>' +
        '<text x="' + (padL - 5) + '" y="' + (Number(yy) + 3).toFixed(1) + '" text-anchor="end" font-size="9" fill="#A3B8AE">' + g + '</text>';
    }).join('');
    var pts = h.map(function (r, i) { return x(i).toFixed(1) + ' ' + y(r.score).toFixed(1); });
    var line = 'M' + pts.join(' L');
    var area = line + ' L' + x(h.length - 1).toFixed(1) + ' ' + (H - padB) + ' L' + x(0).toFixed(1) + ' ' + (H - padB) + ' Z';
    var dots = h.map(function (r, i) {
      return '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(r.score).toFixed(1) + '" r="2.4" fill="#20CFAE" stroke="#fff" stroke-width="1"/>';
    }).join('');
    var xlab = h.map(function (r, i) {
      return '<text x="' + x(i).toFixed(1) + '" y="' + (H - 5) + '" text-anchor="middle" font-size="9" fill="#8AA79A">第' + r.seq + '次</text>';
    }).join('');
    return '<svg class="gx-istat-svg" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="最近10次面试成绩趋势折线图">' +
      '<defs><linearGradient id="gxIstatFill" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#20CFAE" stop-opacity=".26"/>' +
      '<stop offset="100%" stop-color="#20CFAE" stop-opacity="0"/></linearGradient></defs>' +
      grid + '<path d="' + area + '" fill="url(#gxIstatFill)"/>' +
      '<path d="' + line + '" fill="none" stroke="#20CFAE" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' +
      dots + xlab + '</svg>';
  }
  function gxInterviewStatsInner() {
    var h = ca.interviewHistory, st = ca.interviewStats;
    var cards = [
      { lab: '累计面试', val: st.count, unit: '次' },
      { lab: '平均成绩', val: st.avg, unit: '分' },
      { lab: '最高成绩', val: st.max, unit: '分' },
      { lab: '较首次提升', val: (st.delta >= 0 ? '+' : '') + st.delta, unit: '分' }
    ].map(function (c) {
      return '<div class="gx-istat-card"><span>' + c.lab + '</span><b>' + c.val + '<em>' + c.unit + '</em></b></div>';
    }).join('');
    var rows = h.slice().reverse().map(function (r) {
      return '<div class="gx-istat-row">' +
        '<span class="gx-istat-seq">第' + r.seq + '次</span>' +
        '<span class="gx-istat-date">' + r.date + '</span>' +
        '<span class="gx-istat-job" title="' + gxEsc(r.job) + '">' + gxEsc(r.job) + '</span>' +
        '<span class="gx-istat-score">' + r.score + ' 分</span>' +
        '</div>';
    }).join('');
    return '<div class="gx-istat-strip">' + cards + '</div>' +
      '<div class="gx-istat-chart">' + gxTenPointChart(h) + '</div>' +
      '<div class="gx-istat-list">' +
        '<div class="gx-istat-row gx-istat-row--head"><span>面试次数</span><span>日期</span><span>面试岗位</span><span>成绩</span></div>' +
        rows +
      '</div>';
  }

  /* ---------- v44：右上角按设计图重做为「成绩趋势」卡 ----------
     图：青绿竖条标题「成绩趋势」+「总分趋势 / 维度对比」分段切换 +
         0/25/50/75/100 虚线网格折线图 + 右下角「仅展示已完成的面试记录」。
     v38 的 10 次统计条 / 10 行岗位明细退役（gxInterviewStatsInner 保留作回滚）。
     数据源仍是 ca.interviewHistory（最近 10 次），与下方「面试记录」口径一致。 */
  function gxSmoothPath(pts) {
    if (pts.length < 2) return '';
    var d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ' C' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ',' +
        c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ',' +
        p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
    }
    return d;
  }
  function gxTrendSvg(series, n) {
    /* v45：按设计稿把 X 轴绘图带收窄（左右留白 42/34，原 34/12），
       网格 / 坐标文字统一换成报告薄荷青绿的浅灰调。 */
    var W = 480, H = 190, L = 42, R = 34, T = 10, B = 24;
    var pw = W - L - R, ph = H - T - B;
    function X(i) { return L + (n <= 1 ? pw / 2 : pw * i / (n - 1)); }
    function Y(v) { return T + ph * (1 - v / 100); }
    var grid = [0, 25, 50, 75, 100].map(function (g) {
      var yy = Y(g).toFixed(1);
      return '<line x1="' + L + '" y1="' + yy + '" x2="' + (W - R) + '" y2="' + yy +
        '" stroke="#DCEFEA" stroke-width="1" stroke-dasharray="4 4"/>' +
        '<text x="' + (L - 7) + '" y="' + (Number(yy) + 3).toFixed(1) +
        '" text-anchor="end" font-size="10" fill="#93AFA9">' + g + '</text>';
    }).join('');
    var xlab = [];
    for (var i = 0; i < n; i++) {
      xlab.push('<text x="' + X(i).toFixed(1) + '" y="' + (H - 6) +
        '" text-anchor="middle" font-size="10" fill="#93AFA9">' + (i + 1) + '</text>');
    }
    var lines = series.map(function (s) {
      var pts = s.values.map(function (v, i) { return [X(i), Y(v)]; });
      var dots = pts.map(function (p) {
        return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) +
          '" r="' + (series.length > 1 ? 3 : 4.2) + '" fill="#FFFFFF" stroke="' + s.color +
          '" stroke-width="2"/>';
      }).join('');
      return '<path d="' + gxSmoothPath(pts) + '" fill="none" stroke="' + s.color +
        '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' + dots;
    }).join('');
    return '<svg class="gx-tr-svg" viewBox="0 0 ' + W + ' ' + H +
      '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="面试成绩趋势折线图">' +
      grid +
      '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) + '" stroke="#8BAC9F" stroke-width="1.2"/>' +
      '<line x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '" stroke="#8BAC9F" stroke-width="1.2"/>' +
      lines + xlab.join('') + '</svg>';
  }
  function gxInterviewTrendCardInner() {
    var h = ca.interviewHistory, n = h.length;
    var totalMode = activeTrendMode !== 'dim';
    var series;
    if (totalMode) {
      series = [{ color: '#20CFAE', values: h.map(function (r) { return r.score; }) }];
    } else {
      var dims = ['专业知识', '表达流畅度', '学习潜力', '行业趋势'];
      /* v45：橙/紫/粉与报告薄荷青绿冲突，收敛到同色系的不同明度，
         末位保留一个柔和蓝（报告长图里的蓝色标签带）。 */
      var colors = ['#0E9A80', '#20CFAE', '#5CC7B4', '#8FB9D6'];
      series = dims.map(function (d, i) {
        return { name: d, color: colors[i], values: h.map(function (r) { return r.dims[d]; }) };
      });
    }
    var legend = totalMode ? '' : '<div class="gx-tr-legend">' + series.map(function (s) {
      return '<span><i style="background:' + s.color + '"></i>' + s.name + '</span>';
    }).join('') + '</div>';
    /* v45：用户明确「不要那个成绩趋势标题」，标题 + 青绿竖条整块移除，
       右上角直接从「总分趋势 / 维度对比」分段切换起头。 */
    return '<div class="gx-tr-modes">' +
        '<button class="' + (totalMode ? 'active' : '') + '" data-trend-mode="total" type="button">总分趋势</button>' +
        '<button class="' + (!totalMode ? 'active' : '') + '" data-trend-mode="dim" type="button">维度对比</button>' +
      '</div>' + legend +
      '<div class="gx-tr-chart">' + gxTrendSvg(series, n) + '</div>' +
      '<div class="gx-tr-note">仅展示已完成的面试记录</div>';
  }

  /* ---------- v38：顶部整宽卡合并为一个区域（去掉右侧标题与竖分隔线） ---------- */
  function gxInterviewTop() {
    return '<section class="gx-card gx-interview-top">' +
      '<div class="gx-interview-top-ai">' +
        '<h3 class="gx-interview-top-h">AI总结及建议</h3>' +
        '<p class="gx-interview-top-sub">基于你历次 AI 模拟面试的纵向追踪</p>' +
        '<div class="gx-interview-top-text">' +
          '<h4 class="gx-ai-sub">诊断总结</h4><p>' + ca.interviewAi.diag + '</p>' +
          '<h4 class="gx-ai-sub">后续建议</h4><p>' + ca.interviewAi.advice + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="gx-interview-top-trend-card">' + gxInterviewTrendCardInner() + '</div>' +
    '</section>';
  }

  /* ---------- v37：真实 AI 面试报告设计长图 ---------- */
  function gxInterviewImageReport() {
    /* 源图仅 221x1920，铺满卡片要放大约 2.5x；改用 4x LANCZOS + 轻度锐化版
       （884x7680，严格等比），浏览器改为缩小显示。w/h 与 SVG 补丁沿用原图
       221x1920 逻辑坐标系，等比放大后坐标全部保持不变。
       页眉姓名墨迹实测 x57–105 / y36–44；白卡纯白区从 y32 开始，补丁底色取 #FBFDFD。
       把 gxInterviewSheet() 里的调用改回 gxInterviewReport() 即可回到纯 HTML 报告。 */
    var di = {
      src: 'assets/ai-interview-report-design-4x.jpg',
      w: 221, h: 1920,
      patch: { rect: [54, 32, 145, 16], text: [57, 43.5], fontSize: 9, fill: '#2F382B' }
    };
    var p = di.patch;
    var label = gxEsc(ca.basicInfo.name + ' · 测试学生');
    var rect = '<rect x="' + p.rect[0] + '" y="' + p.rect[1] +
      '" width="' + p.rect[2] + '" height="' + p.rect[3] + '" fill="#FBFDFD"/>';
    var text = '<text x="' + p.text[0] + '" y="' + p.text[1] +
      '" font-size="' + p.fontSize + '" font-weight="600"' +
      ' font-family="PingFang SC, Microsoft YaHei, sans-serif"' +
      ' fill="' + p.fill + '">' + label + '</text>';
    /* v40：用户明确「我只要你把 AI 面试报告区域用这种图展示」。
       去掉 v39 自作主张加的查看切换与说明，报告卡里就是这一张原图，
       按原生 221px 1:1 显示（不放大、不插值），卡片内上下滚动看完整份报告。
       SVG 姓名补丁以 .gx-rpt-image 为包含块，随容器一起是 221px，坐标系 1:1 对齐。 */
    return '<section class="gx-card gx-report gx-report--image">' +
      '<div class="gx-report-body gx-rpt-body">' +
        '<div class="gx-rpt-image">' +
          '<img class="gx-rpt-image-src" src="' + di.src + '"' +
            ' width="' + di.w + '" height="' + di.h + '"' +
            ' alt="' + gxEsc('AI面试报告：' + ca.basicInfo.name + ' · 测试学生') + '">' +
          '<svg class="gx-rpt-name-patch" viewBox="0 0 ' + di.w + ' ' + di.h + '"' +
            ' preserveAspectRatio="none" aria-hidden="true">' + rect + text + '</svg>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---------- v38：AI 面试报告 · HTML 矢量重建 ----------
     用户反馈 221x1920 位图报告「不够清晰」，本地不存在高清原图，4x 重采样也救不回
     4~5px 高的中文笔画。改为浏览器矢量渲染：文字、头像、条形图、渐变全部由 HTML/CSS/SVG
     绘制，任意缩放都锐利；配色沿用真实报告的薄荷青绿（#20CFAE / #A2F0C0 / #EAFCF6）。
     内容取自当前选中的面试记录 + 最近 10 次统计，点击「查看报告」会同步刷新。
     回滚到位图：把 gxInterviewSheet() 里的 gxInterviewVectorReport() 改回 gxInterviewImageReport()。 */
  function gxIrAvatar() {
    return '<svg viewBox="0 0 48 48" aria-hidden="true">' +
      '<circle cx="24" cy="24" r="23" fill="#D9F5EA"/>' +
      '<path d="M12 41c1.4-8.4 5.8-12.4 12-12.4S34.6 32.6 36 41z" fill="#4FD3B2"/>' +
      '<circle cx="24" cy="19.5" r="8.3" fill="#FBEADB"/>' +
      '<path d="M15.6 19.2c-.4-6.2 3.4-9.6 8.4-9.6s8.8 3.4 8.4 9.6c-1.3-3.2-4.2-5.1-8.4-5.1s-7.1 1.9-8.4 5.1z" fill="#2F382B"/>' +
      '<circle cx="21" cy="20" r="1" fill="#2F382B"/><circle cx="27" cy="20" r="1" fill="#2F382B"/>' +
      '<path d="M22 23.6c1.2 1 2.8 1 4 0" fill="none" stroke="#C98B72" stroke-width="1" stroke-linecap="round"/>' +
      '</svg>';
  }
  function gxIrBars(rec, baseline) {
    var head = '<div class="gx-ir-bar-head"><span>能力维度</span><span>本次得分</span><span>近10次参考</span></div>';
    var rows = ca.interviewDims.map(function (k) {
      var v = rec.dims[k] || 0;
      return '<div class="gx-ir-bar-row">' +
        '<span class="gx-ir-bar-lab">' + k + '</span>' +
        '<div class="gx-ir-bar-track"><i style="width:' + v + '%"></i></div>' +
        '<span class="gx-ir-bar-val">' + v + '<em>/ ' + baseline + '</em></span>' +
        '</div>';
    }).join('');
    return '<div class="gx-ir-bars">' + head + rows + '</div>';
  }
  function gxIrSection(n, title, inner) {
    return '<section class="gx-ir-sec">' +
      '<h4 class="gx-ir-sec-h"><i>' + n + '</i>' + title + '</h4>' +
      '<div class="gx-ir-card">' + inner + '</div>' +
      '</section>';
  }
  function gxInterviewVectorReport() {
    var rec = ca.interviewRecords.filter(function (r) { return r.id === activeReportId; })[0] || ca.interviewRecords[0];
    if (!rec) return '<section class="gx-card gx-report"><div class="gx-records-empty"><p>暂无面试报告</p></div></section>';
    var st = ca.interviewStats;
    var name = gxEsc(ca.basicInfo.name + ' · 测试学生');
    var baseline = Math.round(Number(st.avg));
    var sec1 = '<p class="gx-ir-p">本场「' + gxEsc(rec.job) + '」模拟面试综合得分 <b>' + rec.score +
      ' 分</b>，最近 10 次训练平均 ' + st.avg + ' 分、最高 ' + st.max + ' 分，整体呈稳步向好、仍有短板的态势。' +
      '系统在专业知识、表达流畅度、学习潜力、行业趋势四个维度完成结构化评估，并据此生成能力画像与提升建议。</p>' +
      '<p class="gx-ir-p">' + gxEsc(ca.interviewAi.diag) + '</p>';
    var sec2 = gxIrBars(rec, baseline) +
      '<p class="gx-ir-p">相对最近 10 次参考线，「' + gxEsc(ca.interviewDims.reduce(function (best, k) {
        return (rec.dims[k] || 0) > (rec.dims[best] || 0) ? k : best;
      }, ca.interviewDims[0])) + '」为本次优势维度；建议优先补强得分最低的维度，并结合目标岗位要求准备可验证的案例。</p>';
    var sec3 = '<p class="gx-ir-p">' + gxEsc(rec.report.comment || '') + '</p>' +
      gxIrBars(rec, baseline);
    var sec4 = '<p class="gx-ir-p">结合纵向追踪结果，建议围绕岗位匹配度、表达结构与临场应变三条主线持续改进：' +
      '一是以目标岗位的任职要求为标尺，系统梳理学习与实践经历；二是运用 STAR 法组织 2—3 个结果导向的核心案例；' +
      '三是针对薄弱环节做专项演练，形成「训练—复盘—再练」的闭环。</p>' +
      '<p class="gx-ir-p">' + gxEsc(ca.interviewAi.advice) + '</p>';
    var sec5 = '<div class="gx-ir-pass"><span class="gx-ir-pass-ico">✓</span>' +
      '<div><b>阶段结论</b><p>已完成 ' + st.count + ' 次 AI 模拟面试，其中 ' + st.pass +
      ' 次达到通过线；最近一次较首次提升 ' + st.delta + ' 分，具备面试基本素养，岗位匹配与临场应变是下一阶段主要突破方向。</p></div></div>' +
      '<ul class="gx-ir-tips">' +
      '<li><i>1</i>面向目标岗位拆解任职要求，逐条对应准备经历与案例</li>' +
      '<li><i>2</i>每次训练后完整复盘，记录卡的作答结构与被追问的薄弱点</li>' +
      '<li><i>3</i>补强行业认知，关注岗位所在领域的政策、流程与发展趋势</li>' +
      '</ul>';
    return '<section class="gx-card gx-report gx-report--vector">' +
      '<div class="gx-ir-scroll">' +
        '<div class="gx-ir-hero">' +
          '<div class="gx-ir-hero-title">AI面试报告</div>' +
          '<div class="gx-ir-ai">AI</div>' +
          '<div class="gx-ir-hero-deco" aria-hidden="true"></div>' +
        '</div>' +
        '<div class="gx-ir-body">' +
          '<div class="gx-ir-person">' +
            '<span class="gx-ir-avatar" aria-hidden="true">' + gxIrAvatar() + '</span>' +
            '<div class="gx-ir-person-info"><b>' + name + '</b>' +
              '<ul class="gx-ir-meta">' +
                '<li><span>测评岗位</span><em>' + gxEsc(rec.job) + '</em></li>' +
                '<li><span>综合评分</span><em>' + rec.score + ' 分</em></li>' +
                '<li><span>测评日期</span><em>2026-' + rec.date + '</em></li>' +
                '<li><span>报告编号</span><em>AI-IV-' + rec.id.toUpperCase() + '</em></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          gxIrSection('一', '报告总结', sec1) +
          gxIrSection('二', '能力分析及建议', sec2) +
          gxIrSection('三', '面试表现分析', sec3) +
          gxIrSection('四', '专业分析建议', sec4) +
          gxIrSection('五', '面试建议及提升', sec5) +
          '<p class="gx-ir-foot">本报告由 AI 模拟面试系统依据历次作答自动生成，仅供生涯规划与训练复盘参考。</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function gxInterviewSheet() {
    /* v39 分布：顶部整宽卡合并为「一个区域」——左 AI 总结及建议文字，右无标题统计区
       （统计条 + 10 点折线 + 10 次明细，右栏内滚动），无竖分隔线、无右侧卡片标题；
       高度沿用 --gx-ai-card-h=306px 与职业测评页一致。
       下方左「面试记录」/ 右「真实 AI 面试报告原图长图」两栏，各自整高、卡内滚动，
       并带「适应宽度 / 原图 1:1」查看切换（用户口径：报告那里就展示原图报告）。
       gxInterviewVectorReport() 保留为 v38 矢量版回滚路径，当前不调用。
       回滚 v37：gxInterviewTop() 右栏换回 gxInterviewTrendInner() 并恢复 v37 CSS。 */
    return '<div class="gx-sheet gx-sheet-interview">' +
      gxInterviewTop() +
      '<div class="gx-interview-bottom">' +
        gxInterviewRecords() +
        gxInterviewImageReport() +
      '</div>' +
    '</div>';
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

  /* ---------- 8c. 职业测评详情 ---------- */
  function gxDonut(items, size) {
    size = size || 168;
    var cx = size / 2, cy = size / 2, r = size * 0.335, sw = size * 0.17;
    var total = items.reduce(function (s, i) { return s + i.value; }, 0);
    var a = -Math.PI / 2, paths = '';
    items.forEach(function (it) {
      var ang = it.value / total * Math.PI * 2;
      var a0 = a, a1 = a + ang;
      var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
      var x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      var large = ang > Math.PI ? 1 : 0;
      paths += '<path d="M' + x0.toFixed(2) + ' ' + y0.toFixed(2) + ' A' + r.toFixed(2) + ' ' + r.toFixed(2) +
        ' 0 ' + large + ' 1 ' + x1.toFixed(2) + ' ' + y1.toFixed(2) + '" fill="none" stroke="' + it.color +
        '" stroke-width="' + sw.toFixed(2) + '" stroke-linecap="butt"/>';
      a = a1;
    });
    return '<svg class="gx-donut" viewBox="0 0 ' + size + ' ' + size + '" role="img" aria-label="测评结果概览环形图">' +
      '<g>' + paths + '</g></svg>';
  }
  function gxBars() {
    return '<svg viewBox="0 0 16 16" aria-hidden="true"><g fill="#7E9A68">' +
      '<rect x="2" y="8" width="2.6" height="6" rx="1.2"/>' +
      '<rect x="6.7" y="5" width="2.6" height="9" rx="1.2"/>' +
      '<rect x="11.4" y="2" width="2.6" height="12" rx="1.2"/></g></svg>';
  }
  function gxAvatar() {
    return '<svg viewBox="0 0 40 40" aria-hidden="true">' +
      '<circle cx="20" cy="20" r="19" fill="#EDF1E2"/>' +
      '<circle cx="20" cy="15" r="6.6" fill="#B9C7A2"/>' +
      '<path d="M8 34c1.5-7 6.6-10 12-10s10.5 3 12 10z" fill="#B9C7A2"/></svg>';
  }

  /* v50：支持注入专属 summary（线上课用 ca.onlineCourseSummary）。
     不传参时行为与 v36 完全一致，职业测评页与其它 15 个通用模块页零改动。 */
  function gxAssessAi(summary, extraClass) {
    var a = summary || ca.assessmentSummary;
    var cls = 'gx-card gx-assess-ai' + (extraClass ? ' ' + extraClass : '');
    var legend = a.donut.map(function (d) {
      return '<li><i style="background:' + d.color + '"></i><span>' + d.name + '</span></li>';
    }).join('');
    return '<section class="' + cls + '">' +
      '<div class="gx-assess-ai-text">' +
      '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
      '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
      '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz">' +
      '<div class="gx-donut-wrap">' + gxDonut(a.donut, 156) + '</div>' +
      '<ul class="gx-donut-legend">' + legend + '</ul>' +
      '</div>' +
      '</section>';
  }

  function gxAssessRecs() {
    var tabs = ca.assessmentTabs.map(function (t) {
      return '<button class="' + (t === activeAssessTab ? 'active' : '') + '" data-assess-tab="' + t + '">' + t + '</button>';
    }).join('');
    var recs = ca.assessmentRecords[activeAssessTab] || [];
    var list = recs.length ? recs.map(function (r, i) {
      var active = i === activeAssessIndex;
      return '<article class="gx-arec' + (active ? ' active' : '') + '" data-assess-index="' + i + '">' +
        '<div class="gx-arec-main">' +
        '<div class="gx-arec-head"><b>' + r.title + '</b><em class="gx-arec-badge">' + r.type + '</em></div>' +
        '<p class="gx-arec-traits">' + r.traits + '</p>' +
        '<p class="gx-arec-time">测评时间：' + r.time + '</p>' +
        '</div>' +
        '<div class="gx-arec-side"><span class="gx-arec-status">' + r.status + '</span>' +
        '<span class="gx-arec-illu" aria-hidden="true">' + gxAvatar() + '</span></div>' +
        '</article>';
    }).join('') : '<div class="gx-records-empty"><p>该测评暂无记录</p></div>';
    /* tabs / spacer / 测评记录 / 报告 直接作为 .gx-assess-bottom 的 4 个网格项，
       让报告卡与左卡同处第二行、顶底对齐（原先 .gx-assess-left 包装导致报告卡高约 44px）。 */
    return '<div class="gx-assess-tabs">' + tabs + '</div>' +
      '<div class="gx-assess-tabs-spacer" aria-hidden="true"></div>' +
      '<section class="gx-card gx-assess-recs">' +
      '<h3 class="gx-assess-recs-title">测评记录</h3>' +
      '<div class="gx-arec-list">' + list + '</div>' +
      '</section>';
  }

  /* 完整版职业性格测评报告（对齐设计稿竖版长报告） */
  function gxFullReport(rep) {
    var dims = rep.dims.map(function (d) {
      return '<div class="gx-rpt-dim">' +
        '<span class="gx-rpt-dim-lab">' + d.l + '</span>' +
        '<div class="gx-rpt-dim-bar">' +
        '<i class="g" style="width:' + d.lv + '%"><b>' + d.lv + '%</b></i>' +
        '<i class="p" style="width:' + d.rv + '%"><b>' + d.rv + '%</b></i>' +
        '</div>' +
        '<span class="gx-rpt-dim-lab gx-rpt-dim-lab--r">' + d.r + '</span>' +
        '</div>';
    }).join('');

    var letters = rep.letters.map(function (x) {
      return '<div class="gx-rpt-letter tone-' + x.tone + '">' +
        '<h4>' + x.k + ' ' + x.t + '</h4><p>' + x.d + '</p></div>';
    }).join('');

    var pop = rep.population.map(function (p) {
      return '<div class="gx-rpt-pop-item"><div class="gx-rpt-pop-ring">' + p.v + '</div><span>' + p.t + '</span></div>';
    }).join('');

    function items(arr, start) {
      return arr.map(function (x, i) {
        var n = ('0' + (i + 1)).slice(-2);
        return '<div class="gx-rpt-item"><span class="n">' + n + '</span><h4>' + x.t + '</h4><p>' + x.d + '</p></div>';
      }).join('');
    }

    var jobs = rep.jobs.map(function (j) {
      return '<article class="gx-rpt-job">' +
        '<div class="gx-rpt-job-top"><b>' + j.title + '</b><em>' + j.salary + '</em></div>' +
        '<p class="gx-rpt-job-meta">' + j.industry + '</p>' +
        '<div class="gx-rpt-job-tags"><span>' + j.type + '</span><span>' + j.edu + '</span></div>' +
        '<div class="gx-rpt-job-foot"><span>' + j.company + '</span><span>' + j.date + '</span></div>' +
        '</article>';
    }).join('');

    return '<div class="gx-rpt">' +
      '<div class="gx-rpt-hero">' +
      '<h1 class="gx-rpt-title">职业性格测评报告</h1>' +
      '<div class="gx-rpt-person">' +
      '<span class="gx-rpt-avatar" aria-hidden="true">' + gxAvatar() + '</span>' +
      '<div class="gx-rpt-person-info">' +
      '<b>杨强 · 测试学生</b>' +
      '<p>测评时长：' + rep.duration + '</p>' +
      '<p>测评结果：' + rep.result + '</p>' +
      '<p>你的特点：' + rep.tags + '</p>' +
      '</div></div></div>' +

      '<section class="gx-rpt-sec">' +
      '<h2 class="gx-rpt-h2">报告总结</h2>' +
      '<p class="gx-rpt-sub">各维度数据对比</p>' +
      '<div class="gx-rpt-dims">' + dims + '</div>' +
      '<p class="gx-rpt-p">' + rep.summary + '</p>' +
      '</section>' +

      '<section class="gx-rpt-sec">' +
      '<h2 class="gx-rpt-h2">行为风格分析及建议</h2>' +
      '<p class="gx-rpt-p">' + rep.styleIntro + '</p>' +
      '<div class="gx-rpt-badge">' + rep.result + '</div>' +
      '<div class="gx-rpt-letters">' + letters + '</div>' +
      '<p class="gx-rpt-sub">人口比例</p>' +
      '<div class="gx-rpt-pop">' + pop + '</div>' +
      '<p class="gx-rpt-sub">终极追求</p>' +
      '<p class="gx-rpt-p">' + rep.ultimate + '</p>' +
      '</section>' +

      '<section class="gx-rpt-sec">' +
      '<h2 class="gx-rpt-h2">工作分析及建议</h2>' +
      '<p class="gx-rpt-sub">工作中的优势</p>' +
      '<div class="gx-rpt-items">' + items(rep.adv) + '</div>' +
      '<p class="gx-rpt-sub">工作中的劣势</p>' +
      '<div class="gx-rpt-items">' + items(rep.dis) + '</div>' +
      '<p class="gx-rpt-sub">最能发挥你优势的岗位特点</p>' +
      '<div class="gx-rpt-items">' + items(rep.improve) + '</div>' +
      '<p class="gx-rpt-sub">最能发挥你优势的组织特征</p>' +
      '<div class="gx-rpt-items">' + items(rep.org) + '</div>' +
      '</section>' +

      '<section class="gx-rpt-sec">' +
      '<h2 class="gx-rpt-h2">岗位推荐</h2>' +
      '<div class="gx-rpt-major"><b>' + rep.major.name + '</b></div>' +
      '<p class="gx-rpt-sub">专业分析</p>' +
      '<p class="gx-rpt-p">' + rep.major.note + '</p>' +
      '<div class="gx-rpt-industry"><span>推荐行业</span><span>匹配度</span></div>' +
      '<div class="gx-rpt-industry-row"><span class="tag">' + rep.industry.name + '</span><span class="gauge">' + rep.industry.match + '%</span></div>' +
      '<div class="gx-rpt-jobs-head"><b>为您推荐的岗位</b><span>更多</span></div>' +
      '<div class="gx-rpt-jobs">' + jobs + '</div>' +
      '</section>' +

      '<div class="gx-rpt-foot">' +
      '<p>' + rep.foot.tip + '</p>' +
      '<p>' + rep.foot.teacher + '</p>' +
      '<p>分析日期 ' + rep.foot.date + '</p>' +
      '</div>' +
      '</div>';
  }

  /* 设计长图报告：原图零修改，用白色同色补丁盖住页眉姓名后叠加当前学生姓名。
     viewBox 使用图片原生像素坐标系；SVG 必须填满 .gx-rpt-image（与 img 渲染盒一致），
     否则 preserveAspectRatio="none" 会失真 —— 见 css 中 .gx-rpt-image 的定位要求。
     移除记录的 designImage 字段即可回退到下方原 HTML 长报告 / 空态。 */
  function gxEsc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function gxDesignImageReport(di) {
    var p = di.patch;
    var label = gxEsc(ca.basicInfo.name + ' · 测试学生');
    var rect = '<rect x="' + p.rect[0] + '" y="' + p.rect[1] +
      '" width="' + p.rect[2] + '" height="' + p.rect[3] + '" fill="#FFFFFF"/>';
    var text = '<text x="' + p.text[0] + '" y="' + p.text[1] +
      '" font-size="' + p.fontSize + '" font-weight="600"' +
      ' font-family="PingFang SC, Microsoft YaHei, sans-serif"' +
      ' fill="' + p.fill + '">' + label + '</text>';
    return '<section class="gx-card gx-assess-report gx-assess-report--full">' +
      '<div class="gx-assess-report-body gx-rpt-body">' +
        '<div class="gx-rpt-image">' +
          '<img class="gx-rpt-image-src" src="' + di.src + '"' +
            ' width="' + di.w + '" height="' + di.h + '"' +
            ' alt="' + gxEsc(activeAssessTab + '报告：' + ca.basicInfo.name + ' · 测试学生') + '">' +
          '<svg class="gx-rpt-name-patch" viewBox="0 0 ' + di.w + ' ' + di.h + '"' +
            ' preserveAspectRatio="none" aria-hidden="true">' + rect + text + '</svg>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function gxAssessReport() {
    var recs = ca.assessmentRecords[activeAssessTab] || [];
    var rec = recs[activeAssessIndex] || recs[0];
    var rep = rec && rec.report;
    var di = rec && rec.designImage;
    if (di) return gxDesignImageReport(di);   /* 设计长图优先于空态 / 原 HTML 长报告 */
    if (!rep) {
      return '<section class="gx-card gx-assess-report gx-assess-report--empty">' +
        '<div class="gx-assess-report-head"><h3 class="gx-assess-report-title">' + activeAssessTab + '报告</h3></div>' +
        '<div class="gx-records-empty"><p>该测评暂未生成详细报告，完成测评后将在此展示。</p></div>' +
        '</section>';
    }
    if (rep.letters) {
      return '<section class="gx-card gx-assess-report gx-assess-report--full">' +
        '<div class="gx-assess-report-body gx-rpt-body">' + gxFullReport(rep) + '</div>' +
        '</section>';
    }
    var dimRows = rep.dims.map(function (d) {
      return '<div class="gx-dim-row">' +
        '<span class="gx-dim-lab">' + d.left + '<em>' + d.lv + '%</em></span>' +
        '<div class="gx-dim-track"><i style="width:' + d.lv + '%"></i></div>' +
        '<span class="gx-dim-lab gx-dim-lab--r"><em>' + d.rv + '%</em>' + d.right + '</span>' +
        '</div>';
    }).join('');
    return '<section class="gx-card gx-assess-report">' +
      '<div class="gx-assess-report-head">' +
      '<h3 class="gx-assess-report-title">' + activeAssessTab + '报告</h3>' +
      '<span class="gx-assess-report-badge" aria-hidden="true">' + gxClover('gx-assess-report-clover') + '</span>' +
      '</div>' +
      '<div class="gx-assess-report-body">' +
      '<div class="gx-assess-meta"><b>' + ca.basicInfo.name + ' · 测试学生</b>' +
      '<span>测评时长：' + rep.duration + '</span>' +
      '<span>测评结果：' + rep.result + '</span>' +
      '<span>你的标签：' + rep.tags + '</span></div>' +
      '<div class="gx-assess-summary">' +
      '<h4 class="gx-assess-summary-h"><span class="gx-assess-summary-ic">' + gxBars() + '</span>报告总结</h4>' +
      '<p class="gx-assess-summary-sub">各维度数据对比</p>' +
      '<div class="gx-dims">' + dimRows + '</div>' +
      '<p class="gx-assess-total">' + rep.summary + '</p>' +
      '</div>' +
      '<div class="gx-assess-style"><h4>' + ca.assessmentSummary.styleTitle + '</h4>' +
      '<p>' + rep.styleText + '</p></div>' +
      '<div class="gx-assess-footer">• ' + rep.result + ' •</div>' +
      '</div>' +
      '</section>';
  }

  function gxAssessSheet() {
    return '<div class="gx-sheet gx-sheet-assess">' +
      gxAssessAi() +
      '<div class="gx-assess-bottom">' + gxAssessRecs() + gxAssessReport() + '</div>' +
      '</div>';
  }

  function gxBindAssess() {
    document.querySelectorAll('[data-assess-tab]').forEach(function (b) {
      b.onclick = function () {
        activeAssessTab = b.getAttribute('data-assess-tab');
        activeAssessIndex = 0;
        render();
      };
    });
    document.querySelectorAll('[data-assess-index]').forEach(function (b) {
      b.onclick = function () {
        activeAssessIndex = parseInt(b.getAttribute('data-assess-index'), 10) || 0;
        render();
      };
    });
  }

  /* ---------- 9. 页面装配 ---------- */
  /* 右栏纸张：基本资料 + AI 总结（标题 + 年份 Tab + 三栏） / 其他标签的模块卡 */
  /* ============================================================
     v48 · 生涯体验周专属详情页
     不再复用 16 个模块的「记录 + 说明」通用模板：该标签有真实业务数据
     （后台活动列表：活动名称 / 地点 / 周期 / 报名 / 签到 / 活动状态），
     值得做成一个有产品主张的「我的体验周旅程」。
     结构仍守两条既有口径：
       1) 顶部 AI 卡与其它详情页共用 --gx-ai-card-h=306px，切换标签不跳版；
       2) 下方是唯一一张完整白卡（v46「一个整体，不是给分开」）。
     卡内：筛选行 + KPI 概览条 + 左「活动旅程时间轴」/ 右「能力成长 + 成果清单」。
     删掉本组函数与 gxSheet 里的分支即可回到 v47 通用模板。
     ============================================================ */
  function gxEwAi() {
    var e = ca.experienceWeek;
    var legend = e.donut.map(function (d) {
      return '<li><i style="background:' + d.color + '"></i><span>' + d.name + '</span></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ew-ai">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-ew-ai-sub">基于你参与的生涯体验周活动与沉淀成果的纵向追踪</p>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + e.ai.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + e.ai.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz">' +
        '<div class="gx-donut-wrap">' + gxDonut(e.donut, 156) + '</div>' +
        '<ul class="gx-donut-legend">' + legend + '</ul>' +
      '</div>' +
    '</section>';
  }

  function gxEwTabs() {
    var opts = [
      { k: 'all', n: '全部' },
      { k: 'signed', n: '已签到' },
      { k: 'signup', n: '仅报名' },
      { k: 'works', n: '有成果' }
    ];
    return '<div class="gx-ew-tabs">' + opts.map(function (o) {
      return '<button type="button" class="' + (activeEwFilter === o.k ? 'active' : '') +
        '" data-ew-filter="' + o.k + '">' + o.n + '</button>';
    }).join('') + '</div>';
  }

  function gxEwKpis() {
    var k = ca.experienceWeek.kpi;
    var items = [
      { v: k.joined, u: '场', n: '参与活动' },
      { v: k.signed, u: '场', n: '完成签到' },
      { v: k.days, u: '天', n: '累计体验' },
      { v: k.works, u: '项', n: '沉淀成果' }
    ];
    return '<div class="gx-ew-kpis">' + items.map(function (x) {
      return '<div class="gx-ew-kpi"><b>' + x.v + '</b><i>' + x.u + '</i><span>' + x.n + '</span></div>';
    }).join('') + '</div>';
  }

  function gxEwTimeline() {
    var list = ca.experienceWeek.activities.filter(function (a) {
      if (activeEwFilter === 'signed') return a.signed;
      if (activeEwFilter === 'signup') return a.signup && !a.signed;
      if (activeEwFilter === 'works') return !!a.work;
      return true;
    });
    if (!list.length) return '<div class="gx-ew-empty">该筛选下暂无活动记录</div>';
    return '<div class="gx-ew-list">' + list.map(function (a) {
      var st = a.signed
        ? '<em class="gx-ew-st gx-ew-st--ok">已签到</em>'
        : (a.status === '进行中'
          ? '<em class="gx-ew-st gx-ew-st--ing">待参与</em>'
          : '<em class="gx-ew-st gx-ew-st--miss">未签到</em>');
      var wk = a.work
        ? '<div class="gx-ew-work"><i>成果</i><span>' + gxEsc(a.work) + '</span></div>'
        : '<div class="gx-ew-work gx-ew-work--empty"><i>成果</i><span>暂无，建议补交岗位观察笔记</span></div>';
      return '<article class="gx-ew-item">' +
        '<div class="gx-ew-dot"></div>' +
        '<div class="gx-ew-item-main">' +
          '<div class="gx-ew-item-top"><h4>' + gxEsc(a.name) + '</h4>' + st + '</div>' +
          '<p class="gx-ew-meta">' + gxEsc(a.place) + ' · ' + a.period + ' · ' + a.days + ' 天</p>' +
          '<div class="gx-ew-tags"><span>' + gxEsc(a.type) + '</span><span>' + gxEsc(a.ability) + '</span></div>' +
          wk +
        '</div>' +
      '</article>';
    }).join('') + '</div>';
  }

  function gxEwEvidence() {
    var e = ca.experienceWeek;
    var bars = e.abilities.map(function (a) {
      return '<div class="gx-ew-bar"><span>' + a.name + '</span>' +
        '<div class="gx-ew-bar-track"><i style="width:' + a.value + '%"></i></div>' +
        '<b>' + a.value + '</b></div>';
    }).join('');
    var works = e.works.map(function (w) {
      return '<li><div class="gx-ew-work-ico"></div><div class="gx-ew-work-txt">' +
        '<b>' + gxEsc(w.name) + '</b><p>' + gxEsc(w.from) + ' · ' + w.date + '</p></div>' +
        '<em>' + w.type + '</em></li>';
    }).join('');
    return '<div class="gx-ew-evidence">' +
      '<h4 class="gx-ew-sec-title">能力成长</h4><div class="gx-ew-bars">' + bars + '</div>' +
      '<h4 class="gx-ew-sec-title">成果清单</h4><ul class="gx-ew-works">' + works + '</ul>' +
    '</div>';
  }

  function gxEwSheet() {
    return '<div class="gx-sheet gx-sheet-ew">' +
      gxEwAi() +
      '<section class="gx-card gx-ew-panel">' +
        '<div class="gx-ew-head">' +
          '<div class="gx-ew-heading"><h3>我的体验周旅程</h3>' +
            '<p>按活动时间倒序 · 数据来自云生涯后台活动归档</p></div>' +
          gxEwTabs() +
        '</div>' +
        gxEwKpis() +
        '<div class="gx-ew-body">' +
          '<div class="gx-ew-journey">' + gxEwTimeline() + '</div>' +
          gxEwEvidence() +
        '</div>' +
      '</section>' +
    '</div>';
  }

  function gxBindEw() {
    document.querySelectorAll('[data-ew-filter]').forEach(function (b) {
      b.onclick = function () { activeEwFilter = b.getAttribute('data-ew-filter'); render(); };
    });
  }

  /* ==========================================================================
     v49 · AI 面试详情页按 1280×720 设计稿整体重做
     设计稿口径（与 v45 的薄荷青绿版是两套皮肤，本区块独立、可整块删除回滚）：
       顶部两张并列卡：左「AI总结及建议」(诊断总结/后续建议 + 右下枝叶)，
                       右「成绩趋势」(竖条标题 + 总分趋势/维度对比 + 4 点折线 + 注释)
       下方两张并列卡：左「竖排岗位筛选 + 面试记录时间轴」，右「AI面试报告」横版报告卡
     配色回到设计稿的奶油米白 + 草绿；所有类名加 gx-iv2 前缀，不复用 v44/v45 的
     .gx-interview-top / .gx-interview-bottom / .gx-report 等类，避免旧规则串味。
     旧 gxInterviewSheet() / gxInterviewTop() / gxInterviewImageReport() 全部保留为回滚路径。
     ========================================================================== */
  ca.interviewDesign = {
    jobs: ['行政专员', 'PHP开发工程师', '大客户销售', '研发技术助理', '爬虫开发工程师',
      '系统架构设计师', '生物制药工程师', '药品注册员', '医疗器械开发',
      '新能源电池工程师', '外科医生', '专科医生', '牙科医生', '理疗师'],
    status: [
      { k: 'all', n: '全部' }, { k: 'done', n: '已完成' }, { k: 'undone', n: '未完成' },
      { k: 'generating', n: '报告生成中' }, { k: 'failed', n: '报告生成失败' }
    ],
    dims: ['专业知识', '表达清晰度', '学习潜力', '行业热情'],
    records: [
      { date: '2025-12-05', time: '18:37:50', state: '面试未结束', dims: [0, 0, 0, 0], st: 'undone' },
      { date: '2025-11-10', time: '11:46:16', score: 30, pass: false, dims: [2, 1, 1, 1], st: 'done', report: true },
      { date: '2025-10-24', time: '15:43:56', state: '面试未结束', dims: [0, 0, 0, 0], st: 'undone' },
      { date: '2025-10-24', time: '15:43:55', state: '面试未结束', dims: [0, 0, 0, 0], st: 'undone' },
      { date: '2025-10-24', time: '15:41:13', state: '面试未结束', dims: [0, 0, 0, 0], st: 'undone' }
    ],
    trend: {
      total: [50, 50, 50, 10],
      dims: [[48, 52, 46, 12], [42, 46, 50, 8], [55, 48, 52, 15], [38, 44, 40, 6]]
    },
    report: {
      duration: '1分27秒', style: '亲和引导型', job: '行政专员', score: 60,
      scores: [2, 3, 4, 3],
      summary: '候选人展现了明确的学习意愿和基础的行政思维框架（如台账管理、会前准备），具备一定的可塑性。然而，专业知识掌握较浅，回答普遍停留在概念层面，缺乏具体案例、方法论和细节支撑，是应届生典型的经验不足问题。整体表现中规中矩，潜力大于现岗能力。'
    }
  };
  var activeIv2Job = '行政专员';
  var activeIv2Status = 'all';
  var activeIv2TrendMode = 'total';
  var activeIv2ReportScore = 60;

  function gxIv2Sprig(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 62 116" aria-hidden="true">' +
      '<path d="M31 114 C31 84 27 52 19 8" fill="none" stroke="#93BE7C" stroke-width="1.7" stroke-linecap="round"/>' +
      '<g fill="#B9D6A2" opacity=".9">' +
      '<ellipse cx="19" cy="16" rx="4.4" ry="9" transform="rotate(-30 19 16)"/>' +
      '<ellipse cx="12" cy="34" rx="4" ry="8.4" transform="rotate(-52 12 34)"/>' +
      '<ellipse cx="27" cy="44" rx="4.2" ry="8.6" transform="rotate(38 27 44)"/>' +
      '<ellipse cx="12" cy="60" rx="3.8" ry="8" transform="rotate(-50 12 60)"/>' +
      '<ellipse cx="29" cy="72" rx="4" ry="8.2" transform="rotate(42 29 72)"/>' +
      '<ellipse cx="16" cy="88" rx="3.6" ry="7.6" transform="rotate(-48 16 88)"/>' +
      '<ellipse cx="31" cy="98" rx="3.6" ry="7.4" transform="rotate(44 31 98)"/>' +
      '</g></svg>';
  }
  function gxIv2Stars(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 90 60" aria-hidden="true">' +
      '<g fill="#F5D98A"><path d="M28 6l2.6 6.4L37 15l-6.4 2.6L28 24l-2.6-6.4L19 15l6.4-2.6z"/>' +
      '<path d="M50 20l1.7 4.2 4.3 1.8-4.3 1.7L50 32l-1.7-4.3-4.3-1.7 4.3-1.8z"/>' +
      '<path d="M66 3l1.4 3.4 3.6 1.4-3.6 1.5L66 13l-1.4-3.7-3.6-1.5 3.6-1.4z"/></g></svg>';
  }
  function gxIv2Avatar() {
    return '<svg viewBox="0 0 64 64" aria-hidden="true">' +
      '<circle cx="32" cy="32" r="31" fill="#E7F0DD"/>' +
      '<path d="M13 58c1.8-11 8.6-16 19-16s17.2 5 19 16z" fill="#82B36A"/>' +
      '<circle cx="32" cy="26" r="11" fill="#F7E3D0"/>' +
      '<path d="M21 25.5c-.6-8 4.5-12.5 11-12.5s11.6 4.5 11 12.5c-1.8-4.2-5.6-6.6-11-6.6s-9.2 2.4-11 6.6z" fill="#2F382B"/>' +
      '<circle cx="28" cy="27" r="1.1" fill="#2F382B"/><circle cx="36" cy="27" r="1.1" fill="#2F382B"/>' +
      '<path d="M29 32c1.6 1.3 4.4 1.3 6 0" fill="none" stroke="#C98B72" stroke-width="1.2" stroke-linecap="round"/>' +
      '</svg>';
  }

  function gxIv2Ai() {
    return '<section class="gx-card gx-iv2-ai">' +
      '<h3 class="gx-iv2-ai-title">AI总结及建议</h3>' +
      '<div class="gx-iv2-ai-text">' +
        '<h4>诊断总结：</h4><p>' + ca.interviewAi.diag + '</p>' +
        '<h4>后续建议：</h4><p>' + ca.interviewAi.advice + '</p>' +
      '</div>' + gxIv2Sprig('gx-iv2-ai-sprig') +
      '</section>';
  }

  function gxIv2TrendSvg() {
    var W = 330, H = 152, L = 32, R = 12, T = 8, B = 24;
    var pw = W - L - R, ph = H - T - B;
    function X(i) { return L + pw * i / 3; }
    function Y(v) { return T + ph * (1 - v / 100); }
    var grid = [0, 25, 50, 75, 100].map(function (g) {
      var yy = Y(g).toFixed(1);
      return '<line x1="' + L + '" y1="' + yy + '" x2="' + (W - R) + '" y2="' + yy +
        '" stroke="#E2E8D9" stroke-width="1"' + (g === 0 ? '' : ' stroke-dasharray="3 4"') + '/>' +
        '<text x="' + (L - 7) + '" y="' + (Number(yy) + 3.2).toFixed(1) +
        '" text-anchor="end" font-size="9" fill="#9AA896">' + g + '</text>';
    }).join('');
    var xlab = [1, 2, 3, 4].map(function (k) {
      return '<text x="' + X(k - 1).toFixed(1) + '" y="' + (H - 5) +
        '" text-anchor="middle" font-size="9" fill="#9AA896">' + k + '</text>';
    }).join('');
    var d = ca.interviewDesign, total = activeIv2TrendMode !== 'dim';
    var series = total ? [{ c: '#6FA457', v: d.trend.total }] :
      d.trend.dims.map(function (v, i) {
        return { c: ['#548C42', '#79AC60', '#9FC984', '#C0D9A8'][i], v: v };
      });
    var lines = series.map(function (s) {
      var pts = s.v.map(function (v, i) { return [X(i), Y(v)]; });
      return '<path d="' + gxSmoothPath(pts) + '" fill="none" stroke="' + s.c +
        '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        pts.map(function (p) {
          return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) +
            '" r="3" fill="#FFFEFB" stroke="' + s.c + '" stroke-width="1.6"/>';
        }).join('');
    }).join('');
    return '<svg class="gx-iv2-tr-svg" viewBox="0 0 ' + W + ' ' + H +
      '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="面试成绩趋势折线图">' +
      grid + lines + xlab +
      '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) +
      '" stroke="#9AA896" stroke-width="1"/></svg>';
  }
  function gxIv2Trend() {
    var d = ca.interviewDesign, total = activeIv2TrendMode !== 'dim';
    var modes = [{ k: 'total', n: '总分趋势' }, { k: 'dim', n: '维度对比' }].map(function (m) {
      return '<button type="button" class="' + (activeIv2TrendMode === m.k ? 'active' : '') +
        '" data-iv2-mode="' + m.k + '">' + m.n + '</button>';
    }).join('');
    var legend = total ? '' : '<div class="gx-iv2-tr-legend">' + d.dims.map(function (n, i) {
      return '<span><i style="background:' + ['#548C42', '#79AC60', '#9FC984', '#C0D9A8'][i] + '"></i>' + n + '</span>';
    }).join('') + '</div>';
    return '<section class="gx-card gx-iv2-trend">' +
      '<div class="gx-iv2-tr-head"><i></i><h3>成绩趋势</h3></div>' +
      gxIv2Stars('gx-iv2-tr-stars') +
      '<div class="gx-iv2-modes">' + modes + '</div>' + legend +
      '<div class="gx-iv2-tr-chart">' + gxIv2TrendSvg() + '</div>' +
      '<div class="gx-iv2-tr-note">仅展示已完成的面试记录</div>' +
      gxIv2Sprig('gx-iv2-tr-sprig') +
      '</section>';
  }
  function gxIv2Top() {
    return '<div class="gx-iv2-top">' + gxIv2Ai() + gxIv2Trend() + '</div>';
  }

  function gxIv2Records() {
    var d = ca.interviewDesign;
    var jobs = d.jobs.map(function (n) {
      return '<button type="button" class="' + (activeIv2Job === n ? 'active' : '') +
        '" data-iv2-job="' + n + '">' + n + '</button>';
    }).join('');
    var status = d.status.map(function (s) {
      return '<button type="button" class="' + (activeIv2Status === s.k ? 'active' : '') +
        '" data-iv2-status="' + s.k + '">' + s.n + '</button>';
    }).join('');
    var list = d.records.filter(function (r) {
      return activeIv2Status === 'all' || r.st === activeIv2Status;
    });
    var items = list.length ? list.map(function (r) {
      var right = r.report ?
        '<span class="gx-iv2-rec-score">' + r.score + '</span><span class="gx-iv2-rec-badge">不及格</span>' +
        '<button type="button" class="gx-iv2-rec-view" data-iv2-report="' + r.score + '">查看报告</button>' :
        '<span class="gx-iv2-rec-state">' + r.state + '</span>';
      var dims = d.dims.map(function (n, i) {
        return '<span class="gx-iv2-dim">' + n + ' <i>' + r.dims[i] + '</i></span>';
      }).join('');
      return '<article class="gx-iv2-rec"><span class="gx-iv2-dot"></span>' +
        '<div class="gx-iv2-rec-box">' +
          '<div class="gx-iv2-rec-top"><div class="gx-iv2-rec-date"><b>' + r.date + '</b><em>' + r.time + '</em></div>' +
          '<div class="gx-iv2-rec-right">' + right + '</div></div>' +
          '<div class="gx-iv2-dims">' + dims + '</div>' +
        '</div></article>';
    }).join('') : '<div class="gx-iv2-empty">暂无符合条件的面试记录</div>';
    return '<section class="gx-card gx-iv2-records">' +
      '<div class="gx-iv2-jobs">' + jobs + '</div>' +
      '<div class="gx-iv2-rec-main">' +
        '<div class="gx-iv2-rec-head"><h3><i></i>面试记录</h3>' +
        '<div class="gx-iv2-status">' + status + '</div></div>' +
        '<div class="gx-iv2-timeline">' + items + '</div>' +
      '</div></section>';
  }

  function gxIv2ScoreSvg() {
    var W = 470, H = 138, L = 42, R = 14, T = 14, B = 36;
    var pw = W - L - R, ph = H - T - B;
    function Y(v) { return T + ph * (1 - v / 100); }
    var grid = [0, 20, 40, 60, 80, 100].map(function (g) {
      var yy = Y(g).toFixed(1);
      return '<line x1="' + L + '" y1="' + yy + '" x2="' + (W - R) + '" y2="' + yy +
        '" stroke="#E4E9DC" stroke-width="1"' + (g === 0 ? '' : ' stroke-dasharray="3 4"') + '/>' +
        '<text x="' + (L - 7) + '" y="' + (Number(yy) + 3).toFixed(1) +
        '" text-anchor="end" font-size="8.5" fill="#A0AE9B">' + g + '</text>';
    }).join('');
    var d = ca.interviewDesign, cx = [];
    var marks = d.report.scores.map(function (v, i) {
      var x = L + pw * (i + 0.5) / 4;
      cx.push([x, Y(0) - 3]);
      return '<rect x="' + (x - 3).toFixed(1) + '" y="' + (Y(0) - 3).toFixed(1) +
        '" width="6" height="3" rx="1" fill="#7FB268"/>' +
        '<text x="' + x.toFixed(1) + '" y="' + (Y(0) - 7).toFixed(1) +
        '" text-anchor="middle" font-size="9" font-weight="700" fill="#5B8F49">' + v + '</text>';
    }).join('');
    var line = '<path d="' + gxSmoothPath(cx) + '" fill="none" stroke="#B9D6A2" stroke-width="1.4"/>';
    var labels = d.dims.map(function (n, i) {
      var x = L + pw * (i + 0.5) / 4, y = H - 12;
      return '<text x="' + x.toFixed(1) + '" y="' + y +
        '" text-anchor="middle" font-size="8.5" fill="#9AA896" transform="rotate(-20 ' + x.toFixed(1) + ' ' + y + ')">' + n + '</text>';
    }).join('');
    return '<svg class="gx-iv2-score-svg" viewBox="0 0 ' + W + ' ' + H +
      '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="报告总结维度评分图">' +
      '<text x="' + L + '" y="9" font-size="8.5" fill="#A0AE9B">评分 (0-100分)</text>' +
      grid + line + marks + labels + '</svg>';
  }
  function gxIv2Report() {
    var r = ca.interviewDesign.report;
    var meta = [
      ['面试总时长', r.duration], ['面试官风格', r.style],
      ['面试岗位', r.job], ['最终得分', activeIv2ReportScore + '分']
    ].map(function (m) {
      return '<li><span>' + m[0] + '：</span><em>' + m[1] + '</em></li>';
    }).join('');
    return '<section class="gx-card gx-iv2-report">' +
      gxIv2Stars('gx-iv2-rep-stars') +
      '<div class="gx-iv2-rep-ai">AI</div>' +
      gxIv2Sprig('gx-iv2-rep-sprig') +
      '<h3 class="gx-iv2-rep-title">AI面试报告</h3>' +
      '<div class="gx-iv2-person">' +
        '<span class="gx-iv2-avatar">' + gxIv2Avatar() + '</span>' +
        '<div class="gx-iv2-person-info"><b>' + ca.basicInfo.name + '-测试学生</b><ul>' + meta + '</ul></div>' +
      '</div>' +
      '<div class="gx-iv2-sumtag"><i>▣</i>报告总结</div>' +
      '<div class="gx-iv2-score">' + gxIv2ScoreSvg() + '</div>' +
      '<p class="gx-iv2-rep-sum">' + r.summary + '</p>' +
      '</section>';
  }
  function gxIv2Sheet() {
    return '<div class="gx-sheet gx-sheet-interview gx-iv2">' +
      gxIv2Top() +
      '<div class="gx-iv2-bottom">' + gxIv2Records() + gxIv2Report() + '</div>' +
      '</div>';
  }
  function gxBindIv2() {
    document.querySelectorAll('[data-iv2-job]').forEach(function (b) {
      b.onclick = function () { activeIv2Job = b.getAttribute('data-iv2-job'); render(); };
    });
    document.querySelectorAll('[data-iv2-status]').forEach(function (b) {
      b.onclick = function () { activeIv2Status = b.getAttribute('data-iv2-status'); render(); };
    });
    document.querySelectorAll('[data-iv2-mode]').forEach(function (b) {
      b.onclick = function () { activeIv2TrendMode = b.getAttribute('data-iv2-mode'); render(); };
    });
    document.querySelectorAll('[data-iv2-report]').forEach(function (b) {
      b.onclick = function () { activeIv2ReportScore = Number(b.getAttribute('data-iv2-report')); render(); };
    });
  }

  /* ==========================================================================
     v51 · 「线上课」详情页下方：学生个人课程学习档案
     --------------------------------------------------------------------------
     产品判断（20 年教育行业 PM）：
       红框里原本是「模块说明 + 暂无相关记录」，那是平台运营语言，不是学生档案；
       而且 gxModuleCard() 按 activeArchiveGrade 过滤，第四年没有课程记录就显示空态，
       与上方 AI 卡「累计完成 3 门课、30 节课时」直接冲突 —— 数据口径断裂。
     改法：这一块归位为「我自己的课程学习记录」，守三条口径：
       1) 个人视角：我选了什么课 / 学到哪一章 / 测验多少分 / 留下什么证据；
       2) 跨学年汇总：不看左栏年级筛选，第一年到第三年 3 门课全部呈现；
       3) 证据链可核验：章节级明细 + 学年课时分布 + 能力关联 + 成果清单，
          把 AI 结论里的「3 门 / 30 节 / 均分 86 / 第四年学习断层」用数据坐实。
     数字自洽（与 ca.gradeRecords / ca.onlineCourseSummary 严格对齐）：
       第一年《大学生职业生涯规划》12 节 / 均分 88（2023-03-22 归档）
       第二年《行业认知与职业选择》10 节 / 均分 86（2024-04-08 归档）
       第三年《职场礼仪与形象管理》 8 节 / 均分 83（2025-03-10 归档）
       加权 (88*12 + 86*10 + 83*8) / 30 = 86 分；第四年 0 节 → 学习断层。
     顶部 AI 卡完全沿用 v50 的 gxAssessAi(ca.onlineCourseSummary, 'gx-ai--course')，
     一个字未改；本区块所有类名带 gx-oc 前缀，删本块 + 去掉 gxSheet 的线上课分支即可回滚。
     ========================================================================== */
  ca.onlineCourseRecord = {
    kpi: { courses: 3, lessons: 30, avg: 86, finish: 100 },
    grades: [
      { k: 'all', n: '全部学年' },
      { k: '第一年', n: '第一年' },
      { k: '第二年', n: '第二年' },
      { k: '第三年', n: '第三年' },
      { k: '第四年', n: '第四年' }
    ],
    courses: [
      {
        id: 'c1', name: '大学生职业生涯规划', category: '职业规划类',
        grade: '第一年', term: '2022—2023学年 · 第二学期', teacher: '李慧敏',
        archived: '2023-03-22', lessons: 12, done: 12, avg: 88,
        notes: 6, homeworks: 3, hours: '14.5 小时', ability: '职业规划能力',
        cert: '课程结业证书 · 已归档',
        insight: '从自我认知到职业目标设定，完成 1 份个人职业规划书，是毕业意向的最早依据。',
        chapters: [
          { n: '第1章 大学与职业发展导论', lessons: 3, min: 46, score: 90, date: '2023-03-02', work: '笔记 · 职业期待清单' },
          { n: '第2章 自我认知与职业兴趣', lessons: 3, min: 52, score: 86, date: '2023-03-09', work: '作业 · 霍兰德兴趣自评' },
          { n: '第3章 职业世界与岗位地图', lessons: 3, min: 49, score: 89, date: '2023-03-16', work: '笔记 · 目标岗位清单' },
          { n: '第4章 职业生涯规划书撰写', lessons: 3, min: 58, score: 87, date: '2023-03-22', work: '作业 · 个人职业规划书' }
        ]
      },
      {
        id: 'c2', name: '行业认知与职业选择', category: '行业认知类',
        grade: '第二年', term: '2023—2024学年 · 第二学期', teacher: '周立新',
        archived: '2024-04-08', lessons: 10, done: 10, avg: 86,
        notes: 5, homeworks: 2, hours: '12.2 小时', ability: '职业认知能力',
        cert: '课程结业证书 · 已归档',
        insight: '由通识规划转向行业与岗位判断，结论可直接用于复核 AI 面试和简历记录。',
        chapters: [
          { n: '第1章 行业分类与产业链认知', lessons: 3, min: 44, score: 88, date: '2024-03-14', work: '笔记 · 行业地图' },
          { n: '第2章 岗位能力模型拆解', lessons: 3, min: 41, score: 84, date: '2024-03-22', work: '作业 · 岗位能力对照表' },
          { n: '第3章 职业选择决策方法', lessons: 2, min: 38, score: 87, date: '2024-03-30', work: '笔记 · 决策平衡单' },
          { n: '第4章 数字媒体行业专题', lessons: 2, min: 35, score: 85, date: '2024-04-08', work: '笔记 · 目标行业访谈提纲' }
        ]
      },
      {
        id: 'c3', name: '职场礼仪与形象管理', category: '职业素养类',
        grade: '第三年', term: '2024—2025学年 · 第一学期', teacher: '陈 曦',
        archived: '2025-03-10', lessons: 8, done: 8, avg: 83,
        notes: 3, homeworks: 1, hours: '9.6 小时', ability: '职业素养能力',
        cert: '课程结业证书 · 已归档',
        insight: '补齐求职场景的仪容与沟通规范，但尚未覆盖内容运营、数据分析等岗位技能课。',
        chapters: [
          { n: '第1章 职场形象与仪容规范', lessons: 3, min: 40, score: 85, date: '2025-02-20', work: '笔记 · 面试着装清单' },
          { n: '第2章 商务沟通与会议礼仪', lessons: 3, min: 43, score: 82, date: '2025-02-28', work: '作业 · 模拟会议记录' },
          { n: '第3章 求职场景礼仪实战', lessons: 2, min: 36, score: 82, date: '2025-03-10', work: '笔记 · 面试礼仪自查表' }
        ]
      }
    ],
    yearBars: [
      { g: '第一年', v: 12 }, { g: '第二年', v: 10 },
      { g: '第三年', v: 8 }, { g: '第四年', v: 0 }
    ],
    abilities: [
      { name: '职业规划能力', v: 88 }, { name: '职业认知能力', v: 76 },
      { name: '职业素养能力', v: 70 }, { name: '求职准备能力', v: 42 }
    ],
    evidences: [
      { name: '课程结业证书', from: '3 门课程均已完课', tag: '3 份' },
      { name: '章节测验记录', from: '每章 1 次 · 均分 86 分', tag: '30 次' },
      { name: '学习笔记', from: '含职业期待清单、行业地图等', tag: '14 篇' },
      { name: '课程作业', from: '职业规划书、岗位能力对照表等', tag: '6 份' }
    ]
  };
  var activeOcGrade = 'all';
  var activeOcCourse = 'c1';

  function gxOcTabs() {
    return '<div class="gx-oc-tabs">' + ca.onlineCourseRecord.grades.map(function (o) {
      return '<button type="button" class="' + (activeOcGrade === o.k ? 'active' : '') +
        '" data-oc-grade="' + o.k + '">' + o.n + '</button>';
    }).join('') + '</div>';
  }

  function gxOcKpis() {
    var k = ca.onlineCourseRecord.kpi;
    var items = [
      { v: k.courses, u: '门', n: '累计选课' },
      { v: k.lessons, u: '节', n: '完成课时' },
      { v: k.avg, u: '分', n: '章节测验均分' },
      { v: k.finish, u: '%', n: '课程完课率' }
    ];
    return '<div class="gx-oc-kpis">' + items.map(function (x) {
      return '<div class="gx-oc-kpi"><b>' + x.v + '</b><i>' + x.u + '</i><span>' + x.n + '</span></div>';
    }).join('') + '</div>';
  }

  function gxOcChapters(c) {
    return '<div class="gx-oc-chapters">' +
      '<div class="gx-oc-chapters-head"><span>章节</span><span>课时</span><span>学习时长</span><span>测验</span><span>完成日期</span></div>' +
      c.chapters.map(function (ch) {
        return '<div class="gx-oc-chapter">' +
          '<span class="gx-oc-ch-name"><b>' + gxEsc(ch.n) + '</b><em>' + gxEsc(ch.work) + '</em></span>' +
          '<span>' + ch.lessons + ' 节</span>' +
          '<span>' + ch.min + ' 分钟</span>' +
          '<span class="gx-oc-ch-score">' + ch.score + ' 分</span>' +
          '<span>' + ch.date + '</span>' +
          '</div>';
      }).join('') + '</div>';
  }

  function gxOcCourseCard(c) {
    var open = activeOcCourse === c.id;
    var pct = Math.round(c.done / c.lessons * 100);
    return '<article class="gx-oc-course' + (open ? ' open' : '') + '">' +
      '<button type="button" class="gx-oc-course-main" data-oc-course="' + c.id + '">' +
        '<div class="gx-oc-course-top">' +
          '<div class="gx-oc-course-title"><h4>' + gxEsc(c.name) + '</h4>' +
            '<em class="gx-oc-st">已完课</em></div>' +
          '<span class="gx-oc-toggle">' + (open ? '收起明细' : '展开明细') + '</span>' +
        '</div>' +
        '<p class="gx-oc-meta">' + gxEsc(c.grade) + ' · ' + gxEsc(c.term) + ' · 主讲 ' + gxEsc(c.teacher) + ' · 归档 ' + c.archived + '</p>' +
        '<div class="gx-oc-tags"><span>' + gxEsc(c.category) + '</span><span>' + gxEsc(c.ability) + '</span></div>' +
        '<div class="gx-oc-progress"><div class="gx-oc-progress-track"><i style="width:' + pct + '%"></i></div>' +
          '<b>' + c.done + ' / ' + c.lessons + ' 节</b></div>' +
        '<div class="gx-oc-metrics">' +
          '<span>测验均分 <b>' + c.avg + '</b> 分</span>' +
          '<span>学习笔记 <b>' + c.notes + '</b> 篇</span>' +
          '<span>课程作业 <b>' + c.homeworks + '</b> 份</span>' +
          '<span>累计学习 <b>' + c.hours + '</b></span>' +
        '</div>' +
        '<p class="gx-oc-insight">' + gxEsc(c.insight) + '</p>' +
        '<div class="gx-oc-cert">' + gxEsc(c.cert) + '</div>' +
      '</button>' +
      (open ? gxOcChapters(c) : '') +
      '</article>';
  }

  /* 毕业学年的「学习断层」提示：让 AI 结论里的短板在下方记录里也能被看见 */
  function gxOcGapCard() {
    return '<div class="gx-oc-gap">' +
      '<div class="gx-oc-gap-ico">!</div>' +
      '<div class="gx-oc-gap-txt"><b>第四年（毕业学年）暂无课程学习记录</b>' +
      '<p>上方 AI 结论提到的「学习断层」即指此处。建议补选 1—2 门岗位技能类课程，' +
      '并同步归档章节测验、笔记与作业，形成「学习—练习—沉淀」证据链。</p></div>' +
      '</div>';
  }

  function gxOcCourseList() {
    var list = ca.onlineCourseRecord.courses.filter(function (c) {
      return activeOcGrade === 'all' || c.grade === activeOcGrade;
    });
    var cards = list.map(gxOcCourseCard).join('');
    var gap = (activeOcGrade === 'all' || activeOcGrade === '第四年') ? gxOcGapCard() : '';
    if (!cards) {
      return '<div class="gx-oc-list">' +
        '<div class="gx-oc-empty">该学年暂无课程学习记录</div>' + gap + '</div>';
    }
    return '<div class="gx-oc-list">' + cards + gap + '</div>';
  }

  function gxOcYearBars() {
    var max = 12;
    return ca.onlineCourseRecord.yearBars.map(function (y) {
      var zero = y.v === 0;
      return '<div class="gx-oc-year' + (zero ? ' zero' : '') + '">' +
        '<span>' + y.g + '</span>' +
        '<div class="gx-oc-year-track"><i style="width:' + (y.v / max * 100) + '%"></i></div>' +
        '<b>' + y.v + ' 节</b>' + (zero ? '<em>断层</em>' : '') + '</div>';
    }).join('');
  }

  function gxOcProfile() {
    var r = ca.onlineCourseRecord;
    var bars = r.abilities.map(function (a) {
      return '<div class="gx-oc-bar"><span>' + a.name + '</span>' +
        '<div class="gx-oc-bar-track"><i style="width:' + a.v + '%"></i></div>' +
        '<b>' + a.v + '</b></div>';
    }).join('');
    var works = r.evidences.map(function (w) {
      return '<li title="' + gxEsc(w.from) + '"><span>' + gxEsc(w.name) + '</span>' +
        '<em>' + gxEsc(w.tag) + '</em></li>';
    }).join('');
    return '<div class="gx-oc-profile">' +
      '<h4 class="gx-oc-sec-title">学年课时分布</h4>' +
      '<div class="gx-oc-years">' + gxOcYearBars() + '</div>' +
      '<h4 class="gx-oc-sec-title">关联能力维度</h4>' +
      '<div class="gx-oc-bars">' + bars + '</div>' +
      '<h4 class="gx-oc-sec-title">学习成果证据</h4>' +
      '<ul class="gx-oc-works">' + works + '</ul>' +
      '<p class="gx-oc-note">证据以完课课时与测验为主，笔记、作业偏少；' +
      '补齐后可与 AI 面试、简历记录交叉验证。</p>' +
      '</div>';
  }

  function gxOcSheet() {
    return '<div class="gx-sheet gx-sheet-oc">' +
      gxAssessAi(ca.onlineCourseSummary, 'gx-ai--course') +
      '<section class="gx-card gx-oc-panel">' +
        '<div class="gx-oc-head">' +
          '<div class="gx-oc-heading"><h3>我的课程学习档案</h3>' +
          '<p>跨学年汇总 3 门课程 · 不受左栏年级筛选影响 · 数据来自云生涯平台线上课程学习记录</p></div>' +
          gxOcTabs() +
        '</div>' +
        gxOcKpis() +
        '<div class="gx-oc-body">' +
          '<div class="gx-oc-records"><h4 class="gx-oc-sec-title">课程学习记录 <i>点击课程可展开章节明细</i></h4>' +
            gxOcCourseList() + '</div>' +
          gxOcProfile() +
        '</div>' +
      '</section>' +
    '</div>';
  }

  function gxBindOc() {
    document.querySelectorAll('[data-oc-grade]').forEach(function (b) {
      b.onclick = function () {
        activeOcGrade = b.getAttribute('data-oc-grade');
        /* 切换学年后自动展开该学年的第一门课，避免出现「筛出了课程却没有任何明细」 */
        var first = ca.onlineCourseRecord.courses.filter(function (c) {
          return activeOcGrade === 'all' || c.grade === activeOcGrade;
        })[0];
        activeOcCourse = first ? first.id : '';
        render();
      };
    });
    document.querySelectorAll('[data-oc-course]').forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-oc-course');
        activeOcCourse = activeOcCourse === id ? '' : id;
        render();
        /* 展开第 2/3 门课时把该卡滚到左栏顶部，避免章节明细藏在折叠线以下。
           只改内层容器的 scrollTop，不带动 16:10 画布或整页。 */
        if (activeOcCourse) {
          var rec = document.querySelector('.gx-oc-records');
          var el = document.querySelector('.gx-oc-course.open');
          if (rec && el) {
            var r = rec.getBoundingClientRect(), e = el.getBoundingClientRect();
            rec.scrollTop += (e.top - r.top) - 4;
          }
        }
      };
    });
  }

  function gxSheet() {
    if (activeSideTag === '线上课') return gxOcSheet();
    if (activeSideTag === '生涯体验周') return gxEwSheet();
    if (activeSideTag === 'AI面试') return gxIv2Sheet();
    if (activeSideTag === '职业测评') return gxAssessSheet();
    if (activeSideTag === '基本信息') {
      return '<div class="gx-sheet">' + gxBasicCard() + gxAiCard() + '</div>';
    }
    return gxModuleSheet();
  }

  /* v51：其余 15 个普通模块标签（微视频 / 线上咨询 / 预约咨询 / 生涯活动 /
     AI简历 / 职业礼仪 / 职场沟通技巧 / 就业活动 / 大学生职业规划大赛 /
     大学生创新大赛 / 毕业意向 / 宣讲会 / 双选会 / AI助理 等）统一走这套版式。
     「线上课」已升级为专属课程学习档案（gxOcSheet），本函数里的线上课分支保留为
     回滚路径：删掉 gxSheet 的线上课分支即可回到通用模板，不影响其它模块。
     与职业测评详情页同分布 —— 顶部整宽「AI总结及建议」（直接复用 gxAssessAi，
     高度共用 --gx-ai-card-h=306px），下方左「模块记录」/ 右「模块说明」两栏。
     原先是纵向两张整宽大白卡且没有 AI 总结区域；内容全部复用，未新增示意数据。 */
  /* ==========================================================================
     v52 · 「微视频」顶部 AI 总结及建议：按产品功能与学生动作重写（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：微视频 = 提供学生学习「职场礼仪 / 处理职场相关问题」的短视频产品，
               学生可以「点赞喜欢」和「转发」视频；AI 总结与建议必须围绕这些功能与动作，
               右上角配图要换成与之相关的分析图 / 统计图，不能沿用职业测评的 6 维环形图。
     原实现：微视频走 gxModuleSheet() → gxAssessAi() → ca.assessmentSummary，
             文案是「历次职业测评 / 职业锚 / 人才星图 / 测评结论」，环形图是 6 项测评维度，
             与产品语义完全无关，且原文案末行被截。
     做法：不改动通用 gxAssessAi()（其余 14 个模块零风险），新增 gxVideoAi() 复用
           .gx-assess-ai 外框与 306px 高度，仅把右侧 viz 换成专属统计图：
           ① 观看主题分布横条（5 类，紧扣职场礼仪 / 职场问题）
           ② 学习互动统计（点赞 / 转发 / 完播，紧扣学生能做的动作）
     数据自洽：42 条 = 16+11+8+5+2；百分比 38/26/19/12/5 = 100；
           「第四年暂无新增观看记录」与下方按年级过滤后的空态一致（同 v50 处理）。
     ========================================================================== */
  ca.microVideoSummary = {
    diag: '平台微视频学习记录：近一学年累计观看职场类短视频 42 条、有效学习 6.2 小时，完播率 78%。观看以职场礼仪规范 16 条、沟通表达技巧 11 条为主，职场冲突处理 8 条、面试与求职应对 5 条偏少。互动上点赞 27 次、转发 9 次：点赞集中在可照做的礼仪规范类，转发却多来自冲突处理与面试应对类，说明对情境判断型内容有分享意愿但缺少练习。短板有三：第四年暂无新增观看记录，毕业学年出现学习断层；互动仅停留在点赞转发，未沉淀笔记或情景演练等过程证据；观看与互动数据尚未关联档案「职业素养能力」维度。',
    advice: '建议按转发偏好补看职场冲突、跨部门协作与求职应对类短视频，每条用「一句笔记 + 一次情景演练」沉淀，把点赞清单整理成个人职场素养专题，用于 AI 面试与简历佐证；毕业学年保持每周 2—3 条短时学习，补齐断层。院校侧可依据点赞、转发、完播三类信号优化选题与推荐（高转发低完播宜拆短或补情境说明），把观看与互动关联到职业素养能力维度，并对第四年零观看设置提醒。',
    stats: {
      total: 42, hours: '6.2 小时',
      topics: [
        { name: '职场礼仪规范', value: 38, count: 16, color: '#5CAD6A' },
        { name: '沟通表达技巧', value: 26, count: 11, color: '#7FBF86' },
        { name: '职场冲突处理', value: 19, count: 8, color: '#A8CA7E' },
        { name: '面试与求职应对', value: 12, count: 5, color: '#C9D99B' },
        { name: '其他职场话题', value: 5, count: 2, color: '#DDE6C9' }
      ],
      actions: [
        { n: '点赞喜欢', v: 27, u: '次', color: '#5CAD6A' },
        { n: '转发分享', v: 9, u: '次', color: '#D8923F' },
        { n: '完播率', v: 78, u: '%', color: '#7FA8D0' }
      ]
    }
  };

  function gxVideoAi() {
    var a = ca.microVideoSummary, s = a.stats;
    var bars = s.topics.map(function (t) {
      return '<li class="gx-vd-bar" title="' + t.name + ' ' + t.count + ' 条">' +
        '<span class="gx-vd-bar-name">' + t.name + '</span>' +
        '<div class="gx-vd-bar-track"><i style="width:' + t.value + '%;background:' + t.color + '"></i></div>' +
        '<b>' + t.value + '%</b></li>';
    }).join('');
    var acts = s.actions.map(function (x) {
      return '<div class="gx-vd-act"><b style="color:' + x.color + '">' + x.v + '</b>' +
        '<i>' + x.u + '</i><span>' + x.n + '</span></div>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--video">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-vd-viz">' +
        '<div class="gx-vd-chart">' +
          '<div class="gx-vd-chart-head"><h4>观看主题分布</h4>' +
            '<span>共 ' + s.total + ' 条 · ' + s.hours + '</span></div>' +
          '<ul class="gx-vd-bars">' + bars + '</ul>' +
          '<div class="gx-vd-actions"><h4>学习互动统计</h4>' +
            '<div class="gx-vd-acts">' + acts + '</div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ==========================================================================
     v53 · 「线上咨询」顶部 AI 总结及建议：按产品语义重写（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：线上咨询 = 学生在「云生涯Max」小程序（学生移动端）上，
               自主选择需要咨询的**老师类别**进行**线上咨询沟通**，了解想咨询的信息；
               右上角配图要「对应有关联关系」，可以是统计图 / 分析图。
     原实现：与微视频、其余通用模块共用 gxAssessAi() → ca.assessmentSummary，
             文案是「历次职业测评 / 职业锚 / 人才星图」，环形图是 6 项测评维度。
     做法：不改通用 gxAssessAi()，新增 gxConsultAi()（复用 306px 卡高与文字区结构），
           右侧换成两张互相关联的图：
             ①「咨询老师类别分布」5 条横条 —— 统计图，对应学生「选老师类别」动作
             ②「咨询主题 → 老师类别」3 行关联 —— 分析图，色点与上图类别一一对应
           文案里的 8 次 / 3 次 / 2 次 / 2024-09-25 均可在图中与下方记录中找到，图文强关联。
     数据自洽：8 次 = 3+2+1+1+1，占比 38+25+13+12+12 = 100；
           「最近一次 2024 年 9 月 25 日选择生涯规划师咨询就业与考研权衡」
           与 ca.gradeRecords 第四年那条记录、下方模块记录区逐字对应。
           注意：线上咨询页第四年**有记录**（不同于线上课 / 微视频的空态），
           因此文案绝不能套用「第四年暂无记录」口径。
     ========================================================================== */
  ca.onlineConsultSummary = {
    diag: '平台线上咨询记录：8 次咨询均通过云生涯Max 小程序（学生移动端）发起，由学生自主选择老师类别后线上沟通。类别分布为生涯规划师 3 次、就业指导老师 2 次，行业导师、专业导师、心理咨询师各 1 次；主题从低年级「专业方向确认」、中年级「行业与岗位认知」，走到最近一次 2024 年 9 月 25 日选择「生涯规划师」咨询「就业与考研的权衡选择」，与下方归档记录一致。短板有三：咨询以方向判断类为主，面向具体岗位匹配与 offer 抉择的落地类咨询仅 2 次，与「直接就业 · 数字媒体运营类岗位」的毕业意向不匹配；档案只记录「完成咨询」，沟通结论与行动清单未同步归档；最近一次咨询后未再发起，毕业学年缺少跟进。',
    advice: '建议在小程序里补选「就业指导老师」与「行业导师」，围绕数字媒体运营岗位要求、简历面试与 offer 比较做 2—3 次针对性咨询，每次把结论整理成行动清单并归档，用于复核 AI 面试与简历；把「就业与考研权衡」的结论回填毕业意向，形成闭环。院校侧可建立「咨询主题 → 老师类别」推荐关系，按年级与毕业意向推送对应老师，对高年级设置落地类咨询提醒，并把咨询次数、类别与结论关联到档案职业规划、求职表现能力维度。',
    stats: {
      total: 8,
      categories: [
        { name: '生涯规划师', value: 38, count: 3, color: '#5CAD6A' },
        { name: '就业指导老师', value: 25, count: 2, color: '#7FA8D0' },
        { name: '行业导师', value: 13, count: 1, color: '#8FBF5A' },
        { name: '专业导师', value: 12, count: 1, color: '#E7B84B' },
        { name: '心理咨询师', value: 12, count: 1, color: '#B9C4B0' }
      ],
      links: [
        { topic: '就业与考研权衡', cat: '生涯规划师', color: '#5CAD6A' },
        { topic: '简历与面试准备', cat: '就业指导老师', color: '#7FA8D0' },
        { topic: '行业与岗位认知', cat: '行业导师', color: '#8FBF5A' }
      ]
    }
  };

  function gxConsultAi() {
    var a = ca.onlineConsultSummary, s = a.stats;
    var bars = s.categories.map(function (c) {
      return '<li class="gx-cs-bar" title="' + gxEsc(c.name) + ' ' + c.count + ' 次">' +
        '<span class="gx-cs-bar-name">' + gxEsc(c.name) + '</span>' +
        '<div class="gx-cs-bar-track"><i style="width:' + c.value + '%;background:' + c.color + '"></i></div>' +
        '<b>' + c.value + '%</b></li>';
    }).join('');
    var links = s.links.map(function (l) {
      return '<li class="gx-cs-link"><i style="background:' + l.color + '"></i>' +
        '<span class="gx-cs-link-topic">' + gxEsc(l.topic) + '</span>' +
        '<em>→</em><b>' + gxEsc(l.cat) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--consult">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-cs-viz">' +
        '<div class="gx-cs-chart">' +
          '<div class="gx-cs-chart-head"><h4>咨询老师类别分布</h4>' +
            '<span>共 ' + s.total + ' 次 · 小程序发起</span></div>' +
          '<ul class="gx-cs-bars">' + bars + '</ul>' +
          '<div class="gx-cs-links-box"><h4>咨询主题 → 老师类别</h4>' +
            '<ul class="gx-cs-links">' + links + '</ul></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ==========================================================================
     v54 · 「预约咨询」顶部 AI 总结及建议：按产品链路重写（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：预约咨询 = 学生**线下查看咨询师列表** → 选择需要预约咨询的**类别**
               → **选择咨询师**提交预约 → **老师接受预约** → **线下一对一线下咨询**。
               右侧图要「对应」，可以是统计图 / 分析图。
     原实现：与其余通用模块共用 gxAssessAi() → ca.assessmentSummary，
             文案是「历次职业测评 / 职业锚 / 人才星图」，环形图是 6 项测评维度。
     做法：不改通用 gxAssessAi()，新增 gxApptAi()，右侧换成两张与链路一一对应的图：
           ①「预约咨询类别分布」5 条横条 —— 统计图，对应学生「选类别」动作
           ②「预约 → 老师接受 → 线下面询」3 行转化 —— 分析图，对应「老师接受预约
              后才能线下一对一」这条预约咨询独有链路，与线上咨询的线上沟通明确区分
           文案中的 6 / 5 / 4 次与转化图逐项对应，图文强关联。
     数据自洽：6 次 = 2+1+1+1+1，占比 33+17+17+17+16 = 100；
           转化 6 → 5（老师未接受 1 次）→ 4（接受后未完成 1 次）；
           最早一次 2022-12-05「专业方向与职业选择」与 ca.gradeRecords 第一年那条记录、
           「毕业学年未再发起预约」与第四年空态，三处口径一致。
     注意：预约咨询 ≠ 线上咨询。前者是线下看咨询师列表、选类别选人、老师接受后一对一面询；
           后者是云生涯Max 小程序选老师类别后线上沟通。两页文案与图不得互相套用。
     ========================================================================== */
  ca.appointmentSummary = {
    diag: '平台预约咨询记录：累计发起 6 次线下预约，均由学生先在咨询师列表中查看咨询师，再选预约类别并指定咨询师提交；老师接受 5 次、完成线下一对一咨询 4 次。类别以「生涯规划」2 次为主，就业指导、学业发展、心理调适与其他各 1 次；最早一次是 2022 年 12 月 5 日就「专业方向与职业选择」进行的一对一面询，与下方归档记录一致。短板有三：预约集中在低年级方向判断类，面向「直接就业 · 数字媒体运营类岗位」毕业意向的岗位匹配、简历面试与 offer 抉择类面询为 0；1 次未被老师接受、1 次接受后未完成面询，毕业学年未再发起预约，线下咨询断层；档案只记录「预约了咨询」，面询结论与行动清单未归档，效果无法复核。',
    advice: '建议学生到咨询师列表按「就业指导」「行业导师」类别筛选咨询师，围绕数字媒体运营岗位要求、简历面试与 offer 比较预约 1—2 次线下一对一咨询，关注老师接受状态，面询后把结论整理成行动清单回填档案；对未接受、未完成的预约及时改约。院校侧可把「预约类别 → 咨询师」做成列表推荐，设置接受时效提醒与爽约跟进，按年级和毕业意向推送咨询师，并把预约次数、接受率、面询完成率与结论关联到档案能力维度。',
    stats: {
      total: 6,
      categories: [
        { name: '生涯规划', value: 33, count: 2, color: '#5CAD6A' },
        { name: '就业指导', value: 17, count: 1, color: '#7FA8D0' },
        { name: '学业发展', value: 17, count: 1, color: '#8FBF5A' },
        { name: '心理调适', value: 17, count: 1, color: '#E7B84B' },
        { name: '其他类别', value: 16, count: 1, color: '#B9C4B0' }
      ],
      steps: [
        { name: '发起预约', value: 6, pct: 100, color: '#5CAD6A' },
        { name: '老师接受', value: 5, pct: 83, color: '#7FA8D0' },
        { name: '线下一对一面询', value: 4, pct: 67, color: '#E7B84B' }
      ]
    }
  };

  function gxApptAi() {
    var a = ca.appointmentSummary, s = a.stats;
    var bars = s.categories.map(function (c) {
      return '<li class="gx-ap-bar" title="' + gxEsc(c.name) + ' ' + c.count + ' 次">' +
        '<span class="gx-ap-bar-name">' + gxEsc(c.name) + '</span>' +
        '<div class="gx-ap-bar-track"><i style="width:' + c.value + '%;background:' + c.color + '"></i></div>' +
        '<b>' + c.value + '%</b></li>';
    }).join('');
    var steps = s.steps.map(function (x) {
      return '<li class="gx-ap-step">' +
        '<i class="gx-ap-step-dot" style="background:' + x.color + '"></i>' +
        '<span class="gx-ap-step-name">' + gxEsc(x.name) + '</span>' +
        '<div class="gx-ap-step-track"><i style="width:' + x.pct + '%;background:' + x.color + '"></i></div>' +
        '<b>' + x.value + ' 次</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--appt">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-ap-viz">' +
        '<div class="gx-ap-chart">' +
          '<div class="gx-ap-chart-head"><h4>预约咨询类别分布</h4>' +
            '<span>共 ' + s.total + ' 次 · 线下预约</span></div>' +
          '<ul class="gx-ap-bars">' + bars + '</ul>' +
          '<div class="gx-ap-steps-box">' +
            '<h4>预约 → 老师接受 → 线下面询</h4>' +
            '<p class="gx-ap-steps-note">选类别 → 选咨询师 → 线下一对一</p>' +
            '<ul class="gx-ap-steps">' + steps + '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function gxModuleSheet() {
    /* v46：下方「模块记录 + 模块说明」合成「一张卡」。
       原来 hint 自带 .gx-card.gx-bottom、与 gxModuleCard() 的 .gx-card.gx-module
       并排成两张白卡（中间 12px 间隙 + 各自圆角阴影），用户要求「是一个整体，不是给分开」。
       现在唯一的外层 .gx-card.gx-module-panel 提供白底/圆角/阴影，
       内层两栏降级为无外观的区块，靠 CSS 去掉背景与间隙。
       回滚：去掉外层 section、hint 改回 <section class="gx-card gx-bottom"> 并恢复 v36 CSS。 */
    var hint = '<div class="gx-module-side"><div class="gx-hint">' +
      '<h4>' + activeSideTag + '模块</h4>' +
      '<p>该模块沿用云生涯Max现有功能页面，成长档案仅做统一归档与展示，点击左侧其他标签可切换查看。</p>' +
      '</div></div>';
    /* v50（v51 起仅作回滚路径）：线上课的 AI 卡换成「线上课程学习」语义
       （文案 + 环形图均来自 ca.onlineCourseSummary）；其余通用模块走默认 summary。
       v51 的 gxOcSheet() 顶部 AI 卡同样复用这一份数据，口径完全一致。 */
    /* v52 微视频 / v53 线上咨询 / v54 预约咨询各用专属 AI 卡；v50 的线上课分支保留为
       回滚路径（当前已由 gxOcSheet 接管）；其余通用模块仍走默认测评 summary，行为与 v36 一致。
       四个专属分支都只是替换顶部 AI 卡，下方「模块记录 + 模块说明」本次均未改动。
       注意线上咨询（小程序线上沟通）与预约咨询（线下一对一面询）是两条不同链路，
       各自的数据、文案与图独立，不互相复用。 */
    var ai;
    if (activeSideTag === '微视频') ai = gxVideoAi();
    else if (activeSideTag === '线上咨询') ai = gxConsultAi();
    else if (activeSideTag === '预约咨询') ai = gxApptAi();
    else if (activeSideTag === '线上课') ai = gxAssessAi(ca.onlineCourseSummary, 'gx-ai--course');
    else ai = gxAssessAi();
    return '<div class="gx-sheet gx-sheet-module">' +
      ai +
      '<section class="gx-card gx-module-panel">' +
        '<div class="gx-module-bottom">' + gxModuleCard() + hint + '</div>' +
      '</section>' +
    '</div>';
  }

  /* 内嵌详情模式：纸张风档案放进全局菜单壳内（保留全局侧栏与顶栏），整页自然滚动，
     不再整屏占满；导航底部保留「重新打开档案 / 返回」操作，Esc 同样可返回 */
  function gxArchiveEmbedded() {
    var cls = (activeSideTag === 'AI面试' ? ' gx-page--interview' : '') + (activeSideTag === '职业测评' ? ' gx-page--assess' : '');
    // 左栏底部「重新打开档案 / 返回」按钮已移除：统一由全局左侧菜单导航
    var actions = '';
    return '<div class="gx-page gx-page--embedded' + cls + '">' +
      gxRail(actions) + gxSheet() +
      '</div>';
  }

  function gxEligible() {
    return state.student.bound && ca.status !== 'error' && ca.status !== 'empty';
  }

  var gxOriginalRender = render;
  render = function () {
    // 能力画像已并入成长档案（成长档案包含全部学生基础数据），ability 路由统一落到档案页
    if (page === 'ability') page = 'archive';
    // 只要不在档案页，就把当前页记为「返回目标」
    if (page !== 'archive') gxBackTarget = page;
    // 所有页面统一沿用首页的壳层主题（白底侧栏 + 绿色高亮选中项），保证左侧菜单与首页一致
    document.body.classList.add('home-view');
    if (page === 'archive' && gxEligible()) {
      // 内嵌详情：纸张风档案放进全局菜单壳（保留全局侧栏/顶栏），固定区域展示，内容超出在面板内上下滚动
      app.innerHTML = shell(gxArchiveEmbedded());
      // shell() 会重建 .workspace，故在写入 innerHTML 之后再标记固定区域类
      var ws = document.querySelector('.workspace');
      if (ws) ws.classList.add('workspace--archive');
      bind();
      gxBindBack();
      gxBindInterview();
      gxBindAssess();
      gxBindEw();
      gxBindIv2();
      gxBindOc();
      syncUrl();
      return;
    }
    var wsOut = document.querySelector('.workspace');
    if (wsOut) wsOut.classList.remove('workspace--archive');
    document.removeEventListener('keydown', gxBackKey);
    gxOriginalRender();
  };
  render();
})();
