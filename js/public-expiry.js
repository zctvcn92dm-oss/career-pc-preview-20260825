(function () {
  var expiresAt = new Date('2026-08-27T01:00:00+08:00');
  if (Date.now() < expiresAt.getTime()) return;
  document.documentElement.innerHTML = '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>预览已结束</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f4f8f6;font:16px/1.7 system-ui,"Microsoft YaHei",sans-serif;color:#263a32}.notice{width:min(520px,calc(100% - 48px));padding:42px;background:#fff;border:1px solid #e1ebe6;border-radius:18px;box-shadow:0 16px 40px rgba(44,84,66,.08);text-align:center}.notice b{display:block;margin-bottom:12px;font-size:26px;color:#17261f}.notice span{color:#73837c}</style></head><body><div class="notice"><b>本次原型预览已结束</b><span>临时访问期限截至 2026年8月27日 01:00（北京时间）。</span></div></body>';
})();
