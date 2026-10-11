/**
 * 构建后处理：剥离 dist HTML 中的 HTML 注释。
 * 源码注释不受影响；<script> / <pre> 内部内容原样保留。
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

function walk(dir) {
  let files = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) files = files.concat(walk(p));
    else if (name.endsWith('.html')) files.push(p);
  }
  return files;
}

let touched = 0;
let removed = 0;

for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8');
  // 按脚本/预格式块切分，奇数段（标签内部）不处理
  const parts = html.split(/(<script[\s\S]*?<\/script>|<pre[\s\S]*?<\/pre>)/g);
  let changed = false;
  const out = parts
    .map((part, i) => {
      if (i % 2 === 1) return part;
      const stripped = part.replace(/<!--[\s\S]*?-->/g, () => {
        removed++;
        changed = true;
        return '';
      });
      return stripped;
    })
    .join('');
  if (changed) writeFileSync(file, out);
  touched++;
}

console.log(`strip-html-comments: ${removed} comments removed from ${touched} html files`);
