/**
 * verify-gptbot.mjs
 *
 * 模拟 AI 搜索引擎爬虫（GPTBot / PerplexityBot / ClaudeBot）检查：
 *   1. dist/ 所有 HTML 页面的正文、规格表、FAQ、JSON-LD 是否出现在 raw HTML 中
 *      （不是靠 JS 注入/CSR）
 *   2. 产品页专属检查：<table scope=、Product schema、FAQPage schema、40-60 字摘要段
 *   3. robots.txt 是否放行所有主要 AI bot
 *   4. llms.txt + .well-known/llms.txt 是否存在
 *   5. sitemap.xml 是否可被 AI 爬虫读取
 *
 * 运行方式：
 *   npm run build && node scripts/verify-gptbot.mjs     # 本地构建产物检查
 *   node scripts/verify-gptbot.mjs --url https://你的域名  # 可选：fetch 线上域名
 *
 * exit code: 0 = PASS, 1 = FAIL
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');

// 线上 fetch 模式（可选）
const args = process.argv.slice(2);
const fetchMode = args.includes('--url');
const fetchUrl = args[args.indexOf('--url') + 1]?.replace(/\/$/, '');

// ===== 工具函数 =====
function listHtml(dir, list = []) {
  if (!existsSync(dir)) return list;
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) listHtml(p, list);
    else if (f.endsWith('.html')) list.push(p);
  }
  return list;
}

// 把本地 dist 路径转成 URL pathname
function htmlFileToUrl(file) {
  const rel = file.replace(DIST, '').replace(/\\/g, '/');
  // index.html → /, xxx.html → /xxx/, xxx/index.html → /xxx/
  if (rel === '/index.html') return '/';
  if (rel.endsWith('/index.html')) return rel.replace(/\/index\.html$/, '/');
  if (rel.endsWith('.html')) return rel.replace(/\.html$/, '/');
  return rel;
}

function getHtmlFromFile(file) {
  return readFileSync(file, 'utf8');
}

async function getHtmlFromUrl(url) {
  const resp = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)',
      'Accept': 'text/html',
    },
  });
  return await resp.text();
}

// ===== 检查项 =====
const failures = [];
const warnings = [];
const checks = {
  productPages: 0,
  solutionPages: 0,
  resourcePages: 0,
  totalHtml: 0,
};

function check(condition, file, label, isWarning = false) {
  const entry = `${file} — ${label}`;
  if (!condition) {
    if (isWarning) warnings.push(entry);
    else failures.push(entry);
  }
}

function classifyPage(pathname) {
  // Google Ads 专用落地页 → 完全跳过（noindex，不做 AI 爬虫检查）
  if (pathname.startsWith('/ads/')) return 'ads';

  // 具体产品页（/products/xxx/ 或 /fr/products/xxx/，且 xxx 不是 index、model-comparison 或 category）
  // 匹配 /products/slug/ 的形式（slug 不是 index 也不是 category 目录）
  const productDetailMatch = pathname.match(/\/(?:fr|ar|id)?\/?products\/([^\/]+)\/?$/);
  if (productDetailMatch) {
    const slug = productDetailMatch[1];
    // 这些 slug 不是具体产品：列表页 index、分类页（hydraulic-oil-press 等）、model-comparison
    if (slug === 'index' || slug === '' || slug === 'model-comparison' || slug === 'page') return 'product-index';
    // 分类页（以 -equipment 结尾或者是 hydraulic/seed/roasting/filtration 这 4 个固定分类）
    if (slug.endsWith('-equipment') || ['hydraulic-oil-press', 'seed-processing-equipment', 'roasting-steaming-equipment', 'filtration-refining-equipment'].includes(slug)) return 'product-category';
    // 4 个主力机型 → 也是产品页
    return 'product';
  }

  if (pathname.match(/\/solutions\//)) return 'solution';
  if (pathname.match(/\/resources\//)) return 'resource';
  if (pathname.match(/\/markets\//)) return 'market';
  if (pathname.match(/\/(faq|about|contact|services|roi-calculator)/)) return 'content';
  if (pathname === '/' || pathname === '/index.html') return 'home';
  return 'other';
}

// ===== 主检查 =====
async function main() {
  console.log('='.repeat(64));
  console.log('  GPTBot / AI Search Crawler Verification');
  console.log('='.repeat(64));

  if (fetchMode) {
    console.log(`  模式: fetch 线上域名 ${fetchUrl}`);
  } else {
    console.log(`  模式: 本地 dist/ 目录`);
    if (!existsSync(DIST)) {
      console.log('\n❌ dist/ 目录不存在 — 先 npm run build');
      process.exit(1);
    }
  }

  // ---- 先检查 robots.txt ----
  console.log('\n📋 [1/4] robots.txt AI bot 放行检查');
  const robotsLocal = join(ROOT, 'public', 'robots.txt');
  let robotsContent = '';
  if (fetchMode) {
    try {
      const resp = await fetch(`${fetchUrl}/robots.txt`);
      robotsContent = await resp.text();
    } catch {}
  } else if (existsSync(robotsLocal)) {
    robotsContent = readFileSync(robotsLocal, 'utf8');
  }

  const requiredBots = [
    'Googlebot', 'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
    'ClaudeBot', 'PerplexityBot', 'Google-Extended',
  ];
  for (const bot of requiredBots) {
    const hasRule = robotsContent.includes(`User-agent: ${bot}`);
    if (!hasRule) {
      // User-agent: * 也算隐式放行
      if (robotsContent.includes('User-agent: *') && robotsContent.includes('Allow: /')) {
        console.log(`  ⚠️  ${bot} 未显式列出，但 User-agent: * Allow: / 会覆盖`);
      } else {
        failures.push(`robots.txt — 缺少 ${bot} 显式放行（也没有 User-agent: * Allow: /）`);
      }
    } else {
      // 确认 bot 后面有 Allow: /
      const lines = robotsContent.split('\n');
      const botIdx = lines.findIndex(l => l.includes(`User-agent: ${bot}`));
      if (botIdx >= 0) {
        const nextAllow = lines.slice(botIdx + 1).find(l => l.trim().startsWith('Allow:'));
        if (nextAllow && !nextAllow.includes('Allow: /')) {
          failures.push(`robots.txt — ${bot} 后面的规则不是 Allow: /，是 "${nextAllow.trim()}"`);
        } else {
          console.log(`  ✅ ${bot}`);
        }
      }
    }
  }

  // ---- llms.txt ----
  console.log('\n📋 [2/4] llms.txt AI 数据集');
  const llmsLocal = join(ROOT, 'public', 'llms.txt');
  const wellKnownLlms = join(ROOT, 'public', '.well-known', 'llms.txt');
  if (existsSync(llmsLocal)) {
    const size = statSync(llmsLocal).size;
    console.log(`  ✅ llms.txt (${size} bytes)`);
    if (size < 200) warnings.push('llms.txt 太小（< 200 bytes），建议补充产品列表和联系方式');
  } else {
    failures.push('缺少 public/llms.txt');
  }
  if (existsSync(wellKnownLlms)) {
    console.log(`  ✅ .well-known/llms.txt`);
  } else {
    warnings.push('缺少 .well-known/llms.txt（Google AI 专用路径）');
  }

  // ---- sitemap ----
  console.log('\n📋 [3/4] sitemap.xml');
  if (existsSync(join(DIST, 'sitemap-index.xml'))) {
    console.log(`  ✅ sitemap-index.xml 存在`);
  } else if (existsSync(join(DIST, 'sitemap.xml'))) {
    console.log(`  ✅ sitemap.xml 存在`);
  } else {
    // 线上模式尝试 fetch
    if (fetchMode) {
      try {
        const resp = await fetch(`${fetchUrl}/sitemap-index.xml`);
        if (resp.ok) console.log(`  ✅ sitemap-index.xml (线上)`);
        else failures.push('sitemap-index.xml 线上返回非 200');
      } catch { failures.push('sitemap.xml 本地和线上都没找到'); }
    } else {
      warnings.push('sitemap.xml 未生成 — 确认 astro.config.mjs 有 @astrojs/sitemap');
    }
  }

  // ---- 逐页 HTML 内容检查 ----
  console.log('\n📋 [4/4] 逐页 HTML 内容检查');

  let htmlFiles = [];
  if (fetchMode) {
    // fetch 线上 sitemap 拿 URL 列表
    let sitemapUrls = [];
    try {
      const sitemapResp = await fetch(`${fetchUrl}/sitemap-index.xml`);
      if (sitemapResp.ok) {
        const xml = await sitemapResp.text();
        // 递归抓子 sitemap
        const subMaps = [...xml.matchAll(/<loc>(.*sitemap.*?)<\/loc>/g)].map(m => m[1]);
        for (const sub of subMaps) {
          try {
            const subResp = await fetch(sub);
            if (subResp.ok) {
              const subXml = await subResp.text();
              const urls = [...subXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
              sitemapUrls.push(...urls);
            }
          } catch {}
        }
      }
    } catch {}
    htmlFiles = sitemapUrls.map(u => ({ url: u, file: u.replace(fetchUrl, ''), isUrl: true }));
  } else {
    const files = listHtml(DIST);
    htmlFiles = files.map(f => ({ url: htmlFileToUrl(f), file: f, isUrl: false }));
  }

  console.log(`  共 ${htmlFiles.length} 个 HTML 页面\n`);

  for (const entry of htmlFiles) {
    let html;
    try {
      if (entry.isUrl) {
        html = await getHtmlFromUrl(entry.url);
      } else {
        html = getHtmlFromFile(entry.file);
      }
    } catch (e) {
      failures.push(`${entry.url} — 无法获取 HTML: ${e.message}`);
      continue;
    }

    checks.totalHtml++;
    const pathname = entry.isUrl ? new URL(entry.url).pathname : entry.url;
    const pageType = classifyPage(pathname);

    // ads 页完全跳过（Google Ads 专用、noindex、不需要 hreflang/JSON-LD）
    if (pageType === 'ads') continue;

    // 基础检查：H1 必须在 raw HTML 里
    const hasH1 = /<h1[\s>]/i.test(html);
    check(hasH1, pathname, 'H1 存在于 raw HTML');

    // 基础检查：title 存在
    const hasTitle = /<title>/i.test(html);
    check(hasTitle, pathname, '<title> 存在于 raw HTML');

    // 基础检查：canonical
    const hasCanonical = /rel="canonical"/.test(html);
    check(hasCanonical, pathname, 'canonical 标签存在');

    // 基础检查：hreflang
    const hasHreflang = /hreflang="/.test(html);
    check(hasHreflang, pathname, 'hreflang 标签存在');

    // 基础检查：JSON-LD 至少有一个
    const hasAnyLd = /application\/ld\+json/.test(html);
    check(hasAnyLd, pathname, '至少一个 JSON-LD schema');

    // === 产品页专属检查 ===
    if (pageType === 'product') {
      checks.productPages++;

      // 真实 table（带 scope）
      const hasTable = /<table[\s>]/i.test(html) && /scope=["']/.test(html);
      check(hasTable, pathname, '产品页：真实 <table scope= 规格表');

      // Product schema
      const hasProductLd = /"@type"\s*:\s*"Product"/.test(html);
      check(hasProductLd, pathname, '产品页：Product JSON-LD');

      // FAQPage schema 或 details 折叠
      const hasFaq = /"@type"\s*:\s*"FAQPage"/.test(html) || /<details[\s>]/.test(html);
      check(hasFaq, pathname, '产品页：FAQ 真实文本（<details> 或 FAQPage schema）', true);

      // 摘要段（40-60 字结论前置）
      // H1 之后、规格表之前的第一个 <p> 或 <div> 包含描述性文字
      const h1Idx = html.search(/<h1[\s>]/i);
      const tableIdx = html.search(/<table[\s>]/i);
      if (h1Idx >= 0 && tableIdx >= 0 && tableIdx > h1Idx) {
        const between = html.slice(h1Idx, tableIdx);
        const hasSummaryText = /<p[^>]*>[^<]{30,300}<\/p>/.test(between);
        check(hasSummaryText, pathname, '产品页：H1 和规格表之间有 40-60 字摘要段');
      } else {
        warnings.push(`${pathname} — H1 和 table 位置异常，跳过摘要段检查`);
      }

      // 禁止 hash 路由/CSR SPA 特征
      const hasReactRoot = /id="root"|data-reactroot|<div id="app">/.test(html);
      if (hasReactRoot) {
        failures.push(`${pathname} — 疑似 CSR SPA（有 root/app div），AI 爬虫抓不到正文`);
      }
    }

    // === 解决方案页 ===
    if (pageType === 'solution') {
      checks.solutionPages++;
      const hasHowToLd = /"@type"\s*:\s*"HowTo"/.test(html);
      if (hasHowToLd) console.log(`    ℹ️  ${pathname} — HowTo schema ✅`);
    }

    // === 资源页 ===
    if (pageType === 'resource') {
      checks.resourcePages++;
    }

    // === 所有页：禁止 CSR 特征 ===
    const hasOnlyBareShell = /<div id="root">\s*<\/div>\s*<div id="__next">/.test(html);
    if (hasOnlyBareShell) {
      failures.push(`${pathname} — 疑似纯 CSR SPA，raw HTML 只有空 shell`);
    }
  }

  // ---- 结果汇总 ----
  console.log('\n' + '='.repeat(64));
  console.log('  检查结果');
  console.log('='.repeat(64));
  console.log(`  总 HTML 页面:  ${checks.totalHtml}`);
  console.log(`  产品页:        ${checks.productPages}`);
  console.log(`  解决方案页:    ${checks.solutionPages}`);
  console.log(`  资源页:        ${checks.resourcePages}`);

  if (warnings.length > 0) {
    console.log(`\n  ⚠️  ${warnings.length} 个警告（不阻断部署）:`);
    for (const w of warnings) console.log(`    - ${w}`);
  }

  if (failures.length > 0) {
    console.log(`\n  ❌ ${failures.length} 个失败:`);
    for (const f of failures) console.log(`    - ${f}`);
    console.log(`\n  修复后再部署。exit code = 1`);
    process.exit(1);
  } else {
    console.log(`\n  ✅ 全部通过！AI 爬虫（GPTBot/Perplexity/ClaudeBot）可完整抓取。`);
    console.log(`  exit code = 0`);
    process.exit(0);
  }
}

main().catch(e => {
  console.error('脚本异常:', e);
  process.exit(1);
});
