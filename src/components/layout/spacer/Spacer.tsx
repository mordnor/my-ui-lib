import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SpacerProps } from './Spacer.types'

const sizeClasses = {
  xs: '1',
  sm: '2',
  md: '4',
  lg: '6',
  xl: '8',
  '2xl': '12',
  '3xl': '16',
}

/**
 * Spacer component - Creates empty space for layout
 */
export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ size = 'md', axis = 'vertical', className, ...props }, ref) => {
    const sizeValue = sizeClasses[size]

    const getSpacingClass = () => {
      if (axis === 'horizontal') return `w-${sizeValue}`
      if (axis === 'vertical') return `h-${sizeValue}`
      return `w-${sizeValue} h-${sizeValue}`
    }

    return (
      <div
        ref={ref}
        className={cn(getSpacingClass(), 'flex-shrink-0', className)}
        aria-hidden="true"
        {...props}
      />
    )
  }
)

Spacer.displayName = 'Spacer'
