import type { HTMLAttributes, ReactNode } from 'react'

export type StackDirection = 'vertical' | 'horizontal'
export type StackSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type StackAlign = 'start' | 'center' | 'end' | 'stretch'
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Stack direction
   * @default 'vertical'
   */
  direction?: StackDirection

  /**
   * Spacing between items
   * @default 'md'
   */
  spacing?: StackSpacing

  /**
   * Align items
   */
  align?: StackAlign

  /**
   * Justify content
   */
  justify?: StackJustify

  /**
   * Children elements
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}
