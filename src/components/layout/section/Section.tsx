import React from 'react'
import clsx from 'clsx'
import { Container } from '@/components/layout/container/Container'
import type { SectionBg, SectionProps, SectionVertical } from './Section.types'

/**
 * 🧱 DS Section — composant de structure basé sur les tokens DS
 * Gère les backgrounds, le vertical spacing et le container optionnel.
 */
export function Section({
  children,
  bg = 'app',
  size = 'xl',
  vertical = 'lg',
  noContainer = false,
  className = '',
  as = 'section',
  ...rest
}: SectionProps) {
  const Tag = as as React.ElementType

  /* 🎨 Backgrounds DS (compatibles dark/light) */
  const bgColor: Record<SectionBg, string> = {
    app: 'bg-ds-background-app text-ds-text-primary',
    surface: 'bg-ds-background-surface text-ds-text-primary',
    inverse: 'bg-ds-background-inverse text-ds-text-inverse',
    brand: 'bg-ds-brand-primary text-ds-text-inverse',
    gradient: 'bg-ds-brand-gradient text-ds-text-inverse'
  }

  /* 📏 Espacement vertical */
  const verticalPadding: Record<SectionVertical, string> = {
    sm: 'py-ds-sm',
    md: 'py-ds-md',
    lg: 'py-ds-lg',
    xl: 'py-ds-xl'
  }

  return (
    <Tag
      {...rest}
      className={clsx(
        bgColor[bg],
        verticalPadding[vertical],
        'duration-ds-normal ease-ds-standard transition-colors',
        className
      )}
    >
      {noContainer ? children : <Container size={size}>{children}</Container>}
    </Tag>
  )
}

Section.displayName = 'Section'
