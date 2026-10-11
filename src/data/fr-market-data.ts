// French market page data for [locale]/markets/[market].astro
// All translations for the 11 market sub-pages

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

export const frMarketData: Record<string, MarketData> = {
  nigeria: {
    title: 'Presse à Huile au Nigéria',
    description: 'Presse à huile au Nigéria pour arachide, palmiste et sésame. Assistance au dédouanement SONCAP, machines prêtes pour groupe électrogène, expédition vers Lagos. Demandez un devis usine.',
    heroTitle: 'Presse à Huile au Nigéria — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile d\'arachide, de palmiste, de sésame et de coton. Prix direct usine, expédition vers Lagos en 25-30 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires au Nigéria',
    seeds: [
      { emoji: '🥜', name: 'Arachides', description: 'L\'une des huiles de cuisson les plus populaires du Nigéria. Environ 40-50% de teneur en huile (selon la variété). Saveur de noisette riche pour la cuisine ouest-africaine.', yield: 'Rendement : 38-45%' },
      { emoji: '🌴', name: 'Noix de Palme', description: 'Sous-produit abondant des plantations de palmiers à huile. 48-52% de teneur en huile. Forte demande sur le marché.', yield: 'Rendement : 44-48%' },
      { emoji: '🫘', name: 'Sésame', description: 'Opportunité d\'exportation croissante. L\'huile de sésame pressée à froid se négocie à des prix premium au Moyen-Orient et en Europe.', yield: 'Rendement : 42-50%' },
      { emoji: '☁️', name: 'Graines de Coton', description: 'Le Nigéria est le plus grand producteur de coton d\'Afrique. Huile de cuisson abordable avec un point de fumée élevé.', yield: 'Rendement : 15-34%' },
    ],
    productsTitle: 'Machines Recommandées pour le Nigéria',
    quoteTitle: 'Obtenez un Devis Personnalisé pour le Nigéria',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en Naira ou en USD, incluant l\'expédition vers Lagos et les coûts de dédouanement estimés.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas de marge intermédiaire — économisez par rapport aux distributeurs locaux (les économies réelles varient)' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en Naira', description: 'Nous pouvons établir un devis en Naira au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers le Nigéria',
    shipping: { port: 'Apapa / Tin Can, Lagos', transitTime: '25-30 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le droit d\'importation pour les presses à huile au Nigéria ?', answer: 'Les presses à huile sont classées sous le code SH 8479.82. Les taux de droits d\'importation varient et doivent être confirmés avec un agent en douane agréé. Travailler avec un agent en douane agréé assure une classification correcte et minimise vos charges douanières.' },
      { question: 'La presse à huile peut-elle fonctionner avec un groupe électrogène au Nigéria ?', answer: 'Oui. Les presses à huile hydrauliques Haonuo nécessitent seulement 2,2 KW de puissance motrice, ce qui les rend entièrement compatibles avec un groupe électrogène de 5-7 KVA. Nous pouvons personnaliser le système électrique pour 220V/50Hz afin de correspondre aux normes nigérianes. Veuillez confirmer vos besoins en tension lors de la commande.' },
      { question: 'Combien de temps prend l\'expédition vers Lagos, Nigéria ?', answer: 'Le fret maritime de Qingdao, Chine vers Lagos (port d\'Apapa/Tin Can) prend 25-30 jours. Nous gérons toute la documentation d\'exportation et pouvons organiser l\'expédition CIF pour votre commodité. Contactez-nous pour les tarifs d\'expédition actuels.' },
      { question: 'Quel est le prix d\'une machine à huile d\'arachide au Nigéria ?', answer: 'Contactez-nous pour un devis personnalisé pour une installation complète de presse à huile d\'arachide Haonuo incluant l\'expédition et le dédouanement. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en Naira.' },
      { question: 'Fournissez-vous un support d\'installation au Nigéria ?', answer: 'Oui. Nous fournissons des manuels d\'installation détaillés, des tutoriels vidéo et un accompagnement technique à distance via WhatsApp. Pour les grosses commandes, nous pouvons envoyer un technicien dans vos installations à Lagos, Abuja ou Kano pour une installation et une formation sur site à prix coûtant.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Nigéria ?',
    ctaDesc: 'Obtenez un devis gratuit en Naira, une estimation d\'expédition vers Lagos et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Nigéria. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Nigéria',
    clearance: {
      heading: 'Importation & Dédouanement au Nigéria',
      intro: 'Le dédouanement d\'une presse à huile par les ports de Lagos est simple lorsque les documents sont préparés avant l\'expédition — et coûteux lorsqu\'ils ne le sont pas. La plupart des retards que rencontrent nos clients proviennent d\'un dossier SONCAP incomplet, jamais de l\'équipement lui-même.',
      stepsTitle: 'La séquence de dédouanement en quatre étapes',
      steps: [
        { title: 'Certificat de Produit (PC)', description: 'Votre importateur obtient un PC auprès d\'un organisme de certification accrédité SONCAP avant l\'expédition de la machine.' },
        { title: 'Certificat SONCAP (SC)', description: 'Inspection et vérification avant expédition dans nos ateliers ; le SC est délivré sur la base du PC et voyage avec les documents d\'expédition.' },
        { title: 'e-Form M', description: 'La banque de l\'importateur ouvre un e-Form M à l\'aide de la facture proforma, du PC et du SC — la pièce maîtresse de toute importation réglementée.' },
        { title: 'PAAR et mainlevée', description: 'Les Douanes nigérianes émettent le Pre-Arrival Assessment Report (les machines de ce type sont couramment classées près du SH 8479.82) ; le fret est retiré à Apapa ou Tin Can Island.' },
      ],
      docsTitle: 'Le dossier documentaire expédié avec la machine',
      docs: [
        'Facture commerciale et liste de colisage détaillée',
        'Connaissements originaux / telex release',
        'Coordination SONCAP PC et SC avant l\'appareillage',
        'Rapport d\'essai du fabricant et documentation CE lorsqu\'elle est détenue',
        'Plaque signalétique, spécifications électriques et informations de câblage',
      ],
      powerNoteTitle: 'Note électrique',
      powerNote: 'Les machines sont fournies en standard pour du triphasé 220V/380V, 50Hz — le même réseau que celui des zones industrielles nigérianes — et fonctionnent de manière fiable sur groupe électrogène lors des coupures du réseau. Consultez notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Les procédures de dédouanement sont mises à jour périodiquement — confirmez toujours la dernière liste de contrôle SONCAP et Form M auprès d\'un agent en douane agréé au Nigéria. Nous coordonnons le calendrier d\'inspection avec l\'organisme de certification afin que le dossier soit complet avant l\'appareillage du navire.',
    },
    cases: {
      heading: 'Installations Types au Nigéria',
      cases: [
        { tag: 'Kano', tagLabel: 'Huile d\'Arachide', name: 'Producteur d\'Huile d\'Arachide — Kano', description: 'HN365 pressant à froid des arachides pour le marché du nord du Nigéria à ~600 kg/jour, vendues comme huile d\'arachide pressée à froid premium sur les marchés locaux.', stat: 'Production : ~600 kg/jour' },
        { tag: 'État d\'Ondo', tagLabel: 'Huile de Palmiste', name: 'Huilerie de Palmiste — Akure', description: 'Presse HN426 haute pression extrayant l\'huile de palmiste de l\'abondante récolte de palmiers à huile ; le tourteau dur de palmiste est revendu comme aliment du bétail.', stat: 'Rendement : 45-47%' },
        { tag: 'État du Niger', tagLabel: 'Coton & Sésame', name: 'Transformateur d\'Huiles Multigraines — Minna', description: 'HN500 traitant des campagnes de graines de coton et de sésame sur une ligne partagée, avec permutation des fûts entre types de graines selon la saison.', stat: 'Campagnes multigraines' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  india: {
    title: 'Presse à Huile en Inde',
    description: 'Presse à huile en Inde pour moutarde, arachide et sésame. Une alternative hydraulique moderne aux machines kachi ghani ; 415V/50Hz, expédition vers Mundra/JNPT. Demandez un devis.',
    heroTitle: 'Presse à Huile en Inde — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de moutarde, de sésame, d\'arachide et de coco. Prix direct usine, expédition vers Mumbai en 18-22 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires en Inde',
    seeds: [
      { emoji: '🟡', name: 'Moutarde', description: 'Le kachi ghani (pressage à froid de moutarde) est une tradition culinaire indienne. Environ 33-40% de teneur en huile. Saveur piquante distinctive pour la cuisine nord-indienne.', yield: 'Rendement : 30-38%' },
      { emoji: '🫘', name: 'Sésame', description: 'L\'huile de sésame est prisée dans le sud de l\'Inde et à l\'exportation. Pressée à froid, elle conserve sa saveur de noisette et ses bienfaits pour la santé.', yield: 'Rendement : 42-50%' },
      { emoji: '🥜', name: 'Arachide', description: 'L\'huile d\'arachide est un aliment de base dans les foyers indiens. 40-50% de teneur en huile. Point de fumée élevé adapté pour la friture.', yield: 'Rendement : 38-45%' },
      { emoji: '🥥', name: 'Coco', description: 'L\'huile de coco vierge est en forte demande pour la cuisine, les cosmétiques et l\'Ayurveda. Les pressoirs hydrauliques à froid préservent la qualité VCO.', yield: 'Rendement : 55-65%' },
    ],
    productsTitle: 'Machines Recommandées pour l\'Inde',
    quoteTitle: 'Obtenez un Devis Personnalisé pour l\'Inde',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en INR ou en USD, incluant l\'expédition vers Mumbai.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — vous obtenez le meilleur prix directement du fabricant' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + documentation GST incluse' },
      { emoji: '💬', title: 'Devis en Roupies Indiennes', description: 'Nous pouvons établir un devis en INR au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers l\'Inde',
    shipping: { port: 'Nhava Sheva (Mumbai) / Chennai / Mundra', transitTime: '18-22 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile en Inde ?', answer: 'Contactez Haonuo pour des prix direct usine pour le marché indien. Nous proposons des tarifs compétitifs incluant l\'expédition vers Mumbai, Chennai ou le port de Mundra. Devis disponible en INR.' },
      { question: 'La machine peut-elle presser les graines de moutarde pour produire de l\'huile kachi ghani ?', answer: 'Oui, les presses à huile hydrauliques Haonuo sont parfaitement adaptées à la production traditionnelle d\'huile kachi ghani (moutarde pressée à froid). La technologie de pressage à froid aide à préserver la saveur piquante et les caractéristiques traditionnelles que les consommateurs indiens apprécient.' },
      { question: 'Quelle tension utilisent les machines Haonuo en Inde ?', answer: 'Nous adaptons toutes les machines en 220V/50Hz pour correspondre aux normes électriques indiennes. Nos machines ne nécessitent que 2,2 KW, compatibles avec l\'alimentation électrique indienne standard ou un groupe électrogène de 5 KVA.' },
      { question: 'Combien de temps prend l\'expédition vers l\'Inde ?', answer: 'Le fret maritime de Qingdao vers Mumbai (Nhava Sheva) prend 18-22 jours. Nous gérons toute la documentation d\'exportation et pouvons organiser l\'expédition CIF.' },
      { question: 'Fournissez-vous un support pour la documentation GST et l\'importation ?', answer: 'Nous fournissons tous les documents d\'exportation nécessaires, y compris la facture commerciale, la liste de colisage, le connaissement et le certificat d\'origine. Votre commissionnaire en douane peut les utiliser pour une conformité GST et un dédouanement en douceur.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile en Inde ?',
    ctaDesc: 'Obtenez un devis gratuit en INR, une estimation d\'expédition vers Mumbai et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour l\'Inde. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Inde',
    cases: {
      heading: 'Cas Clients en Inde',
      cases: [
        { tag: 'Gujarat', tagLabel: 'Huile d\'Arachide', name: 'Huilerie d\'Arachide — Rajkot', description: 'Installation d\'une HN400 pour l\'huile d\'arachide pressée à froid. Traite ~500 kg/jour, vendue localement comme huile de style "kachi ghani" premium.', stat: 'ROI : ~14 mois' },
        { tag: 'Rajasthan', tagLabel: 'Huile de Moutarde', name: 'Producteur d\'Huile de Moutarde — Jaipur', description: 'HN355 pour le pressage traditionnel de moutarde à froid. Produit une huile kachi ghani piquante préférée des consommateurs locaux.', stat: 'Production : ~400 kg/jour' },
        { tag: 'Tamil Nadu', tagLabel: 'Huile de Sésame', name: 'Fabricant d\'Huile de Til — Coimbatore', description: 'Presse à sésame spécialisée pour l\'huile de gingelly pressée à froid. Dessert les marchés ayurvédiques et culinaires de l\'Inde du Sud.', stat: 'Rendement : 45-48%' },
      ],
      footnote: '',
    },
  },

  indonesia: {
    title: 'Presse à Huile en Indonésie',
    description: 'Presse à huile hydraulique en Indonésie pour coco, palmiste et arachide. Documents d\'importation API/SNI, spécification 380V/50Hz, expédition vers Jakarta. Demandez un devis.',
    heroTitle: 'Presse à Huile en Indonésie — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de coco (VCO), de palmiste et d\'arachide. Prix direct usine, expédition vers Jakarta en 15-20 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires en Indonésie',
    seeds: [
      { emoji: '🥥', name: 'Coco (VCO)', description: 'L\'Indonésie est le premier producteur mondial d\'huile de coco. L\'huile de coco vierge (VCO) se négocie à des prix premium sur les marchés internationaux. Pressage à froid en dessous de 50°C.', yield: 'Rendement : 60-65%' },
      { emoji: '🌴', name: 'Palmiste', description: 'Sous-produit abondant de l\'industrie du palmier à huile. 48-52% de teneur en huile. Marché intérieur et d\'exportation fort.', yield: 'Rendement : 44-48%' },
      { emoji: '🥜', name: 'Arachide', description: 'L\'huile d\'arachide est populaire dans la cuisine indonésienne. 40-50% de teneur en huile. Saveur riche pour les sauces et la friture.', yield: 'Rendement : 38-45%' },
    ],
    productsTitle: 'Machines Recommandées pour l\'Indonésie',
    quoteTitle: 'Obtenez un Devis Personnalisé pour l\'Indonésie',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en IDR ou en USD, incluant l\'expédition vers Jakarta.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en Roupies Indonésiennes', description: 'Nous pouvons établir un devis en IDR au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers l\'Indonésie',
    shipping: { port: 'Tanjung Priok (Jakarta)', transitTime: '15-20 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile en Indonésie ?', answer: 'Contactez-nous pour un devis de presse à huile hydraulique Haonuo. Le prix inclut la personnalisation de la tension en 220V/50Hz pour les normes électriques indonésiennes.' },
      { question: 'Combien de temps prend l\'expédition vers Jakarta ?', answer: 'Le fret maritime de Qingdao, Chine vers le port de Tanjung Priok, Jakarta prend 15-20 jours. Nous gérons tous les documents d\'exportation. Contactez-nous pour les frais d\'expédition actuels.' },
      { question: 'La machine peut-elle être utilisée pour la coco et le palmier ?', answer: 'Oui, la presse hydraulique Haonuo est très polyvalente et peut traiter la coco (VCO), le palmiste, l\'arachide, le sésame et bien plus encore. Il suffit d\'ajuster les réglages de pression et de température pour chaque type de matière.' },
      { question: 'La machine convient-elle à la production de VCO (huile de coco vierge) ?', answer: 'Oui, le modèle HN426 Cold Press est conçu spécifiquement pour le pressage à froid à des températures inférieures à 60°C, préservant l\'arôme et les nutriments naturels de la coco. Une construction en acier inoxydable 304 est disponible pour résister à la corrosion de l\'eau de coco.' },
      { question: 'Y a-t-il un service après-vente en Indonésie ?', answer: 'Nous fournissons un support technique via WhatsApp, des manuels d\'installation complets en anglais et des tutoriels vidéo. Les pièces de rechange sont expédiées sous 48 heures par DHL vers Jakarta. Pour les grosses commandes, nous pouvons envoyer un technicien pour l\'installation sur votre site.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile en Indonésie ?',
    ctaDesc: 'Obtenez un devis gratuit en IDR, une estimation d\'expédition vers Jakarta et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour l\'Indonésie. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Indonésie',
    clearance: {
      heading: 'Exigences d\'Importation & Préparation de l\'Installation en Indonésie',
      intro: 'L\'importation d\'une machine se déroule sans encombre lorsque les documents et les spécifications électriques sont préparés avant le départ du navire. Les trois causes les plus fréquentes de coûts supplémentaires sont l\'autorisation d\'importation, les documents de conformité (SNI) et une tension inadaptée.',
      stepsTitle: 'Les trois points de vigilance',
      steps: [
        { title: 'Autorisation d\'importation', description: 'L\'importateur enregistré doit disposer d\'une licence API-U/API-P et d\'un numéro d\'identification douanier (NIK) intégré via l\'INSW (Indonesia National Single Window). Faites appel à un agent PPJK ou à un transitaire habitué aux importations de machines industrielles.' },
        { title: 'SNI & documents techniques', description: 'Pour les catégories soumises à obligation, la marque SNI et un certificat de conformité délivré par un organisme de certification accrédité sont requis ; les produits hors liste obligatoire passent tout de même le contrôle douanier sous la position SH environ 8479.82. Nous fournissons un pack documentaire usine pour appuyer ce processus.' },
        { title: 'Électricité & ports', description: 'L\'alimentation industrielle indonésienne est de 380V triphasé, 50Hz, identique à notre standard de fabrication ; les machines sont construites selon les spécifications que vous confirmez à la commande. Les conteneurs arrivent généralement à Tanjung Priok (Jakarta), puis sont acheminés vers Surabaya, Makassar ou Medan selon les besoins.' },
      ],
      docsTitle: 'Pack documentaire fourni par l\'usine',
      docs: [
        'Rapport d\'essai',
        'Diagrammes électriques',
        'Plaque signalétique',
        'Certificats disponibles',
      ],
      powerNoteTitle: 'Conseil de planification',
      powerNote: 'Vérifiez la puissance électrique disponible et la capacité du groupe électrogène de secours sur site avant l\'arrivée de la machine, et choisissez un calendrier d\'expédition qui tient compte du processus de dédouanement. Les détails complets figurent dans notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'La liste des produits soumis à la marque SNI obligatoire est mise à jour périodiquement — confirmez toujours les dernières exigences auprès de votre agent PPJK avant de commander.',
    },
    cases: {
      heading: 'Installations Types en Indonésie',
      cases: [
        { tag: 'Java Centrale', tagLabel: 'VCO / Coco', name: 'Producteur de VCO — Java Centrale', description: 'La machine HN426 à fût food-grade de 600mm transforme la chair de coco en huile de coco vierge pour l\'exportation et le marché local des cosmétiques.', stat: 'Fût food-grade 600mm' },
        { tag: 'Sumatra du Nord', tagLabel: 'Palmiste', name: 'Huilerie de Palmiste — Sumatra du Nord', description: 'HN365 pressant le palmiste pour une huile végétale de haute qualité ; le tourteau compact est vendu comme aliment du bétail.', stat: 'Tourteau pour aliment du bétail' },
        { tag: 'Java Est', tagLabel: 'Arachide', name: 'PME d\'Huile d\'Arachide — Java Est', description: 'HN325 au service de PME artisanales produisant de l\'huile d\'arachide pour le marché traditionnel et l\'industrie des condiments alimentaires.', stat: 'Capacité : ~40 kg/batch' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  pakistan: {
    title: 'Presse à Huile au Pakistan',
    description: 'Presse à huile au Pakistan pour tournesol, moutarde et sésame. Documentation de dédouanement WeBOC et support d\'inspection, constructions 220-240V, expédition vers Karachi. Demandez un devis.',
    heroTitle: 'Presse à Huile au Pakistan — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de tournesol, de moutarde, de sésame et de coton. Prix direct usine, expédition vers Karachi en 20-25 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires au Pakistan',
    seeds: [
      { emoji: '🌻', name: 'Tournesol', description: 'Le tournesol est une culture oléagineuse en croissance au Pakistan. 35-45% de teneur en huile. L\'huile de tournesol est de plus en plus prisée pour la cuisson.', yield: 'Rendement : 35-45%' },
      { emoji: '🟡', name: 'Moutarde', description: 'L\'huile de moutarde est traditionnellement utilisée dans la cuisine pakistanaise. Pressage à froid pour préserver la saveur authentique.', yield: 'Rendement : 30-38%' },
      { emoji: '🫘', name: 'Sésame', description: 'Le sésame est cultivé dans les provinces du Sind et du Pendjab. L\'huile pressée à froid se négocie à des prix premium.', yield: 'Rendement : 42-50%' },
      { emoji: '☁️', name: 'Graines de Coton', description: 'Le Pakistan est le 4e producteur mondial de coton. L\'huile de coton est une source d\'huile de cuisson abordable.', yield: 'Rendement : 15-34%' },
    ],
    productsTitle: 'Machines Recommandées pour le Pakistan',
    quoteTitle: 'Obtenez un Devis Personnalisé pour le Pakistan',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en PKR ou en USD, incluant l\'expédition vers Karachi.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en Roupies Pakistanaises', description: 'Nous pouvons établir un devis en PKR au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers le Pakistan',
    shipping: { port: 'Karachi Port / Port Qasim', transitTime: '20-25 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile au Pakistan ?', answer: 'Contactez Haonuo pour des prix direct usine pour le marché pakistanais. Nous proposons des tarifs compétitifs incluant l\'expédition vers Karachi. Devis disponible en PKR.' },
      { question: 'La machine peut-elle extraire efficacement l\'huile de tournesol ?', answer: 'Oui, les presses à huile hydrauliques Haonuo atteignent un rendement de 35-45% sur les graines de tournesol. La méthode de pressage à froid préserve la saveur légère appréciée dans la cuisine pakistanaise.' },
      { question: 'Quelle tension est compatible au Pakistan ?', answer: 'Nous adaptons toutes les machines en 220V/50Hz pour correspondre aux normes électriques pakistanaises. Nos machines ne nécessitent que 2,2 KW, compatibles avec un groupe électrogène de 5 KVA.' },
      { question: 'Combien de temps prend l\'expédition vers le Pakistan ?', answer: 'Le fret maritime de Qingdao vers Karachi prend 20-25 jours. Nous gérons toute la documentation d\'exportation et pouvons organiser l\'expédition CIF.' },
      { question: 'Y a-t-il des droits d\'importation sur les presses à huile au Pakistan ?', answer: 'Les presses à huile relèvent de codes SH spécifiques. Nous fournissons une documentation complète, y compris le certificat d\'origine, pour aider votre agent en douane à minimiser les droits. Contactez-nous pour être guidé sur les procédures d\'importation au Pakistan.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Pakistan ?',
    ctaDesc: 'Obtenez un devis gratuit en PKR, une estimation d\'expédition vers Karachi et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Pakistan. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Pakistan',
    clearance: {
      heading: 'Importer au Pakistan : WeBOC, Inspection & Ports de Karachi',
      intro: 'Les envois de machines sont dédouanés via le système électronique WeBOC des douanes pakistanaises, appuyé par une documentation fabricant complète et — selon la catégorie et le régime tarifaire — une inspection avant expédition. Un dossier préparé maintient les surestaries de conteneurs aux terminaux de Karachi à zéro.',
      stepsTitle: 'Séquence de dédouanement',
      steps: [
        { title: 'Déclaration de marchandises (GD)', description: 'Votre agent en douane dépose la GD dans WeBOC sous la bonne position (les presses de ce type relèvent couramment du SH 8479.82 environ), en joignant la facture, la liste de colisage et le connaissement.' },
        { title: 'Inspection avant expédition', description: 'Le cas échéant, un certificat d\'inspection d\'une société accréditée est requis ; la couverture varie, confirmez donc les exigences PSI en vigueur auprès de votre agent avant l\'expédition.' },
        { title: 'Dossier de conformité', description: 'Rapport d\'essai du fabricant, spécifications moteur et électriques, plaque signalétique et certificats CE lorsqu\'ils sont détenus. La PSQCA est l\'organisme national de normalisation que votre agent peut consulter pour les questions de catégorie.' },
        { title: 'Évaluation et livraison', description: 'Après l\'évaluation des droits et la mainlevée au Port de Karachi (KICT/PICT) ou à Port Qasim, le transport routier intérieur dessert Lahore, Faisalabad, Multan, Hyderabad ou Peshawar.' },
      ],
      docsTitle: 'Documentation que nous fournissons',
      docs: [
        'Facture commerciale signée et liste de colisage détaillée',
        'Connaissement original / telex release',
        'Rapport d\'essai usine et documentation de pression',
        'Plaque signalétique électrique, données moteur et informations de câblage',
        'Certificats CE et d\'inspection lorsque la route les exige',
      ],
      powerNoteTitle: 'Support électrique & pièces',
      powerNote: 'L\'alimentation industrielle pakistanaise est de 220-240V, 50Hz triphasé, correspondant à notre construction standard. Les kits de joints et les toiles filtrantes sont expédiés en colis aérien vers Karachi ou Lahore en quelques jours, si bien que les pièces de rechange planifiées signifient rarement de longs arrêts. Pour les détails, consultez notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Les tarifs et la couverture PSI changent à chaque mesure financière — confirmez la situation en vigueur auprès d\'un agent en douane enregistré WeBOC avant de commander.',
    },
    cases: {
      heading: 'Installations Types au Pakistan',
      cases: [
        { tag: 'Faisalabad', tagLabel: 'Huile de Moutarde (Sarsoon)', name: 'Huilerie de Moutarde — Pendjab', description: 'HN365 en pressage à froid traditionnel pour le sarsoon ka tel piquant, l\'huile de cuisson de base des marchés domestiques et de gros du Pendjab.', stat: 'Production : ~500 kg/jour' },
        { tag: 'Sind', tagLabel: 'Huile de Sésame', name: 'Producteur d\'Huile de Sésame — Sind', description: 'HN325 produisant de l\'huile de til pressée à froid pour les acheteurs nationaux et les négociants en export de la région de Karachi.', stat: 'Rendement : 45-49%' },
        { tag: 'Bahawalpur', tagLabel: 'Huile de Graines de Coton', name: 'Transformateur d\'Huile de Coton — Sud du Pendjab', description: 'HN426 pressant les graines de coton de la ceinture cotonnière du sud du Pendjab ; le tourteau pressé est vendu comme aliment du bétail.', stat: 'Tourteau : qualité aliment bétail' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  philippines: {
    title: 'Presse à Huile aux Philippines',
    description: 'Presse à huile aux Philippines pour coco VCO, arachide et moringa. Conçue pour une alimentation 230V/60Hz ; livraison vers Manille, Cebu ou Davao. Demandez un devis.',
    heroTitle: 'Presse à Huile aux Philippines — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de coco VCO, d\'arachide, de moringa et de tournesol. Prix direct usine, expédition vers Manille en 12-16 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires aux Philippines',
    seeds: [
      { emoji: '🥥', name: 'Coco (VCO)', description: 'Les Philippines sont l\'un des premiers exportateurs d\'huile de coco. L\'huile de coco vierge (VCO) est un produit à forte valeur ajoutée. Pressage à froid en dessous de 50°C.', yield: 'Rendement : 55-65%' },
      { emoji: '🥜', name: 'Arachide', description: 'L\'huile d\'arachide est populaire dans la cuisine philippine. 40-50% de teneur en huile. Saveur riche pour la cuisson et la friture.', yield: 'Rendement : 38-45%' },
      { emoji: '🌻', name: 'Tournesol', description: 'Marché en croissance pour l\'huile de tournesol aux Philippines. Alternative saine aux huiles traditionnelles.', yield: 'Rendement : 35-45%' },
      { emoji: '🌿', name: 'Moringa (Malunggay)', description: 'Le moringa (malunggay) est un super-aliment philippin. L\'huile de moringa est prisée dans les cosmétiques et les compléments alimentaires.', yield: 'Rendement : 30-38%' },
    ],
    productsTitle: 'Machines Recommandées pour les Philippines',
    quoteTitle: 'Obtenez un Devis Personnalisé pour les Philippines',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en PHP ou en USD, incluant l\'expédition vers Manille.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en Pesos', description: 'Nous pouvons établir un devis en PHP au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers les Philippines',
    shipping: { port: 'Manille (South Harbor) / Cebu', transitTime: '12-16 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile aux Philippines ?', answer: 'Contactez Haonuo pour des prix direct usine pour le marché philippin. Nous proposons des tarifs compétitifs incluant l\'expédition vers Manille. Devis disponible en PHP.' },
      { question: 'Cette machine peut-elle produire de l\'huile de coco vierge (VCO) ?', answer: 'Oui, les presses hydrauliques à froid Haonuo sont parfaitement adaptées à la production de VCO. L\'extraction à basse température (en dessous de 60°C) préserve la teneur en acide laurique et l\'arôme naturel de coco exigés par les Philippine National Standards pour le VCO.' },
      { question: 'Quelle tension est compatible aux Philippines ?', answer: 'Nous adaptons toutes les machines en 220V/60Hz pour correspondre aux normes électriques philippines. Nos machines ne nécessitent que 2,2 KW de puissance moteur.' },
      { question: 'Combien de temps prend l\'expédition vers les Philippines ?', answer: 'Le fret maritime de Qingdao vers Manille prend 12-16 jours — l\'une des routes d\'expédition les plus courtes depuis la Chine. Nous gérons toute la documentation d\'exportation.' },
      { question: 'Avez-vous des clients aux Philippines ?', answer: 'Oui, Haonuo a plusieurs clients aux Philippines, principalement dans les provinces de Quezon, Laguna et Cebu, pour la production de VCO et d\'huile d\'arachide.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile aux Philippines ?',
    ctaDesc: 'Obtenez un devis gratuit en PHP, une estimation d\'expédition vers Manille et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour les Philippines. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Philippines',
    clearance: {
      heading: 'Préparation Électrique & Livraison Multi-Îles aux Philippines',
      intro: 'Pour les acheteurs philippins, les deux questions pratiques ne sont jamais une affaire de paperasse : la machine correspondra-t-elle à notre alimentation en 60Hz ? et comment parviendra-t-elle jusqu\'à notre province ? Les deux points sont réglés avant que la machine ne quitte nos ateliers.',
      stepsTitle: 'Électricité et logistique',
      steps: [
        { title: 'Électrique : le 230V/60Hz est différent', description: 'L\'alimentation industrielle philippine est de 230V, 60Hz (460V triphasé dans les grandes usines) — une fréquence différente du réseau chinois 380V/50Hz. Moteurs, résistances et commandes sont spécifiés pour correspondre à l\'alimentation confirmée de votre site dès la commande, plutôt qu\'adaptés après coup avec des convertisseurs de fréquence peu fiables.' },
        { title: 'Logistique : au-delà de Manille', description: 'Les conteneurs maritimes arrivent à Manille (South Harbor / Manila International Container Port). Les machines destinées aux Visayas ou à Mindanao continuent par navire feeder national ou par route ferry côtière : Cebu, principal hub de transbordement pour les Visayas ; Cagayan de Oro et Davao, points d\'entrée pour les moulins de Mindanao ; General Santos, courant pour les régions de transformation du thon et de la coco. Prévoyez des jours supplémentaires pour le transfert inter-îles et faites appel à un transitaire expérimenté dans la livraison en province ; planifier en fonction de la mousson et des mois de typhons évite les surestaries. La mainlevée auprès du Bureau of Customs exige la facture, la liste de colisage et le connaissement, plus les permis d\'importation si votre enregistrement commercial l\'exige.' },
      ],
      docsTitle: 'Points électriques à anticiper',
      docs: [
        'Beaucoup d\'ateliers provinciaux font fonctionner la machine sur groupe électrogène — la puissance du groupe est confirmée à la commande.',
        'Les sites monophasés doivent discuter de la machine de classe HN325 et de la puissance du torréfacteur avant de construire la ligne.',
        'Les spécifications de disjoncteur, de câbles et de mise à la terre sont incluses dans la documentation d\'expédition.',
      ],
      powerNoteTitle: 'Note électrique',
      powerNote: 'Tous les détails figurent dans notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Les procédures électriques et douanières philippines sont révisées périodiquement — confirmez les exigences actuelles du BOC et de votre fournisseur d\'électricité local avec votre transitaire et votre électricien avant la livraison.',
    },
    cases: {
      heading: 'Installations Types aux Philippines',
      cases: [
        { tag: 'Quezon', tagLabel: 'Coco / VCO', name: 'Producteur de VCO — Province de Quezon', description: 'Presse à coco HN426 food-grade 600mm produisant de l\'huile de coco vierge et du lait de coco frais pour les exportateurs de VCO de Luzon.', stat: 'Fût food-grade 600mm' },
        { tag: 'Pangasinan', tagLabel: 'Huile d\'Arachide', name: 'Huilerie d\'Arachide — Luzon', description: 'Presse à arachide HN325 en petits lots approvisionnant les marchés publics locaux et les détaillants de pasalubong de la région d\'Ilocos.', stat: 'Capacité : ~40 kg/batch' },
        { tag: 'Davao', tagLabel: 'Coco & Sésame', name: 'Transformateur d\'Huile de Coco — Mindanao', description: 'HN365 traitant des campagnes de coco et occasionnellement de sésame pour du VCO de qualité export conditionné à Davao.', stat: 'VCO qualité export' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  egypt: {
    title: 'Presse à Huile en Égypte',
    description: 'Presse à huile en Égypte pour sésame, olive et tournesol. Documentation ACID/GOEIC et support d\'inspection avant expédition, expédition vers Alexandrie. Demandez un devis.',
    heroTitle: 'Presse à Huile en Égypte — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de sésame, d\'olive, d\'arachide et de tournesol. Prix direct usine, expédition vers Alexandrie en 20-24 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires en Égypte',
    seeds: [
      { emoji: '🫘', name: 'Sésame', description: 'L\'Égypte a une longue tradition de production d\'huile de sésame et de tahini. Le sésame égyptien est réputé pour sa qualité. 50-55% de teneur en huile.', yield: 'Rendement : 42-50%' },
      { emoji: '🫒', name: 'Olive', description: 'L\'huile d\'olive est produite dans les régions du Nord-Sinaï et du désert occidental. L\'Égypte est l\'un des plus grands producteurs d\'olive d\'Afrique.', yield: 'Rendement : 15-25%' },
      { emoji: '🥜', name: 'Arachide', description: 'L\'huile d\'arachide est populaire dans la cuisine égyptienne. 40-50% de teneur en huile. Saveur riche pour la cuisson.', yield: 'Rendement : 38-45%' },
      { emoji: '🌻', name: 'Tournesol', description: 'Le tournesol est cultivé dans le delta du Nil. L\'huile de tournesol est une alternative abordable à l\'huile d\'olive.', yield: 'Rendement : 35-45%' },
    ],
    productsTitle: 'Machines Recommandées pour l\'Égypte',
    quoteTitle: 'Obtenez un Devis Personnalisé pour l\'Égypte',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en EGP ou en USD, incluant l\'expédition vers Alexandrie.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en Livres', description: 'Nous pouvons établir un devis en EGP au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers l\'Égypte',
    shipping: { port: 'Alexandrie / Port Saïd', transitTime: '20-24 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile en Égypte ?', answer: 'Contactez-nous pour un devis personnalisé pour une installation complète de presse à huile Haonuo incluant l\'expédition vers Alexandrie ou Port Saïd. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en EGP (livre égyptienne) au taux de change actuel.' },
      { question: 'La machine peut-elle presser le sésame pour le tahini et l\'huile ?', answer: 'Oui. Les presses hydrauliques à froid Haonuo sont excellentes pour la production d\'huile de sésame. L\'Égypte est l\'un des premiers producteurs de sésame au monde, et nos machines atteignent un rendement de 42-50%, produisant une huile de sésame pressée à froid premium adaptée aussi bien à la production de tahini qu\'aux marchés d\'huile de cuisson.' },
      { question: 'Quelle tension utilise la presse à huile en Égypte ?', answer: 'Les presses à huile Haonuo sont personnalisées pour la norme électrique 220V/50Hz de l\'Égypte. Nos moteurs sont configurés pour correspondre aux exigences électriques locales, garantissant un fonctionnement sûr et efficace.' },
      { question: 'Combien de temps prend l\'expédition vers Alexandrie, Égypte ?', answer: 'Le fret maritime de Qingdao, Chine vers Alexandrie ou Port Saïd prend 20-24 jours. Nous gérons toute la documentation d\'exportation et pouvons organiser l\'expédition CIF pour votre commodité. Contactez-nous pour les tarifs d\'expédition actuels.' },
      { question: 'Quelles sont les réglementations d\'importation pour les presses à huile en Égypte ?', answer: 'Les presses à huile sont classées sous le code SH 8479.82. L\'Égypte exige un enregistrement auprès du GOEIC (General Organization for Export and Import Control) pour l\'importation de machines. Nous fournissons toute la documentation nécessaire, y compris les certificats d\'origine, les factures commerciales et les certificats de qualité, pour faciliter un dédouanement en douceur.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile en Égypte ?',
    ctaDesc: 'Obtenez un devis gratuit en EGP, une estimation d\'expédition vers Alexandrie et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour l\'Égypte. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Égypte',
    clearance: {
      heading: 'Importer en Égypte : ACID, GOEIC & Inspection Avant Expédition',
      intro: 'L\'Égypte applique l\'un des régimes d\'importation les plus exigeants en documents de la région. Trois points doivent être en place avant l\'appareillage du navire ; les organiser après l\'arrivée signifie des semaines de stockage portuaire et de surestaries à Alexandrie ou Sokhna.',
      stepsTitle: 'Les trois points à régler avant l\'appareillage',
      steps: [
        { title: 'Déclaration ACID', description: 'L\'importateur égyptien enregistre l\'expédition sur la plateforme douanière Nafeza et reçoit un numéro ACID, qui doit figurer sur la facture commerciale, la liste de colisage et le connaissement. Les exportateurs complètent les données de cargaison via la plateforme blockchain autorisée. Les expéditions sans ACID valide ne peuvent pas être chargées à l\'origine.' },
        { title: 'Enregistrement GOEIC', description: 'Les importateurs d\'équipements industriels doivent être enregistrés auprès du General Organization for Export and Import Control, et les règles d\'enregistrement des usines/fabricants étrangers peuvent s\'appliquer selon la catégorie de produit. Votre importateur doit vérifier ce statut bien avant la commande — c\'est le contrôle le plus souvent laissé trop tard.' },
        { title: 'Inspection & documents légalisés', description: 'Un certificat d\'inspection avant expédition d\'un organisme accrédité, plus les documents commerciaux (facture, certificat d\'origine, liste de colisage) légalisés par les canaux consulaires ou électroniques prescrits. Nous fournissons le rapport d\'essai du fabricant, la plaque signalétique et le dossier technique que les organismes d\'inspection demandent habituellement.' },
      ],
      docsTitle: 'Dossier fourni pour les inspections',
      docs: [
        'Rapport d\'essai du fabricant',
        'Plaque signalétique',
        'Dossier technique',
      ],
      powerNoteTitle: 'Ports, délais & spécification électrique',
      powerNote: 'La plupart des machines entrent via Alexandrie ou Port Saïd ; Aïn Sokhna dessert les routages de la mer Rouge. Intégrez les fenêtres ACID et d\'inspection dans votre calendrier de production — les deux sont bouclées pendant que la machine est encore dans nos ateliers. L\'alimentation industrielle égyptienne est de 220/380V, 50Hz triphasé, correspondant à notre construction standard ; confirmez l\'alimentation de votre site et la capacité du disjoncteur avant la livraison avec notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Les procédures ACID et GOEIC sont révisées fréquemment — confirmez toujours la liste de contrôle en vigueur auprès de votre importateur égyptien ou de votre agent en douane avant de passer commande.',
    },
    cases: {
      heading: 'Installations Types en Égypte',
      cases: [
        { tag: 'Beheira', tagLabel: 'Sésame & Tahini', name: 'Producteur d\'Huile de Sésame & de Tahini — Delta du Nil', description: 'HN325 pressant du sésame soigneusement torréfié pour approvisionner l\'industrie du tahini et du halva à Beheira, le cœur de la transformation du sésame égyptien.', stat: 'Rendement : 46-50%' },
        { tag: 'Fayoum', tagLabel: 'Huile de Tournesol', name: 'Huilerie de Tournesol — Fayoum', description: 'HN365 transformant des graines de tournesol cultivées localement pour de l\'huile de cuisson en vrac distribuée via les marchés du Caire et de Haute-Égypte.', stat: 'Production : ~500 kg/jour' },
        { tag: 'Ismailia', tagLabel: 'Olive & Pressage à Froid', name: 'Transformateur d\'Huile d\'Olive — Ismailia', description: 'Modèle de pressage à froid HN426 traitant de petits lots d\'olives du désert et de grignons d\'olive de seconde presse pour des huiles composées.', stat: 'Configuration pressage à froid' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  'south-africa': {
    title: 'Presse à Huile en Afrique du Sud',
    description: 'Presse à huile en Afrique du Sud pour tournesol, soja et colza. Dossier technique NRCS LOA fourni, constructions 400V/50Hz, expédition vers Durban. Demandez un devis.',
    heroTitle: 'Presse à Huile en Afrique du Sud — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de tournesol, d\'arachide, de soja et de colza. Prix direct usine, expédition vers Durban en 22-26 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires en Afrique du Sud',
    seeds: [
      { emoji: '🌻', name: 'Tournesol', description: 'Le tournesol est la principale culture oléagineuse d\'Afrique du Sud. 35-45% de teneur en huile. Grande demande pour l\'huile de cuisson.', yield: 'Rendement : 35-45%' },
      { emoji: '🥜', name: 'Arachide', description: 'L\'arachide est cultivée dans les provinces du Limpopo et du Mpumalanga. 40-50% de teneur en huile.', yield: 'Rendement : 38-45%' },
      { emoji: '🫘', name: 'Soja', description: 'Le soja est une culture en croissance en Afrique du Sud. Utilisé pour l\'huile de cuisson et l\'alimentation animale.', yield: 'Rendement : 15-20%' },
      { emoji: '🌿', name: 'Colza (Canola)', description: 'Le colza est cultivé dans la province du Cap occidental. L\'huile de colza pressée à froid est de plus en plus prisée.', yield: 'Rendement : 35-40%' },
    ],
    productsTitle: 'Machines Recommandées pour l\'Afrique du Sud',
    quoteTitle: 'Obtenez un Devis Personnalisé pour l\'Afrique du Sud',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en ZAR ou en USD, incluant l\'expédition vers Durban.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en Rand', description: 'Nous pouvons établir un devis en ZAR au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers l\'Afrique du Sud',
    shipping: { port: 'Durban / Cape Town', transitTime: '22-26 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile en Afrique du Sud ?', answer: 'Contactez-nous pour un devis personnalisé pour une installation complète de presse à huile Haonuo incluant l\'expédition vers Durban ou Cape Town. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en ZAR (rand sud-africain) au taux de change actuel.' },
      { question: 'Quelle tension utilise la presse à huile en Afrique du Sud ?', answer: 'Les presses à huile Haonuo sont personnalisées pour la norme électrique 220V/50Hz de l\'Afrique du Sud. Nos moteurs sont configurés pour correspondre aux exigences électriques locales, garantissant un fonctionnement sûr et efficace.' },
      { question: 'Combien de temps prend l\'expédition vers Durban, Afrique du Sud ?', answer: 'Le fret maritime de Qingdao, Chine vers Durban ou Cape Town prend 22-26 jours. Nous gérons toute la documentation d\'exportation et pouvons organiser l\'expédition CIF pour votre commodité. Contactez-nous pour les tarifs d\'expédition actuels.' },
      { question: 'Quel est le rendement en huile des graines de tournesol en Afrique du Sud ?', answer: 'Le tournesol est la première culture oléagineuse d\'Afrique du Sud. Avec les presses hydrauliques à froid Haonuo, vous pouvez atteindre un rendement de 35-45% sur les graines de tournesol, produisant une huile de tournesol pressée à froid de haute qualité qui se négocie à des prix premium sur le marché local.' },
      { question: 'Quelles sont les procédures d\'importation pour les presses à huile en Afrique du Sud ?', answer: 'Les presses à huile sont classées sous le code SH 8479.82. L\'Afrique du Sud exige un permis d\'importation de l\'ITAC (International Trade Administration Commission). Nous fournissons toute la documentation nécessaire, y compris les certificats d\'origine, les factures commerciales et les listes de colisage, pour faciliter un dédouanement en douceur.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile en Afrique du Sud ?',
    ctaDesc: 'Obtenez un devis gratuit en ZAR, une estimation d\'expédition vers Durban et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour l\'Afrique du Sud. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Afrique du Sud',
    clearance: {
      heading: 'Conformité Électrique & Entrée Portuaire : Lettre d\'Autorisation NRCS',
      intro: 'Les machines électriques importées en Afrique du Sud peuvent nécessiter une Lettre d\'Autorisation (LOA) du National Regulator for Compulsory Specifications (NRCS) sous la norme SANS applicable, avant la mainlevée en douane. Les acheteurs qui découvrent cela au port de Durban paient du stockage pendant que la demande rattrape son retard.',
      stepsTitle: 'Les trois étapes de la LOA',
      steps: [
        { title: 'Confirmer le périmètre LOA tôt', description: 'Demandez au NRCS ou à votre commissionnaire en importation si la presse et ses commandes électriques relèvent de la spécification obligatoire applicable. Si c\'est le cas, l\'importateur — ou un fabricant enregistré — dépose la demande de LOA, idéalement avant l\'expédition de la machine.' },
        { title: 'Constituer le dossier technique', description: 'Les demandes de LOA sont appuyées par un dossier technique complet (voir ci-contre), que nous constituons au format attendu par les agents de conformité. Déposez une demande unique pour les importations répétées du même modèle lorsque le régime le permet.' },
        { title: 'Spécifier la bonne tension', description: 'L\'alimentation industrielle triphasée sud-africaine est de 400V, 50Hz — proche mais différente des réseaux nominaux 380V. Les moteurs et commandes sont construits à la commande selon votre alimentation confirmée.' },
      ],
      docsTitle: 'Dossier technique pour la LOA',
      docs: [
        'Données de la plaque signalétique',
        'Schéma de câblage',
        'Rapport d\'essai',
        'Description des protections de sécurité',
      ],
      powerNoteTitle: 'Ports, droits & installation',
      powerNote: 'Les machines entrent le plus souvent par Durban, avec Cape Town et Gqeberha (Port Elizabeth) en alternatives. La SARS évalue les droits et la TVA de 15% sur la déclaration SAD501 ; les importateurs enregistrés peuvent normalement récupérer la TVA déductible. Les assureurs et usines sud-africains peuvent exiger un Certificat de Conformité du câblage installé délivré par un électricien enregistré — briefez votre entrepreneur avant l\'arrivée de la machine. Pour la préparation électrique du site, consultez notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Le périmètre NRCS évolue avec les mises à jour des normes — confirmez auprès de votre importateur si une LOA s\'applique au modèle exact avant de passer commande.',
    },
    cases: {
      heading: 'Installations Types en Afrique du Sud',
      cases: [
        { tag: 'État Libre', tagLabel: 'Huile de Tournesol', name: 'Producteur d\'Huile de Tournesol — État Libre', description: 'HN365 transformant la récolte de tournesol de l\'État Libre pour des marques artisanales d\'huile de cuisson vendues dans les fermes-auberges et les épiceries fines.', stat: 'Production : ~500 kg/jour' },
        { tag: 'Limpopo', tagLabel: 'Huile d\'Arachide', name: 'Huilerie d\'Arachide — Limpopo', description: 'HN325 pressant à froid des arachides pour les marchés de producteurs et les magasins bio de Polokwane et des villes environnantes.', stat: 'Configuration pressage à froid' },
        { tag: 'Cap-Occidental', tagLabel: 'Huile d\'Olive', name: 'Transformateur d\'Huile d\'Olive — Cap-Occidental', description: 'Unité de pressage à froid HN426 pour de l\'huile d\'olive boutique et l\'extraction de grignons d\'olive dans les petits domaines viticoles et du Karoo.', stat: 'Pressage à froid boutique' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  kenya: {
    title: 'Presse à Huile au Kenya',
    description: 'Presse à huile au Kenya pour tournesol, sésame et arachide. Certificat KEBS PVoC organisé avant l\'expédition ; constructions 415V/50Hz, expédition vers Mombasa. Demandez un devis.',
    heroTitle: 'Presse à Huile au Kenya — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de tournesol, d\'arachide, de sésame et de coton. Prix direct usine, expédition vers Mombasa en 25-30 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires au Kenya',
    seeds: [
      { emoji: '🌻', name: 'Tournesol', description: 'Le tournesol est la culture oléagineuse en plus forte croissance au Kenya. 35-45% de teneur en huile. Grande demande pour l\'huile de cuisson locale.', yield: 'Rendement : 35-45%' },
      { emoji: '🥜', name: 'Arachide', description: 'L\'arachide est cultivée dans les régions occidentales et côtières du Kenya. 40-50% de teneur en huile.', yield: 'Rendement : 38-45%' },
      { emoji: '🫘', name: 'Sésame', description: 'Le sésame est cultivé dans les régions arides et semi-arides du Kenya. Opportunité d\'exportation croissante.', yield: 'Rendement : 42-50%' },
      { emoji: '☁️', name: 'Graines de Coton', description: 'Le coton est cultivé dans les régions côtières et orientales du Kenya. Huile de cuisson abordable.', yield: 'Rendement : 15-34%' },
    ],
    productsTitle: 'Machines Recommandées pour le Kenya',
    quoteTitle: 'Obtenez un Devis Personnalisé pour le Kenya',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en KES ou en USD, incluant l\'expédition vers Mombasa.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en Shillings', description: 'Nous pouvons établir un devis en KES au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers le Kenya',
    shipping: { port: 'Mombasa', transitTime: '25-30 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile au Kenya ?', answer: 'Contactez-nous pour un devis personnalisé pour une installation complète de presse à huile Haonuo incluant l\'expédition vers Mombasa. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en KES (shilling kenyan) au taux de change actuel.' },
      { question: 'Quelle tension utilise la presse à huile au Kenya ?', answer: 'Les presses à huile Haonuo sont personnalisées pour la norme électrique 240V/50Hz du Kenya. Nos moteurs sont configurés pour correspondre aux exigences électriques locales, garantissant un fonctionnement sûr et efficace sur le réseau comme sur groupe électrogène.' },
      { question: 'Combien de temps prend l\'expédition vers Mombasa, Kenya ?', answer: 'Le fret maritime de Qingdao, Chine vers le port de Mombasa prend 25-30 jours. Nous gérons toute la documentation d\'exportation et pouvons organiser l\'expédition CIF pour votre commodité. Contactez-nous pour les tarifs d\'expédition actuels.' },
      { question: 'La production d\'huile de tournesol est-elle rentable au Kenya ?', answer: 'Cela peut être rentable, selon des facteurs comme les coûts des matières premières, les prix locaux de l\'huile et le volume de production. Le secteur kenyan de l\'huile de tournesol commerciale est en croissance. Avec les presses hydrauliques à froid Haonuo, vous pouvez produire une huile de tournesol pressée à froid de haute qualité qui peut se négocier à des prix premium. Les rendements réels varient considérablement selon l\'exploitant.' },
      { question: 'La presse à huile peut-elle fonctionner avec un groupe électrogène au Kenya ?', answer: 'Oui. Les presses à huile hydrauliques Haonuo nécessitent seulement 2,2 KW de puissance moteur, ce qui les rend entièrement compatibles avec un groupe électrogène de 5-7 KVA. Cela convient parfaitement aux régions du Kenya où le réseau est peu fiable. Nous personnalisons le système électrique en 240V/50Hz pour correspondre aux normes kényanes.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Kenya ?',
    ctaDesc: 'Obtenez un devis gratuit en KES, une estimation d\'expédition vers Mombasa et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Kenya. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Kenya',
    clearance: {
      heading: 'Conformité PVoC : Le Certificat Qui Voyage Avec la Machine',
      intro: 'Les importations réglementées vers le Kenya exigent un Certificat de Conformité dans le cadre du programme KEBS Pre-Export Verification of Conformity (PVoC). Le mot clé est pre-export : l\'inspection a lieu dans nos ateliers avant le scellage du conteneur — pas à Mombasa.',
      stepsTitle: 'Comment se déroule le processus',
      steps: [
        { title: 'Demander l\'inspection tôt', description: 'Une fois la machine construite et avant le chargement, votre importateur réserve l\'inspection PVoC auprès d\'un agent KEBS autorisé (Intertek, SGS, Bureau Veritas ou QIMA).' },
        { title: 'Vérification en usine', description: 'L\'agent contrôle la machine par rapport aux normes applicables et examine le dossier technique : rapport d\'essai, spécifications moteur et électriques, plaque signalétique et documentation CE lorsqu\'elle est détenue.' },
        { title: 'Délivrance du CoC', description: 'Le Certificat de Conformité est délivré électroniquement et l\'original accompagne la facture, la liste de colisage et le connaissement.' },
        { title: 'Dédouanement', description: 'Le KRA évalue les droits et la TVA de 16% au port de Mombasa ; les conteneurs peuvent ensuite rejoindre l\'ICD de Nairobi ou Naivasha, ou directement votre site.' },
      ],
      docsTitle: 'Pourquoi le calendrier compte',
      docs: [
        'Les marchandises arrivant sans CoC valide encourent des pénalités, une inspection à destination coûteuse ou un retour à l\'origine.',
        'C\'est l\'erreur la plus coûteuse que commettent les importateurs kenyans débutants.',
        'Nous coordonnons la visite de l\'inspecteur dans nos ateliers afin que le certificat soit délivré avant l\'expédition.',
      ],
      powerNoteTitle: 'Spécification électrique kényane',
      powerNote: 'L\'alimentation industrielle triphasée au Kenya est de 415V, 50Hz. Les spécifications moteur et commandes sont confirmées à la commande, et les machines fonctionnent sur groupe électrogène si nécessaire — consultez notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Le périmètre et les circuits PVoC sont révisés par le KEBS de temps à autre — confirmez les exigences de catégorie en vigueur auprès de votre agent en douane avant de commander.',
    },
    cases: {
      heading: 'Installations Types au Kenya',
      cases: [
        { tag: 'Nakuru', tagLabel: 'Huile de Tournesol', name: 'Producteur d\'Huile de Tournesol — Vallée du Rift', description: 'HN325 au service des coopératives de petits producteurs de tournesol autour de Nakuru, avec des pressages en courtes campagnes pendant la saison de récolte.', stat: 'Capacité : ~40 kg/batch' },
        { tag: 'Kakamega', tagLabel: 'Huile d\'Arachide', name: 'Huilerie d\'Arachide — Ouest du Kenya', description: 'HN365 produisant de l\'huile d\'arachide grillée pour les marchés en plein air et les rayons de supermarchés à Kakamega et Kisumu.', stat: 'Production : ~450 kg/jour' },
        { tag: 'Meru', tagLabel: 'Huile de Sésame', name: 'Transformateur d\'Huile de Sésame — Est du Kenya', description: 'HN426 pressant à froid le sésame doré de la région de Meru/Tharaka pour les acheteurs d\'aliments santé de Nairobi.', stat: 'Rendement : 44-48%' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  uk: {
    title: 'Presse à Huile au Royaume-Uni',
    description: 'Presse à huile au Royaume-Uni pour colza, tournesol et chanvre. Documentation CE/UKCA, constructions 400V et conseils sur la TVA d\'importation ; expédition vers Felixstowe. Demandez un devis.',
    heroTitle: 'Presse à Huile au Royaume-Uni — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de colza, de tournesol, de chanvre et de lin. Prix direct usine, expédition vers Felixstowe en 28-35 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires au Royaume-Uni',
    seeds: [
      { emoji: '🌿', name: 'Colza', description: 'Le colza est la culture oléagineuse la plus répandue au Royaume-Uni. L\'huile de colza pressée à froid est prisée pour sa saveur douce et sa richesse en oméga-3.', yield: 'Rendement : 35-40%' },
      { emoji: '🌻', name: 'Tournesol', description: 'L\'huile de tournesol pressée à froid est de plus en plus demandée pour les marchés bio et spécialisés.', yield: 'Rendement : 35-45%' },
      { emoji: '🍃', name: 'Chanvre', description: 'Le chanvre industriel est en pleine expansion au Royaume-Uni. L\'huile de chanvre riche en CBD et oméga-3 se négocie à des prix premium.', yield: 'Rendement : 30-35%' },
      { emoji: '🌾', name: 'Graines de Lin', description: 'L\'huile de lin pressée à froid est prisée comme complément alimentaire riche en oméga-3. Marché en croissance au Royaume-Uni.', yield: 'Rendement : 30-38%' },
    ],
    productsTitle: 'Machines Recommandées pour le Royaume-Uni',
    quoteTitle: 'Obtenez un Devis Personnalisé pour le Royaume-Uni',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en GBP ou en USD, incluant l\'expédition vers Felixstowe.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + TVA estimée tout inclus' },
      { emoji: '💬', title: 'Devis en Livres', description: 'Nous pouvons établir un devis en GBP au taux de change actuel' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers le Royaume-Uni',
    shipping: { port: 'Felixstowe / Southampton', transitTime: '28-35 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile au Royaume-Uni ?', answer: 'Contactez-nous pour un devis personnalisé pour une installation complète de presse à huile Haonuo incluant l\'expédition vers Felixstowe ou Southampton. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en GBP (livre sterling) au taux de change actuel.' },
      { question: 'La presse à huile dispose-t-elle d\'une certification CE pour le marché britannique ?', answer: 'Les presses à huile Haonuo sont fabriquées selon les normes internationales. Contactez-nous pour vérifier le statut de certification actuel de votre modèle spécifique et de votre marché de destination. Nous veillons à ce que tous les composants électriques répondent aux normes et réglementations de sécurité applicables.' },
      { question: 'Quelle tension utilise la presse à huile au Royaume-Uni ?', answer: 'Les presses à huile Haonuo sont personnalisées pour la norme électrique 240V/50Hz du Royaume-Uni. Nos moteurs sont configurés avec des prises et un câblage compatibles UK pour correspondre aux exigences électriques locales, garantissant un fonctionnement sûr et efficace.' },
      { question: 'Combien de temps prend l\'expédition vers Felixstowe, Royaume-Uni ?', answer: 'Le fret maritime de Qingdao, Chine vers Felixstowe ou Southampton prend 28-35 jours. Nous gérons toute la documentation d\'exportation et pouvons organiser l\'expédition CIF pour votre commodité. Contactez-nous pour les tarifs d\'expédition actuels.' },
      { question: 'Quelles sont les réglementations d\'importation britanniques pour les presses à huile ?', answer: 'Les presses à huile sont classées sous le code SH 8479.82. Pour le marché britannique, les machines exigent le marquage UKCA (ou marquage CE pour l\'Irlande du Nord). Une TVA d\'importation de 20% s\'applique. Nous fournissons toute la documentation nécessaire, y compris les certificats d\'origine, les factures commerciales et les listes de colisage, pour faciliter un dédouanement en douceur.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Royaume-Uni ?',
    ctaDesc: 'Obtenez un devis gratuit en GBP, une estimation d\'expédition vers Felixstowe et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Royaume-Uni. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Royaume-Uni',
    clearance: {
      heading: 'Conformité UK : Marquage CE/UKCA, TVA d\'Importation & Arrivée Portuaire',
      intro: 'Les importations de machines vers le Royaume-Uni suivent une voie stable et bien documentée. Les trois points que les acheteurs interrogent — règles de marquage après le Brexit, récupération de la TVA d\'importation et installation sur le lieu de travail — sont réglés ici.',
      stepsTitle: 'Les trois points clés',
      steps: [
        { title: 'Marquage CE et UKCA', description: 'Les machines marquées CE continuent d\'être acceptées pour la mise sur le marché de la Grande-Bretagne ; le marquage UKCA reste disponible pour la plupart des groupes de produits. L\'Irlande du Nord suit le dispositif CE / UKNI. Les expéditions incluent la déclaration de conformité, le dossier technique et la documentation de protection conformes aux UK Supply of Machinery (Safety) Regulations.' },
        { title: 'Droits et TVA d\'importation', description: 'Les droits sont évalués selon le tarif UK (ce type de machine se situe couramment près du code marchandise 8479.82) et la TVA d\'importation de 20% est perçue à l\'entrée. Les entreprises assujetties à la TVA récupèrent normalement la TVA d\'importation, et la Postponed VAT Accounting supprime totalement l\'impact sur la trésorerie — demandez à votre transitaire de la mettre en place avant l\'arrivée.' },
        { title: 'Installation sur le lieu de travail', description: 'Les employeurs doivent satisfaire aux obligations de type PUWER pour les protections, les arrêts d\'urgence et la formation des opérateurs, tous couverts dans notre guide de mise en service. Consultez le guide électrique pour la liste de contrôle du site.' },
      ],
      docsTitle: 'Ports et livraison',
      docs: [
        'Les conteneurs arrivent le plus couramment à Felixstowe, London Gateway ou Southampton.',
        'Le transport routier intérieur vers l\'Angleterre, l\'Écosse et le Pays de Galles est organisé par votre transitaire.',
        'Demandez-nous avant l\'expédition le pack de documentation technique que votre commissionnaire en douane ou votre conseiller santé-sécurité demandera.',
      ],
      powerNoteTitle: 'Note électrique',
      powerNote: 'L\'alimentation industrielle britannique est de 230V, 50Hz (400V triphasé), correspondant à notre construction standard. Consultez notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Les codes tarifaires et les règles de marquage sont révisés périodiquement — confirmez le code marchandise en vigueur et le traitement TVA auprès de votre agent en douane britannique.',
    },
    cases: {
      heading: 'Installations Types au Royaume-Uni',
      cases: [
        { tag: 'East Anglia', tagLabel: 'Huile de Colza', name: 'Ferme Artisanale d\'Huile de Colza — Norfolk', description: 'HN426 pressant à froid le colza cultivé sur l\'exploitation en huile de cuisson mono-domaine pour les fermes-boutiques, les épiceries fines et les acheteurs en ligne.', stat: 'Configuration pressage à froid' },
        { tag: 'Sud-Ouest', tagLabel: 'Huile de Graines de Chanvre', name: 'Transformateur d\'Huile de Chanvre — Devon', description: 'HN325 pressant du chanvre sous licence à basse température pour des produits alimentaires CBD et bien-être, en maintenant les températures en dessous de 40°C.', stat: 'Pressage basse température' },
        { tag: 'Yorkshire', tagLabel: 'Huile de Tournesol', name: 'Producteur d\'Huile de Tournesol — Yorkshire', description: 'HN365 pressant par lots des graines de tournesol cultivées en Grande-Bretagne pour les magasins de vrac et zéro déchet du nord de l\'Angleterre.', stat: 'Production : ~450 kg/jour' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  usa: {
    title: 'Presse à Huile aux États-Unis',
    description: 'Presse à huile aux États-Unis : 480V/60Hz, options de composants UL et contact alimentaire aligné FDA. Expédition vers LA ou NY.',
    heroTitle: 'Presse à Huile aux États-Unis — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de tournesol, d\'arachide, de chanvre et d\'amande. Prix direct usine, expédition vers LA/NY en 30-40 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires aux États-Unis',
    seeds: [
      { emoji: '🌻', name: 'Tournesol', description: 'L\'huile de tournesol pressée à froid est prisée sur le marché américain des huiles spécialisées et biologiques. 35-45% de teneur en huile.', yield: 'Rendement : 35-45%' },
      { emoji: '🥜', name: 'Arachide', description: 'L\'huile d\'arachide gourmet est un marché de niche en croissance. Saveur riche et point de fumée élevé appréciés par les chefs.', yield: 'Rendement : 38-45%' },
      { emoji: '🍃', name: 'Chanvre', description: 'L\'huile de chanvre CBD est l\'un des marchés à la croissance la plus rapide aux États-Unis. L\'extraction à froid préserve les cannabinoïdes et les terpènes.', yield: 'Rendement : 30-35%' },
      { emoji: '🌰', name: 'Amande', description: 'La Californie est le premier producteur mondial d\'amandes. L\'huile d\'amande pressée à froid est prisée en cosmétique et en gastronomie.', yield: 'Rendement : 45-55%' },
    ],
    productsTitle: 'Machines Recommandées pour les États-Unis',
    quoteTitle: 'Obtenez un Devis Personnalisé pour les États-Unis',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en USD, incluant l\'expédition vers Los Angeles ou New York.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en USD', description: 'Devis en dollars américains, devisaire officiel pour les importations US' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers les États-Unis',
    shipping: { port: 'Los Angeles / New York (NJ)', transitTime: '30-40 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile aux États-Unis ?', answer: 'Contactez-nous pour un devis personnalisé pour une installation complète de presse à huile Haonuo incluant l\'expédition vers Los Angeles ou New York. Nous proposons des prix compétitifs direct usine en USD, avec des économies par rapport aux distributeurs nationaux (les économies réelles varient).' },
      { question: 'La presse à huile est-elle conforme FDA/USDA ?', answer: 'Les presses à huile Haonuo utilisent de l\'acier inoxydable de qualité alimentaire pour les surfaces en contact avec l\'huile et les graines, conformément aux exigences de la FDA sur les matériaux en contact alimentaire. Nos machines n\'ont pas été séparément certifiées ou approuvées par la FDA. Les acheteurs doivent vérifier les exigences de conformité auprès de leur service de santé local. Pour les installations de production d\'huile, nous pouvons fournir une documentation à l\'appui de la conformité USDA. Toutes les surfaces en contact avec l\'huile ou les graines sont en acier inoxydable de qualité alimentaire.' },
      { question: 'Quelle tension utilise la presse à huile aux États-Unis ?', answer: 'Les presses à huile Haonuo sont personnalisées pour la norme électrique 110V/60Hz des États-Unis. Nous fournissons des configurations électriques personnalisées pour correspondre aux exigences électriques américaines, garantissant un fonctionnement sûr et efficace sans transformateur.' },
      { question: 'Combien de temps prend l\'expédition vers Los Angeles ou New York ?', answer: 'Le fret maritime de Qingdao, Chine vers Los Angeles ou New York (NJ) prend 30-40 jours. Nous gérons toute la documentation d\'exportation et pouvons organiser l\'expédition CIF pour votre commodité. Contactez-nous pour les tarifs d\'expédition actuels vers chaque côte.' },
      { question: 'Quels sont les droits d\'importation américains pour les presses à huile ?', answer: 'Les presses à huile sont classées sous le code SH 8479.82. Le taux de droit d\'importation américain pour cette classification est généralement bas (0-3.4%). Nous fournissons toute la documentation nécessaire, y compris les certificats d\'origine, les factures commerciales et les listes de colisage, pour faciliter un dédouanement en douceur.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile aux États-Unis ?',
    ctaDesc: 'Obtenez un devis gratuit en USD, une estimation d\'expédition et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour les États-Unis. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'États-Unis',
    clearance: {
      heading: 'Préparation à l\'Installation aux États-Unis : Tension, Commandes, Contact Alimentaire & Entrée',
      intro: 'La machine passe la douane américaine sans difficulté — les surprises concernent presque toujours la spécification électrique et la préparation du site. Ces quatre points sont confirmés à la commande, pas après la livraison.',
      stepsTitle: 'Les quatre points à confirmer à la commande',
      steps: [
        { title: 'Tension et fréquence', description: 'Le triphasé industriel américain est de 208/230/460/480V, 60Hz — et non le 380V/50Hz chinois. Moteurs, éléments chauffants et appareillage de commande doivent être spécifiés pour l\'alimentation américaine en usine ; une machine construite pour du 380V/50Hz ne peut pas être simplement branchée dans une usine américaine. Indiquez-nous la tension de la plaque signalétique de votre installation avant la fabrication.' },
        { title: 'Armoire de commande', description: 'Les assureurs américains, les usines agroalimentaires et les locaux commerciaux en bail exigent souvent des composants reconnus UL ou une armoire construite selon la pratique UL 508A. Ce n\'est pas obligatoire pour chaque atelier, mais le spécifier au devis coûte bien moins cher que de reconstruire une armoire sur site.' },
        { title: 'Spécification contact alimentaire', description: 'Les acheteurs d\'huile alimentaire embouteillée attendent des pièces en contact de qualité alimentaire — fûts en acier inoxydable 304/316 et joints de grade alimentaire, alignés avec les attentes de la FDA sur les matériaux alimentaires. Si l\'huile porte une quelconque mention premium ou de référencement en épicerie, spécifiez les pièces en contact en inox avant la production plutôt qu\'une adaptation ultérieure.' },
        { title: 'Douane et lieu de travail', description: 'L\'entrée est déclarée sous la position HTSUS autour de 8479.82 ; les taux de droits, y compris tout traitement tarifaire additionnel, évoluent et doivent être confirmés par votre commissionnaire en douane. L\'installation doit suivre les attentes OSHA en matière de protection des machines et de consignation (lockout/tagout), que la conception de nos protections et arrêts d\'urgence prend en charge.' },
      ],
      docsTitle: 'Ports d\'entrée courants',
      docs: [
        'Los Angeles/Long Beach',
        'New York/New Jersey',
        'Savannah',
      ],
      powerNoteTitle: 'Note électrique',
      powerNote: 'Pour les exigences UL et la préparation électrique du site, consultez notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Confirmez la tension, les exigences de l\'armoire de commande, le traitement tarifaire et le code local auprès de votre électricien et de votre commissionnaire en douane avant de passer commande — nous construisons selon la spécification confirmée.',
    },
    cases: {
      heading: 'Installations Types aux États-Unis',
      cases: [
        { tag: 'Dakota du Nord', tagLabel: 'Huile de Tournesol', name: 'Producteur d\'Huile de Tournesol — Plaines du Nord', description: 'HN365 pressant à froid des graines de tournesol à haute teneur en acide oléique pour des marques d\'huile de cuisson premium vendues via les circuits d\'alimentation naturelle et les coopératives.', stat: 'Lots haute oléique' },
        { tag: 'Oregon', tagLabel: 'Huile de Graines de Chanvre', name: 'Transformateur de Graines de Chanvre — Nord-Ouest Pacifique', description: 'HN426 pressant du chanvre sous licence à basse température contrôlée pour des produits de soins du corps, culinaires et nutritionnels.', stat: 'Pressage basse température' },
        { tag: 'Californie', tagLabel: 'Huile d\'Amande', name: 'Huilerie d\'Amande en Petits Lots — Californie', description: 'HN325 produisant de l\'huile d\'amande grillée et pressée à froid pour les détaillants gastronomiques et les clients en abonnement direct ferme.', stat: 'Petits lots gourmet' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },

  'middle-east': {
    title: 'Presse à Huile au Moyen-Orient',
    description: 'Presse à huile au Moyen-Orient pour sésame, olive et noix. Support de certification SABER, G-Mark et ECAS pour l\'Arabie Saoudite et les EAU. Demandez un devis.',
    heroTitle: 'Presse à Huile au Moyen-Orient — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de sésame, de noix et d\'olive en Arabie Saoudite, aux EAU et sur les marchés du Golfe élargi. Approvisionnement direct usine, expédition vers Djeddah et Dubaï en 20-25 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires au Moyen-Orient',
    seeds: [
      { emoji: '🫘', name: 'Sésame', description: 'Le sésame est au cœur de la cuisine moyen-orientale. L\'huile de sésame pressée à froid est essentielle pour le tahini et les plats traditionnels. 50-55% de teneur en huile.', yield: 'Rendement : 42-54%' },
      { emoji: '🥜', name: 'Noix', description: 'L\'huile de noix pressée à froid est prisée pour sa saveur riche et ses bienfaits pour la santé. Marché en croissance au Moyen-Orient.', yield: 'Rendement : 50-62%' },
      { emoji: '🫒', name: 'Olive', description: 'L\'huile d\'olive est un pilier de la cuisine moyen-orientale. Le pressage à froid en dessous de 27°C est requis pour l\'huile d\'olive extra vierge (EVOO).', yield: 'Rendement : 12-26%' },
    ],
    productsTitle: 'Machines Recommandées pour le Moyen-Orient',
    quoteTitle: 'Obtenez un Devis Personnalisé pour le Moyen-Orient',
    quoteDesc: 'Nous proposons des prix compétitifs direct usine pour toutes nos presses à huile. Demandez un devis formel en SAR ou en USD, incluant l\'expédition vers Djeddah ou Dubaï.',
    quoteCards: [
      { emoji: '🏭', title: 'Prix Direct Usine', description: 'Pas d\'intermédiaire — économisez par rapport aux distributeurs locaux' },
      { emoji: '📋', title: 'Devis Complet', description: 'Prix machine + expédition + droits estimés tout inclus' },
      { emoji: '💬', title: 'Devis en Riyal/USD', description: 'Nous pouvons établir un devis en SAR ou en USD' },
    ],
    quoteCta: 'Obtenir le Prix Usine',
    shippingTitle: 'Expédition vers le Moyen-Orient',
    shipping: { port: 'Port Islamique de Djeddah / Jebel Ali (Dubaï)', transitTime: '20-25 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'La presse à huile est-elle certifiée Halal ?', answer: 'Nos machines sont fabriquées à partir de matériaux de qualité alimentaire et produisent une huile 100% pure et naturelle sans traitement chimique. La méthode de pressage à froid est intrinsèquement halal car elle n\'implique qu\'une extraction mécanique. Nous pouvons fournir des certificats matériaux et la documentation d\'usine pour appuyer la certification halal de vos produits huiliers.' },
      { question: 'La machine peut-elle produire de l\'huile de sésame pressée à froid (huile de tahini) ?', answer: 'Oui, notre modèle HN426 Cold Press est spécifiquement conçu pour le pressage à froid du sésame à des températures inférieures à 60°C. Cela préserve la saveur naturelle et la valeur nutritionnelle de l\'huile de sésame, très appréciée dans la cuisine moyen-orientale et la médecine traditionnelle.' },
      { question: 'Combien de temps prend l\'expédition vers l\'Arabie Saoudite et les EAU ?', answer: 'Le fret maritime de Qingdao, Chine vers le port islamique de Djeddah (Arabie Saoudite) ou le port de Jebel Ali (Dubaï, EAU) prend 20-25 jours. Nous gérons toute la documentation d\'exportation, y compris le certificat d\'origine. Contactez-nous pour les tarifs d\'expédition actuels.' },
      { question: 'La machine peut-elle presser les olives pour produire de l\'huile d\'olive extra vierge ?', answer: 'Oui, notre presse hydraulique à froid peut être utilisée pour l\'étape de pressage final de la production d\'huile d\'olive. Le modèle HN426 maintient les températures en dessous de 27°C, requis pour la classification en huile d\'olive extra vierge (EVOO). Des équipements supplémentaires pour le broyage et le malaxage des olives sont également disponibles.' },
      { question: 'Quelle tension est requise pour les pays du Moyen-Orient ?', answer: 'La plupart des pays du Moyen-Orient utilisent du 220V/50Hz (EAU, Iran, Irak) ou du 220V/60Hz (Arabie Saoudite). Haonuo personnalise le système électrique pour votre pays spécifique sans frais supplémentaires. Indiquez simplement votre lieu de livraison lors de la commande.' },
      { question: 'Quel est le prix d\'une presse à huile en Arabie Saoudite et aux EAU ?', answer: 'Chaque devis est préparé pour la configuration spécifique — modèle, fût à fentes ou percé, options de torréfacteur et de filtre — et le port de destination, que ce soit Djeddah, Dammam ou Jebel Ali. Envoyez-nous votre type de graine et votre objectif de production quotidienne, et nous répondrons avec un devis CIF formel pour votre pays.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Moyen-Orient ?',
    ctaDesc: 'Obtenez un devis gratuit, une estimation d\'expédition vers Djeddah ou Dubaï et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir le Prix Usine',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Moyen-Orient. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Moyen-Orient',
    clearance: {
      heading: 'Certification Golfe & Entrée Portuaire : SABER, G-Mark et ECAS',
      intro: 'Les marchés du Golfe sont bien organisés mais pilotés par la certification : l\'Arabie Saoudite et les EAU opèrent chacun des régimes de conformité qui doivent être complétés avant l\'arrivée des marchandises, tandis que Jebel Ali dessert également les acheteurs qui réexportent dans la région.',
      stepsTitle: 'Les circuits de certification par destination',
      steps: [
        { title: 'Arabie Saoudite — SABER', description: 'Les produits réglementés sont enregistrés sur la plateforme SABER avec un Product Certificate, suivi d\'un certificat de conformité d\'expédition (Shipment Certificate) pour chaque envoi, délivré par un organisme de certification approuvé. Les composants électriques peuvent relever des réglementations techniques basse tension du Golfe portant le G-Mark ; le circuit applicable dépend de la configuration exacte de la machine et est confirmé avant la production.' },
        { title: 'EAU — ECAS / EQM', description: 'Les produits des catégories réglementées exigent un enregistrement de conformité via le circuit approuvé des EAU (ECAS/EQM). Le port de Jebel Ali et la JAFZA sont les points d\'entrée courants. La voie de la zone franche est largement utilisée pour la réexportation vers Oman, le Qatar, le Koweït et Bahreïn.' },
        { title: 'Golfe élargi & mer Rouge', description: 'Les escales directes en Arabie Saoudite desservent King Abdullah/Dammam et le port islamique de Djeddah ; le port de Hamad dessert le Qatar. Chaque destination applique ses propres exigences de conformité, même en transitant par le port d\'un voisin. L\'alimentation industrielle dans le Golfe est de 220-240V, 50Hz (380/400V triphasé), que nous spécifions à la commande.' },
      ],
      docsTitle: 'Dossier technique fabricant que nous fournissons',
      docs: [
        'Rapports d\'essai',
        'Données de la plaque signalétique',
        'Informations de câblage',
        'Déclarations',
      ],
      powerNoteTitle: 'Notre support de certification',
      powerNote: 'Qu\'il s\'agisse d\'installer une presse à huile en Arabie Saoudite, aux EAU ou sur les marchés du Moyen-Orient élargi, indiquez-nous le pays de destination dès le devis afin que le circuit de certification correct soit planifié avant la fabrication. Pour la préparation électrique du site, consultez notre ',
      powerNoteLink: 'guide des exigences électriques',
      disclaimer: 'Confirmez le périmètre actuel pour le modèle exact auprès de votre importateur, car les réglementations techniques du Golfe sont mises à jour périodiquement.',
    },
    cases: {
      heading: 'Installations Types au Moyen-Orient',
      cases: [
        { tag: 'Arabie Saoudite', tagLabel: 'Sésame / Tahini', name: 'Producteur de Sésame & Tahini — Région Ouest', description: 'HN325 pressant du sésame grillé premium pour la production de tahini et de halva fournie aux fabricants alimentaires de Djeddah et Riyad.', stat: 'Rendement : 46-50%' },
        { tag: 'EAU', tagLabel: 'Huile de Noix & Amande', name: 'Transformateur d\'Huiles de Fruits à Coque Premium — Dubaï', description: 'HN426 pressant à froid noix et amandes à température contrôlée pour la distribution gastronomique et l\'hôtellerie dans le Golfe.', stat: 'Configuration pressage à froid' },
        { tag: 'Levant', tagLabel: 'Huile d\'Olive', name: 'Huilerie d\'Olive — Région du Levant', description: 'Presse HN365 par lots traitant les olives de petits producteurs et les grignons d\'olive pour de l\'huile d\'olive extra vierge et composée vendue sur les marchés régionaux.', stat: 'Lots olive / grignon' },
      ],
      footnote: 'Installations régionales représentatives ; les configurations et productions réelles varient selon la préparation des graines et les exigences des acheteurs.',
    },
  },
};
