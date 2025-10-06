// src/theme/tokens/spacing.ts

/**
 * 🧱 SPACING TOKENS
 * Base 4px grid system.
 * Ratio ~1.33 for harmonious visual rhythm.
 * Used for margins, paddings, gaps, layout spacing, etc.
 */
export const spacing = {
  0: '0px',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.5rem', // 24px
  6: '2rem', // 32px
  7: '2.5rem', // 40px
  8: '3rem', // 48px
  9: '4rem', // 64px
  10: '5rem', // 80px

  // Aliases for readability
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '5rem' // 80px
} as const
