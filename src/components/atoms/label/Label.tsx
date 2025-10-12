import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { LabelProps } from './Label.types'

/**
 * Label component - Form labels with accessibility support
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      size = 'base',
      isRequired = false,
      isDisabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Size styles using ds-* tokens
    const sizeStyles = {
      sm: 'text-ds-xs font-ds-medium leading-ds-tight tracking-ds-wide',
      base: 'text-ds-sm font-ds-medium leading-ds-tight tracking-ds-wide'
    }

    const classes = cn(
      'inline-block font-ds-sans text-ds-foreground',
      'cursor-pointer',
      sizeStyles[size],
      isDisabled && 'opacity-ds-50 cursor-not-allowed',
      className
    )

    return (
      <label ref={ref} className={classes} {...props}>
        {children}
        {isRequired && (
          <span className="text-ds-destructive ml-ds-1" aria-label="required">
            *
          </span>
        )}
      </label>
    )
  }
)

Label.displayName = 'Label'
