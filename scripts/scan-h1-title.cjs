// Scan dist/ for H1 == <title> duplications
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : '';
}

function extractH1(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return '';
  // Strip nested tags
  return m[1].replace(/<[^>]+>/g, '').trim();
}

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full));
    } else if (entry.name === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

const files = walk(distDir);
let dupCount = 0;
const dups = [];

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const title = extractTitle(html);
  const h1 = extractH1(html);
  if (title && h1 && title === h1) {
    dupCount++;
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    dups.push(rel);
  }
}

console.log(`Total HTML pages: ${files.length}`);
console.log(`H1 == title duplications: ${dupCount}`);
console.log(`\nDuplicated pages:`);
dups.forEach(d => console.log(`  ${d}`));
