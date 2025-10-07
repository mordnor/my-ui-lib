import React from 'react'
import { Card as PrimeCard } from 'primereact/card'
import clsx from 'clsx'
import { Heading, Text } from '@/components/ui/typography'
import type { DSCardProps } from './Card.types'

type CardSectionProps = {
  children: React.ReactNode
  className?: string
}

type CardSubComponents = {
  Header: React.FC<CardSectionProps>
  Body: React.FC<CardSectionProps>
  Footer: React.FC<CardSectionProps>
}

/**
 * 🧱 Card — composant conteneur du Design System
 * Tokenisé via classes `ds-*`, avec sous-composants explicites.
 */
export const Card: React.FC<DSCardProps> & CardSubComponents = ({
  variant = 'default',
  hoverable = false,
  padding = 'md',
  className = '',
  children,
  onClick,
  header,
  title,
  subTitle,
  footer,
  ...props
}) => {
  // 🎨 Palette DS
  const variantClasses: Record<string, string> = {
    default: 'border border-ds-border-default bg-ds-bg-surface shadow-ds-sm',
    elevated: 'border border-transparent bg-ds-bg-surface shadow-ds-lg',
    outlined:
      'border border-ds-border-default dark:border-ds-border-default bg-transparent shadow-none',
    subtle:
      // 🪶 Subtle → fond contextuel via token DS
      'border border-transparent bg-ds-bg-card shadow-none'
  }

  const paddingClasses: Record<string, string> = {
    none: 'p-0',
    sm: 'p-ds-space-sm',
    md: 'p-ds-space-md',
    lg: 'p-ds-space-lg'
  }

  const hoverClasses = hoverable
    ? 'transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-ds-lg cursor-pointer'
    : ''

  const resolvedTitle = typeof title === 'function' ? title(props) : title
  const resolvedSubTitle =
    typeof subTitle === 'function' ? subTitle(props) : subTitle

  const isOutlined = variant === 'outlined'
  const isSubtle = variant === 'subtle'
  const hasHeaderImage = typeof header === 'string'

  return (
    <PrimeCard
      unstyled
      {...props}
      onClick={onClick}
      className={clsx(
        'overflow-hidden rounded-xl transition-all duration-300',
        variantClasses[variant],
        hoverClasses,
        className
      )}
    >
      {/* HEADER */}
      {header && (
        <Card.Header
          className={clsx(
            hasHeaderImage
              ? 'p-0'
              : clsx(
                  paddingClasses[padding],
                  isOutlined && 'border-ds-border-default/40 border-b',
                  isSubtle && 'bg-ds-bg-card'
                )
          )}
        >
          {hasHeaderImage ? (
            <img
              src={header}
              alt="Card header"
              className={clsx(
                'h-[220px] w-full object-cover',
                isOutlined && 'border-ds-border-default/40 border-b',
                isSubtle && 'opacity-95'
              )}
            />
          ) : (
            header
          )}
        </Card.Header>
      )}

      {/* BODY */}
      <Card.Body className={paddingClasses[padding]}>
        {resolvedTitle && (
          <Heading
            level={3}
            className="mb-ds-space-xs text-ds-text-primary leading-snug"
          >
            {resolvedTitle}
          </Heading>
        )}
        {resolvedSubTitle && (
          <Text variant="muted" size="sm" className="mb-ds-space-sm">
            {resolvedSubTitle}
          </Text>
        )}
        {children && <div className="text-ds-text-secondary">{children}</div>}
      </Card.Body>

      {/* FOOTER */}
      {footer && (
        <Card.Footer
          className={clsx(
            'px-ds-space-md pb-ds-space-md pt-ds-space-sm transition-colors',
            isOutlined &&
              'border-ds-border-default/40 dark:border-ds-border-default/25 border-t bg-transparent',
            isSubtle && 'bg-ds-bg-card',
            !isOutlined &&
              !isSubtle &&
              'border-ds-border-default bg-ds-bg-surface border-t'
          )}
        >
          {footer}
        </Card.Footer>
      )}
    </PrimeCard>
  )
}

/* 🔹 Sous-composants */
Card.Header = ({ children, className }: CardSectionProps) => (
  <div className={clsx('overflow-hidden', className)}>{children}</div>
)

Card.Body = ({ children, className }: CardSectionProps) => (
  <div className={clsx('gap-ds-space-md flex flex-col text-left', className)}>
    {children}
  </div>
)

Card.Footer = ({ children, className }: CardSectionProps) => (
  <div className={clsx(className)}>{children}</div>
)

/* 🔸 Display names pour React DevTools */
Card.displayName = 'Card'
Card.Header.displayName = 'Card.Header'
Card.Body.displayName = 'Card.Body'
Card.Footer.displayName = 'Card.Footer'
