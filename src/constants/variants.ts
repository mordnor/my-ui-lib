/**
 * Design system variant constants
 */

import type { Variant, ColorVariant } from '@/types/common.types'

/**
 * Available visual variants
 */
export const VARIANTS: Record<string, Variant> = {
  SOLID: 'solid',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  LINK: 'link',
  SOFT: 'soft'
} as const

/**
 * Available color variants
 */
export const COLOR_VARIANTS: Record<string, ColorVariant> = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ACCENT: 'accent',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
  NEUTRAL: 'neutral'
} as const

/**
 * Default variant for components
 */
export const DEFAULT_VARIANT: Variant = 'solid'

/**
 * Default color variant for components
 */
export const DEFAULT_COLOR_VARIANT: ColorVariant = 'primary'
