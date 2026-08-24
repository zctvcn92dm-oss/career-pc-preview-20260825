window.AICareerHomeState={
  entitled:true,
  portraitEntitled:true,
  portraitStatus:'ready',
  portraitUpdatedAt:'2026-08-18',
  planStatus:'ready',
  mainPlan:{
    name:'大学生涯探索与成长规划',
    planType:'探索型',
    currentVersion:'V1.2',
    careerStage:'职业探索期',
    priorityStage:'第2阶段 · 专业认知与方向探索',
    stageFocus:'认识自我、体验职业，形成1—2个重点探索方向',
    updatedAt:'2026-08-12'
  },
  hasImportantChange:true,
  affectedSections:[{
    title:'职业发展方向分析需要更新',
    reason:'新的测评结果会让职业方向建议更贴近你现在的兴趣和偏好。',
    scope:'更新后将优化：方向说明、相关资源推荐。'
  }],
  relatedExistingServices:[
    {title:'完成职业价值观测评',note:'补充工作回报与环境偏好',page:'assessment'},
    {title:'继续学习职业世界探索方法',note:'当前学习进度72%',page:'course'},
    {title:'查看数字媒体技术专业方向',note:'进入现有专业认知详情',page:'major'}
  ],
};
const createBaseStudentState=window.MaxStudentState.createInitialState;
window.MaxStudentState.createInitialState=function(){const next=createBaseStudentState();next.stats=next.stats.map(item=>item[3]==='eye'?[item[0],item[1],item[2],'doc',item[4]]:item);return next};
