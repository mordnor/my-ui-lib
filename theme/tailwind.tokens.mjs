// theme/tailwind.tokens.mjs
import * as tokens from './tokens-build/index.js'

const mapToCSSVars = (obj, prefix) =>
  Object.fromEntries(
    Object.entries(obj).map(([key]) => [key, `var(--${prefix}-${key})`])
  )

export default {
  content: [
    './index.html',
    './src/**/*.{mjs,js,ts,jsx,tsx}',
    './theme/**/*.{ts,js,mjs}'
  ],
  theme: {
    extend: {
      // Couleurs dynamiques
      colors: tokens.colors,

      // Typo
      fontFamily: { sans: tokens.typography.fontFamily },
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,

      // Layout
      spacing: mapToCSSVars(tokens.spacing, 'space'),
      borderRadius: mapToCSSVars(tokens.radii, 'radius'),
      boxShadow: mapToCSSVars(tokens.shadows, 'shadow'),

      // Sizes spécifiques
      height: { input: tokens.sizes.inputHeight },

      zIndex: tokens.zIndex,
      opacity: tokens.opacity
    }
  },
  plugins: []
}
