import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { StackProps } from './Stack.types'

const directionClasses = {
  vertical: 'flex-col',
  horizontal: 'flex-row',
}

const spacingClasses = {
  xs: 'gap-ds-1',
  sm: 'gap-ds-2',
  md: 'gap-ds-4',
  lg: 'gap-ds-6',
  xl: 'gap-ds-8',
}

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
}

/**
 * Stack component - Flexbox-based layout for stacking elements
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'vertical',
      spacing = 'md',
      align,
      justify,
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
          'flex',
          directionClasses[direction],
          spacingClasses[spacing],
          align && alignClasses[align],
          justify && justifyClasses[justify],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Stack.displayName = 'Stack'
