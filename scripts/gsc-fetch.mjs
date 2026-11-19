import { readFileSync, writeFileSync } from 'node:fs';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { google } from 'googleapis';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const agent = new HttpsProxyAgent('http://127.0.0.1:21082');
process.env.HTTPS_PROXY = 'http://127.0.0.1:21082';

const credPath = 'd:/Users/YYJ/Documents/seo-dashboard/data/gsc-service-account.json';
const credentials = JSON.parse(readFileSync(credPath, 'utf8'));
const auth = new google.auth.JWT({ email: credentials.client_email, key: credentials.private_key, scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });

google.options({ httpsAgent: agent, timeout: 30000 });
const sc = google.searchconsole({ version: 'v1', auth });
const props = (await sc.sites.list()).data.siteEntry;
const site = props.find(p => p.siteUrl.includes('hydoilpress'));

const end = new Date().toISOString().slice(0,10);
const start = new Date(Date.now() - 90*86400000).toISOString().slice(0,10);
console.log(`Pulling ${start} → ${end}...`);

let allRows = [], startRow = 0;
while (true) {
  const { data } = await sc.searchanalytics.query({
    siteUrl: site.siteUrl,
    requestBody: { startDate: start, endDate: end, dimensions: ['query', 'page', 'country', 'device'], rowLimit: 5000, startRow }
  });
  const batch = data.rows || [];
  if (!batch.length) break;
  allRows = allRows.concat(batch);
  startRow += batch.length;
  process.stdout.write(`\r  ${allRows.length} rows...`);
  if (batch.length < 5000) break;
}

const out = allRows.map(r => ({ query: r.keys[0], page: r.keys[1], country: r.keys[2], device: r.keys[3], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position }));
const outPath = 'd:/Users/YYJ/Documents/Trae/scripts/gsc-raw.json';
writeFileSync(outPath, JSON.stringify({ rows: out }));
console.log(`\n✅ ${out.length} rows saved → ${outPath}`);

// 统计
const pages = new Set(out.map(r => r.page));
const queries = new Set(out.map(r => r.query));
console.log(`覆盖页面: ${pages.size}, 关键词: ${queries.size}`);
console.log(`总点击: ${out.reduce((s,r)=>s+r.clicks,0)}, 总展现: ${out.reduce((s,r)=>s+r.impressions,0)}`);
