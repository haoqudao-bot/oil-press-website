import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const contentDir = path.join(__dirname, '../src/content/products');
const dataDir = path.join(__dirname, '../src/data');

const products = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

console.log('=== Product Content Consistency Check ===');
console.log(`Found ${products.length} English product files\n`);

const localeData = {
  fr: ['fr-product-bodies.ts', 'fr-product-bodies-a.ts', 'fr-product-bodies-1.ts', 'fr-product-bodies-2.ts', 'fr-product-bodies-3.ts'],
  ar: ['ar-product-bodies.ts', 'ar-product-bodies-1.ts', 'ar-product-bodies-2.ts', 'ar-product-bodies-3.ts'],
  id: ['id-product-bodies.ts', 'id-product-bodies-1.ts', 'id-product-bodies-2.ts', 'id-product-bodies-3.ts']
};

const inconsistencies = [];

for (const product of products) {
  const slug = product.replace('.md', '');
  
  console.log(`\n--- Checking: ${slug} ---`);
  
  for (const [locale, dataFiles] of Object.entries(localeData)) {
    let found = false;
    
    for (const dataFile of dataFiles) {
      const dataPath = path.join(dataDir, dataFile);
      if (!fs.existsSync(dataPath)) continue;
      
      const localeContent = fs.readFileSync(dataPath, 'utf8');
      const slugPattern = new RegExp("['\"]" + slug + "['\"]\\s*:");
      
      if (slugPattern.test(localeContent)) {
        found = true;
        break;
      }
    }
    
    if (!found) {
      inconsistencies.push({
        url: `/${locale}/products/${slug}`,
        module: 'product-body',
        issue: 'Slug not found in locale data',
        severity: 'high'
      });
      console.log(`  ${locale}: ❌ Slug not found`);
    } else {
      console.log(`  ${locale}: ✅ Slug found`);
    }
  }
}

const solutionsDir = path.join(__dirname, '../src/content/solutions');
const solutions = fs.readdirSync(solutionsDir).filter(f => f.endsWith('.md'));

console.log('\n\n=== Solution Content Consistency Check ===');
console.log(`Found ${solutions.length} English solution files\n`);

const solutionLocaleData = {
  fr: 'fr-solution-bodies.ts',
  ar: 'ar-solution-bodies.ts',
  id: 'id-solution-bodies.ts'
};

for (const solution of solutions) {
  const slug = solution.replace('.md', '');
  
  console.log(`\n--- Checking: ${slug} ---`);
  
  for (const [locale, dataFile] of Object.entries(solutionLocaleData)) {
    const dataPath = path.join(dataDir, dataFile);
    if (!fs.existsSync(dataPath)) {
      inconsistencies.push({
        url: `/${locale}/solutions/${slug}`,
        module: 'solution-body',
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
        url: `/${locale}/solutions/${slug}`,
        module: 'solution-body',
        issue: 'Slug not found in locale data',
        severity: 'high'
      });
      console.log(`  ${locale}: ❌ Slug not found`);
    } else {
      console.log(`  ${locale}: ✅ Slug found`);
    }
  }
}

console.log('\n=== Summary of Product/Solution Inconsistencies ===');
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

fs.writeFileSync(path.join(__dirname, '../reports/product-solution-report.csv'), csvContent);
console.log('\n✅ Report saved to reports/product-solution-report.csv');
