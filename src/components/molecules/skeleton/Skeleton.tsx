import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SkeletonProps } from './Skeleton.types'

const variantStyles = {
  text: 'rounded h-4',
  circular: 'rounded-full',
  rectangular: 'rounded-md',
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { variant = 'text', width, height, count = 1, className, ...props },
    ref
  ) => {
    const style = {
      width: width,
      height: height,
    }

    const skeletons = Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={cn(
          'ds-animate-pulse bg-ds-surface-tertiary',
          variantStyles[variant],
          className
        )}
        style={style}
        {...props}
      />
    ))

    return count > 1 ? (
      <div ref={ref} className="ds-space-y-2">
        {skeletons}
      </div>
    ) : (
      <>{skeletons[0]}</>
    )
  }
)

Skeleton.displayName = 'Skeleton'
