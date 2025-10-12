import type { HTMLAttributes, ReactNode } from 'react'

export type CardVariant = 'elevated' | 'outlined' | 'filled'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style variant
   * @default 'elevated'
   */
  variant?: CardVariant

  /**
   * Internal padding
   * @default 'md'
   */
  padding?: CardPadding

  /**
   * Hover effect
   * @default false
   */
  hoverable?: boolean

  /**
   * Clickable card
   * @default false
   */
  clickable?: boolean

  /**
   * Children elements
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}
