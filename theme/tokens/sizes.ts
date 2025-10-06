// src/theme/tokens/sizes.ts

/**
 * 📦 SIZE TOKENS
 * Defines component and element dimensions.
 * Reuses the same 4px grid as spacing for consistency.
 */
export const sizes = {
  // Generic scale
  none: '0px',
  xs: '1rem', // 16px
  sm: '1.5rem', // 24px
  md: '2rem', // 32px
  lg: '2.5rem', // 40px
  xl: '3rem', // 48px
  '2xl': '4rem', // 64px
  '3xl': '5rem', // 80px
  full: '100%',
  auto: 'auto',

  // Component-specific tokens
  buttonHeight: '2.5rem', // 40px (lg)
  inputHeight: '2.5rem', // 40px (lg)
  icon: '1.25rem', // 20px
  avatarSm: '2rem', // 32px
  avatarMd: '3rem', // 48px
  avatarLg: '4rem', // 64px
  borderRadius: '0.5rem' // 8px (aligné sur radii.md)
} as const
