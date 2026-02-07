export type Language = "es" | "en";

let currentLanguage: Language = "en";
const listeners: Array<(lang: Language) => void> = [];

export function getCurrentLanguage(): Language {
  return currentLanguage;
}

export function initLanguage() {
  if (typeof window === "undefined") return;

  // Check localStorage
  const stored = localStorage.getItem("lang") as Language | null;
  if (stored === "es" || stored === "en") {
    setLanguage(stored, false);
    return;
  }

  // Default to English
  setLanguage("es", false);
}

export function setLanguage(lang: Language, persist = true) {
  currentLanguage = lang;
  if (persist) localStorage.setItem("lang", lang);

  listeners.forEach((listener) => listener(lang));
}

export function toggleLanguage() {
  setLanguage(currentLanguage === "es" ? "en" : "es");
}

export function onLanguageChange(callback: (lang: Language) => void) {
  listeners.push(callback);
}
