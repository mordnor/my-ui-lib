import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SectionProps } from './Section.types'

const paddingClasses = {
  none: '',
  sm: 'py-ds-section-xs',
  md: 'py-ds-section-sm md:py-ds-section-md',
  lg: 'py-ds-section-md md:py-ds-section-lg',
  xl: 'py-ds-section-lg md:py-ds-section-xl'
}

/**
 * Section component - Semantic section with vertical spacing
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { padding = 'md', fullWidth = false, children, className, ...props },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          paddingClasses[padding],
          !fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'
