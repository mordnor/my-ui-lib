import type { HTMLAttributes } from 'react'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerVariant = 'solid' | 'dashed' | 'dotted'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Divider orientation
   * @default 'horizontal'
   */
  orientation?: DividerOrientation

  /**
   * Divider style variant
   * @default 'solid'
   */
  variant?: DividerVariant

  /**
   * Additional CSS classes
   */
  className?: string
}
