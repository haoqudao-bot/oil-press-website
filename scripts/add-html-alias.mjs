/**
 * Add .html aliases for Cloudflare Pages trailing-slash bypass.
 *
 * Cloudflare Pages always 308-redirects /dir → /dir/ when only dir/index.html exists.
 * This happens BEFORE _redirects matching, so _redirects proxy rules can't intercept it.
 *
 * Workaround: copy each dir/index.html to parent-dir/dir.html.
 * Cloudflare Pages serves /dir.html directly (200) → no 308 for /dir anymore.
 *
 * Root index.html is skipped (it's already served at / correctly).
 */

import { readdirSync, statSync, copyFileSync, existsSync } from 'node:fs';
import { join, dirname, sep } from 'node:path';

const DIST = join(process.cwd(), 'dist');

function walk(dir, callback) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (stat.isSymbolicLink?.()) continue;
      walk(full, callback);
    } else if (stat.isFile()) {
      callback(full);
    }
  }
}

let count = 0;

walk(DIST, (filePath) => {
  // Normalize to forward slashes for cross-platform matching
  const normalized = filePath.replace(/\\/g, '/');
  if (!normalized.endsWith('/index.html')) return;

  const dirPath = dirname(filePath);
  const dirName = dirPath.split(sep).pop();
  const parentPath = dirname(dirPath);

  // Skip root dist/index.html — already served at / correctly
  if (dirPath === DIST) return;

  const aliasFile = join(parentPath, `${dirName}.html`);

  // Skip if target already exists (e.g. .astro file named xxx.astro already outputs xxx.html)
  if (existsSync(aliasFile)) {
    console.log(`  SKIP (exists): ${relative(DIST, aliasFile)}`);
    return;
  }

  copyFileSync(filePath, aliasFile);
  count++;
});

console.log(`\n[add-html-alias] Created ${count} .html alias files`);
console.log('[add-html-alias] Cloudflare Pages will serve /path (no slash) → 200 via .html alias');
