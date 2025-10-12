import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { GridProps } from './Grid.types'

const colsClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
}

const gapClasses = {
  xs: 'gap-ds-1',
  sm: 'gap-ds-2',
  md: 'gap-ds-4',
  lg: 'gap-ds-6',
  xl: 'gap-ds-8',
}

/**
 * Grid component - CSS Grid layout system
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 12, gap = 'md', children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colsClasses[cols],
          gapClasses[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'
