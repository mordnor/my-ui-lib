import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { BadgeProps } from './Badge.types'

/**
 * Badge component - Status indicators and labels
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'solid',
      colorScheme = 'primary',
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      'font-ds-medium',
      'rounded-ds-full',
      'whitespace-nowrap'
    )

    const sizeStyles = {
      xs: 'px-ds-2 py-ds-0.5 text-ds-xs',
      sm: 'px-ds-2.5 py-ds-1 text-ds-xs',
      md: 'px-ds-3 py-ds-1 text-ds-sm',
      lg: 'px-ds-4 py-ds-1.5 text-ds-base'
    }

    const variantStyles = {
      solid: {
        primary: 'bg-ds-primary text-ds-primary-foreground',
        secondary: 'bg-ds-secondary text-ds-secondary-foreground',
        accent: 'bg-ds-accent text-ds-accent-foreground',
        success: 'bg-ds-success text-ds-success-foreground',
        error: 'bg-ds-destructive text-ds-destructive-foreground',
        warning: 'bg-ds-warning text-ds-warning-foreground',
        info: 'bg-ds-info text-ds-info-foreground',
        neutral: 'bg-ds-muted text-ds-foreground'
      },
      outline: {
        primary: 'border border-ds-primary text-ds-primary',
        secondary: 'border border-ds-secondary text-ds-secondary',
        accent: 'border border-ds-accent text-ds-accent',
        success: 'border border-ds-success text-ds-success',
        error: 'border border-ds-destructive text-ds-destructive',
        warning: 'border border-ds-warning text-ds-warning',
        info: 'border border-ds-info text-ds-info',
        neutral: 'border border-ds-border text-ds-foreground'
      },
      soft: {
        primary: 'bg-ds-blue-50 text-ds-primary border border-ds-blue-200',
        secondary: 'bg-ds-slate-50 text-ds-secondary border border-ds-slate-200',
        accent: 'bg-ds-purple-50 text-ds-accent border border-ds-purple-200',
        success: 'bg-ds-green-50 text-ds-success border border-ds-green-200',
        error: 'bg-ds-red-50 text-ds-destructive border border-ds-red-200',
        warning: 'bg-ds-orange-50 text-ds-warning border border-ds-orange-200',
        info: 'bg-ds-blue-50 text-ds-info border border-ds-blue-200',
        neutral: 'bg-ds-slate-50 text-ds-foreground border border-ds-slate-200'
      },
      ghost: {
        primary: 'text-ds-primary',
        secondary: 'text-ds-secondary',
        accent: 'text-ds-accent',
        success: 'text-ds-success',
        error: 'text-ds-destructive',
        warning: 'text-ds-warning',
        info: 'text-ds-info',
        neutral: 'text-ds-foreground'
      },
      link: {
        primary: 'text-ds-primary',
        secondary: 'text-ds-secondary',
        accent: 'text-ds-accent',
        success: 'text-ds-success',
        error: 'text-ds-destructive',
        warning: 'text-ds-warning',
        info: 'text-ds-info',
        neutral: 'text-ds-muted-foreground'
      }
    }

    const classes = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant][colorScheme],
      className
    )

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
