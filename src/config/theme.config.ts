import type { ThemeName } from '@/theme/theme.types'

/**
 * Design system theme configuration
 */
export const themeConfig = {
  /**
   * Default theme
   */
  defaultTheme: 'light' as ThemeName,

  /**
   * Use system preference for theme
   */
  useSystemPreference: true,

  /**
   * Available themes
   */
  availableThemes: ['light', 'dark'] as ThemeName[],

  /**
   * Storage key for theme preference
   */
  storageKey: 'ds-theme'
} as const
