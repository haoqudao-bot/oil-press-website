export interface CategoryFaq {
  question: string;
  answer: string;
}

export interface CategoryContent {
  // Category-level overview: what this equipment class is, how it works (principle, not buying guide)
  overview: string[];
  // Model range within this category: how many models, capacity span, what they share
  modelRange: string[];
  // Selection dimensions specific to THIS category (not generic buying checklist)
  selectionCriteria: { label: string; desc: string }[];
  // Where this equipment sits in the production line (brief + link)
  processPosition: string;
  // Category-level FAQ (not single-product FAQ)
  faq: CategoryFaq[];
}

const en: Record<string, CategoryContent> = {
  'hydraulic-oil-press': {
    overview: [
      'Hydraulic oil presses use pressurized hydraulic fluid to drive a piston that compresses oil-bearing seeds against a perforated barrel. Unlike continuous screw pressing, hydraulic pressing operates in batch mode — each cycle loads 100 kg of prepared seed, applies pressure for 30–40 minutes (hot pressing) or 2 hours (cold pressing), then releases a solid oil cake. This intermittent action keeps the pressing temperature low (typically below 60°C for cold press models), which helps preserve heat-sensitive nutrients, natural aroma, and the oxidative stability of the finished oil.',
      'The technology is particularly suited to high-value, low-yield seeds where oil quality matters more than throughput — sesame, coconut, walnut, flaxseed, and shea are common applications. Industrial hydraulic presses achieve residual oil rates of 6–8% in the cake, compared to 5–12% for screw presses, depending on seed type and preparation quality. Double-barrel configurations with sliding rails effectively double daily output by allowing alternating loading and pressing without a second machine.',
    ],
    modelRange: [
      'Haonuo offers 12 hydraulic press models spanning pressing forces from 300 tonnes to 620 tonnes. All standard models share the same 100 kg batch capacity per cycle. Pressure rating is the key differentiator — higher forces handle harder seed shells and achieve lower residual oil rates. Every model is available in both single-barrel and double-barrel configurations.',
      'The product line covers four pressure tiers: 300-tonne entry-level (HN300), 325–360-tonne standard and heavy-duty (HN325, HN355) for most common oilseeds, 500-tonne cold-press (HN426) for premium oil production, and the flagship 600–620-tonne ultra-high-pressure models (HN480B, HN500) that press in-shell walnuts, almonds, and the toughest materials in a single cycle. A specialised large-barrel variant (HN325LB) handles coconut meat and shea nut at 20–35 kg per batch with a wider 500 mm barrel.',
    ],
    selectionCriteria: [
      { label: 'Pressing force', desc: '300 tonnes for soft seeds (sesame, flax); 325–360 tonnes for common oilseeds (peanut, rapeseed, sunflower, cottonseed); 500+ tonnes for hard-shell materials (walnut, almond, in-shell seeds)' },
      { label: 'Barrel configuration', desc: 'Single barrel for batch processing; double barrel with sliding rails for alternating loading and pressing, effectively doubling daily output' },
      { label: 'Construction material', desc: 'Carbon steel for general oilseeds; 304 stainless steel for food-grade and cosmetic oil applications (coconut, avocado)' },
      { label: 'Pressing mode', desc: 'Hot pressing (seeds pre-roasted) for higher yield and aromatic flavor; cold pressing (no pre-heating) for premium oil quality and nutritional retention' },
      { label: 'Motor power', desc: 'Standard 2.2 kW motor on most models; flagship 620-tonne models use larger motors for faster cycle recovery and continuous operation' },
    ],
    processPosition: 'Hydraulic pressing is the primary oil extraction step — seeds are first cleaned, optionally dehulled and roasted, then loaded into the press barrel. See our Complete Oil Production Line Guide for the full 8-stage process.',
    faq: [
      { question: 'Single barrel vs. double barrel — how do I choose?', answer: 'A single-barrel press processes one batch at a time, which suits small operations or producers who test different seeds frequently. A double-barrel press lets you load one barrel while the other is pressing, nearly doubling daily output. If your daily target exceeds 500 kg of seeds, a double-barrel model is usually the better investment.' },
      { question: 'Do I need stainless steel construction?', answer: 'Carbon steel barrels work well for most common oilseeds — sesame, peanut, sunflower, and similar. Choose 304 stainless steel if you process coconut, avocado, or oils destined for cosmetic or pharmaceutical use, as these applications require food-grade surfaces that resist corrosion and prevent metal ion contamination.' },
      { question: 'What is the difference between cold press and hot press hydraulic machines?', answer: 'Both use the same hydraulic mechanism. The distinction refers to whether the seeds are roasted before pressing. Cold pressing (no pre-heating) produces oil with better nutritional retention and a lighter flavor. Hot pressing (roasting seeds first) increases yield and produces a more intense, aromatic flavor preferred in many traditional cuisines.' },
    ],
  },

  'seed-processing-equipment': {
    overview: [
      'Seed processing equipment covers the pre-pressing stages that prepare raw seeds for optimal oil extraction. This includes cleaning to remove debris and contaminants, dehulling to separate seed coats from kernels, and crushing or grinding to increase the surface area available for pressing or roasting.',
      'Proper seed preparation directly affects oil yield, oil quality, and equipment longevity. Seeds that enter the press with foreign matter (stones, metal, dust) cause barrel wear and contamination. Seeds pressed whole, without cracking or dehulling, yield 10–20% less oil than properly prepared seeds. For these reasons, seed processing equipment is not optional — it is the foundation of an efficient pressing operation.',
    ],
    modelRange: [
      'Haonuo provides three seed processing models: a vibrating screen cleaner for debris removal, a combined dehulling and crushing unit, and a hammer mill for fine grinding. Together they handle seeds from 2 mm (flaxseed) to 30 mm (coconut pieces) at throughput rates from 200 kg/h to 1,000 kg/h.',
      'For small workshops processing a single seed type, a standalone screen cleaner may suffice. Operations handling multiple seed varieties or requiring dehulling for higher-grade oil will benefit from the combined processing unit.',
    ],
    selectionCriteria: [
      { label: 'Throughput capacity', desc: 'Match the processing rate to your press capacity — the cleaner and crusher should process at least 1.5× faster than your press consumes, to avoid bottlenecking' },
      { label: 'Screen mesh options', desc: 'Multiple mesh sizes (2–20 mm) allow processing different seed types on the same machine; fixed-mesh machines limit flexibility' },
      { label: 'Dehulling capability', desc: 'Important for sunflower, cottonseed, and rapeseed — hulls absorb oil during pressing and reduce yield; dehulling recovers this lost oil' },
      { label: 'Motor power', desc: 'Range from 1.1 kW to 5.5 kW; harder seeds and higher throughput require more power' },
    ],
    processPosition: 'Seed processing is the first stage of oil production — cleaned and prepared seeds flow to roasting/steaming equipment, then to the hydraulic press. See our Complete Oil Production Line Guide for details.',
    faq: [
      { question: 'Can I skip seed cleaning if I buy seeds from a supplier?', answer: 'Even commercially supplied seeds contain dust, broken fragments, and occasionally small stones or metal contaminants. Running uncleaned seeds through your press accelerates barrel and piston wear, and introduces impurities into your oil. A basic vibrating screen cleaner pays for itself in reduced maintenance and improved oil quality within the first year.' },
      { question: 'Is dehulling necessary for all seeds?', answer: 'No. Sesame, flaxseed, and palm kernel are typically pressed whole — their hulls are thin and do not significantly absorb oil. Sunflower, cottonseed, and rapeseed have thick hulls that trap oil during pressing; dehulling these seeds before pressing can improve oil yield by 8–15%.' },
    ],
  },

  'roasting-steaming-equipment': {
    overview: [
      'Roasting and steaming equipment applies controlled heat to prepared seeds before pressing. The purpose is to break down cell walls, reduce oil viscosity, and inactivate enzymes that cause rancidity. This step can increase oil yield by 5–15% compared to pressing unheated seeds, and significantly improves flavor development in the finished oil.',
      'Temperature control is the critical variable. Different seeds require different roasting profiles — sesame typically reaches 180–200°C, while flaxseed must stay below 105°C to prevent omega-3 degradation. Steaming (moisture addition under heat) is used for seeds that are too dry or too hard for direct pressing, softening the seed structure and making the oil easier to extract.',
    ],
    modelRange: [
      'Haonuo offers three models: an electrically heated drum roaster for precise temperature control (50–300°C), a gas-fired roasting pan for high-volume traditional roasting, and a combined steaming and roasting unit that adds moisture control for hard seeds. Batch capacities range from 20 kg to 80 kg per cycle.',
      'The electric drum roaster suits operations that process multiple seed types and need repeatable temperature profiles. The gas-fired pan is preferred by producers who value traditional flavor development and have access to LPG or natural gas. The combined unit serves operations processing hard seeds like shea or walnut that require moisture conditioning.',
    ],
    selectionCriteria: [
      { label: 'Heat source', desc: 'Electric for precision and repeatability; gas for lower operating cost and traditional flavor profiles' },
      { label: 'Temperature range', desc: 'Ensure the machine covers the full range needed for your seed varieties — some seeds require low-temperature drying (below 105°C), others need high-temperature roasting (above 180°C)' },
      { label: 'Batch capacity', desc: 'Match to your press cycle — the roaster should finish one batch in the time the press completes one pressing cycle' },
      { label: 'Temperature uniformity', desc: 'Drum rotation or stirring mechanism ensures even heating; uneven roasting causes inconsistent yield and off-flavors' },
    ],
    processPosition: 'Roasting and steaming occurs after seed cleaning and before hydraulic pressing. The roasted seeds are immediately loaded into the press barrel while warm, as cooled seeds yield less oil. See our Complete Oil Production Line Guide for the full process.',
    faq: [
      { question: 'What is the difference between roasting and steaming?', answer: 'Roasting applies dry heat to develop flavor and reduce moisture — it is used for sesame, peanut, and sunflower where a toasted flavor is desired. Steaming introduces moisture under heat to soften hard or dry seeds before pressing — it is used for shea, walnut, and palm kernel where the goal is maximum oil extraction rather than flavor.' },
      { question: 'Can I use the same roaster for different seeds?', answer: 'Yes, as long as the temperature range covers all your seed types. The key is to clean the drum thoroughly between batches to prevent flavor carryover. For example, roasting sesame (strong flavor) before sunflower (mild flavor) without cleaning will impart a sesame taste to the sunflower oil.' },
    ],
  },

  'filtration-refining-equipment': {
    overview: [
      'Filtration and refining equipment transforms crude pressed oil into a clear, stable, market-ready product. Crude oil straight from the press contains suspended solids, moisture, phospholipids, and free fatty acids that cause cloudiness, off-flavors, and short shelf life. Filtration removes physical impurities; refining addresses chemical impurities through degumming, neutralization, and bleaching.',
      'The level of processing required depends on the end use. Oil for immediate local sale may need only basic filtration to 20 microns. Oil for retail packaging requires fine filtration to 5 microns plus moisture removal. Oil destined for export or premium food markets may require full refining to meet international food-grade standards.',
    ],
    modelRange: [
      'Haonuo provides three models covering different filtration levels. The plate-and-frame filter press handles coarse to fine filtration (5–50 microns) for small to medium operations. The pneumatic filter press uses compressed air to achieve finer filtration at higher throughput. The combined refining unit performs degumming, neutralization, and bleaching in a single integrated system for producers who need food-grade finished oil.',
      'Standalone filter presses serve producers who press a single seed type and sell locally. The combined refining unit suits operations processing multiple seed types or targeting retail, cosmetic, or export markets that require standardized oil quality.',
    ],
    selectionCriteria: [
      { label: 'Filtration precision', desc: 'Coarse (50+ microns) for bulk sale; fine (5–20 microns) for retail; ultra-fine (below 5 microns) for cosmetic and pharmaceutical applications' },
      { label: 'Throughput', desc: 'Match filter capacity to your daily press output — the filter should process one day\'s oil in 2–3 hours to prevent sedimentation in storage tanks' },
      { label: 'Refining capability', desc: 'Filtration only (physical impurity removal) vs. full refining (degumming + neutralization + bleaching) — your end market determines the requirement' },
      { label: 'Automation level', desc: 'Manual plate-and-frame for low-volume operations; pneumatic or automatic discharge for continuous production' },
    ],
    processPosition: 'Filtration is the final stage before bottling — oil flows from the press, through the filter, and into storage or bottling. For the complete process from seed to bottle, see our Complete Oil Production Line Guide.',
    faq: [
      { question: 'Can I buy just a filter press without the refining unit?', answer: 'Yes. If you sell oil locally in transparent containers and your customers accept some cloudiness, a plate-and-frame filter press alone will remove solids and produce clear-enough oil. You only need the refining unit if your oil must meet food-grade standards for retail, export, or if you process seeds with high phospholipid content (like soybean or rapeseed) that cause clouding and rapid rancidity.' },
      { question: 'What micron rating do I need?', answer: 'For bulk sale in opaque containers, 50-micron filtration removes visible particles. For retail in glass bottles, 5–10 microns produces a clear product. For cosmetic or pharmaceutical use, 1–5 microns combined with activated carbon polishing produces crystal-clear oil. Most food producers find 10-micron filtration the best balance between clarity and filter cost.' },
    ],
  },
};

const fr: Record<string, CategoryContent> = {
  'hydraulic-oil-press': {
    overview: [
      'Les presses à huile hydrauliques utilisent un fluide hydraulique sous pression pour entraîner un piston qui comprime les graines oléagineuses contre un fût perforé. Contrairement au pressage continu par vis, le pressage hydraulique fonctionne en mode discontinu — chaque cycle charge 100 kg de graines préparées, applique une pression pendant 30 à 40 minutes (pressage à chaud) ou 2 heures (pressage à froid), puis libère un tourteau solide. Cette action intermittente maintient la température de pressage basse (généralement inférieure à 60°C pour les modèles à froid), ce qui aide à préserver les nutriments sensibles à la chaleur, l\'arôme naturel et la stabilité oxydative de l\'huile finie.',
      'Cette technologie convient particulièrement aux graines à forte valeur ajoutée où la qualité de l\'huile importe plus que le débit — sésame, noix de coco, noix, lin et karité sont des applications courantes. Les presses hydrauliques industrielles atteignent des taux d\'huile résiduelle de 6 à 8% dans le tourteau, contre 5 à 12% pour les presses à vis, selon le type de graine et la qualité de la préparation. Les configurations à double fût avec rails coulissants doublent effectivement la production journalière en permettant un chargement et un pressage alternés sans une seconde machine.',
    ],
    modelRange: [
      'Haonuo propose 12 modèles de presses hydrauliques couvrant des forces de pressage de 300 à 620 tonnes. Tous les modèles standard partagent la même capacité de lot de 100 kg par cycle. Le niveau de pression est le facteur de différenciation clé — des forces plus élevées gèrent des coquilles de graines plus dures et atteignent des taux d\'huile résiduelle plus bas. Chaque modèle est disponible en configuration à fût simple et à double fût.',
      'La gamme couvre quatre niveaux de pression : 300 tonnes d\'entrée de gamme (HN300), 325 à 360 tonnes standard et renforcé (HN325, HN355) pour la plupart des graines oléagineuses courantes, 500 tonnes à froid (HN426) pour la production d\'huile premium, et les modèles phares ultra-haute pression de 600 à 620 tonnes (HN480B, HN500) qui pressent des noix en coque, des amandes et les matériaux les plus durs en un seul cycle. Une variante spéciale à grand fût (HN325LB) traite la chair de coco et le karité à 20 à 35 kg par lot avec un fût plus large de 500 mm.',
    ],
    selectionCriteria: [
      { label: 'Force de pressage', desc: '300 tonnes pour les graines molles (sésame, lin) ; 325–360 tonnes pour les graines courantes (arachide, colza, tournesol, coton) ; 500+ tonnes pour les matériaux à coque dure (noix, amandes, graines en coque)' },
      { label: 'Configuration du fût', desc: 'Fût simple pour traitement par lot ; double fût avec rails coulissants pour chargement et pressage alternés, doublant effectivement la production journalière' },
      { label: 'Matériau de construction', desc: 'Acier au carbone pour les graines générales ; acier inoxydable 304 pour les applications de qualité alimentaire et cosmétique (coco, avocat)' },
      { label: 'Mode de pressage', desc: 'Pressage à chaud (graines pré-torréfiées) pour un rendement plus élevé et une saveur aromatique ; pressage à froid (sans préchauffage) pour une qualité d\'huile premium et une rétention nutritionnelle' },
      { label: 'Puissance du moteur', desc: 'Moteur standard 2,2 kW sur la plupart des modèles ; les modèles phares de 620 tonnes utilisent des moteurs plus grands pour une récupération de cycle plus rapide et un fonctionnement continu' },
    ],
    processPosition: 'Le pressage hydraulique est l\'étape principale d\'extraction de l\'huile — les graines sont d\'abord nettoyées, éventuellement décortiquées et torréfiées, puis chargées dans le fût de la presse. Consultez notre Guide complet de la ligne de production d\'huile pour le processus complet en 8 étapes.',
    faq: [
      { question: 'Fût unique ou double fût — comment choisir ?', answer: 'Une presse à fût unique traite un lot à la fois, ce qui convient aux petites opérations ou aux producteurs qui testent fréquemment différentes graines. Une presse à double fût permet de charger un fût pendant que l\'autre est en pressage, doublant presque la production journalière. Si votre objectif quotidien dépasse 500 kg de graines, un modèle à double fût est généralement le meilleur investissement.' },
      { question: 'Ai-je besoin d\'une construction en acier inoxydable ?', answer: 'Les fûts en acier au carbone conviennent bien à la plupart des graines oléagineuses courantes — sésame, arachide, tournesol et similaires. Choisissez l\'acier inoxydable 304 si vous traitez la noix de coco, l\'avocat, ou des huiles destinées à un usage cosmétique ou pharmaceutique, car ces applications nécessitent des surfaces de qualité alimentaire qui résistent à la corrosion et empêchent la contamination par ions métalliques.' },
      { question: 'Quelle est la différence entre presse à froid et presse à chaud ?', answer: 'Les deux utilisent le même mécanisme hydraulique. La distinction concerne le fait que les graines sont torréfiées avant le pressage. Le pressage à froid (sans préchauffage) produit une huile avec une meilleure rétention nutritionnelle et une saveur plus légère. Le pressage à chaud (torréfaction préalable des graines) augmente le rendement et produit une saveur plus intense et aromatique, préférée dans de nombreuses cuisines traditionnelles.' },
    ],
  },

  'seed-processing-equipment': {
    overview: [
      'Les équipements de traitement des graines couvrent les étapes de pré-pressage qui préparent les graines brutes pour une extraction optimale de l\'huile. Cela comprend le nettoyage pour éliminer les débris et contaminants, le décorticage pour séparer les enveloppes des amandes, et le concassage ou broyage pour augmenter la surface disponible pour le pressage ou la torréfaction.',
      'Une préparation adéquate des graines affecte directement le rendement en huile, la qualité de l\'huile et la longévité de l\'équipement. Les graines qui entrent dans la presse avec des corps étrangers (pierres, métal, poussière) causent l\'usure du fût et la contamination. Les graines pressées entières, sans concassage ni décorticage, produisent 10–20% moins d\'huile que les graines correctement préparées. Pour ces raisons, l\'équipement de traitement des graines n\'est pas optionnel — c\'est le fondement d\'une opération de pressage efficace.',
    ],
    modelRange: [
      'Haonuo fournit trois modèles de traitement des graines : un nettoyeur à tamis vibrant pour l\'élimination des débris, une unité combinée de décorticage et concassage, et un broyeur à marteaux pour le broyage fin. Ensemble, ils traitent des graines de 2 mm (lin) à 30 mm (morceaux de coco) à des débits de 200 kg/h à 1 000 kg/h.',
      'Pour les petits ateliers traitant un seul type de graine, un nettoyeur à tamis indépendant peut suffire. Les opérations traitant plusieurs variétés de graines ou nécessitant un décorticage pour une huile de qualité supérieure bénéficieront de l\'unité de traitement combinée.',
    ],
    selectionCriteria: [
      { label: 'Capacité de débit', desc: 'Adaptez le taux de traitement à la capacité de votre presse — le nettoyeur et le concasseur devraient traiter au moins 1,5× plus vite que votre presse consomme, pour éviter les goulots d\'étranglement' },
      { label: 'Options de tamis', desc: 'Plusieurs tailles de maille (2–20 mm) permettent de traiter différents types de graines sur la même machine ; les machines à maille fixe limitent la flexibilité' },
      { label: 'Capacité de décorticage', desc: 'Important pour le tournesol, la graine de coton et le colza — les enveloppes absorbent l\'huile pendant le pressage et réduisent le rendement ; le décorticage récupère cette huile perdue' },
      { label: 'Puissance du moteur', desc: 'De 1,1 kW à 5,5 kW ; les graines plus dures et les débits plus élevés nécessitent plus de puissance' },
    ],
    processPosition: 'Le traitement des graines est la première étape de la production d\'huile — les graines nettoyées et préparées vont vers l\'équipement de torréfaction, puis vers la presse hydraulique. Consultez notre Guide complet de la ligne de production d\'huile pour plus de détails.',
    faq: [
      { question: 'Puis-je sauter le nettoyage des graines si j\'achète des graines d\'un fournisseur ?', answer: 'Même les graines fournies commercialement contiennent de la poussière, des fragments cassés et occasionnellement de petites pierres ou des contaminants métalliques. Faire passer des graines non nettoyées dans votre presse accélère l\'usure du fût et du piston, et introduit des impuretés dans votre huile. Un nettoyeur à tamis vibrant de base se rentabilise en maintenance réduite et qualité d\'huile améliorée dès la première année.' },
      { question: 'Le décorticage est-il nécessaire pour toutes les graines ?', answer: 'Non. Le sésame, le lin et le palmiste sont généralement pressés entiers — leurs enveloppes sont fines et n\'absorbent pas significativement l\'huile. Le tournesol, la graine de coton et le colza ont des enveloppes épaisses qui emprisonnent l\'huile pendant le pressage ; le décorticage de ces graines avant le pressage peut améliorer le rendement en huile de 8 à 15%.' },
    ],
  },

  'roasting-steaming-equipment': {
    overview: [
      'Les équipements de torréfaction et de cuisson à la vapeur appliquent une chaleur contrôlée aux graines préparées avant le pressage. L\'objectif est de décomposer les parois cellulaires, de réduire la viscosité de l\'huile et d\'inactiver les enzymes qui causent le rancissement. Cette étape peut augmenter le rendement en huile de 5–15% par rapport au pressage de graines non chauffées, et améliore significativement le développement des arômes dans l\'huile finie.',
      'Le contrôle de la température est la variable critique. Différentes graines nécessitent différents profils de torréfaction — le sésame atteint généralement 180–200°C, tandis que le lin doit rester en dessous de 105°C pour éviter la dégradation des oméga-3. La cuisson à la vapeur (ajout d\'humidité sous chaleur) est utilisée pour les graines trop sèches ou trop dures pour un pressage direct, assouplissant la structure de la graine et facilitant l\'extraction de l\'huile.',
    ],
    modelRange: [
      'Haonuo propose trois modèles : un torréfacteur à tambour chauffé électriquement pour un contrôle précis de la température (50–300°C), une poêle de torréfaction à gaz pour la torréfaction traditionnelle à haut volume, et une unité combinée de cuisson à la vapeur et torréfaction qui ajoute un contrôle d\'humidité pour les graines dures. Les capacités par lot vont de 20 kg à 80 kg par cycle.',
      'Le torréfacteur à tambour électrique convient aux opérations qui traitent plusieurs types de graines et nécessitent des profils de température reproductibles. La poêle à gaz est préférée par les producteurs qui valorisent le développement traditionnel des arômes et ont accès au GPL ou au gaz naturel. L\'unité combinée sert aux opérations traitant des graines dures comme le karité ou la noix qui nécessitent un conditionnement par l\'humidité.',
    ],
    selectionCriteria: [
      { label: 'Source de chaleur', desc: 'Électrique pour la précision et la répétabilité ; gaz pour un coût de fonctionnement inférieur et des profils d\'arômes traditionnels' },
      { label: 'Plage de température', desc: 'Assurez-vous que la machine couvre toute la plage nécessaire pour vos variétés de graines — certaines nécessitent un séchage à basse température (inférieure à 105°C), d\'autres une torréfaction à haute température (supérieure à 180°C)' },
      { label: 'Capacité par lot', desc: 'Adaptez au cycle de votre presse — le torréfacteur devrait terminer un lot dans le temps que la presse complète un cycle de pressage' },
      { label: 'Uniformité de température', desc: 'La rotation du tambour ou un mécanisme d\'agitation assure un chauffage uniforme ; une torréfaction inégale cause un rendement inconsistant et des arômes indésirables' },
    ],
    processPosition: 'La torréfaction et la cuisson à la vapeur ont lieu après le nettoyage des graines et avant le pressage hydraulique. Les graines torréfiées sont immédiatement chargées dans le fût de la presse encore chaudes, car les graines refroidies produisent moins d\'huile. Consultez notre Guide complet de la ligne de production d\'huile pour le processus complet.',
    faq: [
      { question: 'Quelle est la différence entre torréfaction et cuisson à la vapeur ?', answer: 'La torréfaction applique une chaleur sèche pour développer les arômes et réduire l\'humidité — elle est utilisée pour le sésame, l\'arachide et le tournesol où un goût de grillé est recherché. La cuisson à la vapeur introduit de l\'humidité sous chaleur pour assouplir les graines dures ou sèches avant le pressage — elle est utilisée pour le karité, la noix et le palmiste où l\'objectif est l\'extraction maximale d\'huile plutôt que l\'arôme.' },
      { question: 'Puis-je utiliser le même torréfacteur pour différentes graines ?', answer: 'Oui, tant que la plage de température couvre tous vos types de graines. La clé est de nettoyer soigneusement le tambour entre les lots pour éviter la propagation des arômes. Par exemple, torréfier du sésame (arôme fort) avant le tournesol (arôme doux) sans nettoyage donnera un goût de sésame à l\'huile de tournesol.' },
    ],
  },

  'filtration-refining-equipment': {
    overview: [
      'Les équipements de filtration et de raffinage transforment l\'huile brute pressée en un produit clair, stable et commercialisable. L\'huile brute sortant de la presse contient des solides en suspension, de l\'humidité, des phospholipides et des acides gras libres qui causent troubles, arômes indésirables et courte durée de conservation. La filtration élimine les impuretés physiques ; le raffinage traite les impuretés chimiques par démucilagination, neutralisation et décoloration.',
      'Le niveau de traitement requis dépend de l\'utilisation finale. L\'huile pour la vente locale immédiate peut nécessiter seulement une filtration de base à 20 microns. L\'huile pour l\'emballage de détail nécessite une filtration fine à 5 microns plus l\'élimination de l\'humidité. L\'huile destinée à l\'exportation ou aux marchés alimentaires premium peut nécessiter un raffinage complet pour répondre aux normes alimentaires internationales.',
    ],
    modelRange: [
      'Haonuo fournit trois modèles couvrant différents niveaux de filtration. Le filtre-presse à plateaux et cadres assure une filtration grossière à fine (5–50 microns) pour les petites et moyennes opérations. Le filtre-presse pneumatique utilise l\'air comprimé pour obtenir une filtration plus fine à un débit plus élevé. L\'unité de raffinage combinée effectue la démucilagination, la neutralisation et la décoloration dans un seul système intégré pour les producteurs qui ont besoin d\'une huile finie de qualité alimentaire.',
      'Les filtres-presses indépendants conviennent aux producteurs qui pressent un seul type de graine et vendent localement. L\'unité de raffinage combinée convient aux opérations traitant plusieurs types de graines ou ciblant les marchés de détail, cosmétiques ou d\'exportation qui nécessitent une qualité d\'huile standardisée.',
    ],
    selectionCriteria: [
      { label: 'Précision de filtration', desc: 'Grossier (50+ microns) pour la vente en gros ; fin (5–20 microns) pour le détail ; ultra-fin (inférieur à 5 microns) pour les applications cosmétiques et pharmaceutiques' },
      { label: 'Débit', desc: 'Adaptez la capacité du filtre à votre production journalière de presse — le filtre devrait traiter l\'huile d\'une journée en 2–3 heures pour empêcher la sédimentation dans les réservoirs de stockage' },
      { label: 'Capacité de raffinage', desc: 'Filtration seule (élimination des impuretés physiques) vs. raffinage complet (démucilagination + neutralisation + décoloration) — votre marché cible détermine l\'exigence' },
      { label: 'Niveau d\'automatisation', desc: 'Filtre-presse manuel pour les opérations à faible volume ; décharge pneumatique ou automatique pour la production continue' },
    ],
    processPosition: 'La filtration est l\'étape finale avant l\'embouteillage — l\'huile coule de la presse, à travers le filtre, puis vers le stockage ou l\'embouteillage. Pour le processus complet de la graine à la bouteille, consultez notre Guide complet de la ligne de production d\'huile.',
    faq: [
      { question: 'Puis-je acheter seulement un filtre-presse sans l\'unité de raffinage ?', answer: 'Oui. Si vous vendez de l\'huile localement dans des contenants opaques et que vos clients acceptent un peu de trouble, un filtre-presse à plateaux et cadres seul éliminera les solides et produira une huile suffisamment claire. Vous n\'avez besoin de l\'unité de raffinage que si votre huile doit répondre aux normes de qualité alimentaire pour le détail, l\'exportation, ou si vous traitez des graines à forte teneur en phospholipides (comme le soja ou le colza) qui causent des troubles et un rancissement rapide.' },
      { question: 'Quel degré de filtration en microns me faut-il ?', answer: 'Pour la vente en gros dans des contenants opaques, une filtration à 50 microns élimine les particules visibles. Pour le détail en bouteilles en verre, 5–10 microns produisent un produit clair. Pour un usage cosmétique ou pharmaceutique, 1–5 microns combinés à un polissage au charbon actif produisent une huile parfaitement limpide. La plupart des producteurs alimentaires trouvent que la filtration à 10 microns offre le meilleur équilibre entre clarté et coût de filtre.' },
    ],
  },
};

const ar: Record<string, CategoryContent> = {
  'hydraulic-oil-press': {
    overview: [
      'تستخدم معاصر الزيت الهيدروليكية سائلاً هيدروليكياً مضغوطاً لدفع مكبس يضغط البذور الزيتية ضد برميل مثقب. على عكس العصر المستمر بالبرغي، يعمل العصر الهيدروليكي في وضعية دفعية — كل دورة تحمل 100 كجم من البذور المحضرة، وتطبق الضغط لمدة 30-40 دقيقة (العصر على الساخن) أو ساعتين (العصر على البارد)، ثم تطلق كعكة زيتية صلبة. هذا التشغيل المتقطع يحافظ على انخفاض حرارة العصر (عادة أقل من 60°C لنماذج العصر على البارد)، مما يساعد على الحفاظ على العناصر الغذائية الحساسة للحرارة والنكهة الطبيعية واستقرار أكسدة الزيت النهائي.',
      'هذه التقنية مناسبة بشكل خاص للبذور عالية القيمة حيث تكون جودة الزيت أهم من الإنتاجية — السمسم وجوز الهند والجوز وبذور الكتان والكاريتيه هي تطبيقات شائعة. تحقق المعاصر الهيدروليكية الصناعية معدلات زيت متبقي من 6-8% في الكعكة، مقارنة بـ 5-12% للمعاصر البرمية، حسب نوع البذور وجودة التحضير. التكوينات ذات البرميل المزدوج مع القضبان المنزلقة تضاعف فعلياً الإنتاج اليومي من خلال السماح بالتحميل والعصر بالتناوب بدون آلة ثانية.',
    ],
    modelRange: [
      'تقدم Haonuo 12 نموذجاً من المعاصر الهيدروليكية تغطي قوى عصر من 300 طن إلى 620 طن. جميع النماذج القياسية تشترك في نفس سعة الدفعة البالغة 100 كجم لكل دورة. مستوى الضغط هو العامل المتميز الرئيسي — القوى الأعلى تتعامل مع قشور البذور الأكثر صلابة وتحقق معدلات زيت متبقي أقل. كل نموذج متوفر في تكوين البرميل الواحد والبرميل المزدوج.',
      'تغطي مجموعة المنتجات أربعة مستويات ضغط: 300 طن للمبتدئين (HN300)، 325-360 طن القياسي والمعزز (HN325، HN355) لمعظم البذور الزيتية الشائعة، 500 طن للعصر على البارد (HN426) لإنتاج زيت ممتاز، والنماذج الرائدة فائقة الضغط العالي من 600-620 طن (HN480B، HN500) التي تعصر الجوز في قشرته واللوز وأكثر المواد صلابة في دورة واحدة. يوجد متغير خاص ذو برميل كبير (HN325LB) يتعامل مع لحم جوز الهند والكاريتيه عند 20-35 كجم لكل دفعة مع برميل أوسع بقطر 500 مم.',
    ],
    selectionCriteria: [
      { label: 'قوة العصر', desc: '300 طن للبذور اللينة (السمسم، الكتان)؛ 325-360 طن للبذور الشائعة (الفول السوداني، اللفت، عباد الشمس، القطن)؛ 500+ طن للمواد ذات القشرة الصلبة (الجوز، اللوز، البذور في قشرتها)' },
      { label: 'تكوين البرميل', desc: 'برميل واحد للمعالجة الدفعية؛ برميل مزدوج مع قضبان منزلقة للتحميل والعصر بالتناوب، مما يضاعف فعلياً الإنتاج اليومي' },
      { label: 'مادة البناء', desc: 'فولاذ كربوني للبذور العامة؛ فولاذ مقاوم للصدأ 304 لتطبيقات الدرجة الغذائية والتجميلية (جوز الهند، الأفوكادو)' },
      { label: 'وضع العصر', desc: 'العصر على الساخن (بذور محمصة مسبقاً) لعائد أعلى ونكهة عطرية؛ العصر على البارد (بدون تسخين مسبق) لجودة زيت ممتازة واحتفاظ غذائي' },
      { label: 'قوة المحرك', desc: 'محرك قياسي 2.2 كيلوواط على معظم النماذج؛ النماذج الرائدة 620 طن تستخدم محركات أكبر لاستعادة دورة أسرع وتشغيل مستمر' },
    ],
    processPosition: 'العصر الهيدروليكي هو خطوة استخلاص الزيت الرئيسية — تُنظف البذور أولاً وتُقشر وتُحمص اختيارياً، ثم تُحمل في برميل المعصرة. راجع دليلنا الكامل لخط إنتاج الزيت لمعرفة العملية الكاملة ذات المراحل الثمانية.',
    faq: [
      { question: 'برميل واحد أم برميل مزدوج — كيف أختار؟', answer: 'معصرة البرميل الواحد تعالج دفعة واحدة في كل مرة، مما يناسب العمليات الصغيرة أو المنتجين الذين يختبرون بذوراً مختلفة بشكل متكرر. معصرة البرميل المزدوج تسمح بتحميل برميل أثناء عصر الآخر، مما يضاعف الإنتاج اليومي تقريباً. إذا كان هدفك اليومي يتجاوز 500 كجم من البذور، فإن نموذج البرميل المزدوج عادة ما يكون استثماراً أفضل.' },
      { question: 'هل أحتاج إلى بناء من الفولاذ المقاوم للصدأ؟', answer: 'تعمل براميل الفولاذ الكربوني بشكل جيد لمعظم البذور الزيتية الشائعة — السمسم والفول السوداني وعباد الشمس وما شابه. اختر الفولاذ المقاوم للصدأ 304 إذا كنت تعالج جوز الهند أو الأفوكادو أو الزيوت المخصصة للاستخدام التجميلي أو الصيدلاني، حيث تتطلب هذه التطبيقات أسطحاً من الدرجة الغذائية تقاوم التآكل وتمنع تلوث أيونات المعادن.' },
      { question: 'ما الفرق بين العصر على البارد والعصر على الساخن؟', answer: 'كلاهما يستخدم نفس الآلية الهيدروليكية. يشير الاختلاف إلى ما إذا كانت البذور تحمص قبل العصر. العصر على البارد (بدون تسخين مسبق) ينتج زيتاً مع احتفاظ غذائي أفضل ونكهة أخف. العصر على الساخن (تحميص البذور أولاً) يزيد العائد وينتج نكهة أكثر كثافة وعطرية، مفضلة في العديد من المطابخ التقليدية.' },
    ],
  },

  'seed-processing-equipment': {
    overview: [
      'تغطي معدات معالجة البذور مراحل ما قبل العصر التي تحضر البذور الخام لاستخلاص الزيت الأمثل. يشمل ذلك التنظيف لإزالة الحطام والملوثات، القشر لفصل قشور البذور عن اللب، والطحن أو السحق لزيادة المساحة المتاحة للعصر أو التحميص.',
      'يؤثر تحضير البذور المناسب بشكل مباشر على عائد الزيت وجودة الزيت وعمر المعدات. البذور التي تدخل المعصرة مع مواد غريبة (أحجار، معدن، غبار) تسبب تآكل البرميل وتلوثاً. البذور المعصورة كاملة، دون كسر أو تقشير، تنتج زيتاً أقل بنسبة 10-20% من البذور المحضرة بشكل صحيح. لهذه الأسباب، معدات معالجة البذور ليست اختيارية — بل هي أساس عملية عصر فعالة.',
    ],
    modelRange: [
      'توفر Haonuo ثلاثة نماذج لمعالجة البذور: غربال اهتزازي للتنظيف وإزالة الحطام، وحدة مشتركة للقشر والسحق، ومطحنة مطارق للطحن الناعم. معاً تتعامل مع بذور من 2 ملم (بذور الكتان) إلى 30 ملم (قطع جوز الهند) بمعدلات إنتاج من 200 كجم/ساعة إلى 1000 كجم/ساعة.',
      'بالنسبة للورشات الصغيرة التي تعالج نوع بذور واحد، قد يكفي غربال تنظيف مستقل. العمليات التي تتعامل مع أنواع بذور متعددة أو تحتاج إلى قشر لزيت أعلى جودة ستستفيد من وحدة المعالجة المشتركة.',
    ],
    selectionCriteria: [
      { label: 'سعة الإنتاج', desc: 'طابق معدل المعالجة مع سعة معصرتك — يجب أن يعالج المنظف والسحق بسرعة 1.5× على الأقل من سرعة استهلاك معصرتك، لتجنب الاختناقات' },
      { label: 'خيارات الغربال', desc: 'أحجام شبكة متعددة (2-20 ملم) تسمح بمعالجة أنواع بذور مختلفة على نفس الآلة؛ الآلات ذات الشبكة الثابتة تحد المرونة' },
      { label: 'قدرة التقشير', desc: 'مهم لعباد الشمس وبذور القطن وبذور اللفت — القشور تمتص الزيت أثناء العصر وتقلل العائد؛ التقشير يستعيد هذا الزيت المفقود' },
      { label: 'قوة المحرك', desc: 'تتراوح من 1.1 كيلوواط إلى 5.5 كيلوواط؛ البذور الأصلب والإنتاج الأعلى يتطلب مزيداً من القوة' },
    ],
    processPosition: 'معالجة البذور هي المرحلة الأولى من إنتاج الزيت — تتدفق البذور المنظفة والمحضرة إلى معدات التحميص، ثم إلى المعصرة الهيدروليكية. راجع دليلنا الكامل لخط إنتاج الزيت للتفاصيل.',
    faq: [
      { question: 'هل يمكنني تخطي تنظيف البذور إذا اشتريت بذوراً من مورّد؟', answer: 'حتى البذور الموردة تجارياً تحتوي على غبار وشظايا مكسورة وأحياناً أحجار صغيرة أو ملوثات معدنية. تشغيل بذور غير منظفة عبر معصرتك يسرع تآكل البرميل والمكبس، ويدخل شوائب في زيتك. غربال اهتزازي أساسي للتنظيف يسترد تكلفته في صيانة مخفضة وجودة زيت محسنة خلال السنة الأولى.' },
      { question: 'هل التقشير ضروري لكل البذور؟', answer: 'لا. السمسم وبذور الكتان ونواة النخيل تُعصر عادة كاملة — قشورها رفيعة ولا تمتص الزيت بشكل كبير. عباد الشمس وبذور القطن وبذور اللفت لها قشور سميكة تحبس الزيت أثناء العصر؛ تقشير هذه البذور قبل العصر يمكن أن يحسن عائد الزيت بنسبة 8-15%.' },
    ],
  },

  'roasting-steaming-equipment': {
    overview: [
      'تطبق معدات التحميص والطهي على البخار حرارة محكومة على البذور المحضرة قبل العصر. الهدف هو تكسير الجدران الخلوية، وتقليل لزوجة الزيت، وتعطيل الإنزيمات التي تسبب التزنخ. هذه الخطوة يمكن أن تزيد عائد الزيت بنسبة 5-15% مقارنة بعصر بذور غير مسخنة، وتحسن بشكل كبير تطور النكهة في الزيت النهائي.',
      'التحكم في درجة الحرارة هو المتغير الحرج. البذور المختلفة تتطلب ملفات تحميص مختلفة — السمسم يصل عادة إلى 180-200°C، بينما يجب أن يبقى الكتان أقل من 105°C لمنع تدهور أوميغا-3. الطهي بالبخار (إضافة رطوبة تحت الحرارة) يستخدم للبذور الجافة جداً أو الصلبة جداً للعصر المباشر، مما يلين بنية البذرة ويسهل استخلاص الزيت.',
    ],
    modelRange: [
      'تقدم Haonuo ثلاثة نماذج: محمصة أسطوانية ساخنة كهربائياً للتحكم الدقيق في درجة الحرارة (50-300°C)، مقلاة تحميص بالغاز للتحميص التقليدي عالي الحجم، ووحدة مشتركة للطهي بالبخار والتحميص تضيف تحكماً في الرطوبة للبذور الصلبة. تتراوح سعات الدفعة من 20 كجم إلى 80 كجم لكل دورة.',
      'المحمصة الأسطوانية الكهربائية تناسب العمليات التي تعالج أنواعاً متعددة من البذور وتحتاج إلى ملفات حرارة قابلة للتكرار. مقلاة الغاز يفضلها المنتجون الذين يقدرون تطوير النكهة التقليدي ولديهم وصول إلى الغاز البترولي المسال أو الغاز الطبيعي. الوحدة المشتركة تخدم العمليات التي تعالج بذوراً صلبة مثل الكاريتيه أو الجوز التي تتطلب تهيئة الرطوبة.',
    ],
    selectionCriteria: [
      { label: 'مصدر الحرارة', desc: 'كهربائي للدقة والتكرار؛ غاز لتكلفة تشغيل أقل وملفات نكهة تقليدية' },
      { label: 'نطاق درجة الحرارة', desc: 'تأكد من أن الآلة تغطي النطاق الكامل المطلوب لأنواع بذورك — بعض البذور تتطلب تجفيفاً بدرجة حرارة منخفضة (أقل من 105°C)، وأخرى تتطلب تحميصاً بدرجة حرارة عالية (أعلى من 180°C)' },
      { label: 'سعة الدفعة', desc: 'طابقها مع دورة معصرتك — يجب أن تنهي المحمصة دفعة واحدة في الوقت الذي تكمل فيه المعصرة دورة عصر واحدة' },
      { label: 'تجانس درجة الحرارة', desc: 'دوران الأسطوانة أو آلية تقليب تضمن تسخيناً متساوياً؛ التحميص غير المتساوي يسبب عائداً غير متسق ونكهات غير مرغوبة' },
    ],
    processPosition: 'يحدث التحميص والطهي بالبخار بعد تنظيف البذور وقبل العصر الهيدروليكي. تُحمل البذور المحمصة فوراً في برميل المعصرة وهي لا تزال ساخنة، لأن البذور المبردة تنتج زيتاً أقل. راجع دليلنا الكامل لخط إنتاج الزيت للعملية الكاملة.',
    faq: [
      { question: 'ما الفرق بين التحميص والطهي بالبخار؟', answer: 'التحميص يطبق حرارة جافة لتطوير النكهة وتقليل الرطوبة — يستخدم للسمسم والفول السوداني وعباد الشمس حيث تكون النكهة المحمصة مرغوبة. الطهي بالبخار يضيف رطوبة تحت الحرارة لتليين البذور الصلبة أو الجافة قبل العصر — يستخدم للكاريتيه والجوز ونواة النخيل حيث يكون الهدف هو أقصى استخلاص للزيت بدلاً من النكهة.' },
      { question: 'هل يمكنني استخدام نفس المحمصة لأنواع مختلفة من البذور؟', answer: 'نعم، طالما أن نطاق درجة الحرارة يغطي جميع أنواع بذورك. المفتاح هو تنظيف الأسطوانة بعناية بين الدفعات لمنع انتقال النكهة. على سبيل المثال، تحميص السمسم (نكهة قوية) قبل عباد الشمس (نكهة خفيفة) دون تنظيف سيضفي طعم السمسم على زيت عباد الشمس.' },
    ],
  },

  'filtration-refining-equipment': {
    overview: [
      'معدات الترشيح والتكرير تحول الزيت الخام المعصور إلى منتج واضح ومستقر وجاهز للتسويق. الزيت الخام القادم مباشرة من المعصرة يحتوي على شوائب صلبة عالقة ورطوبة وفوسفوليبيدات وأحماض دهنية حرة تسبب العكارة والنكهات غير المرغوبة وقصر مدة الصلاحية. الترشيح يزيل الشوائب الفيزيائية؛ التكرير يعالج الشوائب الكيميائية عبر إزالة الصمغ والتعادل والتبييض.',
      'مستوى المعالجة المطلوب يعتمد على الاستخدام النهائي. الزيت للبيع المحلي الفوري قد يحتاج فقط إلى ترشيح أساسي عند 20 ميكرون. الزيت لتعبئة التجزئة يتطلب ترشيحاً دقيقاً عند 5 ميكرون بالإضافة إلى إزالة الرطوبة. الزيت المخصص للتصدير أو أسواق الأغذية الفاخرة قد يتطلب تكريراً كاملاً للوفاء بمعايير الدرجة الغذائية الدولية.',
    ],
    modelRange: [
      'توفر Haonuo ثلاثة نماذج تغطي مستويات ترشيح مختلفة. مرشح صحائح وإطارات يتعامل مع الترشيح الخشن إلى الدقيق (5-50 ميكرون) للعمليات الصغيرة إلى المتوسطة. المرشح الهوائي يستخدم الهواء المضغوط لتحقيق ترشيح أدق عند إنتاجية أعلى. وحدة التكرير المشتركة تؤدي إزالة الصمغ والتعادل والتبييض في نظام متكامل واحد للمنتجين الذين يحتاجون إلى زيت تام من الدرجة الغذائية.',
      'المرشحات المستقلة تخدم المنتجين الذين يعصرون نوعاً واحداً من البذور ويبيعون محلياً. وحدة التكرير المشتركة تناسب العمليات التي تعالج أنواعاً متعددة من البذور أو تستهدف أسواق التجزئة أو التجميل أو التصدير التي تتطلب جودة زيت قياسية.',
    ],
    selectionCriteria: [
      { label: 'دقة الترشيح', desc: 'خشن (50+ ميكرون) للبيع بالجملة؛ دقيق (5-20 ميكرون) للبيع بالتجزئة؛ فائق الدقة (أقل من 5 ميكرون) للتطبيقات التجميلية والصيدلانية' },
      { label: 'الإنتاجية', desc: 'طابق سعة المرشح مع إنتاج معصرتك اليومي — يجب أن يعالج المرشح زيت يوم واحد في 2-3 ساعات لمنع الترسيب في خزانات التخزين' },
      { label: 'قدرة التكرير', desc: 'ترشيح فقط (إزالة الشوائب الفيزيائية) مقابل تكرير كامل (إزالة صمغ + تعادل + تبييض) — سوقك المستهدف يحدد المتطلبات' },
      { label: 'مستوى الأتمتة', desc: 'مرشح صحائح يدوي للعمليات منخفضة الحجم؛ تفريغ هوائي أو آلي للإنتاج المستمر' },
    ],
    processPosition: 'الترشيح هو المرحلة النهائية قبل التعبئة — يتدفق الزيت من المعصرة، عبر المرشح، ثم إلى التخزين أو التعبئة. للعملية الكاملة من البذرة إلى الزجاجة، راجع دليلنا الكامل لخط إنتاج الزيت.',
    faq: [
      { question: 'هل يمكنني شراء مرشح فقط بدون وحدة التكرير؟', answer: 'نعم. إذا كنت تبيع الزيت محلياً في عبوات معتمة ويقبل عملاؤك بعض العكارة، فإن مرشح الصحائح والإطارات وحده سيزيل المواد الصلبة وينتج زيتاً واضحاً بما فيه الكفاية. تحتاج وحدة التكرير فقط إذا كان زيتك يجب أن يلبي معايير الدرجة الغذائية للبيع بالتجزئة أو التصدير، أو إذا كنت تعالج بذوراً عالية المحتوى من الفوسفوليبيدات (مثل فول الصويا أو بذور اللفت) التي تسبب العكارة والتزنخ السريع.' },
      { question: 'ما التصنيف الميكروني الذي أحتاجه؟', answer: 'للبيع بالجملة في عبوات معتمة، ترشيح 50 ميكرون يزيل الجسيمات المرئية. للبيع بالتجزئة في زجاجات زجاجية، 5-10 ميكرون تنتج منتجاً واضحاً. للاستخدام التجميلي أو الصيدلاني، 1-5 ميكرون مع تلميع بالكربون النشط تنتج زيتاً صافياً تماماً. يجد معظم منتجي الأغذية أن الترشيح عند 10 ميكرون يوفر أفضل توازن بين الوضوح وتكلفة المرشح.' },
    ],
  },
};

const id: Record<string, CategoryContent> = {
  'hydraulic-oil-press': {
    overview: [
      'Mesin press minyak hidrolik menggunakan cairan hidrolik bertekanan untuk mendorong piston yang menekan biji-bijian berminyak terhadap laras berlubang. Berbeda dengan penekanan sekrup kontinu, penekanan hidrolik beroperasi dalam mode batch — setiap siklus memuat 100 kg biji yang dipersiapkan, menerapkan tekanan selama 30–40 menit (penekanan panas) atau 2 jam (penekanan dingin), kemudian melepaskan kue minyak padat. Tindakan intermiten ini menjaga suhu penekanan tetap rendah (biasanya di bawah 60°C untuk model penekanan dingin), yang membantu mempertahankan nutrisi sensitif panas, aroma alami, dan stabilitas oksidasi minyak jadi.',
      'Teknologi ini sangat cocok untuk biji bernilai tinggi di mana kualitas minyak lebih penting daripada throughput — wijen, kelapa, kenari, biji rami, dan shea adalah aplikasi umum. Mesin press hidrolik industri mencapai tingkat minyak residu 6–8% dalam kue, dibandingkan 5–12% untuk mesin press sekrup, tergantung jenis biji dan kualitas persiapan. Konfigurasi laras ganda dengan rel geser secara efektif menggandakan output harian dengan memungkinkan pemuatan dan penekanan bergantian tanpa mesin kedua.',
    ],
    modelRange: [
      'Haonuo menawarkan 12 model mesin press hidrolik yang mencakup gaya penekanan dari 300 ton hingga 620 ton. Semua model standar berbagi kapasitas batch yang sama yaitu 100 kg per siklus. Peringkat tekanan adalah pembeda utama — gaya yang lebih tinggi menangani cangkang biji yang lebih keras dan mencapai tingkat minyak residu yang lebih rendah. Setiap model tersedia dalam konfigurasi laras tunggal dan laras ganda.',
      'Lini produk mencakup empat tingkatan tekanan: 300 ton tingkat pemula (HN300), 325–360 ton standar dan tugas berat (HN325, HN355) untuk sebagian besar biji minyak umum, 500 ton penekanan dingin (HN426) untuk produksi minyak premium, dan model unggulan ultra-tekanan tinggi 600–620 ton (HN480B, HN500) yang menekan kenari dalam cangkangnya, almond, dan material terkeras dalam satu siklus. Tersedia varian laras besar khusus (HN325LB) yang menangani daging kelapa dan shea pada 20–35 kg per batch dengan laras lebar 500 mm.',
    ],
    selectionCriteria: [
      { label: 'Gaya penekanan', desc: '300 ton untuk biji lunak (wijen, rami); 325–360 ton untuk biji umum (kacang, rapeseed, bunga matahari, kapas); 500+ ton untuk material cangkang keras (kenari, almond, biji dalam cangkang)' },
      { label: 'Konfigurasi laras', desc: 'Laras tunggal untuk pemrosesan batch; laras ganda dengan rel geser untuk pemuatan dan penekanan bergantian, secara efektif menggandakan output harian' },
      { label: 'Material konstruksi', desc: 'Baja karbon untuk biji umum; baja tahan karat 304 untuk aplikasi kelas pangan dan kosmetik (kelapa, alpukat)' },
      { label: 'Mode penekanan', desc: 'Penekanan panas (biji disangrai sebelumnya) untuk hasil lebih tinggi dan rasa aromatik; penekanan dingin (tanpa pemanasan awal) untuk kualitas minyak premium dan retensi nutrisi' },
      { label: 'Daya motor', desc: 'Motor standar 2,2 kW pada sebagian besar model; model unggulan 620 ton menggunakan motor yang lebih besar untuk pemulihan siklus lebih cepat dan operasi kontinu' },
    ],
    processPosition: 'Penekanan hidrolik adalah langkah utama ekstraksi minyak — biji pertama dibersihkan, opsional dikupas dan disangrai, kemudian dimuat ke dalam laras press. Lihat Panduan Lengkap Lini Produksi Minyak kami untuk proses 8 tahap lengkap.',
    faq: [
      { question: 'Laras tunggal vs. laras ganda — bagaimana cara memilih?', answer: 'Mesin press laras tunggal memproses satu batch pada satu waktu, yang cocok untuk operasi kecil atau produsen yang sering menguji biji berbeda. Mesin press laras ganda memungkinkan Anda memuat satu laras sambil yang lain sedang menekan, hampir menggandakan output harian. Jika target harian Anda melebihi 500 kg biji, model laras ganda biasanya merupakan investasi yang lebih baik.' },
      { question: 'Apakah saya perlu konstruksi baja tahan karat?', answer: 'Laras baja karbon bekerja dengan baik untuk kebanyakan biji berminyak umum — wijen, kacang, bunga matahari, dan sejenisnya. Pilih baja tahan karat 304 jika Anda memproses kelapa, alpukat, atau minyak untuk penggunaan kosmetik atau farmasi, karena aplikasi ini memerlukan permukaan kelas pangan yang tahan korosi dan mencegah kontaminasi ion logam.' },
      { question: 'Apa perbedaan antara mesin press dingin dan press panas?', answer: 'Keduanya menggunakan mekanisme hidrolik yang sama. Perbedaannya merujuk pada apakah biji disangrai sebelum ditekan. Press dingin (tanpa pemanasan awal) menghasilkan minyak dengan retensi nutrisi yang lebih baik dan rasa yang lebih ringan. Press panas (menyangrai biji terlebih dahulu) meningkatkan hasil dan menghasilkan rasa yang lebih intens dan aromatik, lebih disukai dalam banyak masakan tradisional.' },
    ],
  },

  'seed-processing-equipment': {
    overview: [
      'Peralatan pemrosesan biji mencakup tahap pra-penekanan yang menyiapkan biji mentah untuk ekstraksi minyak optimal. Ini termasuk pembersihan untuk menghilangkan kotoran dan kontaminan, pengupasan untuk memisahkan kulit biji dari inti, dan penghancuran atau penggilingan untuk meningkatkan luas permukaan yang tersedia untuk penekanan atau penyangraian.',
      'Persiapan biji yang tepat secara langsung mempengaruhi hasil minyak, kualitas minyak, dan umur peralatan. Biji yang masuk ke press dengan benda asing (batu, logam, debu) menyebabkan keausan laras dan kontaminasi. Biji yang ditekan utuh, tanpa penghancuran atau pengupasan, menghasilkan 10–20% lebih sedikit minyak dibandingkan biji yang dipersiapkan dengan benar. Untuk alasan ini, peralatan pemrosesan biji bukan opsional — ini adalah fondasi operasi penekanan yang efisien.',
    ],
    modelRange: [
      'Haonuo menyediakan tiga model pemrosesan biji: ayak getar pembersih untuk penghilangan kotoran, unit gabungan pengupas dan penghancur, dan hammer mill untuk penggilingan halus. Bersama-sama mereka menangani biji dari 2 mm (biji rami) hingga 30 mm (potongan kelapa) pada laju throughput dari 200 kg/jam hingga 1.000 kg/jam.',
      'Untuk bengkel kecil yang memproses satu jenis biji, ayak pembersih mandiri mungkin cukup. Operasi yang menangani berbagai varietas biji atau memerlukan pengupasan untuk minyak kelas lebih tinggi akan mendapat manfaat dari unit pemrosesan gabungan.',
    ],
    selectionCriteria: [
      { label: 'Kapasitas throughput', desc: 'Sesuaikan laju pemrosesan dengan kapasitas press Anda — pembersih dan penghancur harus memproses setidaknya 1,5× lebih cepat dari kecepatan konsumsi press Anda, untuk menghindari kemacetan' },
      { label: 'Opsi saringan', desc: 'Beberapa ukuran mesh (2–20 mm) memungkinkan pemrosesan berbagai jenis biji pada mesin yang sama; mesin mesh tetap membatasi fleksibilitas' },
      { label: 'Kemampuan pengupasan', desc: 'Penting untuk bunga matahari, biji kapas, dan biji kanola — kulit menyerap minyak selama penekanan dan mengurangi hasil; pengupasan memulihkan minyak yang hilang' },
      { label: 'Daya motor', desc: 'Berkisar dari 1,1 kW hingga 5,5 kW; biji yang lebih keras dan throughput lebih tinggi membutuhkan lebih banyak daya' },
    ],
    processPosition: 'Pemrosesan biji adalah tahap pertama produksi minyak — biji yang dibersihkan dan disiapkan mengalir ke peralatan penyangraian, kemudian ke press hidrolik. Lihat Panduan Lengkap Lini Produksi Minyak kami untuk detail.',
    faq: [
      { question: 'Bisakah saya melewatkan pembersihan biji jika saya membeli biji dari pemasok?', answer: 'Bahkan biji yang dipasok secara komersial mengandung debu, fragmen pecah, dan sesekali batu kecil atau kontaminan logam. Menjalankan biji yang tidak dibersihkan melalui press Anda mempercepat keausan laras dan piston, dan memasukkan kotoran ke dalam minyak Anda. Ayak getar pembersih dasar membayar dirinya sendiri dalam pemeliharaan yang berkurang dan kualitas minyak yang ditingkatkan dalam tahun pertama.' },
      { question: 'Apakah pengupasan perlu untuk semua biji?', answer: 'Tidak. Wijen, biji rami, dan inti sawit biasanya ditekan utuh — kulitnya tipis dan tidak menyerap minyak secara signifikan. Bunga matahari, biji kapas, dan biji kanola memiliki kulit tebal yang menjebak minyak selama penekanan; mengupas biji-bijian ini sebelum penekanan dapat meningkatkan hasil minyak sebesar 8–15%.' },
    ],
  },

  'roasting-steaming-equipment': {
    overview: [
      'Peralatan penyangraian dan pengukusan menerapkan panas terkontrol pada biji yang disiapkan sebelum penekanan. Tujuannya adalah memecah dinding sel, mengurangi viskositas minyak, dan menonaktifkan enzim yang menyebabkan ketengikan. Langkah ini dapat meningkatkan hasil minyak sebesar 5–15% dibandingkan menekan biji yang tidak dipanaskan, dan secara signifikan meningkatkan pengembangan rasa dalam minyak jadi.',
      'Kontrol suhu adalah variabel kritis. Biji yang berbeda memerlukan profil penyangraian yang berbeda — wijen biasanya mencapai 180–200°C, sementara biji rami harus tetap di bawah 105°C untuk mencegah degradasi omega-3. Pengukusan (penambahan kelembaban di bawah panas) digunakan untuk biji yang terlalu kering atau terlalu keras untuk penekanan langsung, melunakkan struktur biji dan memudahkan ekstraksi minyak.',
    ],
    modelRange: [
      'Haonuo menawarkan tiga model: penyangrai drum berpemanas listrik untuk kontrol suhu presisi (50–300°C), wajan penyangraian gas untuk penyangraian tradisional volume tinggi, dan unit gabungan pengukusan dan penyangraian yang menambahkan kontrol kelembaban untuk biji keras. Kapasitas batch berkisar dari 20 kg hingga 80 kg per siklus.',
      'Penyangrai drum listrik cocok untuk operasi yang memproses berbagai jenis biji dan membutuhkan profil suhu yang dapat diulang. Wajan gas lebih disukai oleh produsen yang menghargai pengembangan rasa tradisional dan memiliki akses ke LPG atau gas alam. Unit gabungan melayani operasi yang memproses biji keras seperti shea atau kenari yang membutuhkan kondisi kelembaban.',
    ],
    selectionCriteria: [
      { label: 'Sumber panas', desc: 'Listrik untuk presisi dan repeatabilitas; gas untuk biaya operasi lebih rendah dan profil rasa tradisional' },
      { label: 'Rentang suhu', desc: 'Pastikan mesin menutupi seluruh rentang yang dibutuhkan untuk varietas biji Anda — beberapa biji memerlukan pengeringan suhu rendah (di bawah 105°C), lainnya memerlukan penyangraian suhu tinggi (di atas 180°C)' },
      { label: 'Kapasitas batch', desc: 'Sesuaikan dengan siklus press Anda — penyangrai harus menyelesaikan satu batch dalam waktu press menyelesaikan satu siklus penekanan' },
      { label: 'Keseragaman suhu', desc: 'Rotasi drum atau mekanisme pengadukan memastikan pemanasan merata; penyangraian tidak merata menyebabkan hasil inkonsisten dan rasa tidak diinginkan' },
    ],
    processPosition: 'Penyangraian dan pengukusan terjadi setelah pembersihan biji dan sebelum penekanan hidrolik. Biji yang disangrai segera dimuat ke dalam laras press selagi hangat, karena biji yang didinginkan menghasilkan lebih sedikit minyak. Lihat Panduan Lengkap Lini Produksi Minyak kami untuk proses lengkap.',
    faq: [
      { question: 'Apa perbedaan antara penyangraian dan pengukusan?', answer: 'Penyangraian menerapkan panas kering untuk mengembangkan rasa dan mengurangi kelembaban — digunakan untuk wijen, kacang, dan bunga matahari di mana rasa sangrai diinginkan. Pengukusan memperkenalkan kelembaban di bawah panas untuk melunakkan biji keras atau kering sebelum penekanan — digunakan untuk shea, kenari, dan inti sawit di mana tujuannya adalah ekstraksi minyak maksimum daripada rasa.' },
      { question: 'Bisakah saya menggunakan penyangrai yang sama untuk biji yang berbeda?', answer: 'Ya, selama rentang suhu menutupi semua jenis biji Anda. Kuncinya adalah membersihkan drum secara menyeluruh antar batch untuk mencegah perpindahan rasa. Misalnya, menyangrai wijen (rasa kuat) sebelum bunga matahari (rasa lembut) tanpa pembersihan akan memberikan rasa wijen pada minyak bunga matahari.' },
    ],
  },

  'filtration-refining-equipment': {
    overview: [
      'Peralatan filtrasi dan pemurnian mengubah minyak kasar yang ditekan menjadi produk yang jernih, stabil, dan siap dipasarkan. Minyak kasar langsung dari press mengandung padatan tersuspensi, kelembaban, fosfolipid, dan asam lemak bebas yang menyebabkan kekeruhan, rasa tidak diinginkan, dan umur simpan pendek. Filtrasi menghilangkan kotoran fisik; pemurnian menangani kotoran kimia melalui degumming, netralisasi, dan pemutihan.',
      'Tingkat pemrosesan yang dibutuhkan tergantung pada penggunaan akhir. Minyak untuk penjualan lokal segera mungkin hanya memerlukan filtrasi dasar hingga 20 mikron. Minyak untuk kemasan ritel memerlukan filtrasi halus hingga 5 mikron ditambah penghilangan kelembaban. Minyak yang ditujukan untuk ekspor atau pasar makanan premium mungkin memerlukan pemurnian lengkap untuk memenuhi standar kelas pangan internasional.',
    ],
    modelRange: [
      'Haonuo menyediakan tiga model yang mencakup tingkat filtrasi berbeda. Filter press pelat dan bingkai menangani filtrasi kasar hingga halus (5–50 mikron) untuk operasi kecil hingga menengah. Filter press pneumatik menggunakan udara terkompresi untuk mencapai filtrasi lebih halus pada throughput lebih tinggi. Unit pemurnian gabungan melakukan degumming, netralisasi, dan pemutihan dalam satu sistem terintegrasi untuk produsen yang membutuhkan minyak jadi kelas pangan.',
      'Filter press mandiri melayani produsen yang menekan satu jenis biji dan menjual secara lokal. Unit pemurnian gabungan cocok untuk operasi yang memproses berbagai jenis biji atau menargetkan pasar ritel, kosmetik, atau ekspor yang membutuhkan kualitas minyak terstandarisasi.',
    ],
    selectionCriteria: [
      { label: 'Presisi filtrasi', desc: 'Kasar (50+ mikron) untuk penjualan grosir; halus (5–20 mikron) untuk ritel; ultra-halus (di bawah 5 mikron) untuk aplikasi kosmetik dan farmasi' },
      { label: 'Throughput', desc: 'Sesuaikan kapasitas filter dengan output press harian Anda — filter harus memproses minyak satu hari dalam 2–3 jam untuk mencegah sedimentasi di tangki penyimpanan' },
      { label: 'Kemampuan pemurnian', desc: 'Filtrasi saja (penghilangan kotoran fisik) vs. pemurnian lengkap (degumming + netralisasi + pemutihan) — pasar target Anda menentukan persyaratannya' },
      { label: 'Tingkat otomatisasi', desc: 'Filter press manual untuk operasi volume rendah; discharge pneumatik atau otomatis untuk produksi kontinu' },
    ],
    processPosition: 'Filtrasi adalah tahap akhir sebelum pengbotolan — minyak mengalir dari press, melalui filter, kemudian ke penyimpanan atau pengbotolan. Untuk proses lengkap dari biji hingga botol, lihat Panduan Lengkap Lini Produksi Minyak kami.',
    faq: [
      { question: 'Bisakah saya membeli hanya filter press tanpa unit pemurnian?', answer: 'Ya. Jika Anda menjual minyak secara lokal dalam wadah buram dan pelanggan Anda menerima sedikit kekeruhan, filter press pelat dan bingkai saja akan menghilangkan padatan dan menghasilkan minyak yang cukup jernih. Anda hanya memerlukan unit pemurnian jika minyak Anda harus memenuhi standar kelas pangan untuk ritel, ekspor, atau jika Anda memproses biji dengan kandungan fosfolipid tinggi (seperti kedelai atau kanola) yang menyebabkan kekeruhan dan ketengikan cepat.' },
      { question: 'Peringkat mikron apa yang saya butuhkan?', answer: 'Untuk penjualan grosir dalam wadah buram, filtrasi 50 mikron menghilangkan partikel yang terlihat. Untuk ritel dalam botol kaca, 5–10 mikron menghasilkan produk yang jernih. Untuk penggunaan kosmetik atau farmasi, 1–5 mikron dikombinasikan dengan polishing karbon aktif menghasilkan minyak bening-bening. Kebanyakan produsen makanan menemukan bahwa filtrasi 10 mikron memberikan keseimbangan terbaik antara kejernihan dan biaya filter.' },
    ],
  },
};

export function getCategoryContent(slug: string, locale: 'en' | 'fr' | 'ar' | 'id' = 'en'): CategoryContent | null {
  const data = locale === 'fr' ? fr : locale === 'ar' ? ar : locale === 'id' ? id : en;
  return data[slug] || null;
}
