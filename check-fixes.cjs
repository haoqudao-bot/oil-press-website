const fs = require('fs');
const path = require('path');

const keywords = [
  'screw press', 'screw-pre-press', 'screw-expeller', 
  'presses à vis', 'à vis', 'HN-CG60',
  'الضغط اللولبي', 'بري', 'ulir', 'press sekrup'
];

const directories = [
  './src/content/resources',
  './src/content/products',
  './src/data',
  './src/pages'
];

console.log('=== 螺旋压榨机内容检测 ===\n');

let foundIssues = [];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir, { recursive: true });
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (!fs.statSync(filePath).isFile()) return;
    if (!file.endsWith('.ts') && !file.endsWith('.md') && !file.endsWith('.astro')) return;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    
    keywords.forEach(keyword => {
      if (content.includes(keyword)) {
        foundIssues.push({
          file: filePath,
          keyword: keyword,
          line: findLine(content, keyword)
        });
      }
    });
  });
});

function findLine(content, keyword) {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(keyword)) {
      return i + 1;
    }
  }
  return -1;
}

if (foundIssues.length > 0) {
  console.log('发现螺旋压榨机相关内容:');
  foundIssues.forEach(issue => {
    console.log(`  ${issue.file}:${issue.line} - "${issue.keyword}"`);
  });
} else {
  console.log('✓ 未发现螺旋压榨机相关内容');
}

console.log('\n=== Solutions Commercial重复检测 ===\n');

const enJson = JSON.parse(fs.readFileSync('./src/i18n/en.json', 'utf-8'));
const frJson = JSON.parse(fs.readFileSync('./src/i18n/fr.json', 'utf-8'));
const arJson = JSON.parse(fs.readFileSync('./src/i18n/ar.json', 'utf-8'));
const idJson = JSON.parse(fs.readFileSync('./src/i18n/id.json', 'utf-8'));

console.log(`英文 smallBusiness: "${enJson.nav.smallBusiness}", commercial: "${enJson.nav.commercial}"`);
console.log(`法语 smallBusiness: "${frJson.nav.smallBusiness}", commercial: "${frJson.nav.commercial}"`);
console.log(`阿拉伯语 smallBusiness: "${arJson.nav.smallBusiness}", commercial: "${arJson.nav.commercial}"`);
console.log(`印尼语 smallBusiness: "${idJson.nav.smallBusiness}", commercial: "${idJson.nav.commercial}"`);

const enMatch = enJson.nav.smallBusiness === enJson.nav.commercial;
const frMatch = frJson.nav.smallBusiness === frJson.nav.commercial;
const arMatch = arJson.nav.smallBusiness === arJson.nav.commercial;
const idMatch = idJson.nav.smallBusiness === idJson.nav.commercial;

if (enMatch || frMatch || arMatch || idMatch) {
  console.log('\n✗ 存在重复的Commercial翻译!');
  if (enMatch) console.log('  - 英文翻译重复');
  if (frMatch) console.log('  - 法语翻译重复');
  if (arMatch) console.log('  - 阿拉伯语翻译重复');
  if (idMatch) console.log('  - 印尼语翻译重复');
} else {
  console.log('\n✓ Solutions栏目翻译已正确区分');
}

console.log('\n=== 检测完成 ===');