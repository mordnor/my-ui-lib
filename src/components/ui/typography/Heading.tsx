import React from 'react'
import clsx from 'clsx'

export interface HeadingProps {
  /** Niveau HTML (h1–h6) */
  level?: 1 | 2 | 3 | 4 | 5 | 6

  /** Poids typographique */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'

  /** Passage en majuscules */
  uppercase?: boolean

  /** Espacement des lettres */
  tracking?: 'tight' | 'normal' | 'wide'

  /** Alignement du texte */
  align?: 'left' | 'center' | 'right'

  /** Classes supplémentaires */
  className?: string

  /** Contenu */
  children: React.ReactNode
}

/**
 * 🔠 Heading — composant typographique DS sans marge intégrée.
 * Utilise uniquement la taille, le poids et l’alignement.
 */
export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  weight = 'semibold',
  uppercase = false,
  tracking = 'normal',
  align = 'left',
  className = '',
  children
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const sizeMap: Record<number, string> = {
    1: 'text-ds-3xl leading-ds-tight',
    2: 'text-ds-2xl leading-ds-snug',
    3: 'text-ds-xl leading-ds-normal',
    4: 'text-ds-lg leading-ds-normal',
    5: 'text-ds-base leading-ds-relaxed',
    6: 'text-ds--sm leading-ds-relaxed'
  }

  const weightMap: Record<string, string> = {
    light: 'font-ds-light',
    regular: 'font-ds-regular',
    medium: 'font-ds-medium',
    semibold: 'font-ds-semibold',
    bold: 'font-ds-bold'
  }

  const trackingMap: Record<string, string> = {
    tight: 'tracking-tight',
    normal: '',
    wide: 'tracking-wide'
  }

  const alignMap: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <Tag
      className={clsx(
        'text-ds-text-primary',
        sizeMap[level],
        weightMap[weight],
        trackingMap[tracking],
        alignMap[align],
        uppercase && 'uppercase',
        className
      )}
    >
      {children}
    </Tag>
  )
}

Heading.displayName = 'Heading'
