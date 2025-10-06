import React from 'react'
import { Card as PrimeCard, CardProps } from 'primereact/card'
import type { DSCardProps } from './Card.types'

export const Card: React.FC<DSCardProps> = ({
  variant = 'default',
  hoverable = false,
  className = '',
  children,
  onClick,
  header,
  title,
  subTitle,
  footer,
  ...props
}) => {
  const variantClasses: Record<string, string> = {
    default:
      'border border-[var(--color-border)] shadow-[var(--shadow-sm)] bg-[var(--color-surface)]',
    outlined:
      'border-2 border-[var(--color-border)] shadow-none bg-[var(--color-background)]',
    elevated:
      'border border-[var(--color-border)] shadow-[var(--shadow-lg)] bg-[var(--color-surface)]'
  }

  const hoverClasses = hoverable
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] cursor-pointer'
    : ''

  // 🧠 Force le rendu de title/subTitle en ReactNode
  const resolvedTitle =
    typeof title === 'function' ? title(props as CardProps) : title
  const resolvedSubTitle =
    typeof subTitle === 'function' ? subTitle(props as CardProps) : subTitle

  return (
    <PrimeCard
      unstyled
      {...props}
      className={`overflow-hidden rounded-[var(--radius-lg)] ${variantClasses[variant]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {/* HEADER */}
      {header && (
        <div className="h-[220px] w-full overflow-hidden">
          {typeof header === 'string' ? (
            <img
              src={header}
              alt="Card image"
              className="size-full object-cover"
            />
          ) : (
            header
          )}
        </div>
      )}

      {/* BODY */}
      <div className="flex flex-col gap-[var(--space-3)] p-[var(--space-5)] text-left">
        {resolvedTitle && (
          <h3 className="text-lg font-semibold leading-tight">
            {resolvedTitle}
          </h3>
        )}
        {resolvedSubTitle && (
          <h4 className="text-muted-text text-sm">{resolvedSubTitle}</h4>
        )}
        {children && (
          <div className="text-text text-base leading-normal">{children}</div>
        )}
      </div>

      {/* FOOTER */}
      {footer && (
        <div className="border-border bg-surface border-t p-[var(--space-4)]">
          {footer}
        </div>
      )}
    </PrimeCard>
  )
}
