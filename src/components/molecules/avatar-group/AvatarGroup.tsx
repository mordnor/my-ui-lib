import { forwardRef, Children } from 'react'
import { cn } from '@/utils/cn'
import type { AvatarGroupProps } from './AvatarGroup.types'

/**
 * AvatarGroup component - Display a group of avatars with overlap
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ size = 'md', max = 5, children, className, ...props }, ref) => {
    const childrenArray = Children.toArray(children)
    const visibleChildren = childrenArray.slice(0, max)
    const hiddenCount = childrenArray.length - max

    return (
      <div
        ref={ref}
        className={cn('flex flex-row-reverse justify-end', className)}
        {...props}
      >
        {hiddenCount > 0 && (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ds-surface-tertiary text-ds-text-secondary ds-text-sm ds-font-medium ds-border-2 ds-border-white -ml-ds-2">
            +{hiddenCount}
          </div>
        )}
        {visibleChildren.reverse().map((child, index) => (
          <div
            key={index}
            className="-ml-ds-2 first:ml-ds-0 ds-border-2 ds-border-white rounded-full"
          >
            {child}
          </div>
        ))}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'
