import { HTMLAttributes, ReactNode } from 'react'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Heading level (semantic HTML)
   * @default 'h2'
   */
  as?: HeadingLevel

  /**
   * Visual size (can differ from semantic level)
   */
  size?: HeadingLevel

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Heading content
   */
  children: ReactNode
}
