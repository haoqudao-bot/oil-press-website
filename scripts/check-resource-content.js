import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const contentDir = path.join(__dirname, '../src/content/resources');
const dataDir = path.join(__dirname, '../src/data');

const resources = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

console.log('=== Resource Content Consistency Check ===');
console.log(`Found ${resources.length} English resource files\n`);

const localeData = {
  fr: 'fr-resource-bodies.ts',
  ar: 'ar-resource-bodies.ts',
  id: 'id-resource-bodies.ts'
};

const inconsistencies = [];

for (const resource of resources) {
  const slug = resource.replace('.md', '');
  
  console.log(`\n--- Checking: ${slug} ---`);
  
  const enContent = fs.readFileSync(path.join(contentDir, resource), 'utf8');
  
  for (const [locale, dataFile] of Object.entries(localeData)) {
    const dataPath = path.join(dataDir, dataFile);
    if (!fs.existsSync(dataPath)) {
      inconsistencies.push({
        url: `/${locale}/resources/${slug}`,
        module: 'resource-body',
        issue: 'Data file missing',
        severity: 'high'
      });
      console.log(`  ${locale}: ❌ Data file missing`);
      continue;
    }
    
    const localeContent = fs.readFileSync(dataPath, 'utf8');
    
    const slugPattern = new RegExp("['\"]" + slug + "['\"]\\s*:");
    if (!slugPattern.test(localeContent)) {
      inconsistencies.push({
        url: `/${locale}/resources/${slug}`,
        module: 'resource-body',
        issue: 'Slug not found in locale data',
        severity: 'high'
      });
      console.log(`  ${locale}: ❌ Slug not found`);
    } else {
      console.log(`  ${locale}: ✅ Slug found`);
      
      const startIdx = localeContent.indexOf(`"${slug}"`) + slug.length + 3;
      const colonIdx = localeContent.indexOf(':', startIdx);
      const backtickIdx = localeContent.indexOf('`', colonIdx);
      
      if (backtickIdx !== -1) {
        let depth = 1;
        let endIdx = backtickIdx + 1;
        while (endIdx < localeContent.length && depth > 0) {
          if (localeContent[endIdx] === '`') {
            if (localeContent[endIdx - 1] !== '\\') {
              depth--;
            }
          }
          endIdx++;
        }
        
        const localeBody = localeContent.substring(backtickIdx + 1, endIdx - 1);
        const enWordCount = enContent.split(/\s+/).length;
        const localeWordCount = localeBody.split(/\s+/).length;
        const ratio = localeWordCount / enWordCount;
        
        if (ratio < 0.3 || ratio > 3) {
          inconsistencies.push({
            url: `/${locale}/resources/${slug}`,
            module: 'resource-body',
            issue: `Content length mismatch (ratio: ${ratio.toFixed(2)}, en: ${enWordCount}, ${locale}: ${localeWordCount})`,
            severity: 'medium'
          });
          console.log(`  ${locale}: ⚠️ Length ratio ${ratio.toFixed(2)}`);
        } else {
          console.log(`  ${locale}: ✅ Length ratio ${ratio.toFixed(2)}`);
        }
      }
    }
  }
}

console.log('\n=== Summary of Inconsistencies ===');
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

fs.writeFileSync(path.join(__dirname, '../reports/inconsistencies-report.csv'), csvContent);
console.log('\n✅ Report saved to reports/inconsistencies-report.csv');
