import fs from 'fs';
import path from 'path';

const translations = {
  coldPress: {
    title: 'Cold Press Oil Machine — Help Preserve Natural Quality | Haonuo',
    description: 'Professional cold press oil machine for premium oil extraction below 60°C. Can help retain more nutrients and flavor compared to hot pressing. Factory-direct from Haonuo. 1-year warranty.',
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Products',
    breadcrumbCurrent: 'Cold Press Oil Machine',
    heroTitle: 'Cold Press Oil Machine — Help Preserve Natural Quality',
    heroDesc: 'Professional cold press oil machines that extract premium oil below 60°C. Can help retain more nutrients, flavor, and aroma compared to hot pressing. Well-suited for coconut, sesame, walnut, and premium oils. Factory-direct from Haonuo.',
    requestQuote: 'Request a Quote',
    learnHow: 'Learn How Cold Press Works',
    whyColdPress: 'Why Cold Press Matters',
    nutrientPreservation: {
      title: 'Nutrient Preservation',
      desc: 'Cold pressing below 60°C helps retain vitamins, antioxidants, and essential fatty acids that may be lost in hot pressing. Your customers get premium quality cold-pressed oil.'
    },
    naturalFlavor: {
      title: 'Natural Flavor & Aroma',
      desc: 'No heating means the oil keeps its original taste — critical for premium and organic markets. Sesame stays nutty, coconut stays fragrant, walnut stays rich.'
    },
    higherMarketValue: {
      title: 'Higher Market Value',
      desc: 'Cold-pressed oils command 30-80% premium over refined/hot-pressed oils. Higher quality translates directly to higher profit margins for your business.'
    },
    versatileApplications: {
      title: 'Versatile Applications',
      desc: 'From VCO (Virgin Coconut Oil) to cold-pressed sesame oil for pharmaceutical and cosmetic industries. One machine opens doors to multiple premium markets.'
    },
    productsTitle: 'Our Cold Press Oil Machine Series',
    comparisonTitle: 'Cold Press vs Hot Press Comparison',
    comparisonFeature: 'Feature',
    comparisonColdPress: 'Cold Press',
    comparisonHotPress: 'Hot Press',
    comparisonTemp: 'Temperature',
    comparisonTempCold: 'Below 60°C',
    comparisonTempHot: '120-180°C',
    comparisonNutrient: 'Nutrient Retention',
    comparisonNutrientCold: 'Generally high (varies by seed type)',
    comparisonNutrientHot: 'Low (40-60%)',
    comparisonYield: 'Oil Yield',
    comparisonYieldCold: 'Standard',
    comparisonYieldHot: 'Higher',
    comparisonQuality: 'Oil Quality',
    comparisonQualityCold: 'Premium, unrefined',
    comparisonQualityHot: 'Requires refining',
    comparisonFlavor: 'Flavor/Aroma',
    comparisonFlavorCold: 'Natural, rich',
    comparisonFlavorHot: 'Neutral',
    comparisonPrice: 'Market Price',
    comparisonPriceCold: 'Typically premium (varies significantly by market and oil type)',
    comparisonPriceHot: 'Standard',
    comparisonBestFor: 'Best For',
    comparisonBestForCold: 'Premium/organic oils',
    comparisonBestForHot: 'Bulk cooking oil',
    readFullComparison: 'Read the full Cold Press vs Hot Press comparison',
    popularOilsTitle: 'Popular Cold-Pressed Oils',
    vco: {
      title: 'Virgin Coconut Oil (VCO)',
      region: 'Philippines / Indonesia',
      desc: 'Premium cooking & cosmetic applications',
      yield: 'Yield: 55-65%',
      tag: 'High Demand'
    },
    sesameOil: {
      title: 'Cold-Pressed Sesame Oil',
      region: 'Middle East / Asia',
      desc: 'Traditional cooking & health supplements',
      yield: 'Yield: 42-50%',
      tag: 'Premium Price'
    },
    avocadoOil: {
      title: 'Avocado Oil',
      region: 'Global demand',
      desc: 'Cosmetic & premium cooking',
      yield: 'Yield: 15-25%',
      tag: 'Fast Growing'
    },
    oliveOil: {
      title: 'Cold-Pressed Olive Oil',
      region: 'Mediterranean',
      desc: 'Premium food market',
      yield: 'Yield: 15-25%',
      tag: 'Established Market'
    },
    walnutOil: {
      title: 'Walnut Oil',
      region: 'Europe / Asia',
      desc: 'Gourmet cooking & supplements',
      yield: 'Yield: 50-60%',
      tag: 'Ultra Premium'
    },
    sunflowerOil: {
      title: 'Cold-Pressed Sunflower Oil',
      region: 'Eastern Europe / Africa',
      desc: 'Health-conscious market',
      yield: 'Yield: 35-45%',
      tag: 'High Volume'
    },
    howWorksTitle: 'How Cold Press Extraction Works',
    howWorksStep1: {
      title: 'Prepare Seeds',
      desc: 'Clean, dry, and optionally dehull the oil seeds. Proper preparation ensures maximum oil yield and clean, sediment-free oil output.'
    },
    howWorksStep2: {
      title: 'Cold Press at Low Temperature',
      desc: 'Hydraulic pressure extracts oil below 60°C. The intense mechanical pressure does the work — no heating or chemicals needed. Nutrients and flavor stay intact.'
    },
    howWorksStep3: {
      title: 'Filter & Package',
      desc: 'Natural sediment filtration, no chemical processing needed. The result is pure, premium cold-pressed oil ready for bottling and market.'
    },
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is a cold press oil machine?',
        answer: 'A cold press oil machine extracts oil from seeds at temperatures below 60°C, helping retain the natural nutrients, flavor, and aroma of the oil. Unlike hot press methods that heat seeds to 120-180°C, cold pressing uses hydraulic pressure alone to extract oil, making it well-suited for producing premium, unrefined oils such as virgin coconut oil, cold-pressed sesame oil, and walnut oil. Haonuo\'s cold press oil machines deliver professional-grade extraction. Cold press yields are typically somewhat lower than hot pressing but produce higher-quality, premium-priced oils.'
      },
      {
        question: 'What is the difference between cold press and hot press?',
        answer: 'Cold press operates below 60°C helping retain nutrients, natural flavor, and aroma, while hot press heats seeds to 120-180°C which increases yield but may reduce oil quality. Cold-pressed oils are premium, unrefined products that typically command higher market prices than refined oils, though actual premiums vary significantly by market, region, and oil type. Hot-pressed oils require chemical refining and are suitable for bulk cooking oil production. For premium and organic oil markets, cold pressing is often preferred.'
      },
      {
        question: 'What seeds can be cold pressed?',
        answer: 'Most oil seeds can be cold pressed including sesame, peanut, coconut, walnut, almond, sunflower, flaxseed, mustard seed, rapeseed, tea seed, apricot kernel, and more. Hard-shell materials like walnut and apricot kernel benefit especially from cold pressing with high-pressure hydraulic presses. Coconut for VCO (Virgin Coconut Oil) and sesame for premium cooking oil are the most popular cold-pressed oils globally.'
      },
      {
        question: 'Is cold-pressed oil better?',
        answer: 'Cold-pressed oil generally retains more of certain nutrients, natural flavor, and aroma compared to hot-pressed or refined oils. Some vitamins and antioxidants may be reduced during high-temperature processing, though the degree varies by oil type and processing method. Cold-pressed oils are not processed with chemical refining agents. However, the chemical profile of any oil depends on the quality and handling of the raw material. While the yield may be slightly lower, the typically higher market value of cold-pressed oils makes cold pressing potentially more profitable for producers targeting premium and organic markets, though actual price premiums vary significantly.'
      },
      {
        question: 'What is the yield of cold press oil machine?',
        answer: 'Yield varies by seed type: coconut 55-65%, sesame 42-50%, peanut 38-45%, walnut 50-60%, sunflower 35-45%, flaxseed 30-38%, rapeseed 35-42%. Haonuo\'s hydraulic cold press machines with bar-type slotted barrel design achieve approximately 2-3% higher yields than traditional drilled barrel presses (based on internal testing, results vary), minimizing the yield gap between cold and hot pressing methods.'
      },
      {
        question: 'How much does a cold press oil machine cost?',
        answer: 'Contact Haonuo for factory-direct cold press oil machine pricing. Our cold press hydraulic oil presses are available in multiple models (HN325, HN355, HN426, HN500) with capacities from 50 to 125 kg/hr. As a direct manufacturer, we offer competitive pricing with no middleman markup. All machines include a 1-year warranty, lifetime technical support, and free voltage customization for your local power supply.'
      }
    ],
    ctaTitle: 'Start Producing Premium Cold-Pressed Oil',
    ctaDesc: 'Contact Haonuo for factory-direct pricing, model recommendations, and free production line design.',
    whatsappUs: 'WhatsApp Us'
  }
};

const languages = ['en', 'fr', 'id', 'ar'];
const basePath = path.join('src', 'i18n');

languages.forEach(lang => {
  const filePath = path.join(basePath, `${lang}.json`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  
  if (!data.coldPress) {
    data.coldPress = translations.coldPress;
  } else {
    data.coldPress = { ...data.coldPress, ...translations.coldPress };
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${filePath}`);
});

console.log('All translations added successfully!');