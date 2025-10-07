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
  Header: React.FC<{ children: React.ReactNode }>
  Body: React.FC<CardSectionProps>
  Footer: React.FC<{ children: React.ReactNode }>
}

/**
 * 🧱 Card — composant conteneur du Design System
 * Full tokenisé via classes `ds-*`, avec sous-composants explicites.
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
  /** 🎨 Variantes visuelles DS */
  const variantClasses: Record<string, string> = {
    default: 'border border-ds-border-default shadow-ds-sm bg-ds-bg-surface',
    outlined: 'border-2 border-ds-border-default shadow-none bg-ds-bg-app',
    elevated: 'border border-ds-border-default shadow-ds-lg bg-ds-bg-surface',
    flat: 'border border-transparent shadow-none bg-transparent'
  }

  /** 📏 Padding basé sur tokens DS */
  const paddingClasses: Record<string, string> = {
    none: 'p-0',
    sm: 'p-ds-space-sm',
    md: 'p-ds-space-md',
    lg: 'p-ds-space-lg'
  }

  /** ✨ Effet hover optionnel */
  const hoverClasses = hoverable
    ? 'transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-ds-lg cursor-pointer'
    : ''

  /** 🧱 Résolution dynamique du titre/sous-titre */
  const resolvedTitle = typeof title === 'function' ? title(props) : title
  const resolvedSubTitle =
    typeof subTitle === 'function' ? subTitle(props) : subTitle

  return (
    <PrimeCard
      unstyled
      {...props}
      onClick={onClick}
      className={clsx(
        'overflow-hidden rounded',
        variantClasses[variant],
        hoverClasses,
        className
      )}
    >
      {/* HEADER */}
      {header && (
        <Card.Header>
          {typeof header === 'string' ? (
            <img
              src={header}
              alt="Card header"
              className="h-[220px] w-full object-cover"
            />
          ) : (
            header
          )}
        </Card.Header>
      )}

      {/* BODY */}
      <Card.Body className={paddingClasses[padding]}>
        {resolvedTitle && (
          <Heading level={3} className="text-ds-text-primary">
            {resolvedTitle}
          </Heading>
        )}
        {resolvedSubTitle && (
          <Text variant="muted" size="sm">
            {resolvedSubTitle}
          </Text>
        )}
        {children && <Text size="md">{children}</Text>}
      </Card.Body>

      {/* FOOTER */}
      {footer && <Card.Footer>{footer}</Card.Footer>}
    </PrimeCard>
  )
}

/* 🔹 Sous-composants */
Card.Header = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-hidden">{children}</div>
)

Card.Body = ({ children, className }: CardSectionProps) => (
  <div className={clsx('gap-ds-space-md flex flex-col text-left', className)}>
    {children}
  </div>
)

Card.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="border-ds-border-default bg-ds-bg-surface p-ds-space-sm border-t">
    {children}
  </div>
)

/* 🔸 Display names pour React DevTools */
Card.displayName = 'Card'
Card.Header.displayName = 'Card.Header'
Card.Body.displayName = 'Card.Body'
Card.Footer.displayName = 'Card.Footer'
