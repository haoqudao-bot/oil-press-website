import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';

const docxPath = 'E:\\液压榨油机\\最新产品介绍2025\\产品大全-浩诺机械-2025.11.docx';

try {
  const zip = new AdmZip(docxPath);
  
  // Extract document.xml to see the text content
  const docXml = zip.getEntry('word/document.xml');
  if (docXml) {
    const content = docXml.getData().toString('utf-8');
    // Write to file for analysis
    fs.writeFileSync('d:\\Users\\YYJ\\Documents\\Trae\\doc-content.xml', content);
    console.log('Document XML saved to doc-content.xml');
    
    // Extract plain text by removing XML tags
    const plainText = content
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    fs.writeFileSync('d:\\Users\\YYJ\\Documents\\Trae\\doc-plain-text.txt', plainText);
    console.log('Plain text saved to doc-plain-text.txt');
  }
  
  // Also check the relationships file to understand image mapping
  const relsXml = zip.getEntry('word/_rels/document.xml.rels');
  if (relsXml) {
    const relsContent = relsXml.getData().toString('utf-8');
    fs.writeFileSync('d:\\Users\\YYJ\\Documents\\Trae\\doc-rels.xml', relsContent);
    console.log('Relationships XML saved to doc-rels.xml');
  }
} catch (err) {
  console.error('Failed:', err.message);
}
