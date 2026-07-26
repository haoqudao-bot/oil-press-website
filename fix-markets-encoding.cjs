const fs = require('fs');
const path = require('path');

const marketsDir = path.join(__dirname, 'src/pages/markets');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  const fixes = [
    { from: '�?', to: '&' },
    { from: '�?', to: '&' },
    { from: '\uFFFD?', to: '&' },
    { from: '\uFFFD', to: '&' },
  ];
  
  fixes.forEach(({ from, to }) => {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  });
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${path.relative(marketsDir, filePath)}`);
  }
}

const files = fs.readdirSync(marketsDir);
files.forEach(file => {
  if (file.endsWith('.astro')) {
    fixFile(path.join(marketsDir, file));
  }
});

console.log('\nDone!');
