import { forwardRef, Fragment } from 'react'
import { cn } from '@/utils/cn'
import { Link } from '@/components/atoms/link'
import type { BreadcrumbProps } from './Breadcrumb.types'

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, separator = '/', className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn('ds-text-sm', className)}
        {...props}
      >
        <ol className="flex items-center gap-ds-2 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            const isCurrent = item.isCurrentPage || isLast

            return (
              <Fragment key={index}>
                <li className="flex items-center gap-ds-2">
                  {item.icon && (
                    <span className="flex-shrink-0">{item.icon}</span>
                  )}
                  {isCurrent ? (
                    <span
                      className="text-ds-text-primary ds-font-medium"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="text-ds-text-secondary hover:text-ds-text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
                {!isLast && (
                  <li
                    className="text-ds-text-tertiary ds-select-none"
                    aria-hidden="true"
                  >
                    {separator}
                  </li>
                )}
              </Fragment>
            )
          })}
        </ol>
      </nav>
    )
  }
)

Breadcrumb.displayName = 'Breadcrumb'
