import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { IconProps } from './Icon.types'

/**
 * Icon component - SVG icon wrapper (placeholder for icon system)
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    const sizeStyles = {
      xs: 'h-ds-3 w-ds-3',
      sm: 'h-ds-4 w-ds-4',
      md: 'h-ds-5 w-ds-5',
      lg: 'h-ds-6 w-ds-6',
      xl: 'h-ds-8 w-ds-8'
    }

    const classes = cn('inline-block', sizeStyles[size], className)

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={classes}
        {...props}
      >
        {children}
      </svg>
    )
  }
)

Icon.displayName = 'Icon'
