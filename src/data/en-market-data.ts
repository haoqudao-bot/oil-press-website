// English market page data for markets/[market].astro
// All content for the 11 English market sub-pages

export interface MarketSeedData {
  emoji: string;
  name: string;
  description: string;
  yield: string;
}

export interface MarketFaqData {
  question: string;
  answer: string;
}

export interface MarketShippingData {
  port: string;
  transitTime: string;
  cost: string;
}

export interface MarketQuoteCard {
  emoji: string;
  title: string;
  description: string;
}

export interface MarketClearanceStep {
  title: string;
  description: string;
}

export interface MarketClearanceData {
  heading: string;
  intro: string;
  stepsTitle: string;
  steps: MarketClearanceStep[];
  docsTitle: string;
  docs: string[];
  powerNoteTitle: string;
  powerNote: string;
  powerNoteLink: string;
  disclaimer: string;
}

export interface MarketCaseCard {
  tag: string;
  tagLabel: string;
  name: string;
  description: string;
  stat: string;
}

export interface MarketCasesData {
  heading: string;
  cases: MarketCaseCard[];
  footnote: string;
}

export interface MarketData {
  title: string;
  description: string;
  heroTitle: string;
  heroDesc: string;
  seedsTitle: string;
  seeds: MarketSeedData[];
  productsTitle: string;
  quoteTitle: string;
  quoteDesc: string;
  quoteCards: MarketQuoteCard[];
  quoteCta: string;
  shippingTitle: string;
  shipping: MarketShippingData;
  faqTitle: string;
  faqs: MarketFaqData[];
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  whatsappText: string;
  breadcrumbHome: string;
  breadcrumbMarkets: string;
  breadcrumbMarket: string;
  clearance?: MarketClearanceData;
  cases?: MarketCasesData;
}

export const enMarketData: Record<string, MarketData> = {
  // ────────────────────────────────────────────
  // EGYPT
  // ────────────────────────────────────────────
  egypt: {
    title: 'Oil Press Machine Egypt — Price, Capacity & Import Guide',
    description: 'Oil press machine in Egypt for sesame, olive and sunflower. ACID/GOEIC documents and inspection support, shipping to Alexandria. Request a quote.',
    heroTitle: 'Oil Press Machine in Egypt — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for sesame, olive, peanut, and sunflower oil production. Factory-direct pricing, shipping to Alexandria in 20-24 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in Egypt',
    seeds: [
      { emoji: '🫘', name: 'Sesame', description: 'Egypt is a top sesame producer. Used for tahini and premium cold-pressed oil with distinctive flavor.', yield: 'Yield: 42-50%' },
      { emoji: '🫒', name: 'Olive', description: 'Premium cold-pressed olive oil from Egypt\'s growing olive cultivation. High-value product for health-conscious consumers.', yield: 'Yield: 15-25%' },
      { emoji: '🥜', name: 'Peanut', description: 'Popular cooking oil in Egyptian households. Versatile oil with high smoke point well-suited for local cuisine.', yield: 'Yield: 38-45%' },
      { emoji: '🌻', name: 'Sunflower', description: 'Growing market for sunflower oil as a healthier alternative. Light flavor suitable for everyday cooking.', yield: 'Yield: 35-45%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for Egypt',
    quoteTitle: 'Get a Customized Oil Press Quote for Egypt',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in EGP or USD, including shipping to Alexandria/Port Said and estimated clearing costs.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: 'Voltage, barrel size and capacity configured for your Egyptian site' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Alexandria or Port Said with export documents included' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to Egypt',
    shipping: { port: 'Alexandria / Port Said', transitTime: '20-24 days from China', cost: 'Ask us for current rates' },
    faqTitle: 'Oil Press Buying FAQ for Egypt',
    faqs: [
      { question: 'What is the price of an oil press machine in Egypt?', answer: 'Contact us for a customized quote for a complete Haonuo oil press setup including shipping to Alexandria or Port Said. We provide competitive factory-direct pricing and can quote in EGP (Egyptian Pound) at current exchange rates.' },
      { question: 'Can the machine press sesame for tahini and oil?', answer: 'Yes. Haonuo hydraulic cold press machines are excellent for sesame oil production. Egypt is one of the world\'s top sesame producers, and our machines achieve 42-50% oil yield, producing premium cold-pressed sesame oil well-suited for both tahini production and cooking oil markets.' },
      { question: 'What voltage does the oil press machine use in Egypt?', answer: 'Haonuo oil press machines are customized for Egypt\'s 220V/50Hz power standard. Our motors are configured to match local electrical requirements, ensuring safe and efficient operation.' },
      { question: 'How long does shipping take to Alexandria, Egypt?', answer: 'Sea freight from Qingdao, China to Alexandria or Port Said takes 20-24 days. We handle all export documentation and can arrange CIF shipping for your convenience. Contact us for current shipping rates.' },
      { question: 'What are the import regulations for oil press machines in Egypt?', answer: 'Oil press machines are classified under HS code 8479.82. Egypt requires registration with GOEIC (General Organization for Export and Import Control) for machinery imports. We provide all necessary documentation including certificates of origin, commercial invoices, and quality certificates to facilitate smooth customs clearance.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in Egypt?',
    ctaDesc: 'Get a free quotation in EGP, shipping estimate to Alexandria, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for Egypt',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'Egypt',
    clearance: {
      heading: 'Importing Oil Presses Into Egypt: ACID, GOEIC & Inspection',
      intro: 'Egypt runs one of the region\'s most document-heavy import regimes. Three things must be in place before the vessel sails; arranging them after arrival means weeks of port storage and demurrage at Alexandria or Sokhna.',
      stepsTitle: 'Three clearance steps before the vessel sails',
      steps: [
        { title: '1. ACID Declaration', description: 'The Egyptian importer registers the shipment on the Nafeza customs platform and receives an ACID number, which must appear on the commercial invoice, packing list and bill of lading. Exporters complete the cargo-data side through the authorised blockchain platform. Shipments without a valid ACID cannot be loaded at origin.' },
        { title: '2. GOEIC Registration', description: 'Importers of industrial equipment must be registered with the General Organization for Export and Import Control, and foreign factory/manufacturer registration rules may apply depending on product category. Your importer of record should verify status well before ordering — this is the check most often left too late.' },
        { title: '3. Inspection & Attested Documents', description: 'A pre-shipment inspection certificate from an accredited inspection body, plus commercial documents (invoice, certificate of origin, packing list) attested through the prescribed consular or electronic channels. We provide the manufacturer test report, nameplate and technical file that inspection bodies routinely request.' },
      ],
      docsTitle: 'Document pack we ship with',
      docs: [
        'Commercial invoice and detailed packing list',
        'Original bills of lading / telex release',
        'ACID coordination with Nafeza before sailing',
        'Manufacturer test report and technical file',
        'Nameplate and electrical specification information',
      ],
      powerNoteTitle: 'Power specification',
      powerNote: 'Egyptian industrial supply is 220/380V, 50Hz three-phase, matching our standard build. Confirm your site supply and breaker capacity before delivery using our ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'ACID and GOEIC procedures are revised frequently — always confirm the current checklist with your Egyptian importer or customs agent before placing the order.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in Egypt',
      cases: [
        { tag: 'Beheira', tagLabel: 'Sesame & Tahini', name: 'Sesame Oil & Tahini Producer — Nile Delta', description: 'HN325 pressing carefully roasted sesame to supply the tahini and halawa industry in Beheira, Egypt\'s sesame-processing heartland.', stat: 'Yield: 46-50%' },
        { tag: 'Fayoum', tagLabel: 'Sunflower Oil', name: 'Sunflower Oil Mill — Fayoum', description: 'HN365 processing locally grown sunflower seed for bulk cooking oil distributed through Cairo and Upper Egypt markets.', stat: 'Output: ~500 kg/day' },
        { tag: 'Ismailia', tagLabel: 'Olive & Cold Press', name: 'Olive Oil Processor — Ismailia', description: 'HN426 cold-press model handling small-batch desert olives and second-press olive pomace for blended oils.', stat: 'Cold-press configuration' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // KENYA
  // ────────────────────────────────────────────
  kenya: {
    title: 'Oil Press Machine Kenya — Price, Capacity & Import Guide',
    description: 'Oil press machine in Kenya for sunflower, sesame and peanut. KEBS PVoC certificate arranged before shipment; 415V/50Hz, shipping to Mombasa. Request a quote.',
    heroTitle: 'Oil Press Machine in Kenya — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for sunflower, peanut, sesame, and cottonseed oil production. Factory-direct pricing, shipping to Mombasa in 25-30 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in Kenya',
    seeds: [
      { emoji: '🌻', name: 'Sunflower', description: 'Growing commercial sector across Rift Valley and Western Kenya. Premium cold-pressed oil in high demand.', yield: 'Yield: 35-45%' },
      { emoji: '🥜', name: 'Peanut', description: 'Popular cooking oil in Kenyan households. Groundnut oil with rich flavor for traditional dishes and commercial use.', yield: 'Yield: 38-45%' },
      { emoji: '🫘', name: 'Sesame', description: 'Significant export potential. Premium cold-pressed sesame oil for both local market and international export.', yield: 'Yield: 42-50%' },
      { emoji: '☁️', name: 'Cottonseed', description: 'Byproduct of cotton farming in Eastern and Coastal regions. Affordable cooking oil with versatile applications.', yield: 'Yield: 15-34%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for Kenya',
    quoteTitle: 'Get a Customized Oil Press Quote for Kenya',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in KES or USD, including shipping to Mombasa and estimated clearing costs.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: '415V/50Hz motors configured for Kenyan industrial supply' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Mombasa with KEBS PVoC coordination before sailing' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to Kenya',
    shipping: { port: 'Mombasa', transitTime: '25-30 days from China', cost: 'Ask us for current rates' },
    faqTitle: 'Oil Press Buying FAQ for Kenya',
    faqs: [
      { question: 'What is the price of an oil press machine in Kenya?', answer: 'Contact us for a customized quote for a complete Haonuo oil press setup including shipping to Mombasa. We provide competitive factory-direct pricing and can quote in KES (Kenyan Shilling) at current exchange rates.' },
      { question: 'What voltage does the oil press machine use in Kenya?', answer: 'Haonuo oil press machines are customized for Kenya\'s 240V/50Hz power standard. Our motors are configured to match local electrical requirements, ensuring safe and efficient operation on both mains power and generator supply.' },
      { question: 'How long does shipping take to Mombasa, Kenya?', answer: 'Sea freight from Qingdao, China to Mombasa port takes 25-30 days. We handle all export documentation and can arrange CIF shipping for your convenience. Contact us for current shipping rates.' },
      { question: 'Is sunflower oil production profitable in Kenya?', answer: 'It can be profitable, depending on factors like raw material costs, local oil prices, and production volume. Kenya\'s commercial sunflower oil sector is growing. With Haonuo hydraulic cold press machines, you can produce high-quality cold-pressed sunflower oil that may command premium prices in the Kenyan market. Actual returns vary significantly by operator.' },
      { question: 'Can the oil press machine work with a generator in Kenya?', answer: 'Yes. Haonuo hydraulic oil presses require only 2.2 KW of motor power, making them fully compatible with a 5-7 KVA generator. This is well-suited for areas in Kenya with unreliable grid power. We customize the electrical system for 240V/50Hz to match Kenyan power standards.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in Kenya?',
    ctaDesc: 'Get a free quotation in KES, shipping estimate to Mombasa, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for Kenya',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'Kenya',
    clearance: {
      heading: 'PVoC Compliance: The Certificate That Travels With Your Oil Press',
      intro: 'Regulated imports into Kenya need a Certificate of Conformity under the KEBS Pre-Export Verification of Conformity (PVoC) programme. The critical word is pre-export: inspection happens at our works before the container is sealed — not at Mombasa.',
      stepsTitle: 'How the process works',
      steps: [
        { title: 'Request Inspection Early', description: 'Once the machine is built and before loading, your importer books PVoC inspection with an authorised KEBS agent (Intertek, SGS, Bureau Veritas or QIMA).' },
        { title: 'Factory Verification', description: 'The agent checks the machine against applicable standards and reviews the technical file: test report, motor and electrical specification, nameplate, and CE documentation where held.' },
        { title: 'CoC Issued', description: 'The Certificate of Conformity is issued electronically and the original accompanies the invoice, packing list and bill of lading.' },
        { title: 'Clearance', description: 'KRA assesses duty and 16% VAT at Mombasa port; containers can then move to the ICD in Nairobi or Naivasha, or directly to your site.' },
      ],
      docsTitle: 'Why the timing matters',
      docs: [
        'Certificate of Conformity (CoC) issued before shipment',
        'Commercial invoice and packing list',
        'Bill of lading with CoC reference',
        'Manufacturer test report and technical file',
        'Motor and electrical specification documents',
      ],
      powerNoteTitle: 'Kenyan power specification',
      powerNote: 'Industrial three-phase supply in Kenya is 415V, 50Hz. Motor and control specifications are confirmed at order stage, and the machines operate from generator power when needed — see the ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'PVoC scope and routes are revised by KEBS from time to time — confirm the current category requirements with your clearing agent before ordering.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in Kenya',
      cases: [
        { tag: 'Nakuru', tagLabel: 'Sunflower Oil', name: 'Sunflower Oil Producer — Rift Valley', description: 'HN325 serving smallholder sunflower cooperatives around Nakuru, pressing in short campaigns during the harvest season.', stat: 'Capacity: ~40 kg/batch' },
        { tag: 'Kakamega', tagLabel: 'Groundnut Oil', name: 'Groundnut Oil Mill — Western Kenya', description: 'HN365 producing roasted-groundnut oil for open-air markets and supermarket shelves in Kakamega and Kisumu.', stat: 'Output: ~450 kg/day' },
        { tag: 'Meru', tagLabel: 'Sesame Oil', name: 'Sesame Oil Processor — Eastern Kenya', description: 'HN426 cold-pressing golden sesame from the Meru/Tharaka region for health-food buyers in Nairobi.', stat: 'Yield: 44-48%' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // NIGERIA
  // ────────────────────────────────────────────
  nigeria: {
    title: 'Oil Press Machine Nigeria — Price, Capacity & Import Guide',
    description: 'Oil press machine in Nigeria for groundnut, palm kernel and sesame. SONCAP clearance support, generator-ready builds, shipping to Lagos. Request a quote.',
    heroTitle: 'Oil Press Machine in Nigeria — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for groundnut, palm kernel, sesame, and cottonseed oil production. Factory-direct pricing, shipping to Lagos in 25-30 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in Nigeria',
    seeds: [
      { emoji: '🥜', name: 'Groundnut (Peanut)', description: 'One of Nigeria\'s most popular cooking oils. Approximately 40-50% oil content (varies by variety). Rich nutty flavor for West African cuisine.', yield: 'Yield: 38-45%' },
      { emoji: '🌴', name: 'Palm Kernel', description: 'Abundant byproduct from oil palm plantations. 48-52% oil content. High market demand.', yield: 'Yield: 44-48%' },
      { emoji: '🫘', name: 'Sesame', description: 'Growing export opportunity. Cold-pressed sesame oil commands premium prices in Middle East and Europe.', yield: 'Yield: 42-50%' },
      { emoji: '☁️', name: 'Cottonseed', description: 'Nigeria is Africa\'s largest cotton producer. Affordable cooking oil with high smoke point.', yield: 'Yield: 15-34%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for Nigeria',
    quoteTitle: 'Get a Customized Oil Press Quote for Nigeria',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in Naira or USD, including shipping to Lagos and estimated clearing costs.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: 'Generator-ready 220V/50Hz builds with custom options' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Lagos with SONCAP documentation coordination' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to Nigeria',
    shipping: { port: 'Apapa / Tin Can, Lagos', transitTime: '25-30 days from China', cost: 'Ask us for current rates' },
    faqTitle: 'Oil Press Buying FAQ for Nigeria',
    faqs: [
      { question: 'What is the import duty for oil press machines in Nigeria?', answer: 'Oil press machines are classified under HS code 8479.82. Import duty rates vary and should be confirmed with a licensed clearing agent. Working with a licensed clearing agent ensures correct classification and minimizes your duty burden.' },
      { question: 'Can the oil press machine work with a generator in Nigeria?', answer: 'Yes. Haonuo hydraulic oil presses require only 2.2 KW of motor power, making them fully compatible with a 5-7 KVA generator. We can customize the electrical system for 220V/50Hz to match Nigerian power standards. Please confirm your voltage requirements when ordering.' },
      { question: 'How long does shipping take to Lagos, Nigeria?', answer: 'Sea freight from Qingdao, China to Lagos (Apapa/Tin Can port) takes 25-30 days. We handle all export documentation and can arrange CIF shipping for your convenience. Contact us for current shipping rates.' },
      { question: 'What is the price of a groundnut oil machine in Nigeria?', answer: 'Contact us for a customized quote for a complete Haonuo groundnut oil press setup including shipping and clearing. We provide competitive factory-direct pricing and can quote in Naira.' },
      { question: 'Do you provide installation support in Nigeria?', answer: 'Yes. We provide detailed installation manuals, video tutorials, and remote technical guidance via WhatsApp. For large orders, we can send a technician to your facility in Lagos, Abuja, or Kano for on-site installation and training at cost.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in Nigeria?',
    ctaDesc: 'Get a free quotation in Naira, shipping estimate to Lagos, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for Nigeria',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'Nigeria',
    clearance: {
      heading: 'Oil Press Import & Customs Clearance in Nigeria',
      intro: 'Clearing an oil press through Lagos ports is straightforward when documents are prepared before shipment — and expensive when they are not. Most delays our customers experience come from missing SONCAP paperwork, never from the equipment itself.',
      stepsTitle: 'The four-step clearance sequence',
      steps: [
        { title: 'Product Certificate (PC)', description: 'Your importer obtains a PC through an accredited SONCAP certification body before the machine ships.' },
        { title: 'SONCAP Certificate (SC)', description: 'Pre-shipment inspection and verification at our works; the SC is issued against the PC and travels with the shipping documents.' },
        { title: 'e-Form M', description: 'The importer\'s bank opens an e-Form M using the proforma invoice, PC and SC — the backbone of every regulated import.' },
        { title: 'PAAR and Release', description: 'Nigeria Customs issues the Pre-Arrival Assessment Report (machinery of this type is commonly classified near HS 8479.82); cargo is collected at Apapa or Tin Can Island.' },
      ],
      docsTitle: 'Document pack we ship with',
      docs: [
        'Commercial invoice and detailed packing list',
        'Original bills of lading / telex release',
        'SONCAP PC and SC coordination before sailing',
        'Manufacturer test report and CE documentation where held',
        'Nameplate, electrical specification and wiring information',
      ],
      powerNoteTitle: 'Power note',
      powerNote: 'Machines are supplied for 220V/380V, 50Hz three-phase as standard — the same network used on Nigerian industrial estates — and run reliably from generators during grid outages. See our ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'Clearance procedures are updated periodically — always confirm the latest SONCAP and Form M checklist with a licensed Nigerian clearing agent. We coordinate inspection timing with the certification body so paperwork is complete before the vessel sails.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in Nigeria',
      cases: [
        { tag: 'Kano', tagLabel: 'Groundnut Oil', name: 'Groundnut Oil Producer — Kano', description: 'HN365 cold-pressing groundnuts for the northern Nigerian market at ~600 kg/day, sold as premium cold-pressed groundnut oil in local markets.', stat: 'Output: ~600 kg/day' },
        { tag: 'Ondo State', tagLabel: 'Palm Kernel Oil', name: 'Palm Kernel Oil Mill — Akure', description: 'HN426 high-pressure press extracting palm kernel oil from the abundant oil-palm harvest; the hard kernel cake is resold as cattle feed.', stat: 'Yield: 45-47%' },
        { tag: 'Niger State', tagLabel: 'Cottonseed & Sesame', name: 'Mixed-Seed Oil Processor — Minna', description: 'HN500 running cottonseed and sesame campaigns on a shared line, switching barrels between seed types by season.', stat: 'Multi-seed campaigns' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // PAKISTAN
  // ────────────────────────────────────────────
  pakistan: {
    title: 'Oil Press Machine Pakistan — Price, Capacity & Import Guide',
    description: 'Oil press machine in Pakistan for sunflower, mustard and sesame. WeBOC clearance and inspection support, 220-240V, shipping to Karachi. Request a quote.',
    heroTitle: 'Oil Press Machine in Pakistan — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for sunflower, mustard, sesame, and cottonseed oil production. Factory-direct pricing, shipping to Karachi in 20-25 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in Pakistan',
    seeds: [
      { emoji: '🌻', name: 'Sunflower', description: 'Pakistan\'s fastest-growing oil crop. Punjab and Sindh provinces major producers.', yield: 'Yield: 35-45%' },
      { emoji: '🟡', name: 'Mustard/Rapeseed', description: 'Traditional cooking oil for Pakistani cuisine. Cold-pressed sarson oil in high demand.', yield: 'Yield: 30-38%' },
      { emoji: '🫘', name: 'Sesame', description: 'Premium cold-pressed sesame oil for cooking and halwa production. Export potential to Middle East.', yield: 'Yield: 42-50%' },
      { emoji: '☁️', name: 'Cottonseed', description: 'Pakistan is the 4th largest cotton producer. Abundant cottonseed for affordable cooking oil.', yield: 'Yield: 15-34%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for Pakistan',
    quoteTitle: 'Get a Customized Oil Press Quote for Pakistan',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in PKR or USD, including shipping to Karachi and estimated duty costs.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: '220V/50Hz or 380V three-phase configured for your site' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Karachi Port or Port Qasim with full export docs' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to Pakistan',
    shipping: { port: 'Karachi Port / Port Qasim', transitTime: '20-25 days from China', cost: 'Contact for current rates' },
    faqTitle: 'Oil Press Buying FAQ for Pakistan',
    faqs: [
      { question: 'What is the price of oil press machine in Pakistan?', answer: 'Contact Haonuo for factory-direct pricing for the Pakistani market. We offer competitive rates with shipping to Karachi included. Pricing available in PKR.' },
      { question: 'Can the machine extract sunflower oil efficiently?', answer: 'Yes, Haonuo hydraulic oil presses achieve 35-45% oil yield from sunflower seeds. The cold press method preserves the light flavor preferred in Pakistani cooking.' },
      { question: 'What voltage is compatible in Pakistan?', answer: 'We customize all machines for 220V/50Hz to match Pakistani electrical standards. Our machines only need 2.2 KW, compatible with a 5 KVA generator.' },
      { question: 'How long does shipping take to Pakistan?', answer: 'Sea freight from Qingdao to Karachi takes 20-25 days. We handle all export documentation and can arrange CIF shipping.' },
      { question: 'Is there import duty on oil press machines in Pakistan?', answer: 'Oil press machines fall under specific HS codes. We provide complete documentation including certificate of origin to help your customs agent minimize duty. Contact us for guidance on Pakistan import procedures.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in Pakistan?',
    ctaDesc: 'Get a free quotation in PKR, shipping estimate to Karachi, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for Pakistan',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'Pakistan',
    clearance: {
      heading: 'Importing Oil Presses Into Pakistan: WeBOC & Karachi Ports',
      intro: 'Machinery consignments clear through Pakistan Customs\' WeBOC electronic system, supported by complete manufacturer documentation and — depending on category and tariff regime — pre-shipment inspection. Prepared paperwork keeps container demurrage at Karachi terminals to zero.',
      stepsTitle: 'Clearance sequence',
      steps: [
        { title: 'Goods Declaration', description: 'Your clearing agent files the GD in WeBOC against the correct heading (presses of this type commonly fall near HS 8479.82), attaching invoice, packing list and bill of lading.' },
        { title: 'Pre-shipment Inspection', description: 'Where applicable, an inspection certificate from an accredited company is required; coverage varies, so confirm current PSI requirements with your agent before shipment.' },
        { title: 'Compliance File', description: 'Manufacturer test report, motor and electrical specification, nameplate, and CE certificates where held. PSQCA is the national standards body your agent may consult on category questions.' },
        { title: 'Assessment and Delivery', description: 'After duty assessment and release at Karachi Port (KICT/PICT) or Port Qasim, inland trucking reaches Lahore, Faisalabad, Multan, Hyderabad or Peshawar.' },
      ],
      docsTitle: 'Documentation we supply',
      docs: [
        'Signed commercial invoice and detailed packing list',
        'Original / telex bill of lading',
        'Factory test report and pressure documentation',
        'Electrical nameplate, motor data and wiring information',
        'CE and inspection certificates where the route requires them',
      ],
      powerNoteTitle: 'Power & parts support',
      powerNote: 'Pakistani industrial supply is 220-240V, 50Hz three-phase, matching our standard build. Seal kits and filter cloths ship as air parcels to Karachi or Lahore within days, so planned spares rarely mean long stops. See the ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'Tariff and PSI coverage changes with each finance measure — confirm the current position with a WeBOC-registered clearing agent before ordering.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in Pakistan',
      cases: [
        { tag: 'Faisalabad', tagLabel: 'Mustard (Sarsoon) Oil', name: 'Mustard Oil Mill — Punjab', description: 'HN365 traditional cold pressing for pungent sarsoon ka tel, the staple cooking oil across Punjab\'s household and wholesale markets.', stat: 'Output: ~500 kg/day' },
        { tag: 'Sindh', tagLabel: 'Sesame Oil', name: 'Sesame Oil Producer — Sindh', description: 'HN325 producing cold-pressed til oil for domestic buyers and regional export traders in Karachi.', stat: 'Yield: 45-49%' },
        { tag: 'Bahawalpur', tagLabel: 'Cottonseed Oil', name: 'Cottonseed Oil Processor — South Punjab', description: 'HN426 pressing cottonseed from the southern Punjab cotton belt; the pressed cake is sold as livestock feed.', stat: 'Cake: feed grade' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // UK
  // ────────────────────────────────────────────
  uk: {
    title: 'Oil Press Machine UK — Price, Capacity & Import Guide',
    description: 'Oil press machine in the UK for rapeseed, sunflower and hemp. CE/UKCA documentation, 400V and import VAT guidance; shipping to Felixstowe. Request a quote.',
    heroTitle: 'Oil Press Machine in UK — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for rapeseed, sunflower, hemp, and flaxseed oil production. Factory-direct pricing, shipping to Felixstowe in 28-35 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in the UK',
    seeds: [
      { emoji: '🌱', name: 'Rapeseed/Canola', description: 'UK\'s #1 oilseed crop. Bright yellow fields produce premium cold-pressed oil for the growing artisan market.', yield: 'Yield: 35-40%' },
      { emoji: '🌻', name: 'Sunflower', description: 'Imported seeds for cold-pressed sunflower oil. Popular health-conscious choice for UK consumers.', yield: 'Yield: 35-45%' },
      { emoji: '🌿', name: 'Hemp', description: 'Growing CBD and nutrition market. Hemp seed oil rich in omega fatty acids for health food sector.', yield: 'Yield: 30-35%' },
      { emoji: '🫘', name: 'Flaxseed', description: 'Omega-3 health market. Cold-pressed flaxseed oil is a premium product for nutritional supplements.', yield: 'Yield: 30-38%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for UK',
    quoteTitle: 'Get a Customized Oil Press Quote for UK',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in GBP, including shipping to Felixstowe/Southampton and estimated clearing costs.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: '240V/50Hz with UK-compatible plugs and wiring' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Felixstowe or Southampton with full customs support' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to UK',
    shipping: { port: 'Felixstowe / Southampton', transitTime: '28-35 days from China', cost: 'Ask us for current rates' },
    faqTitle: 'Oil Press Buying FAQ for UK',
    faqs: [
      { question: 'What is the price of an oil press machine in the UK?', answer: 'Contact us for a customized quote for a complete Haonuo oil press setup including shipping to Felixstowe or Southampton. We provide competitive factory-direct pricing and can quote in GBP (British Pound Sterling) at current exchange rates.' },
      { question: 'Does the oil press machine have CE certification for the UK market?', answer: 'Haonuo oil press machines are manufactured to international standards. Please contact us to verify the current certification status for your specific model and destination market. We ensure all electrical components meet applicable safety standards and regulations.' },
      { question: 'What voltage does the oil press machine use in the UK?', answer: 'Haonuo oil press machines are customized for the UK\'s 240V/50Hz power standard. Our motors are configured with UK-compatible plugs and wiring to match local electrical requirements, ensuring safe and efficient operation.' },
      { question: 'How long does shipping take to Felixstowe, UK?', answer: 'Sea freight from Qingdao, China to Felixstowe or Southampton takes 28-35 days. We handle all export documentation and can arrange CIF shipping for your convenience. Contact us for current shipping rates.' },
      { question: 'What are the UK import regulations for oil press machines?', answer: 'Oil press machines are classified under HS code 8479.82. For the UK market, machines require UKCA marking (or CE marking for Northern Ireland). Import VAT of 20% applies. We provide all necessary documentation including certificates of origin, commercial invoices, and packing lists to facilitate smooth customs clearance.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in the UK?',
    ctaDesc: 'Get a free quotation in GBP, shipping estimate to Felixstowe, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for UK',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'UK',
    clearance: {
      heading: 'Importing Oil Presses Into the UK: CE/UKCA & VAT',
      intro: 'Machinery imports into the United Kingdom follow a stable, well-documented route. The three points buyers ask about — marking rules after Brexit, import VAT recovery, and workplace installation — are settled here.',
      stepsTitle: 'Three clearance checkpoints',
      steps: [
        { title: 'CE and UKCA Marking', description: 'CE-marked machinery continues to be accepted for placing on the Great Britain market; UKCA marking remains available for most product groups. Northern Ireland follows the CE / UKNI arrangement. Shipments include the declaration of conformity, technical file and guarding documentation consistent with the UK Supply of Machinery (Safety) Regulations.' },
        { title: 'Duty and Import VAT', description: 'Duty is assessed under the UK Tariff (this machinery type commonly sits near commodity code 8479.82) and import VAT at 20% is charged at entry. VAT-registered businesses normally reclaim the import VAT, and Postponed VAT Accounting removes the cash-flow hit entirely — ask your forwarder to set it up before arrival.' },
        { title: 'Installation at Work', description: 'UK industrial supply is 230V, 50Hz (400V three-phase), matching our standard build. Employers are expected to meet PUWER-type obligations for guarding, emergency stops and operator training, all of which are covered in our commissioning guidance.' },
      ],
      docsTitle: 'Documentation we supply',
      docs: [
        'Declaration of conformity and technical file',
        'Commercial invoice and packing list',
        'Original bills of lading',
        'CE certificates and test report',
        'Nameplate and electrical documentation',
      ],
      powerNoteTitle: 'Ports and delivery',
      powerNote: 'Container arrivals most commonly use Felixstowe, London Gateway or Southampton, with inland trucking to England, Scotland and Wales arranged by your forwarder. See the ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'Tariff codes and marking rules are reviewed periodically — confirm the current commodity code and VAT treatment with your UK customs agent.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in the UK',
      cases: [
        { tag: 'East Anglia', tagLabel: 'Rapeseed Oil', name: 'Artisan Rapeseed Oil Farm — Norfolk', description: 'HN426 cold-pressing home-grown rapeseed into single-estate cooking oil for farm shops, delis, and online grocery buyers.', stat: 'Cold-press configuration' },
        { tag: 'South West', tagLabel: 'Hemp Seed Oil', name: 'Hemp Oil Processor — Devon', description: 'HN325 pressing licensed hemp seed at low temperature for CBD-food and wellness products, keeping temperatures below 40°C.', stat: 'Low-temperature press' },
        { tag: 'Yorkshire', tagLabel: 'Sunflower Oil', name: 'Sunflower Oil Producer — Yorkshire', description: 'HN365 batch-pressing British-grown sunflower seed for refill stores and zero-waste shops across northern England.', stat: 'Output: ~450 kg/day' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // USA
  // ────────────────────────────────────────────
  usa: {
    title: 'Oil Press Machine USA — Price, Capacity & Import Guide',
    description: 'Oil press machine in the USA built for 480V/60Hz supply, with UL-component and FDA-aligned food-contact options. Shipping to LA or NY. Request a quote.',
    heroTitle: 'Oil Press Machine in USA — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for sunflower, peanut, hemp, and almond oil production. Factory-direct pricing, shipping to LA/NY in 30-40 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in the United States',
    seeds: [
      { emoji: '🌻', name: 'Sunflower', description: 'Growing health market for cold-pressed sunflower oil. Premium product for natural food stores and farm-to-table restaurants.', yield: 'Yield: 35-45%' },
      { emoji: '🥜', name: 'Peanut', description: 'Southern US traditional crop. Peanut oil prized for high smoke point in frying and gourmet cooking applications.', yield: 'Yield: 38-45%' },
      { emoji: '🌿', name: 'Hemp', description: 'CBD extraction and hemp seed oil. Rapidly growing market for nutritional hemp products across the USA.', yield: 'Yield: 30-35%' },
      { emoji: '🌰', name: 'Almond', description: "California's massive almond industry. Cold-pressed almond oil for premium cooking and cosmetics.", yield: 'Yield: 45-55%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for USA',
    quoteTitle: 'Get a Customized Oil Press Quote for USA',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in USD, including shipping to Los Angeles or New York and estimated clearing costs.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing in US Dollars' },
      { emoji: '📋', title: 'Spec Customization', description: '460V/60Hz motors, UL components, food-grade contact parts' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to LA or NY with full import documentation' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to USA',
    shipping: { port: 'Los Angeles / New York (NJ)', transitTime: '30-40 days from China', cost: 'Ask us for current rates' },
    faqTitle: 'Oil Press Buying FAQ for USA',
    faqs: [
      { question: 'What is the price of an oil press machine in the USA?', answer: 'Contact us for a customized quote for a complete Haonuo oil press setup including shipping to Los Angeles or New York. We provide competitive factory-direct pricing in USD, saving compared to domestic distributors (actual savings vary).' },
      { question: 'Does the oil press machine meet FDA/USDA compliance?', answer: 'Haonuo oil press machines use food-grade stainless steel for surfaces that contact oil and seeds, consistent with FDA food contact surface material requirements. Our machines have not been separately certified or approved by the FDA. Buyers should verify compliance requirements with their local health department. For oil production facilities, we can provide documentation supporting USDA compliance. All machine surfaces that contact oil or seeds are made from food-grade stainless steel.' },
      { question: 'What voltage does the oil press machine use in the USA?', answer: "Haonuo oil press machines are customized for the USA's 110V/60Hz power standard. We provide custom electrical configurations to match US electrical requirements, ensuring safe and efficient operation without the need for transformers." },
      { question: 'How long does shipping take to Los Angeles or New York?', answer: 'Sea freight from Qingdao, China to Los Angeles or New York (NJ) takes 30-40 days. We handle all export documentation and can arrange CIF shipping for your convenience. Contact us for current shipping rates to either coast.' },
      { question: 'What is the US import duty for oil press machines?', answer: 'Oil press machines are classified under HS code 8479.82. The US import duty rate for this classification is typically low (0-3.4%). We provide all necessary documentation including certificates of origin, commercial invoices, and packing lists to facilitate smooth customs clearance.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in the USA?',
    ctaDesc: 'Get a free quotation in USD, shipping estimate to LA or NY, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for USA',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'USA',
    clearance: {
      heading: 'Installing an Oil Press in the US: Voltage, Controls & Entry',
      intro: 'The machine clears US customs without difficulty — the surprises are almost always electrical specification and site readiness. These four points are confirmed at order stage, not after delivery.',
      stepsTitle: 'Four clearance and site-check points',
      steps: [
        { title: 'Voltage and Frequency', description: 'US industrial three-phase runs at 208/230/460/480V, 60Hz — not China\'s 380V/50Hz. Motors, heating elements and control gear must be specified for American supply at the factory; a machine built for 380V/50Hz cannot simply be plugged in at a US plant. Tell us the service nameplate voltage before manufacture.' },
        { title: 'Control Panel Expectations', description: 'US insurers, food plants and leased commercial premises often require UL-recognised components or a panel built to UL 508A practice. It is not mandatory for every workshop, but specifying it at quotation is far cheaper than rebuilding a panel on site.' },
        { title: 'Food-Contact Specification', description: 'Bottled edible-oil buyers expect food-grade contact parts — 304/316 stainless barrels and food-grade seals aligned with FDA food-material expectations. If the oil carries any premium or grocery-listing claim, specify stainless contact parts before production rather than retrofitting later.' },
        { title: 'Customs and the Workplace', description: 'Entry is filed under HTSUS heading around 8479.82; duty rates, including any additional tariff treatment, change and should be confirmed by your customs broker. Common ports: Los Angeles/Long Beach, New York/New Jersey and Savannah. Installation should follow OSHA machine-guarding and lockout/tagout expectations, which our guarding and emergency-stop design supports.' },
      ],
      docsTitle: 'Documentation we supply',
      docs: [
        'Commercial invoice and packing list',
        'Original bills of lading',
        'UL component documentation where specified',
        'Food-grade contact material certificates',
        'Electrical nameplate and test reports',
      ],
      powerNoteTitle: 'Confirm these before ordering',
      powerNote: 'Confirm voltage, panel requirements, tariff treatment and local code with your electrician and customs broker before placing the order — we build to the confirmed specification. See our ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'Confirm voltage, panel requirements, tariff treatment and local code with your electrician and customs broker before placing the order — we build to the confirmed specification.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in the United States',
      cases: [
        { tag: 'North Dakota', tagLabel: 'Sunflower Oil', name: 'Sunflower Oil Producer — Northern Plains', description: 'HN365 cold-pressing high-oleic sunflower seed for premium cooking-oil brands sold through natural-food channels and co-ops.', stat: 'High-oleic batches' },
        { tag: 'Oregon', tagLabel: 'Hemp Seed Oil', name: 'Hemp Seed Processor — Pacific Northwest', description: 'HN426 pressing licensed hemp seed at controlled low temperature for body-care, culinary, and nutritional products.', stat: 'Low-temperature press' },
        { tag: 'California', tagLabel: 'Almond Oil', name: 'Small-Batch Almond Oil Mill — California', description: 'HN325 producing roasted and cold-pressed almond oil for gourmet retailers and farm-direct subscription customers.', stat: 'Gourmet small batch' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // INDONESIA
  // ────────────────────────────────────────────
  indonesia: {
    title: 'Oil Press Machine Indonesia — Price, Capacity & Import Guide',
    description: 'Hydraulic oil press machines for Indonesian coconut, palm & groundnut mills. API/SNI import docs, 380V/50Hz spec, shipping to Jakarta. Factory-direct quote.',
    heroTitle: 'Hydraulic Oil Press Machines in Indonesia — Factory-Direct Pricing',
    heroDesc: 'Hydraulic oil press machines for coconut (VCO), palm kernel, and peanuts. Factory-direct pricing, 15-20 day shipping to Jakarta, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in Indonesia',
    seeds: [
      { emoji: '🌴', name: 'Coconut', description: "Indonesia is the world's largest coconut producer. Virgin Coconut Oil (VCO) is in strong demand for culinary and cosmetic applications.", yield: 'Yield: 60-65% (copra)' },
      { emoji: '🫒', name: 'Palm Kernel', description: "The world's #1 palm producer. Palm kernels yield high-quality oil for cosmetics and food applications.", yield: 'Yield: 44-48%' },
      { emoji: '🥜', name: 'Peanut', description: 'Peanut oil is a staple in Indonesian cooking, prized for its distinctive flavor in frying and spice pastes.', yield: 'Yield: 38-45%' },
      { emoji: '🫘', name: 'Sesame', description: 'Growing export crop in Sulawesi and Java. Premium cold-pressed sesame oil for both local cooking and international markets.', yield: 'Yield: 42-50%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for Indonesia',
    quoteTitle: 'Get an Oil Press Price Quote for Indonesia',
    quoteDesc: 'We offer competitive factory-direct pricing on all our oil press machines. Request a formal quote in Rupiah or USD, including shipping to Jakarta.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: '380V/50Hz standard, 220V available, 304 stainless upgrade' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'Sea freight to Tanjung Priok, Jakarta in 15-20 days with export docs' },
    ],
    quoteCta: 'Request a Price Quote',
    shippingTitle: 'Shipping Your Oil Press to Indonesia',
    shipping: { port: 'Tanjung Priok, Jakarta', transitTime: '15-20 days from China', cost: 'Ask us for current rates' },
    faqTitle: 'Oil Press Buying FAQ for Indonesia',
    faqs: [
      { question: 'How much does an oil press machine cost in Indonesia?', answer: 'Contact us for a Haonuo hydraulic oil press machine quote. Prices include voltage customization to 220V/50Hz for Indonesian electrical standards.' },
      { question: 'How long is shipping to Jakarta?', answer: 'Sea freight from Qingdao, China to Tanjung Priok Port, Jakarta takes 15-20 days. We handle all export documents. Contact us for current shipping costs.' },
      { question: 'Can the machine process coconut and palm kernel?', answer: 'Yes, Haonuo hydraulic oil presses are highly versatile and can process coconut (VCO), palm kernel, peanuts, sesame seeds, and more. Simply adjust the pressure and temperature settings for each material.' },
      { question: 'Is the machine suitable for VCO (Virgin Coconut Oil) production?', answer: 'Yes, the HN426 Cold Press model is designed specifically for cold pressing below 60°C, preserving the natural aroma and nutrients of coconut. 304 stainless steel construction is available for resistance to coconut water corrosion.' },
      { question: 'Is after-sales service available in Indonesia?', answer: 'We provide technical support via WhatsApp, a complete English installation manual, and video tutorials. Spare parts ship within 48 hours via DHL to Jakarta. For large orders, we can send a technician for on-site installation.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in Indonesia?',
    ctaDesc: 'Get a quote in Rupiah, Jakarta shipping estimates, and the right machine recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: "Hello Haonuo, I'm interested in your oil press machines for Indonesia",
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'Indonesia',
    clearance: {
      heading: 'Oil Press Import & Installation Readiness in Indonesia',
      intro: 'Machine imports go smoothly when documents and electrical specifications are prepared before the vessel departs. The three most common causes of extra cost are importer licensing, SNI conformity documents, and voltage mismatches.',
      stepsTitle: 'Three clearance checkpoints',
      steps: [
        { title: 'Importer Licensing', description: 'Registered importers require an API-U/API-P license and a customs identity number (NIK) integrated through INSW (Indonesia National Single Window). Work with a PPJK or a freight forwarder experienced in handling industrial machinery imports.' },
        { title: 'SNI & Technical Documents', description: 'For regulated categories, SNI marking and a certificate of conformity from an accredited certification body are required; products outside the mandatory list still undergo customs inspection under HS code 8479.82. We provide a factory document package — test reports, electrical diagrams, nameplate, and held certificates — to support this process.' },
        { title: 'Power & Ports', description: 'Indonesia\'s industrial supply is 380V three-phase, 50Hz — identical to our production standard; machines are built to the specification you confirm at ordering. Containers typically arrive at Tanjung Priok, Jakarta, then continue to Surabaya, Makassar, or Medan as needed.' },
      ],
      docsTitle: 'Planning tip',
      docs: [
        'Confirm on-site power supply and backup generator capacity before arrival',
        'Schedule shipping with customs clearance time in mind',
        'Mandatory SNI product list is updated periodically — always verify latest requirements',
        'Work with an experienced PPJK freight forwarder for machinery imports',
      ],
      powerNoteTitle: 'Power configuration',
      powerNote: 'Indonesia\'s industrial supply is 380V three-phase, 50Hz — identical to our production standard — machines are built to the specification you confirm at ordering. See the ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'The mandatory SNI product list is updated periodically — always verify the latest requirements with your PPJK before ordering.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in Indonesia',
      cases: [
        { tag: 'Central Java', tagLabel: 'VCO / Coconut', name: 'VCO Producer — Central Java', description: 'The HN426 with a 600mm food-grade barrel processes coconut meat into virgin coconut oil for export and local cosmetic markets.', stat: '600mm food-grade barrel' },
        { tag: 'North Sumatra', tagLabel: 'Palm Kernel', name: 'Palm Kernel Oil Mill — North Sumatra', description: 'The HN365 presses palm kernel into high-quality vegetable oil; the dense cake is sold as animal feed.', stat: 'Cake for animal feed' },
        { tag: 'East Java', tagLabel: 'Peanut', name: 'Peanut Oil SME — East Java', description: 'The HN325 serves home-based SMEs producing peanut oil for traditional markets and the food seasoning industry.', stat: 'Capacity: ~40 kg/batch' },
      ],
      footnote: 'Representative regional installation examples; actual configurations and results vary depending on material preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // PHILIPPINES
  // ────────────────────────────────────────────
  philippines: {
    title: 'Oil Press Machine in the Philippines',
    description: 'Oil press machine in the Philippines for VCO coconut, peanut and moringa. Built for 230V/60Hz supply; delivery to Manila, Cebu or Davao. Request a quote.',
    heroTitle: 'Oil Press Machine in the Philippines — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for coconut VCO, peanut, moringa, and sunflower oil production. Factory-direct pricing, shipping to Manila in 12-16 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in the Philippines',
    seeds: [
      { emoji: '🥥', name: 'Coconut (VCO)', description: "Philippines is the world's #2 coconut producer. Virgin coconut oil is a premium export product and growing domestic market.", yield: 'Yield: 55-65%' },
      { emoji: '🥜', name: 'Peanut/Groundnut', description: 'Popular cooking oil in Visayas and Mindanao regions. Local peanut oil commands premium for authentic Filipino cuisine.', yield: 'Yield: 38-45%' },
      { emoji: '🌻', name: 'Sunflower', description: 'Growing demand for health-conscious Filipino consumers. Imported seeds processed locally for premium cooking oil.', yield: 'Yield: 35-45%' },
      { emoji: '🌿', name: 'Moringa (Malunggay)', description: 'Filipino superfood. Cold-pressed moringa oil for health supplements and cosmetics. High-value niche market.', yield: 'Yield: 30-38%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for Philippines',
    quoteTitle: 'Get a Customized Oil Press Quote for Philippines',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in PHP or USD, including shipping to Manila.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: '230V/60Hz configuration with generator-ready options' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Manila with optional inter-island delivery' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to Philippines',
    shipping: { port: 'Manila (South Harbor) / Cebu', transitTime: '12-16 days from China', cost: 'Contact for current rates' },
    faqTitle: 'Oil Press Buying FAQ for Philippines',
    faqs: [
      { question: 'What is the price of oil press machine in Philippines?', answer: 'Contact Haonuo for factory-direct pricing for the Philippine market. We offer competitive rates with shipping to Manila included. Pricing available in PHP.' },
      { question: 'Can this machine produce Virgin Coconut Oil (VCO)?', answer: 'Yes, Haonuo hydraulic cold press machines are well-suited for VCO production. The low-temperature extraction (below 60°C) preserves the lauric acid content and natural coconut aroma required by Philippine National Standards for VCO.' },
      { question: 'What voltage is compatible in Philippines?', answer: 'We customize all machines for 220V/60Hz to match Philippine electrical standards. Our machines only need 2.2 KW motor power.' },
      { question: 'How long does shipping take to Philippines?', answer: 'Sea freight from Qingdao to Manila takes 12-16 days — one of the shortest shipping routes from China. We handle all export documentation.' },
      { question: 'Do you have customers in Philippines?', answer: 'Yes, Haonuo has multiple customers in the Philippines, primarily in Quezon, Laguna, and Cebu provinces for VCO and peanut oil production.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in Philippines?',
    ctaDesc: 'Get a free quotation in PHP, shipping estimate to Manila, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for Philippines',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'Philippines',
    clearance: {
      heading: 'Oil Press Delivery & Power Readiness in the Philippines',
      intro: 'For Philippine buyers the two practical questions are never paperwork-heavy: will the machine match our 60Hz supply? and how does it reach our province? Both are settled before the machine leaves our works.',
      stepsTitle: 'Key clearance and delivery points',
      steps: [
        { title: 'Electrical: 230V / 60Hz is Different', description: 'Philippine industrial supply runs at 230V, 60Hz (460V three-phase in larger factories) — a different frequency from China\'s 380V/50Hz grid. Motors, heaters and controls are specified to match your confirmed site supply at order stage, rather than adapted later with unreliable frequency converters. Generator sizing is confirmed at ordering, and single-phase locations should discuss the HN325-class machine and roaster power before building the line.' },
        { title: 'Logistics: Beyond Manila', description: 'Ocean containers arrive at Manila (South Harbor / Manila International Container Port). Machines bound for the Visayas or Mindanao continue by domestic feeder vessel or coastal truck-ferry routing: Cebu is the main transshipment hub for the Visayas; Cagayan de Oro & Davao serve Mindanao mills; General Santos is common for tuna-side and coconut processing regions. Allow extra days for inter-island transfer.' },
        { title: 'Customs Release', description: 'Customs release through the Bureau of Customs requires invoice, packing list and bill of lading, plus import permits where your business registration requires them. Use a broker experienced in provincial delivery and schedule around monsoon and typhoon months to avoid avoidable demurrage.' },
      ],
      docsTitle: 'Documentation we supply',
      docs: [
        'Commercial invoice and packing list',
        'Original bills of lading',
        'Certificate of origin',
        'Nameplate and electrical specification',
        'Factory test report',
      ],
      powerNoteTitle: 'Power and generator support',
      powerNote: 'Philippine industrial supply runs at 230V, 60Hz (460V three-phase in larger factories). Full details in our ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'Philippine electrical and customs procedures are revised periodically — confirm current BOC and local utility requirements with your broker and electrician before delivery.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in the Philippines',
      cases: [
        { tag: 'Quezon', tagLabel: 'Coconut / VCO', name: 'VCO Producer — Quezon Province', description: 'HN426 food-grade 600mm coconut press producing virgin coconut oil and fresh coconut milk for Luzon\'s VCO exporters.', stat: 'Food-grade 600mm barrel' },
        { tag: 'Pangasinan', tagLabel: 'Peanut Oil', name: 'Peanut Oil Mill — Luzon', description: 'HN325 small-batch peanut press supplying local public markets and pasalubong retailers in the Ilocos region.', stat: 'Capacity: ~40 kg/batch' },
        { tag: 'Davao', tagLabel: 'Coconut & Sesame', name: 'Coconut Oil Processor — Mindanao', description: 'HN365 running coconut and occasional sesame campaigns for export-grade VCO packed in Davao.', stat: 'Export-grade VCO' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // SOUTH AFRICA
  // ────────────────────────────────────────────
  'south-africa': {
    title: 'Oil Press Machine South Africa',
    description: 'Oil press machine in South Africa for sunflower, soybean and canola. NRCS LOA technical file supplied, 400V/50Hz builds, shipping to Durban. Request a quote.',
    heroTitle: 'Oil Press Machine in South Africa — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for sunflower, peanut, soybean, and canola oil production. Factory-direct pricing, shipping to Durban in 22-26 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in South Africa',
    seeds: [
      { emoji: '🌻', name: 'Sunflower', description: "South Africa's #1 oil crop. Widely grown in Free State and North West provinces for premium cooking oil.", yield: 'Yield: 35-45%' },
      { emoji: '🥜', name: 'Peanut', description: 'Popular cooking oil across South Africa. Rich nutty flavor well-suited for traditional cuisine and food manufacturing.', yield: 'Yield: 38-45%' },
      { emoji: '🫘', name: 'Soybean', description: 'Growing demand for soybean oil in food processing and animal feed industries across the country.', yield: 'Yield: 15-20%' },
      { emoji: '🌱', name: 'Canola/Rapeseed', description: "Western Cape's winter crop. High-quality canola oil for health-conscious consumers and export markets.", yield: 'Yield: 35-40%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for South Africa',
    quoteTitle: 'Get a Customized Oil Press Quote for South Africa',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in ZAR or USD, including shipping to Durban/Cape Town and estimated clearing costs.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: '400V/50Hz motors with NRCS LOA technical file support' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Durban or Cape Town with VAT documentation' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to South Africa',
    shipping: { port: 'Durban / Cape Town', transitTime: '22-26 days from China', cost: 'Ask us for current rates' },
    faqTitle: 'Oil Press Buying FAQ for South Africa',
    faqs: [
      { question: 'What is the price of an oil press machine in South Africa?', answer: 'Contact us for a customized quote for a complete Haonuo oil press setup including shipping to Durban or Cape Town. We provide competitive factory-direct pricing and can quote in ZAR (South African Rand) at current exchange rates.' },
      { question: 'What voltage does the oil press machine use in South Africa?', answer: "Haonuo oil press machines are customized for South Africa's 220V/50Hz power standard. Our motors are configured to match local electrical requirements, ensuring safe and efficient operation." },
      { question: 'How long does shipping take to Durban, South Africa?', answer: 'Sea freight from Qingdao, China to Durban or Cape Town takes 22-26 days. We handle all export documentation and can arrange CIF shipping for your convenience. Contact us for current shipping rates.' },
      { question: 'What is the oil yield for sunflower seeds in South Africa?', answer: "Sunflower is South Africa's #1 oil crop. With Haonuo hydraulic cold press machines, you can achieve 35-45% oil yield from sunflower seeds, producing high-quality cold-pressed sunflower oil that commands premium prices in the local market." },
      { question: 'What are the import procedures for oil press machines in South Africa?', answer: 'Oil press machines are classified under HS code 8479.82. South Africa requires an import permit from ITAC (International Trade Administration Commission). We provide all necessary documentation including certificates of origin, commercial invoices, and packing lists to facilitate smooth customs clearance.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in South Africa?',
    ctaDesc: 'Get a free quotation in ZAR, shipping estimate to Durban/Cape Town, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for South Africa',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'South Africa',
    clearance: {
      heading: 'Oil Press Compliance in South Africa: NRCS & Port Entry',
      intro: 'Electrical machinery imported into South Africa can require a Letter of Authority (LOA) from the National Regulator for Compulsory Specifications (NRCS) under the applicable SANS standard before customs release. Buyers who discover this at Durban harbour pay storage while the application catches up.',
      stepsTitle: 'Three clearance steps',
      steps: [
        { title: 'Confirm LOA Scope Early', description: 'Ask the NRCS or your import broker whether the press and its electrical controls fall under the relevant compulsory specification. If they do, the importer — or a registered manufacturer — submits the LOA application, ideally before the machine ships.' },
        { title: 'Build the Technical File', description: 'LOA applications are supported by nameplate data, a wiring diagram, test report and a description of safety guarding. We compile this file in the format compliance agents expect. Apply once for repeated imports of the same model where the scheme allows.' },
        { title: 'Specify the Correct Voltage', description: 'South African industrial three-phase supply is 400V, 50Hz — close to, but not the same as, nominal 380V grids. Motors and controls are built to order against your confirmed supply.' },
      ],
      docsTitle: 'Ports, duty and installation',
      docs: [
        'Machinery most often enters through Durban, Cape Town and Gqeberha (Port Elizabeth)',
        'SARS assesses duty and 15% VAT on the SAD501 entry; registered importers can normally reclaim input VAT',
        'South African insurers and factories may expect a site Certificate of Compliance from a registered electrician',
        'Brief your contractor before the machine arrives',
      ],
      powerNoteTitle: 'Power specification',
      powerNote: 'South African industrial three-phase supply is 400V, 50Hz — motors and controls are built to order against your confirmed supply. See the ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'NRCS scope changes as standards are updated — confirm whether an LOA applies to the exact model with your importer before placing the order.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations in South Africa',
      cases: [
        { tag: 'Free State', tagLabel: 'Sunflower Oil', name: 'Sunflower Oil Producer — Free State', description: 'HN365 processing the Free State sunflower harvest for artisanal cooking-oil brands sold at farm stalls and delis.', stat: 'Output: ~500 kg/day' },
        { tag: 'Limpopo', tagLabel: 'Groundnut Oil', name: 'Groundnut Oil Mill — Limpopo', description: 'HN325 cold-pressing groundnuts for farmers-market and health-shop channels in Polokwane and surrounding towns.', stat: 'Cold-press configuration' },
        { tag: 'Western Cape', tagLabel: 'Olive Oil', name: 'Olive Oil Processor — Western Cape', description: 'HN426 cold-press unit for boutique olive oil and olive-pomace extraction at small wineland and Karoo estates.', stat: 'Boutique cold press' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // MIDDLE EAST
  // ────────────────────────────────────────────
  'middle-east': {
    title: 'Oil Press Machine in the Middle East',
    description: 'Oil press machine in the Middle East for sesame, olive and walnut. SABER, G-Mark and ECAS certification support for Saudi Arabia and UAE. Request a quote.',
    heroTitle: 'Oil Press Machine in the Middle East — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for sesame, walnut, and olive oil production across Saudi Arabia, the UAE and wider Gulf markets. Factory-direct supply, shipping to Jeddah and Dubai in 20-25 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in the Middle East',
    seeds: [
      { emoji: '🫘', name: 'Sesame', description: 'Sesame oil is a staple in Middle Eastern cuisine and traditional medicine. Cold-pressed sesame oil (tahini oil) commands premium prices across the region.', yield: 'Yield: 42-54%' },
      { emoji: '🌰', name: 'Walnut', description: 'Walnut oil is prized for its omega-3 content and rich flavor. Central Asia and the Middle East are major consumers of premium cold-pressed walnut oil.', yield: 'Yield: 50-62%' },
      { emoji: '🫒', name: 'Olive', description: 'Extra virgin olive oil production is growing rapidly in Saudi Arabia, Jordan, and Tunisia. Cold pressing below 27°C is essential for EVOO classification.', yield: 'Yield: 12-26%' },
      { emoji: '🌰', name: 'Almond', description: 'Premium cold-pressed almond oil for cosmetics and gourmet cooking. Gulf countries are major importers of Californian and Iranian almonds.', yield: 'Yield: 45-55%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for the Middle East',
    quoteTitle: 'Get a Customized Oil Press Quote for the Middle East',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Get a formal quotation in SAR or USD, including shipping to Jeddah or Dubai.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: 'SABER/G-Mark/ECAS certification support for GCC countries' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Jeddah or Jebel Ali with full export docs' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to the Middle East',
    shipping: { port: 'Jeddah Islamic Port / Jebel Ali (Dubai)', transitTime: '20-25 days from China', cost: 'Request current rates' },
    faqTitle: 'Oil Press Buying FAQ for the Middle East',
    faqs: [
      { question: 'Is the oil press machine halal-certified?', answer: 'Our machines are manufactured from food-grade materials and produce 100% pure, natural oil with no chemical processing. The cold press method is inherently halal as it involves only mechanical extraction. We can provide material certificates and factory documentation to support halal certification of your oil products.' },
      { question: 'Can the machine produce cold-pressed sesame oil (tahini oil)?', answer: 'Yes, our HN426 Cold Press model is specifically designed for cold pressing sesame at temperatures below 60°C. This preserves the natural flavor and nutritional value of sesame oil, which is highly valued in Middle Eastern cuisine and traditional medicine.' },
      { question: 'How long does shipping take to Saudi Arabia and UAE?', answer: 'Sea freight from Qingdao, China to Jeddah Islamic Port (Saudi Arabia) or Jebel Ali Port (Dubai, UAE) takes 20-25 days. We handle all export documentation including certificate of origin. Contact us for current shipping rates.' },
      { question: 'Can the machine press olives for extra virgin olive oil?', answer: 'Yes, our cold press hydraulic press can be used for the final pressing step in olive oil production. The HN426 model maintains temperatures below 27°C, which is required for extra virgin olive oil (EVOO) classification. Additional equipment for olive crushing and malaxation is also available.' },
      { question: 'What voltage is required for Middle East countries?', answer: 'Most Middle East countries use 220V/50Hz (UAE, Iran, Iraq) or 220V/60Hz (Saudi Arabia). Haonuo customizes the electrical system for your specific country at no extra charge. Simply specify your location when ordering.' },
      { question: 'What is the price of an oil press machine in Saudi Arabia and the UAE?', answer: 'Every quotation is prepared for the specific configuration — model, slotted or drilled barrel, roaster and filter options — and the destination port, whether Jeddah, Dammam or Jebel Ali. Send us your seed type and daily production target, and we will reply with a formal CIF quotation for your country.' },
    ],
    ctaTitle: 'Ready to Start Your Premium Oil Press Business in the Middle East?',
    ctaDesc: 'Request a free quotation, shipping estimate to Jeddah or Dubai, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for the Middle East',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'Middle East',
    clearance: {
      heading: 'Oil Presses for the Gulf: SABER, G-Mark and ECAS Certification',
      intro: 'Gulf markets are well organised but certification-driven: Saudi Arabia and the UAE each operate conformity schemes that must be completed before the goods arrive, while Jebel Ali also serves buyers who re-export across the region.',
      stepsTitle: 'GCC clearance and certification steps',
      steps: [
        { title: 'Saudi Arabia — SABER', description: 'Regulated products are registered on the SABER platform with a Product Certificate, followed by a Shipment (Conformity) Certificate for each consignment, issued by an approved certification body. Electrical components may fall under Gulf low-voltage technical regulations carrying the G-Mark; the applicable route depends on the machine\'s exact configuration and is confirmed before production.' },
        { title: 'UAE — ECAS / EQM', description: 'Products in regulated categories require conformity registration through the approved UAE route (ECAS/EQM). Jebel Ali Port and JAFZA are the common landing points. The free-zone route is widely used for onward re-export to Oman, Qatar, Kuwait and Bahrain.' },
        { title: 'Wider Gulf & Red Sea', description: 'Direct Saudi calls serve King Abdullah/Dammam and Jeddah Islamic Port; Hamad Port serves Qatar. Each destination applies its own conformity expectations even where transiting a neighbour\'s port. Industrial supply across the Gulf is 220-240V, 50Hz (380/400V three-phase), which we specify to order.' },
      ],
      docsTitle: 'Documentation we supply for certification',
      docs: [
        'Manufacturer technical file and test reports',
        'Nameplate data and electrical specification',
        'Wiring information and declarations',
        'Certificate of origin and commercial invoice',
        'Factory documentation for SABER/ECAS applications',
      ],
      powerNoteTitle: 'How we support certification',
      powerNote: 'Tell us the destination country at quotation stage so the correct certificate route is planned before manufacture. We supply the manufacturer technical file that approved certification bodies request. Confirm the current scope for the exact model with your importer, as Gulf technical regulations are updated periodically. See the ',
      powerNoteLink: 'electrical requirements guide',
      disclaimer: 'Gulf technical regulations are updated periodically — confirm the current scope for the exact model with your importer before placing the order.',
    },
    cases: {
      heading: 'Typical Hydraulic Oil Press Installations Across the Middle East',
      cases: [
        { tag: 'Saudi Arabia', tagLabel: 'Sesame / Tahini', name: 'Sesame & Tahini Producer — Western Region', description: 'HN325 pressing premium roasted sesame for tahini and halawa production supplied to Jeddah and Riyadh food manufacturers.', stat: 'Yield: 46-50%' },
        { tag: 'UAE', tagLabel: 'Walnut & Almond Oil', name: 'Premium Nut Oil Processor — Dubai', description: 'HN426 cold-pressing walnut and almond at controlled temperature for gourmet retail and hotel supply in the Gulf.', stat: 'Cold-press configuration' },
        { tag: 'Levant', tagLabel: 'Olive Oil', name: 'Olive Oil Mill — Levant Region', description: 'HN365 batch press handling smallholder olives and olive pomace for extra-virgin and blended olive oil sold in regional markets.', stat: 'Olive / pomace batches' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },

  // ────────────────────────────────────────────
  // INDIA  (no clearance section)
  // ────────────────────────────────────────────
  india: {
    title: 'Oil Press Machine India — Price, Capacity & Import Guide',
    description: 'Oil press machine in India for mustard, groundnut and sesame. Modern hydraulic alternative to kachi ghani; 415V/50Hz, ships to Mundra/JNPT. Request a quote.',
    heroTitle: 'Oil Press Machine in India — Factory Direct',
    heroDesc: 'Hydraulic oil press machines for mustard, sesame, peanut, and coconut oil production. Factory-direct pricing, shipping to Mumbai in 18-22 days, 1-year warranty.',
    seedsTitle: 'Popular Oilseeds for Hydraulic Pressing in India',
    seeds: [
      { emoji: '🟡', name: 'Mustard/Rapeseed', description: "India's most widely used cooking oil (~5.5M tons/year). Pungent flavor important for North Indian cuisine.", yield: 'Yield: 30-38%' },
      { emoji: '🌿', name: 'Sesame', description: 'Premium cold-pressed "til oil" for South Indian cooking and Ayurvedic use.', yield: 'Yield: 42-50%' },
      { emoji: '🥜', name: 'Peanut/Groundnut', description: 'Western and Southern India staple. Gujarat is India\'s largest producer.', yield: 'Yield: 38-45%' },
      { emoji: '🌴', name: 'Coconut', description: "Kerala's primary cooking oil. Cold-pressed virgin coconut oil growing market.", yield: 'Yield: 55-65%' },
      { emoji: '🌻', name: 'Sunflower', description: 'Karnataka, Andhra Pradesh, Maharashtra. Light neutral flavor, high in vitamin E.', yield: 'Yield: 32-40%' },
      { emoji: '🫘', name: 'Soybean', description: "Madhya Pradesh & Maharashtra. India's largest oilseed by area. Used for vanaspati and refined oil.", yield: 'Yield: 16-20%' },
      { emoji: '🌱', name: 'Cottonseed', description: 'Gujarat, Maharashtra, Telangana. Byproduct of cotton farming. Refined cottonseed oil for cooking.', yield: 'Yield: 14-18%' },
      { emoji: '🧈', name: 'Castor', description: 'Gujarat & Rajasthan. India produces ~85% of world\'s castor oil. Industrial and medicinal use.', yield: 'Yield: 45-55%' },
    ],
    productsTitle: 'Recommended Hydraulic Oil Presses for India',
    quoteTitle: 'Get a Customized Oil Press Quote for India',
    quoteDesc: 'We provide competitive factory-direct pricing for all our oil press machines. Request a formal quotation in INR or USD, including shipping to Mumbai and estimated customs duties.',
    quoteCards: [
      { emoji: '🏭', title: 'Factory Quote', description: 'Competitive factory-direct pricing with no middleman markup' },
      { emoji: '📋', title: 'Spec Customization', description: '415V/50Hz three-phase standard, generator-ready' },
      { emoji: '🚢', title: 'Shipping Arrangement', description: 'CIF shipping to Mundra, Nhava Sheva or Chennai port' },
    ],
    quoteCta: 'Get Factory Price',
    shippingTitle: 'Shipping Your Oil Press to India',
    shipping: { port: 'Nhava Sheva (Mumbai) / Chennai / Mundra', transitTime: '18-22 days from China', cost: 'Contact for current rates' },
    faqTitle: 'Oil Press Buying FAQ for India',
    faqs: [
      { question: 'What is the price of oil press machine in India?', answer: 'Contact Haonuo for factory-direct pricing for the Indian market. We offer competitive rates with shipping to Mumbai, Chennai, or Mundra port included. Pricing available in INR.' },
      { question: 'Can the machine press mustard seeds for kachi ghani oil?', answer: 'Yes, Haonuo hydraulic oil presses are well-suited for traditional kachi ghani (cold-pressed mustard) oil production. The cold press technology helps preserve the pungent flavor and traditional characteristics that Indian consumers prefer.' },
      { question: 'What voltage do Haonuo machines use in India?', answer: 'We customize all machines for 220V/50Hz to match Indian electrical standards. Our machines only need 2.2 KW, compatible with standard Indian power supply or a 5 KVA generator.' },
      { question: 'How long does shipping take to India?', answer: 'Sea freight from Qingdao to Mumbai (Nhava Sheva) takes 18-22 days. We handle all export documentation and can arrange CIF shipping.' },
      { question: 'Do you provide GST and import documentation support?', answer: 'We provide all necessary export documents including commercial invoice, packing list, bill of lading, and certificate of origin. Your customs broker can use these for smooth GST compliance and clearance.' },
      { question: 'Do you make 6-bolt screw expellers or small home oil presses?', answer: 'No. Haonuo manufactures hydraulic oil presses only. Our smallest model is the HN300 — a 300-ton press with a 1.2-1.5 ton frame — so we do not supply 6-bolt or 9-bolt screw expellers, hand-operated kolhu/ghani, or table-top home oil presses.' },
    ],
    ctaTitle: 'Ready to Start Your Oil Press Business in India?',
    ctaDesc: 'Get a free quotation in INR, shipping estimate to Mumbai, and professional equipment recommendation.',
    ctaButton: 'Request My Factory Quote Now',
    whatsappText: 'Hello Haonuo, I am interested in oil press machine for India',
    breadcrumbHome: 'Home',
    breadcrumbMarkets: 'Markets',
    breadcrumbMarket: 'India',
    cases: {
      heading: 'Oil Press Customer Cases in India',
      cases: [
        { tag: 'Gujarat', tagLabel: 'Peanut Oil', name: 'Groundnut Oil Mill — Rajkot', description: 'Installed HN400 for cold-pressed groundnut oil. Processes ~500 kg/day, sold locally as premium "kachi ghani" style oil.', stat: 'ROI: ~14 months' },
        { tag: 'Rajasthan', tagLabel: 'Mustard Oil', name: 'Mustard Oil Producer — Jaipur', description: 'HN355 for traditional mustard cold pressing. Produces pungent kachi ghani oil preferred by local consumers.', stat: 'Output: ~400 kg/day' },
        { tag: 'Tamil Nadu', tagLabel: 'Sesame Oil', name: 'Til Oil Manufacturer — Coimbatore', description: 'Specialized sesame press for cold-pressed gingelly oil. Serves Ayurvedic and South Indian culinary markets.', stat: 'Yield: 45-48%' },
      ],
      footnote: 'Representative regional installations; actual configurations and outputs vary by seed preparation and buyer requirements.',
    },
  },
};
