const fs = require('fs');
const xml = fs.readFileSync('d:/Users/YYJ/Documents/Trae/dist/sitemap-0.xml', 'utf8');
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log(`sitemap 总 URL 数: ${locs.length}\n`);

const noindexPatterns = [
  '/privacy-policy/', '/terms-of-service/', '/cookie-policy/',
  '/404', '/ads/',
];

const hits = locs.filter(url => noindexPatterns.some(p => url.includes(p)));
if (hits.length) {
  console.log('❌ sitemap 里包含 noindex 页面（应该剔除）:');
  hits.forEach(u => console.log(`  ${u}`));
} else {
  console.log('✅ sitemap 里没有 noindex 页面');
}

const langPairs = [['/privacy-policy/', 4], ['/terms-of-service/', 4], ['/cookie-policy/', 4], ['/ads/', 3]];
console.log('\n--- 预期 sitemap 里应该剔除的页面 ---');
langPairs.forEach(([p, count]) => {
  const found = locs.filter(u => u.includes(p));
  if (found.length) console.log(`${p}: ${found.length} 条在 sitemap 中（应该是 0）`);
});

console.log('\n--- sitemap 里有但不应该收录的（检查）---');
locs.forEach(u => {
  if (u.includes('/ads/') || u.includes('/404')) console.log(`  ⚠️  ${u}`);
});
