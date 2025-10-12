import type { HTMLAttributes, ReactNode } from 'react'

export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse'
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Flex direction
   * @default 'row'
   */
  direction?: FlexDirection

  /**
   * Flex wrap
   * @default 'nowrap'
   */
  wrap?: FlexWrap

  /**
   * Align items
   */
  align?: FlexAlign

  /**
   * Justify content
   */
  justify?: FlexJustify

  /**
   * Gap between items
   */
  gap?: string

  /**
   * Children elements
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}
