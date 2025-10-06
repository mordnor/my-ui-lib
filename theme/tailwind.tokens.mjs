// theme/tailwind.tokens.mjs
import * as tokens from './tokens-build/index.js'

// 🔧 Helper pour transformer tes exports en objets Tailwind-friendly
const pick = (prefix) =>
  Object.fromEntries(
    Object.entries(tokens)
      .filter(([key]) => key.startsWith(prefix))
      .map(([key, value]) => [
        key
          .replace(prefix, '') // ex: ColorTextPrimary → TextPrimary
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, ''), // → text-primary
        value
      ])
  )

export const colors = pick('Color')
export const spacing = pick('Spacing')
export const sizes = pick('Sizes')
export const typography = {
  fontFamily: tokens.TypographyFontFamily,
  fontSize: pick('TypographyFontSize'),
  fontWeight: pick('TypographyFontWeight'),
  lineHeight: pick('TypographyLineHeight')
}
export const shadows = pick('Shadows')
export const opacity = pick('Opacity')
export const radii = pick('SizesBorderRadius') // si tu veux mapper radius

// ✅ Pour debug
console.log('✅ Tokens Tailwind chargés')
