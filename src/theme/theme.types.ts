/**
 * Theme types for the design system
 * Simplified boilerplate: only light and dark themes
 */

/**
 * Available theme names
 */
export type ThemeName = 'light' | 'dark'

/**
 * Theme configuration
 */
export interface ThemeConfig {
  /**
   * Theme name
   */
  theme: ThemeName

  /**
   * System preference detection
   */
  useSystemPreference?: boolean
}

/**
 * Theme context value
 */
export interface ThemeContextValue {
  /**
   * Current theme
   */
  theme: ThemeName

  /**
   * Set theme
   */
  setTheme: (theme: ThemeName) => void

  /**
   * Toggle between light and dark
   */
  toggleTheme: () => void
}
