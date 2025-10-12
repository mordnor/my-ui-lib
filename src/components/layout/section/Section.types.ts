import type { HTMLAttributes, ReactNode } from 'react'

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Vertical padding
   * @default 'md'
   */
  padding?: SectionPadding

  /**
   * Full width (no container)
   * @default false
   */
  fullWidth?: boolean

  /**
   * Children elements
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}
