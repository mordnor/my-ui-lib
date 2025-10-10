// src/theme/applyTheme.ts
export type ThemeName = 'light' | 'dark' | 'clientA' | 'clientB'

/**
 * 🧩 Applique le thème en ajoutant l’attribut [data-theme]
 */
export function applyTheme(theme: ThemeName) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

/**
 * 🔄 Récupère le thème courant (ou light par défaut)
 */
export function getCurrentTheme(): ThemeName {
  return (localStorage.getItem('theme') as ThemeName) || 'light'
}

/**
 * 🚀 Initialise le thème au chargement de l’app
 */
export function initTheme() {
  applyTheme(getCurrentTheme())
}
