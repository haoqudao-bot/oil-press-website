import type { CollectionEntry } from 'astro:content';

type Product = CollectionEntry<'products'>;

/**
 * The four flagship hydraulic presses with dedicated funnel pages.
 * Every market page recommends all four, in fixed order.
 */
export const MAIN_PRESS_SLUGS = [
  'standard-hydraulic-oil-press', // HN325
  'hn365-hydraulic-oil-press', // HN365
  'cold-press-hydraulic-oil-press', // HN426
  'ultra-high-pressure-hydraulic-oil-press', // HN500
];

/**
 * Superseded press models — still indexed product pages, but never
 * recommended on market pages (HN365/426/500 replaced them).
 */
export const LEGACY_PRESS_SLUGS = [
  'mini-hydraulic-oil-press', // HN300
  'medium-hydraulic-oil-press', // HN355
  'heavy-duty-hydraulic-oil-press', // HN400
  'high-pressure-hydraulic-oil-press', // HN480
  'ultra-high-pressure-cold-press', // HN480B
];

/**
 * Market-page product selection:
 * - mainProducts: the four flagship presses, always
 * - auxProducts: seed-matched equipment (roasters, crushers, filters,
 *   specialized presses...) excluding legacy press models
 */
export function getMarketProducts(allProducts: Product[], seeds: string[], auxLimit = 4) {
  const mainProducts = MAIN_PRESS_SLUGS.map((slug) => allProducts.find((p) => p.slug === slug)).filter(
    (p): p is Product => Boolean(p)
  );

  const matchesSeeds = (p: Product) =>
    p.data.applicableSeeds.some((s) =>
      seeds.some((keyword) => s.toLowerCase().includes(keyword.toLowerCase()))
    );

  const auxProducts = allProducts
    .filter(
      (p) =>
        !MAIN_PRESS_SLUGS.includes(p.slug) &&
        !LEGACY_PRESS_SLUGS.includes(p.slug) &&
        matchesSeeds(p)
    )
    .slice(0, auxLimit);

  return { mainProducts, auxProducts };
}
