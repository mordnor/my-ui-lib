import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { DividerProps } from './Divider.types'

const variantClasses = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
}

/**
 * Divider component - Visual separator line
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', variant = 'solid', className, ...props }, ref) => {
    const isVertical = orientation === 'vertical'

    return (
      <hr
        ref={ref}
        className={cn(
          'border-ds-border',
          variantClasses[variant],
          isVertical
            ? 'w-px h-full border-l border-t-0'
            : 'h-px w-full border-t border-l-0',
          className
        )}
        {...props}
      />
    )
  }
)

Divider.displayName = 'Divider'
