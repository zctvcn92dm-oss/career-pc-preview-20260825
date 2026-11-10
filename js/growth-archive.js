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
      /* v62：职场沟通技巧 = AI 情景对话实训工具（AskUserQuestion 已确认口径）：
         选职场沟通场景 → 与 AI 扮演的对象对话演练 → 按表达清晰度 / 逻辑结构 /
         倾听回应 / 情绪管理四维评分 → 输出一份实训报告。原型里没有该工具的独立页面，
         此处按用户给的产品定义补 3 次历史实训；第三年原有的「训练营，累计课时 8 节」
         记录保持不动，作为课程基础证据。四维与综合分为原型示意，需接真实实训报告。 */
      { created_at: '2024年06月12日 15:20:18', business_type: '职场沟通技巧', ability_dimension: '职业素养能力', description: '完成第 1 次【职场沟通技巧】AI 情景对话实训：向上汇报场景，与 AI 扮演的上级对话演练，输出《职场沟通实训报告》，综合 68 分（表达 72 / 逻辑 64 / 倾听 66 / 情绪 70）' },
      /* v61：职业礼仪产品口径 = 「AI形象礼仪」——上传上半身形象照、选择服装 / 岗位名称 /
         着装场景，AI 解析形象与仪态后输出一份测评报告（见 js/ai-tool-redirect.js
         etiquetteDemoPage）。这里补 3 次历史测评的第 1 次；第三年原有的
         《职场礼仪与形象管理》8 节线上课记录保持不动，v50 线上课「3 门 30 节」口径不受影响。
         四维得分与综合分为原型示意，需接平台真实 AI 解析报告；本次不改其它记录。 */
      { created_at: '2024年05月28日 10:26:41', business_type: '职业礼仪', ability_dimension: '职业素养能力', description: '完成第 1 次【AI形象礼仪】测评：日常办公场景，上传形象照由 AI 解析着装与仪态，输出《职业形象初评报告》，综合 61 分（着装 64 / 仪态 58 / 岗位 55 / 场景 67）' },
      /* v64：毕业意向 = 意向决策的演变轨迹，不是只有最终填报结果。按用户口径补 2 条，
         与原有的第四年 2024-10-12「直接就业 · 数字媒体运营类岗位」形成
         「双向准备（2024-05）→ 倾向就业（2024-08）→ 正式填报（2024-10）」三段演变，
         与 ca.intentionSummary.stats.rounds 逐条对应。毕业意向不在 v58 AA_TYPE_MAP，
         生涯活动 21 场口径不受影响；基本信息页成长时间线会多出这两条（预期内）。 */
      { created_at: '2024年05月20日 19:26:33', business_type: '毕业意向', ability_dimension: '职业规划能力', description: '填报毕业意向初稿：考研与就业双向准备，专业方向为数字媒体技术' },
      { created_at: '2024年05月16日 10:08:33', business_type: '生涯活动', ability_dimension: '职业认知能力', description: '参加了【企业开放日 · 数字创意产业园区参访】生涯活动' },
      /* v63：就业活动 = 毕业生就业相关活动的揽括（就业实训 / 就业讲座 / 就业实践 /
         双选洽谈 / 政策宣讲等），不是单一场次。按用户口径补到 4 场，跨第二、第三年，
         与 ca.employSummary.stats.rounds 的参与深度逐条对应；第三年原有的
         「2025届实习生双选洽谈会」（2024-10-28）保持不动，作为第 2 场。
         参与深度为原型示意，需接平台真实签到与成果数据；本次不改其它记录。 */
      { created_at: '2024年04月19日 16:32:05', business_type: '就业活动', ability_dimension: '求职表现能力', description: '参加了【就业实训 · 简历与面试实战工作坊】就业实训，为期 3 天，含简历诊断、模拟群面与一对一复盘' },
      { created_at: '2024年04月08日 21:19:44', business_type: '线上课', ability_dimension: '职业规划能力', description: '完成【行业认知与职业选择】线上课学习，累计课时 10 节' },
      /* v60：补齐学生自己做过的历史简历版本（3 版迭代的第 1 版）。
         时间与同年线上咨询 ol3「实习简历里该突出哪些经历？」（2024-03-12）对应。
         版本明细为示意数据，需接平台真实简历版本库；本次不改其它记录。 */
      { created_at: '2024年03月18日 14:22:06', business_type: 'AI简历', ability_dimension: '求职表现能力', description: '使用【AI简历】创建「实习初版」简历，面向暑期实习通用投递，岗位匹配度 52%' },
      /* v52：产品口径对齐 —— 微视频是「职场礼仪 / 职场问题处理」短视频，学生可点赞、转发。
         原记录写的是「数字媒体行业岗位解读」，与产品定义不符，改为职场礼仪主题并带上互动动作，
         使 AI 总结、档案时间轴、微视频模块记录三处口径一致。 */
      { created_at: '2023年11月20日 19:52:07', business_type: '微视频', ability_dimension: '职业素养能力', description: '观看了【会议礼仪与商务着装】系列微视频 6 条，点赞 4 条、转发 1 条' },
      /* v64：AI助理 = 学生向 AI 生涯助理（小云同学）提问的记录，按 3 次有代表性的提问建模：
         职业方向 → 简历写法 → 宣讲会挑选，时间与咨询 / 简历 / 校招记录呼应，
         与 ca.assistSummary.stats.rounds 逐条对应。AI助理不在 v58 AA_TYPE_MAP，
         生涯活动 21 场口径不受影响。 */
      { created_at: '2023年10月15日 20:42:19', business_type: 'AI助理', ability_dimension: '自我认知能力', description: '向 AI 生涯助理提问「数字媒体技术专业的就业方向有哪些」，获得岗位方向与能力要求梳理' },
      { created_at: '2023年09月12日 11:03:58', business_type: '职业测评', ability_dimension: '自我认知能力', description: '完成【职业价值观测评】测评，测评结果是：成就、独立、认同' }
    ],
    '第三年': [
      { created_at: '2025年06月30日 17:26:09', business_type: '大学生职业规划大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生职业规划大赛】，获得校级二等奖' },
      /* v61：3 次测评的第 3 次（求职定稿）。四维 86/79/82/81 均值 = 82 分，
         与 ca.etiquetteSummary.stats.rounds 逐条对应；仪容仪态 79 为当前最低项。 */
      { created_at: '2025年06月18日 16:12:09', business_type: '职业礼仪', ability_dimension: '职业素养能力', description: '完成第 3 次【AI形象礼仪】测评：面试场景 · 数字媒体运营岗，输出《求职形象定稿报告》，综合 82 分（着装 86 / 仪态 79 / 岗位 82 / 场景 81）' },
      { created_at: '2025年05月21日 20:41:35', business_type: 'AI面试', ability_dimension: '求职表现能力', description: '完成【AI模拟面试】训练，岗位：数字媒体运营，综合评分 82 分' },
      /* v63：大学生职业规划大赛 = 记录学生参赛全过程（院赛 → 校赛初赛 → 校赛决赛），
         不是只有一条获奖记录。补 2 条前置阶段，原有的 2025-06-30「校级二等奖」保持不动
         作为决赛结果，三条与 ca.contestSummary.career.rounds 逐条对应。
         描述括号内带「阶段」，使生涯活动归档（v58 AA_TYPE_MAP → 学科竞赛）能区分同名赛事。 */
      { created_at: '2025年05月16日 15:47:38', business_type: '大学生职业规划大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生职业规划大赛 · 校级初赛】，完成 8 分钟生涯规划陈述与答辩，晋级校级决赛' },
      /* v62：3 次实训的第 3 次（客户沟通 84 分）。四维 88/84/82/82 均值 = 84 分，
         与 ca.commsSummary.stats.rounds 逐条对应；逻辑结构起步最低、表达清晰度提升最快。 */
      { created_at: '2025年05月08日 16:42:11', business_type: '职场沟通技巧', ability_dimension: '职业素养能力', description: '完成第 3 次【职场沟通技巧】AI 情景对话实训：客户沟通场景，与 AI 扮演的客户对话演练，输出《职场沟通实训报告》，综合 84 分（表达 88 / 逻辑 84 / 倾听 82 / 情绪 82）' },
      /* v60：3 版迭代的第 3 版（现行版）。只补版本名与目标岗位，
         日期 / business_type / ability_dimension / 匹配度均保持原值，避免影响年级时间轴。 */
      { created_at: '2025年04月17日 13:55:28', business_type: 'AI简历', ability_dimension: '求职表现能力', description: '使用【AI简历】优化为「求职现行版」简历，锁定数字媒体运营岗，岗位匹配度 78%' },
      /* v61：3 次测评的第 2 次。时间上承接 2025-03-10《职场礼仪与形象管理》线上课，
         又在 04-17 简历改版之前，形成「学课程 → 做形象测评 → 改简历」的可追溯链。 */
      { created_at: '2025年03月24日 14:08:52', business_type: '职业礼仪', ability_dimension: '职业素养能力', description: '完成第 2 次【AI形象礼仪】测评：面试场景 · 数字媒体运营实习生，按初评报告调整着装后复测，输出《面试形象与仪态测评报告》，综合 73 分（着装 78 / 仪态 70 / 岗位 72 / 场景 72）' },
      /* v63：就业活动的第 4 场（就业实践），也是 4 场里参与最深的一场：
         校企合作项目、连续 6 周、有明确分工与产出。与 ca.employSummary 的 76 分对应。 */
      { created_at: '2025年03月14日 17:08:26', business_type: '就业活动', ability_dimension: '求职表现能力', description: '参加了【校企合作短视频运营项目】就业实践，承担脚本撰写与账号数据周报，累计 6 周' },
      { created_at: '2025年03月10日 15:14:03', business_type: '职业礼仪', ability_dimension: '职业素养能力', description: '完成【职场礼仪与形象管理】线上课学习，累计课时 8 节' },
      /* v62：3 次实训的第 2 次。时间上承接 2024-12-03《职场沟通技巧》8 节训练营，
         形成「学课程 → 情景演练 → AI 面试」的可追溯链，早于 2025-05-21 AI 面试。 */
      { created_at: '2025年01月08日 10:35:42', business_type: '职场沟通技巧', ability_dimension: '职业素养能力', description: '完成第 2 次【职场沟通技巧】AI 情景对话实训：跨部门协作场景，与 AI 扮演的协作方对话演练，输出《职场沟通实训报告》，综合 76 分（表达 80 / 逻辑 74 / 倾听 76 / 情绪 74）' },
      { created_at: '2024年12月03日 18:33:41', business_type: '职场沟通技巧', ability_dimension: '职业素养能力', description: '完成【职场沟通技巧】训练营，累计课时 8 节' },
      /* v63：职业规划大赛第 1 阶段（院级选拔赛）—— 三条记录形成
         「院赛晋级 → 校赛初赛晋级 → 校赛决赛获奖」的完整参赛链。
         与 v63 补的 2025-05-16 校级初赛、原有 2025-06-30 校级二等奖构成三段。 */
      { created_at: '2024年11月21日 10:24:57', business_type: '大学生职业规划大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生职业规划大赛 · 院级选拔赛】，提交《数字媒体运营方向职业生涯规划书》，获院级一等奖并晋级校赛' },
      /* v63：就业活动第 3 场（就业讲座）—— 校招季配套的行业形势与岗位需求宣讲。 */
      { created_at: '2024年11月08日 14:19:33', business_type: '就业活动', ability_dimension: '求职表现能力', description: '参加了【数字创意行业就业形势与岗位需求】就业讲座，主讲人为校企合作企业 HR，会后提交 3 条岗位疑问' },
      { created_at: '2024年10月28日 09:47:16', business_type: '就业活动', ability_dimension: '求职表现能力', description: '参加了【2025届实习生双选洽谈会】就业活动' },
      /* v60：3 版迭代的第 2 版，对应同年预约面询 ap1（2024-06-18）
         「简历里的项目经历怎么写，才更匹配数字媒体运营岗？」。 */
      { created_at: '2024年06月20日 16:08:41', business_type: 'AI简历', ability_dimension: '求职表现能力', description: '根据线下面询建议优化为「岗位定向版」简历，对准数字媒体运营实习生岗，岗位匹配度 65%' },
      /* v64：毕业意向演变第 2 段 —— 承接 2024-06-20 简历「岗位定向版」，早于第四年 2024-10-12 正式填报。 */
      { created_at: '2024年08月30日 15:47:12', business_type: '毕业意向', ability_dimension: '职业规划能力', description: '更新毕业意向：结合简历岗位定向优化与暑期实习准备，倾向直接就业 · 数字媒体方向' },
      /* v64：AI助理第 2 次提问（简历写法）—— 直接催生 2024-06-20 之后简历继续迭代与 AI 面试训练。 */
      { created_at: '2024年07月06日 21:18:44', business_type: 'AI助理', ability_dimension: '求职表现能力', description: '向 AI 生涯助理提问「数字媒体运营岗的简历应该怎么写」，获得简历模块建议后转向 AI 简历继续优化' }
    ],
    '第四年': [
      { created_at: '2024年10月12日 09:35:21', business_type: '毕业意向', ability_dimension: '职业规划能力', description: '填报了毕业意向，意向方向为：直接就业 · 数字媒体运营类岗位' },
      { created_at: '2024年10月08日 15:22:47', business_type: '大学生创新大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生创新大赛】，项目名称：基于AIGC的校园文创设计平台，获校级三等奖' },
      /* v63：大学生创新大赛 = 记录学生参赛全过程（项目申报 → 院级初评 → 校级决赛），
         不是只有一条获奖记录。补 2 条前置阶段，原有的 2024-10-08「校级三等奖」保持不动
         作为决赛结果，三条与 ca.contestSummary.innov.rounds 逐条对应。
         描述括号内带「阶段」，使生涯活动归档能区分同名赛事。 */
      { created_at: '2024年09月26日 11:14:09', business_type: '大学生创新大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生创新大赛 · 院级初评】，完成 6 分钟项目路演与答辩，晋级校级决赛' },
      /* v53：产品口径对齐 —— 线上咨询发生在云生涯Max 小程序（学生移动端），
         核心动作是「自主选择老师类别 → 线上沟通」。原记录只写「完成线上生涯咨询」，
         补上渠道与老师类别，使 AI 卡、关联分析图、下方归档记录三处口径一致。
         本次不改日期 / business_type / ability_dimension，避免影响年级时间轴。 */
      { created_at: '2024年09月25日 20:06:13', business_type: '线上咨询', ability_dimension: '自我认知能力', description: '通过云生涯Max小程序选择「生涯规划师」完成【线上生涯咨询】，咨询主题：就业与考研的权衡选择' },
      { created_at: '2024年09月22日 00:46:58', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中建西部建设湖南有限公司】宣讲会' },
      /* v64：AI助理第 3 次提问（宣讲会挑选）—— 呼应 9 月集中报名的 6 家不对口宣讲会，
         提问在报名之后发生，AI 卡用它点出「行业筛选建议未被应用」这一断层。 */
      { created_at: '2024年09月20日 19:15:27', business_type: 'AI助理', ability_dimension: '求职表现能力', description: '向 AI 生涯助理提问「9 月的宣讲会这么多，怎么挑跟数字媒体运营岗对口的」，获得行业筛选建议' },
      { created_at: '2024年09月18日 16:39:02', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【长沙理工大学2025届毕业生秋季综合双选会（第一场）暨第八届校友企业专场招聘会】双选会' },
      { created_at: '2024年09月18日 15:39:57', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【安克创新科技股份有限公司深圳分公司】宣讲会' },
      { created_at: '2024年09月16日 13:11:22', business_type: '校招活动参与情况', ability_dimension: '求职表现能力', description: '报名了【中石化湖南石油化工有限公司】宣讲会' },
      /* v63：创新大赛第 1 阶段（项目申报）—— 4 人团队、明确项目名，
         为后续院级初评与校级获奖提供可追溯的参赛起点。 */
      { created_at: '2024年09月12日 19:03:41', business_type: '大学生创新大赛', ability_dimension: '竞赛成长能力', description: '参加了【大学生创新大赛 · 项目申报】，组建 4 人团队并提交《基于AIGC的校园文创设计平台》项目计划书' },
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
          /* v59：改用草绿配色版（只旋转青绿色相，图片尺寸 / 内容位置 / 清晰度不变，
             故 w/h 与 patch 坐标全部沿用）。原 enfp-assessment-report-design-4x.jpg
             保留在 assets，改回此 src 即可回滚到 v35 的青绿口径。 */
          src: 'assets/enfp-assessment-report-design-4x-grass.jpg',
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
          /* v59：同上，草绿配色版；原 career-tendency-assessment-report-design.jpg 保留可回滚。 */
          src: 'assets/career-tendency-assessment-report-design-grass.jpg',
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
    /* v56：线上咨询 / 预约咨询的下方详情记录区升级为专属咨询记录档案。
       回滚：删掉这一行，两页即回到 gxModuleSheet() 的通用「模块记录 + 模块说明」。 */
    if (activeSideTag === '线上咨询' || activeSideTag === '预约咨询') return gxCrSheet();
    /* v57：微视频的下方详情区升级为「我的微视频学习档案」（主题系列 + 学习沉淀闭环）。
       回滚：删掉这一行，即回到 gxModuleSheet() 的通用「模块记录 + 模块说明」。 */
    if (activeSideTag === '微视频') return gxMvSheet();
    /* v58：生涯活动的下方改成「活动大类统一归档」，解决 v55 留下的第四年空态待决项。
       回滚：删掉这一行，即回到 gxModuleSheet() 的单业务标签过滤。 */
    if (activeSideTag === '生涯活动') return gxAaSheet();
    /* v63：就业活动的下方改成「我的就业活动记录」逐场详情档案，
       解决「第三年以外学年空态」+ 用户要求的「就业活动详情记录页」。
       回滚：删掉这一行，即回到 gxModuleSheet() 的通用「模块记录 + 模块说明」。 */
    if (activeSideTag === '就业活动') return gxEmSheet();
    /* v63：两个大赛的下方改成「参赛记录档案」（院赛 → 校赛 → 决赛时间线），
       解决补到 3 条记录后、默认第四年打开职规赛页仍是空态的问题。
       回滚：删掉这两行，即回到 gxModuleSheet() 的单业务标签过滤。 */
    if (activeSideTag === '大学生职业规划大赛') return gxCtSheet('career');
    if (activeSideTag === '大学生创新大赛') return gxCtSheet('innov');
    /* v65：AI简历的下方改成「我的简历版本档案」（版本列表 + 按模块 AI 诊断 + 简历纸面预览），
       解决下方仍是通用「模块记录 + 模块说明」、与顶部 v60 简历专属 AI 卡语义脱节的问题。
       回滚：删掉这一行，即回到 gxModuleSheet() 的通用「模块记录 + 模块说明」。 */
    if (activeSideTag === 'AI简历') return gxRvSheet();
    /* v67：职业礼仪的下方改成「我的职业礼仪测评报告」（测评列表 + 完整报告展示），
       解决下方仍是通用「模块记录 + 模块说明」、与 v61 礼仪专属 AI 卡语义脱节的问题。
       回滚：删掉这一行，即回到 gxModuleSheet() 的通用「模块记录 + 模块说明」。 */
    if (activeSideTag === '职业礼仪') return gxEaSheet();
    /* v68：宣讲会改用「历史宣讲会档案 + 最近学校宣讲会推荐」专属下方结构；删掉这一行即回滚。 */
    if (activeSideTag === '宣讲会') return gxTk2Sheet();
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

  /* ==========================================================================
     v55 · 「生涯活动」顶部 AI 总结及建议：按「活动大类」口径重写（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：生涯活动**是一个大类**，所有活动性质的记录都归属到它下面；
               AI 总结与建议必须和「这个大类」相关，右上角图也要有关联关系，
               可以统计图 / 分析图。
     原实现：与其余通用模块共用 gxAssessAi() → ca.assessmentSummary，
             文案是「历次职业测评 / 职业锚 / 人才星图」，环形图是 6 项测评维度。
     做法：不改通用 gxAssessAi()，新增 gxActAi()。文案不再总结「某一场活动」，
           而是把跨学年、跨业务标签的全部活动性质记录聚合起来做**结构分析**：
             ①「活动类型分布」5 条横条 —— 统计图，横条宽度按 count/14，右侧标真实场次
             ②「活动类型 → 能力维度」3 行关联 —— 分析图，色点与上图类别一一对应，
                解释这个大类为什么存在：把分散活动归到 3 个能力维度下
     数据自洽（与 ca.gradeRecords 逐条对齐，不另造示例数据）：
           14 场 = 校招活动 8 + 生涯活动 2 + 学科竞赛 2 + 生涯体验周 1 + 就业活动 1；
           学科竞赛 = 大学生职业规划大赛 + 大学生创新大赛；
           能力维度 = 求职表现能力（校招活动 / 就业活动）、职业认知能力（生涯活动 / 体验周）、
                     竞赛成长能力（两项大赛），共 3 个。
           **v63 更新**：就业活动 1→4、两个大赛各 1→3（补院赛 / 校赛阶段），
           故 21 场 = 校招 8 + 学科竞赛 6 + 就业活动 4 + 生涯活动 2 + 体验周 1。
           本卡的数字与 v58 下方归档（gxAaStats 动态统计）必须同步改，否则两处打架。
     注意：下方模块明细仍按 activeArchiveGrade + 单业务标签过滤（第四年为空态），
           与 AI 卡的跨学年大类汇总属于「汇总 vs 明细」两层口径；文案把
           「明细按业务标签分散、大类视角缺统一清单」本身写进短板，不假装下方有 14 条。
           是否把下方也改成大类聚合视图，v55 留作待决、本次不擅改结构。
           **v58 已解决**：下方由 gxAaSheet() 接管为活动大类统一归档（14 场 / 5 子类 /
           3 能力维度），本段注释保留为 v55 当时的决策记录，不再描述当前行为。
     ========================================================================== */
  ca.activitySummary = {
    diag: '平台生涯活动记录：生涯活动是活动大类，把分享会、参访、体验周、双选会与宣讲会、就业活动、两项大赛等活动性质记录统一归档，跨四个学年累计 21 场，覆盖校招活动 8 场、学科竞赛 6 场、就业活动 4 场、生涯活动 2 场、生涯体验周 1 场，关联求职表现、竞赛成长、职业认知 3 个能力维度。前三年以认知、竞赛与就业准备为主，毕业学年转为 8 场校招报名。两项大赛各记录院赛、校赛与决赛三阶段；就业活动覆盖实训、实践、讲座与双选洽谈。短板有三：广度够但深度浅，8 场校招只记录「报名了宣讲会」，签到与投递结果未归档；6 场赛事只有阶段与奖项，参赛作品与承担分工未关联能力维度；21 场里仅 1 场有过程沉淀。',
    advice: '建议按大类补齐每次活动的三段记录：参与凭证（报名 / 签到）、过程沉淀（岗位观察、参访笔记、竞赛作品）、成果结论（对应能力维度）；毕业学年 8 场校招优先补投递与沟通结果，把两项大赛的规划书、项目计划书与获奖说明回填竞赛成长能力，就业实训与项目实践的产出整理成可展示作品。院校侧统一「活动大类 → 子类 → 能力维度」归档口径，对只有报名无签到的活动做提醒，按年级均衡推送活动类型，并把参与广度、深度与成果接入档案能力画像。',
    stats: {
      total: 21,
      categories: [
        { name: '校招活动', count: 8, pct: 38, color: '#5CAD6A' },
        { name: '生涯活动', count: 2, pct: 10, color: '#7FA8D0' },
        { name: '学科竞赛', count: 6, pct: 28, color: '#E7B84B' },
        { name: '就业活动', count: 4, pct: 19, color: '#B9C4B0' },
        { name: '生涯体验周', count: 1, pct: 5, color: '#8FBF5A' }
      ],
      links: [
        { topic: '校招活动', dim: '求职表现能力', color: '#5CAD6A' },
        { topic: '生涯活动', dim: '职业认知能力', color: '#7FA8D0' },
        { topic: '学科竞赛', dim: '竞赛成长能力', color: '#E7B84B' }
      ]
    }
  };

  function gxActAi() {
    var a = ca.activitySummary, s = a.stats;
    var bars = s.categories.map(function (c) {
      return '<li class="gx-ac-bar" title="' + gxEsc(c.name) + ' ' + c.count + ' 场">' +
        '<span class="gx-ac-bar-name">' + gxEsc(c.name) + '</span>' +
        '<div class="gx-ac-bar-track"><i style="width:' + c.pct + '%;background:' + c.color + '"></i></div>' +
        '<b>' + c.count + ' 场</b></li>';
    }).join('');
    var links = s.links.map(function (l) {
      return '<li class="gx-ac-link"><i style="background:' + l.color + '"></i>' +
        '<span class="gx-ac-link-topic">' + gxEsc(l.topic) + '</span>' +
        '<em>→</em><b>' + gxEsc(l.dim) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--activity">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-ac-viz">' +
        '<div class="gx-ac-chart">' +
          '<div class="gx-ac-chart-head"><h4>活动类型分布</h4>' +
            '<span>共 ' + s.total + ' 场 · 5 类</span></div>' +
          '<ul class="gx-ac-bars">' + bars + '</ul>' +
          '<div class="gx-ac-links-box">' +
            '<h4>活动类型 → 能力维度</h4>' +
            '<p class="gx-ac-links-note">5 类活动 → 3 个能力维度</p>' +
            '<ul class="gx-ac-links">' + links + '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ==========================================================================
     v60 · 「AI简历」专属 AI 总结卡：按学生自己做过的「历史简历版本」做总结 / 建议
     --------------------------------------------------------------------------
     用户口径：AI 总结及建议要和学生自己做过的历史简历相关，右上角图也要与总结关联，
              可以统计图或分析图。
     原实现：与其余通用模块共用 gxAssessAi() → ca.assessmentSummary，
             文案是「历次职业测评 / 职业锚 / 人才星图」，环形图是 6 项测评维度，与简历无关。
     做法：不改通用 gxAssessAi()，新增 gxResumeAi()。右上角换成
       ①「历史简历 · 岗位匹配度」3 条横条 —— 统计图，宽度按 52/65/78%
       ②「简历模块 → 待补齐」3 行关联 —— 分析图，色点与短板模块一一对应
     数据自洽（v60 已把 3 版写进 ca.gradeRecords 时间轴，三处口径一致）：
       实习初版 2024-03-18 / 52%（对应第二年线上咨询 ol3「实习简历该突出哪些经历」）
       岗位定向版 2024-06-20 / 65%（对应第三年预约面询 ap1「项目经历怎么匹配运营岗」）
       求职现行版 2025-04-17 / 78%（原有记录，只补版本名与目标岗位，未改日期与维度）
     版本明细属示意数据，需接平台真实简历版本库；投递结果 / 面试反馈平台暂无数据，
     文案只写「未记录 / 未闭环」，不编造成果。
     类名避开 .gx-ac-*(v55) / .gx-cs-*(v53) / .gx-ap-*(v54) / .gx-vd-*(v52)，
     统一用 .gx-ai--resume / .gx-rs-*；回滚：删掉 gxModuleSheet 中这一行分支即可。
     ========================================================================== */
  ca.resumeSummary = {
    diag: '平台归档了学生自己做过的 3 版简历：第二年 3 月「实习初版」面向暑期实习通用投递，第三年 6 月面询后改为「岗位定向版」对准数字媒体运营实习生，2025 年 4 月「求职现行版」锁定数字媒体运营岗，匹配度 52% → 65% → 78%。迭代脉络可追溯：两次咨询分别问「实习简历该突出哪些经历」「项目经历怎么写更匹配运营岗」，AI 面试 82 分与毕业意向共同收窄方向，两项校级奖项提供素材。短板有三：三版都停在「改简历」，未记录投给哪些岗位与反馈；第四年投递 3 家企业、报名 8 场校招后简历未再更新；现行版项目经历仍是描述性表述，缺量化成果与作品集链接。总体判断：已从「堆经历」走到「按岗位 JD 组织内容」，但「改动 → 投递 → 结果」未闭环。',
    advice: '以现行版为基线，按目标岗位 JD 拆出内容策划、数据复盘、视觉表达三项能力，用 STAR 重写两段项目经历并补量化结果；关联「基于AIGC的校园文创设计平台」作品集与两项校级奖项。每次投递记录所用版本、岗位与面试反馈，形成「版本 → 岗位 → 结果」闭环，毕业学年 8 场校招优先补投递结果。院校侧统一简历版本管理，对只有生成记录、无反馈的版本做提醒，并把岗位关键词与量化成果校验接入 AI 简历诊断，让档案能回答「哪一版更有效」。',
    stats: {
      versions: [
        { name: '实习初版', date: '2024-03', job: '暑期实习 · 通用投递', match: 52, color: '#C9D8B8' },
        { name: '岗位定向版', date: '2024-06', job: '数字媒体运营实习生', match: 65, color: '#8FBF5A' },
        { name: '求职现行版', date: '2025-04', job: '数字媒体运营', match: 78, color: '#5CAD6A' }
      ],
      gaps: [
        { module: '项目经历', action: 'STAR 重写 + 量化', color: '#E7B84B' },
        { module: '作品集链接', action: '关联竞赛作品', color: '#7FA8D0' },
        { module: '投递闭环', action: '版本→岗位→结果', color: '#B9A0D0' }
      ]
    }
  };

  function gxResumeAi() {
    var a = ca.resumeSummary, s = a.stats;
    var bars = s.versions.map(function (v) {
      return '<li class="gx-rs-bar" title="' + gxEsc(v.name + ' · ' + v.job + ' · ' + v.match + '%') + '">' +
        '<span class="gx-rs-bar-name">' + gxEsc(v.name) + '<i>' + v.date + '</i></span>' +
        '<div class="gx-rs-bar-track"><i style="width:' + v.match + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.match + '%</b></li>';
    }).join('');
    var gaps = s.gaps.map(function (g) {
      return '<li class="gx-rs-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-rs-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--resume">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-rs-viz">' +
        '<div class="gx-rs-chart">' +
          '<div class="gx-rs-chart-head"><h4>历史简历 · 岗位匹配度</h4>' +
            '<span>3 版 · 52% → 78%</span></div>' +
          '<ul class="gx-rs-bars">' + bars + '</ul>' +
          '<div class="gx-rs-gaps-box">' +
            '<h4>简历模块 → 待补齐</h4>' +
            '<p class="gx-rs-gaps-note">现行版仍有 3 处未形成证据</p>' +
            '<ul class="gx-rs-gaps">' + gaps + '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ==========================================================================
     v61 · 「职业礼仪」顶部 AI 总结及建议：围绕学生做过的历史 AI形象礼仪测评与报告
     --------------------------------------------------------------------------
     产品口径（js/ai-tool-redirect.js 的 etiquetteDemoPage）：上传上半身形象照 →
     选择服装 / 岗位名称 / 着装场景 → 拍照并解析 → AI 输出形象与仪态测评报告。
     数据口径（AskUserQuestion 已确认）：
       ① 补 3 次历史测评，第三年原有《职场礼仪与形象管理》8 节线上课记录保持不动，
          避免牵动 v50 线上课 AI 卡「3 门 30 节」（用户选「补 3 次测评，课程保留」）；
       ② 四维得分 / 综合分为原型示意，图上与文案均标注需接平台真实 AI 解析报告；
       ③ 右侧 = 「历次形象礼仪测评」3 条横条统计图 +「测评维度 → 待补齐」关联分析图。
     不编造成果：照片原图、服装选择参数、投递反馈平台暂无数据，只写「未沉淀 / 未复测」。
     类名用 .gx-ai--etiquette / .gx-et-*，避开 .gx-rs-*(v60) / .gx-ac-*(v55) 等已有皮肤；
     回滚：删掉 gxModuleSheet 里的这一行分支即可回到通用测评卡。
     ========================================================================== */
  ca.etiquetteSummary = {
    diag: '平台归档了学生自己做过的 3 次 AI形象礼仪测评：第二年 5 月「日常办公」61 分，第三年 3 月学完《职场礼仪与形象管理》8 节课后「面试」复测 73 分，同年 6 月对准数字媒体运营岗再测至 82 分。每次上传形象照、选服装与岗位/着装场景，AI 解析形象与仪态后输出一份测评报告；着装规范 64→86 提升最快，仪容仪态 58→79 仍是最低项。短板有三：测评集中在第二、第三年，第四年 8 场校招、投递 3 家企业、AI 面试 82 分却未复测；场景只覆盖日常办公与面试，未测商务会议；归档只有分数与结论，照片、服装与场景参数未随报告沉淀。总体判断：已从「不知道怎么穿」走到「按岗位场景准备形象」，但「测评→修正→求职验证」未闭环。',
    advice: '以第三次 82 分报告为基线，毕业学年补一次「数字媒体运营岗 · 面试」复测，针对仪容仪态 79 分做姿态与表情的视频回看对照，并补测商务会议场景。把岗位名称、着装场景、服装选择与报告结论一并归档，关联 AI 面试 82 分、求职现行版简历和 8 场校招。院校侧可把「有课程记录、无形象测评」「超过一学年未复测」设为提醒，将四维得分接入就业指导。得分为原型示意，需接真实 AI 解析报告；照片与投递反馈暂无数据，未作成果推断。',
    stats: {
      rounds: [
        { name: '首次测评', scene: '日常办公 · 通用形象', score: 61, color: '#C9D8B8', dims: '着装 64 / 仪态 58 / 岗位 55 / 场景 67' },
        { name: '面试复测', scene: '面试 · 数字媒体运营实习生', score: 73, color: '#8FBF5A', dims: '着装 78 / 仪态 70 / 岗位 72 / 场景 72' },
        { name: '求职定稿', scene: '面试 · 数字媒体运营岗', score: 82, color: '#5CAD6A', dims: '着装 86 / 仪态 79 / 岗位 82 / 场景 81' }
      ],
      gaps: [
        { module: '仪容仪态 79', action: '复测姿态表情', color: '#E7B84B' },
        { module: '场景覆盖 2/3', action: '补商务会议', color: '#7FA8D0' },
        { module: '第四年复测', action: '求职季前补测', color: '#B9A0D0' }
      ]
    }
  };

  function gxEtiquetteAi() {
    var a = ca.etiquetteSummary, s = a.stats;
    var bars = s.rounds.map(function (v) {
      return '<li class="gx-et-bar" title="' + gxEsc(v.name + ' · ' + v.scene + ' · ' + v.dims) + '">' +
        '<span class="gx-et-bar-name">' + gxEsc(v.name) + '</span>' +
        '<div class="gx-et-bar-track"><i style="width:' + v.score + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.score + '</b></li>';
    }).join('');
    var gaps = s.gaps.map(function (g) {
      return '<li class="gx-et-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-et-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--etiquette">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-et-viz">' +
        '<div class="gx-et-chart">' +
          '<div class="gx-et-chart-head"><h4>历次形象礼仪测评</h4>' +
            '<span>3 次 · 61 → 82 分</span></div>' +
          '<ul class="gx-et-bars">' + bars + '</ul>' +
          '<div class="gx-et-gaps-box">' +
            '<h4>测评维度 → 待补齐</h4>' +
            '<p class="gx-et-gaps-note">3 处未形成闭环</p>' +
            '<ul class="gx-et-gaps">' + gaps + '</ul>' +
          '</div>' +
          '<p class="gx-et-disclaimer">* 得分为原型示意，需接平台真实 AI 解析报告</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ==========================================================================
     v62 · 「职场沟通技巧」顶部 AI 总结及建议：围绕学生做过的历史 AI 情景对话实训
     --------------------------------------------------------------------------
     产品口径（AskUserQuestion 已确认）：这是「实训工具」，不是课程也不是测评 ——
       选职场沟通场景 → 与 AI 扮演的对象对话演练 → 按 4 个维度评分 → 输出实训报告。
     原型里没有该工具的独立页面（ai-tool-redirect.js 只有简历 / 面试 / 礼仪三个工具），
     故按用户给的定义建模；原「训练营 8 节」记录保留作为课程基础，不牵动任何已上线页面
     （v50 线上课 3 门课、v58 活动大类均不含此业务标签）。
     数据口径：补 3 次历史实训（向上汇报 / 跨部门协作 / 客户沟通），综合 68→76→84；
       四维（表达清晰度 / 逻辑结构 / 倾听回应 / 情绪管理）均值严格等于综合分；
       得分为原型示意，图上与文案均标注需接真实实训报告。
     不编造成果：对话逐轮原文、AI 反馈、面试反馈平台暂无数据，只写「未沉淀 / 未复训」。
     类名 .gx-ai--comms / .gx-cm-*，避开 .gx-et-*(v61) / .gx-rs-*(v60) /
       .gx-cs-*(v53) / .gx-ap-*(v54) / .gx-ac-*(v55) / .gx-vd-*(v52)。
     回滚：删掉 gxModuleSheet 里的这一行分支即可回到通用测评卡。
     ========================================================================== */
  ca.commsSummary = {
    diag: '平台归档了学生自己做过的 3 次职场沟通技巧 AI 情景对话实训：第二年 6 月「向上汇报」68 分，第三年 1 月完成 8 节训练营后做「跨部门协作」76 分，同年 5 月「客户沟通」84 分。每次选场景与 AI 对象对话演练，按表达清晰度、逻辑结构、倾听回应、情绪管理四维评分并输出实训报告。表达清晰度 72→88 提升最快，逻辑结构 64→84 起步最低。短板有三：实训集中在第二、第三年，第四年 AI 面试 82 分、8 场校招、投递 3 家却未再演练；只覆盖 3 类场景，冲突处理未测；归档只有分数与结论，对话记录、AI 反馈与改进动作未沉淀。总体判断：已从「不敢开口」走到「按场景组织表达」，但「演练→反馈→求职验证」未闭环。',
    advice: '以 84 分报告为基线，毕业学年补一次「数字媒体运营岗 · 跨部门提案」实训，针对逻辑结构 84 分做结论先行的逐轮对照，并补测冲突处理场景。把每次的场景、对话、AI 反馈与改进动作归档，关联 AI 面试 82 分、求职现行版简历和 8 场校招，检验表达训练是否转化为面试表现。院校侧可把「有课时、无实训」「超过一学年未复训」设为提醒，把四维得分接入就业指导。得分为原型示意，需接真实实训报告；对话原文与面试反馈暂无数据，未作成果推断。',
    stats: {
      rounds: [
        { name: '向上汇报', scene: '第 1 次 · 与 AI 上级对话', score: 68, color: '#C9D8B8', dims: '表达 72 / 逻辑 64 / 倾听 66 / 情绪 70' },
        { name: '跨部门协作', scene: '第 2 次 · 与 AI 协作方对话', score: 76, color: '#8FBF5A', dims: '表达 80 / 逻辑 74 / 倾听 76 / 情绪 74' },
        { name: '客户沟通', scene: '第 3 次 · 与 AI 客户对话', score: 84, color: '#5CAD6A', dims: '表达 88 / 逻辑 84 / 倾听 82 / 情绪 82' }
      ],
      gaps: [
        { module: '逻辑结构 84', action: '结论先行复训', color: '#E7B84B' },
        { module: '倾听回应 82', action: '追问与复述', color: '#7FA8D0' },
        { module: '冲突处理场景', action: '尚未覆盖', color: '#B9A0D0' }
      ]
    }
  };

  function gxCommsAi() {
    var a = ca.commsSummary, s = a.stats;
    var bars = s.rounds.map(function (v) {
      return '<li class="gx-cm-bar" title="' + gxEsc(v.name + ' · ' + v.scene + ' · ' + v.dims) + '">' +
        '<span class="gx-cm-bar-name">' + gxEsc(v.name) + '</span>' +
        '<div class="gx-cm-bar-track"><i style="width:' + v.score + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.score + '</b></li>';
    }).join('');
    var gaps = s.gaps.map(function (g) {
      return '<li class="gx-cm-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-cm-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--comms">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-cm-viz">' +
        '<div class="gx-cm-chart">' +
          '<div class="gx-cm-chart-head"><h4>历次沟通实训</h4>' +
            '<span>3 次 · 68 → 84 分</span></div>' +
          '<ul class="gx-cm-bars">' + bars + '</ul>' +
          '<div class="gx-cm-gaps-box">' +
            '<h4>沟通维度 → 待补齐</h4>' +
            '<p class="gx-cm-gaps-note">3 处未形成闭环</p>' +
            '<ul class="gx-cm-gaps">' + gaps + '</ul>' +
          '</div>' +
          '<p class="gx-cm-disclaimer">* 得分为原型示意，需接平台真实实训报告</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ==========================================================================
     v63 · 「就业活动」顶部 AI 总结及建议：围绕学生参加过的历史就业活动
     --------------------------------------------------------------------------
     用户口径：就业活动 = 毕业生就业相关活动的**揽括**（就业实训 / 就业讲座 /
       就业实践 / 双选洽谈 / 政策宣讲等），不是一个单一场次；
       AI 总结要根据学生参加的就业活动数据分析，右侧图要与总结关联。
     原实现：与其余通用模块共用 gxAssessAi() → ca.assessmentSummary，
       文案是「历次职业测评 / 职业锚 / 人才星图」，环形图是 6 项测评维度，与就业活动无关。
     做法：不改通用 gxAssessAi()，新增 gxEmployAi()。右上角换成
       ①「就业活动 · 参与深度」4 条横条 —— 统计图，宽度按 62/40/52/76 分（时间序）
       ②「三段记录 → 待补齐」3 行关联 —— 分析图，与 v58 的参与凭证 / 过程沉淀 /
          成果结论同一套模型，色点一一对应
     数据自洽（v63 已把 4 场写进 ca.gradeRecords，与时间轴、v58 归档三处同源）：
       2024-04 就业实训 62 分（第二年）/ 2024-10 双选洽谈 40 分（第三年，原有记录）/
       2024-11 就业讲座 52 分 / 2025-03 就业实践 76 分（第三年）
       双选会 40 分是 4 场最低 —— 只到场未跟进，正好被文案点成短板，不做美化。
     参与深度为原型示意（平台暂无签到与成果数据），图上与文案均标注；
       不编造投递结果、企业反馈等成果。
     类名 .gx-ai--employ / .gx-em-*，避开 .gx-cm-*(v62) / .gx-et-*(v61) /
       .gx-rs-*(v60) / .gx-ac-*(v55) 等已有皮肤。
     回滚：删掉 gxModuleSheet 里这一行分支即可回到通用测评卡。
     ========================================================================== */
  ca.employSummary = {
    diag: '平台归档了学生参加的 4 场就业活动：第二年 4 月「简历与面试实战工作坊」就业实训 3 天，参与深度 62 分；第三年 10 月「2025届实习生双选洽谈会」沟通 6 家企业，40 分；同年 11 月「行业形势与岗位需求」讲座，会后提 3 条岗位疑问，52 分；第三年 3 月「校企合作短视频运营项目」6 周实践，承担脚本与数据周报，76 分。覆盖面较好：四类齐全，从第二年第 2 学期延伸到第三年春季，与 AI 简历 3 版迭代、AI 面试 82 分在同一条求职主线上。短板有三：4 场都只记录「参加了」，签到、沟通企业与投递结果未归档；实训与项目产出没回填；双选会只到场未跟进，是最浅的一场。总体判断：已从「被动参加」走到「主动进项目」，但「参与→产出→投递结果」未闭环。',
    advice: '以 6 周项目实践做样板，补齐产出清单：脚本作品、账号数据周报、带教评语，回填求职表现能力；把双选会沟通的 6 家企业整理成跟进表（岗位、联系人、投递状态）。毕业学年优先参加与数字媒体运营岗对口的实训与宣讲，每场结束 3 天内补一段过程沉淀，并与求职现行版简历、8 场校招投递串成链。院校侧可把「只报名未签到」「参加后无产出」设为提醒。参与深度为原型示意，需接平台真实签到与成果数据。',
    stats: {
      rounds: [
        { name: '就业实训', scene: '2024-04 · 简历与面试工作坊', score: 62, color: '#C9D8B8', dims: '3 天 · 简历诊断 + 模拟群面' },
        { name: '双选洽谈', scene: '2024-10 · 2025届实习生双选会', score: 40, color: '#B9C4B0', dims: '沟通 6 家企业 · 未跟进' },
        { name: '就业讲座', scene: '2024-11 · 行业形势与岗位需求', score: 52, color: '#8FBF5A', dims: '会后提交 3 条岗位疑问' },
        { name: '就业实践', scene: '2025-03 · 校企合作短视频运营', score: 76, color: '#5CAD6A', dims: '6 周 · 脚本与数据周报' }
      ],
      gaps: [
        { module: '参与凭证 4/4', action: '签到未归档', color: '#E7B84B' },
        { module: '过程沉淀 1/4', action: '补实训产出', color: '#7FA8D0' },
        { module: '成果结论 0/4', action: '关联能力维度', color: '#B9A0D0' }
      ]
    }
  };

  function gxEmployAi() {
    var a = ca.employSummary, s = a.stats;
    var bars = s.rounds.map(function (v) {
      return '<li class="gx-em-bar" title="' + gxEsc(v.scene + ' · ' + v.dims + ' · 参与深度 ' + v.score) + '">' +
        '<span class="gx-em-bar-name">' + gxEsc(v.name) + '</span>' +
        '<div class="gx-em-bar-track"><i style="width:' + v.score + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.score + '</b></li>';
    }).join('');
    var gaps = s.gaps.map(function (g) {
      return '<li class="gx-em-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-em-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--employ">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-em-viz">' +
        '<div class="gx-em-chart">' +
          '<div class="gx-em-chart-head"><h4>就业活动 · 参与深度</h4>' +
            '<span>4 场 · 40 → 76 分</span></div>' +
          '<ul class="gx-em-bars">' + bars + '</ul>' +
          '<div class="gx-em-gaps-box">' +
            '<h4>三段记录 → 待补齐</h4>' +
            '<p class="gx-em-gaps-note">4 场仅 1 场有过程沉淀</p>' +
            '<ul class="gx-em-gaps">' + gaps + '</ul>' +
          '</div>' +
          '<p class="gx-em-disclaimer">* 参与深度为原型示意，需接平台真实签到与成果数据</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ==========================================================================
     v63 · 「大学生职业规划大赛 / 大学生创新大赛」顶部 AI 总结及建议
     --------------------------------------------------------------------------
     用户口径：这两个成长档案详情页**就是为了记录学生参与过的赛事信息**；
       AI 总结要和学生参赛记录相关，右侧图要与该赛事参赛记录关联。
     原实现：两个赛事都走 gxAssessAi() → 职业测评文案 + 6 维环形图，与赛事完全无关。
     做法：不改通用 gxAssessAi()，新增参数化 gxContestAi(kind)，
       kind = 'career' | 'innov'，数据取 ca.contestSummary[kind]。
       两赛共用同一套版式（同属「赛事」产品语义，视觉应一致），但文案、数字、
       阶段名、短板各自独立，不互相复用。右上角：
       ①「参赛阶段推进」3 条横条 —— 统计图，宽度按各阶段方案成熟度分
       ②「赛事环节 → 待补齐」3 行关联 —— 分析图，色点对应缺证据的环节
     数据自洽（v63 已把各 3 条阶段写进 ca.gradeRecords，与时间轴、v58 学科竞赛子类同源）：
       职规赛 = 2024-11 院级选拔赛 62 → 2025-05 校级初赛 74 → 2025-06 校级决赛 86（二等奖）
       创新赛 = 2024-09 项目申报 58 → 2024-09 院级初评 71 → 2024-10 校级决赛 80（三等奖）
       决赛阶段与两条原有记录（2025-06-30 / 2024-10-08）逐字对应，未改原记录。
     成熟度为原型示意（平台暂无评审数据），图上与文案均标注；
       作品原文、团队分工、评委反馈平台暂无数据，只写「未归档 / 未关联」，不编造成果。
     类名 .gx-ai--contest / .gx-ct-*，避开 .gx-em-*(v63 就业活动) 等已有皮肤。
     回滚：删掉 gxModuleSheet 里这两行分支即可回到通用测评卡。
     ========================================================================== */
  ca.contestSummary = {
    career: {
      name: '大学生职业规划大赛',
      diag: '平台归档了学生参加大学生职业规划大赛的完整参赛链：第三年 11 月院级选拔赛，提交《数字媒体运营方向职业生涯规划书》，获院级一等奖晋级，成熟度 62 分；第三年 5 月校级初赛完成 8 分钟陈述与答辩晋级，74 分；同年 6 月校级决赛获二等奖，86 分。从院赛到决赛约 7 个月，规划方案随 AI 简历 3 版迭代、职业礼仪 82 分、AI 面试 82 分收敛到数字媒体运营岗。短板有三：三条记录只有阶段与奖项，规划书原文、答辩 PPT 与评委反馈未归档；个人参赛还是团队、本人承担哪部分未写明；62 分到 86 分的提升原因未沉淀成方法。总体判断：参赛链完整、结果可查，但「作品→分工→复盘」缺证据。',
      advice: '把三版规划书（院赛稿 / 初赛稿 / 决赛稿）与答辩 PPT 上传归档，标注本人承担的部分（自我认知、岗位调研、路径设计）；整理评委提问与自己的应答写成复盘，解释 62 分到 86 分的关键改动。毕业学年把该赛事成果与创新大赛项目、求职现行版简历并列，作为竞赛成长能力的对外证据。院校侧建议赛事模块统一「报名 → 晋级 → 作品 → 奖项 → 复盘」五段归档，把院赛与校赛关联为同一条参赛链。方案成熟度为原型示意，需接平台真实评审数据。',
      head: '参赛阶段推进',
      sub: '3 阶段 · 62 → 86 分',
      gapTitle: '赛事环节 → 待补齐',
      gapNote: '3 处未形成证据',
      disclaimer: '* 成熟度为原型示意，需接平台真实评审数据',
      rounds: [
        { name: '院级选拔赛', scene: '2024-11 · 规划书院级一等奖', score: 62, color: '#C9D8B8', dims: '提交规划书 · 晋级校赛' },
        { name: '校级初赛', scene: '2025-05 · 陈述与答辩晋级', score: 74, color: '#8FBF5A', dims: '8 分钟陈述 · 晋级决赛' },
        { name: '校级决赛', scene: '2025-06 · 校级二等奖', score: 86, color: '#5CAD6A', dims: '决赛答辩 · 二等奖' }
      ],
      gaps: [
        { module: '规划书原文', action: '三版归档', color: '#E7B84B' },
        { module: '承担分工', action: '未写明', color: '#7FA8D0' },
        { module: '评委反馈', action: '未沉淀复盘', color: '#B9A0D0' }
      ]
    },
    innov: {
      name: '大学生创新大赛',
      diag: '平台归档了学生参加大学生创新大赛的完整参赛链：第四年 9 月项目申报，组建 4 人团队提交《基于AIGC的校园文创设计平台》计划书，成熟度 58 分；同月院级初评完成 6 分钟路演答辩晋级，71 分；10 月校级决赛获三等奖，80 分。从申报到决赛约 1 个月，创意来自数字媒体技术专业课程，与求职现行版简历的作品集可打通。短板有三：三条记录只有阶段与奖项，项目计划书、路演 PPT 与原型 Demo 未归档；团队里本人承担什么角色（产品设计 / 视觉 / 技术）未写明；58 分到 80 分的关键改动未沉淀成方法论。总体判断：参赛链完整、结果可查，但「作品→分工→复盘」缺证据。',
      advice: '把项目计划书、路演 PPT 与「基于AIGC的校园文创设计平台」原型 Demo 上传归档，标注本人承担的产品设计与视觉部分；整理评委提问写成复盘，说明 58 分到 80 分补了哪些内容（用户调研、商业模式、技术可行性）。把项目产出与职业规划大赛奖项、求职现行版简历的作品集链接打通，作为竞赛成长能力与产品能力的双重证据。院校侧建议赛事模块统一「报名 → 晋级 → 作品 → 奖项 → 复盘」五段归档，并把团队分工设为必填。方案成熟度为原型示意，需接平台真实评审数据。',
      head: '参赛阶段推进',
      sub: '3 阶段 · 58 → 80 分',
      gapTitle: '赛事环节 → 待补齐',
      gapNote: '3 处未形成证据',
      disclaimer: '* 成熟度为原型示意，需接平台真实评审数据',
      rounds: [
        { name: '项目申报', scene: '2024-09 · 4 人团队提交计划书', score: 58, color: '#C9D8B8', dims: '计划书 · 项目立项' },
        { name: '院级初评', scene: '2024-09 · 路演答辩晋级', score: 71, color: '#8FBF5A', dims: '6 分钟路演 · 晋级决赛' },
        { name: '校级决赛', scene: '2024-10 · 校级三等奖', score: 80, color: '#5CAD6A', dims: '决赛答辩 · 三等奖' }
      ],
      gaps: [
        { module: '项目计划书', action: '原文未归档', color: '#E7B84B' },
        { module: '团队分工', action: '本人角色未写明', color: '#7FA8D0' },
        { module: '路演与 Demo', action: '原型未关联', color: '#B9A0D0' }
      ]
    }
  };

  function gxContestAi(kind) {
    var a = ca.contestSummary[kind] || ca.contestSummary.career;
    var bars = a.rounds.map(function (v) {
      return '<li class="gx-ct-bar" title="' + gxEsc(v.scene + ' · ' + v.dims + ' · 成熟度 ' + v.score) + '">' +
        '<span class="gx-ct-bar-name">' + gxEsc(v.name) + '</span>' +
        '<div class="gx-ct-bar-track"><i style="width:' + v.score + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.score + '</b></li>';
    }).join('');
    var gaps = a.gaps.map(function (g) {
      return '<li class="gx-ct-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-ct-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--contest">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-ct-viz">' +
        '<div class="gx-ct-chart">' +
          '<div class="gx-ct-chart-head"><h4>' + gxEsc(a.head) + '</h4>' +
            '<span>' + gxEsc(a.sub) + '</span></div>' +
          '<ul class="gx-ct-bars">' + bars + '</ul>' +
          '<div class="gx-ct-gaps-box">' +
            '<h4>' + gxEsc(a.gapTitle) + '</h4>' +
            '<p class="gx-ct-gaps-note">' + gxEsc(a.gapNote) + '</p>' +
            '<ul class="gx-ct-gaps">' + gaps + '</ul>' +
          '</div>' +
          '<p class="gx-ct-disclaimer">' + gxEsc(a.disclaimer) + '</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ==========================================================================
     v64 · 「毕业意向 / 宣讲会 / 双选会 / AI助理」四页专属 AI 总结及建议
     --------------------------------------------------------------------------
     用户口径（AskUserQuestion 四项全选推荐）：
       ① 毕业意向补 2 条演变（双向准备 → 倾向就业 → 正式填报）；
       ② 宣讲会 / 双选会不补记录，直接基于现有 6+2 条校招记录做分析 ——
          避免再动生涯活动 21 场口径（同一批 business_type='校招活动参与情况'）；
       ③ AI助理补 3 次提问（职业方向 → 简历写法 → 宣讲会挑选）；
       ④ 本轮只换顶部 AI 卡与右侧图，下方保持通用「模块记录 + 模块说明」。
     原实现：四页共用 gxAssessAi() → 职业测评文案 + 6 维环形图，且 aiScroll=112px 被裁。
     四张卡与右侧图设计（均与该页业务强关联）：
       毕业意向  ①「直接就业方向 · 支撑证据」4 条横条 —— 数据全部取自既有模块示意口径
                 （简历 78% / AI 面试 82 / 就业实践 76 / 双选洽谈 40），不另造分数；
                 ②「意向 → 待补齐」意向城市 / 期望薪资 / 考研备选未留档
       宣讲会    ①「宣讲会参与漏斗」4 条 —— 报名 6/6（100%）→ 签到未归档 → 要点未沉淀
                 → 投递 0/6，只有第一条有宽度，「广度停在报名」正是诊断结论；
                 ② 行业对口 0/6 / 签到要点 / 投递转化
       双选会    ①「双选会参与漏斗」4 条 —— 报名 2/2 → 到场未归档 → 沟通未记录 → 投递 0/2
                 ② 目标清单 / 现场沟通 / 投递反馈
       AI助理    ①「提问 → 行动转化」3 条 —— 前两次 100%（简历定向 / 3 版迭代）、
                 第三次 0%（行业筛选建议未应用），与 6 场不对口宣讲会形成呼应；
                 ②「提问 → 产生的行动」3 行关联
     关键叙事联动：AI助理第三问（2024-09-20 行业筛选）→ 宣讲会页「对口 0/6」→
       双选会页「停在报名」→ 毕业意向页「方向已定但参数未补」，四页互相引用、口径一致。
     不编造成果：签到、到场、沟通、投递平台暂无数据，一律「未归档 / 未记录 / 0」。
     类名 .gx-in-* / .gx-tk-* / .gx-fw-* / .gx-ax-*，避开 v63 已占用的
       .gx-em- / .gx-ep- / .gx-ct- / .gx-ct2- 与更早的 .gx-cs-* 等。
     回滚：删掉 gxModuleSheet 里对应四行分支 + 本数据块 + CSS 区块即可。
     ========================================================================== */
  ca.intentionSummary = {
    diag: '平台归档了学生的毕业意向演变：第二年 5 月填报初稿「考研与就业双向准备」，第三年 8 月结合简历岗位定向优化更新为「倾向直接就业 · 数字媒体方向」，第四年 10 月正式填报「直接就业 · 数字媒体运营类岗位」。三段演变与求职主线同步：意向确定后简历 3 版迭代至 78%、AI 面试 82 分、6 周就业实践 76 分，全部对准数字媒体运营岗。短板有三：意向里没有意向城市、期望薪资等求职参数；「考研」备选路径未留档，无法回看当时的权衡依据；10 月填报后意向未再更新，毕业学年求职进展没有回写到意向档案。总体判断：方向已定且执行到位，但意向档案还只是一句话，撑不起求职决策。',
    advice: '补齐意向档案的求职参数：意向城市、期望薪资、到岗时间，与求职现行版简历保持一致；把「考研 vs 就业」的权衡依据（家庭意见、行业判断、能力匹配）补成一段记录，让当时的决策可回看。毕业学年每完成一次面试或投递，把进展回写意向档案，形成「意向 → 行动 → 结果」闭环。院校侧可把「有课程与测评、无意向填报」「意向填报后长期未更新」设为提醒。支撑得分为各模块示意口径。',
    stats: {
      rounds: [
        { name: 'AI 模拟面试', scene: '2025-05 · 数字媒体运营岗', score: 82, color: '#5CAD6A' },
        { name: '求职现行版简历', scene: '2025-04 · 岗位匹配度', score: 78, color: '#8FBF5A' },
        { name: '就业实践深度', scene: '2025-03 · 6 周短视频运营', score: 76, color: '#8FBF5A' },
        { name: '双选洽谈深度', scene: '2024-10 · 只到场未跟进', score: 40, color: '#B9C4B0' }
      ],
      gaps: [
        { module: '意向城市', action: '未填写', color: '#E7B84B' },
        { module: '期望薪资', action: '未填写', color: '#7FA8D0' },
        { module: '考研备选', action: '未留档', color: '#B9A0D0' }
      ]
    }
  };

  function gxIntentionAi() {
    var a = ca.intentionSummary, s = a.stats;
    var bars = s.rounds.map(function (v) {
      return '<li class="gx-in-bar" title="' + gxEsc(v.scene + ' · ' + v.score) + '">' +
        '<span class="gx-in-bar-name">' + gxEsc(v.name) + '</span>' +
        '<div class="gx-in-bar-track"><i style="width:' + v.score + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.score + '</b></li>';
    }).join('');
    var gaps = s.gaps.map(function (g) {
      return '<li class="gx-in-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-in-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--intention">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-in-viz">' +
        '<div class="gx-in-chart">' +
          '<div class="gx-in-chart-head"><h4>直接就业方向 · 支撑证据</h4>' +
            '<span>4 项 · 全对准运营岗</span></div>' +
          '<ul class="gx-in-bars">' + bars + '</ul>' +
          '<div class="gx-in-gaps-box">' +
            '<h4>意向 → 待补齐</h4>' +
            '<p class="gx-in-gaps-note">3 项求职参数未归档</p>' +
            '<ul class="gx-in-gaps">' + gaps + '</ul>' +
          '</div>' +
          '<p class="gx-in-disclaimer">* 得分沿用各模块示意口径</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  ca.talkSummary = {
    diag: '平台归档了学生报名的 6 场企业宣讲会（第四年 9 月）：中建西部建设、中广核、中石化、海康电梯属基建与制造，美的属家电制造，安克创新属消费电子，集中在 9 月上中旬 5 天内报名。诊断要点：6 家里没有一家是数字媒体、互联网或文创内容行业，与毕业意向「数字媒体运营类岗位」明显错位；6 场都只记录「报名了」，签到、宣讲要点、现场沟通与投递结果未归档；9 月 20 日已向 AI 助理问过「怎么挑对口的宣讲会」，但筛选建议没有应用到已报名场次。总体判断：报名动作快、筛选动作缺，广度没有转化为对口机会。',
    advice: '用 AI 助理的行业筛选结论先做一轮过滤：毕业学年优先参加数字媒体、互联网、电商内容、文创行业的宣讲；已有 6 场报名里确实想去的 1-2 场补签到与宣讲要点，其余不强求到场；每场结束记录岗位要求与投递方式，与求职现行版简历版本对应。院校侧可把「报名行业与意向方向不符」「报名后无签到」设为提醒，并按意向方向推送对口宣讲。漏斗数据为原型示意，需接平台真实签到数据。',
    stats: {
      funnel: [
        { name: '已报名', val: '6 场', pct: 100, color: '#5CAD6A' },
        { name: '已签到', val: '未归档', pct: 0, color: '#8FBF5A' },
        { name: '宣讲要点', val: '未沉淀', pct: 0, color: '#E7B84B' },
        { name: '投递转化', val: '0 场', pct: 0, color: '#B9C4B0' }
      ],
      gaps: [
        { module: '行业对口 0/6', action: '按 AI 建议筛', color: '#E7B84B' },
        { module: '签到与要点', action: '每场补记', color: '#7FA8D0' },
        { module: '投递转化 0', action: '跟进目标岗', color: '#B9A0D0' }
      ]
    }
  };

  function gxTalkAi() {
    var a = ca.talkSummary, s = a.stats;
    var bars = s.funnel.map(function (v) {
      return '<li class="gx-tk-bar" title="' + gxEsc(v.name + ' · ' + v.val) + '">' +
        '<span class="gx-tk-bar-name">' + gxEsc(v.name) + '</span>' +
        '<div class="gx-tk-bar-track"><i style="width:' + v.pct + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.val + '</b></li>';
    }).join('');
    var gaps = s.gaps.map(function (g) {
      return '<li class="gx-tk-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-tk-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--talk">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-tk-viz">' +
        '<div class="gx-tk-chart">' +
          '<div class="gx-tk-chart-head"><h4>宣讲会参与漏斗</h4>' +
            '<span>6 场 · 停在报名</span></div>' +
          '<ul class="gx-tk-bars">' + bars + '</ul>' +
          '<div class="gx-tk-gaps-box">' +
            '<h4>环节 → 待补齐</h4>' +
            '<p class="gx-tk-gaps-note">6 场无一转化到投递</p>' +
            '<ul class="gx-tk-gaps">' + gaps + '</ul>' +
          '</div>' +
          '<p class="gx-tk-disclaimer">* 漏斗为原型示意，需接平台真实签到数据</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  ca.fairSummary = {
    diag: '平台归档了学生报名的 2 场双选会：第四年 9 月「长沙理工大学2025届秋季综合双选会（第一场）暨第八届校友企业专场招聘会」与「全国重点高校2025届秋季巡回招聘会长沙理工大学站」，都是大规模综合类招聘会，企业数量多、行业杂，与数字媒体运营岗的匹配要靠现场筛选。两场均只记录「报名了」，到场凭证、现场沟通企业清单、投递与反馈全部未归档；与 6 场宣讲会合计，第四年 8 场校招活动无一记录到报名之后的动作。总体判断：报名了最大的两次机会，但没有留下任何到场与转化证据。',
    advice: '下一场双选会前用 AI 助理列一份目标企业清单（数字媒体运营对口），现场按清单沟通并当场记录企业、岗位与联系人；会后 3 天内整理投递结果，标注使用的简历版本，与求职现行版简历对应。综合类双选会人流量大，建议把有限时间留给清单上的目标展位。院校侧可把「报名后无到场记录」设为提醒，并在双选会页面提供目标清单工具。漏斗数据为原型示意，需接平台真实签到数据。',
    stats: {
      funnel: [
        { name: '已报名', val: '2 场', pct: 100, color: '#5CAD6A' },
        { name: '已到场', val: '未归档', pct: 0, color: '#8FBF5A' },
        { name: '现场沟通', val: '未记录', pct: 0, color: '#E7B84B' },
        { name: '投递结果', val: '0 场', pct: 0, color: '#B9C4B0' }
      ],
      gaps: [
        { module: '目标清单', action: '会前用 AI 列', color: '#E7B84B' },
        { module: '现场沟通', action: '当场记录企业', color: '#7FA8D0' },
        { module: '投递反馈', action: '3 天内整理', color: '#B9A0D0' }
      ]
    }
  };

  function gxFairAi() {
    var a = ca.fairSummary, s = a.stats;
    var bars = s.funnel.map(function (v) {
      return '<li class="gx-fw-bar" title="' + gxEsc(v.name + ' · ' + v.val) + '">' +
        '<span class="gx-fw-bar-name">' + gxEsc(v.name) + '</span>' +
        '<div class="gx-fw-bar-track"><i style="width:' + v.pct + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.val + '</b></li>';
    }).join('');
    var gaps = s.gaps.map(function (g) {
      return '<li class="gx-fw-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-fw-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--fair">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-fw-viz">' +
        '<div class="gx-fw-chart">' +
          '<div class="gx-fw-chart-head"><h4>双选会参与漏斗</h4>' +
            '<span>2 场 · 停在报名</span></div>' +
          '<ul class="gx-fw-bars">' + bars + '</ul>' +
          '<div class="gx-fw-gaps-box">' +
            '<h4>环节 → 待补齐</h4>' +
            '<p class="gx-fw-gaps-note">与 6 场宣讲会同样停在报名</p>' +
            '<ul class="gx-fw-gaps">' + gaps + '</ul>' +
          '</div>' +
          '<p class="gx-fw-disclaimer">* 漏斗为原型示意，需接平台真实签到数据</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  ca.assistSummary = {
    diag: '平台归档了学生与 AI 生涯助理（小云同学）的 3 次提问：第二年 10 月问「数字媒体技术专业的就业方向有哪些」，获得岗位方向与能力要求梳理；第三年 7 月问「数字媒体运营岗的简历应该怎么写」，获得简历模块建议后转向 AI 简历继续优化；第四年 9 月问「9 月的宣讲会这么多，怎么挑跟数字媒体运营岗对口的」，获得行业筛选建议。提问节奏与成长主线吻合：方向问题出在探索期，方法问题出在准备期，筛选问题出在校招季。短板是前两次提问都转化成了行动（简历定向、3 版迭代），第三次行业筛选建议却没有落地——6 场已报名宣讲会里仍无一家数字媒体对口。总体判断：AI 助理已在关键节点给出方向，但建议到行动的最后一公里没走完。',
    advice: '把第三次提问的建议补落地：对 6 场已报名宣讲会做一轮对口过滤，决定去哪 1-2 场；毕业学年把「每场宣讲会、双选会先列目标清单」变成习惯动作，先问 AI 助理再报名。每次提问后把 AI 给出的建议要点存进档案，与后续行动（简历版本、面试训练、投递）关联，让「问了什么 → 做了什么」可回看。院校侧可把「提问后长期无对应行动」设为提醒。',
    stats: {
      rounds: [
        { name: '职业方向提问', scene: '2023-10 · 已转化为简历定向', score: 100, color: '#8FBF5A' },
        { name: '简历写法提问', scene: '2024-07 · 已转化为 3 版迭代', score: 100, color: '#5CAD6A' },
        { name: '宣讲会挑选提问', scene: '2024-09 · 建议未应用', score: 0, color: '#E7B84B' }
      ],
      gaps: [
        { module: '专业方向', action: '简历「岗位定向版」', color: '#E7B84B' },
        { module: '简历写法', action: '3 版迭代至 78%', color: '#7FA8D0' },
        { module: '行业筛选', action: '待应用到 6 场', color: '#B9A0D0' }
      ]
    }
  };

  function gxAssistAi() {
    var a = ca.assistSummary, s = a.stats;
    var bars = s.rounds.map(function (v) {
      return '<li class="gx-ax-bar" title="' + gxEsc(v.scene + ' · 转化 ' + v.score + '%') + '">' +
        '<span class="gx-ax-bar-name">' + gxEsc(v.name) + '</span>' +
        '<div class="gx-ax-bar-track"><i style="width:' + v.score + '%;background:' + v.color + '"></i></div>' +
        '<b>' + v.score + '%</b></li>';
    }).join('');
    var gaps = s.gaps.map(function (g) {
      return '<li class="gx-ax-gap"><i style="background:' + g.color + '"></i>' +
        '<span class="gx-ax-gap-module">' + gxEsc(g.module) + '</span>' +
        '<em>→</em><b>' + gxEsc(g.action) + '</b></li>';
    }).join('');
    return '<section class="gx-card gx-assess-ai gx-ai--assist">' +
      '<div class="gx-assess-ai-text">' +
        '<h3 class="gx-assess-ai-title">AI总结及建议</h3>' +
        '<p class="gx-assess-ai-p"><b>诊断总结：</b>' + a.diag + '</p>' +
        '<p class="gx-assess-ai-p"><b>后续建议：</b>' + a.advice + '</p>' +
      '</div>' +
      '<div class="gx-assess-ai-viz gx-ax-viz">' +
        '<div class="gx-ax-chart">' +
          '<div class="gx-ax-chart-head"><h4>提问 → 行动转化</h4>' +
            '<span>3 次 · 2 次已转化</span></div>' +
          '<ul class="gx-ax-bars">' + bars + '</ul>' +
          '<div class="gx-ax-gaps-box">' +
            '<h4>提问 → 产生的行动</h4>' +
            '<p class="gx-ax-gaps-note">第三次建议尚未落地</p>' +
            '<ul class="gx-ax-gaps">' + gaps + '</ul>' +
          '</div>' +
          '<p class="gx-ax-disclaimer">* 转化率为原型示意，需接平台真实行动数据</p>' +
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
    /* v52 微视频 / v53 线上咨询 / v54 预约咨询 / v55 生涯活动各用专属 AI 卡；
       v50 的线上课分支保留为回滚路径（当前已由 gxOcSheet 接管）；其余通用模块仍走
       默认测评 summary，行为与 v36 一致。五个专属分支都只是替换顶部 AI 卡，
       下方「模块记录 + 模块说明」本次均未改动。
       v56 起线上咨询 / 预约咨询、v57 起微视频已由 gxCrSheet / gxMvSheet 整体接管，
       本函数里这三个 AI 分支与通用下方结构均降级为回滚路径，正常路由不会走到。
       注意：线上咨询（小程序线上沟通）、预约咨询（线下一对一面询）、生涯活动（活动大类聚合）
       三条口径各自独立，数据、文案与图互不复用。 */
    var ai;
    if (activeSideTag === '微视频') ai = gxVideoAi();
    else if (activeSideTag === '线上咨询') ai = gxConsultAi();
    else if (activeSideTag === '预约咨询') ai = gxApptAi();
    else if (activeSideTag === '生涯活动') ai = gxActAi();
    /* v60：AI简历改用「学生历史简历版本」专属 AI 卡；删掉这一行即回到通用测评卡。 */
    else if (activeSideTag === 'AI简历') ai = gxResumeAi();
    /* v61：职业礼仪改用「历史 AI形象礼仪测评 + 报告」专属 AI 卡；删掉这一行即回滚。 */
    else if (activeSideTag === '职业礼仪') ai = gxEtiquetteAi();
    /* v62：职场沟通技巧改用「历史 AI 情景对话实训 + 报告」专属 AI 卡；删掉这一行即回滚。 */
    else if (activeSideTag === '职场沟通技巧') ai = gxCommsAi();
    /* v63：就业活动改用「历史就业活动参与深度」专属 AI 卡；删掉这一行即回滚。
       两个大赛共用参数化的 gxContestAi(kind)，文案与数据各自独立、版式一致；
       删掉对应行即回到通用测评卡。注意：生涯活动页（v58 归档）会统计这三类记录，
       改记录条数时必须同步 ca.activitySummary / ca.activityArchive 的场次口径。 */
    else if (activeSideTag === '就业活动') ai = gxEmployAi();
    else if (activeSideTag === '大学生职业规划大赛') ai = gxContestAi('career');
    else if (activeSideTag === '大学生创新大赛') ai = gxContestAi('innov');
    /* v64：毕业意向 / 宣讲会 / 双选会 / AI助理 各用专属 AI 卡（四项口径 AskUserQuestion 已确认）；
       宣讲会 / 双选会不补记录、直接基于现有校招数据做分析，生涯活动 21 场口径不受影响；
       删掉对应行即回到通用测评卡。 */
    else if (activeSideTag === '毕业意向') ai = gxIntentionAi();
    else if (activeSideTag === '宣讲会') ai = gxTalkAi();
    else if (activeSideTag === '双选会') ai = gxFairAi();
    else if (activeSideTag === 'AI助理') ai = gxAssistAi();
    else if (activeSideTag === '线上课') ai = gxAssessAi(ca.onlineCourseSummary, 'gx-ai--course');
    else ai = gxAssessAi();
    return '<div class="gx-sheet gx-sheet-module">' +
      ai +
      '<section class="gx-card gx-module-panel">' +
        '<div class="gx-module-bottom">' + gxModuleCard() + hint + '</div>' +
      '</section>' +
    '</div>';
  }

  /* ==========================================================================
     v56 · 「线上咨询 / 预约咨询」详情页下方：学生咨询记录档案（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：两张移动端图是学生查看咨询记录的页面，需要补齐 PC 端这两个模块
               「底下区域的详情记录页面」的内容。
     迁移原则：**只迁移字段结构与视觉信息架构**，不迁移移动端示例身份 / 时间线 /
               地点。移动端是「杨强-测试学生 / 2025届 软件技术 / 大二 / 2026 年 /
               北京高校就业创业指导中心」，PC 原型是「杨强 / 数字媒体技术 / 第四年 /
               2022—2025」，且顶部 AI 卡已锁定线上 8 次、预约 6 次；照搬会让同一页
               的 AI 卡与下方记录互相打架。咨询师姓名为本版示意数据，不覆盖 ca.basicInfo。
     字段迁移：
       线上记录 = 状态条「已结束」+「线上」角标 + 学生 + 阶段主题 + 发起时间 + 问题 +
                  咨询老师 + 回复时间 + 回复内容 +「评价 / 查看记录」
       线下记录 =「线下」角标 + 类别筛选 + 学生 + 阶段主题 + 提交时间 + 预约咨询师 +
                  日期 + 时间 + 地点 + 咨询状态 + 问题 +「私信」
       公共底部 = 温馨提示 +「查看咨询档案」
     数据自洽：
       线上 8 次 = 生涯规划师 3 + 就业指导老师 2 + 行业/专业/心理咨询师各 1，
         最近一条 2024-09-25 20:06:13「就业与考研的权衡选择」与 ca.gradeRecords
         第四年记录、v53 AI 卡逐字对应；其中落地类（岗位匹配 / 简历面试）2 次。
       预约 6 次 = 生涯规划 2 + 就业指导/学业发展/心理调适/其他各 1，
         转化 6 发起 → 5 老师接受 → 4 完成线下面询；最早一条 2022-12-05 14:38:20
         「专业方向与职业选择」与 ca.gradeRecords 第一年记录、v54 AI 卡逐字对应。
       两页都是**跨学年汇总档案**，不受左栏 activeArchiveGrade 过滤影响（同 v51 课程
       学习档案），所以预约咨询第四年空态不会让下方变空；断层单独写进右栏提示。
     温馨提示按渠道分流：线下保留移动端原句的下半段（提前 10 分钟、交通安全、出校
       报备），但地点改为「预约记录中标注的咨询室」；线上改为小程序会话口径，
       不再出现「到达咨询室」这类与线上咨询矛盾的文案。
     顶部 AI 卡完全复用 gxConsultAi() / gxApptAi()，本次一字未改。
     ========================================================================== */
  ca.consultRecords = {
    online: {
      kind: 'online',
      title: '我的线上咨询记录',
      subtitle: '云生涯Max 小程序发起 · 跨学年汇总 8 次 · 不受左栏年级筛选影响',
      recordsTitle: '咨询记录',
      recordsTip: '点击「查看记录」展开咨询往来与归档状态',
      tabs: [
        { k: 'all', label: '全部', n: 8 },
        { k: 'c1', label: '生涯规划师', n: 3 },
        { k: 'c2', label: '就业指导老师', n: 2 },
        { k: 'other', label: '其他类别', n: 3 }
      ],
      kpis: [
        { v: '8', u: '次', label: '累计线上咨询' },
        { v: '5', u: '类', label: '覆盖老师类别' },
        { v: '8', u: '条', label: '老师已回复' },
        { v: '0', u: '条', label: '结论归档', warn: true }
      ],
      chain: ['小程序选择老师类别', '线上咨询沟通', '评价与结论归档'],
      tips: '线上咨询通过云生涯Max 小程序进行，请按老师回复时段进入会话；结束后及时评价，并把咨询结论与行动清单回填成长档案。',
      gap: '最近一次为 2024 年 9 月 25 日，毕业学年未再发起；8 次咨询的结论与行动清单均未回填，效果暂无法复核。',
      records: [
        {
          id: 'ol1', grade: '第四年', stage: '第四年 · 就业与考研权衡', cat: '生涯规划师', group: 'c1',
          at: '2024-09-25 20:06:13', question: '就业与考研如何权衡？家里希望考研，我更想直接就业。',
          teacher: '生涯规划师 · 周敏老师', replyAt: '2024-09-25 20:14:52',
          reply: '先结合毕业意向与岗位要求做一次取舍，建议同步准备秋招并保留考研选项，两周后复盘一次。',
          rating: '待评价', dimension: '自我认知能力'
        },
        {
          id: 'ol2', grade: '第三年', stage: '第三年 · 行业与岗位认知', cat: '行业导师', group: 'other',
          at: '2024-05-18 19:32:40', question: '数字媒体运营岗的能力要求与我的专业怎么对应？',
          teacher: '行业导师 · 陈立老师', replyAt: '2024-05-18 19:48:11',
          reply: '先对照岗位 JD 拆出内容策划、数据复盘两项核心能力，再用课程项目与作品集补证据。',
          rating: '已评价 · 5 星', dimension: '职业认知能力'
        },
        {
          id: 'ol3', grade: '第二年', stage: '第二年 · 简历与面试准备', cat: '就业指导老师', group: 'c2',
          at: '2024-03-12 15:08:26', question: '实习简历里该突出哪些经历？',
          teacher: '就业指导老师 · 许岚老师', replyAt: '2024-03-12 15:21:03',
          reply: '优先放与岗位相关的课程项目和量化结果，删除无关证书，面试前再准备三段 STAR 表述。',
          rating: '已评价 · 5 星', dimension: '求职表现能力'
        },
        {
          id: 'ol4', grade: '第二年', stage: '第二年 · 专业方向确认', cat: '专业导师', group: 'other',
          at: '2023-11-06 20:41:09', question: '数字媒体技术更偏设计还是偏开发？',
          teacher: '专业导师 · 何舟老师', replyAt: '2023-11-06 20:55:37',
          reply: '两条路径都可行，建议先按作品方向选课，再用一次课程项目验证自己更擅长哪一段。',
          rating: '已评价 · 4 星', dimension: '职业规划能力'
        },
        {
          id: 'ol5', grade: '第一年', stage: '第一年 · 专业方向确认', cat: '生涯规划师', group: 'c1',
          at: '2023-06-20 16:22:55', question: '入学一年还不确定专业方向，怎么开始探索？',
          teacher: '生涯规划师 · 周敏老师', replyAt: '2023-06-20 16:40:18',
          reply: '先完成职业兴趣测评，再选 2 个方向各做一次行业访谈，把结论记进成长档案。',
          rating: '已评价 · 5 星', dimension: '自我认知能力'
        },
        {
          id: 'ol6', grade: '第一年', stage: '第一年 · 竞赛与学业平衡', cat: '心理咨询师', group: 'other',
          at: '2023-04-11 21:03:17', question: '同时准备竞赛和课业，最近压力有点大。',
          teacher: '心理咨询师 · 苏禾老师', replyAt: '2023-04-11 21:17:44',
          reply: '先把任务按重要与紧急拆开，保留固定休息时段；如果持续失眠，建议预约一次线下面询。',
          rating: '已评价 · 5 星', dimension: '自我认知能力'
        },
        {
          id: 'ol7', grade: '第一年', stage: '第一年 · 职业兴趣解读', cat: '生涯规划师', group: 'c1',
          at: '2023-01-09 10:47:33', question: '霍兰德测评结果是艺术型、社会型、研究型，怎么理解？',
          teacher: '生涯规划师 · 周敏老师', replyAt: '2023-01-09 11:02:26',
          reply: '可以先关注内容创作与用户研究交叉的岗位，低年级不必急于定岗，多做体验再收敛。',
          rating: '已评价 · 4 星', dimension: '自我认知能力'
        },
        {
          id: 'ol8', grade: '第一年', stage: '第一年 · 入学适应与规划', cat: '就业指导老师', group: 'c2',
          at: '2022-11-15 14:29:08', question: '大一需要为就业提前做些什么？',
          teacher: '就业指导老师 · 许岚老师', replyAt: '2022-11-15 14:44:51',
          reply: '先建立课程与活动的过程记录，每学期末回看一次成长档案，大二再开始岗位探索。',
          rating: '已评价 · 5 星', dimension: '职业规划能力'
        }
      ]
    },
    appointment: {
      kind: 'appointment',
      title: '我的预约咨询记录',
      subtitle: '线下咨询师列表发起 · 跨学年汇总 6 次 · 不受左栏年级筛选影响',
      recordsTitle: '预约与面询记录',
      recordsTip: '点击「私信」展开老师沟通、状态流转与面询归档',
      tabs: [
        { k: 'all', label: '全部', n: 6 },
        { k: 'c1', label: '生涯规划', n: 2 },
        { k: 'c2', label: '就业指导', n: 1 },
        { k: 'other', label: '其他类别', n: 3 }
      ],
      kpis: [
        { v: '6', u: '次', label: '发起线下预约' },
        { v: '5', u: '次', label: '老师已接受' },
        { v: '4', u: '次', label: '完成线下面询' },
        { v: '67', u: '%', label: '面询完成率' }
      ],
      chain: ['查看咨询师列表', '选类别并预约咨询师', '老师接受预约', '线下一对一面询'],
      tips: '请按预约时段提前 10 分钟到达预约记录标注的咨询室，途中注意交通安全，提前报备并办理出校请假；老师接受预约后方可线下一对一咨询。',
      gap: '1 次未被老师接受、1 次接受后未完成面询；最晚预约为 2024 年 6 月，毕业学年未再发起，4 次面询结论均未回填。',
      records: [
        {
          id: 'ap1', grade: '第三年', stage: '第三年 · 岗位匹配与简历面试', cat: '就业指导', group: 'c2',
          at: '2024-06-14 09:16:22', teacher: '就业指导 · 许岚老师',
          date: '2024-06-18', slot: '10:00—10:30', place: '测试学校 · 生涯指导中心 203 咨询室',
          status: '已完成面询', statusType: 'done', question: '简历里的项目经历怎么写，才更匹配数字媒体运营岗？',
          msg: '许岚老师：已接受预约，请带上最新版简历与作品集链接，我们现场逐条改。',
          dimension: '求职表现能力'
        },
        {
          id: 'ap2', grade: '第二年', stage: '第二年 · 学业发展与能力提升', cat: '学业发展', group: 'other',
          at: '2023-12-08 14:05:41', teacher: '学业发展 · 何舟老师',
          date: '2023-12-12', slot: '15:00—15:30', place: '测试学校 · 生涯指导中心 201 咨询室',
          status: '老师已接受 · 面询未完成', statusType: 'pending', question: '课程项目和专业竞赛之间该怎么分配时间？',
          msg: '何舟老师：已接受预约，当天未见到场，可重新选时段改约。',
          dimension: '职业规划能力'
        },
        {
          id: 'ap3', grade: '第二年', stage: '第二年 · 心理调适与压力管理', cat: '心理调适', group: 'other',
          at: '2023-09-19 11:22:07', teacher: '心理调适 · 苏禾老师',
          date: '2023-09-22', slot: '14:30—15:00', place: '测试学校 · 学生发展中心 305 咨询室',
          status: '已完成面询', statusType: 'done', question: '连续几周赶作业，想聊聊怎么调整节奏。',
          msg: '苏禾老师：已接受预约，面询当天请准时到 305 咨询室。',
          dimension: '自我认知能力'
        },
        {
          id: 'ap4', grade: '第一年', stage: '第一年 · 生涯规划与目标确立', cat: '生涯规划', group: 'c1',
          at: '2023-05-24 16:38:50', teacher: '生涯规划 · 周敏老师',
          date: '2023-05-29', slot: '09:30—10:00', place: '测试学校 · 生涯指导中心 203 咨询室',
          status: '已完成面询', statusType: 'done', question: '想把四年目标写清楚，但不知道从哪一步开始。',
          msg: '周敏老师：已接受预约，带上职业测评报告，我们一起做四年行动表。',
          dimension: '职业规划能力'
        },
        {
          id: 'ap5', grade: '第一年', stage: '第一年 · 学业咨询其他类别', cat: '其他类别', group: 'other',
          at: '2023-03-07 10:12:33', teacher: '其他类别 · 待分配咨询师',
          date: '2023-03-10', slot: '11:00—11:30', place: '未分配咨询室',
          status: '老师未接受', statusType: 'rejected', question: '想了解转专业的流程与影响。',
          msg: '系统提示：该时段咨询师未接受预约，可到咨询师列表重新选择类别与咨询师。',
          dimension: '自我认知能力'
        },
        {
          id: 'ap6', grade: '第一年', stage: '第一年 · 专业方向与职业选择', cat: '生涯规划', group: 'c1',
          at: '2022-12-05 14:38:20', teacher: '生涯规划 · 周敏老师',
          date: '2022-12-09', slot: '16:00—16:30', place: '测试学校 · 生涯指导中心 203 咨询室',
          status: '已完成面询', statusType: 'done', question: '专业方向与职业选择怎么一起考虑？',
          msg: '周敏老师：已接受预约，请提前 10 分钟到场，我们会围绕专业方向做一次一对一面询。',
          dimension: '自我认知能力'
        }
      ]
    }
  };

  /* v56 交互状态：两个页面共用同一组 key，切换标签时整体复位，避免筛选 / 展开串页。 */
  var activeCrPage = '';
  var activeCrFilter = 'all';
  var activeCrOpen = '';
  var activeCrArchive = false;

  function gxCrState(kind) {
    if (activeCrPage !== kind) {
      activeCrPage = kind;
      activeCrFilter = 'all';
      activeCrOpen = '';
      activeCrArchive = false;
    }
  }

  function gxCrData() {
    return ca.consultRecords[activeSideTag === '线上咨询' ? 'online' : 'appointment'];
  }

  function gxCrTabs(d) {
    return '<div class="gx-cr-tabs">' + d.tabs.map(function (t) {
      return '<button type="button" class="' + (activeCrFilter === t.k ? 'active' : '') +
        '" data-cr-filter="' + t.k + '">' + gxEsc(t.label) + ' <i>' + t.n + '</i></button>';
    }).join('') + '</div>';
  }

  function gxCrKpis(d) {
    return '<div class="gx-cr-kpis">' + d.kpis.map(function (k) {
      return '<div class="gx-cr-kpi' + (k.warn ? ' warn' : '') + '">' +
        '<b>' + gxEsc(k.v) + '</b><i>' + gxEsc(k.u) + '</i>' +
        '<span>' + gxEsc(k.label) + '</span></div>';
    }).join('') + '</div>';
  }

  function gxCrFiltered(d) {
    return d.records.filter(function (r) {
      return activeCrFilter === 'all' || r.group === activeCrFilter;
    });
  }

  function gxCrField(label, value, cls) {
    return '<p class="gx-cr-field' + (cls ? ' ' + cls : '') + '"><label>' + gxEsc(label) +
      '</label><span>' + gxEsc(value) + '</span></p>';
  }

  /* 展开详情：把移动端「查看记录 / 私信」对应的咨询往来、状态流转与归档缺口一次补齐。
     AI 卡里写「沟通结论与行动清单未同步归档」，这里逐条显示未回填，不假装已有数据。 */
  function gxCrDetail(r, d) {
    var online = d.kind === 'online';
    var flow = online
      ? ['在小程序选择「' + r.cat + '」发起咨询 · ' + r.at, r.teacher + ' 回复 · ' + r.replyAt, '会话已结束 · 待评价与结论归档']
      : ['提交预约 · 待确认 · ' + r.at,
         r.statusType === 'rejected' ? '老师未接受预约' : '老师已接受预约',
         r.statusType === 'done' ? '线下一对一面询完成 · ' + r.date + ' ' + r.slot
           : (r.statusType === 'rejected' ? '面询未成行，可重新预约' : '面询未完成，可改约')];
    return '<div class="gx-cr-detail">' +
      '<h5>咨询往来与归档</h5>' +
      '<ol class="gx-cr-flow">' + flow.map(function (x) {
        return '<li>' + gxEsc(x) + '</li>';
      }).join('') + '</ol>' +
      '<div class="gx-cr-detail-grid">' +
        gxCrField('咨询问题', r.question, 'wide') +
        gxCrField('咨询结论', online ? '未回填' : (r.statusType === 'done' ? '未回填' : '未产生面询结论')) +
        gxCrField('行动清单', '未回填') +
        gxCrField('关联能力维度', r.dimension) +
        (online ? gxCrField('咨询评价', r.rating) : gxCrField('咨询状态', r.status)) +
      '</div>' +
      (online ? '' : '<p class="gx-cr-msg"><label>老师沟通</label>' + gxEsc(r.msg) + '</p>') +
      '<p class="gx-cr-detail-note">该条记录来自云生涯平台归档，沟通结论与行动清单需学生面询 / 会话结束后回填，' +
        '当前档案仅保留发起、回复与状态信息。</p>' +
      '</div>';
  }

  function gxCrRecord(r, d) {
    var online = d.kind === 'online';
    var open = activeCrOpen === r.id;
    /* 学生身份沿用 ca.basicInfo，不迁移移动端截图里的「杨强-测试学生 / 2025届 软件技术」。 */
    var student = ca.basicInfo.name + ' · ' + ca.basicInfo.className;
    var head = '<div class="gx-cr-card-top">' +
      '<h4>' + gxEsc(student) + '</h4>' +
      '<span class="gx-cr-cat">' + gxEsc(r.cat) + '</span></div>' +
      '<p class="gx-cr-stage">' + gxEsc(r.stage) + '</p>';
    var grid, actions;
    if (online) {
      grid = '<div class="gx-cr-grid">' +
        gxCrField('发起时间', r.at) +
        gxCrField('咨询问题', r.question, 'wide') +
        '</div>' +
        '<div class="gx-cr-reply">' +
          '<div class="gx-cr-reply-head"><b>' + gxEsc(r.teacher) + '</b><time>' + gxEsc(r.replyAt) + '</time></div>' +
          '<p>' + gxEsc(r.reply) + '</p>' +
        '</div>';
      actions = '<div class="gx-cr-actions">' +
        '<span class="gx-cr-mini">结论归档：未回填 · ' + gxEsc(r.rating) + '</span>' +
        '<button type="button" data-cr-open="' + r.id + '">评价</button>' +
        '<button type="button" class="primary" data-cr-open="' + r.id + '">查看记录</button>' +
        '</div>';
    } else {
      grid = '<div class="gx-cr-grid gx-cr-grid--appt">' +
        gxCrField('提交时间', r.at) +
        gxCrField('预约咨询师', r.teacher) +
        gxCrField('日期', r.date) +
        gxCrField('时间', r.slot) +
        gxCrField('地点', r.place) +
        '<p class="gx-cr-field"><label>咨询状态</label><span><b class="gx-cr-st gx-cr-st--' + r.statusType + '">' +
          gxEsc(r.status) + '</b></span></p>' +
        gxCrField('问题', r.question, 'wide') +
        '</div>';
      actions = '<div class="gx-cr-actions">' +
        '<span class="gx-cr-mini">' + (r.statusType === 'done' ? '面询结论：未回填' : '面询结论：未产生') + '</span>' +
        '<button type="button" class="primary" data-cr-open="' + r.id + '">私信</button>' +
        '</div>';
    }
    var statusBar = online
      ? '<div class="gx-cr-status"><i class="gx-cr-clock"></i><span>已结束</span>' +
        '<em class="gx-cr-badge">线上</em></div>'
      : '<em class="gx-cr-badge gx-cr-badge--float">线下</em>';
    return '<article class="gx-cr-card gx-cr-card--' + (online ? 'online' : 'appt') + (open ? ' open' : '') + '">' +
      statusBar + '<div class="gx-cr-card-body">' + head + grid + actions + '</div>' +
      (open ? gxCrDetail(r, d) : '') + '</article>';
  }

  /* 右栏：咨询阶段分布（按学年）+ 咨询链路 + 温馨提示，与移动端截图的
     「记录卡 + 温馨提示 + 查看咨询档案」信息架构对齐。
     阶段分布与顶部 AI 卡的「老师类别 / 预约类别分布」是互补的两个维度，不重复堆图；
     第四年为 0 次的断层直接体现在横条上，与 AI 卡「毕业学年未再发起」口径一致。
     「查看咨询档案」固定在外层 .gx-cr-profile-foot，不随内容滚动，保证首屏可见；
     数据断层提示放在点开的档案摘要视图里，避免右栏一屏放不下而被裁半截。 */
  function gxCrProfile(d) {
    var online = d.kind === 'online';
    var order = ['第一年', '第二年', '第三年', '第四年'];
    var bars = order.map(function (g) {
      var n = d.records.filter(function (r) { return r.grade === g; }).length;
      var pct = Math.round(n / d.records.length * 100);
      return '<div class="gx-cr-bar' + (n ? '' : ' zero') + '"><span>' + g + '</span>' +
        '<div class="gx-cr-bar-track"><i style="width:' + pct + '%"></i></div>' +
        '<b>' + n + ' 次</b></div>';
    }).join('');
    var chain = d.chain.map(function (x, i) {
      return '<li><i>' + (i + 1) + '</i><span>' + gxEsc(x) + '</span></li>';
    }).join('');
    return '<div class="gx-cr-profile-inner">' +
      '<h4 class="gx-cr-sec-title">咨询阶段分布</h4>' +
      '<div class="gx-cr-bars">' + bars + '</div>' +
      '<h4 class="gx-cr-sec-title">' + (online ? '线上咨询链路' : '线下预约链路') + '</h4>' +
      '<ol class="gx-cr-chain">' + chain + '</ol>' +
      '<div class="gx-cr-tips"><b>温馨提示</b><p>' + gxEsc(d.tips) + '</p></div>' +
      '</div>';
  }

  /* 「查看咨询档案」视图：按学年索引全部记录，是列表不是图表，与上面的画像视图分工明确。 */
  function gxCrArchiveView(d) {
    var order = ['第一年', '第二年', '第三年', '第四年'];
    var groups = order.map(function (g) {
      var rs = d.records.filter(function (r) { return r.grade === g; });
      return '<div class="gx-cr-arch-group"><h5>' + g + '<i>' + rs.length + ' 次</i></h5>' +
        (rs.length
          ? '<ul>' + rs.map(function (r) {
              return '<li><time>' + gxEsc(r.at.slice(0, 10)) + '</time><span>' +
                gxEsc(r.stage.split(' · ')[1] || r.stage) + '</span></li>';
            }).join('') + '</ul>'
          : '<p class="gx-cr-arch-empty">该学年暂无' +
              (d.kind === 'online' ? '线上咨询' : '线下预约') + '记录</p>') +
        '</div>';
    }).join('');
    return '<div class="gx-cr-profile-inner">' +
      '<h4 class="gx-cr-sec-title">咨询档案摘要</h4>' +
      '<p class="gx-cr-arch-sub">按学年索引 ' + d.records.length + ' 次' +
        (d.kind === 'online' ? '线上咨询' : '线下预约') + ' · 与顶部 AI 卡口径一致</p>' +
      '<div class="gx-cr-gap"><b>档案断层提示</b><p>' + gxEsc(d.gap) + '</p></div>' +
      groups +
      '<h4 class="gx-cr-sec-title">归档字段</h4>' +
      '<ul class="gx-cr-arch-fields">' +
        (d.kind === 'online'
          ? '<li>渠道与老师类别</li><li>发起 / 回复时间</li><li>咨询问题与回复</li><li>咨询评价</li><li>结论与行动清单（待回填）</li>'
          : '<li>预约类别与咨询师</li><li>日期 / 时段 / 地点</li><li>咨询状态流转</li><li>咨询问题与老师沟通</li><li>面询结论（待回填）</li>') +
      '</ul>' +
      '</div>';
  }

  function gxCrSheet() {
    var d = gxCrData();
    gxCrState(d.kind);
    var list = gxCrFiltered(d);
    var ai = d.kind === 'online' ? gxConsultAi() : gxApptAi();
    return '<div class="gx-sheet gx-sheet-cr">' +
      ai +
      '<section class="gx-card gx-cr-panel">' +
        '<div class="gx-cr-head">' +
          '<div class="gx-cr-heading"><h3>' + gxEsc(d.title) + '</h3><p>' + gxEsc(d.subtitle) + '</p></div>' +
          gxCrTabs(d) +
        '</div>' +
        gxCrKpis(d) +
        '<div class="gx-cr-body">' +
          '<div class="gx-cr-records">' +
            '<h4 class="gx-cr-sec-title">' + gxEsc(d.recordsTitle) +
              ' <i>共 ' + list.length + ' 条 · ' + gxEsc(d.recordsTip) + '</i></h4>' +
            '<div class="gx-cr-list">' + list.map(function (r) { return gxCrRecord(r, d); }).join('') + '</div>' +
          '</div>' +
          '<div class="gx-cr-profile">' +
            '<div class="gx-cr-profile-scroll">' +
              (activeCrArchive ? gxCrArchiveView(d) : gxCrProfile(d)) +
            '</div>' +
            '<div class="gx-cr-profile-foot">' +
              (activeCrArchive
                ? '<button type="button" class="gx-cr-archive-btn ghost" data-cr-archive="0">返回咨询画像</button>'
                : '<button type="button" class="gx-cr-archive-btn" data-cr-archive="1">查看咨询档案</button>') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +
    '</div>';
  }

  function gxBindCr() {
    document.querySelectorAll('[data-cr-filter]').forEach(function (b) {
      b.onclick = function () {
        activeCrFilter = b.getAttribute('data-cr-filter');
        var d = gxCrData();
        if (activeCrOpen && !gxCrFiltered(d).some(function (r) { return r.id === activeCrOpen; })) activeCrOpen = '';
        render();
      };
    });
    document.querySelectorAll('[data-cr-open]').forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-cr-open');
        activeCrOpen = activeCrOpen === id ? '' : id;
        render();
        if (activeCrOpen) {
          var rec = document.querySelector('.gx-cr-records');
          var el = document.querySelector('.gx-cr-card.open');
          if (rec && el) {
            var r = rec.getBoundingClientRect(), e = el.getBoundingClientRect();
            rec.scrollTop += (e.top - r.top) - 4;
          }
        }
      };
    });
    document.querySelectorAll('[data-cr-archive]').forEach(function (b) {
      b.onclick = function () {
        activeCrArchive = b.getAttribute('data-cr-archive') === '1';
        render();
      };
    });
  }

  /* ==========================================================================
     v57 · 「微视频」详情页下方：我的微视频学习档案（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：用教育行业产品经理的判断，把红框那块通用「模块记录 + 模块说明」
               （第四年空态）补充设计好；有问题先沟通。
     已确认的三个边界（AskUserQuestion）：
       ① 主线 = 主题系列 + 逐条明细；② 补「学习沉淀与能力证据」闭环；
       ③ 跨学年完整档案，不受左栏 activeArchiveGrade 过滤影响。
     教育产品判断：微视频是碎片化、低门槛的轻学习，档案页不能只做「42 条观看流水」
       ——那与顶部 AI 卡重复，也证明不了成长。下方要回答三件事：学了什么主题、
       学得怎样（完播/互动）、沉淀成什么能力证据。v52 AI 卡已点出三条短板：
       第四年无新增观看、只有点赞转发没有笔记与情景演练、观看数据未关联
       「职业素养能力」维度。本版把三条短板分别做成：右栏学年断层、逐条「补录学习
       沉淀」入口、主题→能力维度映射，而不是再堆一遍统计。
     数据自洽（与 v52 ca.microVideoSummary 逐项对齐，不另造口径）：
       42 条 / 6.2 小时 / 完播 78% / 点赞 27 / 转发 9；
       系列条数 16+11+8+5+2=42，时长 2.3+1.5+1.2+0.8+0.4=6.2，
       点赞 12+7+4+3+1=27，转发 2+2+3+2+0=9；
       系列完播 84/80/72/68/70 按条数加权 = 78.1% ≈ 78%；
       学年 10+18+14+0=42，第四年 0 对应 AI 卡「毕业学年学习断层」；
       能力维度 24+11+5+2=42。
       ca.gradeRecords 第二年那条「【会议礼仪与商务着装】系列微视频 6 条，点赞 4 条、
       转发 1 条 · 2023-11-20」在 s1 代表视频与右栏「档案一致性」中逐字对应。
     关于「不编造成果」：笔记与情景演练平台目前没有数据，初始一律显示「未回填」；
       点「补录学习沉淀」才当场写入示意笔记 / 演练并计入 KPI，属于原型演示的
       **补齐路径**，不是伪造历史学习成果。
     顶部 gxVideoAi() 一字未改；通用 gxModuleSheet() 保留为回滚路径。
     ========================================================================== */
  ca.microVideoRecord = {
    title: '我的微视频学习档案',
    subtitle: '云生涯平台微视频学习记录 · 跨学年汇总 42 条 · 不受左栏年级筛选影响',
    total: 42, hours: '6.2 小时', finish: 78, likes: 27, shares: 9,
    tabs: [
      { k: 'all', label: '全部', n: 42 },
      { k: 'etiquette', label: '职场礼仪规范', n: 16 },
      { k: 'comm', label: '沟通表达技巧', n: 11 },
      { k: 'conflict', label: '职场冲突处理', n: 8 },
      { k: 'other', label: '其他主题', n: 7 }
    ],
    years: [
      { name: '第一年', count: 10 },
      { name: '第二年', count: 18 },
      { name: '第三年', count: 14 },
      { name: '第四年', count: 0 }
    ],
    ability: [
      { name: '职业素养能力', count: 24, color: '#5CAD6A' },
      { name: '沟通协作能力', count: 11, color: '#7FBF86' },
      { name: '求职表现能力', count: 5, color: '#A8CA7E' },
      { name: '职业认知能力', count: 2, color: '#C9D99B' }
    ],
    gap: '第四年暂无新增观看记录，毕业学年出现学习断层；42 条视频的笔记与情景演练均未回填，观看与互动数据也尚未关联档案能力维度。',
    consistency: '与第二年归档记录一致：2023-11-20 观看【会议礼仪与商务着装】系列微视频 6 条，点赞 4 条、转发 1 条。',
    series: [
      {
        id: 's1', group: 'etiquette', name: '职场礼仪规范', count: 16,
        hours: '2.3 小时', finish: 84, likes: 12, shares: 2,
        ability: '职业素养能力', color: '#5CAD6A',
        insight: '可照做、完成度最高，但笔记与情景演练未沉淀，暂不能作为能力证据',
        videos: [
          { id: 'v11', name: '会议礼仪与商务着装（6 条合集）', date: '2023-11-20', grade: '第二年', dur: '25 分钟', finish: 100, likes: 4, shares: 1,
            note: '会前 5 分钟到场、按职级引导入座；商务着装按场合分正式与商务休闲两档。',
            drill: '模拟一次部门周会的入座与介绍顺序，并说出三条着装判断依据。' },
          { id: 'v12', name: '职场邮件与称呼规范', date: '2023-10-08', grade: '第二年', dur: '6 分钟', finish: 100, likes: 2, shares: 0,
            note: '邮件标题写「结论 + 截止日」，正文先说事再补背景；称呼先职务后姓名。',
            drill: '把一封实习申请邮件改写成结论先行版本。' },
          { id: 'v13', name: '名片交换与握手礼仪', date: '2023-09-16', grade: '第二年', dur: '5 分钟', finish: 92, likes: 1, shares: 0,
            note: '双手递接、字面朝向对方；握手由位高者先伸手。',
            drill: '与同学互练一次初次见面的递名片与寒暄。' },
          { id: 'v14', name: '办公场景仪容与举止', date: '2023-05-22', grade: '第一年', dur: '7 分钟', finish: 88, likes: 1, shares: 0,
            note: '仪容按「干净、合场、不抢戏」三条自查，会议中不打断发言。',
            drill: '对照清单给自己的一次课程汇报做仪容自查。' }
        ]
      },
      {
        id: 's2', group: 'comm', name: '沟通表达技巧', count: 11,
        hours: '1.5 小时', finish: 80, likes: 7, shares: 2,
        ability: '沟通协作能力', color: '#7FBF86',
        insight: '观看量第二，但多为单向输入，缺少输出型练习记录',
        videos: [
          { id: 'v21', name: '三分钟结构化表达', date: '2024-04-18', grade: '第二年', dur: '8 分钟', finish: 92, likes: 2, shares: 1,
            note: '先结论、再三点理由、最后一句行动请求；每点不超过 30 秒。',
            drill: '用三分钟向辅导员说清一次活动改期方案。' },
          { id: 'v22', name: '跨部门协作的沟通话术', date: '2024-03-06', grade: '第二年', dur: '7 分钟', finish: 85, likes: 1, shares: 1,
            note: '先对齐共同目标，再说明己方约束，最后给两个可选时间点。',
            drill: '写一段向设计同学借用素材的协作请求。' },
          { id: 'v23', name: '汇报中的结论先行', date: '2023-12-14', grade: '第二年', dur: '6 分钟', finish: 80, likes: 1, shares: 0,
            note: '第一页只放结论与所需决策，过程数据放附录。',
            drill: '把课程项目汇报首页改成一页结论式。' }
        ]
      },
      {
        id: 's3', group: 'conflict', name: '职场冲突处理', count: 8,
        hours: '1.2 小时', finish: 72, likes: 4, shares: 3,
        ability: '职业素养能力', color: '#A8CA7E',
        insight: '转发最多但完播最低——有分享意愿、缺情境练习，宜拆短并补演练',
        videos: [
          { id: 'v31', name: '意见分歧时的降温话术', date: '2024-05-23', grade: '第二年', dur: '9 分钟', finish: 78, likes: 1, shares: 2,
            note: '先复述对方诉求再表态，把「你不对」换成「我们目标一致、路径不同」。',
            drill: '两人一组演练一次小组作业分歧的降温对话。' },
          { id: 'v32', name: '被否定后的复盘与回应', date: '2024-05-09', grade: '第二年', dur: '8 分钟', finish: 72, likes: 1, shares: 1,
            note: '把否定拆成事实、标准、情绪三层，只回应事实与标准。',
            drill: '复盘一次被退回的作品，写出三条可改项。' },
          { id: 'v33', name: '任务优先级冲突怎么谈', date: '2024-04-02', grade: '第二年', dur: '7 分钟', finish: 68, likes: 0, shares: 0,
            note: '把两个任务摆到同一张表上，请对方定优先级而非自己硬扛。',
            drill: '列出本周三项任务并向组长确认排序。' }
        ]
      },
      {
        id: 's4', group: 'other', name: '面试与求职应对', count: 5,
        hours: '0.8 小时', finish: 68, likes: 3, shares: 2,
        ability: '求职表现能力', color: '#C9D99B',
        insight: '直接服务「直接就业 · 数字媒体运营岗」毕业意向，但仅 5 条、完播最低',
        videos: [
          { id: 'v41', name: '面试自我介绍的 90 秒', date: '2025-03-11', grade: '第三年', dur: '6 分钟', finish: 70, likes: 1, shares: 1,
            note: '按「我是谁 / 做过什么 / 为什么匹配」三段，去掉无关证书。',
            drill: '录一遍 90 秒自我介绍并对照 AI 面试评分复核。' },
          { id: 'v42', name: '行为面试题的 STAR 答法', date: '2025-02-26', grade: '第三年', dur: '7 分钟', finish: 68, likes: 1, shares: 1,
            note: '结果必须量化；没有数据时用「交付物 + 反馈」代替。',
            drill: '用 STAR 重写一段课程项目经历，回填到 AI 简历。' },
          { id: 'v43', name: '薪资谈判的常见误区', date: '2024-11-19', grade: '第三年', dur: '6 分钟', finish: 65, likes: 0, shares: 0,
            note: '先问清结构与试用期规则，不先报数字。',
            drill: '整理三道要问 HR 的薪资结构问题。' }
        ]
      },
      {
        id: 's5', group: 'other', name: '其他职场话题', count: 2,
        hours: '0.4 小时', finish: 70, likes: 1, shares: 0,
        ability: '职业认知能力', color: '#DDE6C9',
        insight: '零散观看，尚未形成可归档的主题线索',
        videos: [
          { id: 'v51', name: '职场时间管理与精力分配', date: '2023-06-08', grade: '第一年', dur: '6 分钟', finish: 75, likes: 1, shares: 0,
            note: '按精力峰值排难任务，把碎片时间留给短内容学习。',
            drill: '给下周排一张按精力分层的任务表。' },
          { id: 'v52', name: '试用期如何快速建立信任', date: '2023-04-13', grade: '第一年', dur: '5 分钟', finish: 65, likes: 0, shares: 0,
            note: '前两周先交付小而确定的结果，主动同步进度。',
            drill: '写一份实习首两周的交付清单。' }
        ]
      }
    ]
  };

  /* v57 交互状态：补录在同一会话内保留，切走再回来不丢，符合演示直觉。 */
  var activeMvFilter = 'all';
  var activeMvOpen = 's1';
  var activeMvNotes = {};
  var activeMvArchive = false;

  function gxMvAllVideos() {
    var out = [];
    ca.microVideoRecord.series.forEach(function (s) {
      s.videos.forEach(function (v) { out.push(v); });
    });
    return out;
  }

  function gxMvNoteCount() {
    var vids = gxMvAllVideos();
    return vids.filter(function (v) { return !!activeMvNotes[v.id]; }).length;
  }

  function gxMvTabs() {
    var d = ca.microVideoRecord;
    return '<div class="gx-mv-tabs">' + d.tabs.map(function (t) {
      return '<button type="button" class="' + (activeMvFilter === t.k ? 'active' : '') +
        '" data-mv-filter="' + t.k + '">' + gxEsc(t.label) + ' <i>' + t.n + '</i></button>';
    }).join('') + '</div>';
  }

  function gxMvKpis() {
    var d = ca.microVideoRecord, done = gxMvNoteCount(), total = gxMvAllVideos().length;
    var items = [
      { v: '42', u: '条', label: '累计观看' },
      { v: '6.2', u: '小时', label: '有效学习' },
      { v: '78', u: '%', label: '平均完播率' },
      { v: String(done), u: ' / ' + total, label: '已沉淀视频', warn: done === 0 }
    ];
    return '<div class="gx-mv-kpis">' + items.map(function (k) {
      return '<div class="gx-mv-kpi' + (k.warn ? ' warn' : '') + '">' +
        '<b>' + gxEsc(k.v) + '</b><i>' + gxEsc(k.u) + '</i>' +
        '<span>' + gxEsc(k.label) + '</span></div>';
    }).join('') + '</div>';
  }

  function gxMvFiltered() {
    return ca.microVideoRecord.series.filter(function (s) {
      return activeMvFilter === 'all' || s.group === activeMvFilter;
    });
  }

  /* 逐条代表视频：观看 / 完播 / 互动是平台已有数据，笔记与演练是待补录的过程证据。 */
  function gxMvVideoRow(v) {
    var filled = !!activeMvNotes[v.id];
    return '<div class="gx-mv-video' + (filled ? ' filled' : '') + '">' +
      '<div class="gx-mv-video-main">' +
        '<span class="gx-mv-video-name">' + gxEsc(v.name) + '</span>' +
        '<span class="gx-mv-video-date">' + gxEsc(v.date) + ' · ' + gxEsc(v.grade) + '</span>' +
      '</div>' +
      '<div class="gx-mv-video-metrics">' +
        '<span>' + gxEsc(v.dur) + '</span>' +
        '<span class="gx-mv-fin"><i style="width:' + v.finish + '%"></i></span>' +
        '<b>' + v.finish + '%</b>' +
        '<span class="gx-mv-act">赞 ' + v.likes + ' · 转 ' + v.shares + '</span>' +
      '</div>' +
      '<div class="gx-mv-video-note">' +
        (filled
          ? '<p class="gx-mv-note-txt"><label>一句笔记</label>' + gxEsc(v.note) + '</p>' +
            '<p class="gx-mv-note-txt"><label>情景演练</label>' + gxEsc(v.drill) + '</p>'
          : '<p class="gx-mv-note-empty">一句笔记 / 情景演练：未回填，暂不能作为能力证据</p>') +
        '<button type="button" class="gx-mv-note-btn" data-mv-note="' + v.id + '">' +
          (filled ? '撤销补录' : '补录学习沉淀') + '</button>' +
      '</div>' +
    '</div>';
  }

  function gxMvSeriesCard(s) {
    var open = activeMvOpen === s.id;
    var rest = s.count - s.videos.length;
    var filled = s.videos.filter(function (v) { return !!activeMvNotes[v.id]; }).length;
    return '<article class="gx-mv-series' + (open ? ' open' : '') + '" style="--mv-color:' + s.color + '">' +
      '<button type="button" class="gx-mv-series-head" data-mv-open="' + s.id + '">' +
        '<i class="gx-mv-series-dot"></i>' +
        '<span class="gx-mv-series-name">' + gxEsc(s.name) + '</span>' +
        '<em class="gx-mv-series-count">' + s.count + ' 条</em>' +
        '<span class="gx-mv-series-ability">' + gxEsc(s.ability) + '</span>' +
        '<span class="gx-mv-series-toggle">' + (open ? '收起明细' : '查看明细') + '</span>' +
      '</button>' +
      '<div class="gx-mv-series-summary">' +
        '<span>有效学习 <b>' + gxEsc(s.hours) + '</b></span>' +
        '<span>点赞 <b>' + s.likes + '</b> · 转发 <b>' + s.shares + '</b></span>' +
        '<span class="gx-mv-series-fin">完播 <b>' + s.finish + '%</b>' +
          '<i class="gx-mv-fin-track"><i style="width:' + s.finish + '%"></i></i></span>' +
        '<span class="gx-mv-series-done' + (filled ? ' ok' : '') + '">已沉淀 ' + filled + '/' + s.videos.length + '</span>' +
      '</div>' +
      '<p class="gx-mv-series-insight">' + gxEsc(s.insight) + '</p>' +
      (open
        ? '<div class="gx-mv-detail">' +
            '<div class="gx-mv-detail-head"><h5>代表视频明细</h5>' +
              '<i>展示 ' + s.videos.length + ' 条 / 该系列共 ' + s.count + ' 条</i></div>' +
            s.videos.map(gxMvVideoRow).join('') +
            '<p class="gx-mv-detail-more">另有 ' + rest + ' 条同系列观看记录按平台汇总计入，逐条明细可在云生涯微视频模块查看。</p>' +
          '</div>'
        : '') +
      '</article>';
  }

  /* 右栏：学年分布（断层）+ 主题→能力维度映射 + 沉淀进度 + 归档一致性说明 */
  function gxMvProfile() {
    var d = ca.microVideoRecord;
    var years = d.years.map(function (y) {
      var pct = Math.round(y.count / d.total * 100);
      return '<div class="gx-mv-bar' + (y.count ? '' : ' zero') + '"><span>' + y.name + '</span>' +
        '<div class="gx-mv-bar-track"><i style="width:' + pct + '%"></i></div>' +
        '<b>' + y.count + ' 条</b></div>';
    }).join('');
    var ability = d.ability.map(function (a) {
      return '<div class="gx-mv-map"><i style="background:' + a.color + '"></i>' +
        '<span>' + gxEsc(a.name) + '</span><b>' + a.count + ' 条</b></div>';
    }).join('');
    var done = gxMvNoteCount(), total = gxMvAllVideos().length;
    var pct = Math.round(done / total * 100);
    return '<div class="gx-mv-profile-inner">' +
      '<h4 class="gx-mv-sec-title">学年观看分布</h4>' +
      '<div class="gx-mv-bars">' + years + '</div>' +
      '<h4 class="gx-mv-sec-title">主题 → 能力维度</h4>' +
      '<div class="gx-mv-maps">' + ability + '</div>' +
      '<h4 class="gx-mv-sec-title">学习沉淀进度</h4>' +
      '<div class="gx-mv-progress"><div class="gx-mv-progress-track"><i style="width:' + pct + '%"></i></div>' +
        '<b>' + done + ' / ' + total + '</b></div>' +
      '<p class="gx-mv-progress-note">平台只归档观看与互动；补录「一句笔记 + 一次情景演练」后，' +
        '该系列才能关联能力维度，用于 AI 面试与简历佐证。</p>' +
      '</div>';
  }

  function gxMvArchiveView() {
    var d = ca.microVideoRecord, order = ['第一年', '第二年', '第三年', '第四年'];
    var vids = gxMvAllVideos();
    var groups = order.map(function (g) {
      var rs = vids.filter(function (v) { return v.grade === g; });
      return '<div class="gx-mv-arch-group"><h5>' + g + '<i>' + (rs.length ? rs.length + ' 条代表' : '0 条') + '</i></h5>' +
        (rs.length
          ? '<ul>' + rs.map(function (v) {
              return '<li><time>' + gxEsc(v.date) + '</time><span>' + gxEsc(v.name) + '</span></li>';
            }).join('') + '</ul>'
          : '<p class="gx-mv-arch-empty">该学年暂无新增观看记录，毕业学年出现学习断层</p>') +
        '</div>';
    }).join('');
    return '<div class="gx-mv-profile-inner">' +
      '<h4 class="gx-mv-sec-title">学习档案摘要</h4>' +
      '<p class="gx-mv-arch-sub">跨学年 ' + d.total + ' 条 · 5 个主题系列 · 与顶部 AI 卡口径一致</p>' +
      '<div class="gx-mv-gap"><b>毕业学年学习断层</b><p>' + gxEsc(d.gap) + '</p></div>' +
      '<div class="gx-mv-consistency"><b>档案一致性</b><p>' + gxEsc(d.consistency) + '</p></div>' +
      groups +
      '<h4 class="gx-mv-sec-title">归档字段</h4>' +
      '<ul class="gx-mv-arch-fields">' +
        '<li>主题系列与单条视频</li><li>观看日期 / 时长 / 完播率</li><li>点赞 / 转发互动</li>' +
        '<li>一句笔记（待补录）</li><li>情景演练（待补录）</li><li>关联能力维度（待关联）</li>' +
      '</ul>' +
      '</div>';
  }

  function gxMvSheet() {
    var d = ca.microVideoRecord, list = gxMvFiltered();
    return '<div class="gx-sheet gx-sheet-mv">' +
      gxVideoAi() +
      '<section class="gx-card gx-mv-panel">' +
        '<div class="gx-mv-head">' +
          '<div class="gx-mv-heading"><h3>' + gxEsc(d.title) + '</h3><p>' + gxEsc(d.subtitle) + '</p></div>' +
          gxMvTabs() +
        '</div>' +
        gxMvKpis() +
        '<div class="gx-mv-body">' +
          '<div class="gx-mv-records">' +
            '<h4 class="gx-mv-sec-title">主题系列与观看明细' +
              ' <i>共 ' + list.length + ' 个系列 · 点击系列展开代表视频</i></h4>' +
            '<div class="gx-mv-list">' + list.map(gxMvSeriesCard).join('') + '</div>' +
          '</div>' +
          '<div class="gx-mv-profile">' +
            '<div class="gx-mv-profile-scroll">' +
              (activeMvArchive ? gxMvArchiveView() : gxMvProfile()) +
            '</div>' +
            '<div class="gx-mv-profile-foot">' +
              (activeMvArchive
                ? '<button type="button" class="gx-mv-archive-btn ghost" data-mv-archive="0">返回学习画像</button>'
                : '<button type="button" class="gx-mv-archive-btn" data-mv-archive="1">查看学习档案</button>') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +
    '</div>';
  }

  function gxBindMv() {
    document.querySelectorAll('[data-mv-filter]').forEach(function (b) {
      b.onclick = function () {
        activeMvFilter = b.getAttribute('data-mv-filter');
        var ids = gxMvFiltered().map(function (s) { return s.id; });
        if (ids.indexOf(activeMvOpen) < 0) activeMvOpen = ids[0] || '';
        render();
      };
    });
    document.querySelectorAll('[data-mv-open]').forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-mv-open');
        activeMvOpen = activeMvOpen === id ? '' : id;
        render();
      };
    });
    document.querySelectorAll('[data-mv-note]').forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-mv-note');
        if (activeMvNotes[id]) delete activeMvNotes[id];
        else activeMvNotes[id] = true;
        render();
      };
    });
    document.querySelectorAll('[data-mv-archive]').forEach(function (b) {
      b.onclick = function () {
        activeMvArchive = b.getAttribute('data-mv-archive') === '1';
        render();
      };
    });
  }

  /* ==========================================================================
     v58 · 「生涯活动」详情页下方：我的生涯活动档案（大聚合一，独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：生涯活动是**活动大类**，所有活动性质记录都归属到它下面；用教育行业
               产品经理的判断把红框那块（通用模块记录 + 第四年空态）补充设计好。
     这正是 v55 留下的待决项：v55 只把顶部 AI 卡改成大类结构分析，下方仍按
       activeArchiveGrade + 单业务标签过滤，第四年没有叫「生涯活动」的标签记录 → 空态。
       **空态不是没数据，是归档口径把大类拆散了。**
     已确认边界（AskUserQuestion，三项全选推荐）：
       ① 主线 = 活动子类 + 逐场明细；② 补「三段记录」可补齐闭环；
       ③ 8 场校招同质记录默认收起、可展开全部。
     教育产品判断：大类视图不能是 14 条流水账，要回答「参与了什么 / 参与到什么程度 /
       沉淀了什么能力证据」。v55 AI 卡的建议已给出模型：参与凭证（报名/签到）→
       过程沉淀（岗位观察/参访笔记/竞赛作品）→ 成果结论（能力维度），并点出
       「8 场校招只记录报名」「竞赛奖项未关联作品」。下方把这条「广度够、深度浅」
       的差距做成可补齐结构，而不是再堆一遍活动清单。
     数据唯一来源：直接遍历 ca.gradeRecords 提取活动性质记录，**不另造一份活动数据**，
       因此 14 场 / 5 子类 / 3 能力维度 / 4 学年与 v55 AI 卡天然一致：
         校招活动参与情况 8 → campus；生涯活动 2 → career；生涯体验周 1 → week；
         大学生职业规划大赛 1 + 大学生创新大赛 1 → contest；就业活动 1 → employ。
         学年按 gradeRecords 的 key：第一年 1 / 第二年 2 / 第三年 2 / 第四年 9 = 14。
         能力维度取记录原有 ability_dimension，不重新指派。
     不编造成果：签到、笔记、作品、能力归因平台目前无数据，初始一律「未归档」；
       点「补录活动沉淀」才写入示意的过程沉淀与成果结论，并同步 KPI / 右栏深度进度。
       签到始终标注「未归档（需平台对接签到数据）」——签到是现场数据，学生不能自补。
     类名避开 v55 已占用的 .gx-ac-*（AI 卡皮肤），统一用 .gx-aa-*。
     顶部 gxActAi() 一字未改；通用 gxModuleSheet() 保留为回滚路径。
     ========================================================================== */
  /* 活动性质业务标签 → 大类子类；其余标签（职业测评 / 线上课 / 微视频 / 咨询等）不进大类。 */
  var AA_TYPE_MAP = {
    '校招活动参与情况': 'campus',
    '生涯活动': 'career',
    '生涯体验周': 'week',
    '大学生职业规划大赛': 'contest',
    '大学生创新大赛': 'contest',
    '就业活动': 'employ'
  };

  ca.activityArchive = {
    title: '我的生涯活动档案',
    subtitle: '活动大类统一归档 · 跨四个学年 21 场 · 5 个子类 · 不受左栏年级筛选影响',
    types: [
      { k: 'campus', name: '校招活动', ability: '求职表现能力', color: '#5CAD6A',
        insight: '8 场均只记录「报名了宣讲会 / 双选会」，签到、岗位观察与投递结果未归档',
        note: '记录该企业岗位要求、宣讲要点与投递进度，整理成岗位对比表。',
        result: '求职表现能力 · 岗位筛选与求职沟通' },
      { k: 'career', name: '生涯活动', ability: '职业认知能力', color: '#7FA8D0',
        insight: '2 场认知类活动有参与记录，参访笔记与岗位观察未沉淀',
        note: '整理校友分享或企业参访的三点观察，写成一页参访笔记。',
        result: '职业认知能力 · 行业与岗位认知' },
      { k: 'contest', name: '学科竞赛', ability: '竞赛成长能力', color: '#E7B84B',
        insight: '6 场覆盖两项大赛的院赛、校赛与决赛阶段，参赛作品与承担分工未关联到能力维度',
        note: '上传参赛作品与获奖说明，写清本人承担的分工与方法。',
        result: '竞赛成长能力 · 作品与项目实践' },
      { k: 'week', name: '生涯体验周', ability: '职业认知能力', color: '#8FBF5A',
        insight: '1 场岗位体验，缺少体验小结与能力要求对照',
        note: '记录体验岗位的一天流程与能力要求，形成岗位体验小结。',
        result: '职业认知能力 · 岗位体验' },
      { k: 'employ', name: '就业活动', ability: '求职表现能力', color: '#B9C4B0',
        insight: '4 场覆盖就业实训、讲座、实践与双选洽谈，分别只记录参加，实训产出与跟进结果未归档',
        note: '记录洽谈企业、沟通岗位与后续跟进动作。',
        result: '求职表现能力 · 求职沟通与跟进' }
    ],
    abilities: [
      { name: '求职表现能力', color: '#5CAD6A' },
      { name: '职业认知能力', color: '#7FA8D0' },
      { name: '竞赛成长能力', color: '#E7B84B' }
    ],
    gap: '21 场活动中 8 场校招仅记录报名，签到与投递结果未归档；6 场赛事有阶段与奖项，参赛作品与承担分工未关联；21 场里仅 1 场补录了过程沉淀。大类视角能看清参与广度，却还证明不了能力成长。',
    consistency: '与顶部 AI 卡一致：21 场 = 校招活动 8 + 学科竞赛 6 + 就业活动 4 + 生涯活动 2 + 生涯体验周 1，归到求职表现、职业认知、竞赛成长 3 个能力维度；两个大赛业务标签合并为「学科竞赛」子类，故 6 个业务标签对应 5 个活动子类。',
    fields: ['活动子类与业务标签', '参与时间 / 所在学年', '参与凭证（报名 / 签到）',
      '过程沉淀（观察 / 笔记 / 作品）', '成果结论（奖项 / 能力维度）', '能力维度归因']
  };

  var activeAaFilter = 'all';
  var activeAaOpen = 'campus';
  var activeAaExpandAll = false;
  var activeAaNotes = {};
  var activeAaArchive = false;

  function gxAaDate(s) {
    var m = /^(\d{4})年(\d{2})月(\d{2})日/.exec(s || '');
    return m ? m[1] + '-' + m[2] + '-' + m[3] : (s || '');
  }

  /* 每次渲染实时从 gradeRecords 提取，保证「大类清单」与档案时间轴永远同源。 */
  function gxAaRecords() {
    var out = [], n = 0;
    Object.keys(ca.gradeRecords).forEach(function (grade) {
      ca.gradeRecords[grade].forEach(function (r) {
        var k = AA_TYPE_MAP[r.business_type];
        if (!k) return;
        var desc = r.description || '';
        var m = /【([^】]+)】/.exec(desc);
        var name = m ? m[1] : r.business_type;
        if (k === 'campus') {
          var tail = /】(.+)$/.exec(desc);
          name = name + ' · ' + (tail ? tail[1] : '校招活动');
        }
        var pm = /(校级[^，。]*|一等奖|二等奖|三等奖)/.exec(desc);
        out.push({
          id: 'a' + (++n), grade: grade, type: k,
          date: gxAaDate(r.created_at), name: name,
          ability: r.ability_dimension, desc: desc,
          joinLabel: /报名了/.test(desc) ? '已报名' : '已参与',
          prize: pm ? pm[1] : ''
        });
      });
    });
    return out;
  }

  function gxAaStats() {
    var recs = gxAaRecords(), byType = {}, byGrade = {}, byAbility = {}, done = 0;
    ca.activityArchive.types.forEach(function (t) { byType[t.k] = []; });
    ['第一年', '第二年', '第三年', '第四年'].forEach(function (g) { byGrade[g] = 0; });
    recs.forEach(function (r) {
      if (byType[r.type]) byType[r.type].push(r);
      if (byGrade[r.grade] !== undefined) byGrade[r.grade]++;
      byAbility[r.ability] = (byAbility[r.ability] || 0) + 1;
      if (activeAaNotes[r.id]) done++;
    });
    return { recs: recs, byType: byType, byGrade: byGrade, byAbility: byAbility, done: done };
  }

  function gxAaTabs(st) {
    var tabs = [{ k: 'all', label: '全部', n: st.recs.length }].concat(
      ca.activityArchive.types.map(function (t) {
        return { k: t.k, label: t.name, n: st.byType[t.k].length };
      })
    );
    return '<div class="gx-aa-tabs">' + tabs.map(function (t) {
      return '<button type="button" class="' + (activeAaFilter === t.k ? 'active' : '') +
        '" data-aa-filter="' + t.k + '">' + gxEsc(t.label) + ' <i>' + t.n + '</i></button>';
    }).join('') + '</div>';
  }

  function gxAaKpis(st) {
    var items = [
      { v: String(st.recs.length), u: '场', label: '累计参与' },
      { v: '5', u: '类', label: '活动子类' },
      { v: '3', u: '个', label: '关联能力维度' },
      { v: String(st.done), u: ' / ' + st.recs.length, label: '已补录深度证据', warn: st.done === 0 }
    ];
    return '<div class="gx-aa-kpis">' + items.map(function (k) {
      return '<div class="gx-aa-kpi' + (k.warn ? ' warn' : '') + '">' +
        '<b>' + gxEsc(k.v) + '</b><i>' + gxEsc(k.u) + '</i>' +
        '<span>' + gxEsc(k.label) + '</span></div>';
    }).join('') + '</div>';
  }

  /* 逐场明细：三段记录是教育闭环的核心，签到明确标注需平台对接、不让学生自补。 */
  function gxAaRecordRow(r, t) {
    var filled = !!activeAaNotes[r.id];
    return '<div class="gx-aa-row' + (filled ? ' filled' : '') + '">' +
      '<div class="gx-aa-row-top">' +
        '<span class="gx-aa-row-name" title="' + gxEsc(r.name) + '">' + gxEsc(r.name) + '</span>' +
        '<span class="gx-aa-row-date">' + gxEsc(r.date) + ' · ' + gxEsc(r.grade) + '</span>' +
      '</div>' +
      '<div class="gx-aa-stages">' +
        '<span class="gx-aa-stage"><label>参与凭证</label>' + gxEsc(r.joinLabel) + ' · 签到未归档</span>' +
        '<span class="gx-aa-stage' + (filled ? ' ok' : '') + '"><label>过程沉淀</label>' + (filled ? '已补录' : '未归档') + '</span>' +
        '<span class="gx-aa-stage' + (filled ? ' ok' : '') + '"><label>成果结论</label>' +
          (filled ? '已关联能力维度' : (r.prize ? gxEsc(r.prize) + ' · 作品未关联' : '未归档')) + '</span>' +
        '<button type="button" class="gx-aa-note-btn" data-aa-note="' + r.id + '">' +
          (filled ? '撤销补录' : '补录活动沉淀') + '</button>' +
      '</div>' +
      (filled
        ? '<p class="gx-aa-note-txt"><label>过程沉淀</label>' + gxEsc(t.note) + '</p>' +
          '<p class="gx-aa-note-txt"><label>成果结论</label>' + gxEsc(t.result) + '</p>'
        : '') +
      '</div>';
  }

  function gxAaTypeCard(t, st) {
    var list = st.byType[t.k] || [];
    var open = activeAaOpen === t.k;
    var collapsed = t.k === 'campus' && !activeAaExpandAll;
    var shown = collapsed ? list.slice(0, 3) : list;
    var done = list.filter(function (r) { return !!activeAaNotes[r.id]; }).length;
    var grades = [];
    list.forEach(function (r) { if (grades.indexOf(r.grade) < 0) grades.push(r.grade); });
    return '<article class="gx-aa-type' + (open ? ' open' : '') + '" style="--aa-color:' + t.color + '">' +
      '<button type="button" class="gx-aa-type-head" data-aa-open="' + t.k + '">' +
        '<i class="gx-aa-type-dot"></i>' +
        '<span class="gx-aa-type-name">' + gxEsc(t.name) + '</span>' +
        '<em class="gx-aa-type-count">' + list.length + ' 场</em>' +
        '<span class="gx-aa-type-ability">' + gxEsc(t.ability) + '</span>' +
        '<span class="gx-aa-type-toggle">' + (open ? '收起明细' : '查看明细') + '</span>' +
      '</button>' +
      '<div class="gx-aa-type-summary">' +
        '<span>覆盖 <b>' + grades.length + '</b> 个学年</span>' +
        '<span>已有成果 <b>' + list.filter(function (r) { return !!r.prize; }).length + '</b> 项</span>' +
        '<span class="gx-aa-type-done' + (done ? ' ok' : '') + '">已补录 ' + done + '/' + list.length + '</span>' +
      '</div>' +
      '<p class="gx-aa-type-insight">' + gxEsc(t.insight) + '</p>' +
      (open
        ? '<div class="gx-aa-detail">' +
            '<div class="gx-aa-detail-head"><h5>逐场活动记录</h5>' +
              '<i>三段记录：参与凭证 → 过程沉淀 → 成果结论</i></div>' +
            shown.map(function (r) { return gxAaRecordRow(r, t); }).join('') +
            (collapsed
              ? '<button type="button" class="gx-aa-expand-btn" data-aa-expand="1">展开全部 ' + list.length +
                  ' 场校招活动（另有 ' + (list.length - shown.length) + ' 场）</button>'
              : (t.k === 'campus'
                  ? '<button type="button" class="gx-aa-expand-btn ghost" data-aa-expand="0">收起，只看前 3 场</button>'
                  : '')) +
          '</div>'
        : '') +
      '</article>';
  }

  /* 右栏：学年分布 + 能力维度归因 + 参与深度 + 大类口径说明 */
  function gxAaProfile(st) {
    var d = ca.activityArchive, total = st.recs.length;
    var years = ['第一年', '第二年', '第三年', '第四年'].map(function (g) {
      var n = st.byGrade[g] || 0, pct = Math.round(n / total * 100);
      return '<div class="gx-aa-bar"><span>' + g + '</span>' +
        '<div class="gx-aa-bar-track"><i style="width:' + pct + '%"></i></div>' +
        '<b>' + n + ' 场</b></div>';
    }).join('');
    var maps = d.abilities.map(function (a) {
      return '<div class="gx-aa-map"><i style="background:' + a.color + '"></i>' +
        '<span>' + gxEsc(a.name) + '</span><b>' + (st.byAbility[a.name] || 0) + ' 场</b></div>';
    }).join('');
    var pct = Math.round(st.done / total * 100);
    return '<div class="gx-aa-profile-inner">' +
      '<h4 class="gx-aa-sec-title">学年参与分布</h4>' +
      '<div class="gx-aa-bars">' + years + '</div>' +
      '<h4 class="gx-aa-sec-title">子类 → 能力维度</h4>' +
      '<div class="gx-aa-maps">' + maps + '</div>' +
      '<h4 class="gx-aa-sec-title">参与深度</h4>' +
      '<div class="gx-aa-progress"><div class="gx-aa-progress-track"><i style="width:' + pct + '%"></i></div>' +
        '<b>' + st.done + ' / ' + total + '</b></div>' +
      '<p class="gx-aa-progress-note">8 场校招只记录报名；补录沉淀与结论后才能关联能力维度。' +
        '签到属现场数据，需平台对接。</p>' +
      '</div>';
  }

  function gxAaArchiveView(st) {
    var d = ca.activityArchive;
    var groups = ['第一年', '第二年', '第三年', '第四年'].map(function (g) {
      var rs = st.recs.filter(function (r) { return r.grade === g; });
      return '<div class="gx-aa-arch-group"><h5>' + g + '<i>' + rs.length + ' 场</i></h5>' +
        '<ul>' + rs.map(function (r) {
          return '<li><time>' + gxEsc(r.date) + '</time><span title="' + gxEsc(r.name) + '">' +
            gxEsc(r.name) + '</span></li>';
        }).join('') + '</ul></div>';
    }).join('');
    return '<div class="gx-aa-profile-inner">' +
      '<h4 class="gx-aa-sec-title">活动档案摘要</h4>' +
      '<p class="gx-aa-arch-sub">跨学年 ' + st.recs.length + ' 场 · 5 个子类 · 与顶部 AI 卡口径一致</p>' +
      '<div class="gx-aa-gap"><b>广度够、深度浅</b><p>' + gxEsc(d.gap) + '</p></div>' +
      '<div class="gx-aa-consistency"><b>档案一致性</b><p>' + gxEsc(d.consistency) + '</p></div>' +
      '<div class="gx-aa-scope"><b>大类归档口径</b><p>' + st.recs.length + ' 场来自 6 个业务标签，归并为 5 个活动子类，' +
        '跨四个学年汇总，不随左栏年级切换而过滤；签到等现场数据需平台对接后自动归档。</p></div>' +
      groups +
      '<h4 class="gx-aa-sec-title">归档字段</h4>' +
      '<ul class="gx-aa-arch-fields">' + d.fields.map(function (x) {
        return '<li>' + gxEsc(x) + '</li>';
      }).join('') + '</ul>' +
      '</div>';
  }

  function gxAaSheet() {
    var d = ca.activityArchive, st = gxAaStats();
    var types = d.types.filter(function (t) {
      return activeAaFilter === 'all' || t.k === activeAaFilter;
    });
    return '<div class="gx-sheet gx-sheet-aa">' +
      gxActAi() +
      '<section class="gx-card gx-aa-panel">' +
        '<div class="gx-aa-head">' +
          '<div class="gx-aa-heading"><h3>' + gxEsc(d.title) + '</h3><p>' + gxEsc(d.subtitle) + '</p></div>' +
          gxAaTabs(st) +
        '</div>' +
        gxAaKpis(st) +
        '<div class="gx-aa-body">' +
          '<div class="gx-aa-records">' +
            '<h4 class="gx-aa-sec-title">活动子类与逐场明细' +
              ' <i>共 ' + types.length + ' 个子类 · ' + st.recs.length + ' 场 · 点击子类展开</i></h4>' +
            '<div class="gx-aa-list">' + types.map(function (t) { return gxAaTypeCard(t, st); }).join('') + '</div>' +
          '</div>' +
          '<div class="gx-aa-profile">' +
            '<div class="gx-aa-profile-scroll">' +
              (activeAaArchive ? gxAaArchiveView(st) : gxAaProfile(st)) +
            '</div>' +
            '<div class="gx-aa-profile-foot">' +
              (activeAaArchive
                ? '<button type="button" class="gx-aa-archive-btn ghost" data-aa-archive="0">返回活动画像</button>'
                : '<button type="button" class="gx-aa-archive-btn" data-aa-archive="1">查看活动档案</button>') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +
    '</div>';
  }

  function gxBindAa() {
    document.querySelectorAll('[data-aa-filter]').forEach(function (b) {
      b.onclick = function () {
        activeAaFilter = b.getAttribute('data-aa-filter');
        if (activeAaFilter !== 'all' && activeAaFilter !== activeAaOpen) activeAaOpen = activeAaFilter;
        render();
      };
    });
    document.querySelectorAll('[data-aa-open]').forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-aa-open');
        activeAaOpen = activeAaOpen === id ? '' : id;
        render();
      };
    });
    document.querySelectorAll('[data-aa-expand]').forEach(function (b) {
      b.onclick = function () {
        activeAaExpandAll = b.getAttribute('data-aa-expand') === '1';
        render();
      };
    });
    document.querySelectorAll('[data-aa-note]').forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-aa-note');
        if (activeAaNotes[id]) delete activeAaNotes[id];
        else activeAaNotes[id] = true;
        render();
      };
    });
    document.querySelectorAll('[data-aa-archive]').forEach(function (b) {
      b.onclick = function () {
        activeAaArchive = b.getAttribute('data-aa-archive') === '1';
        render();
      };
    });
  }

  /* ==========================================================================
     v63 · 「就业活动」详情页下方：我的就业活动记录（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：就业活动是毕业生就业相关活动的**揽括**（就业实训 / 就业讲座 /
       就业实践 / 双选洽谈 / 政策宣讲……）；「底下的就是学生参加就业活动的
       详情记录页」。AskUserQuestion 已确认：下方要做成**详情记录档案**，不是只留空态。
     原实现：就业活动走 gxModuleSheet() → 下方按 activeArchiveGrade + 单业务标签过滤，
       第三年以外的学年一律空态（用户截图里红框就是「暂无相关记录」）。
     做法：新增 gxEmSheet() 整体接管下方，与 v56/v57/v58 同构（顶部 AI 卡不动，只换下方）。
       ① 左侧 = 逐场活动卡（4 场，含子类标签 / 参与动作 / 三段记录状态 / 补录按钮）
          —— 与 v58 的「子类卡片 + 展开明细」不同：就业活动 4 场分属 4 个子类、
             每类只有 1 场，再套子类折叠会变成「展开一行」，对详情记录页没有价值，
             所以按**场次**直铺，一个活动的信息在一张卡里看全。
       ② 右侧 = 参与画像（学年分布 / 三段记录完成度 / 归档口径），可切「参与档案」视图
     数据唯一来源：遍历 ca.gradeRecords 中 business_type === '就业活动' 的记录，
       **不另造一份活动数据**，因此 4 场 / 4 子类 / 2 学年与顶部 AI 卡、v58 归档天然一致：
         2024-04 就业实训 → train；2024-10 双选洽谈会 → fair；
         2024-11 就业讲座 → lecture；2025-03 就业实践 → practice。
       子类靠 description 关键词判定（实训 / 实践 / 讲座 / 双选 | 洽谈会），
       顺序上「实训」先于「实践」，「实战」不会被误判成「实践」。
     补充信息（参与动作、过程沉淀文案、成果结论文案、参与深度分）按 **日期** 从
       ca.employArchive.detail 取，不按活动名（活动名可能重复）；日期是 gxAaDate 归一后的
       yyyy-mm-dd，与 gradeRecords 一一对应。参与深度只在标题 tooltip 里用，不重做图。
     不编造成果：签到、投递结果、企业反馈平台暂无数据，初始一律「未归档」；
       点「补录过程沉淀」才写入示意的沉淀与结论，并同步 KPI / 右栏完成度。
       签到始终标注需平台对接 —— 签到是现场数据，学生不能自补（同 v58 口径）。
     类名避开 AI 卡的 .gx-em-*（v63 同版本、同一业务标签），下方统一用 .gx-ep-*。
     回滚：删掉 gxSheet 里这一行分支即可回到 gxModuleSheet() 的通用「模块记录 + 模块说明」。
     ========================================================================== */
  var EM_TYPE_MAP = [
    { k: 'train', name: '就业实训', color: '#5CAD6A', re: /实训/ },
    { k: 'practice', name: '就业实践', color: '#8FBF5A', re: /实践/ },
    { k: 'lecture', name: '就业讲座', color: '#7FA8D0', re: /讲座/ },
    { k: 'fair', name: '双选洽谈', color: '#B9C4B0', re: /双选|洽谈会/ }
  ];

  ca.employArchive = {
    title: '我的就业活动记录',
    subtitle: '毕业生就业活动归集 · 跨第二、第三学年 4 场 · 4 个子类 · 不受左栏年级筛选影响',
    types: EM_TYPE_MAP.map(function (t) { return { k: t.k, name: t.name, color: t.color }; }),
    /* key = gxAaDate(created_at)，与 gradeRecords 逐条对应；未命中的场次按空值降级渲染。 */
    detail: {
      '2024-04-19': {
        action: '3 天集训 · 简历诊断 + 模拟群面 + 一对一复盘', depth: 62,
        note: '整理简历诊断报告与模拟群面反馈，列出 5 处待改问题',
        result: '求职表现能力 · 简历与面试准备'
      },
      '2024-10-28': {
        action: '现场沟通 6 家企业 · 实习生岗位', depth: 40,
        note: '整理 6 家企业的岗位、联系人与投递状态，形成跟进表',
        result: '求职表现能力 · 求职沟通与跟进'
      },
      '2024-11-08': {
        action: '行业形势宣讲 · 会后提交 3 条岗位疑问', depth: 52,
        note: '整理行业用人需求与岗位能力要求，写成一页要点笔记',
        result: '求职表现能力 · 行业与岗位认知'
      },
      '2025-03-14': {
        action: '6 周项目 · 脚本撰写 + 账号数据周报', depth: 76,
        note: '汇总脚本作品、账号数据周报与带教反馈评语',
        result: '求职表现能力 · 内容运营实战'
      }
    },
    gap: '4 场覆盖实训、实践、讲座、双选洽谈四类，数量不多但类型齐全；问题在深度：4 场都只有「参加了」，签到与投递结果未归档，实训与项目产出没回填，双选会只到场未跟进。参与类型齐、能力证据缺。',
    consistency: '与顶部 AI 卡一致：4 场 = 就业实训 1 + 就业实践 1 + 就业讲座 1 + 双选洽谈 1，全部归到求职表现能力；时间落在第二年（1 场）与第三年（3 场），与生涯活动大类归档里的「就业活动 4 场」同一批记录，不重复计数。',
    fields: ['活动子类（实训 / 实践 / 讲座 / 双选）', '参与时间 / 所在学年',
      '参与凭证（报名 / 签到）', '过程沉淀（报告 / 笔记 / 作品）',
      '成果结论（能力维度归因）', '跟进状态（投递 / 企业反馈）']
  };

  var activeEmFilter = 'all';
  var activeEmNotes = {};
  var activeEmArchive = false;

  /* 每次渲染实时从 gradeRecords 提取，保证「详情记录」与档案时间轴永远同源。 */
  function gxEmRecords() {
    var out = [], n = 0;
    Object.keys(ca.gradeRecords).forEach(function (grade) {
      ca.gradeRecords[grade].forEach(function (r) {
        if (r.business_type !== '就业活动') return;
        var desc = r.description || '';
        var t = null;
        EM_TYPE_MAP.forEach(function (m) { if (!t && m.re.test(desc)) t = m; });
        if (!t) t = EM_TYPE_MAP[0];
        var mm = /【([^】]+)】/.exec(desc);
        var raw = mm ? mm[1] : r.business_type;
        /* 子类已由标签单独展示；活动名里若带「就业实训 / 就业讲座」这类重复前缀，
           去掉前缀让标题更短，避免和标签撞词。 */
        var name = raw.replace(/^就业(实训|实践|讲座)\s*·\s*/, '').trim() || raw;
        var d = gxAaDate(r.created_at);
        var det = ca.employArchive.detail[d] || {};
        out.push({
          id: 'e' + (++n), grade: grade, type: t.k,
          typeName: t.name, color: t.color,
          date: d, year: d.slice(0, 4), name: name, raw: raw,
          ability: r.ability_dimension, desc: desc,
          action: det.action || '', depth: det.depth || 0,
          note: det.note || '补充本场的过程记录（笔记 / 报告 / 作品）。',
          result: det.result || '求职表现能力 · 就业活动参与'
        });
      });
    });
    /* 时间正序：与顶部 AI 卡横条顺序、档案时间轴一致，阅读连贯。 */
    out.sort(function (a, b) { return a.date < b.date ? -1 : (a.date > b.date ? 1 : 0); });
    return out;
  }

  function gxEmDone(r) { return !!activeEmNotes[r.id]; }

  function gxEmTabs(list) {
    var tabs = [{ k: 'all', label: '全部', n: list.length }].concat(
      ca.employArchive.types.map(function (t) {
        return { k: t.k, label: t.name, n: list.filter(function (r) { return r.type === t.k; }).length };
      })
    );
    return '<div class="gx-ep-tabs">' + tabs.map(function (t) {
      return '<button type="button" class="' + (activeEmFilter === t.k ? 'active' : '') +
        '" data-ep-filter="' + t.k + '">' + gxEsc(t.label) + ' <i>' + t.n + '</i></button>';
    }).join('') + '</div>';
  }

  function gxEpKpis(list) {
    var done = list.filter(gxEmDone).length;
    var grades = [];
    list.forEach(function (r) { if (grades.indexOf(r.grade) < 0) grades.push(r.grade); });
    var items = [
      { v: String(list.length), u: '场', label: '累计参与' },
      { v: String(ca.employArchive.types.filter(function (t) {
        return list.some(function (r) { return r.type === t.k; });
      }).length), u: '类', label: '活动类型' },
      { v: String(grades.length), u: '个', label: '覆盖学年' },
      { v: String(done), u: ' / ' + list.length, label: '已补录深度证据', warn: done === 0 }
    ];
    return '<div class="gx-ep-kpis">' + items.map(function (k) {
      return '<div class="gx-ep-kpi' + (k.warn ? ' warn' : '') + '">' +
        '<b>' + gxEsc(k.v) + '</b><i>' + gxEsc(k.u) + '</i>' +
        '<span>' + gxEsc(k.label) + '</span></div>';
    }).join('') + '</div>';
  }

  /* 一张卡 = 一场活动：子类 + 活动名 + 时间 + 参与动作 + 三段记录。 */
  function gxEpCard(r) {
    var filled = gxEmDone(r);
    return '<article class="gx-ep-card" style="--ep-color:' + r.color + '">' +
      '<div class="gx-ep-card-head">' +
        '<span class="gx-ep-type"><i></i>' + gxEsc(r.typeName) + '</span>' +
        '<span class="gx-ep-date">' + gxEsc(r.date) + ' · ' + gxEsc(r.grade) + '</span>' +
      '</div>' +
      '<h5 class="gx-ep-name" title="' + gxEsc(r.raw + ' · 参与深度 ' + r.depth) + '">' + gxEsc(r.name) + '</h5>' +
      '<p class="gx-ep-action"><b>参与动作</b>' + gxEsc(r.action || r.desc) + '</p>' +
      '<div class="gx-ep-stages">' +
        '<span class="gx-ep-stage"><label>参与凭证</label>已参加 · 签到未归档</span>' +
        '<span class="gx-ep-stage' + (filled ? ' ok' : '') + '"><label>过程沉淀</label>' +
          (filled ? '已补录' : '未归档') + '</span>' +
        '<span class="gx-ep-stage' + (filled ? ' ok' : '') + '"><label>成果结论</label>' +
          (filled ? '已关联能力维度' : '未归档') + '</span>' +
      '</div>' +
      (filled
        ? '<p class="gx-ep-note"><label>过程沉淀</label>' + gxEsc(r.note) + '</p>' +
          '<p class="gx-ep-note"><label>成果结论</label>' + gxEsc(r.result) + '</p>'
        : '') +
      '<div class="gx-ep-card-foot">' +
        '<span class="gx-ep-ability">' + gxEsc(r.ability) + '</span>' +
        '<button type="button" class="gx-ep-note-btn" data-ep-note="' + r.id + '">' +
          (filled ? '撤销补录' : '补录过程沉淀') + '</button>' +
      '</div>' +
      '</article>';
  }

  /* 右栏：学年分布 + 三段记录完成度（随补录实时变化）+ 归档口径。 */
  function gxEpProfile(list) {
    var total = list.length;
    var years = ['第一年', '第二年', '第三年', '第四年'].map(function (g) {
      var n = list.filter(function (r) { return r.grade === g; }).length;
      var pct = total ? Math.round(n / total * 100) : 0;
      return '<div class="gx-ep-bar"><span>' + g + '</span>' +
        '<div class="gx-ep-bar-track"><i style="width:' + pct + '%"></i></div>' +
        '<b>' + n + ' 场</b></div>';
    }).join('');
    var done = list.filter(gxEmDone).length;
    var stages = [
      { name: '参与凭证', n: total, color: '#5CAD6A', hint: '报名 / 签到' },
      { name: '过程沉淀', n: done, color: '#8FBF5A', hint: '笔记 / 报告 / 作品' },
      { name: '成果结论', n: done, color: '#7FA8D0', hint: '能力维度归因' }
    ].map(function (s) {
      var pct = total ? Math.round(s.n / total * 100) : 0;
      return '<div class="gx-ep-stage-row"><span><i style="background:' + s.color + '"></i>' + s.name + '</span>' +
        '<div class="gx-ep-bar-track"><i style="width:' + pct + '%;background:' + s.color + '"></i></div>' +
        '<b>' + s.n + '/' + total + '</b><em>' + s.hint + '</em></div>';
    }).join('');
    return '<div class="gx-ep-profile-inner">' +
      '<h4 class="gx-ep-sec-title">学年分布</h4>' +
      '<div class="gx-ep-bars">' + years + '</div>' +
      '<h4 class="gx-ep-sec-title">三段记录完成度</h4>' +
      '<div class="gx-ep-stages-list">' + stages + '</div>' +
      '<p class="gx-ep-stages-note">参与凭证由平台打卡或报名数据自动生成；' +
        '过程沉淀与成果结论可由学生补录后关联能力维度。签到属现场数据，需平台对接。</p>' +
      '<h4 class="gx-ep-sec-title">归档口径</h4>' +
      '<p class="gx-ep-scope">就业活动按子类（实训 / 实践 / 讲座 / 双选）归集，' +
        '跨学年汇总，不随左栏年级切换而过滤；同一批记录也计入「生涯活动」大类的' +
        '就业活动子类，两处口径一致、不重复计数。</p>' +
      '</div>';
  }

  function gxEpArchiveView(list) {
    var d = ca.employArchive;
    var groups = ['第一年', '第二年', '第三年', '第四年'].map(function (g) {
      var rs = list.filter(function (r) { return r.grade === g; });
      return '<div class="gx-ep-arch-group"><h5>' + g + '<i>' + rs.length + ' 场</i></h5>' +
        '<ul>' + (rs.length ? rs.map(function (r) {
          return '<li><time>' + gxEsc(r.date) + '</time><span title="' + gxEsc(r.name) + '">' +
            gxEsc(r.name) + '</span></li>';
        }).join('') : '<li class="empty">本学年暂无就业活动记录</li>') + '</ul></div>';
    }).join('');
    var deepest = list.slice().sort(function (a, b) { return b.depth - a.depth; })[0];
    return '<div class="gx-ep-profile-inner">' +
      '<h4 class="gx-ep-sec-title">参与画像摘要</h4>' +
      '<p class="gx-ep-arch-sub">跨学年 ' + list.length + ' 场 · 4 个子类 · 与顶部 AI 卡口径一致</p>' +
      '<div class="gx-ep-arch-kpis">' +
        '<div><b>' + list.length + '</b><i>场</i><span>累计参与</span></div>' +
        '<div><b>4</b><i>类</i><span>活动类型</span></div>' +
        '<div><b>' + (deepest ? deepest.depth : 0) + '</b><i>分</i><span>最高参与深度</span></div>' +
      '</div>' +
      '<div class="gx-ep-gap"><b>类型齐、证据缺</b><p>' + gxEsc(d.gap) + '</p></div>' +
      '<div class="gx-ep-consistency"><b>档案一致性</b><p>' + gxEsc(d.consistency) + '</p></div>' +
      groups +
      '<h4 class="gx-ep-sec-title">归档字段</h4>' +
      '<ul class="gx-ep-arch-fields">' + d.fields.map(function (x) {
        return '<li>' + gxEsc(x) + '</li>';
      }).join('') + '</ul>' +
      '</div>';
  }

  function gxEmSheet() {
    var d = ca.employArchive, all = gxEmRecords();
    var list = activeEmFilter === 'all' ? all
      : all.filter(function (r) { return r.type === activeEmFilter; });
    return '<div class="gx-sheet gx-sheet-em">' +
      gxEmployAi() +
      '<section class="gx-card gx-ep-panel">' +
        '<div class="gx-ep-head">' +
          '<div class="gx-ep-heading"><h3>' + gxEsc(d.title) + '</h3><p>' + gxEsc(d.subtitle) + '</p></div>' +
          gxEmTabs(all) +
        '</div>' +
        gxEpKpis(all) +
        '<div class="gx-ep-body">' +
          '<div class="gx-ep-records">' +
            '<h4 class="gx-ep-sec-title">逐场活动详情记录' +
              ' <i>共 ' + list.length + ' 场 · 时间正序 · 三段记录可补录</i></h4>' +
            '<div class="gx-ep-list">' +
              (list.length ? list.map(gxEpCard).join('')
                : '<div class="gx-ep-empty"><p>该子类下暂无就业活动记录。</p></div>') +
            '</div>' +
          '</div>' +
          '<div class="gx-ep-profile">' +
            '<div class="gx-ep-profile-scroll">' +
              (activeEmArchive ? gxEpArchiveView(list) : gxEpProfile(list)) +
            '</div>' +
            '<div class="gx-ep-profile-foot">' +
              (activeEmArchive
                ? '<button type="button" class="gx-ep-archive-btn ghost" data-ep-archive="0">返回参与画像</button>'
                : '<button type="button" class="gx-ep-archive-btn" data-ep-archive="1">查看参与档案</button>') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +
    '</div>';
  }

  function gxBindEm() {
    document.querySelectorAll('[data-ep-filter]').forEach(function (b) {
      b.onclick = function () {
        activeEmFilter = b.getAttribute('data-ep-filter');
        render();
      };
    });
    document.querySelectorAll('[data-ep-note]').forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-ep-note');
        if (activeEmNotes[id]) delete activeEmNotes[id];
        else activeEmNotes[id] = true;
        render();
      };
    });
    document.querySelectorAll('[data-ep-archive]').forEach(function (b) {
      b.onclick = function () {
        activeEmArchive = b.getAttribute('data-ep-archive') === '1';
        render();
      };
    });
  }

  /* ==========================================================================
     v63 · 「大学生职业规划大赛 / 大学生创新大赛」详情页下方：参赛记录档案
     --------------------------------------------------------------------------
     为什么必须做：用户口径是「这两个成长档案的详情页，其实就是为了记录学生参与过的
       赛事的相关信息」。补到 3 条记录后，职规赛 3 条全在第三年、创新赛 3 条全在第四年，
       而档案默认打开是第四年 —— 不做这一步，默认进职规赛页下方就是「暂无相关记录」空态，
       与「详情页就是记录参赛信息」的定位直接矛盾。
     做法：新增参数化 gxCtSheet(kind)，kind = 'career' | 'innov'，与 gxContestAi(kind)
       共用同一份 ca.contestSummary[kind]。两个赛事版式完全一致（同属「赛事」语义），
       数据各自独立。gxSheet() 加两行路由，删掉即回滚到 gxModuleSheet()。
       ① 左栏 = 参赛阶段时间线（纵向），每段：阶段名 + 晋级/获奖标记 + 日期学年 +
          记录原文 + 三段证据状态（作品 / 分工 / 评委反馈）
       ② 右栏 = 赛事画像（获奖与晋级统计 / 阶段完成度 / 证据完整度 / 归档口径）
     数据同源：
       阶段名、成熟度、三段证据状态取自 ca.contestSummary[kind].rounds（按时间正序与
       记录一一对应）；日期、学年、记录原文取自 ca.gradeRecords（business_type 精确匹配）。
       两条来源的条数必须相等 —— 不等时按记录实际条数渲染并降级阶段名为「第 N 阶段」，
       不静默丢记录。成熟度为原型示意，图上与文案均已标注。
     不编造成果：参赛作品、团队分工、评委反馈平台暂无数据，一律「未归档 / 未写明」。
     类名 .gx-ct2-*（避开 v53 线上咨询已占用的 .gx-cs-* 与 v63 AI 卡的 .gx-ct-*）。
     ========================================================================== */
  ca.contestArchive = {
    title: '我的参赛记录',
    career: {
      subtitle: '大学生职业规划大赛 · 院赛 → 校赛 → 决赛 3 个阶段 · 不受左栏年级筛选影响',
      ability: '竞赛成长能力',
      note: '参赛链由院级选拔赛、校级初赛、校级决赛三段组成；三段均只有阶段与奖项，' +
        '规划书原文、答辩 PPT、本人承担的分工与评委反馈未随记录归档。'
    },
    innov: {
      subtitle: '大学生创新大赛 · 申报 → 院评 → 决赛 3 个阶段 · 不受左栏年级筛选影响',
      ability: '竞赛成长能力',
      note: '参赛链由项目申报、院级初评、校级决赛三段组成；三段均只有阶段与奖项，' +
        '项目计划书、路演 PPT、原型 Demo、团队分工与评委反馈未随记录归档。'
    },
    fields: ['参赛阶段（院赛 / 校赛 / 决赛）', '参赛时间 / 所在学年',
      '晋级情况与奖项', '参赛作品（规划书 / 计划书 / PPT / Demo）',
      '本人承担的分工', '评委反馈与复盘']
  };

  /* 从 gradeRecords 抽该赛事的参赛记录（按时间正序），与 rounds 按索引对齐。 */
  function gxCtRecords(kind) {
    var bt = kind === 'innov' ? '大学生创新大赛' : '大学生职业规划大赛';
    var out = [];
    Object.keys(ca.gradeRecords).forEach(function (grade) {
      ca.gradeRecords[grade].forEach(function (r) {
        if (r.business_type !== bt) return;
        var desc = r.description || '';
        var d = gxAaDate(r.created_at);
        var pm = /获(?:得)?([^，。；]+)/.exec(desc);
        out.push({
          grade: grade, date: d, desc: desc,
          promoted: /晋级/.test(desc),
          prize: pm ? pm[1].trim() : ''
        });
      });
    });
    out.sort(function (a, b) { return a.date < b.date ? -1 : (a.date > b.date ? 1 : 0); });
    return out;
  }

  function gxCtSheet(kind) {
    var a = ca.contestSummary[kind] || ca.contestSummary.career;
    var meta = ca.contestArchive[kind] || ca.contestArchive.career;
    var recs = gxCtRecords(kind);
    var rounds = a.rounds || [];
    var prizes = recs.filter(function (r) { return !!r.prize; }).length;
    var promoted = recs.filter(function (r) { return r.promoted; }).length;

    var timeline = recs.map(function (r, i) {
      var rd = rounds[i] || {};
      var name = rd.name || ('第 ' + (i + 1) + ' 阶段');
      var marks = '';
      if (r.promoted) marks += '<em class="gx-ct2-mark up">晋级</em>';
      if (r.prize) marks += '<em class="gx-ct2-mark win">' + gxEsc(r.prize) + '</em>';
      if (!marks) marks = '<em class="gx-ct2-mark">已参加</em>';
      return '<article class="gx-ct2-stage">' +
        '<div class="gx-ct2-rail"><i>' + (i + 1) + '</i></div>' +
        '<div class="gx-ct2-body">' +
          '<div class="gx-ct2-stage-head">' +
            '<span class="gx-ct2-stage-name">' + gxEsc(name) + '</span>' +
            marks +
            '<span class="gx-ct2-stage-date">' + gxEsc(r.date) + ' · ' + gxEsc(r.grade) + '</span>' +
          '</div>' +
          '<p class="gx-ct2-desc">' + gxEsc(r.desc) + '</p>' +
          '<div class="gx-ct2-evid">' +
            '<span><label>参赛作品</label>未归档</span>' +
            '<span><label>本人分工</label>未写明</span>' +
            '<span><label>评委反馈</label>未沉淀</span>' +
            (rd.score ? '<b>成熟度 ' + rd.score + '</b>' : '') +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');

    var stages = [
      { name: '阶段完成度', n: recs.length, total: rounds.length || recs.length, color: '#5CAD6A', hint: '院赛 → 校赛 → 决赛' },
      { name: '晋级或获奖', n: recs.filter(function (r) { return r.promoted || r.prize; }).length, total: recs.length, color: '#E7B84B', hint: '有阶段结果，证书材料未归档' },
      { name: '作品与分工', n: 0, total: recs.length, color: '#7FA8D0', hint: '作品原文与分工待补' }
    ].map(function (s) {
      var pct = s.total ? Math.round(s.n / s.total * 100) : 0;
      return '<div class="gx-ct2-bar-row"><span><i style="background:' + s.color + '"></i>' + s.name + '</span>' +
        '<div class="gx-ct2-bar-track"><i style="width:' + pct + '%;background:' + s.color + '"></i></div>' +
        '<b>' + s.n + '/' + s.total + '</b><em>' + s.hint + '</em></div>';
    }).join('');

    return '<div class="gx-sheet gx-sheet-ct2">' +
      gxContestAi(kind) +
      '<section class="gx-card gx-ct2-panel">' +
        '<div class="gx-ct2-head">' +
          '<div class="gx-ct2-heading"><h3>' + gxEsc(ca.contestArchive.title) + '</h3>' +
            '<p>' + gxEsc(meta.subtitle) + '</p></div>' +
          '<div class="gx-ct2-badges">' +
            '<span>' + recs.length + ' 个阶段</span>' +
            '<span>' + promoted + ' 次晋级</span>' +
            '<span>' + prizes + ' 项奖项</span>' +
          '</div>' +
        '</div>' +
        '<div class="gx-ct2-body-wrap">' +
          '<div class="gx-ct2-records">' +
            '<h4 class="gx-ct2-sec-title">参赛阶段推进' +
              ' <i>共 ' + recs.length + ' 段 · 时间正序 · 与顶部 AI 卡逐段对应</i></h4>' +
            '<div class="gx-ct2-list">' + (timeline || '<div class="gx-ep-empty"><p>暂无参赛记录。</p></div>') + '</div>' +
          '</div>' +
          '<div class="gx-ct2-profile">' +
            '<div class="gx-ct2-profile-inner">' +
              '<h4 class="gx-ct2-sec-title">赛事画像</h4>' +
              '<div class="gx-ct2-bars">' + stages + '</div>' +
              '<div class="gx-ct2-note"><b>证据缺口</b><p>' + gxEsc(meta.note) + '</p></div>' +
              '<h4 class="gx-ct2-sec-title">归档字段</h4>' +
              '<ul class="gx-ct2-fields">' + ca.contestArchive.fields.map(function (x) {
                return '<li>' + gxEsc(x) + '</li>';
              }).join('') + '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
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

  /* ==========================================================================
     v65 · 「AI简历」详情页下方：我的简历版本档案（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：下方的详情记录页应展示学生历史做过的简历列表，默认选中第一个，
       展示该简历的 AI 诊断和建议（按简历模块逐项拆），最右侧展示选中的简历页面。
     AskUserQuestion 已确认（四项全选推荐）：
       ① 列表时间正序，默认选中第一个（实习初版）；
       ② 7 模块完整结构：基本信息 / 意向岗位 / 教育经历 / 校内荣誉 /
          项目实践经历 / 技能证书 / 作品集链接；
       ③ 右侧用 HTML/CSS 简历纸面示意，内容随选中版本变化；
       ④ 只改下方详情区，顶部 AI 卡（v60 gxResumeAi）一字不动。
     三栏 = 版本列表（左）+ 按模块诊断建议（中）+ 简历纸面预览（右）。
     数据唯一来源：gradeRecords 中 business_type === 'AI简历' 的 3 条记录
       （实习初版 2024-03-18 / 52%、岗位定向版 2024-06-20 / 65%、求职现行版
       2025-04-17 / 78%），与 v60 AI 卡横条、档案时间轴同源。
     诊断口径与既有页互相呼应、不另造事实：
       · 初版技能证书「罗列无关证书」呼应线上咨询 ol3（2024-03-12「删除无关证书」）；
       · 定向版意向聚焦呼应第三年面询 ap1（「项目经历怎么匹配运营岗」）；
       · 现行版项目经历缺 STAR 量化、作品集链接未添加 = v60 AI 卡的两条 gaps；
       · 现行版意向岗位建议补「意向城市 / 期望薪资」呼应 v64 毕业意向页 gaps；
       · 荣誉只写已发生奖项：现行版（2025-04）含创新赛校级三等奖（2024-10）与
         职规赛院级一等奖（2024-11）；职规赛校级二等奖 2025-06 才产生，不提前写入。
     模块状态三档：ok 良好 / warn 待优化 / miss 未填写。
       待改项按版本收敛 5 → 3 → 2，与匹配度 52% → 65% → 78% 一致。
     纸面为示意排版，正式预览需接平台简历版本库（页脚注明）。
     类名统一用 .gx-rv-*（v60 AI 卡已占用 .gx-rs-*）+ .gx-sheet-rv；
     状态 activeRvIdx，回滚：删掉 gxSheet 里这一行分支即可。
     ========================================================================== */
  ca.resumeArchive = {
    title: '我的简历版本档案',
    subtitle: 'AI 简历版本归档 · 3 份迭代 · 时间正序 · 默认选中第一份 · 点击列表切换诊断与纸面',
    shareTip: '诊断报告已生成，可分享给指导老师或就业指导中心（示意，正式版跳转分享页）',
    versions: [
      {
        code: '20240318-1', name: '实习初版', date: '2024-03-18', grade: '第二年',
        jobShort: '暑期实习', completeness: 52, usage: '7/35', thumbColor: '#5B84B8',
        summary: '第一份简历，为暑期实习通用投递而建，自我评价与模块组织都未对准具体岗位。',
        modules: [
          { k: 'basic', name: '基本信息', count: 1, status: 'warn',
            diag: '自我评价存在明显语句重复（「认真负责」「积极向上」出现两次），且与意向岗位无对应。',
            advice: '对照目标岗位改写自我评价，删掉重复表述，突出 1—2 个具体事例。' },
          { k: 'intent', name: '意向岗位', count: 1, status: 'warn',
            diag: '只写「暑期实习通用投递」，未锁定具体岗位，AI 只能按通用口径评估完成度。',
            advice: '先从数字媒体相关岗位里选一个方向，让后续模块都围绕它组织。' },
          { k: 'honor', name: '校内荣誉', count: 0, status: 'miss',
            diag: '荣誉栏为空：当时竞赛奖项尚未产生，奖学金也未写入。',
            advice: '后续获奖后记得回填本份或更新到新版本。' },
          { k: 'post', name: '校内职务', count: 0, status: 'miss',
            diag: '未填写；班委、社团、学生组织经历都是招聘方看重的组织能力证据。',
            advice: '有相关经历就补一条，写清角色与承担的事项。' },
          { k: 'work', name: '工作经历', count: 0, status: 'miss',
            diag: '暂无实习或工作经历条目，这一栏完全空白。',
            advice: '课程实践、校内项目也可按经历格式补一条，别让这一栏空着。' },
          { k: 'proj', name: '项目经历', count: 2, status: 'warn',
            diag: '校园公众号与课程短片均为描述性表述（「参与了」「完成了」），没有数据与结果。',
            advice: '每段经历补一条可量化结果，例如更新篇数、播放量。' },
          { k: 'cert', name: '资格证书', count: 5, status: 'warn',
            diag: '罗列 5 项，其中 2 项与媒体岗位无关，稀释了核心技能。',
            advice: '按目标岗位删到 3 项以内（呼应 3 月线上咨询建议）。' },
          { k: 'folio', name: '个人作品', count: 0, status: 'miss',
            diag: '未添加作品入口，设计类岗位无法直观核验产出。',
            advice: '可先挂课程短片链接，后续替换为竞赛作品。' }
        ],
        paper: {
          sidebar: {
            basics: [
              { k: '专业', v: '数字媒体技术' }, { k: '年级', v: '2022 级' },
              { k: '电话', v: '138****0000' }, { k: '邮箱', v: 'yangq@stu.edu.cn' }
            ],
            skills: '熟练使用 Photoshop；掌握公众号排版与短视频剪辑基础。'
          },
          main: {
            name: '杨强',
            summary: '本人性格开朗，认真负责，积极向上，对新媒体运营有浓厚兴趣，参与过校园公众号运营和短视频拍摄剪辑，希望获得一份暑期实习机会，认真负责地完成各项工作，积极学习，不断提升自己。',
            intent: { job: '暑期实习（通用）', salary: '4-5K', city: '长沙', avail: '暑期到岗' },
            edu: [{ t: '数字媒体技术 · 本科在读', s: '2022 — 2026', d: '主修：数字媒体基础、网页设计、视听语言' }],
            work: [],
            proj: [
              { t: '校园公众号内容运营', s: '2023 — 2024', d: '参与推文撰写与排版' },
              { t: '课程作业 · 短视频拍摄', s: '2023', d: '完成 2 支课程短片' }
            ],
            honors: [], posts: [],
            certs: ['英语四级', '普通话二甲', '计算机一级', 'Photoshop', '机动车驾驶证']
          }
        }
      },
      {
        code: '20240620-2', name: '岗位定向版', date: '2024-06-20', grade: '第三年',
        jobShort: '运营实习', completeness: 65, usage: '4/35', thumbColor: '#8FBF5A',
        summary: '线下面询后按岗位 JD 重构，意向聚焦到数字媒体运营实习生，待改项收敛到 3 处。',
        modules: [
          { k: 'basic', name: '基本信息', count: 1, status: 'ok',
            diag: '自我评价已按运营岗改写，语句精炼、指向明确，无重复表述。',
            advice: '保持即可；有新实践经历后同步更新。' },
          { k: 'intent', name: '意向岗位', count: 1, status: 'ok',
            diag: '已锁定「数字媒体运营实习生」，全模块围绕岗位重新组织（呼应面询建议）。',
            advice: '稳定后不再频繁改动意向，方便对比各份效果。' },
          { k: 'honor', name: '校内荣誉', count: 0, status: 'miss',
            diag: '仍未填写：本份定稿（6 月）早于创新赛获奖（10 月）。',
            advice: '下半年两项竞赛出结果后，在新版本中一并补入。' },
          { k: 'post', name: '校内职务', count: 0, status: 'miss',
            diag: '仍未填写。',
            advice: '校园新媒体中心等相关职务值得写入。' },
          { k: 'work', name: '工作经历', count: 0, status: 'miss',
            diag: '暂无可写的工作经历。',
            advice: '保持关注实践机会，第三学年暑期的项目可直接入档。' },
          { k: 'proj', name: '项目经历', count: 2, status: 'warn',
            diag: '已按岗位 JD 重排项目顺序，但表述仍是描述性，缺量化数据。',
            advice: '公众号运营经历补更新频率与阅读量区间。' },
          { k: 'cert', name: '资格证书', count: 3, status: 'ok',
            diag: '已精简为 3 项，与岗位要求对应清晰。',
            advice: '保持即可。' },
          { k: 'folio', name: '个人作品', count: 0, status: 'miss',
            diag: '仍未添加。',
            advice: '课程短片已有 2 支，可先整理成在线链接。' }
        ],
        paper: {
          sidebar: {
            basics: [
              { k: '专业', v: '数字媒体技术' }, { k: '年级', v: '2022 级' },
              { k: '电话', v: '138****0000' }, { k: '邮箱', v: 'yangq@stu.edu.cn' }
            ],
            skills: '掌握 Pr / AE / 剪映剪辑流程；正在学习新媒体数据分析。'
          },
          main: {
            name: '杨强',
            summary: '数字媒体技术专业在读，熟悉公众号运营与短视频剪辑流程，正在学习新媒体数据分析，希望在小规模内容团队中积累运营经验。',
            intent: { job: '数字媒体运营实习生', salary: '5-7K', city: '长沙', avail: '一周内到岗' },
            edu: [{ t: '数字媒体技术 · 本科在读', s: '2022 — 2026', d: '主修：新媒体数据分析、数字营销、视听语言' }],
            work: [],
            proj: [
              { t: '校园公众号运营', s: '2023 — 2024', d: '负责选题策划与内容排期' },
              { t: '课程短片 · 剪辑成片', s: '2023', d: '负责后期剪辑与包装' }
            ],
            honors: [], posts: [],
            certs: ['普通话二甲', '计算机一级', '英语四级']
          }
        }
      },
      {
        code: '20250417-3', name: '求职现行版', date: '2025-04-17', grade: '第四年',
        jobShort: '数字媒体运营', completeness: 78, usage: '12/35', thumbColor: '#5CAD6A',
        summary: '当前主投版本：竞赛奖项与校内职务已入档、经历对准运营岗，仍剩 2 处待补齐。',
        modules: [
          { k: 'basic', name: '基本信息', count: 1, status: 'ok',
            diag: '自我评价结合短视频运营实践，具体可信，无冗余表述。',
            advice: '保持即可。' },
          { k: 'intent', name: '意向岗位', count: 1, status: 'ok',
            diag: '已明确「数字媒体运营（内容运营方向）」，与毕业意向页口径一致。',
            advice: '建议补意向城市与期望薪资（毕业意向页同样缺这两项）。' },
          { k: 'honor', name: '校内荣誉', count: 2, status: 'ok',
            diag: '已写入创新大赛校级三等奖（2024-10）与职规赛院级一等奖（2024-11）。',
            advice: '职规赛 6 月校级决赛出结果后，记得更新本份荣誉。' },
          { k: 'post', name: '校内职务', count: 1, status: 'ok',
            diag: '校园新媒体中心编辑部成员，与意向岗位直接相关。',
            advice: '如承担固定选题量，可补一句量化（如每周 2 篇）。' },
          { k: 'work', name: '工作经历', count: 1, status: 'ok',
            diag: '校企合作短视频运营（6 周）：脚本撰写 + 账号数据周报，经历真实完整。',
            advice: '补一条周报数据量化（如周均产出 X 条、播放区间）。' },
          { k: 'proj', name: '项目经历', count: 2, status: 'warn',
            diag: '已有 AIGC 文创平台与公众号运营，但仍是描述性表述，缺量化成果。',
            advice: '用 STAR 重写两段经历并补数据（与顶部 AI 卡短板一致）。' },
          { k: 'cert', name: '资格证书', count: 3, status: 'ok',
            diag: '3 项证书与岗位要求对应清晰。',
            advice: '保持即可。' },
          { k: 'folio', name: '个人作品', count: 0, status: 'miss',
            diag: '仍未添加；两项竞赛作品是最现成的作品集素材。',
            advice: '把竞赛作品整理成在线链接挂到简历。' }
        ],
        paper: {
          sidebar: {
            basics: [
              { k: '专业', v: '数字媒体技术' }, { k: '年级', v: '2022 级' },
              { k: '电话', v: '138****0000' }, { k: '邮箱', v: 'yangq@stu.edu.cn' }
            ],
            skills: 'Pr / AE / 剪映（熟练）；新媒体数据分析；熟悉选题、脚本、数据周报全流程。'
          },
          main: {
            name: '杨强',
            summary: '数字媒体技术专业在读，6 周短视频运营实践经历，熟悉选题、脚本、数据周报全流程；有竞赛项目协作经验，能在内容团队中承担策划与执行。',
            intent: { job: '数字媒体运营（内容运营方向）', salary: '6-8K', city: '长沙', avail: '随时到岗' },
            edu: [{ t: '数字媒体技术 · 本科在读', s: '2022 — 2026', d: '主修：新媒体数据分析、数字营销、视听语言' }],
            work: [{ t: '校企合作短视频运营项目', s: '2025-03 · 6 周', d: '承担脚本撰写与账号数据周报' }],
            proj: [
              { t: '《基于AIGC的校园文创设计平台》', s: '2024-09', d: '4 人团队，负责文创内容策划，获校级三等奖' },
              { t: '校园公众号内容运营', s: '2023 — 2024', d: '选题策划与内容排期' }
            ],
            honors: [
              { t: '大学生创新大赛 · 校级三等奖', s: '2024-10' },
              { t: '大学生职业规划大赛 · 院级一等奖', s: '2024-11' }
            ],
            posts: [],
            certs: ['普通话二甲', '计算机一级', '英语四级']
          }
        }
      }
    ],
    gap: '3 份简历迭代把完成度从 52% 提到 78%，但「个人作品」三份都未添加、「项目经历」始终缺量化成果 —— 两个顽固缺口正是顶部 AI 卡点名的待补齐项；荣誉、职务与证书已经补齐，下一轮改简历应优先补这两处。',
    consistency: '与顶部 AI 卡一致：3 份 = 实习初版（2024-03）+ 岗位定向版（2024-06）+ 求职现行版（2025-04），完成度 52% → 65% → 78% 与右上角「历史简历 · 岗位匹配度」横条同一组数据，不重复计数。'
  };

  var activeRvIdx = 0;
  var activeRvOpen = 'basic';
  var activeRvShare = false;

  function gxRvStText(s) {
    if (s === 'ok') return '表现良好';
    if (s === 'miss') return '待补充';
    return '存在优化空间';
  }

  function gxRvThumb(v) {
    return '<span class="gx-rv-thumb" style="--tint:' + v.thumbColor + '">' +
      '<i class="t"></i><i class="l"></i><i class="l short"></i></span>';
  }

  function gxRvList() {
    var d = ca.resumeArchive;
    return '<aside class="gx-rv-list">' +
      '<h4 class="gx-rv-sec-title">历史简历 <i>' + d.versions.length + ' 份 · 时间正序</i></h4>' +
      '<div class="gx-rv-item-grid">' +
      d.versions.map(function (v, i) {
        return '<button type="button" class="gx-rv-item' + (i === activeRvIdx ? ' active' : '') +
          '" data-rv-pick="' + i + '">' +
          gxRvThumb(v) +
          '<span class="gx-rv-item-info">' +
            '<span class="gx-rv-item-name" title="杨强 - ' + gxEsc(v.jobShort) + ' - ' + v.code + '">杨强 - ' +
              gxEsc(v.jobShort) + ' - ' + v.code + '</span>' +
            '<span class="gx-rv-item-done">完成度 <b style="color:' + v.thumbColor + '">' + v.completeness +
              '%</b>' + (i === activeRvIdx ? '<em>当前查看</em>' : '') + '</span>' +
            '<span class="gx-rv-item-usage">使用次数 <b>' + gxEsc(v.usage || '-') + '</b></span>' +
            '<span class="gx-rv-item-date">创建时间：' + gxEsc(v.date) + '</span>' +
          '</span>' +
        '</button>';
      }).join('') +
      '</div>' +
      '<div class="gx-rv-list-tip">默认选中第一份；模块显示「待补充」会直接拖低完成度，点击列表切换诊断与纸面。</div>' +
    '</aside>';
  }

  function gxRvSec(m) {
    var open = activeRvOpen === m.k;
    return '<div class="gx-rv-sec st-' + m.status + (open ? ' open' : '') + '">' +
      '<button type="button" class="gx-rv-sec-head" data-rv-open="' + m.k + '">' +
        '<b>' + gxEsc(m.name) + ' - ' + m.count + '条</b><i class="gx-rv-arrow"></i>' +
      '</button>' +
      (open
        ? '<div class="gx-rv-sec-body">' +
            '<span class="gx-rv-st ' + m.status + '">' + gxRvStText(m.status) + '</span>' +
            '<p class="gx-rv-mod-diag"><b>诊断</b>' + gxEsc(m.diag) + '</p>' +
            '<p class="gx-rv-mod-adv"><b>建议</b>' + gxEsc(m.advice) + '</p>' +
          '</div>'
        : '') +
    '</div>';
  }

  function gxRvDiag(v) {
    var d = ca.resumeArchive;
    return '<div class="gx-rv-diag">' +
      '<p class="gx-rv-sec-title">AI 模块诊断<i>8 个模块 · 随选中简历切换</i></p>' +
      '<div class="gx-rv-diag-head"><h4>' + gxEsc(v.name) + ' · 诊断详情</h4>' +
        '<span class="gx-rv-diag-match" style="background:' + v.thumbColor + '">完成度 ' + v.completeness + '%</span>' +
      '</div>' +
      '<div class="gx-rv-sec-grid">' + v.modules.map(gxRvSec).join('') + '</div>' +
      '<div class="gx-rv-share-box">' +
        (activeRvShare ? '<p class="gx-rv-share-tip">' + gxEsc(d.shareTip) + '</p>' : '') +
        '<button type="button" class="gx-rv-share-btn" data-rv-share="1">分享诊断报告</button>' +
      '</div>' +
    '</div>';
  }

  function gxRvItems(list, emptyText) {
    if (!list || !list.length) {
      return '<p class="gx-rv-paper-empty">' + gxEsc(emptyText || '未填写') + '</p>';
    }
    return list.map(function (x) {
      if (typeof x === 'string') return '<p class="gx-rv-paper-line">' + gxEsc(x) + '</p>';
      return '<div class="gx-rv-paper-item"><div class="l1"><b>' + gxEsc(x.t) + '</b>' +
        (x.s ? '<span>' + gxEsc(x.s) + '</span>' : '') + '</div>' +
        (x.d ? '<p>' + gxEsc(x.d) + '</p>' : '') + '</div>';
    }).join('');
  }

  function gxRvPaper(v) {
    var p = v.paper, sb = p.sidebar, mn = p.main, it = mn.intent;
    var basics = sb.basics.map(function (b) {
      return '<li><i>' + gxEsc(b.k) + '</i>' + gxEsc(b.v) + '</li>';
    }).join('');
    var blocks = [
      { name: '自我评价', body: '<p class="gx-rv-paper-sum">' + gxEsc(mn.summary) + '</p>' },
      { name: '意向岗位', body:
        '<div class="gx-rv-intent-grid">' +
          '<span><b>' + gxEsc(it.job) + '</b><i>期望职位</i></span>' +
          '<span><b>' + gxEsc(it.salary) + '</b><i>期望薪资</i></span>' +
          '<span><b>' + gxEsc(it.city) + '</b><i>期望城市</i></span>' +
          '<span><b>' + gxEsc(it.avail) + '</b><i>到岗状态</i></span>' +
        '</div>' },
      { name: '教育经历', body: gxRvItems(mn.edu) },
      { name: '工作经历', body: gxRvItems(mn.work, '暂无工作经历') },
      { name: '项目经历', body: gxRvItems(mn.proj) },
      { name: '校内荣誉', body: gxRvItems(mn.honors) },
      { name: '校内职务', body: gxRvItems(mn.posts) },
      { name: '资格证书', body: gxRvItems(mn.certs) },
      { name: '个人作品', body: gxRvItems([], '未添加链接') }
    ];
    return '<aside class="gx-rv-paper">' +
      '<div class="gx-rv-paper-scroll">' +
        '<h4 class="gx-rv-sec-title">简历页面 <i>' + gxEsc(v.date) + ' 版 · 随选中简历切换</i></h4>' +
        '<div class="gx-rv-sheet2">' +
          '<div class="gx-rv-sheet-side">' +
            '<span class="gx-rv-photo">照片</span>' +
            '<h5>基本信息</h5><ul class="gx-rv-basics">' + basics + '</ul>' +
            '<h5>专业技能</h5><p class="gx-rv-skills">' + gxEsc(sb.skills) + '</p>' +
          '</div>' +
          '<div class="gx-rv-sheet-main">' +
            '<h3 class="gx-rv-sheet-name">' + gxEsc(mn.name) + '</h3>' +
            blocks.map(function (b) {
              return '<div class="gx-rv-sheet-block"><h5>' + gxEsc(b.name) + '</h5>' + b.body + '</div>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<p class="gx-rv-paper-note">* 简历纸面为示意排版，照片与正式预览需接平台简历版本库</p>' +
      '</div>' +
    '</aside>';
  }

  function gxRvSheet() {
    var d = ca.resumeArchive;
    var v = d.versions[activeRvIdx] || d.versions[0];
    return '<div class="gx-sheet gx-sheet-rv">' +
      gxResumeAi() +
      '<section class="gx-card gx-rv-panel">' +
        '<div class="gx-rv-head">' +
          '<div class="gx-rv-heading"><h3>' + gxEsc(d.title) + '</h3><p>' + gxEsc(d.subtitle) + '</p></div>' +
          '<div class="gx-rv-legend">' +
            '<span><i class="ok"></i>表现良好</span><span><i class="warn"></i>存在优化空间</span>' +
            '<span><i class="miss"></i>待补充</span>' +
          '</div>' +
        '</div>' +
        /* v70 照产品截图两段式：历史简历横向列表 → 简历页面整宽纸面 → 模块诊断整宽在下 */
        '<div class="gx-rv-body">' + gxRvList() + gxRvPaper(v) + gxRvDiag(v) + '</div>' +
      '</section>' +
    '</div>';
  }

  function gxBindRv() {
    document.querySelectorAll('[data-rv-pick]').forEach(function (b) {
      b.onclick = function () {
        activeRvIdx = Number(b.getAttribute('data-rv-pick')) || 0;
        activeRvShare = false;
        render();
      };
    });
    document.querySelectorAll('[data-rv-open]').forEach(function (b) {
      b.onclick = function () {
        var k = b.getAttribute('data-rv-open');
        activeRvOpen = activeRvOpen === k ? '' : k;
        render();
      };
    });
    document.querySelectorAll('[data-rv-share]').forEach(function (b) {
      b.onclick = function () { activeRvShare = true; render(); };
    });
  }

  /* ==========================================================================
     v67 · 「职业礼仪」详情页下方：我的职业礼仪测评报告（独立，可整块删除回滚）
     --------------------------------------------------------------------------
     用户口径：下方展示学生做过的职业礼仪历史记录详情 —— 左侧历史记录列表，
       右侧一个区域展示所选中的记录的报告，报告结构按参考图（AI形象礼仪测评报告）：
       报告总结（现场照片）→ 着装评价与改进建议（一、着装评价：1.1 环境分析 /
       1.2 着装分析；二、改进建议：2.1 着装建议 / 2.2 社交礼仪 / 2.3 面试事项）
       → AI 生成提示。
     AskUserQuestion 已确认（三项全选推荐）：
       ① 列表只列 3 次【AI形象礼仪】测评（2024-05-28 日常办公 61 分 /
          2025-03-24 面试实习 73 分 / 2025-06-18 面试定稿 82 分）；
          「职场礼仪与形象管理」线上课记录不是测评、无报告语义，不入列表；
       ② 报告头用杨强已有字段（专业 数字媒体技术 / 年级 2022 级），
          不照搬参考图「测试学生 / 软件技术」示例；
       ③ 现场照片用场景占位图块（虚线框 + 场景名 + tint），正式版接平台上传图。
     报告分数与 gradeRecords 三条测评记录逐字对应（综合 61/73/82，
       四维 64/58/55/67 → 78/70/72/72 → 86/79/82/81），与顶部 v61 AI 卡同源。
     报告叙事与既有页呼应：第 2 次「按初评报告调整」、第 3 次仪态 79 为最低项
       （v61 AI 卡已点名）、定稿版建议「保持即可」。
     默认选中第一条；列表点击切换右侧报告；报告区内部滚动（max-width 居中，报告比例）。
     类名统一用 .gx-ea-*（v61 AI 卡已占用 .gx-et-*）+ .gx-sheet-ea；
     回滚：删掉 gxSheet 里这一行分支即可。
     ========================================================================== */
  ca.etiquetteArchive = {
    title: '我的职业礼仪测评报告',
    subtitle: 'AI 形象礼仪测评归档 · 3 次测评 · 时间正序 · 默认选中第一次 · 点击列表切换报告',
    student: { name: '杨强', major: '数字媒体技术', gradeYear: '2022 级' },
    aiTip: '报告内容由 AI 生成，不能完全确保正确，仅供参考',
    reports: [
      {
        n: 1, scene: '日常办公场景', sceneShort: '日常办公', date: '2024-05-28', grade: '第二年',
        reportName: '职业形象初评报告', total: 61, tint: '#7FA8D0',
        dims: [{ k: '着装', v: 64 }, { k: '仪态', v: 58 }, { k: '岗位', v: 55 }, { k: '场景', v: 67 }],
        photoNote: '现场照片 · 日常办公场景 · 上传形象照',
        env: {
          bg: '图片中显示的是一个室内办公环境，桌面摆放电脑与文件，光线充足，是典型的日常学习办公场景。',
          match: '日常办公场合对着装要求宽松，当前休闲装扮基本匹配；但作为求职期的形象管理记录，与「职业感」尚有距离。'
        },
        dress: {
          style: '图中人物穿着休闲卫衣，整体偏日常，与办公场景不冲突，但缺少职业感的正式元素。',
          color: '浅灰 + 白色为主，干净清爽，但缺少低饱和的深色锚点，视觉重心偏弱。',
          reasonable: '整体协调，未见明显失误；作为日常办公可以接受，正式场合仍需升级。'
        },
        advice: {
          style: '建议选择更挺括的上装（衬衫、休闲西装），向商务休闲风格过渡，为面试场景做准备。',
          color: '加入深蓝、藏青等低饱和主色作为主基调，降低休闲感。',
          acc: '可佩戴简洁手表或无配饰，避免夸张配饰分散注意力。'
        },
        social: {
          manner: '坐姿略有塌肩，注意挺背与镜头前的眼神交流，肩线放平。',
          speech: '初评未涉及语音表达，建议日常练习 1 分钟结构化自我介绍，养成结论先行的习惯。',
          respect: '会议与小组讨论场合注意倾听、轮流发言，不抢话不打断。'
        },
        interview: {
          prep: '提前了解目标公司的文化与岗位要求，按岗位调整着装与展示重点。',
          intro: '准备 1 分钟自我介绍版本，突出专业背景、项目经历与岗位相关的亮点。',
          ask: '准备 2—3 个与岗位相关的问题，展示对职位的兴趣与思考。',
          summary: '本次为职业形象初评（综合 61 分），着装 64 / 仪态 58 / 岗位 55 / 场景 67；仪态与岗位贴合是当前最弱项，按建议调整后可在复测中重点观察。'
        }
      },
      {
        n: 2, scene: '面试场景 · 数字媒体运营实习生', sceneShort: '面试实习', date: '2025-03-24', grade: '第四年',
        reportName: '面试形象与仪态测评报告', total: 73, tint: '#8FBF5A',
        dims: [{ k: '着装', v: 78 }, { k: '仪态', v: 70 }, { k: '岗位', v: 72 }, { k: '场景', v: 72 }],
        photoNote: '现场照片 · 面试场景 · 数字媒体运营实习生',
        env: {
          bg: '图片中显示的是一个简洁的室内面试环境（模拟会议室），背景无杂物，光线均匀。',
          match: '正式面试场合，本次着装较初评明显正式，已基本达到实习生面试的达标线，专业感仍可加强。'
        },
        dress: {
          style: '白衬衫 + 深色长裤，按初评报告完成调整，正式度明显提升。',
          color: '白 + 深灰的组合安全稳妥；与运营岗的「内容感」相比略素，可加入浅色内搭层次。',
          reasonable: '整体协调；衬衫熨烫平整度与领口细节可再注意。'
        },
        advice: {
          style: '保持衬衫基础上加入薄针织或休闲西装外套，增加层次感。',
          color: '深蓝外套 + 白衬衫是面试安全组合，建议作为复测方案。',
          acc: '简约手表即可，避免过多配饰分散面试官注意力。'
        },
        social: {
          manner: '坐姿较初评挺拔，手部动作自然；回答问题时保持肩线放松。',
          speech: '回答语速平稳，继续练习结构化表达（先结论后展开）。',
          respect: '模拟面试中注意目光轮流覆盖面试官，结束致谢。'
        },
        interview: {
          prep: '已按初评报告落实着装调整（3 处）并完成复测，改进习惯初步形成。',
          intro: '突出「校园公众号运营 + 剪辑技能」，与实习生岗位要求直接对应。',
          ask: '可围绕岗位的日常内容节奏与团队分工提问。',
          summary: '综合 73 分（着装 78 / 仪态 70 / 岗位 72 / 场景 72），较初评提升 12 分；仪态（70）与岗位贴合（72）仍是下一轮重点。'
        }
      },
      {
        n: 3, scene: '面试场景 · 数字媒体运营岗', sceneShort: '面试定稿', date: '2025-06-18', grade: '第四年',
        reportName: '求职形象定稿报告', total: 82, tint: '#5CAD6A',
        dims: [{ k: '着装', v: 86 }, { k: '仪态', v: 79 }, { k: '岗位', v: 82 }, { k: '场景', v: 81 }],
        photoNote: '现场照片 · 面试场景 · 数字媒体运营岗',
        env: {
          bg: '图片中显示的是一个整洁的室内面试环境，背景简洁无杂物，适合正式求职拍摄。',
          match: '正式求职面试场合，整体形象已匹配数字媒体运营岗的要求，定稿版本无明显短板。'
        },
        dress: {
          style: '深蓝西装外套 + 白衬衫 + 深色长裤，正式度与岗位匹配度高。',
          color: '深蓝主色 + 白色内搭，层次清晰、专业感强，是面试安全组合的落地版。',
          reasonable: '各单项协调统一，着装 86 分为三项测评中的最高分。'
        },
        advice: {
          style: '本版可作为求职形象定稿，日常保持即可，无需频繁调整。',
          color: '正式场合维持当前深蓝 + 白组合，不再改动。',
          acc: '保持简约配饰；面试当天避免佩戴新配饰带来的不适感。'
        },
        social: {
          manner: '坐姿、手势与眼神交流自然；仪态 79 分仍是四维中最低项，可在模拟面试中继续打磨。',
          speech: '结构化表达稳定，「结论先行」的习惯已形成。',
          respect: '线下面询与模拟面试反馈均表现良好，保持即可。'
        },
        interview: {
          prep: '三轮形象迭代闭环（初评 61 → 复测 73 → 定稿 82），前期报告的改进项全部落实。',
          intro: '结合「基于AIGC的校园文创设计平台」项目与短视频运营实践，重点明确、证据充分。',
          ask: '保持围绕岗位数据与内容节奏提问的习惯。',
          summary: '综合 82 分（着装 86 / 仪态 79 / 岗位 82 / 场景 81），求职形象准备已达标，后续保持即可。'
        }
      }
    ],
    gap: '3 次测评形成完整的形象迭代闭环：综合分 61 → 73 → 82，四维中「仪态」始终是最低项（58 → 70 → 79），下一阶段可在模拟面试中继续打磨仪态表达；着装已到定稿水平。',
    consistency: '与顶部 AI 卡一致：3 次测评 = 初评（2024-05）+ 复测（2025-03）+ 定稿（2025-06），综合分与四维分逐条对应 gradeRecords 记录；「职场礼仪与形象管理」线上课是学习记录、不是测评，不计入本列表。'
  };

  var activeEaIdx = 0;

  function gxEaList() {
    var d = ca.etiquetteArchive;
    return '<aside class="gx-ea-list">' +
      '<h4 class="gx-ea-sec-title">历史测评记录 <i>' + d.reports.length + ' 次 · 时间正序</i></h4>' +
      d.reports.map(function (r, i) {
        return '<button type="button" class="gx-ea-item' + (i === activeEaIdx ? ' active' : '') +
          '" data-ea-pick="' + i + '">' +
          '<span class="gx-ea-item-name">第 ' + r.n + ' 次 · ' + gxEsc(r.sceneShort) +
            (i === activeEaIdx ? '<em>当前查看</em>' : '') + '</span>' +
          '<span class="gx-ea-item-meta">' + gxEsc(r.date) + ' · ' + gxEsc(r.grade) + '</span>' +
          '<span class="gx-ea-item-score">综合 <b style="color:' + r.tint + '">' + r.total + '</b>' +
          '<i>着装 ' + r.dims[0].v + ' / 仪态 ' + r.dims[1].v + '</i></span>' +
        '</button>';
      }).join('') +
      '<div class="gx-ea-list-tip">' + gxEsc(d.gap) + '</div>' +
    '</aside>';
  }

  function gxEaEntry(k, v) {
    if (!v) return '';
    return '<p class="gx-ea-entry"><b>' + gxEsc(k) + '</b>' + gxEsc(v) + '</p>';
  }

  function gxEaReport(r) {
    var d = ca.etiquetteArchive, st = d.student;
    return '<div class="gx-ea-report">' +
      '<div class="gx-ea-report-banner"><h4>职业礼仪报告</h4><span>' + gxEsc(r.reportName) + '</span></div>' +
      '<div class="gx-ea-student">' +
        '<span class="gx-ea-avatar"><i>照</i></span>' +
        '<div class="gx-ea-student-info">' +
          '<b>' + gxEsc(st.name) + ' - 数字媒体运营方向</b>' +
          '<span>专业：' + gxEsc(st.major) + '</span>' +
          '<span>年级：' + gxEsc(st.gradeYear) + ' · 测评时间：' + gxEsc(r.date) + '</span>' +
        '</div>' +
        '<span class="gx-ea-total" style="background:' + r.tint + '">综合 ' + r.total + '</span>' +
      '</div>' +
      '<div class="gx-ea-report-scroll">' +
        '<h5 class="gx-ea-chapter"><i>≡</i>报告总结</h5>' +
        '<div class="gx-ea-photo" style="--tint:' + r.tint + '">' +
          '<span>' + gxEsc(r.photoNote) + '</span>' +
        '</div>' +
        '<div class="gx-ea-dims">' + r.dims.map(function (x) {
          return '<span><b>' + x.v + '</b><i>' + gxEsc(x.k) + '</i></span>';
        }).join('') + '</div>' +
        '<h5 class="gx-ea-chapter"><i>≡</i>着装评价与改进建议</h5>' +
        '<div class="gx-ea-sec"><h6>一、着装评价</h6>' +
          '<div class="gx-ea-sub"><p class="gx-ea-sub-t">1.1 环境分析</p>' +
            gxEaEntry('背景环境', r.env.bg) + gxEaEntry('场合匹配', r.env.match) + '</div>' +
          '<div class="gx-ea-sub"><p class="gx-ea-sub-t">1.2 着装分析</p>' +
            gxEaEntry('服装风格', r.dress.style) + gxEaEntry('颜色搭配', r.dress.color) +
            gxEaEntry('搭配合理度', r.dress.reasonable) + '</div>' +
        '</div>' +
        '<div class="gx-ea-sec"><h6>二、改进建议</h6>' +
          '<div class="gx-ea-sub"><p class="gx-ea-sub-t">2.1 着装建议</p>' +
            gxEaEntry('着装风格建议', r.advice.style) + gxEaEntry('颜色搭配建议', r.advice.color) +
            gxEaEntry('配饰选择建议', r.advice.acc) + '</div>' +
          '<div class="gx-ea-sub"><p class="gx-ea-sub-t">2.2 社交礼仪</p>' +
            gxEaEntry('仪态规范', r.social.manner) + gxEaEntry('言语规范', r.social.speech) +
            gxEaEntry('尊重他人', r.social.respect) + '</div>' +
          '<div class="gx-ea-sub"><p class="gx-ea-sub-t">2.3 面试事项</p>' +
            gxEaEntry('准备充分', r.interview.prep) + gxEaEntry('自我介绍', r.interview.intro) +
            gxEaEntry('提问环节', r.interview.ask) + gxEaEntry('小结', r.interview.summary) + '</div>' +
        '</div>' +
        '<p class="gx-ea-aitip">提示：' + gxEsc(d.aiTip) + '</p>' +
      '</div>' +
    '</div>';
  }

  function gxEaSheet() {
    var d = ca.etiquetteArchive;
    var r = d.reports[activeEaIdx] || d.reports[0];
    return '<div class="gx-sheet gx-sheet-ea">' +
      gxEtiquetteAi() +
      '<section class="gx-card gx-ea-panel">' +
        '<div class="gx-ea-head">' +
          '<div class="gx-ea-heading"><h3>' + gxEsc(d.title) + '</h3><p>' + gxEsc(d.subtitle) + '</p></div>' +
        '</div>' +
        '<div class="gx-ea-body">' + gxEaList() + gxEaReport(r) + '</div>' +
        '<p class="gx-ea-consistency">' + gxEsc(d.consistency) + '</p>' +
      '</section>' +
    '</div>';
  }

  function gxBindEa() {
    document.querySelectorAll('[data-ea-pick]').forEach(function (b) {
      b.onclick = function () {
        activeEaIdx = Number(b.getAttribute('data-ea-pick')) || 0;
        render();
      };
    });
  }


  /* ==========================================================================
     v68 · 「宣讲会」下方：历史宣讲会档案 + 最近学校宣讲会推荐（.gx-tk2-*，v64 AI 卡已占用 .gx-tk-*）
     --------------------------------------------------------------------------
     用户口径：宣讲会详情记录页应展示学生参加过的宣讲会历史记录详情，并提供最近
               的学校宣讲会列表（AskUserQuestion 四项确认：左右两栏 / 5 场含 AI
               对口标记 / 报名可点击联动 KPI / 历史卡含三段状态）。
     数据自洽：
       历史记录动态提取 gradeRecords（business_type='校招活动参与情况' 且
       description 含「宣讲会」），双选会 2 条排除（归双选会页），共 6 场时间正序。
       行业标注 6 场全部非数字媒体对口 → 与 v64 AI 卡「行业对口 0/6」逐字呼应；
       三段状态（报名✓ / 签到未归档 / 要点未沉淀）与 v64 漏斗「停在报名」一致。
       upcoming 5 场为最近学校宣讲会示意：3 场 AI 对口推荐（文化传媒 / 互联网 /
       广电传媒，对应数字媒体运营方向）+ 2 场不对口（建筑工程 / 装备制造，照应
       学生此前的报名习惯），AI 推荐徽章 + 报名按钮点击变已报名并联动 KPI。
       本页为跨学年汇总档案，不受左栏 activeArchiveGrade 过滤影响（同 v51/v56）。
     ========================================================================== */
  ca.talkArchive = {
    title: '宣讲会参与档案',
    subtitle: '历史报名记录 · 三段留存状态 · 最近学校宣讲会推荐',
    industries: {
      '中建西部建设湖南有限公司': '建筑工程',
      '安克创新科技股份有限公司深圳分公司': '消费电子',
      '中石化湖南石油化工有限公司': '石油化工',
      '中广核集团': '清洁能源',
      '广州市海康电梯技术开发有限公司': '电梯制造',
      '美的集团股份有限公司': '智能家电'
    },
    statSteps: [
      { k: '报名凭证', ok: '已报名', note: '平台已归档' },
      { k: '现场签到', ok: '已签到', miss: '未归档' },
      { k: '宣讲要点', ok: '已沉淀', miss: '未沉淀' }
    ],
    gap: '6 场宣讲会全部停在「报名」环节：签到凭证未归档、宣讲要点未沉淀，且 6 家企业均为建筑工程 / 制造类行业，与数字媒体运营意向不对口（行业对口 0/6）。',
    consistency: '口径说明：历史记录 6 场动态提取自成长记录「校招活动参与情况」（双选会 2 场归双选会页）；行业对口结论与顶部 AI 卡一致；下方最近宣讲会为院校就业网示意排期，需接平台真实数据。'
  };

  ca.talkUpcoming = [
    { id: 'u1', company: '星芒文化传媒', theme: '数字媒体运营专场', date: '2024-09-26', time: '14:00', place: '大学生活动中心报告厅', industry: '文化传媒', match: true },
    { id: 'u2', company: '蓝湾网络科技', theme: '内容运营与新媒体', date: '2024-09-28', time: '19:00', place: '线上直播（腾讯会议）', industry: '互联网', match: true },
    { id: 'u3', company: '湖南广电金鹰卡通', theme: '动画与短视频方向', date: '2024-10-09', time: '15:30', place: '图书馆报告厅', industry: '广电传媒', match: true },
    { id: 'u4', company: '中建三局', theme: '建筑工程技术与管理', date: '2024-09-27', time: '10:00', place: '工科楼 B201', industry: '建筑工程', match: false },
    { id: 'u5', company: '湘江重工', theme: '装备制造管培生', date: '2024-10-11', time: '14:30', place: '就业指导中心多功能厅', industry: '装备制造', match: false }
  ];

  var activeTkSignups = {};

  function gxTk2Records() {
    var ind = ca.talkArchive.industries;
    var all = [];
    /* 跨年级汇总（同 v56/v58 口径）：gradeRecords 是按年级分组的对象 */
    Object.keys(ca.gradeRecords).forEach(function (grade) {
      (ca.gradeRecords[grade] || []).forEach(function (g) { all.push(g); });
    });
    var rows = all.filter(function (g) {
      return g.business_type === '校招活动参与情况' && (g.description || '').indexOf('宣讲会') >= 0;
    }).map(function (g) {
      var m = (g.description || '').match(/【(.+?)】/);
      var t = (g.created_at || '').match(/(\d{4})年(\d{2})月(\d{2})日\s+(\d{2}):(\d{2})/);
      return {
        company: m ? m[1] : g.description,
        date: t ? t[1] + '-' + t[2] + '-' + t[3] : '',
        time: t ? t[4] + ':' + t[5] : '',
        key: t ? t[1] + t[2] + t[3] + t[4] + t[5] : ''
      };
    }).sort(function (a, b) { return a.key < b.key ? -1 : 1; });
    return rows.map(function (r, i) {
      var indName = ind[r.company] || '综合行业';
      var steps = ca.talkArchive.statSteps.map(function (s, si) {
        if (si === 0) return '<li class="gx-tk2-step ok"><i>✓</i><span>' + s.k + '</span><em>' + s.ok + '</em></li>';
        return '<li class="gx-tk2-step miss"><i>!</i><span>' + s.k + '</span><em>' + s.miss + '</em></li>';
      }).join('');
      return '<article class="gx-tk2-rec">' +
        '<div class="gx-tk2-rec-top">' +
          '<b class="gx-tk2-rec-name">' + gxEsc(r.company) + '</b>' +
          '<span class="gx-tk2-ind gx-tk2-ind--off">非对口 · ' + gxEsc(indName) + '</span>' +
        '</div>' +
        '<p class="gx-tk2-rec-meta">报名于 ' + gxEsc(r.date) + ' ' + gxEsc(r.time) + ' · 第 ' + (i + 1) + ' 场</p>' +
        '<ul class="gx-tk2-steps">' + steps + '</ul>' +
      '</article>';
    }).join('');
  }

  function gxTk2Upcoming() {
    var d = ca.talkArchive;
    var signed = Object.keys(activeTkSignups).length;
    var matchN = ca.talkUpcoming.filter(function (u) { return u.match; }).length;
    var kpi = '<div class="gx-tk2-kpi">' +
      '<div class="gx-tk2-kpi-item"><b>' + ca.talkUpcoming.length + '</b><span>最近宣讲会</span></div>' +
      '<div class="gx-tk2-kpi-item hot"><b>' + matchN + '</b><span>AI 推荐对口</span></div>' +
      '<div class="gx-tk2-kpi-item"><b id="gx-tk2-signed-n">' + signed + '</b><span>已报名</span></div>' +
    '</div>';
    var cards = ca.talkUpcoming.map(function (u) {
      var signedU = !!activeTkSignups[u.id];
      return '<article class="gx-tk2-up' + (u.match ? ' is-match' : '') + '">' +
        '<div class="gx-tk2-up-top">' +
          '<b class="gx-tk2-up-name">' + gxEsc(u.company) + '</b>' +
          (u.match
            ? '<span class="gx-tk2-badge gx-tk2-badge--ai">AI 推荐 · 对口</span>'
            : '<span class="gx-tk2-badge gx-tk2-badge--off">行业不对口</span>') +
        '</div>' +
        '<p class="gx-tk2-up-theme">' + gxEsc(u.theme) + '</p>' +
        '<p class="gx-tk2-up-meta"><i>⏱</i>' + gxEsc(u.date) + ' ' + gxEsc(u.time) + '</p>' +
        '<p class="gx-tk2-up-meta"><i>📍</i>' + gxEsc(u.place) + '</p>' +
        '<p class="gx-tk2-up-meta"><i>🏷</i>' + gxEsc(u.industry) + '</p>' +
        (signedU
          ? '<button class="gx-tk2-btn is-done" disabled>✓ 已报名</button>'
          : '<button class="gx-tk2-btn" data-tk2-signup="' + gxEsc(u.id) + '">报名宣讲会</button>') +
      '</article>';
    }).join('');
    return '<aside class="gx-tk2-col gx-tk2-upcoming">' +
      '<p class="gx-ea-sec-title">最近学校宣讲会<i>按就业网排期 · AI 已标注对口度</i></p>' +
      kpi +
      '<div class="gx-tk2-up-list">' + cards + '</div>' +
    '</aside>';
  }

  function gxTk2Sheet() {
    var d = ca.talkArchive;
    return '<div class="gx-sheet gx-sheet-tk2">' +
      gxTalkAi() +
      '<section class="gx-card gx-tk2-panel">' +
        '<div class="gx-ea-head"><div class="gx-ea-heading">' +
          '<h3>' + gxEsc(d.title) + '</h3><p>' + gxEsc(d.subtitle) + '</p>' +
        '</div></div>' +
        '<div class="gx-tk2-body">' +
          '<aside class="gx-tk2-col gx-tk2-history">' +
            '<p class="gx-ea-sec-title">历史宣讲会记录<i>6 场 · 时间正序 · 全部停在报名</i></p>' +
            '<div class="gx-tk2-rec-list">' + gxTk2Records() + '</div>' +
            '<div class="gx-ea-list-tip">' + gxEsc(d.gap) + '</div>' +
          '</aside>' +
          gxTk2Upcoming() +
        '</div>' +
        '<p class="gx-ea-consistency">' + gxEsc(d.consistency) + '</p>' +
      '</section>' +
    '</div>';
  }

  function gxBindTk2() {
    document.querySelectorAll('[data-tk2-signup]').forEach(function (b) {
      b.onclick = function () {
        activeTkSignups[b.getAttribute('data-tk2-signup')] = true;
        render();
      };
    });
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
      gxBindCr();
      gxBindMv();
      gxBindAa();
      gxBindEm();
      gxBindRv();
      gxBindEa();
      gxBindTk2();
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
