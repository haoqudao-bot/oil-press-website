import fs from 'fs';
import path from 'path';

const translations = {
  hydraulic: {
    title: 'Hydraulic Oil Press Machine — Factory Direct from Haonuo',
    description: 'Professional hydraulic oil press machine for cold pressing sesame, peanut, coconut & 50+ oil seeds. 15+ years manufacturer. Factory-direct pricing. 1-year warranty.',
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Products',
    breadcrumbCurrent: 'Hydraulic Oil Press Machine',
    heroTitle: 'Hydraulic Oil Press Machine — Factory Direct from Haonuo',
    heroDesc: 'Professional hydraulic oil press machines for cold pressing sesame, peanut, coconut, and 50+ oil seeds. 15+ years manufacturer. 50+ countries. 1-year warranty.',
    requestQuote: 'Request a Quote',
    compareModels: 'Compare Models',
    whyChoose: 'Why Choose a Hydraulic Oil Press',
    highYield: {
      title: 'High Oil Yield',
      desc: 'Typically 42-50% for sesame, 55-65% for coconut depending on seed quality and processing conditions. Results vary.',
      stat: 'Sesame: 42-50% yield'
    },
    lowPower: {
      title: 'Low Power Consumption',
      desc: 'Only 2.2 KW motor power needed. Compatible with generators, ideal for areas with unstable or no grid electricity.',
      stat: 'Just 2.2 KW — runs on 5KVA generator'
    },
    versatile: {
      title: 'Versatile — 50+ Seeds',
      desc: 'One machine handles sesame, peanut, coconut, walnut, almond, sunflower, flaxseed, mustard, rapeseed, and more.',
      stat: '50+ oil seed types supported'
    },
    durable: {
      title: 'Durable Construction',
      desc: 'High-strength steel frame, high-frequency quenched and heat-treated. Designed for long service life — estimated 20,000+ hours under normal operating conditions (actual lifespan depends on maintenance and usage patterns).',
      stat: '20,000+ hours service life'
    },
    easyOperation: {
      title: 'Easy Operation',
      desc: 'One-button start with microcomputer control. Automated pressing cycle with one-button start — minimal training needed. We provide video tutorials and remote guidance. Typically 1-2 workers can operate the machine.',
      stat: '1-button start, 1-2 workers'
    },
    factoryDirect: {
      title: 'Factory Direct',
      desc: 'No middleman — buy directly from the manufacturer. Potentially save compared to local distributor prices (actual savings vary by market). Quality assurance is provided directly by the manufacturer.',
      stat: 'Potentially save vs. distributor prices'
    },
    productSeriesTitle: 'Our Hydraulic Oil Press Series',
    howWorksTitle: 'How a Hydraulic Oil Press Works',
    howWorksStep1: {
      title: 'Load Seeds',
      desc: 'Fill the press barrel with prepared oil seeds. No pre-processing needed for most seed types — just load and press.'
    },
    howWorksStep2: {
      title: 'Apply Pressure',
      desc: 'The hydraulic system generates up to 620 tons of pressing force at controlled temperatures below 60°C for true cold pressing.'
    },
    howWorksStep3: {
      title: 'Collect Oil',
      desc: 'Pure, filtered oil flows out through the slotted barrel while the compressed seed cake is ejected automatically by the 4-hook mechanism.'
    },
    applicationsTitle: 'Application Scenarios',
    sesameOilApp: {
      title: 'Cold Pressed Sesame Oil',
      desc: 'Premium cooking oil for Asian and Middle Eastern markets. Cold pressing preserves the rich aroma and nutty flavor that commands premium prices.',
      yield: 'Yield: 42-50%'
    },
    coconutOilApp: {
      title: 'Virgin Coconut Oil',
      desc: 'High-value VCO production for Philippines, Indonesia, and global health food markets. Food-grade stainless steel models available for food safety compliance.',
      yield: 'Yield: 55-65%'
    },
    peanutOilApp: {
      title: 'Peanut / Groundnut Oil',
      desc: 'Africa\'s most popular cooking oil. Ideal for groundnut oil businesses in Nigeria, Ghana, and across West Africa. Generator-compatible for rural operations.',
      yield: 'Yield: 38-45%'
    },
    oliveOilApp: {
      title: 'Olive Oil',
      desc: 'Mediterranean and Middle East premium market. Hydraulic cold pressing preserves polyphenols and the distinctive flavor profile demanded by olive oil connoisseurs.',
      yield: 'Yield: 35-45%'
    },
    avocadoOilApp: {
      title: 'Avocado Oil',
      desc: 'Growing demand in cosmetics and premium cooking markets. Cold pressing retains vitamins, monounsaturated fats, and the vibrant green color of premium avocado oil.',
      yield: 'Yield: 30-40%'
    },
    sunflowerOilApp: {
      title: 'Sunflower Oil',
      desc: 'Eastern Europe and Africa staple cooking oil. High smoke point and mild flavor make it a versatile choice for both home and commercial food production.',
      yield: 'Yield: 40-48%'
    },
    comparisonTitle: 'Technical Comparison',
    comparisonModel: 'Model',
    comparisonForce: 'Pressing Force',
    comparisonMotor: 'Motor',
    comparisonBestFor: 'Best For',
    compareAllModels: 'Compare all models',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is a hydraulic oil press machine?',
        answer: 'A hydraulic oil press machine uses hydraulic pressure to extract oil from seeds and nuts. Unlike screw presses that generate heat through friction, hydraulic presses apply uniform static pressure at controlled temperatures, making them ideal for cold pressing premium oils like sesame, walnut, and coconut oil. The process preserves natural nutrients, flavor, and aroma.'
      },
      {
        question: 'How does a hydraulic oil press work?',
        answer: 'The machine uses a hydraulic pump to generate high pressure (up to 75 Mpa) which drives a piston into a barrel filled with prepared oil seeds. The pressure squeezes oil out through a slotted barrel while the compressed seed cake remains inside. A typical pressing cycle takes 8-15 minutes. The microcomputer control system automates the entire process from pressing to cake discharge.'
      },
      {
        question: 'What seeds can a hydraulic oil press process?',
        answer: 'Hydraulic oil presses can process 50+ types of oil seeds including sesame, peanut, coconut, walnut, almond, sunflower, flaxseed, mustard, rapeseed, tea seed, soybean, cottonseed, apricot kernel, and more. Different models are optimized for different seed types — smaller models for sesame and soft seeds, higher-pressure models for hard-shell nuts like walnut and almond.'
      },
      {
        question: 'What is the oil yield of a hydraulic oil press?',
        answer: 'Oil yield varies by seed type: sesame 42-50%, peanut 38-45%, coconut 55-65%, walnut 50-60%, rapeseed 35-45%, sunflower 40-48%. Haonuo hydraulic presses use a proprietary bar-type slotted barrel design that achieves approximately 2-3% higher yield than traditional drilled barrel presses (based on internal testing, results vary), with residual oil in cake as low as 6-8%.'
      },
      {
        question: 'How much does a hydraulic oil press machine cost?',
        answer: 'Contact Haonuo for factory-direct pricing. We offer competitive rates with no middleman markup — saving compared to local distributors (actual savings vary). Pricing depends on the model, barrel configuration (single/double), and customization options. Request a quote and receive a detailed quotation including machine price, shipping, and estimated duties within 24 hours.'
      },
      {
        question: 'What is the difference between cold press and hot press?',
        answer: 'Cold press operates below 60°C preserving nutrients, natural flavor, and aroma — ideal for premium oils like sesame, walnut, and virgin coconut oil. Hot press involves roasting seeds before pressing, which increases yield slightly but may alter flavor and reduce nutritional value. Hydraulic oil presses are naturally suited for cold pressing because they apply static pressure without friction-generated heat.'
      },
      {
        question: 'Can the machine run on a generator?',
        answer: 'Yes, Haonuo hydraulic presses only need 2.2 KW motor power, making them fully compatible with a 5-7 KVA generator. This makes them ideal for areas with unstable or no grid electricity, such as rural Nigeria, Kenya, and other regions across Africa and Southeast Asia.'
      },
      {
        question: 'What warranty do you provide?',
        answer: 'All Haonuo machines come with a 1-year warranty covering manufacturing defects, plus lifetime technical support. Spare parts are available from stock. Every machine undergoes 48-hour continuous full-load testing before shipment to ensure reliable operation.'
      }
    ],
    ctaTitle: 'Ready to Find the Right Hydraulic Oil Press?',
    ctaDesc: 'Get a free quotation, shipping estimate, and professional equipment recommendation typically within 24 business hours.',
    whatsappUs: 'WhatsApp Us'
  }
};

const languages = ['en', 'fr', 'id', 'ar'];
const basePath = path.join('src', 'i18n');

languages.forEach(lang => {
  const filePath = path.join(basePath, `${lang}.json`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  
  if (!data.hydraulic) {
    data.hydraulic = translations.hydraulic;
  } else {
    data.hydraulic = { ...data.hydraulic, ...translations.hydraulic };
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${filePath}`);
});

console.log('All translations added successfully!');