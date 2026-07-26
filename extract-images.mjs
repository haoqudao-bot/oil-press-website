import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';

const docxPath = 'E:\\液压榨油机\\最新产品介绍2025\\产品大全-浩诺机械-2025.11.docx';
const outputDir = 'd:\\Users\\YYJ\\Documents\\Trae\\public\\images\\products';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(docxPath)) {
  console.error('Docx file not found:', docxPath);
  process.exit(1);
}

console.log('Extracting images from docx...');
console.log('Source:', docxPath);
console.log('Output:', outputDir);

try {
  const zip = new AdmZip(docxPath);
  const entries = zip.getEntries();
  
  let count = 0;
  for (const entry of entries) {
    const entryPath = entry.entryName;
    if (entryPath.startsWith('word/media/')) {
      const name = path.basename(entryPath);
      const data = entry.getData();
      const outPath = path.join(outputDir, name);
      fs.writeFileSync(outPath, data);
      count++;
      console.log(`Extracted: ${name} (${(data.length / 1024).toFixed(1)} KB)`);
    }
  }
  
  console.log(`\nTOTAL: ${count} images extracted`);
  
  if (count === 0) {
    console.log('\nNo images found in word/media/. Listing all entries:');
    for (const entry of entries) {
      console.log(`  ${entry.entryName} (${entry.header.size} bytes)`);
    }
  }
} catch (err) {
  console.error('Extraction failed:', err.message);
  process.exit(1);
}
