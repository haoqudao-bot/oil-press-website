// Fix oilseed-pre-press: it's a PRE-TREATMENT CRUSHER, NOT an oil extractor
// All "35-40% first pass extraction" claims are WRONG per Zhao Xin confirmation.
const fs = require('fs');
const path = require('path');

const ROOT = 'd:\\Users\\YYJ\\Documents\\Trae';

// ── 1. Fix main product markdown ──
const mainMd = path.join(ROOT, 'src/content/products/oilseed-pre-press.md');
let md = fs.readFileSync(mainMd, 'utf8');

md = md
  // seoTitle — EN
  .replace(
    /en: Oilseed Screw Pre-Press — 35-40% First Pass Extraction/,
    'en: Oilseed Screw Pre-Press — Seed Preparation Before Hydraulic Pressing'
  )
  // seoTitle — FR
  .replace(
    /fr: Pré-presse à vis oléagineuse — extraction 35-40 % au premier passage/,
    'fr: Pré-presse à vis oléagineuse — préparation des graines avant pressage hydraulique'
  )
  // seoTitle — AR
  .replace(
    /ar: مكبس لولبي لعصر الدهن — مكبس زيت أولي لاستخراج 35-40% في المرحلة الأولى/,
    'ar: مكبس لولبي للبذور الزيتية — تحضير البذور قبل الضغط الهيدروليكي'
  )
  // seoTitle — ID
  .replace(
    /id: Pre-press biji minyak ulir — ekstraksi 35-40% tahap pertama/,
    'id: Pre-press biji minyak ulir — persiapan biji sebelum pengepresan hidrolik'
  )
  // description — EN
  .replace(
    /en: "Screw oilseed pre-press that removes 35–40% of oil in a first pass and raises total plant yield by 3–5%. 7\.5 kW \(500 kg\/h\) or 11 kW \(750 kg\/h\), ready for mustard, rapeseed and groundnut lines\."/,
    'en: "Screw oilseed pre-press that crushes seeds into flakes and raises total plant oil yield by 3–5% before the main hydraulic press. 7.5 kW (500 kg/h) or 11 kW (750 kg/h), ready for mustard, rapeseed and groundnut lines."'
  )
  // description — FR
  .replace(
    /fr: "Pré-presse à vis qui extrait 35–40 % de l'huile en premier passage et augmente le rendement global de 3–5 %. 7,5 kW \(500 kg\/h\) ou 11 kW \(750 kg\/h\)\."/,
    'fr: "Pré-presse à vis qui écrase les graines en flocons et augmente le rendement global en huile de 3–5 % avant la presse hydraulique principale. 7,5 kW (500 kg/h) ou 11 kW (750 kg/h)."'
  )
  // description — AR
  .replace(
    /ar: "مكبس بذور زيت لولبي يستخرج 35–40% من الزيت في المرحلة الأولى ويزيد إنتاج المصنع بنسبة 3–5%. 7\.5 كيلوواط \(500 كجم\/ساعة\) أو 11 كيلوواط \(750 كجم\/ساعة\)\."/,
    'ar: "مكبس بذور زيت لولبي يهش البذور إلى رقائق ويزيد إنتاج المصنع الإجمالي للزيت بنسبة 3–5% قبل المكبس الهيدروليكي الرئيسي. 7.5 كيلوواط (500 كجم/ساعة) أو 11 كيلوواط (750 كجم/ساعة)."'
  )
  // description — ID
  .replace(
    /id: "Pre-press biji minyak ulir yang mengambil 35–40% minyak pada tahap pertama dan menaikkan hasil total 3–5%. 7,5 kW \(500 kg\/jam\) atau 11 kW \(750 kg\/jam\)\."/,
    'id: "Pre-press biji minyak ulir yang menghancurkan biji menjadi serpihan dan menaikkan hasil minyak total pabrik sebesar 3–5% sebelum press hidrolik utama. 7,5 kW (500 kg/jam) atau 11 kW (750 kg/jam)."'
  )
  // specs EN: replace "Pre-Pass Oil Output" with proper spec
  .replace(
    /  - name: Pre-Pass Oil Output\n    value: 35–40% of seed oil/,
    '  - name: Crushing Action\n    value: Flakes seed, cracks oil cells — no oil output itself'
  )
  // specs FR
  .replace(
    /  - name: Huile extraite au premier passage\n    value: 35–40 % de l'huile de la graine/,
    '  - name: Action de broyage\n    value: Floconne la graine, fissure les cellules oléagineuses — ne produit pas d\'huile elle-même'
  )
  // specs AR
  .replace(
    /  - name: "الزيت المستخرج بالمرحلة الأولى"\n    value: "35–40% من زيت البذرة"/,
    '  - name: "عملية التكسير"\n    value: "تحول البذور إلى رقائق، تكسر الخلايا الزيتية — لا ينتج زيتاً بحد ذاته"'
  )
  // specs ID
  .replace(
    /  - name: Minyak Tahap Pertama\n    value: 35–40% dari minyak biji/,
    '  - name: Aksi Penghancuran\n    value: Menghancurkan biji menjadi serpihan, memecah sel minyak — tidak menghasilkan minyak sendiri'
  )
  // FAQ EN answer
  .replace(
    /answer: The HN-CG60 is a screw expeller placed before the roasting and hydraulic pressing stages\. It crushes and roll-presses the seed, releasing roughly 35–40% of the oil in a first pass, so the downstream hydraulic press finishes faster and the plant's overall oil yield rises by 3–5%\./,
    'answer: The HN-CG60 is a screw crusher placed before the roasting and hydraulic pressing stages. It crushes and roll-presses the seed into flakes, cracking the oil cells and enlarging surface area. This prepares the seed so the downstream hydraulic press extracts oil faster and the plant\'s overall oil yield rises by 3–5%. The pre-press itself does not produce oil — that is done by the hydraulic press.'
  )
  // FAQ FR answer
  .replace(
    /answer: La HN-CG60 est une expulseuse à vis placée avant les étapes de torréfaction et de pressage hydraulique\. Elle écrase et pré-presse la graine, libérant environ 35–40 % de l'huile dès le premier passage, ce qui accélère la presse hydraulique en aval et augmente le rendement global de 3–5 %\./,
    'answer: La HN-CG60 est un broyeur à vis placé avant les étapes de torréfaction et de pressage hydraulique. Il écrase et lamelle la graine en flocons, fissurant les cellules oléagineuses et augmentant la surface disponible. Cela prépare la graine pour que la presse hydraulique en aval extraie l\'huile plus vite et augmente le rendement global de 3–5 %. La pré-presse elle-même ne produit pas d\'huile — c\'est la presse hydraulique qui l\'extrait.'
  )
  // FAQ AR answer
  .replace(
    /answer: "إن HN-CG60 عبارة عن مكبس لولبي يوضع قبل مراحل التحميص والضغط الهيدروليكي\. يهش ويعصر البذور مسبقاً، مطلقاً حوالي 35–40% من الزيت في المرحلة الأولى، مما يسرع المكبس الهيدروليكي اللاحق ويزيد إنتاج المصنع الإجمالي للزيت بنسبة 3–5%\."/,
    'answer: "إن HN-CG60 عبارة عن مكبس لولبي يوضع قبل مراحل التحميص والضغط الهيدروليكي. يهش ويسحق البذور إلى رقائق، يكسر الخلايا الزيتية ويزيد المساحة السطحية. هذا يحضر البذور بحيث يستخرج المكبس الهيدروليكي اللاحق الزيت بشكل أسرع ويزيد إنتاج المصنع الإجمالي بنسبة 3–5%. المكبس المسبق لا ينتج زيتاً بحد ذاته — بل المكبس الهيدروليكي هو من يقوم بالاستخراج."'
  )
  // FAQ ID answer
  .replace(
    /answer: HN-CG60 adalah expeller ulir yang ditempatkan sebelum tahap sangrai dan pengepresan hidrolik\. Mesin menghancurkan dan mempress biji, melepaskan sekitar 35–40% minyak pada tahap pertama, sehingga press hidrolik di hilir bekerja lebih cepat dan hasil minyak total pabrik naik 3–5%\./,
    'answer: HN-CG60 adalah crusher ulir yang ditempatkan sebelum tahap sangrai dan pengepresan hidrolik. Mesin menghancurkan biji menjadi serpihan, memecah sel minyak dan memperluas luas permukaan. Ini mempersiapkan biji agar press hidrolik di hilir mengekstraksi minyak lebih cepat dan hasil minyak total pabrik naik 3–5%. Pre-press ini sendiri tidak menghasilkan minyak — ekstraksi dilakukan oleh press hidrolik.'
  )
  // Overview paragraph EN
  .replace(
    /The HN-CG60 oilseed pre-press is a screw expeller installed at the front of an oil line, before roasting and hydraulic pressing\. It crushes the seed and rolls it into flakes or a rough cake, cracking the oil cells and enlarging the heated surface area\. Around 35–40% of the oil is released in this first pass, and the pre-pressed material then moves on to roasting and the main hydraulic press\. Mills that add this stage typically see their total oil yield rise by 3–5%\./,
    'The HN-CG60 oilseed pre-press is a screw crusher installed at the front of an oil line, before roasting and hydraulic pressing. It crushes the seed and rolls it into flakes or a rough cake, cracking the oil cells and enlarging the heated surface area. **The pre-press itself does not produce oil** — it only prepares the seed for the downstream press. The pre-pressed material then moves on to roasting and the main hydraulic press, which extracts the oil. Mills that add this pre-treatment stage typically see their total oil yield rise by 3–5%.'
  )
  // Key Advantages first bullet
  .replace(
    /- \*\*Higher total yield\*\* — removes 35–40% of the oil before the main press, raising overall plant output by 3–5%/,
    '- **Higher total yield** — flaking and pre-treatment raise downstream hydraulic press efficiency, boosting overall plant output by 3–5%'
  )
  // Applications second bullet (mentioned "first pass captures most of the free oil")
  .replace(
    /- \*\*Groundnut\*\* — high-oil kernel where the first pass captures most of the free oil/,
    '- **Groundnut** — high-oil kernel where flaking helps the downstream press reach more oil cells'
  );

fs.writeFileSync(mainMd, md, 'utf8');
console.log('✅ Fixed oilseed-pre-press.md');

// ── 2. Fix multilingual product body data files ──
const fixFile = (filePath, replacements) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = 0;
  for (const [pattern, repl] of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, repl);
      changed++;
    }
  }
  if (changed > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${path.basename(filePath)} (${changed} replacements)`);
  } else {
    console.log(`⏭️  No changes in ${path.basename(filePath)}`);
  }
};

// Indonesian
fixFile(
  path.join(ROOT, 'src/data/id-product-bodies-3.ts'),
  [
    [/Pre-press biji minyak HN-CG60 adalah expeller ulir yang dipasang di awal lini, sebelum sangrai dan pengepresan hidrolik\. Mesin menghancurkan biji dan menggulingkannya menjadi serpihan atau bungkil kasar, memecah sel minyak dan memperluas area yang dipanaskan\. Sekitar 35 hingga 40% minyak dilepaskan pada tahap pertama ini, lalu bahan yang sudah dipress dipindahkan ke sangrai dan press hidrolik utama\. Pabrik yang menambahkan tahap ini biasanya melihat hasil minyak total naik 3 hingga 5%\./,
     'Pre-press biji minyak HN-CG60 adalah crusher ulir yang dipasang di awal lini, sebelum sangrai dan pengepresan hidrolik. Mesin menghancurkan biji dan menggulingkannya menjadi serpihan atau bungkil kasar, memecah sel minyak dan memperluas area yang dipanaskan. **Pre-press ini sendiri tidak menghasilkan minyak** — hanya mempersiapkan biji untuk press hilir. Bahan yang sudah dihancurkan lalu dipindahkan ke sangrai dan press hidrolik utama yang mengekstraksi minyak. Pabrik yang menambahkan tahap perlakuan awal ini biasanya melihat hasil minyak total naik 3 hingga 5%.'],
    [/Tata letak dua tahap ini — pre-press ulir lalu finishing hidrolik — adalah konfigurasi standar untuk mustard, lobak, dan kacang tanah di India, Asia Tenggara, dan Afrika\./,
     'Tata letak dua tahap ini — pre-press ulir (penghancuran) lalu finishing hidrolik (ekstraksi minyak) — adalah konfigurasi standar untuk mustard, lobak, dan kacang tanah di India, Asia Tenggara, dan Afrika.'],
    [/Biji masuk ke corong dan didorong ulir melalui ruang pengepresan, di mana biji dihancurkan, digosok, dan dipress menjadi serpihan\. Kerucut di keluaran mengatur celah, memberi kendali atas ketebalan serpihan dan kekencangan pre-press\./,
     'Biji masuk ke corong dan didorong ulir melalui ruang penghancuran, di mana biji dihancurkan, digosok, dan digiling menjadi serpihan. Kerucut di keluaran mengatur celah, memberi kendali atas ketebalan serpihan dan tingkat penghancuran.'],
  ]
);

// Arabic
fixFile(
  path.join(ROOT, 'src/data/ar-product-bodies-3.ts'),
  [
    [/مكبس بذور زيت مسبق HN-CG60 هو مكبس لولبي مثبت في مقدمة الخط، قبل التحميص والضغط الهيدروليكي\. يهش البذور ويلفّها إلى رقائق أو كعكة خشنة، مكسّراً الخلايا الزيتية وموسعاً مساحة السطح المسخنة\. يتم تحرير حوالي 35 إلى 40% من الزيت في هذه المرحلة الأولى، ثم تنتقل المواد المضغوطة مسبقاً إلى التحميص والمكبس الهيدروليكي الرئيسي\. المصانع التي تضيف هذه المرحلة عادة ما ترى زيادة إجمالي إنتاج الزيت بنسبة 3 إلى 5%\./,
     'مكبس بذور زيت مسبق HN-CG60 هو مكبس لولبي مثبت في مقدمة الخط، قبل التحميص والضغط الهيدروليكي. يهش البذور ويلفّها إلى رقائق أو كعكة خشنة، مكسّراً الخلايا الزيتية وموسعاً مساحة السطح المسخنة. **المكبس المسبق لا ينتج زيتاً بحد ذاته** — بل يحضر البذور فقط للمكبس اللاحق. تنتقل المواد المسحوقة مسبقاً إلى التحميص والمكبس الهيدروليكي الرئيسي الذي يقوم بالاستخراج. المصانع التي تضيف هذه المرحلة عادة ما ترى زيادة إجمالي إنتاج الزيت بنسبة 3 إلى 5%.'],
    [/يستخرج 35 إلى 40% من الزيت قبل المكبس الرئيسي/,
     'يزيد كفاءة المكبس الهيدروليكي اللاحق عن طريق تفتيت البذور'],
  ]
);

// French
fixFile(
  path.join(ROOT, 'src/data/fr-product-bodies-3.ts'),
  [
    [/La pré-presse à vis oléagineuse HN-CG60 est une expulseuse installée à l'avant d'une ligne d'huile, avant la torréfaction et le pressage hydraulique\. Elle écrase la graine et la roule en flocons ou en gâteau grossier, fissurant les cellules oléagineuses et augmentant la surface chauffée\. Environ 35 à 40 % de l'huile est libéré dans ce premier passage, puis le matériau pré-pressé passe à la torréfaction et à la presse hydraulique principale\. Les usines qui ajoutent cette étape voient généralement leur rendement total en huile augmenter de 3 à 5 %\./,
     'La pré-presse à vis oléagineuse HN-CG60 est un broyeur installé à l\'avant d\'une ligne d\'huile, avant la torréfaction et le pressage hydraulique. Elle écrase la graine et la roule en flocons ou en gâteau grossier, fissurant les cellules oléagineuses et augmentant la surface chauffée. **La pré-presse ne produit pas d\'huile elle-même** — elle prépare seulement la graine pour la presse en aval. Le matériau broyé passe à la torréfaction et à la presse hydraulique principale qui extrait l\'huile. Les usines qui ajoutent cette étape voient généralement leur rendement total en huile augmenter de 3 à 5 %.'],
    [/extrait 35 à 40 % de l'huile avant la presse principale/,
     'améliore l\'efficacité de la presse hydraulique en aval grâce au floconnage'],
  ]
);

console.log('\n✅ All oilseed-pre-press "35-40% extraction" claims fixed across all files');
