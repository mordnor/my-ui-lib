import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { LinkProps } from './Link.types'

/**
 * Link component - Accessible hyperlinks
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      isExternal = false,
      underline = 'hover',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const underlineStyles = {
      none: '',
      hover: 'hover:underline',
      always: 'underline'
    }

    const classes = cn(
      'text-ds-primary hover:opacity-ds-90',
      'underline-offset-4',
      'transition-all duration-ds-fast',
      'focus:outline-none focus:ring-2 focus:ring-ds-ring focus:ring-offset-2 rounded-ds-sm',
      underlineStyles[underline],
      className
    )

    const externalProps = isExternal
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <a ref={ref} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
