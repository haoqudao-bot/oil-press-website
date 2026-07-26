import fs from 'fs';
import path from 'path';

const en = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '../src/i18n/en.json'), 'utf8'));
const fr = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '../src/i18n/fr.json'), 'utf8'));
const ar = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '../src/i18n/ar.json'), 'utf8'));
const id = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '../src/i18n/id.json'), 'utf8'));

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const enKeys = new Set(getKeys(en));
const frKeys = new Set(getKeys(fr));
const arKeys = new Set(getKeys(ar));
const idKeys = new Set(getKeys(id));

console.log('=== i18n Key Comparison ===');
console.log('English keys:', enKeys.size);
console.log('French keys:', frKeys.size);
console.log('Arabic keys:', arKeys.size);
console.log('Indonesian keys:', idKeys.size);

console.log('\n=== Missing keys in French ===');
const frMissing = [...enKeys].filter(k => !frKeys.has(k));
frMissing.forEach(k => console.log('  ' + k));

console.log('\n=== Missing keys in Arabic ===');
const arMissing = [...enKeys].filter(k => !arKeys.has(k));
arMissing.forEach(k => console.log('  ' + k));

console.log('\n=== Missing keys in Indonesian ===');
const idMissing = [...enKeys].filter(k => !idKeys.has(k));
idMissing.forEach(k => console.log('  ' + k));

console.log('\n=== Extra keys in French ===');
const frExtra = [...frKeys].filter(k => !enKeys.has(k));
frExtra.forEach(k => console.log('  ' + k));

console.log('\n=== Extra keys in Arabic ===');
const arExtra = [...arKeys].filter(k => !enKeys.has(k));
arExtra.forEach(k => console.log('  ' + k));

console.log('\n=== Extra keys in Indonesian ===');
const idExtra = [...idKeys].filter(k => !enKeys.has(k));
idExtra.forEach(k => console.log('  ' + k));

console.log('\n=== Empty values check ===');
function checkEmpty(obj, prefix = '') {
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      checkEmpty(obj[key], fullKey);
    } else if (obj[key] === '' || obj[key] === undefined || obj[key] === null) {
      console.log(`  Empty value: ${fullKey}`);
    }
  }
}

console.log('\n--- French empty values ---');
checkEmpty(fr);
console.log('\n--- Arabic empty values ---');
checkEmpty(ar);
console.log('\n--- Indonesian empty values ---');
checkEmpty(id);
