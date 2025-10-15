import type { ThemeName } from './theme.types'

/**
 * Local storage key for theme preference
 */
const THEME_STORAGE_KEY = 'ds-theme'

/**
 * Get the current theme from localStorage or default to light
 * Supports system preference detection
 */
export function getCurrentTheme(): ThemeName {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = localStorage.getItem(
    THEME_STORAGE_KEY
  ) as ThemeName | null

  // Validate stored theme
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  // Check system preference
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }

  return 'light'
}

/**
 * Apply a theme by setting data-theme attribute on <html> element
 * and persisting to localStorage
 */
export function applyTheme(theme: ThemeName): void {
  if (typeof window === 'undefined') return

  const root = document.documentElement

  // Remove old theme class
  root.removeAttribute('data-theme')

  // Add new theme
  root.setAttribute('data-theme', theme)

  // Persist to localStorage
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

/**
 * Initialize theme on app load
 * Should be called in your app's entry point
 */
export function initTheme(): ThemeName {
  const theme = getCurrentTheme()
  applyTheme(theme)
  return theme
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): ThemeName {
  const currentTheme = getCurrentTheme()
  const newTheme: ThemeName = currentTheme === 'light' ? 'dark' : 'light'
  applyTheme(newTheme)
  return newTheme
}

/**
 * Listen to system theme preference changes
 */
export function watchSystemTheme(
  callback: (theme: ThemeName) => void
): () => void {
  if (typeof window === 'undefined') return () => {}

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const handler = (e: MediaQueryListEvent) => {
    const theme: ThemeName = e.matches ? 'dark' : 'light'
    callback(theme)
  }

  mediaQuery.addEventListener('change', handler)

  // Return cleanup function
  return () => {
    mediaQuery.removeEventListener('change', handler)
  }
}
