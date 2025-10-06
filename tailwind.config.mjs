// tailwind.config.mjs
import * as tokens from './theme/tokens-build/tailwind.tokens.js'

// 🧩 Helper pour extraire les valeurs des tokens JS (non thématiques)
function extract(prefix, opts = {}) {
  const { customKey } = opts
  return Object.fromEntries(
    Object.entries(tokens)
      .filter(([k]) => k.startsWith(prefix))
      .map(([k, v]) => {
        let name = k
          .replace(prefix, '')
          .replace(/^([A-Z])/, (_, c) => c.toLowerCase())
        if (customKey) name = `${customKey}-${name}`
        return [name, v]
      })
  )
}

// 🎨 Helper pour utiliser les variables CSS générées par Style Dictionary
const withVar = (name) => `var(--${name})`

export default {
  // ✅ Support du mode dark via l’attribut data-theme
  darkMode: ['class', '[data-theme="dark"]'],

  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      // 🎨 Couleurs dynamiques basées sur les CSS variables
      colors: {
        text: {
          primary: withVar('color-text-primary'),
          secondary: withVar('color-text-secondary'),
          inverse: withVar('color-text-inverse'),
          muted: withVar('color-text-muted')
        },
        background: {
          app: withVar('color-background-app'),
          surface: withVar('color-background-surface'),
          card: withVar('color-background-card'),
          inverse: withVar('color-background-inverse')
        },
        accent: {
          primary: withVar('color-accent-primary'),
          hover: withVar('color-accent-hover'),
          active: withVar('color-accent-active')
        },
        state: {
          success: withVar('color-state-success'),
          danger: withVar('color-state-danger'),
          warning: withVar('color-state-warning'),
          info: withVar('color-state-info')
        },
        border: {
          DEFAULT: withVar('color-border-default'),
          strong: withVar('color-border-strong'),
          focus: withVar('color-border-focus')
        }
      },

      // 📏 Espacements → ajout du préfixe “space-”
      spacing: extract('Spacing', { customKey: 'space' }),

      // 🔠 Typographie (statique)
      fontFamily: { sans: tokens.TypographyFontFamily },
      fontSize: extract('TypographyFontSize'),
      fontWeight: extract('TypographyFontWeight'),
      lineHeight: extract('TypographyLineHeight'),

      // 🧱 Radius
      borderRadius: {
        DEFAULT: tokens.SizesBorderRadius,
        sm: `calc(${tokens.SizesBorderRadius} / 2)`,
        lg: `calc(${tokens.SizesBorderRadius} * 1.5)`,
        xl: `calc(${tokens.SizesBorderRadius} * 2)`
      },

      // 🌫️ Ombres
      boxShadow: {
        sm: tokens.ShadowsSm,
        md: tokens.ShadowsMd,
        lg: tokens.ShadowsLg
      },

      // 🔘 Opacité
      opacity: extract('Opacity'),

      // 📐 Dimensions utiles
      height: {
        button: tokens.SizesButtonHeight,
        input: tokens.SizesInputHeight
      },
      width: {
        icon: tokens.SizesIcon,
        avatarSm: tokens.SizesAvatarSm,
        avatarMd: tokens.SizesAvatarMd,
        avatarLg: tokens.SizesAvatarLg
      }
    }
  },
  plugins: []
}
