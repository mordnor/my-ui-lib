import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SelectProps } from './Select.types'

/**
 * Select component - Form select dropdown
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'w-full rounded-ds-md border border-ds-input',
          'bg-ds-background text-ds-foreground',
          'h-ds-input px-ds-component-md text-ds-base',
          'focus:outline-none focus:ring-2 focus:ring-ds-ring focus:border-ds-primary',
          'hover:border-ds-ring',
          'disabled:cursor-not-allowed disabled:opacity-ds-50 disabled:bg-ds-muted',
          'transition-all duration-ds-normal',
          className
        )}
        {...props}
      >
        {children}
      </select>
    )
  }
)

Select.displayName = 'Select'
