import { forwardRef, createElement } from 'react'
import { cn } from '@/utils/cn'
import type { HeadingProps } from './Heading.types'

/**
 * Heading component - Semantic headings with design system typography
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = 'h2', size, className, children, ...props }, ref) => {
    const effectiveSize = size || as

    // Size styles using ds-* tokens
    const sizeStyles = {
      h1: 'text-ds-5xl font-ds-bold leading-ds-tight tracking-ds-tight',
      h2: 'text-ds-4xl font-ds-bold leading-ds-tight tracking-ds-tight',
      h3: 'text-ds-3xl font-ds-semibold leading-ds-snug',
      h4: 'text-ds-2xl font-ds-semibold leading-ds-snug',
      h5: 'text-ds-xl font-ds-semibold leading-ds-normal',
      h6: 'text-ds-lg font-ds-semibold leading-ds-normal'
    }

    const classes = cn(
      'font-ds-sans text-ds-foreground',
      sizeStyles[effectiveSize],
      className
    )

    return createElement(
      as,
      {
        ref,
        className: classes,
        ...props
      },
      children
    )
  }
)

Heading.displayName = 'Heading'
