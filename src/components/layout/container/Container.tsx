import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { ContainerProps } from './Container.types'

const containerSizes = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-full',
}

/**
 * Container component - Constrains content width with responsive padding
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', centered = true, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full px-ds-container-padding md:px-ds-container-padding-md lg:px-ds-container-padding-lg',
          containerSizes[size],
          centered && 'mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
