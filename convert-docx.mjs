import mammoth from 'mammoth';
import fs from 'fs';

const docxPath = 'E:\\液压榨油机\\最新产品介绍2025\\产品大全-浩诺机械-2025.11.docx';

mammoth.convertToHtml({ path: docxPath }).then(result => {
  fs.writeFileSync('d:\\Users\\YYJ\\Documents\\Trae\\doc-output.html', result.value);
  console.log('HTML saved. Messages:', result.messages.length);
  if (result.messages.length > 0) {
    result.messages.forEach(m => console.log(m.type, m.message));
  }
}).catch(err => {
  console.error('Error:', err.message);
});
