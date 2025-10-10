/* --------------------------------------------------------------------------
 * 🧱 Design System - Point d’entrée principal
 * Exporte tous les composants, styles et fonctions du DS.
 * -------------------------------------------------------------------------- */

// 🎨 Styles globaux du Design System
// (tokens CSS + Tailwind + thèmes)
import './style.css'

/* --------------------------------------------------------------------------
 * 🧩 UI Components
 * -------------------------------------------------------------------------- */
export * from './components/ui/button'
export * from './components/ui/card'
export * from './components/ui/badge'
export * from './components/ui/typography'

/* --------------------------------------------------------------------------
 * 🧱 Layout Components
 * -------------------------------------------------------------------------- */
export * from './components/layout/container'
export * from './components/layout/grid'
export * from './components/layout/section'
export * from './components/layout/stack'

/* --------------------------------------------------------------------------
 * 🧰 Utilities
 * -------------------------------------------------------------------------- */
export * from './components/utilities/avatar'
export * from './components/utilities/avatar-group'
export * from './components/utilities/divider'
export * from './components/utilities/icon'

/* --------------------------------------------------------------------------
 * 🎨 Theme
 * -------------------------------------------------------------------------- */
export { applyTheme, getCurrentTheme, initTheme } from './theme/apply-theme'
export { ThemeProvider, useThemeContext } from './theme/theme-provider'
export type { ThemeName, ThemeProviderProps } from './theme'

/* --------------------------------------------------------------------------
 * 🪝 Hooks
 * -------------------------------------------------------------------------- */
export { useTheme } from './hooks/use-theme'

/* --------------------------------------------------------------------------
 * 🧰 Utils
 * -------------------------------------------------------------------------- */
export { cn } from './utils/cn'

/* --------------------------------------------------------------------------
 * 📦 Types
 * -------------------------------------------------------------------------- */
export type * from './types'
