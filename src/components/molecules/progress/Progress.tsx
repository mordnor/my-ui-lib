import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { ProgressProps } from './Progress.types'

const sizeStyles = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

const colorStyles = {
  primary: 'bg-ds-primary',
  success: 'bg-ds-success',
  warning: 'bg-ds-warning',
  error: 'bg-ds-destructive',
  info: 'bg-ds-info',
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      size = 'md',
      colorScheme = 'primary',
      showLabel = false,
      isIndeterminate = false,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {showLabel && (
          <div className="text-ds-sm mb-ds-1 font-ds-medium">{Math.round(percentage)}%</div>
        )}
        <div
          className={cn(
            'w-full bg-ds-muted rounded-full overflow-hidden',
            sizeStyles[size]
          )}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          <div
            className={cn(
              'h-full transition-all duration-ds-base',
              colorStyles[colorScheme],
              isIndeterminate && 'animate-pulse'
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)

Progress.displayName = 'Progress'
