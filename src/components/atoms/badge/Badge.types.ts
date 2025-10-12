import { HTMLAttributes, ReactNode } from 'react'
import type { Size, ColorVariant, Variant } from '@/types/common.types'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge variant
   * @default 'solid'
   */
  variant?: Variant

  /**
   * Badge color
   * @default 'primary'
   */
  colorScheme?: ColorVariant

  /**
   * Badge size
   * @default 'md'
   */
  size?: Exclude<Size, 'xl'>

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Badge content
   */
  children: ReactNode
}
