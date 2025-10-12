/**
 * Design system size constants
 */

import type { Size } from '@/types/common.types'

/**
 * Available size variants
 */
export const SIZES: Record<string, Size> = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
} as const

/**
 * Default size for components
 */
export const DEFAULT_SIZE: Size = 'md'

/**
 * Size scale mapping (in pixels)
 */
export const SIZE_SCALE = {
  xs: {
    height: 24,
    fontSize: 12,
    padding: '0.25rem 0.5rem'
  },
  sm: {
    height: 32,
    fontSize: 14,
    padding: '0.5rem 0.75rem'
  },
  md: {
    height: 40,
    fontSize: 16,
    padding: '0.625rem 1rem'
  },
  lg: {
    height: 48,
    fontSize: 18,
    padding: '0.75rem 1.25rem'
  },
  xl: {
    height: 56,
    fontSize: 20,
    padding: '1rem 1.5rem'
  }
} as const

/**
 * Icon sizes based on component size
 */
export const ICON_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24
} as const

/**
 * Avatar sizes
 */
export const AVATAR_SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
} as const
