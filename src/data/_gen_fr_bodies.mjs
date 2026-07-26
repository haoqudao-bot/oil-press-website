import { readFileSync, writeFileSync } from 'fs';

// Read all 12 source files and extract body content (after second ---)
const files = [
  'standard-hydraulic-oil-press',
  'heavy-duty-hydraulic-oil-press',
  'cold-press-hydraulic-oil-press',
  'high-pressure-hydraulic-oil-press',
  'mini-hydraulic-oil-press',
  'medium-hydraulic-oil-press',
  'stainless-steel-hydraulic-oil-press',
  'ultra-high-pressure-hydraulic-oil-press',
  'ultra-high-pressure-cold-press',
  'sesame-oil-hydraulic-press',
  'coconut-oil-hydraulic-press',
  'large-barrel-hydraulic-oil-press',
];

const baseDir = 'd:/Users/YYJ/Documents/Trae/src/content/products';

function extractBody(filepath) {
  const content = readFileSync(filepath, 'utf8');
  // Find the second --- separator
  const firstIdx = content.indexOf('---');
  const secondIdx = content.indexOf('---', firstIdx + 3);
  // Body is everything after the second ---
  const body = content.slice(secondIdx + 3).trim();
  return body;
}

const bodies = {};
for (const name of files) {
  const filepath = `${baseDir}/${name}.md`;
  bodies[name] = extractBody(filepath);
}

// Now translate each body to French
// Translation mapping for section headers and common terms
const translations = {
  // Section headers
  '## Overview': '## Aperçu',
  '## Key Advantages': '## Avantages Clés',
  '## Core Technology': '## Technologie de Base',
  '## Applications & Suitable Materials': '## Applications et Matières Adaptées',
  '## Applications & suitable materials': '## Applications et Matières Adaptées',
  '## Why Choose Haonuo': '## Pourquoi Choisir Haonuo',
  '## Regional Advantages': '## Avantages Régionaux',
  '### Cold-Press Materials': '### Matières de Pressage à Froid',
  '### Conventional Materials': '### Matières Conventionnelles',
  '### Primary Application': '### Application Principale',
  '### Secondary Applications': '### Applications Secondaires',
  '### Oil & Fat Processing': '### Traitement des Huiles et Graisses',
  '### Industrial & Environmental': '### Industriel et Environnemental',
  '### Food Processing': '### Transformation Alimentaire',
};

// Full French translations for each product body
const frBodies = {};

// 1. standard-hydraulic-oil-press
frBodies['standard-hydraulic-oil-press'] = `## Aperçu

La Presse à Huile Hydraulique Standard HN325 est notre presse à huile hydraulique la plus populaire, adoptée par les producteurs d'huile du monde entier pour son excellent rapport qualité-prix et ses performances fiables. En tant que modèle standard à course prolongée de notre gamme, elle est dotée d'une course de cylindre de 850 mm qui presse jusqu'au fond, traitant facilement des lots de 5 à 100 kg. Que vous soyez un producteur à petite échelle ou que vous exploitiez une opération de taille moyenne, le HN325 offre des résultats d'extraction d'huile constants sur une large gamme de matières.

Le cylindre HN325 associé à un fût de 390 mm de diamètre intérieur atteint une pression superficielle du gâteau de 27,78 Mpa/cm², permettant à la plupart des graines oléagineuses conventionnelles d'être entièrement pressées en un seul cycle. Cela peut contribuer à un rendement en huile plus élevé et à une huile résiduelle plus faible dans le gâteau. Le retour sur investissement réel dépend de nombreux facteurs, notamment les conditions du marché et l'efficacité opérationnelle.

## Avantages Clés

- **Rapport Qualité-Prix Populaire** — L'un de nos modèles les plus commandés, offrant un rapport prix-performance compétitif pour le pressage d'huile polyvalent.
- **Pressage à Course Complète** — La course de cylindre de 850 mm presse jusqu'au fond, garantissant une extraction complète de l'huile de chaque lot.
- **Capacité Polyvalente** — Traite de 5 à 100 kg par lot, adapté aussi bien aux productions petites que moyennes.
- **Efficacité à Cycle Unique** — La pression de gâteau de 27,78 Mpa/cm² est suffisante pour que la plupart des matières conventionnelles soient entièrement pressées en un seul cycle.
- **Productivité à Double Fût** — La configuration à double fût avec rails coulissants doubles permet de charger un fût pendant que l'autre est en cours de pressage, doublant presque votre débit.
- **Fût Personnalisable** — Le diamètre et la hauteur du fût peuvent être adaptés à vos exigences spécifiques en matière de matières.

## Technologie de Base

- **Fût à Fentes de Type Barre** — La conception de fût à fentes exclusive de Haonuo offre une surface d'extraction d'huile nettement supérieure aux fûts percés traditionnels. L'huile s'écoule plus rapidement et plus clairement, avec un rendement environ 2 à 3 % plus élevé (sur la base de tests internes, les résultats peuvent varier). Pas de colmatage, pas de nettoyage entre les lots.
- **Système Hydraulique Allemand** — Station de pompe hydraulique combinée ultra-haute pression avec double pompe haute-basse. Pression de service jusqu'à 60 Mpa avec retour rapide du cylindre.
- **Retrait du Gâteau à 4 Crochets** — Le mécanisme innovant à 4 crochets assure un déchargement facile et fiable du gâteau — même après un pressage de nuit.
- **Cadre en Acier à Haut Carbone** — Acier trempé à haute fréquence et traité thermiquement pour une longue durée de service sous une force de pressage de 325 tonnes. La durée de service réelle dépend des conditions de fonctionnement et de l'entretien.
- **Contrôle par Micro-ordinateur** — Cycle de pressage automatisé du chargement à l'huile finie en quelques minutes.
- **Économe en Énergie** — Conçu pour réduire la consommation électrique par rapport aux presses de génération précédente (les économies réelles varient selon les conditions de fonctionnement).
- **Économe en Main-d'œuvre** — Seuls 1 à 2 opérateurs sont nécessaires, réduisant les besoins en main-d'œuvre par rapport aux méthodes de pressage manuelles.

## Applications et Matières Adaptées

Le HN325 est idéal pour presser une grande variété de graines oléagineuses conventionnelles :

- **Graines Oléagineuses** : Graine de thé, colza, arachide, soja, graine de laque, lin
- **Autres Matières** : Graine de tournesol, graine de coton et matières de pressage conventionnelles similaires

> **Remarque** : Pour les matières à coque dure ou de pressage à froid telles que les noix ou les amandons d'abricot, envisagez notre [modèle HN426 Pressage à Froid](/products/cold-press-hydraulic-oil-press) ou [modèle HN500 Ultra Haute Pression](/products/ultra-high-pressure-hydraulic-oil-press).

## Pourquoi Choisir Haonuo

- **Prix Direct Usine** — Achetez directement au fabricant et éliminez les marges des intermédiaires. Le HN325 offre un coût compétitif par tonne d'huile extraite par rapport aux machines similaires de sa catégorie.
- **Fiabilité Éprouvée** — En tant que modèle populaire, le HN325 a été testé sur le terrain sur des milliers d'installations avec un historique de performances fiables.
- **Assurance Qualité** — Chaque machine subit des tests rigoureux avant l'expédition, y compris des tests de pression hydraulique en pleine charge et la vérification des cycles opérationnels.
- **Support Après-Vente** — Support technique complet, disponibilité des pièces de rechange et assistance de dépannage à distance pour maintenir le bon fonctionnement de votre installation.
- **Options de Personnalisation** — Les dimensions du fût, la longueur de course et d'autres paramètres peuvent être personnalisés pour correspondre à vos exigences spécifiques en matière de matières et de production.

## Avantages Régionaux

**Asie du Sud-Est (Indonésie, Malaisie, Thaïlande, Vietnam) :** Le HN325 est idéal pour la production d'huile de coco et d'arachide à petite et moyenne échelle. Compatible avec l'alimentation standard 220V/50Hz de la région. Option de fût en acier inoxydable disponible pour la production d'huile de coco de qualité alimentaire.

**Afrique (Nigeria, Kenya, Ghana, Tanzanie) :** Conçu pour les conditions difficiles — la conception mécanique simple du HN325 signifie moins de pannes et des réparations plus faciles. Fonctionne sur alimentation monophasée 220V standard ou groupe électrogène portable (5 kVA minimum). Pièces de rechange disponibles en stock avec expédition en 3 jours vers Lagos ou Mombasa.

**Moyen-Orient (Arabie Saoudite, EAU, Égypte) :** Disponible avec fût en acier inoxydable de qualité alimentaire pour la production d'huile de sésame certifiée halal. Le système de contrôle de température assure une qualité de pressage à froid inférieure à 60°C pour les huiles de qualité premium.`;

// 2. heavy-duty-hydraulic-oil-press
frBodies['heavy-duty-hydraulic-oil-press'] = `## Aperçu

La Presse à Huile Hydraulique Lourde HN355 est conçue pour les opérateurs qui exigent davantage de puissance de pressage et une plus grande durabilité. Dotée d'un cadre robuste en plaque d'acier de 3 cm d'épaisseur, ce modèle délivre une force de pressage de 360 tonnes avec une pression superficielle du gâteau de 30,15 Mpa/cm² — un bond significatif par rapport au HN325 standard. Les graines oléagineuses conventionnelles sont entièrement pressées en un seul cycle, maximisant le rendement en huile et minimisant les pertes.

Le cadre en acier renforcé non seulement résiste à des pressions de service plus élevées, mais assure également une stabilité structurelle à long terme sous une utilisation continue lourde. Si vos exigences de production dépassent ce que le modèle standard peut offrir, le HN355 vous apporte la marge de puissance supplémentaire dont vous avez besoin sans passer à un spécialiste du pressage à froid.

## Avantages Clés

- **Cadre en Acier Lourd** — La construction en plaque d'acier de 3 cm d'épaisseur offre une rigidité supérieure et une durée de service prolongée dans des conditions exigeantes.
- **Pression de Gâteau Supérieure** — La pression superficielle du gâteau de 30,15 Mpa/cm² garantit que les matières conventionnelles sont entièrement pressées en un seul cycle, laissant moins d'huile résiduelle dans le gâteau.
- **Force de Pressage de 360 Tonnes** — 10 % de force en plus par rapport au HN325, vous donnant la marge nécessaire pour traiter les matières plus dures en toute confiance.
- **Productivité à Double Fût** — La configuration à double fût avec rails coulissants doubles permet de charger un fût pendant que l'autre est en cours de pressage, augmentant significativement la production quotidienne.
- **Extraction à Cycle Unique** — La plupart des matières conventionnelles atteignent une extraction complète de l'huile en un seul cycle de pressage, réduisant le temps de traitement et les coûts énergétiques.

## Technologie de Base

- **Fût à Fentes de Type Barre** — La conception de fût à fentes exclusive de Haonuo offre une surface d'extraction d'huile nettement supérieure aux fûts percés traditionnels. L'huile s'écoule plus rapidement et plus clairement, avec un rendement environ 2 à 3 % plus élevé (sur la base de tests internes, les résultats peuvent varier). Pas de colmatage, pas de nettoyage entre les lots.
- **Système Hydraulique Allemand** — Station de pompe hydraulique combinée ultra-haute pression avec double pompe haute-basse. Pression de service jusqu'à 63 Mpa avec retour rapide du cylindre.
- **Retrait du Gâteau à 4 Crochets** — Le mécanisme innovant à 4 crochets assure un déchargement facile et fiable du gâteau — même après un pressage de nuit.
- **Cadre en Acier à Haut Carbone** — Acier trempé à haute fréquence et traité thermiquement pour une longue durée de service. La durée de service réelle dépend des conditions de fonctionnement et de l'entretien sous une force de pressage de 360 tonnes.
- **Contrôle par Micro-ordinateur** — Cycle de pressage automatisé du chargement à l'huile finie en quelques minutes.
- **Économe en Énergie** — Conçu pour réduire la consommation électrique par rapport aux presses de génération précédente (les économies réelles varient selon les conditions de fonctionnement).
- **Économe en Main-d'œuvre** — Seuls 1 à 2 opérateurs sont nécessaires, réduisant les besoins en main-d'œuvre par rapport aux méthodes de pressage manuelles.

## Applications et Matières Adaptées

Le HN355 excelle avec les graines oléagineuses conventionnelles et les matières qui bénéficient d'une force de pressage supérieure :

- **Graines Oléagineuses** : Graine de thé, colza, arachide, soja, lin, graine de laque
- **Matières Plus Dures** : Graines et matières légèrement plus dures que le HN325 peut ne pas extraire complètement en une seule passe

> **Remarque** : Pour les applications de pressage à froid impliquant des matières à coque dure comme les noix et les amandons d'abricot, envisagez notre [modèle HN426 Pressage à Froid](/products/cold-press-hydraulic-oil-press).

## Pourquoi Choisir Haonuo

- **Prix Direct Usine** — Achetez directement au fabricant et obtenez un équipement industriel à des prix compétitifs, sans majoration de distributeur.
- **Conçu pour Durer** — Le cadre en plaque d'acier de 3 cm d'épaisseur est conçu pour des années de service fiable, même sous fonctionnement continu lourd.
- **Assurance Qualité** — Chaque machine est testée en pleine charge et inspectée avant de quitter l'usine, garantissant qu'elle répond à nos normes de performance strictes.
- **Support Après-Vente** — De l'assistance à l'installation aux pièces de rechange et au dépannage, notre équipe technique est prête à vous aider à maximiser le temps de fonctionnement.
- **Options de Personnalisation** — Les dimensions du fût et la longueur de course peuvent être ajustées pour répondre à vos besoins spécifiques en matière de matières et de production.

## Avantages Régionaux

**Asie du Sud-Est (Indonésie, Malaisie, Thaïlande, Vietnam) :** La force de pressage de 360 tonnes du HN355 est bien adaptée à l'extraction d'huile d'amande de palmiste. Une capacité supérieure au HN325 la rend adaptée aux opérations d'huile de palme en croissance dans la région.

**Afrique (Nigeria, Kenya, Ghana, Tanzanie) :** Le HN355 est notre modèle le plus populaire en Afrique. Sa construction lourde supporte la nature abrasive de la graine de coton et de l'amande de palmiste sans usure excessive. Fonctionnement simple — seulement 1 à 2 travailleurs nécessaires. Compatible avec groupe électrogène, minimum 5,5 kVA.

**Moyen-Orient (Arabie Saoudite, EAU, Égypte) :** Excellent pour la production d'huile de sésame et de noix avec capacité de pressage à froid. L'option double fût double le débit pour les opérations commerciales.`;

// 3. cold-press-hydraulic-oil-press
frBodies['cold-press-hydraulic-oil-press'] = `## Aperçu

La Presse à Huile Hydraulique à Froid HN426 est notre spécialiste dédié du pressage à froid, conçue pour extraire l'huile des matières délicates et à coque dure sans dégradation thermique. Avec une force de pressage de 500 tonnes et une pression superficielle du gâteau de 42 Mpa/cm², elle offre la puissance nécessaire pour presser à froid les amandes de noix, les noix en coque, les amandons d'abricot, le xanthocère, le souchet et des matières similaires exigeantes — toutes entièrement extraites en un seul cycle.

Construite sur un cadre en plaque d'acier de 3 cm d'épaisseur, le HN426 combine robustesse structurelle et commande hydraulique de précision. Le pressage à froid préserve la saveur naturelle, l'arôme et la valeur nutritionnelle de votre huile, ce qui vous permet d'obtenir des prix premium sur le marché. Si vous produisez des huiles pressées à froid de haute valeur, cette machine est conçue pour maximiser à la fois votre rendement en huile et votre marge bénéficiaire.

## Avantages Clés

- **Véritable Capacité de Pressage à Froid** — La pression superficielle du gâteau de 42 Mpa/cm² extrait l'huile des matières à coque dure et délicates sans chauffage, préservant la qualité premium de l'huile.
- **Force de Pressage de 500 Tonnes** — Puissance substantielle pour traiter les matières les plus difficiles à froid, y compris les noix en coque et les amandons d'abricot, en un seul cycle.
- **Extraction à Cycle Unique** — Les matières de pressage à froid sont entièrement pressées en un seul cycle, éliminant le besoin de repressage et économisant du temps et de l'énergie.
- **Qualité d'Huile Premium** — Le pressage à froid conserve les antioxydants naturels, les vitamines et les composés aromatiques, vous permettant de vendre à des prix premium sur le marché.
- **Cadre Lourd** — La construction en plaque d'acier de 3 cm d'épaisseur assure stabilité et longévité sous les hautes pressions requises pour le pressage à froid.
- **Productivité à Double Fût** — La configuration à double fût avec rails coulissants doubles permet un fonctionnement continu — chargez un fût pendant que l'autre presse.

## Technologie de Base

- **Fût à Fentes de Type Barre** — La conception de fût à fentes exclusive de Haonuo offre une surface d'extraction d'huile nettement supérieure aux fûts percés traditionnels. L'huile s'écoule plus rapidement et plus clairement, avec un rendement environ 2 à 3 % plus élevé (sur la base de tests internes, les résultats peuvent varier) — crucial pour les applications de pressage à froid où chaque point de pourcentage compte. Pas de colmatage, pas de nettoyage entre les lots.
- **Système Hydraulique Allemand** — Station de pompe hydraulique combinée ultra-haute pression avec double pompe haute-basse. Pression de service jusqu'à 70 Mpa avec retour rapide du cylindre, délivrant la haute pression soutenue que les matières de pressage à froid exigent.
- **Retrait du Gâteau à 4 Crochets** — Le mécanisme innovant à 4 crochets assure un déchargement facile et fiable du gâteau — même après un pressage de nuit de matières à coque dure.
- **Cadre en Acier à Haut Carbone** — Acier trempé à haute fréquence et traité thermiquement pour une longue durée de service sous une force de pressage de 500 tonnes. La durée de service réelle dépend des conditions de fonctionnement et de l'entretien.
- **Contrôle par Micro-ordinateur** — Cycle de pressage automatisé du chargement à l'huile finie en quelques minutes.
- **Économe en Énergie** — Conçu pour réduire la consommation électrique par rapport aux presses de génération précédente (les économies réelles varient selon les conditions de fonctionnement).
- **Économe en Main-d'œuvre** — Seuls 1 à 2 opérateurs sont nécessaires, réduisant les besoins en main-d'œuvre par rapport aux méthodes de pressage manuelles.

## Applications et Matières Adaptées

### Matières de Pressage à Froid
- Amande de noix, noix en coque, amandon d'abricot
- Xanthocère (Xanthoceras sorbifolium), souchet (Cyperus esculentus)

### Matières Conventionnelles
- Graine de thé, colza, arachide, soja, lin, graine de laque

Le HN426 traite toutes les matières ci-dessus avec un excellent rendement en huile. Pour les matières conventionnelles, la pression de gâteau élevée peut aider à réduire les taux d'huile résiduelle (les résultats varient selon la matière).

## Pourquoi Choisir Haonuo

- **Prix Direct Usine** — Obtenez une capacité de pressage à froid à des prix directs du fabricant. Pas d'intermédiaires, pas de coûts gonflés — simplement des performances de qualité industrielle à un prix équitable.
- **Expertise en Pressage à Froid** — Nous comprenons les exigences uniques du pressage à froid et avons optimisé le HN426 spécifiquement pour ces applications.
- **Assurance Qualité** — Chaque machine est testée en usine sous pleine charge, y compris la vérification des cycles de pressage à froid, avant l'expédition.
- **Support Après-Vente** — Notre équipe technique fournit des conseils d'installation, une formation opérationnelle et un dépannage continu pour garantir les meilleurs résultats dès le premier jour.
- **Options de Personnalisation** — Les dimensions du fût, la longueur de course et d'autres paramètres peuvent être adaptés à vos exigences spécifiques en matière de matières de pressage à froid.

## Avantages Régionaux

**Asie du Sud-Est (Indonésie, Malaisie, Thaïlande, Vietnam) :** Le HN426 est la presse à froid idéale pour la production de VCO (Huile de Coco Vierge) premium. La température reste inférieure à 50°C pendant le pressage, préservant la teneur naturelle en acide laurique de l'huile de coco et l'arôme frais de la noix de coco.

**Afrique (Nigeria, Kenya, Ghana, Tanzanie) :** Bien qu'il s'agisse principalement d'une presse à froid, le HN426 gère également le pressage à chaud pour l'huile d'arachide et de sésame. Sa conception polyvalente en fait une excellente machine polyvalente pour les producteurs d'huile africains qui traitent plusieurs types de graines.

**Moyen-Orient (Arabie Saoudite, EAU, Égypte) :** Le contrôle précis de la température du HN426 le rend bien adapté à la production d'huile de sésame pressée à froid premium (سمسم). Conçu pour répondre aux normes de sécurité alimentaire des marchés du Moyen-Orient. La conformité halal dépend de votre processus de certification local.`;

// 4. high-pressure-hydraulic-oil-press
frBodies['high-pressure-hydraulic-oil-press'] = `## Aperçu

La Presse à Huile Hydraulique Haute Pression HN480 comble le fossé entre notre spécialiste du pressage à froid HN426 et le modèle phare ultra-haute pression HN500. Avec un diamètre de cylindre de 480 mm et une force de pressage estimée à 560 tonnes à une pression système de 72 Mpa, elle offre une puissance substantielle pour l'extraction d'huile tant conventionnelle qu'à froid — un équilibre optimal entre performances et rapport qualité-prix pour les opérations de moyenne à grande envergure.

## Avantages Clés

- **Performances Équilibrées** — Positionnée entre le HN426 et le HN500, offrant une forte force de pressage sans la prime du modèle phare.
- **Capacité de Pressage à Froid** — Pression de gâteau suffisante pour le pressage à froid des amandes de noix, des amandons d'abricot et des matières similaires.
- **Application Polyvalente** — Traite à la fois les graines oléagineuses conventionnelles et les matières de pressage à froid avec un rendement en huile fiable.
- **Économe en Énergie** — Le moteur de 2,2 KW maintient les coûts de fonctionnement bas tout en délivrant une force de pressage de qualité industrielle.

## Technologie de Base

- **Fût à Fentes de Type Barre** — La conception de fût à fentes exclusive de Haonuo offre une surface d'extraction d'huile nettement supérieure aux fûts percés traditionnels. L'huile s'écoule plus rapidement et plus clairement, avec un rendement environ 2 à 3 % plus élevé (sur la base de tests internes, les résultats peuvent varier). Pas de colmatage, pas de nettoyage entre les lots.
- **Système Hydraulique Allemand** — Station de pompe hydraulique combinée ultra-haute pression avec double pompe haute-basse. Pression de service jusqu'à 72 Mpa avec retour rapide du cylindre.
- **Retrait du Gâteau à 4 Crochets** — Le mécanisme innovant à 4 crochets assure un déchargement facile et fiable du gâteau — même après un pressage de nuit.
- **Cadre en Acier à Haut Carbone** — Acier trempé à haute fréquence et traité thermiquement pour une longue durée de service. La durée de service réelle dépend des conditions de fonctionnement et de l'entretien sous une force de pressage de 560 tonnes.
- **Contrôle par Micro-ordinateur** — Cycle de pressage automatisé du chargement à l'huile finie en quelques minutes.
- **Économe en Énergie** — Conçu pour réduire la consommation électrique par rapport aux presses de génération précédente (les économies réelles varient selon les conditions de fonctionnement).
- **Économe en Main-d'œuvre** — Seuls 1 à 2 opérateurs sont nécessaires, réduisant les besoins en main-d'œuvre par rapport aux méthodes de pressage manuelles.

## Applications et Matières Adaptées

- **Graines Oléagineuses** : Graine de thé, colza, arachide
- **Matières de Pressage à Froid** : Amande de noix, amandon d'abricot

## Pourquoi Choisir Haonuo

- **Prix Direct Usine** — Obtenez des performances haute pression à des prix directs du fabricant sans majoration d'intermédiaire.
- **Assurance Qualité** — Chaque machine est testée en usine sous pleine charge avant l'expédition.
- **Support Après-Vente** — Support technique complet et disponibilité des pièces de rechange.
- **Options de Personnalisation** — Les dimensions du fût et les paramètres de pressage peuvent être adaptés à vos besoins.`;

// 5. mini-hydraulic-oil-press
frBodies['mini-hydraulic-oil-press'] = `## Aperçu

La Mini Presse à Huile Hydraulique HN300 est notre presse à huile hydraulique la plus compacte et la plus accessible, spécialement conçue comme machine de pressage d'huile de sésame dédiée. Également connue sous le nom de petit moulin à huile de sésame ou presse à huile de sésame de style traditionnel, elle est légère, facile à utiliser et parfaitement adaptée à la production d'huile de sésame et de petites graines. Avec 300 tonnes de force de pressage et une pression système de 63 Mpa, le HN300 offre une extraction d'huile fiable dans un encombrement réduit.

Le cylindre HN300 associé à un fût de 390 mm de diamètre intérieur atteint une pression superficielle du gâteau de 25 Mpa/cm², fournissant une pression suffisante pour que le sésame, l'arachide, le colza et la graine de thé soient entièrement pressés en un seul cycle. Ses dimensions globales compactes de 1100×1100×2350 mm la rendent idéale pour les ateliers à espace limité, tandis que la configuration à fût unique de 1,2 tonne permet une installation et un déplacement faciles.

## Avantages Clés

- **Meilleur Modèle d'Entrée de Gamme** — La presse à huile hydraulique la plus abordable de notre gamme, offrant une excellente valeur pour les petits producteurs et les startups entrant sur le marché des huiles premium.
- **Spécialiste de l'Huile de Sésame** — Spécifiquement conçue et optimisée pour le pressage de l'huile de sésame, produisant une huile de sésame authentique de petit moulin avec un arôme et une saveur riches.
- **Compacte et Légère** — À seulement 1,2 tonne (fût unique) et 1100×1100×2350 mm, elle s'intègre facilement dans les petits ateliers et nécessite un minimum d'espace au sol.
- **Fonctionnement Facile** — La conception légère et conviviale permet aux opérateurs de tout niveau de compétence de produire une huile de haute qualité avec une formation minimale.
- **Efficacité à Cycle Unique** — La pression de gâteau de 25 Mpa/cm² est suffisante pour que le sésame et les petites graines soient entièrement pressés en un seul cycle.
- **Option Double Fût** — Configuration à double fût disponible pour les opérateurs souhaitant augmenter le débit sans un encombrement plus important.

## Technologie de Base

- **Fût à Fentes de Type Barre** — Surface d'extraction d'huile nettement supérieure aux fûts percés, atteignant environ 2 à 3 % de rendement en huile plus élevé (sur la base de tests internes, les résultats peuvent varier) par lot.
- **Système Hydraulique Allemand** — Pompe combinée ultra-haute pression délivrant une pression de service jusqu'à 63 Mpa pour une extraction constante et puissante.
- **Retrait du Gâteau à 4 Crochets** — Système de déchargement du gâteau facile et fiable qui réduit les temps d'arrêt entre les cycles de pressage.
- **Cadre en Acier à Haut Carbone** — Longue durée de service sous fonctionnement continu. La durée de service réelle dépend des conditions de fonctionnement et de l'entretien.
- **Contrôle par Micro-ordinateur** — Cycle de pressage automatisé avec fonctionnement à un bouton. Formation de base recommandée ; nous fournissons des tutoriels vidéo et un accompagnement à distance.
- **Économe en Énergie** — Conçu pour réduire la consommation électrique par rapport aux presses de génération précédente (les économies réelles varient selon les conditions de fonctionnement).
- **Économe en Main-d'œuvre** — Seuls 1 à 2 opérateurs sont nécessaires, réduisant les besoins en main-d'œuvre par rapport aux méthodes de pressage manuelles.

## Applications et Matières Adaptées

Le HN300 est idéal pour presser le sésame et autres petites graines oléagineuses :

- **Idéal Pour** : Sésame (l'application principale), produisant une huile de sésame aromatique authentique
- **Également Adapté** : Arachide, colza, graine de thé
- **Autres Matières** : Petites graines similaires et matières de pressage conventionnelles

> **Remarque** : Pour les matières à coque dure ou de pressage à froid telles que les noix ou les amandons d'abricot, envisagez notre [modèle HN426 Pressage à Froid](/products/cold-press-hydraulic-oil-press) ou [modèle HN500 Ultra Haute Pression](/products/ultra-high-pressure-hydraulic-oil-press).

## Pourquoi Choisir Haonuo

- **Prix Direct Usine** — Achetez directement au fabricant et éliminez les marges des intermédiaires. Le HN300 offre un coût d'entrée compétitif pour le pressage d'huile hydraulique de qualité professionnelle.
- **Expertise en Huile de Sésame** — Nous comprenons les exigences uniques de la production d'huile de sésame et avons optimisé le HN300 spécifiquement pour cette application.
- **Assurance Qualité** — Chaque machine subit des tests rigoureux avant l'expédition, y compris des tests de pression hydraulique en pleine charge et la vérification des cycles opérationnels.
- **Support Après-Vente** — Support technique complet, disponibilité des pièces de rechange et assistance de dépannage à distance pour maintenir le bon fonctionnement de votre installation.
- **Options de Personnalisation** — Les dimensions du fût, la longueur de course et d'autres paramètres peuvent être personnalisés pour correspondre à vos exigences spécifiques en matière de matières et de production.`;

// 6. medium-hydraulic-oil-press
frBodies['medium-hydraulic-oil-press'] = `## Aperçu

La Presse à Huile Hydraulique Moyenne HN400 comble le fossé entre nos modèles standard et de pressage à froid, offrant 500 tonnes de force de pressage avec une pression superficielle du gâteau de 38 Mpa/cm². Cette machine polyvalente est adaptée au pressage à froid et fonctionne efficacement en toutes saisons sans être limitée par les conditions climatiques. Que vous traitiez des graines oléagineuses conventionnelles ou que vous vous lanciez dans la production de pressage à froid, le HN400 offre la puissance et la flexibilité dont vous avez besoin.

Le cylindre HN400 associé à un fût de 390 mm de diamètre intérieur atteint une pression superficielle du gâteau de 38 Mpa/cm², permettant à la plupart des matières conventionnelles et semi-dures d'être entièrement pressées en un seul cycle. Sa capacité de pressage à froid signifie que vous pouvez produire des huiles pressées à froid premium à partir de graine de thé, d'amande de noix et de lin tout en préservant la saveur naturelle et la valeur nutritionnelle de votre produit.

## Avantages Clés

- **Capacité de Pressage à Froid Polyvalente** — Adaptée au pressage à froid, fonctionne en toutes saisons sans contraintes climatiques, préservant la qualité premium de l'huile toute l'année.
- **Force de Pressage de 500 Tonnes** — Puissance substantielle qui comble le fossé entre les modèles standard et les modèles dédiés au pressage à froid, traitant une large gamme de matières avec aisance.
- **Pression de Gâteau de 38 Mpa/cm²** — Suffisante pour que la plupart des matières conventionnelles et semi-dures soient entièrement pressées en un seul cycle, avec des taux d'huile résiduelle inférieurs aux modèles standard.
- **Fonctionnement Toutes Saisons** — Conçue pour des performances fiables quelle que soit la température ambiante, assurant une production constante tout au long de l'année.
- **Productivité à Double Fût** — La configuration à double fût avec rails coulissants doubles permet un fonctionnement continu — chargez un fût pendant que l'autre presse.
- **Fût Personnalisable** — Le diamètre et la hauteur du fût peuvent être adaptés à vos exigences spécifiques en matière de matières.

## Technologie de Base

- **Fût à Fentes de Type Barre** — Surface d'extraction d'huile nettement supérieure aux fûts percés, atteignant environ 2 à 3 % de rendement en huile plus élevé (sur la base de tests internes, les résultats peuvent varier) par lot.
- **Système Hydraulique Allemand** — Pompe combinée ultra-haute pression délivrant une pression de service jusqu'à 63 Mpa pour une extraction constante et puissante.
- **Retrait du Gâteau à 4 Crochets** — Système de déchargement du gâteau facile et fiable qui réduit les temps d'arrêt entre les cycles de pressage.
- **Cadre en Acier à Haut Carbone** — Longue durée de service sous fonctionnement continu. La durée de service réelle dépend des conditions de fonctionnement et de l'entretien.
- **Contrôle par Micro-ordinateur** — Cycle de pressage automatisé avec fonctionnement à un bouton. Formation de base recommandée ; nous fournissons des tutoriels vidéo et un accompagnement à distance.
- **Économe en Énergie** — Conçu pour réduire la consommation électrique par rapport aux presses de génération précédente (les économies réelles varient selon les conditions de fonctionnement).
- **Économe en Main-d'œuvre** — Seuls 1 à 2 opérateurs sont nécessaires, réduisant les besoins en main-d'œuvre par rapport aux méthodes de pressage manuelles.

## Applications et Matières Adaptées

Le HN400 est idéal pour presser une grande variété de graines oléagineuses conventionnelles et semi-dures :

- **Matières de Pressage à Froid** : Graine de thé, amande de noix, lin
- **Matières Conventionnelles** : Colza, arachide, soja
- **Autres Matières** : Matières semi-dures et de pressage conventionnelles similaires

> **Remarque** : Pour les matières de pressage à froid les plus exigeantes telles que les noix en coque et les amandons d'abricot, envisagez notre [modèle HN426 Pressage à Froid](/products/cold-press-hydraulic-oil-press) ou [modèle HN500 Ultra Haute Pression](/products/ultra-high-pressure-hydraulic-oil-press).

## Pourquoi Choisir Haonuo

- **Prix Direct Usine** — Achetez directement au fabricant et éliminez les marges des intermédiaires. Le HN400 offre une excellente valeur en tant que presse à huile hydraulique polyvalente de milieu de gamme.
- **Polyvalence de Pressage à Froid** — Nous comprenons les exigences tant de la production conventionnelle que du pressage à froid et avons conçu le HN400 pour exceller dans les deux.
- **Assurance Qualité** — Chaque machine subit des tests rigoureux avant l'expédition, y compris des tests de pression hydraulique en pleine charge et la vérification des cycles opérationnels.
- **Support Après-Vente** — Support technique complet, disponibilité des pièces de rechange et assistance de dépannage à distance pour maintenir le bon fonctionnement de votre installation.
- **Options de Personnalisation** — Les dimensions du fût, la longueur de course et d'autres paramètres peuvent être personnalisés pour correspondre à vos exigences spécifiques en matière de matières et de production.`;

// 7. stainless-steel-hydraulic-oil-press
frBodies['stainless-steel-hydraulic-oil-press'] = `## Aperçu

La Presse à Huile Hydraulique en Acier Inoxydable HN325S est la variante de qualité alimentaire de notre populaire modèle Standard HN325, dotée d'une construction en acier inoxydable de qualité alimentaire pour le fût et toutes les surfaces de contact avec l'huile. Conçue spécifiquement pour les marchés d'exportation et les marques d'huile premium qui exigent une conformité stricte en matière de sécurité alimentaire, le HN325S utilise des matériaux de contact alimentaire conformes à la FDA, conformes aux normes internationales de sécurité alimentaire, y compris les réglementations de l'UE. Remarque : Nos machines n'ont pas été certifiées ou approuvées séparément par la FDA. Elle offre les mêmes performances de pressage fiables de 325 tonnes que le modèle standard tout en assurant le plus haut niveau d'hygiène et de sécurité des matériaux.

Avec 325 tonnes de force de pressage, une pression système de 60 Mpa et une pression superficielle du gâteau de 27,78 Mpa/cm², le HN325S traite toutes les graines oléagineuses conventionnelles avec aisance. Le fût en acier inoxydable et les surfaces de contact empêchent la contamination, la corrosion et la lixiviation des métaux, faisant de cette machine le choix idéal pour les producteurs ciblant les marchés premium, la certification biologique et l'exportation internationale.

## Avantages Clés

- **Acier Inoxydable de Qualité Alimentaire** — Le fût et toutes les surfaces de contact avec l'huile sont construits en acier inoxydable de qualité alimentaire, empêchant la contamination et garantissant la plus pure qualité d'huile.
- **Conformité Internationale** — Utilise des matériaux de contact alimentaire conformes à la FDA, conformes aux normes de sécurité alimentaire de l'UE. Remarque : Les machines n'ont pas été certifiées ou approuvées séparément par la FDA. Idéale pour les marchés d'exportation et les marques d'huile premium.
- **Résistante à la Corrosion** — La construction en acier inoxydable élimine les problèmes de rouille et de corrosion, prolongeant la durée de service et réduisant les besoins d'entretien.
- **Mêmes Performances Éprouvées** — Délivre une force de pressage identique de 325 tonnes et une pression de gâteau de 27,78 Mpa/cm² comme le modèle HN325 standard.
- **Prête pour les Marques Premium** — La conception hygiénique en acier inoxydable supporte un positionnement premium, la certification biologique et les allégations de produits à étiquette propre.
- **Productivité à Double Fût** — La configuration à double fût avec rails coulissants doubles permet un fonctionnement continu — chargez un fût pendant que l'autre presse.

## Technologie de Base

- **Fût à Fentes de Type Barre** — Surface d'extraction d'