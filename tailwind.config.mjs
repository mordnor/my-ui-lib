import path from 'path'
import { fileURLToPath } from 'url'
import * as tokens from './theme/tokens-build/tailwind.tokens.js'

/* --------------------------------------------------
   🧩 Helpers
-------------------------------------------------- */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ✅ Définir ici la variable avant tout
const isDev = process.env.NODE_ENV !== 'production'

/** Convertit CamelCase en kebab-case (Spacing3xl → 3xl) */
const toKebab = (str) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()

/** Crée une variable CSS du type var(--color-bg-app) */
const withVar = (name) => `var(--${name})`

/** Extracteur générique pour les tokens (spacing, typography, etc.) */
const extract = (prefix, opts = {}) => {
  const { customKey } = opts
  const entries = Object.entries(tokens)
    .filter(([k]) => k.startsWith(prefix))
    .map(([k, v]) => {
      let name = k.replace(prefix, '')
      name = toKebab(name)
      if (/^\d/.test(name)) name = name.trim()
      if (customKey) name = `${customKey}-${name}`
      return [name, v]
    })

  return Object.fromEntries(entries)
}

/* --------------------------------------------------
   ⚙️ Config Tailwind
-------------------------------------------------- */
export default {
  darkMode: ['class', '[data-theme="dark"]'],

  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    ...(isDev
      ? [path.resolve(__dirname, '../my-landing/src/**/*.{ts,tsx,js,jsx}')]
      : [])
  ],

  safelist: [
    { pattern: /gap-ds-space-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/ },
    { pattern: /p?-?x?-?y?-?m?-?b?-?t?-?l?-?r?-?ds-space-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/ }
  ],

  theme: {
    extend: {
      colors: {
        'ds-text-primary': withVar('color-text-primary'),
        'ds-text-secondary': withVar('color-text-secondary'),
        'ds-text-inverse': withVar('color-text-inverse'),
        'ds-text-muted': withVar('color-text-muted'),

        'ds-bg-app': withVar('color-background-app'),
        'ds-bg-surface': withVar('color-background-surface'),
        'ds-bg-card': withVar('color-background-card'),
        'ds-bg-inverse': withVar('color-background-inverse'),

        'ds-border-default': withVar('color-border-default'),
        'ds-border-strong': withVar('color-border-strong'),
        'ds-border-focus': withVar('color-border-focus'),

        'ds-accent-primary': withVar('color-accent-primary'),
        'ds-accent-hover': withVar('color-accent-hover'),
        'ds-accent-active': withVar('color-accent-active'),

        'ds-state-success': withVar('color-state-success'),
        'ds-state-danger': withVar('color-state-danger'),
        'ds-state-warning': withVar('color-state-warning'),
        'ds-state-info': withVar('color-state-info')
      },

      spacing: extract('Spacing', { customKey: 'ds-space' }),
      gap: extract('Spacing', { customKey: 'ds-space' }),
      padding: extract('Spacing', { customKey: 'ds-space' }),
      margin: extract('Spacing', { customKey: 'ds-space' }),

      fontFamily: {
        sans: tokens['TypographyFontFamily']
      },
      fontSize: extract('TypographyFontSize', { customKey: 'ds-font-size' }),
      fontWeight: extract('TypographyFontWeight', { customKey: 'ds-font-weight' }),
      lineHeight: extract('TypographyLineHeight', { customKey: 'ds-line-height' }),

      borderRadius: {
        DEFAULT: tokens['SizesBorderRadius'],
        sm: `calc(${tokens['SizesBorderRadius']} / 2)`,
        lg: `calc(${tokens['SizesBorderRadius']} * 1.5)`,
        xl: `calc(${tokens['SizesBorderRadius']} * 2)`
      },

      boxShadow: {
        'ds-sm': tokens['ShadowsSm'],
        'ds-md': tokens['ShadowsMd'],
        'ds-lg': tokens['ShadowsLg']
      },

      opacity: extract('Opacity', { customKey: 'ds-opacity' }),

      height: {
        button: tokens['SizesButtonHeight'],
        input: tokens['SizesInputHeight']
      },
      width: {
        icon: tokens['SizesIcon'],
        'avatar-sm': tokens['SizesAvatarSm'],
        'avatar-md': tokens['SizesAvatarMd'],
        'avatar-lg': tokens['SizesAvatarLg']
      }
    }
  },

  plugins: []
}
