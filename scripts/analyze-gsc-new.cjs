const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Users/YYJ/Documents/Trae/scripts/gsc-raw.json', 'utf8'));
const rows = data.rows;
const TODAY = new Date().toISOString().slice(0,10);
console.log(`数据日期: ${TODAY}, 覆盖: ${TODAY.slice(0,4)}-08-21 → ${TODAY}\n`);

// 聚合：按页面
const byPage = {};
rows.forEach(r => {
  if (!byPage[r.page]) byPage[r.page] = { clicks: 0, impressions: 0, queries: 0, positions: [] };
  byPage[r.page].clicks += r.clicks;
  byPage[r.page].impressions += r.impressions;
  byPage[r.page].queries += 1;
  byPage[r.page].positions.push(r.position);
});
Object.values(byPage).forEach(v => v.avgPos = v.positions.reduce((a,b)=>a+b,0)/v.positions.length);

// 聚合：按 query
const byQuery = {};
rows.forEach(r => {
  if (!byQuery[r.query]) byQuery[r.query] = { clicks: 0, impressions: 0, positions: [] };
  byQuery[r.query].clicks += r.clicks;
  byQuery[r.query].impressions += r.impressions;
  byQuery[r.query].positions.push(r.position);
});
Object.values(byQuery).forEach(v => v.avgPos = v.positions.reduce((a,b)=>a+b,0)/v.positions.length);

// 聚合：按 country
const byCountry = {};
rows.forEach(r => {
  if (!byCountry[r.country]) byCountry[r.country] = { clicks: 0, impressions: 0, pages: new Set() };
  byCountry[r.country].clicks += r.clicks;
  byCountry[r.country].impressions += r.impressions;
  byCountry[r.country].pages.add(r.page);
});

console.log('=== 核心指标 ===');
console.log(`总行数: ${rows.length}`);
console.log(`覆盖页面: ${Object.keys(byPage).length}`);
console.log(`覆盖关键词: ${Object.keys(byQuery).length}`);
const totalC = rows.reduce((s,r)=>s+r.clicks,0);
const totalI = rows.reduce((s,r)=>s+r.impressions,0);
console.log(`总点击: ${totalC}, 总展现: ${totalI}, CTR: ${(totalC/totalI*100).toFixed(2)}%`);

console.log('\n=== 页面 TOP 15（按点击）===');
Object.entries(byPage).sort((a,b)=>b[1].clicks-a[1].clicks).slice(0,15).forEach(([p,v]) => {
  const path = p.replace('https://www.hydoilpress.com','');
  const flag = v.avgPos < 10 ? '🟢' : v.avgPos < 20 ? '🟡' : v.avgPos < 50 ? '🟠' : '🔴';
  console.log(`  ${flag} ${v.clicks.toString().padStart(3)}C / ${v.impressions.toString().padStart(4)}I | 位 ${v.avgPos.toFixed(1).padStart(5)} | ${path}`);
});

console.log('\n=== 国家/地区 TOP 10（按展现）===');
Object.entries(byCountry).sort((a,b)=>b[1].impressions-a[1].impressions).slice(0,10).forEach(([c,v]) => {
  console.log(`  ${c.padEnd(10)}: ${v.impressions.toString().padStart(4)}I / ${v.clicks}C | ${v.pages.size} 页`);
});

console.log('\n=== TOP 10 关键词（有点击）===');
Object.entries(byQuery).filter(([_,v])=>v.clicks>0).sort((a,b)=>b[1].clicks-a[1].clicks).slice(0,10).forEach(([q,v]) => {
  const flag = v.avgPos < 10 ? '🟢' : v.avgPos < 20 ? '🟡' : v.avgPos < 50 ? '🟠' : '🔴';
  console.log(`  ${flag} ${q.padEnd(45)} | ${v.clicks}C/${v.impressions}I | 位 ${v.avgPos.toFixed(1)}`);
});

console.log('\n=== TOP10 关键词（按展现，含 0 点击）===');
Object.entries(byQuery).sort((a,b)=>b[1].impressions-a[1].impressions).slice(0,10).forEach(([q,v]) => {
  const flag = v.avgPos < 10 ? '🟢' : v.avgPos < 20 ? '🟡' : v.avgPos < 50 ? '🟠' : '🔴';
  console.log(`  ${flag} ${v.avgPos.toFixed(1).padStart(5)} | ${v.impressions.toString().padStart(4)}I/${v.clicks}C | ${q}`);
});

// 排名分布
const posBuckets = { 'TOP3': 0, 'TOP10': 0, 'TOP20': 0, 'TOP50': 0, '50+': 0 };
Object.values(byQuery).forEach(v => {
  if (v.avgPos <= 3) posBuckets['TOP3']++;
  else if (v.avgPos <= 10) posBuckets['TOP10']++;
  else if (v.avgPos <= 20) posBuckets['TOP20']++;
  else if (v.avgPos <= 50) posBuckets['TOP50']++;
  else posBuckets['50+']++;
});
console.log('\n=== 关键词排名分布 ===');
Object.entries(posBuckets).forEach(([b,c]) => console.log(`  ${b}: ${c} 个`));
