import { HTMLAttributes, ReactNode } from 'react'

export type TextSize = 'xs' | 'sm' | 'base' | 'lg'
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold'
export type TextAlign = 'left' | 'center' | 'right' | 'justify'
export type TextColor = 'default' | 'muted' | 'subtle' | 'inverse'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Text element type
   * @default 'p'
   */
  as?: 'p' | 'span' | 'div' | 'label'

  /**
   * Text size
   * @default 'base'
   */
  size?: TextSize

  /**
   * Font weight
   * @default 'regular'
   */
  weight?: TextWeight

  /**
   * Text alignment
   */
  align?: TextAlign

  /**
   * Text color variant
   * @default 'default'
   */
  color?: TextColor

  /**
   * Truncate text with ellipsis
   */
  isTruncated?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Text content
   */
  children: ReactNode
}
