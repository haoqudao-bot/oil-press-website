// Fix multi-language HN300 body text — remove entry-level / budget / "previous gen" language
// Run in d:\Users\YYJ\Documents\Trae
const fs = require('fs');
const path = require('path');

const dir = 'src/data';

const fixes = [
  // === French ===
  // Remove "La plupart des acheteurs choisissent aujourd'hui la HN325" + "budget le plus serré" ref
  { file: 'fr-product-bodies-1.ts', find: /\*\*Vous cherchez le modèle actuel \?\*\*.*?reprenant un devis antérieur\./s, replace: `> La HN300 est le choix adapté pour les opérations qui ont besoin d'une presse de 300 tonnes dans un format compact. Elle partage la conception hydraulique et les pièces d'usure courantes de la HN325, donc les pièces de rechange restent facilement disponibles — et le fût Ø390 traite la même gamme de graines : sésame, arachide, colza, tournesol.` },
  // "génération précédente" / "modèle actuel" → just HN300 / HN325
  { file: 'fr-product-bodies-1.ts', find: /\| Paramètre \| HN300 \(génération précédente\) \| HN325 \(modèle actuel\) \|/, replace: '| Paramètre | HN300 | HN325 |' },
  // "modèle d'entrée de gamme" → "modèle compact 300 tonnes"
  { file: 'fr-product-bodies-1.ts', find: /le modèle d'entrée de gamme/, replace: 'le modèle compact 300 tonnes' },
  // "Budget plus serré ?" → positive
  { file: 'fr-product-bodies-1.ts', find: /\*\*Budget plus serré \?\*\*.*?volume quotidien\./s, replace: `**Vous cherchez une presse 300 tonnes ?** La HN300 reste en production et reprend la conception hydraulique et les pièces d'usure courantes de la HN325. Son fût Ø300 plus petit contient environ 55–60 kg par lot et presse à environ 42 MPa de pression sur tourteau — une presse compacte pour des volumes quotidiens plus petits.` },
  // Model-comparison row: "budget le plus serré"
  { file: 'fr-product-bodies-1.ts', find: /Lots plus petits \(~60 kg\), budget le plus serré/, replace: 'Lots compacts (~60 kg), format réduit' },

  // === Arabic ===
  { file: 'ar-product-bodies-1.ts', find: /\*\*هل تبحث عن الطراز الحالي\?\*\*.*?عرض سابق\./s, replace: `> HN300 هو الخيار المناسب للعمليات التي تحتاج إلى مكبس 300 طن في تنسيق مدمج. يشترك في التصميم الهيدروليكي وقطع الغيار الشائعة مع HN325، لذا قطع الغيار تظل متاحة بسهولة — وأسطوانة العصر Ø390 تعالج نفس مجموعة البذور : السمسم، الفول السوداني، الكانولا، عباد الشمس.` },
  { file: 'ar-product-bodies-1.ts', find: /\| المعامل \| HN300 \(الجيل السابق\) \| HN325 \(الطراز الحالي\) \|/, replace: '| المعامل | HN300 | HN325 |' },
  { file: 'ar-product-bodies-1.ts', find: /\*\*ميزانية أضيق\?\*\*.*?دفعات يومية أصغر\./s, replace: `**تبحث عن مكبس 300 طن؟** لا تزال HN300 في الإنتاج وتشارك HN325 التصميم الهيدروليكي وقطع الغيار الشائعة. أسطوانة عصرها الأصغر Ø300 يتسع لنحو 55–60 كجم في الدفعة ويضغط عند ضغط كسب نحو 42 ميجاباسكال — مكبس مدمج لدفعات يومية أصغر.` },
  { file: 'ar-product-bodies-1.ts', find: /دفعات أصغر \(~60 كجم\)، أضيق ميزانية/, replace: 'دفعات مدمجة (~60 كجم)، تنسيق مدمج' },

  // === Indonesian ===
  { file: 'id-product-bodies-1.ts', find: /\*\*Mencari model terbaru\?\*\*.*?penawaran sebelumnya\./s, replace: `> HN300 adalah pilihan yang tepat untuk operasi yang membutuhkan press 300 ton dalam format ringkas. Ia berbagi desain hidrolik dan suku cadang umum dengan HN325, jadi suku cadang tetap tersedia — dan tabung press Ø390 menangani rentang biji yang sama : wijen, kacang tanah, rapeseed, bunga matahari.` },
  { file: 'id-product-bodies-1.ts', find: /\| Parameter \| HN300 \(Generasi Sebelumnya\) \| HN325 \(Model Terbaru\) \|/, replace: '| Parameter | HN300 | HN325 |' },
  { file: 'id-product-bodies-1.ts', find: /\*\*Anggaran lebih ketat\?\*\*.*?batch harian lebih kecil\./s, replace: `**Mencari press 300 ton?** HN300 masih diproduksi dan berbagi desain hidrolik serta suku cadang umum dengan HN325. Tabung press Ø300-nya yang lebih kecil menampung sekitar 55–60 kg per batch dan menekan pada tekanan bungkil sekitar 42 MPa — press ringkas untuk batch harian lebih kecil.` },
  { file: 'id-product-bodies-1.ts', find: /Batch lebih kecil \(~60 kg\), anggaran paling ketat/, replace: 'Batch ringkas (~60 kg), format ringkas' },
];

let changed = 0;
for (const fix of fixes) {
  const fp = path.join(dir, fix.file);
  let content = fs.readFileSync(fp, 'utf8');
  const original = content;
  content = content.replace(fix.find, fix.replace);
  if (content !== original) {
    fs.writeFileSync(fp, content, 'utf8');
    console.log(`✅ ${fix.file}: replaced "${fix.find.toString().slice(0, 40)}..."`);
    changed++;
  } else {
    console.log(`❌ ${fix.file}: pattern not found`);
  }
}
console.log(`\nTotal changes: ${changed}`);
