import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { InputProps } from './Input.types'

/**
 * Input component - Text input field
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      isInvalid = false,
      isDisabled = false,
      isFullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'font-ds-sans',
      'rounded-ds-md',
      'border',
      'transition-all duration-ds-normal',
      'focus:outline-none focus:ring-2 focus:ring-offset-1',
      'placeholder:text-ds-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-ds-50 disabled:bg-ds-muted'
    )

    const sizeStyles = {
      xs: 'h-ds-input px-ds-component-sm text-ds-xs',
      sm: 'h-ds-input px-ds-component-sm text-ds-sm',
      md: 'h-ds-input px-ds-component-md text-ds-base',
      lg: 'h-ds-input px-ds-component-lg text-ds-lg'
    }

    const stateStyles = isInvalid
      ? cn(
          'border-ds-destructive',
          'text-ds-destructive',
          'focus:ring-ds-destructive',
          'focus:border-ds-destructive'
        )
      : cn(
          'border-ds-input',
          'text-ds-foreground',
          'bg-ds-background',
          'focus:ring-ds-ring',
          'focus:border-ds-primary',
          'hover:border-ds-ring'
        )

    const classes = cn(
      baseStyles,
      sizeStyles[size],
      stateStyles,
      isFullWidth && 'w-full',
      className
    )

    return (
      <input ref={ref} className={classes} disabled={isDisabled} {...props} />
    )
  }
)

Input.displayName = 'Input'
