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
export * from './components/utilities/avatarGroup'
export * from './components/utilities/divider'
export * from './components/utilities/Icon'

/* --------------------------------------------------------------------------
 * 🎨 Thème / Tokens / Utils
 * -------------------------------------------------------------------------- */
// 🔧 Fonction d’application de thème dynamique
export { applyTheme } from '../theme/applyTheme'

// 🪄 Exporte éventuellement les tokens bruts si besoin
export * as Tokens from '../theme/tokens-build/css/themes.css'
