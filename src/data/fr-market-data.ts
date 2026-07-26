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
}

export const frMarketData: Record<string, MarketData> = {
  nigeria: {
    title: 'Presse à Huile au Nigéria | Haonuo',
    description: 'Presse à huile professionnelle pour le Nigéria. Presse hydraulique à froid pour arachide, palmiste, sésame et coton. Prix direct usine en Naira. Expédition vers Lagos 25-30 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile au Nigéria — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile d\'arachide, de palmiste, de sésame et de coton. Prix direct usine, expédition vers Lagos en 25-30 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires au Nigéria',
    seeds: [
      { emoji: '🥜', name: 'Arachide', description: 'L\'une des huiles de cuisson les plus populaires du Nigéria. Environ 40-50% de teneur en huile (selon la variété). Saveur de noisette riche pour la cuisine ouest-africaine.', yield: 'Rendement : 38-45%' },
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
    quoteCta: 'Demander un Devis',
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
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Nigéria. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Nigéria',
  },

  india: {
    title: 'Presse à Huile en Inde | Haonuo',
    description: 'Presse à huile hydraulique pour l\'Inde. Presse à froid pour moutarde (kachi ghani), sésame, arachide et coco. Prix direct usine. Expédition vers Mumbai en 18-22 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile en Inde — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de moutarde (kachi ghani), de sésame, d\'arachide et de coco. Prix direct usine, expédition vers Mumbai en 18-22 jours, garantie 1 an.',
    seedsTitle: 'Graines Oléagineuses Populaires en Inde',
    seeds: [
      { emoji: '🟡', name: 'Moutarde', description: 'Le kachi ghani (pressage à froid de moutarde) est une tradition culinaire indienne. Environ 33-40% de teneur en huile. Saveur piquante distinctive pour la cuisine nord-indienne.', yield: 'Rendement : 30-38%' },
      { emoji: '🫘', name: 'Sésame', description: 'L\'huile de sésame est prisée dans le sud de l\'Inde et à l\'exportation. Pressée à froid, elle conserve sa saveur de noisette et ses bienfaits pour la santé.', yield: 'Rendement : 42-50%' },
      { emoji: '🥜', name: 'Arachide', description: 'L\'huile d\'arachide est un aliment de base dans les foyers indiens. 40-50% de teneur en huile. Point de fumée élevé idéal pour la friture.', yield: 'Rendement : 38-45%' },
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers l\'Inde',
    shipping: { port: 'Nhava Sheva (Mumbai) / Chennai / Mundra', transitTime: '18-22 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile en Inde ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en roupies indiennes (INR).' },
      { question: 'La machine peut-elle presser la moutarde pour produire de l\'huile kachi ghani ?', answer: 'Oui. Nos presses hydrauliques à froid sont parfaitement adaptées à la production d\'huile de moutarde kachi ghani. Le pressage à froid préserve la saveur naturelle et la valeur nutritionnelle, conformément aux normes FSSAI.' },
      { question: 'Quelle tension est utilisée en Inde ?', answer: 'L\'Inde utilise 220V/50Hz. Toutes nos machines sont compatibles avec cette alimentation et peuvent être personnalisées si nécessaire sans frais supplémentaires.' },
      { question: 'Combien de temps prend l\'expédition vers l\'Inde ?', answer: 'Le fret maritime de Qingdao, Chine vers Nhava Sheva (Mumbai) prend 18-22 jours. Nous gérons toute la documentation d\'exportation et d\'importation GST.' },
      { question: 'Fournissez-vous un support pour la documentation GST et l\'importation ?', answer: 'Oui. Nous fournissons toute la documentation d\'exportation nécessaire, y compris la facture commerciale, le certificat d\'origine et la liste de colisage. Nous pouvons également vous mettre en contact avec des agents en douane en Inde pour faciliter le dédouanement.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile en Inde ?',
    ctaDesc: 'Obtenez un devis gratuit en INR, une estimation d\'expédition vers Mumbai et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour l\'Inde. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Inde',
  },

  indonesia: {
    title: 'Presse à Huile en Indonésie | Haonuo',
    description: 'Presse à huile hydraulique pour l\'Indonésie. Presse à froid pour coco (VCO) et palmiste. Prix direct usine. Expédition vers Jakarta en 15-20 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile en Indonésie — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de coco vierge (VCO) et de palmiste. Prix direct usine, expédition vers Jakarta en 15-20 jours, garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers l\'Indonésie',
    shipping: { port: 'Tanjung Priok (Jakarta)', transitTime: '15-20 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile en Indonésie ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en roupies indonésiennes (IDR).' },
      { question: 'Combien de temps prend l\'expédition vers Jakarta ?', answer: 'Le fret maritime de Qingdao, Chine vers Tanjung Priok (Jakarta) prend 15-20 jours. Nous gérons toute la documentation d\'exportation.' },
      { question: 'La machine peut-elle être utilisée pour le coco et le palmiste ?', answer: 'Oui. Nos presses hydrauliques sont conçues pour traiter à la fois la coco et le palmiste. Le modèle HN426 est particulièrement adapté pour la production de VCO de haute qualité.' },
      { question: 'La machine convient-elle pour la production de VCO ?', answer: 'Oui. Nos presses à froid maintiennent la température en dessous de 50°C pendant le pressage, ce qui est essentiel pour préserver la qualité de l\'huile de coco vierge (VCO). Le fût en acier inoxydable 304 assure la conformité alimentaire.' },
      { question: 'Y a-t-il un service après-vente en Indonésie ?', answer: 'Nous fournissons un support technique à distance via WhatsApp, des tutoriels vidéo et des manuels d\'installation détaillés. Pour les grosses commandes, nous pouvons envoyer un technicien sur site à prix coûtant.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile en Indonésie ?',
    ctaDesc: 'Obtenez un devis gratuit en IDR, une estimation d\'expédition vers Jakarta et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour l\'Indonésie. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Indonésie',
  },

  pakistan: {
    title: 'Presse à Huile au Pakistan | Haonuo',
    description: 'Presse à huile hydraulique pour le Pakistan. Presse à froid pour tournesol, moutarde, sésame et coton. Prix direct usine. Expédition vers Karachi en 20-25 jours. Garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers le Pakistan',
    shipping: { port: 'Karachi Port / Port Qasim', transitTime: '20-25 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile au Pakistan ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en roupies pakistanaises (PKR).' },
      { question: 'La machine peut-elle extraire efficacement l\'huile de tournesol ?', answer: 'Oui. Nos presses hydrauliques sont conçues pour extraire efficacement l\'huile de tournesol avec un rendement de 35-45%. Le fût à fentes de type barre permet d\'obtenir un rendement environ 2-3% supérieur aux presses traditionnelles.' },
      { question: 'Quelle tension est utilisée au Pakistan ?', answer: 'Le Pakistan utilise 220V/50Hz. Toutes nos machines sont compatibles avec cette alimentation et peuvent être personnalisées si nécessaire sans frais supplémentaires.' },
      { question: 'Combien de temps prend l\'expédition vers le Pakistan ?', answer: 'Le fret maritime de Qingdao, Chine vers Karachi prend 20-25 jours. Nous gérons toute la documentation d\'exportation.' },
      { question: 'Y a-t-il des droits d\'importation sur les presses à huile au Pakistan ?', answer: 'Les presses à huile sont classées sous le code SH 8479.82. Les droits d\'importation varient et doivent être confirmés avec un agent en douane local. Nous fournissons toute la documentation nécessaire pour faciliter le dédouanement.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Pakistan ?',
    ctaDesc: 'Obtenez un devis gratuit en PKR, une estimation d\'expédition vers Karachi et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Pakistan. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Pakistan',
  },

  philippines: {
    title: 'Presse à Huile aux Philippines | Haonuo',
    description: 'Presse à huile hydraulique pour les Philippines. Presse à froid pour coco vierge (VCO) et arachide. Prix direct usine. Expédition vers Manille en 12-16 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile aux Philippines — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de coco vierge (VCO) et d\'huile d\'arachide. Prix direct usine, expédition vers Manille en 12-16 jours, garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers les Philippines',
    shipping: { port: 'Manille (South Harbor) / Cebu', transitTime: '12-16 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile aux Philippines ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en pesos philippins (PHP).' },
      { question: 'La machine peut-elle produire de l\'huile de coco vierge (VCO) ?', answer: 'Oui. Nos presses à froid maintiennent la température en dessous de 50°C, ce qui est essentiel pour la production de VCO. Le fût en acier inoxydable 304 assure la conformité alimentaire pour les normes philippines.' },
      { question: 'Quelle tension est utilisée aux Philippines ?', answer: 'Les Philippines utilisent 220V/60Hz. Nos machines peuvent être personnalisées pour cette alimentation sans frais supplémentaires. Veuillez confirmer vos besoins en tension lors de la commande.' },
      { question: 'Combien de temps prend l\'expédition vers les Philippines ?', answer: 'Le fret maritime de Qingdao, Chine vers Manille prend 12-16 jours — l\'un des délais les plus courts depuis la Chine.' },
      { question: 'Avez-vous des clients aux Philippines ?', answer: 'Oui. Nous avons des clients à Quezon, Laguna et Cebu qui produisent du VCO et de l\'huile d\'arachide avec nos machines hydrauliques.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile aux Philippines ?',
    ctaDesc: 'Obtenez un devis gratuit en PHP, une estimation d\'expédition vers Manille et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour les Philippines. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Philippines',
  },

  egypt: {
    title: 'Presse à Huile en Égypte | Haonuo',
    description: 'Presse à huile hydraulique pour l\'Égypte. Presse à froid pour sésame, olive et arachide. Prix direct usine. Expédition vers Alexandrie en 20-24 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile en Égypte — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de sésame, d\'olive et d\'arachide. Prix direct usine, expédition vers Alexandrie en 20-24 jours, garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers l\'Égypte',
    shipping: { port: 'Alexandrie / Port Saïd', transitTime: '20-24 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile en Égypte ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en livres égyptiennes (EGP).' },
      { question: 'La machine peut-elle presser le sésame pour le tahini et l\'huile ?', answer: 'Oui. Nos presses hydrauliques sont parfaitement adaptées pour le pressage du sésame. Le pressage à froid préserve la saveur naturelle du sésame, idéale pour le tahini et l\'huile de sésame premium.' },
      { question: 'Quelle tension est utilisée en Égypte ?', answer: 'L\'Égypte utilise 220V/50Hz. Toutes nos machines sont compatibles avec cette alimentation et peuvent être personnalisées si nécessaire sans frais supplémentaires.' },
      { question: 'Combien de temps prend l\'expédition vers Alexandrie ?', answer: 'Le fret maritime de Qingdao, Chine vers Alexandrie prend 20-24 jours. Nous gérons toute la documentation d\'exportation.' },
      { question: 'Quelles sont les réglementations d\'importation en Égypte ?', answer: 'L\'enregistrement GOEIC est requis pour l\'importation de machines en Égypte. Nous fournissons toute la documentation nécessaire, y compris le certificat d\'origine et la facture commerciale, pour faciliter l\'enregistrement GOEIC et le dédouanement.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile en Égypte ?',
    ctaDesc: 'Obtenez un devis gratuit en EGP, une estimation d\'expédition vers Alexandrie et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour l\'Égypte. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Égypte',
  },

  'south-africa': {
    title: 'Presse à Huile en Afrique du Sud | Haonuo',
    description: 'Presse à huile hydraulique pour l\'Afrique du Sud. Presse à froid pour tournesol, arachide, soja et colza. Prix direct usine. Expédition vers Durban en 22-26 jours. Garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers l\'Afrique du Sud',
    shipping: { port: 'Durban / Cape Town', transitTime: '22-26 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile en Afrique du Sud ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en rand sud-africain (ZAR).' },
      { question: 'Quelle tension est utilisée en Afrique du Sud ?', answer: 'L\'Afrique du Sud utilise 220V/50Hz. Toutes nos machines sont compatibles avec cette alimentation et peuvent être personnalisées si nécessaire sans frais supplémentaires.' },
      { question: 'Combien de temps prend l\'expédition vers Durban ?', answer: 'Le fret maritime de Qingdao, Chine vers Durban prend 22-26 jours. Nous gérons toute la documentation d\'exportation.' },
      { question: 'Quel est le rendement en huile de tournesol en Afrique du Sud ?', answer: 'Le rendement en huile de tournesol est de 35-45% selon la variété et les conditions. Nos presses hydrauliques avec fût à fentes de type barre offrent un rendement environ 2-3% supérieur aux presses traditionnelles.' },
      { question: 'Quelle est la procédure d\'importation en Afrique du Sud ?', answer: 'Une licence d\'importation ITAC peut être requise. Les presses à huile sont classées sous le code SH 8479.82. Nous fournissons toute la documentation nécessaire pour faciliter le dédouanement.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile en Afrique du Sud ?',
    ctaDesc: 'Obtenez un devis gratuit en ZAR, une estimation d\'expédition vers Durban et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour l\'Afrique du Sud. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Afrique du Sud',
  },

  kenya: {
    title: 'Presse à Huile au Kenya | Haonuo',
    description: 'Presse à huile hydraulique pour le Kenya. Presse à froid pour tournesol, arachide et sésame. Prix direct usine. Expédition vers Mombasa en 25-30 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile au Kenya — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de tournesol, d\'arachide et de sésame. Prix direct usine, expédition vers Mombasa en 25-30 jours, garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers le Kenya',
    shipping: { port: 'Mombasa', transitTime: '25-30 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile au Kenya ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en shillings kenyans (KES).' },
      { question: 'Quelle tension est utilisée au Kenya ?', answer: 'Le Kenya utilise 240V/50Hz. Nos machines peuvent être personnalisées pour cette alimentation sans frais supplémentaires. Veuillez confirmer vos besoins en tension lors de la commande.' },
      { question: 'Combien de temps prend l\'expédition vers Mombasa ?', answer: 'Le fret maritime de Qingdao, Chine vers Mombasa prend 25-30 jours. Nous gérons toute la documentation d\'exportation.' },
      { question: 'La production d\'huile de tournesol est-elle rentable au Kenya ?', answer: 'Oui. La demande d\'huile de tournesol au Kenya est forte et croissante. Avec nos presses hydrauliques à froid, vous pouvez produire une huile de qualité premium qui se négocie à un prix supérieur sur le marché local.' },
      { question: 'La presse à huile peut-elle fonctionner avec un groupe électrogène au Kenya ?', answer: 'Oui. Nos presses à huile hydrauliques nécessitent seulement 2,2 KW de puissance motrice, ce qui les rend entièrement compatibles avec un groupe électrogène de 5-7 KVA, adapté aux zones rurales du Kenya.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Kenya ?',
    ctaDesc: 'Obtenez un devis gratuit en KES, une estimation d\'expédition vers Mombasa et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Kenya. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Kenya',
  },

  uk: {
    title: 'Presse à Huile au Royaume-Uni | Haonuo',
    description: 'Presse à huile hydraulique pour le Royaume-Uni. Presse à froid pour colza, chanvre et lin. Prix direct usine. Expédition vers Felixstowe en 28-35 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile au Royaume-Uni — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de colza, de chanvre et de lin pressées à froid. Prix direct usine, expédition vers Felixstowe en 28-35 jours, garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers le Royaume-Uni',
    shipping: { port: 'Felixstowe / Southampton', transitTime: '28-35 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile au Royaume-Uni ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine et pouvons établir un devis en livres sterling (GBP).' },
      { question: 'La presse à huile est-elle certifiée CE ?', answer: 'Nos machines sont certifiées CE. Pour le marché britannique, le marquage UKCA est requis en Angleterre, Écosse et Pays de Galles, tandis que le marquage CE reste accepté en Irlande du Nord. Contactez-nous pour confirmer le statut de certification actuel.' },
      { question: 'Quelle tension est utilisée au Royaume-Uni ?', answer: 'Le Royaume-Uni utilise 240V/50Hz. Nos machines peuvent être personnalisées pour cette alimentation sans frais supplémentaires.' },
      { question: 'Combien de temps prend l\'expédition vers Felixstowe ?', answer: 'Le fret maritime de Qingdao, Chine vers Felixstowe prend 28-35 jours. Nous gérons toute la documentation d\'exportation.' },
      { question: 'Quelles sont les réglementations d\'importation au Royaume-Uni ?', answer: 'Les machines importées au Royaume-Uni sont soumises à une TVA de 20%. Les presses à huile sont classées sous le code SH 8479.82 avec un taux de droit de 0%. Nous fournissons toute la documentation nécessaire pour le dédouanement.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Royaume-Uni ?',
    ctaDesc: 'Obtenez un devis gratuit en GBP, une estimation d\'expédition vers Felixstowe et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Royaume-Uni. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Royaume-Uni',
  },

  usa: {
    title: 'Presse à Huile aux États-Unis | Haonuo',
    description: 'Presse à huile hydraulique pour les États-Unis. Presse à froid pour tournesol, arachide, chanvre et amande. Prix direct usine. Expédition vers Los Angeles en 30-40 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile aux États-Unis — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de tournesol, d\'arachide, de chanvre et d\'amande pressées à froid. Prix direct usine, expédition vers Los Angeles en 30-40 jours, garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers les États-Unis',
    shipping: { port: 'Los Angeles / New York (NJ)', transitTime: '30-40 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'Quel est le prix d\'une presse à huile aux États-Unis ?', answer: 'Contactez-nous pour un devis personnalisé. Nous proposons des prix compétitifs direct usine en dollars américains (USD).' },
      { question: 'La machine est-elle conforme aux normes FDA/USDA ?', answer: 'Nos machines utilisent des matériaux de qualité alimentaire (acier inoxydable 304 pour les fûts). Cependant, elles ne sont pas individuellement certifiées par la FDA. Pour la production d\'huile alimentaire, la conformité dépend de vos procédures et installations locales. Contactez-nous pour discuter de vos besoins spécifiques.' },
      { question: 'Quelle tension est utilisée aux États-Unis ?', answer: 'Les États-Unis utilisent 110V/60Hz. Nous pouvons personnaliser le système électrique pour cette alimentation. Veuillez confirmer vos besoins en tension lors de la commande.' },
      { question: 'Combien de temps prend l\'expédition vers Los Angeles ou New York ?', answer: 'Le fret maritime de Qingdao, Chine vers Los Angeles ou New York (New Jersey) prend 30-40 jours. Nous gérons toute la documentation d\'exportation.' },
      { question: 'Quels sont les droits d\'importation aux États-Unis ?', answer: 'Les presses à huile sont classées sous le code SH 8479.82 avec un taux de droit d\'importation de 0-3.4%. Nous fournissons toute la documentation nécessaire pour le dédouanement.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile aux États-Unis ?',
    ctaDesc: 'Obtenez un devis gratuit en USD, une estimation d\'expédition et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour les États-Unis. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'États-Unis',
  },

  'middle-east': {
    title: 'Presse à Huile au Moyen-Orient | Haonuo',
    description: 'Presse à huile hydraulique pour le Moyen-Orient. Presse à froid pour sésame, noix et olive. Prix direct usine. Expédition vers Djeddah et Dubaï en 20-25 jours. Garantie 1 an.',
    heroTitle: 'Presse à Huile au Moyen-Orient — Direct Usine',
    heroDesc: 'Presses à huile hydrauliques pour la production d\'huile de sésame, de noix et d\'olive pressées à froid. Prix direct usine, expédition vers Djeddah et Dubaï en 20-25 jours, garantie 1 an.',
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
    quoteCta: 'Demander un Devis',
    shippingTitle: 'Expédition vers le Moyen-Orient',
    shipping: { port: 'Port Islamique de Djeddah / Jebel Ali (Dubaï)', transitTime: '20-25 jours depuis la Chine', cost: 'Contactez-nous pour les tarifs actuels' },
    faqTitle: 'Foire aux questions',
    faqs: [
      { question: 'La presse à huile est-elle certifiée Halal ?', answer: 'La certification Halal dépend de votre processus de certification local. Nos machines utilisent des matériaux de qualité alimentaire (acier inoxydable 304) et sont conçues pour répondre aux normes de sécurité alimentaire. Contactez-nous pour discuter de vos exigences de certification spécifiques.' },
      { question: 'La machine peut-elle produire de l\'huile de sésame pour le tahini ?', answer: 'Oui. Nos presses hydrauliques à froid sont parfaitement adaptées pour le pressage du sésame. Le pressage à froid préserve la saveur naturelle du sésame, essentielle pour le tahini et l\'huile de sésame premium.' },
      { question: 'Combien de temps prend l\'expédition vers l\'Arabie Saoudite et les EAU ?', answer: 'Le fret maritime de Qingdao, Chine vers Djeddah ou Jebel Ali (Dubaï) prend 20-25 jours. Nous gérons toute la documentation d\'exportation.' },
      { question: 'La machine peut-elle presser les olives pour produire de l\'huile d\'olive extra vierge ?', answer: 'Nos presses hydrauliques peuvent presser les olives. Pour l\'EVOO, la température doit rester en dessous de 27°C pendant le pressage, ce que nos machines à froid peuvent réaliser. Cependant, le processus traditionnel de production d\'EVOO peut nécessiter des équipements supplémentaires.' },
      { question: 'Quelle tension est nécessaire au Moyen-Orient ?', answer: 'La tension varie selon les pays : 220V/50Hz aux EAU, en Iran et en Irak ; 220V/60Hz en Arabie Saoudite. Nous pouvons personnaliser le système électrique pour votre pays spécifique sans frais supplémentaires.' },
    ],
    ctaTitle: 'Prêt à Démarrer Votre Entreprise d\'Huile au Moyen-Orient ?',
    ctaDesc: 'Obtenez un devis gratuit, une estimation d\'expédition vers Djeddah ou Dubaï et une recommandation professionnelle d\'équipement.',
    ctaButton: 'Obtenir un Devis Gratuit',
    whatsappText: 'Bonjour, je suis intéressé par vos presses à huile pour le Moyen-Orient. Pourriez-vous m\'en dire plus ?',
    breadcrumbHome: 'Accueil',
    breadcrumbMarkets: 'Marchés',
    breadcrumbMarket: 'Moyen-Orient',
  },
};
