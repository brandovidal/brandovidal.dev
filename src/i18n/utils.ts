import type { Language } from '../stores/langStore';

export function getLangFromUrl(url: URL): Language {
  const pathname = url.pathname;
  if (pathname.startsWith('/es/')) return 'es';
  if (pathname.startsWith('/en/')) return 'en';
  return 'en';
}

export function getDefaultLanguage(): Language {
  // Check if running in browser
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('lang');
    if (stored === 'es' || stored === 'en') return stored;
  }
  return 'en';
}
