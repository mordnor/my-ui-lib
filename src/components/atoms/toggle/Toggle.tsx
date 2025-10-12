import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { ToggleProps } from './Toggle.types'

/**
 * Toggle component - Switch-style checkbox for on/off states
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        role="switch"
        ref={ref}
        className={cn(
          'relative inline-flex h-6 w-11 shrink-0',
          'cursor-pointer rounded-ds-full border-2 border-transparent',
          'bg-ds-border',
          'transition-colors duration-ds-normal',
          'focus:outline-none focus:ring-2 focus:ring-ds-ring focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-ds-50',
          'checked:bg-ds-primary',
          'after:content-[""] after:absolute after:top-[2px] after:left-[2px]',
          'after:h-5 after:w-5 after:rounded-ds-full',
          'after:bg-ds-base-white after:transition-transform after:duration-ds-normal',
          'checked:after:translate-x-5',
          className
        )}
        {...props}
      />
    )
  }
)

Toggle.displayName = 'Toggle'
