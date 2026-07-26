import fs from 'fs';
import path from 'path';

const translations = {
  manual: {
    title: 'Commercial Hydraulic Oil Press — Industrial-Grade Production | Haonuo',
    description: 'Industrial-grade hydraulic oil press machines for commercial oil production. 100 kg per batch capacity, professional yield, and reliable operation. Factory-direct pricing from Haonuo.',
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Products',
    breadcrumbCurrent: 'Commercial Hydraulic Oil Press',
    heroTitle: 'Commercial Hydraulic Oil Press — Industrial-Grade Production',
    heroDesc: 'Professional hydraulic oil press machines for commercial oil production. 100 kg per batch capacity, 60-75 MPa system pressure, and residual oil below 5%. Factory-direct pricing from Haonuo.',
    getPricing: 'Get Commercial Pricing',
    viewModels: 'View All Models',
    whyChoose: 'Why Choose Hydraulic Pressing for Commercial Production',
    industrialCapacity: {
      title: 'Industrial Capacity',
      desc: '100 kg per batch capacity. Hourly output varies by seed type and pressing cycle time. HN325 processes 100 kg per batch in 8-15 minutes, meeting commercial production targets.'
    },
    professionalYield: {
      title: 'Professional Yield',
      desc: 'Residual oil below 5% — 2-3x higher extraction efficiency than screw presses. Maximize profit from every kilogram of seeds.'
    },
    lowPower: {
      title: 'Low Power Requirement',
      desc: 'Only 2.2 KW power needed. Compatible with standard 220V single-phase power or a small 5 KVA generator — ideal for any region.'
    },
    costEffective: {
      title: 'Cost-Effective',
      desc: 'Factory-direct pricing with 15-20 year service life. High yield and reliability deliver excellent ROI for commercial operations.'
    },
    hydraulicAdvantageTitle: 'Haonuo Hydraulic Presses — Professional Choice for Commercial Operations',
    hydraulicAdvantageDesc: 'Haonuo specializes in commercial hydraulic oil presses that deliver industrial-grade performance with minimal power requirements. Even in areas with limited electricity, our hydraulic presses outperform all alternatives because they deliver:',
    hydraulicAdvantage1: '100 kg per batch capacity — commercial-scale production',
    hydraulicAdvantage2: 'Residual oil below 5% — maximum extraction efficiency',
    hydraulicAdvantage3: 'One-button operation — no physical labor required',
    hydraulicAdvantage4: '2.2 KW power — compatible with 5 KVA generator',
    exploreHydraulic: 'Explore Haonuo Hydraulic Presses',
    productModelsTitle: 'Commercial Hydraulic Press Models — Entry-Level',
    applicationsTitle: 'Commercial Oil Production Applications',
    sesameOilApp: {
      title: 'Sesame Oil',
      tag: 'High-Value Specialty',
      desc: 'Premium cold-pressed sesame oil for culinary and cosmetic applications. Hydraulic presses achieve 42-50% extraction efficiency with residual oil below 5%.',
      yield: 'Hydraulic yield: 42-50%'
    },
    peanutOilApp: {
      title: 'Peanut Oil',
      tag: 'Commercial Cooking Oil',
      desc: 'Widely consumed cooking oil with high demand in Africa and Asia. Industrial hydraulic pressing ensures consistent quality and maximum yield.',
      yield: 'Hydraulic yield: 38-45%'
    },
    palmKernelOilApp: {
      title: 'Palm Kernel Oil',
      tag: 'Industrial Processing',
      desc: 'High-volume industrial oil for cooking and soap production. Hydraulic presses handle tough palm kernels with excellent efficiency.',
      yield: 'Hydraulic yield: 45-55%'
    },
    coconutOilApp: {
      title: 'Coconut Oil',
      tag: 'Premium Market',
      desc: 'Cold-pressed virgin coconut oil for health food and cosmetics markets. Demands high-quality extraction equipment.',
      yield: 'Hydraulic yield: 55-62%'
    },
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is a commercial hydraulic oil press?',
        answer: 'A commercial hydraulic oil press is an industrial-grade machine that extracts oil from seeds using hydraulic pressure. It operates at 60-75 MPa system pressure, achieving residual oil rates below 5% — significantly more efficient than manual or screw presses. Haonuo hydraulic presses are designed for commercial production with 100 kg per batch capacity (hourly output varies by seed type).'
      },
      {
        question: 'How much oil can a hydraulic press produce?',
        answer: 'Haonuo hydraulic presses process 100 kg per batch. Hourly output varies by seed type and pressing cycle time (8-15 minutes per batch). This is 10-20x more productive than manual presses and 2-3x more efficient than screw presses.'
      },
      {
        question: 'Is a hydraulic press better than manual or screw presses?',
        answer: 'Absolutely. Hydraulic presses deliver 2-3x higher oil yield (residual oil below 5% vs 8-12% for screw presses), produce premium cold-pressed oil, and require minimal physical labor. Even with a small 5 KVA generator, hydraulic presses are the recommended choice for commercial production in any region.'
      },
      {
        question: 'What seeds work best with hydraulic presses?',
        answer: 'Hydraulic presses excel with all oil seeds: sesame, peanut, walnut, almond, sunflower, coconut, flaxseed, and 50+ more. The high pressure (60-75 MPa) ensures efficient extraction even from hard-shell nuts that manual presses cannot handle effectively.'
      },
      {
        question: 'What is the power requirement for hydraulic presses?',
        answer: 'Haonuo hydraulic presses require only 2.2 KW — compatible with standard 220V single-phase power or a small 5 KVA generator. This makes them suitable for areas with limited or unreliable electricity infrastructure.'
      },
      {
        question: 'What is the total cost of ownership?',
        answer: 'Haonuo provides factory-direct pricing without middleman markups. Total cost includes the press, optional roaster and filter, shipping, and installation. With proper maintenance, hydraulic presses deliver 15-20 years of reliable service, making them a cost-effective investment for commercial oil production.'
      }
    ],
    ctaTitle: 'Find the Right Commercial Oil Press',
    ctaDesc: 'Haonuo hydraulic presses deliver 100 kg per batch industrial capacity with residual oil below 5%. Hourly output varies by seed type. Get your personalized commercial solution today.',
    whatsappUs: 'WhatsApp Us'
  }
};

const languages = ['en', 'fr', 'id', 'ar'];
const basePath = path.join('src', 'i18n');

languages.forEach(lang => {
  const filePath = path.join(basePath, `${lang}.json`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  
  if (!data.manual) {
    data.manual = translations.manual;
  } else {
    data.manual = { ...data.manual, ...translations.manual };
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${filePath}`);
});

console.log('All translations added successfully!');