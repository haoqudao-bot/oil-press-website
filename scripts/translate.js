/**
 * Translation script using Google Translate (free endpoint)
 * Usage: node scripts/translate.js [target-language]
 * Example: node scripts/translate.js fr
 * 
 * This script:
 * 1. Reads src/i18n/en.json as the source
 * 2. Compares with the target language file (e.g. fr.json)
 * 3. Translates missing/outdated keys using Google Translate
 * 4. Writes the updated translation file
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Language codes mapping (ISO 639-1)
const LANG_MAP = {
  fr: 'fr',
  ar: 'ar', 
  id: 'id',
};

// Get target language from command line
const targetLang = process.argv[2];
if (!targetLang || !LANG_MAP[targetLang]) {
  console.error('Usage: node scripts/translate.js [fr|ar|id]');
  process.exit(1);
}

const googleLangCode = LANG_MAP[targetLang];

/**
 * Translate text using Google Translate free endpoint
 * Uses the translate.google.com endpoint (no API key needed)
 */
async function translateText(text, targetLang) {
  // Skip if text is empty or just numbers/symbols
  if (!text || text.trim().length === 0) return text;
  
  // Don't translate product codes, URLs, emails, phone numbers
  if (/^[\d\s+\-()]+$/.test(text)) return text; // phone numbers
  if (/^[\w.-]+@[\w.-]+$/.test(text)) return text; // emails
  if (/^https?:\/\//.test(text)) return text; // URLs
  if (/^HN\d{3}/.test(text)) return text; // product codes
  
  const encodedText = encodeURIComponent(text);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodedText}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });
    
    if (!response.ok) {
      console.error(`  HTTP ${response.status} for: "${text.substring(0, 50)}..."`);
      return text; // Return original on error
    }
    
    const data = await response.json();
    
    // Google Translate returns array of arrays
    // [[translated_text, original_text, ...], ...]
    let translated = '';
    if (data && data[0]) {
      for (const part of data[0]) {
        if (part[0]) {
          translated += part[0];
        }
      }
    }
    
    return translated || text;
  } catch (error) {
    console.error(`  Translation error for: "${text.substring(0, 50)}...": ${error.message}`);
    return text; // Return original on error
  }
}

/**
 * Recursively translate all values in an object
 */
async function translateObject(sourceObj, existingObj, targetLang, path = '') {
  const result = {};
  let translatedCount = 0;
  let skippedCount = 0;
  let keptCount = 0;
  
  for (const [key, value] of Object.entries(sourceObj)) {
    const currentPath = path ? `${path}.${key}` : key;
    
    if (typeof value === 'string') {
      // Check if existing translation exists and is not outdated
      const existingValue = existingObj?.[key];
      
      if (existingValue && existingValue !== value && !needsRetranslation(value, existingValue)) {
        // Keep existing translation if it looks valid
        result[key] = existingValue;
        keptCount++;
      } else if (existingValue && existingValue !== value && needsRetranslation(value, existingValue)) {
        // Source changed, re-translate
        console.log(`  🔄 Re-translating [${currentPath}]: "${value.substring(0, 40)}..."`);
        result[key] = await translateText(value, targetLang);
        translatedCount++;
        // Rate limiting
        await sleep(200);
      } else if (!existingValue) {
        // New key, translate
        console.log(`  ✨ Translating [${currentPath}]: "${value.substring(0, 40)}..."`);
        result[key] = await translateText(value, targetLang);
        translatedCount++;
        // Rate limiting
        await sleep(200);
      } else {
        // Same value, keep existing translation
        result[key] = existingValue;
        keptCount++;
      }
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Recurse into nested objects
      const [translated, stats] = await translateObject(value, existingObj?.[key], targetLang, currentPath);
      result[key] = translated;
      translatedCount += stats.translated;
      skippedCount += stats.skipped;
      keptCount += stats.kept;
    } else {
      // Non-string, non-object values (numbers, booleans, arrays)
      result[key] = value;
      skippedCount++;
    }
  }
  
  return [result, { translated: translatedCount, skipped: skippedCount, kept: keptCount }];
}

/**
 * Check if existing translation needs to be re-done
 * Returns true if the source English text changed significantly
 */
function needsRetranslation(sourceEn, existingTranslation) {
  // If the existing translation is exactly the same as the source, 
  // it was never translated
  if (sourceEn === existingTranslation) return true;
  
  // If existing translation is very different from source length-wise,
  // it's likely already translated
  return false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main
async function main() {
  console.log(`\n🌍 Translating en → ${targetLang} using Google Translate\n`);
  console.log('=' .repeat(60));
  
  // Read source (English)
  const enPath = join(ROOT, 'src', 'i18n', 'en.json');
  const enData = JSON.parse(readFileSync(enPath, 'utf-8'));
  
  // Read existing target language file (if exists)
  const targetPath = join(ROOT, 'src', 'i18n', `${targetLang}.json`);
  let existingData = {};
  if (existsSync(targetPath)) {
    existingData = JSON.parse(readFileSync(targetPath, 'utf-8'));
    console.log(`📖 Found existing ${targetLang}.json with ${Object.keys(existingData).length} top-level keys`);
  }
  
  // Translate
  console.log('\n🔄 Starting translation...\n');
  const [translatedData, stats] = await translateObject(enData, existingData, googleLangCode);
  
  console.log('\n' + '='.repeat(60));
  console.log(`\n✅ Translation complete!`);
  console.log(`   Translated: ${stats.translated} strings`);
  console.log(`   Kept existing: ${stats.kept} strings`);
  console.log(`   Skipped: ${stats.skipped} non-translatable items`);
  
  // Write output
  const output = JSON.stringify(translatedData, null, 2);
  writeFileSync(targetPath, output, 'utf-8');
  console.log(`\n💾 Written to: ${targetPath}\n`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
