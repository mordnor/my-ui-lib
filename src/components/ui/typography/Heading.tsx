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
 * 🔠 Heading — composant typographique DS avec rythme vertical intégré
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
    1: 'text-ds-font-size-3xl leading-ds-line-height-tight',
    2: 'text-ds-font-size-2xl leading-ds-line-height-snug',
    3: 'text-ds-font-size-xl leading-ds-line-height-normal',
    4: 'text-ds-font-size-lg leading-ds-line-height-normal',
    5: 'text-ds-font-size-base leading-ds-line-height-relaxed',
    6: 'text-ds-font-size-sm leading-ds-line-height-relaxed'
  }

  const weightMap: Record<string, string> = {
    light: 'font-ds-font-weight-light',
    regular: 'font-ds-font-weight-regular',
    medium: 'font-ds-font-weight-medium',
    semibold: 'font-ds-font-weight-semibold',
    bold: 'font-ds-font-weight-bold'
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

  /** 🧩 Espacement vertical automatique selon le niveau */
  const marginBottomByLevel: Record<number, string> = {
    1: 'mb-ds-space-4xl',
    2: 'mb-ds-space-3xl',
    3: 'mb-ds-space-2xl',
    4: 'mb-ds-space-xl',
    5: 'mb-ds-space-lg',
    6: 'mb-ds-space-md'
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
        marginBottomByLevel[level],
        className
      )}
    >
      {children}
    </Tag>
  )
}

Heading.displayName = 'Heading'
