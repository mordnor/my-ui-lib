import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { ImageProps } from './Image.types'

/**
 * Image component - Optimized image element
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn('max-w-full ds-h-auto ds-object-cover', className)}
        {...props}
      />
    )
  }
)

Image.displayName = 'Image'
