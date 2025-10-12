import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { CheckboxProps } from './Checkbox.types'

/**
 * Checkbox component - Form checkbox input
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          'h-4 w-4 rounded-ds-sm border border-ds-border',
          'checked:bg-ds-primary checked:border-ds-primary',
          'focus:outline-none focus:ring-2 focus:ring-ds-ring focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-ds-50',
          'transition-colors duration-ds-fast',
          className
        )}
        {...props}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'
