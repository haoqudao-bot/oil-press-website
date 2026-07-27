﻿﻿﻿﻿﻿﻿import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';
import id from './id.json';

const translations = { en, fr, ar, id } as const;

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'fr', 'ar', 'id'];

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export function isRtl(locale: Locale): boolean {
  return locale === 'ar';
}
