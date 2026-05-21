// Lookup table: product label/title -> image URL
// Aggregates products from allProducts and all campaign data files.
// Built lazily on first access and memoized.

import { allProducts } from '@/data/allProducts';

let cache: Map<string, string> | null = null;

const normalize = (s: string) => s.toLowerCase().trim();

const buildCache = (): Map<string, string> => {
  const map = new Map<string, string>();

  // 1) allProducts
  for (const p of allProducts) {
    if (p.title && p.image) map.set(normalize(p.title), p.image);
  }

  // 2) Campaign data files — eager glob
  try {
    const modules = import.meta.glob('../pages/campaigns/data/*.ts', { eager: true }) as Record<
      string,
      Record<string, any>
    >;
    for (const mod of Object.values(modules)) {
      for (const exp of Object.values(mod)) {
        const sections = exp?.sections;
        if (!Array.isArray(sections)) continue;
        for (const section of sections) {
          const products = section?.products;
          if (!Array.isArray(products)) continue;
          for (const prod of products) {
            if (prod?.label && prod?.image) {
              map.set(normalize(prod.label), prod.image);
            }
          }
        }
      }
    }
  } catch (e) {
    console.error('[productImageLookup] failed to scan campaign data:', e);
  }

  return map;
};

export const getProductImageByName = (name: string | null | undefined): string | null => {
  if (!name) return null;
  if (!cache) cache = buildCache();
  const key = normalize(name);
  const exact = cache.get(key);
  if (exact) return exact;
  // Fallback: prefix match (clicks may save truncated names)
  if (key.length >= 10) {
    const prefix = key.slice(0, 30);
    for (const [k, v] of cache) {
      if (k.startsWith(prefix) || prefix.startsWith(k.slice(0, 30))) return v;
    }
  }
  return null;
};
