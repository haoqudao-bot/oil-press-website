(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim() || '#0d47a1';
  var accent2 = style.getPropertyValue('--accent2').trim() || '#b71c1c';
  var ink = style.getPropertyValue('--ink').trim() || '#1a237e';
  var ink2 = style.getPropertyValue('--ink2').trim() || '#37474f';
  var muted = style.getPropertyValue('--muted').trim() || '#607d8b';
  var rule = style.getPropertyValue('--rule').trim() || '#e0e7ef';
  var bg2 = style.getPropertyValue('--bg2').trim() || '#f5f7fa';
  var good = style.getPropertyValue('--good').trim() || '#2e7d32';
  var warn = style.getPropertyValue('--warn').trim() || '#e65100';
  var bad = style.getPropertyValue('--bad').trim() || '#c62828';

  var palette = [accent, accent2, good, warn, '#5c6bc0', '#26a69a', '#ffa726', '#ef5350'];

  // Common tooltip
  var commonTip = { appendToBody: true, borderColor: rule, borderWidth: 1, padding: 8, textStyle: { color: ink2 } };

  // ===== 图 1：周度排名 + CTR 双轴 =====
  var weekly = echarts.init(document.getElementById('chart-weekly'), null, { renderer: 'svg' });
  weekly.setOption({
    tooltip: { trigger: 'axis', ...commonTip },
    legend: { data: ['加权排名', 'CTR (%)'], textStyle: { color: ink2 }, top: 0 },
    grid: { left: 55, right: 55, top: 36, bottom: 30 },
    xAxis: {
      type: 'category',
      data: ['W31','W32','W33','W34','W35','W36','W37','W38','W39','W40','W41','W42','W43'],
      axisLabel: { color: muted },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: [
      { type: 'value', name: '排名', nameTextStyle: { color: muted }, axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
      { type: 'value', name: 'CTR (%)', nameTextStyle: { color: muted }, axisLabel: { color: muted }, splitLine: { show: false } }
    ],
    series: [
      {
        name: '加权排名',
        type: 'bar',
        data: [1.25, 1.27, 23.33, 1.00, 2.75, 74.98, 32.76, 23.06, 13.71, 10.17, 8.13, 19.68, 20.74],
        itemStyle: { color: accent },
        label: { show: true, position: 'top', color: ink, fontSize: 10, formatter: function(p){ return p.value > 50 ? '75' : p.value.toFixed(1); } }
      },
      {
        name: 'CTR (%)',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        data: [25.0, 9.09, 0, 0, 0, 0, 1.32, 0, 4.0, 2.96, 3.89, 2.01, 2.27],
        itemStyle: { color: warn },
        lineStyle: { width: 3 },
        areaStyle: { color: warn + '22' }
      }
    ],
    animation: false
  });
  window.addEventListener('resize', function(){ weekly.resize(); });

  // ===== 图 2：CTR 按排名分档 =====
  var ctrRank = echarts.init(document.getElementById('chart-ctr-rank'), null, { renderer: 'svg' });
  ctrRank.setOption({
    tooltip: { trigger: 'axis', ...commonTip },
    legend: { data: ['实际 CTR', '行业参考上限'], textStyle: { color: ink2 }, top: 0 },
    grid: { left: 60, right: 40, top: 36, bottom: 30 },
    xAxis: {
      type: 'category',
      data: ['1–3 位', '4–10 位', '11–20 位', '21–50 位', '>50 位'],
      axisLabel: { color: muted },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: { type: 'value', name: 'CTR (%)', axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
    series: [
      {
        name: '实际 CTR',
        type: 'bar',
        data: [2.7, 1.1, 1.3, 1.0, 0.2],
        itemStyle: { color: bad, borderRadius: [0,0,0,0] },
        label: { show: true, position: 'top', color: bad, fontWeight: 'bold', formatter: '{c}%' }
      },
      {
        name: '行业参考上限',
        type: 'line',
        data: [30, 10, 4, 2, 1],
        itemStyle: { color: muted },
        lineStyle: { color: muted, type: 'dashed', width: 2 },
        symbol: 'emptyCircle'
      }
    ],
    animation: false
  });
  window.addEventListener('resize', function(){ ctrRank.resize(); });

  // ===== 图 3：页面类型 × 加权排名 =====
  var typeRank = echarts.init(document.getElementById('chart-type-rank'), null, { renderer: 'svg' });
  typeRank.setOption({
    tooltip: { trigger: 'axis', ...commonTip },
    grid: { left: 70, right: 30, top: 20, bottom: 30 },
    xAxis: { type: 'value', name: '加权排名', inverse: false, axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
    yAxis: { type: 'category', data: ['Resource','Product','Solution','Market','Other'], axisLabel: { color: ink2 }, axisLine: { lineStyle: { color: rule } } },
    series: [{
      type: 'bar',
      data: [
        { value: 42.4, itemStyle: { color: bad } },
        { value: 45.2, itemStyle: { color: bad } },
        { value: 18.0, itemStyle: { color: accent } },
        { value: 11.1, itemStyle: { color: good } },
        { value: 12.2, itemStyle: { color: accent2 } }
      ],
      label: { show: true, position: 'right', color: ink, fontWeight: 'bold', formatter: '{c}' }
    }],
    animation: false
  });
  window.addEventListener('resize', function(){ typeRank.resize(); });

  // ===== 图 4：页面类型 × 点击占比 =====
  var typeClicks = echarts.init(document.getElementById('chart-type-clicks'), null, { renderer: 'svg' });
  typeClicks.setOption({
    tooltip: { trigger: 'item', ...commonTip, formatter: '{b}: {c}% ({d}%)' },
    legend: { orient: 'vertical', right: 10, top: 'center', textStyle: { color: ink2 } },
    series: [{
      type: 'pie',
      radius: ['45%','72%'],
      center: ['38%','50%'],
      data: [
        { value: 48.3, name: 'Solution', itemStyle: { color: accent } },
        { value: 24.1, name: 'Product', itemStyle: { color: bad } },
        { value: 20.7, name: 'Other', itemStyle: { color: accent2 } },
        { value: 6.9, name: 'Market', itemStyle: { color: warn } },
        { value: 0, name: 'Resource', itemStyle: { color: muted } }
      ],
      label: { formatter: '{b}\n{c}%', fontSize: 11 },
      animation: false
    }]
  });
  window.addEventListener('resize', function(){ typeClicks.resize(); });

  // ===== 图 5：Coverage 严重问题 =====
  var coverage = echarts.init(document.getElementById('chart-coverage'), null, { renderer: 'svg' });
  coverage.setOption({
    tooltip: { trigger: 'axis', ...commonTip },
    grid: { left: 140, right: 30, top: 20, bottom: 30 },
    xAxis: { type: 'value', name: '页面数', axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
    yAxis: {
      type: 'category',
      data: ['已编入索引','已发现-尚未编入索引','已抓取-尚未编入索引','重定向错误'],
      axisLabel: { color: ink2 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 252, itemStyle: { color: good } },
        { value: 112, itemStyle: { color: bad } },
        { value: 3, itemStyle: { color: warn } },
        { value: 17, itemStyle: { color: bad } }
      ],
      label: { show: true, position: 'right', color: ink, fontWeight: 'bold', formatter: '{c} 页' },
      animation: false
    }]
  });
  window.addEventListener('resize', function(){ coverage.resize(); });

  // ===== 图 6：页面类型整体表现 =====
  var pageType = echarts.init(document.getElementById('chart-page-type'), null, { renderer: 'svg' });
  pageType.setOption({
    tooltip: { trigger: 'axis', ...commonTip },
    legend: { data: ['点击占比 (%)', '加权排名'], textStyle: { color: ink2 }, top: 0 },
    grid: { left: 60, right: 60, top: 36, bottom: 30 },
    xAxis: {
      type: 'category',
      data: ['Solution','Product','Market','Other','Resource'],
      axisLabel: { color: ink2 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: [
      { type: 'value', name: '点击占比 %', axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
      { type: 'value', name: '加权排名', inverse: true, axisLabel: { color: muted }, splitLine: { show: false } }
    ],
    series: [
      {
        name: '点击占比 (%)',
        type: 'bar',
        data: [48.3, 24.1, 6.9, 20.7, 0],
        itemStyle: { color: accent2 }
      },
      {
        name: '加权排名',
        type: 'line',
        yAxisIndex: 1,
        data: [18.0, 45.2, 11.1, 12.2, 42.4],
        itemStyle: { color: accent },
        lineStyle: { width: 3 },
        symbolSize: 8
      }
    ],
    animation: false
  });
  window.addEventListener('resize', function(){ pageType.resize(); });

  // ===== 图 7：语言 × 排名 =====
  var langRank = echarts.init(document.getElementById('chart-lang-rank'), null, { renderer: 'svg' });
  langRank.setOption({
    tooltip: { trigger: 'axis', ...commonTip },
    grid: { left: 80, right: 30, top: 20, bottom: 30 },
    xAxis: { type: 'value', axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
    yAxis: { type: 'category', data: ['AR','EN','FR','ID'], axisLabel: { color: ink2 }, axisLine: { lineStyle: { color: rule } } },
    series: [{
      type: 'bar',
      data: [
        { value: 22.3, itemStyle: { color: accent } },
        { value: 23.8, itemStyle: { color: accent } },
        { value: 30.7, itemStyle: { color: warn } },
        { value: 37.0, itemStyle: { color: bad } }
      ],
      label: { show: true, position: 'right', color: ink, fontWeight: 'bold', formatter: '{c}' }
    }],
    animation: false
  });
  window.addEventListener('resize', function(){ langRank.resize(); });

  // ===== 图 8：语言 × 点击占比 =====
  var langClicks = echarts.init(document.getElementById('chart-lang-clicks'), null, { renderer: 'svg' });
  langClicks.setOption({
    tooltip: { trigger: 'item', ...commonTip },
    legend: { orient: 'vertical', right: 10, top: 'center', textStyle: { color: ink2 } },
    series: [{
      type: 'pie',
      radius: ['35%','65%'],
      center: ['35%','50%'],
      data: [
        { value: 58.6, name: 'EN', itemStyle: { color: accent } },
        { value: 20.7, name: 'AR', itemStyle: { color: accent2 } },
        { value: 13.8, name: 'ID', itemStyle: { color: good } },
        { value: 6.9, name: 'FR', itemStyle: { color: warn } }
      ],
      label: { formatter: '{b}: {c}%', fontSize: 11 },
      animation: false
    }]
  });
  window.addEventListener('resize', function(){ langClicks.resize(); });

  // ===== 图 9：AI TOP 页面 =====
  var aiTop = echarts.init(document.getElementById('chart-ai-top'), null, { renderer: 'svg' });
  aiTop.setOption({
    tooltip: { trigger: 'axis', ...commonTip },
    grid: { left: 300, right: 30, top: 20, bottom: 30 },
    xAxis: { type: 'value', name: 'AI 展示', axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
    yAxis: {
      type: 'category',
      data: [
        '/solutions/mustard-oil-pressing/',
        '/solutions/avocado-oil-pressing/',
        '/ar/cold-press-oil-machine/',
        '/ar/solutions/coconut-oil-pressing/',
        '/ar/solutions/sesame-oil-pressing/',
        '/ar/solutions/castor-oil-pressing/'
      ],
      axisLabel: { color: ink2, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [5, 6, 4, 7, 8, 16],
      itemStyle: { color: accent },
      label: { show: true, position: 'right', color: ink, fontWeight: 'bold' }
    }],
    animation: false
  });
  window.addEventListener('resize', function(){ aiTop.resize(); });

  // ===== 图 10：AI × 语言 =====
  var aiLang = echarts.init(document.getElementById('chart-ai-lang'), null, { renderer: 'svg' });
  aiLang.setOption({
    tooltip: { trigger: 'item', ...commonTip },
    legend: { bottom: 0, textStyle: { color: ink2 } },
    series: [{
      type: 'pie',
      radius: ['40%','70%'],
      data: [
        { value: 69, name: 'AR (49.6%)', itemStyle: { color: accent2 } },
        { value: 47, name: 'EN (33.8%)', itemStyle: { color: accent } },
        { value: 15, name: 'FR (10.8%)', itemStyle: { color: warn } },
        { value: 8, name: 'ID (5.8%)', itemStyle: { color: good } }
      ],
      label: { formatter: '{b}', fontSize: 11 },
      animation: false
    }]
  });
  window.addEventListener('resize', function(){ aiLang.resize(); });

  // ===== 图 11：内链分布 =====
  var internal = echarts.init(document.getElementById('chart-internal'), null, { renderer: 'svg' });
  internal.setOption({
    tooltip: { trigger: 'axis', ...commonTip },
    grid: { left: 100, right: 30, top: 20, bottom: 30 },
    xAxis: { type: 'value', name: '平均内部链接数', axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
    yAxis: {
      type: 'category',
      data: ['Resource','Product','Market','Solution','Other'],
      axisLabel: { color: ink2 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 6.5, itemStyle: { color: muted } },
        { value: 6.2, itemStyle: { color: bad } },
        { value: 11.0, itemStyle: { color: warn } },
        { value: 12.0, itemStyle: { color: accent } },
        { value: 31.7, itemStyle: { color: good } }
      ],
      label: { show: true, position: 'right', color: ink, fontWeight: 'bold', formatter: '{c}' }
    }],
    animation: false
  });
  window.addEventListener('resize', function(){ internal.resize(); });

})();
