import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { RadioProps } from './Radio.types'

/**
 * Radio component - Form radio input
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="radio"
        ref={ref}
        className={cn(
          'h-4 w-4 rounded-ds-full border border-ds-border',
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

Radio.displayName = 'Radio'
