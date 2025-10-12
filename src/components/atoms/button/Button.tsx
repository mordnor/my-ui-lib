import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { ButtonProps } from './Button.types'

/**
 * Button component - Primary interactive element
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      colorScheme = 'primary',
      size = 'md',
      isLoading = false,
      isDisabled = false,
      isFullWidth = false,
      isIconOnly = false,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const disabled = isDisabled || isLoading

    // Base styles using ds-* tokens
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      'font-ds-medium',
      'rounded-ds-md',
      'transition-all duration-ds-normal ease-ds-standard',
      'focus:outline-none focus:ring-2 focus:ring-ds-focus focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-ds-50'
    )

    // Size variants using ds-* tokens
    const sizeStyles = {
      xs: cn(
        'h-ds-7 px-ds-component-sm text-ds-xs gap-ds-component-xs',
        isIconOnly && 'w-ds-7 p-0'
      ),
      sm: cn(
        'h-ds-button-sm px-ds-component-sm text-ds-sm gap-ds-component-xs',
        isIconOnly && 'w-ds-button-sm p-0'
      ),
      md: cn(
        'h-ds-button-md px-ds-component-md text-ds-base gap-ds-component-sm',
        isIconOnly && 'w-ds-button-md p-0'
      ),
      lg: cn(
        'h-ds-button-lg px-ds-component-lg text-ds-lg gap-ds-component-sm',
        isIconOnly && 'w-ds-button-lg p-0'
      ),
      xl: cn(
        'h-ds-14 px-ds-component-xl text-ds-xl gap-ds-component-md',
        isIconOnly && 'w-ds-14 p-0'
      )
    }

    // Color + Variant combinations using ds-* tokens
    const variantStyles = {
      solid: {
        primary: cn(
          'bg-ds-primary text-ds-primary-foreground',
          'hover:opacity-ds-90',
          'active:opacity-ds-80'
        ),
        secondary: cn(
          'bg-ds-secondary text-ds-secondary-foreground',
          'hover:opacity-ds-90',
          'active:opacity-ds-80'
        ),
        accent: cn(
          'bg-ds-accent text-ds-accent-foreground',
          'hover:opacity-ds-90',
          'active:opacity-ds-80'
        ),
        success: cn(
          'bg-ds-success text-ds-success-foreground',
          'hover:opacity-ds-90',
          'active:opacity-ds-80'
        ),
        error: cn(
          'bg-ds-destructive text-ds-destructive-foreground',
          'hover:opacity-ds-90',
          'active:opacity-ds-80'
        ),
        warning: cn(
          'bg-ds-warning text-ds-warning-foreground',
          'hover:opacity-ds-90',
          'active:opacity-ds-80'
        ),
        info: cn(
          'bg-ds-info text-ds-info-foreground',
          'hover:opacity-ds-90',
          'active:opacity-ds-80'
        ),
        neutral: cn(
          'bg-ds-muted text-ds-foreground',
          'hover:opacity-ds-90',
          'active:opacity-ds-80'
        )
      },
      outline: {
        primary: cn(
          'border border-ds-primary text-ds-primary',
          'hover:bg-ds-primary hover:text-ds-primary-foreground',
          'active:opacity-ds-80'
        ),
        secondary: cn(
          'border border-ds-secondary text-ds-secondary',
          'hover:bg-ds-secondary hover:text-ds-secondary-foreground'
        ),
        accent: cn(
          'border border-ds-accent text-ds-accent',
          'hover:bg-ds-accent hover:text-ds-accent-foreground'
        ),
        success: cn(
          'border border-ds-success text-ds-success',
          'hover:bg-ds-success hover:text-ds-success-foreground'
        ),
        error: cn(
          'border border-ds-destructive text-ds-destructive',
          'hover:bg-ds-destructive hover:text-ds-destructive-foreground'
        ),
        warning: cn(
          'border border-ds-warning text-ds-warning',
          'hover:bg-ds-warning hover:text-ds-warning-foreground'
        ),
        info: cn(
          'border border-ds-info text-ds-info',
          'hover:bg-ds-info hover:text-ds-info-foreground'
        ),
        neutral: cn(
          'border border-ds-border text-ds-foreground',
          'hover:bg-ds-muted',
          'active:opacity-ds-90'
        )
      },
      ghost: {
        primary: cn(
          'text-ds-primary',
          'hover:bg-ds-muted',
          'active:bg-ds-accent'
        ),
        secondary: cn(
          'text-ds-secondary',
          'hover:bg-ds-muted',
          'active:bg-ds-accent'
        ),
        accent: cn(
          'text-ds-accent',
          'hover:bg-ds-muted',
          'active:bg-ds-accent'
        ),
        success: cn(
          'text-ds-success',
          'hover:bg-ds-muted',
          'active:opacity-ds-80'
        ),
        error: cn(
          'text-ds-destructive',
          'hover:bg-ds-muted',
          'active:opacity-ds-80'
        ),
        warning: cn(
          'text-ds-warning',
          'hover:bg-ds-muted',
          'active:opacity-ds-80'
        ),
        info: cn(
          'text-ds-info',
          'hover:bg-ds-muted',
          'active:opacity-ds-80'
        ),
        neutral: cn(
          'text-ds-foreground',
          'hover:bg-ds-muted',
          'active:bg-ds-accent'
        )
      },
      soft: {
        primary: cn(
          'bg-ds-primary/10 text-ds-primary',
          'hover:bg-ds-primary/20',
          'active:bg-ds-primary/30'
        ),
        secondary: cn(
          'bg-ds-secondary/10 text-ds-secondary',
          'hover:bg-ds-secondary/20',
          'active:bg-ds-secondary/30'
        ),
        accent: cn(
          'bg-ds-accent/10 text-ds-accent',
          'hover:bg-ds-accent/20',
          'active:bg-ds-accent/30'
        ),
        success: cn(
          'bg-ds-success/10 text-ds-success',
          'hover:bg-ds-success/20',
          'active:bg-ds-success/30'
        ),
        error: cn(
          'bg-ds-destructive/10 text-ds-destructive',
          'hover:bg-ds-destructive/20',
          'active:bg-ds-destructive/30'
        ),
        warning: cn(
          'bg-ds-warning/10 text-ds-warning',
          'hover:bg-ds-warning/20',
          'active:bg-ds-warning/30'
        ),
        info: cn(
          'bg-ds-info/10 text-ds-info',
          'hover:bg-ds-info/20',
          'active:bg-ds-info/30'
        ),
        neutral: cn(
          'bg-ds-muted text-ds-foreground',
          'hover:bg-ds-accent',
          'active:opacity-ds-90'
        )
      },
      link: {
        primary: cn(
          'text-ds-primary underline-offset-4',
          'hover:underline hover:opacity-ds-90'
        ),
        secondary: cn(
          'text-ds-secondary underline-offset-4',
          'hover:underline'
        ),
        accent: cn('text-ds-accent underline-offset-4', 'hover:underline'),
        success: cn('text-ds-success underline-offset-4', 'hover:underline'),
        error: cn('text-ds-destructive underline-offset-4', 'hover:underline'),
        warning: cn('text-ds-warning underline-offset-4', 'hover:underline'),
        info: cn('text-ds-info underline-offset-4', 'hover:underline'),
        neutral: cn(
          'text-ds-muted-foreground underline-offset-4',
          'hover:underline hover:text-ds-foreground'
        )
      }
    }

    const classes = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant][colorScheme],
      isFullWidth && 'w-full',
      className
    )

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {isLoading && (
          <svg
            className="animate-spin h-ds-4 w-ds-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-ds-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-ds-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
