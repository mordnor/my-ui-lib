import type { HTMLAttributes } from 'react'

export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type SpacerAxis = 'horizontal' | 'vertical' | 'both'

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Spacing size
   * @default 'md'
   */
  size?: SpacerSize

  /**
   * Spacing axis
   * @default 'vertical'
   */
  axis?: SpacerAxis

  /**
   * Additional CSS classes
   */
  className?: string
}
