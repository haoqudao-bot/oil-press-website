import fs from 'fs';
import path from 'path';

const imgDir = 'd:\\Users\\YYJ\\Documents\\Trae\\public\\images\\products';

// Mapping: original image → product slug
const mapping = {
  'image1.jpeg': 'standard-hydraulic-oil-press',
  'image2.jpeg': 'heavy-duty-hydraulic-oil-press',
  'image3.jpeg': 'cold-press-hydraulic-oil-press',
  'image4.jpeg': 'ultra-high-pressure-hydraulic-oil-press',
  'image5.jpeg': 'sesame-oil-hydraulic-press',
  'image6.jpeg': 'coconut-oil-hydraulic-press',
  'image7.jpeg': 'large-barrel-hydraulic-oil-press',
  'image8.jpeg': 'edible-oil-refining-system',
  'image9.jpeg': 'pneumatic-oil-filter-press',
  'image10.jpeg': 'screw-pre-press-expeller',
  'image11.jpeg': 'high-speed-seed-crusher',
  'image12.jpeg': 'electric-seed-steamer',
  'image13.jpeg': 'wood-fired-seed-steamer',
  'image14.jpeg': 'thermal-oil-roasting-pan',
  'image15.jpeg': 'integrated-feeder-crusher-roaster',
};

// Rename images
for (const [orig, slug] of Object.entries(mapping)) {
  const origPath = path.join(imgDir, orig);
  const newPath = path.join(imgDir, `${slug}.jpeg`);
  
  if (fs.existsSync(origPath)) {
    fs.renameSync(origPath, newPath);
    console.log(`Renamed: ${orig} → ${slug}.jpeg`);
  } else {
    console.log(`Not found: ${orig}`);
  }
}

console.log('\nDone! Images renamed to match product slugs.');
