import fs from 'fs';

const html = fs.readFileSync('d:\\Users\\YYJ\\Documents\\Trae\\doc-output.html', 'utf-8');

// Split by img tags to find image-text pairs
const parts = html.split(/(<img[^>]*>)/);

let imgIndex = 0;
for (let i = 0; i < parts.length; i++) {
  const part = parts[i];
  if (part.startsWith('<img')) {
    imgIndex++;
    // Get the text before this image (from previous parts)
    let prevText = '';
    for (let j = Math.max(0, i - 3); j < i; j++) {
      prevText += parts[j].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
    }
    // Get the text after this image
    let nextText = '';
    for (let j = i + 1; j < Math.min(parts.length, i + 4); j++) {
      if (parts[j].startsWith('<img')) break;
      nextText += parts[j].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
    }
    
    // Extract src from img tag
    const srcMatch = part.match(/src="([^"]*)"/);
    const src = srcMatch ? srcMatch[1] : 'unknown';
    
    console.log(`\n=== Image ${imgIndex} ===`);
    console.log(`SRC: ${src.substring(0, 80)}...`);
    console.log(`PREV: ${prevText.substring(0, 100)}`);
    console.log(`NEXT: ${nextText.substring(0, 100)}`);
  }
}
