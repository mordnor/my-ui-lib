import React from 'react'
import { Card as PrimeCard, CardProps } from 'primereact/card'
import type { DSCardProps } from './Card.types'
import { Heading, Text } from '@/components/ui/typography'

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
  // 🎨 Styles selon le variant
  const variantClasses: Record<string, string> = {
    default: 'border border-border shadow-sm bg-background-surface',
    outlined: 'border-2 border-border shadow-none bg-background-app',
    elevated: 'border border-border shadow-lg bg-background-surface',
    flat: 'border border-transparent shadow-none bg-transparent'
  }

  // ✨ Hover effect optionnel
  const hoverClasses = hoverable
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer'
    : ''

  // 🧱 Résolution dynamique (si titre/texte = fonction)
  const resolvedTitle =
    typeof title === 'function' ? title(props as CardProps) : title
  const resolvedSubTitle =
    typeof subTitle === 'function' ? subTitle(props as CardProps) : subTitle

  return (
    <PrimeCard
      unstyled
      {...props}
      className={`overflow-hidden rounded p-0 ${variantClasses[variant]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {/* HEADER */}
      {header && (
        <div className="h-[220px] w-full overflow-hidden">
          {typeof header === 'string' ? (
            <img
              src={header}
              alt="Card header"
              className="size-full object-cover"
            />
          ) : (
            header
          )}
        </div>
      )}

      {/* BODY */}
      <div className="flex flex-col gap-3 p-5 text-left">
        {resolvedTitle && <Heading level={3}>{resolvedTitle}</Heading>}
        {resolvedSubTitle && (
          <Text variant="muted" size="sm">
            {resolvedSubTitle}
          </Text>
        )}
        {children && <Text size="md">{children}</Text>}
      </div>

      {/* FOOTER */}
      {footer && (
        <div className="border-t border-border bg-background-surface p-4">
          {footer}
        </div>
      )}
    </PrimeCard>
  )
}
