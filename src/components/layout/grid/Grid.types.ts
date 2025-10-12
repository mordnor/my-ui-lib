import type { HTMLAttributes, ReactNode } from 'react'

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12
export type GridGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns
   * @default 12
   */
  cols?: GridCols

  /**
   * Gap between grid items
   * @default 'md'
   */
  gap?: GridGap

  /**
   * Children elements
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}
