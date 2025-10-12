import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * External link (opens in new tab)
   */
  isExternal?: boolean

  /**
   * Underline style
   * @default 'hover'
   */
  underline?: 'none' | 'hover' | 'always'

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Link content
   */
  children: ReactNode
}
