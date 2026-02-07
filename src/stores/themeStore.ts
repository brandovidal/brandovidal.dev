export type Theme = 'dark' | 'light';

let currentTheme: Theme = 'dark';
const listeners: Array<(theme: Theme) => void> = [];

export function getCurrentTheme(): Theme {
  return currentTheme;
}

export function initTheme() {
  if (typeof window === 'undefined') return;

  // Check localStorage
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'dark' || stored === 'light') {
    setTheme(stored, false);
    return;
  }

  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme: Theme = prefersDark ? 'dark' : 'light';
  setTheme(theme, false);
}

export function setTheme(theme: Theme, persist = true) {
  currentTheme = theme;
  if (persist) localStorage.setItem('theme', theme);

  if (theme === 'light') {
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
  }

  listeners.forEach((listener) => listener(theme));
}

export function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

export function onThemeChange(callback: (theme: Theme) => void) {
  listeners.push(callback);
}
