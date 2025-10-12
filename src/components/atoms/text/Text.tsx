import { forwardRef, createElement } from 'react'
import { cn } from '@/utils/cn'
import type { TextProps } from './Text.types'

/**
 * Text component - Paragraph and inline text with typography system
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      as = 'p',
      size = 'base',
      weight = 'regular',
      align,
      color = 'primary',
      isTruncated = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Size styles using ds-* tokens
    const sizeStyles = {
      xs: 'text-ds-xs leading-ds-normal',
      sm: 'text-ds-sm leading-ds-normal',
      base: 'text-ds-base leading-ds-relaxed',
      lg: 'text-ds-lg leading-ds-relaxed'
    }

    // Weight styles using ds-* tokens
    const weightStyles = {
      regular: 'font-ds-regular',
      medium: 'font-ds-medium',
      semibold: 'font-ds-semibold',
      bold: 'font-ds-bold'
    }

    // Alignment styles
    const alignStyles = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    }

    // Color styles using ds-* tokens
    const colorStyles = {
      primary: 'text-ds-foreground',
      secondary: 'text-ds-muted-foreground',
      tertiary: 'text-ds-muted-foreground',
      muted: 'text-ds-muted-foreground',
      inverse: 'text-ds-primary-foreground',
      link: 'text-ds-primary'
    }

    const classes = cn(
      'font-ds-sans',
      sizeStyles[size],
      weightStyles[weight],
      colorStyles[color],
      align && alignStyles[align],
      isTruncated && 'truncate',
      className
    )

    return createElement(
      as,
      {
        ref,
        className: classes,
        ...props
      },
      children
    )
  }
)

Text.displayName = 'Text'
