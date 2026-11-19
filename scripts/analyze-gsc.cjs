const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Users/YYJ/Documents/seo-dashboard/data/gsc-raw.json', 'utf8'));

const rows = data.rows;
console.log(`总行数: ${rows.length}\n`);

// 聚合：按页面
const byPage = {};
rows.forEach(r => {
  if (!byPage[r.page]) byPage[r.page] = { clicks: 0, impressions: 0, queries: 0 };
  byPage[r.page].clicks += r.clicks;
  byPage[r.page].impressions += r.impressions;
  byPage[r.page].queries += 1;
});

const pageSorted = Object.entries(byPage)
  .map(([page, v]) => ({ page, ...v, ctr: v.impressions ? (v.clicks/v.impressions*100).toFixed(1)+'%' : '-', avgPos: rows.filter(r=>r.page===page).reduce((s,r)=>s+r.position,0)/v.queries }))
  .sort((a,b) => b.clicks - a.clicks);

console.log('=== 页面总览（按点击排序，TOP 15）===');
pageSorted.slice(0, 15).forEach(p => {
  console.log(`${p.clicks.toString().padStart(3)} 点击 | ${p.impressions.toString().padStart(4)} 展现 | CTR ${p.ctr.padStart(6)} | 平均位 ${p.avgPos.toFixed(1).padStart(5)} | ${p.page.replace('https://www.hydoilpress.com','')}`);
});

// 聚合：按 query
const byQuery = {};
rows.forEach(r => {
  if (!byQuery[r.query]) byQuery[r.query] = { clicks: 0, impressions: 0, positions: [] };
  byQuery[r.query].clicks += r.clicks;
  byQuery[r.query].impressions += r.impressions;
  byQuery[r.query].positions.push(r.position);
});

const querySorted = Object.entries(byQuery)
  .map(([query, v]) => ({ query, clicks: v.clicks, impressions: v.impressions, ctr: v.impressions ? (v.clicks/v.impressions*100).toFixed(1)+'%' : '-', avgPos: v.positions.reduce((a,b)=>a+b,0)/v.positions.length }))
  .sort((a,b) => b.impressions - a.impressions);

console.log('\n=== 关键词总览（按展现排序，TOP 20）===');
querySorted.slice(0, 20).forEach(q => {
  const pos = q.avgPos < 10 ? `🟢 TOP10` : q.avgPos < 20 ? `🟡 TOP20` : q.avgPos < 50 ? `🟠 TOP50` : `🔴 50+`;
  console.log(`${pos} | ${q.clicks.toString().padStart(3)}C / ${q.impressions.toString().padStart(4)}I | CTR ${q.ctr.padStart(6)} | 平均位 ${q.avgPos.toFixed(1).padStart(5)} | ${q.query}`);
});

console.log('\n=== 有点击的关键词（TOP 位置 < 15）===');
querySorted.filter(q => q.avgPos < 15 && q.impressions >= 3).forEach(q => {
  console.log(`  位 ${q.avgPos.toFixed(1).padStart(4)} | ${q.clicks}C/${q.impressions}I | ${q.query}`);
});

console.log('\n=== 关键指标 ===');
const totalClicks = rows.reduce((s,r) => s+r.clicks, 0);
const totalImp = rows.reduce((s,r) => s+r.impressions, 0);
console.log(`总点击: ${totalClicks}`);
console.log(`总展现: ${totalImp}`);
console.log(`整体 CTR: ${(totalClicks/totalImp*100).toFixed(2)}%`);
console.log(`覆盖页面数: ${Object.keys(byPage).length}`);
console.log(`覆盖关键词数: ${Object.keys(byQuery).length}`);
const top10 = querySorted.filter(q => q.avgPos < 10).length;
const top20 = querySorted.filter(q => q.avgPos < 20).length;
console.log(`TOP10 关键词数: ${top10}`);
console.log(`TOP20 关键词数: ${top20}`);
