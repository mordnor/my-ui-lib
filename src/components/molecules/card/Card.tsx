import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { CardProps } from './Card.types'

const variantStyles = {
  elevated: 'bg-ds-card shadow-ds-lg border border-ds-border',
  outlined: 'bg-ds-card border-2 border-ds-border',
  filled: 'bg-ds-muted',
}

const paddingStyles = {
  none: '',
  sm: 'p-ds-3',
  md: 'p-ds-4 md:p-ds-6',
  lg: 'p-ds-6 md:p-ds-8',
}

/**
 * Card component - Container for content grouping
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      padding = 'md',
      hoverable = false,
      clickable = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-ds-lg transition-all duration-ds-base',
          variantStyles[variant],
          paddingStyles[padding],
          hoverable && 'hover:shadow-ds-xl hover:scale-[1.02]',
          clickable && 'cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
