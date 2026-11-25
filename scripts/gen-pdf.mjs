// Render catalog page to PDF using Chrome via puppeteer-core
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://127.0.0.1:8888/catalog/';
const OUTPUT = path.resolve('Haonuo_Catalog_2026.pdf');

console.log('Launching Chrome...');
const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  headless: 'new',
});

const page = await browser.newPage({
  viewport: { width: 1200, height: 1600 },
  deviceScaleFactor: 1,
});

console.log(`Loading ${URL} ...`);
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });

// Wait for images to load + static delay
await new Promise(r => setTimeout(r, 2000));

console.log('Generating PDF...');
await page.pdf({
  path: OUTPUT,
  format: 'A4',
  printBackground: false,
  margin: { top: '12mm', right: '10mm', bottom: '12mm', left: '10mm' },
  displayHeaderFooter: false,
  scale: 1,
});

await browser.close();
const stat = fs.statSync(OUTPUT);
console.log(`✅ PDF generated: ${OUTPUT} (${(stat.size / 1024).toFixed(1)} KB)`);
