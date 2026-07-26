import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dataDir = path.join(__dirname, '../src/data');

const localeData = {
  fr: 'fr-market-data.ts',
  ar: 'ar-market-data.ts',
  id: 'id-market-data.ts'
};

const markets = ['nigeria', 'india', 'indonesia', 'pakistan', 'philippines', 'egypt', 'south-africa', 'kenya', 'uk', 'usa', 'middle-east'];

console.log('=== Market Content Consistency Check ===');
console.log(`Found ${markets.length} English market pages\n`);

const inconsistencies = [];

for (const market of markets) {
  console.log(`\n--- Checking: ${market} ---`);
  
  for (const [locale, dataFile] of Object.entries(localeData)) {
    const dataPath = path.join(dataDir, dataFile);
    if (!fs.existsSync(dataPath)) {
      inconsistencies.push({
        url: `/${locale}/markets/${market}`,
        module: 'market-data',
        issue: 'Data file missing',
        severity: 'high'
      });
      console.log(`  ${locale}: ❌ Data file missing`);
      continue;
    }
    
    const localeContent = fs.readFileSync(dataPath, 'utf8');
    
    const pattern1 = new RegExp("['\"]" + market + "['\"]\\s*:");
    const pattern2 = new RegExp("\\s+" + market + "\\s*:");
    
    if (!pattern1.test(localeContent) && !pattern2.test(localeContent)) {
      inconsistencies.push({
        url: `/${locale}/markets/${market}`,
        module: 'market-data',
        issue: 'Market not found in locale data',
        severity: 'high'
      });
      console.log(`  ${locale}: ❌ Market not found`);
    } else {
      console.log(`  ${locale}: ✅ Market found`);
    }
  }
}

console.log('\n=== Summary of Market Inconsistencies ===');
console.log(`Total inconsistencies found: ${inconsistencies.length}\n`);

const severityCount = { high: 0, medium: 0, low: 0 };
inconsistencies.forEach(inc => severityCount[inc.severity]++);

console.log('By severity:');
console.log(`  High: ${severityCount.high}`);
console.log(`  Medium: ${severityCount.medium}`);
console.log(`  Low: ${severityCount.low}`);

console.log('\nDetailed list:');
inconsistencies.forEach((inc, index) => {
  console.log(`${index + 1}. [${inc.severity.toUpperCase()}] ${inc.url}`);
  console.log(`   Issue: ${inc.issue}`);
});

const csvContent = [
  ['URL', 'Module', 'Issue', 'Severity'],
  ...inconsistencies.map(inc => [inc.url, inc.module, inc.issue, inc.severity])
].map(row => row.join(',')).join('\n');

fs.writeFileSync(path.join(__dirname, '../reports/market-report.csv'), csvContent);
console.log('\n✅ Report saved to reports/market-report.csv');
