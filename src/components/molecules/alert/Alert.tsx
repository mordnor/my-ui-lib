import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { AlertProps } from './Alert.types'

const statusColors = {
  info: {
    solid: 'bg-ds-info text-ds-info-foreground',
    soft: 'bg-ds-blue-50 text-ds-info border-ds-info',
    'left-accent': 'bg-ds-blue-50 text-ds-info border-l-4 border-ds-info',
  },
  success: {
    solid: 'bg-ds-success text-ds-success-foreground',
    soft: 'bg-ds-green-50 text-ds-success border-ds-success',
    'left-accent': 'bg-ds-green-50 text-ds-success border-l-4 border-ds-success',
  },
  warning: {
    solid: 'bg-ds-warning text-ds-warning-foreground',
    soft: 'bg-ds-orange-50 text-ds-warning border-ds-warning',
    'left-accent': 'bg-ds-orange-50 text-ds-warning border-l-4 border-ds-warning',
  },
  error: {
    solid: 'bg-ds-destructive text-ds-destructive-foreground',
    soft: 'bg-ds-red-50 text-ds-destructive border-ds-destructive',
    'left-accent': 'bg-ds-red-50 text-ds-destructive border-l-4 border-ds-destructive',
  },
}

/**
 * Alert component - Display contextual feedback messages
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'soft',
      status = 'info',
      title,
      closable = false,
      onClose,
      icon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'rounded-ds-md p-ds-4 flex gap-ds-3 border',
          statusColors[status][variant],
          className
        )}
        {...props}
      >
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="flex-1 min-w-0">
          {title && (
            <h5 className="font-ds-medium mb-ds-1 text-ds-sm">{title}</h5>
          )}
          <div className="text-ds-sm">{children}</div>
        </div>
        {closable && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-auto p-ds-1 rounded hover:opacity-70 transition-opacity duration-ds-base"
            aria-label="Close alert"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    )
  }
)

Alert.displayName = 'Alert'
