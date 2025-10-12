import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SpinnerProps } from './Spinner.types'

/**
 * Spinner component - Loading indicator
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', color = 'primary', className, ...props }, ref) => {
    const sizeStyles = {
      xs: 'h-ds-3 w-ds-3',
      sm: 'h-ds-4 w-ds-4',
      md: 'h-ds-6 w-ds-6',
      lg: 'h-ds-8 w-ds-8',
      xl: 'h-ds-12 w-ds-12'
    }

    const colorStyles = {
      primary: 'text-ds-primary',
      secondary: 'text-ds-secondary',
      inverse: 'text-ds-primary-foreground'
    }

    const classes = cn('animate-spin', sizeStyles[size], colorStyles[color], className)

    return (
      <div ref={ref} role="status" aria-label="Loading" className={classes} {...props}>
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-ds-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-ds-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    )
  }
)

Spinner.displayName = 'Spinner'
