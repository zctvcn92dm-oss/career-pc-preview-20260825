(function(){
var maxAssessmentCatalog=[
  {id:'anchor',title:'职业锚测评',subtitle:'找准职业核心，锁定长期方向',question:'职业锚测评的核心目的是什么？',description:'帮助个人在职业发展过程中，明确自己的职业定位和价值观，从而更好地实现个人和职业的匹配。',chart_type:'radar',chart_points:'60,22 91,39 78,67 60,72 38,65 30,40',icon:'锚'},
  {id:'career',title:'职业性格测评',subtitle:'解析人格偏好，匹配职场角色',question:'您的职业性格测评结果是什么？',description:'职业性格测评来啦！一场有趣的自我探索之旅，专为学生设计！它不仅帮你解锁个性秘密，还能指导你找到最适合自己的学习方式和沟通技巧。快来测一测，让职业性格引领你走向学霸之路！',chart_type:'bar',icon:'职'},
  {id:'multiple',title:'多元智能测评',subtitle:'发掘天赋优势，明晰成长路径',question:'您的天赋和潜力是什么？',description:'嘿，亲爱的高校同学们！你是否曾经好奇自己身上隐藏着哪些独特的天赋和潜力？是否想知道如何在大学这个丰富多彩的舞台上更好地展现自我，实现梦想？今天，就让我们一起来揭开“多元智能”的神秘面纱，开启一场充满趣味与惊喜的自我发现之旅吧！',chart_type:'radar',chart_points:'60,15 98,35 80,68 60,84 30,70 22,36',icon:'智'},
  {id:'interest',title:'职业倾向测评',subtitle:'从兴趣出发，探索适配职业',question:'您的职业兴趣是什么？',description:'深刻理解上述问题可以帮助您了解自己的职业倾向和兴趣爱好，从而为未来的职业选择和发展方向提供指导。通过对自己的职业兴趣进行分析和了解，您可以更好地选择适合自己的职业领域，并投入更多的热情和精力去发展自己的职业生涯。',chart_type:'radar',chart_points:'60,24 88,40 84,70 60,78 42,65 31,41',icon:'趣'},
  {id:'personality',title:'性格测评',subtitle:'了解个性特质，匹配岗位风格',question:'您的性格类型是什么？',description:'Hi，亲爱的你“你是否热情活泼？”“你是否追求完美？”“交际花、工作狂哪一个是真正的你？”“你是否希望被认可？”了解自己是成功的基石，让我们一起走近真实的自己。',chart_type:'bar',icon:'格'},
  {id:'psychology',title:'心理测评',subtitle:'评估情绪压力，守护心理健康',question:'您的心理类型是什么？',description:'Hi，亲爱的你“你是否独来独往？”“你是否喜欢想象？”“敏感、独立对你来说是习惯还是偶然？”“你是否追求稳定？”十六种性格测评，帮你发现真正的你自己！',chart_type:'radar',chart_points:'60,18 94,35 78,66 60,82 33,68 25,38',icon:'心'}
];
state.assessments=maxAssessmentCatalog;
if(typeof state.entitlements.assessment==='undefined')state.entitlements.assessment=true;
var assessmentParams=new URLSearchParams(location.search);
var assessmentActionState=assessmentParams.get('action')||'';
var assessmentTypeState=assessmentParams.get('type')||'';

function maxAssessmentChart(item){
  if(item.chart_type==='bar')return '<div class="assessment-bar-chart">'+[82,56,73,44,68,88].map(function(x){return '<i style="width:'+x+'%"></i>'}).join('')+'</div><span>'+item.icon+'</span><small>示例数据图</small>';
  return '<svg viewBox="0 0 120 96" aria-label="'+item.title+'示例数据图"><g fill="none" stroke="#dceceb"><polygon points="60,8 106,32 96,78 60,92 22,76 14,32"/><polygon points="60,22 92,39 85,69 60,79 34,68 28,39"/><polygon points="60,37 78,46 74,61 60,67 46,60 42,46"/><line x1="60" y1="8" x2="60" y2="92"/><line x1="14" y1="32" x2="96" y2="78"/><line x1="106" y1="32" x2="22" y2="76"/></g><polygon points="'+item.chart_points+'" fill="rgba(36,209,178,.18)" stroke="#24cdb2" stroke-width="2"/></svg><span>'+item.icon+'</span><small>示例数据图</small>';
}
function maxAssessmentFeedback(title,text){return pageHead('职业测评','同步云生涯Max现有测评内容和流程')+'<section class="assessment-feedback"><span class="icon-box orange">!</span><h2>'+title+'</h2><p>'+text+'</p><button class="primary" data-page="home">返回首页</button></section>'}
assessment=function(){
  if(state.student.loggedIn===false)return maxAssessmentFeedback('请先登录','登录后可查看学校已授权的职业测评。');
  if(!state.student.bound)return maxAssessmentFeedback('请先绑定学号','完成统一学生身份绑定后可进入职业测评。');
  if(state.entitlements.assessment===false)return maxAssessmentFeedback('学校未开通','当前学校未采购职业测评服务，不展示受限内容。');
  return '<div class="page-head assessment-page-head"><div><h1>职业测评</h1><p>同步云生涯Max现有测评内容、报告和测评入口</p></div><div class="assessment-global-actions"><button data-existing="进入AI岗位推荐">AI岗位推荐</button><button class="primary" data-existing="暂无综合报告">AI综合报告</button><button data-page="home">返回首页</button></div></div><section class="assessment-grid">'+state.assessments.map(function(item){return '<article class="assessment-card"><header><div><h2>'+item.title+'</h2><p>'+item.subtitle+'</p></div></header><div class="assessment-card-body"><div class="assessment-copy"><h3>'+item.question+'</h3><p>'+item.description+'</p></div><figure class="assessment-chart">'+maxAssessmentChart(item)+'</figure></div><footer><button data-assessment-action="record" data-assessment-type="'+item.id+'">查看报告</button><button class="primary" data-assessment-action="desc" data-assessment-type="'+item.id+'">开始测评</button></footer></article>'}).join('')+'</section>';
};
var baseAssessmentSyncUrl=syncUrl;
syncUrl=function(){
  baseAssessmentSyncUrl();
  var url=new URL(location.href);
  if(page==='assessment'&&assessmentActionState&&assessmentTypeState){url.searchParams.set('action',assessmentActionState);url.searchParams.set('type',assessmentTypeState)}else{url.searchParams.delete('action');url.searchParams.delete('type')}
  history.replaceState(null,'',url);
};
var baseAssessmentBind=bind;
bind=function(){
  baseAssessmentBind();
  document.querySelectorAll('[data-assessment-action]').forEach(function(button){button.onclick=function(){assessmentActionState=button.dataset.assessmentAction;assessmentTypeState=button.dataset.assessmentType;var item=state.assessments.find(function(x){return x.id===assessmentTypeState});modal=(assessmentActionState==='desc'?'进入测评说明':'进入测评记录')+'｜'+(item?item.title:'职业测评')+'现有Max流程';render()}});
};
render();
})();
