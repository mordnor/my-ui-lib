import {
  colors,
  opacity,
  radii,
  shadows,
  sizes,
  spacing,
  typography,
  zIndex
} from './theme.tokens.mjs'

export default {
  content: ['./index.html', './src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,

      fontFamily: {
        sans: typography.fontFamily
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,

      spacing: Object.fromEntries(
        Object.entries(spacing).map(([k]) => [k, `var(--space-${k})`])
      ),

      borderRadius: Object.fromEntries(
        Object.entries(radii).map(([k]) => [k, `var(--radius-${k})`])
      ),

      boxShadow: Object.fromEntries(
        Object.entries(shadows).map(([k]) => [k, `var(--shadow-${k})`])
      ),

      extend: {
        height: { input: sizes.inputHeight },
        padding: { button: sizes.buttonPadding }
      },

      zIndex,
      opacity
    }
  },
  plugins: []
}
