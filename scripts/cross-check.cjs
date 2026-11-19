// sitemap vs GSC 数据交叉分析，找出"已抓取但没展现"的页面
const fs = require('fs');

// 1. 读 sitemap
const xml = fs.readFileSync('d:/Users/YYJ/Documents/Trae/dist/sitemap-0.xml', 'utf8');
const sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log(`sitemap 总 URL: ${sitemapUrls.length}`);

// 2. 读 GSC 已有的数据
const gscRaw = JSON.parse(fs.readFileSync('d:/Users/YYJ/Documents/seo-dashboard/data/gsc-raw.json', 'utf8'));
const gscPages = new Set(gscRaw.rows.map(r => r.page));
console.log(`GSC 覆盖页面: ${gscPages.size}`);

// 3. sitemap 有但 GSC 完全没数据的页面
const sitemapOnly = sitemapUrls.filter(u => !gscPages.has(u));
console.log(`\n❌ sitemap 有 但 GSC 近 3 个月 0 展现 的页面: ${sitemapOnly.length}`);
sitemapOnly.slice(0, 30).forEach(u => console.log(`  ${u.replace('https://www.hydoilpress.com','')}`));
if (sitemapOnly.length > 30) console.log(`  ... 还有 ${sitemapOnly.length-30} 个`);

// 4. GSC 里有展现但没点击的页面
const noClick = gscRaw.rows.filter(r => r.clicks === 0 && r.impressions > 0);
console.log(`\n🟡 GSC 有展现但 0 点击: ${noClick.length} 行`);
const uniquePages = [...new Set(noClick.map(r => r.page))];
console.log(`  涉及 ${uniquePages.length} 个页面`);

// 5. 语言分布
const langDist = {};
sitemapUrls.forEach(u => {
  const m = u.match(/\.com\/([a-z]{2})\//);
  const lang = m ? m[1] : 'en';
  langDist[lang] = (langDist[lang] || 0) + 1;
});
console.log(`\n=== sitemap 语言分布 ===`);
Object.entries(langDist).sort((a,b) => b[1]-a[1]).forEach(([l,c]) => console.log(`  ${l}: ${c} URL`));
