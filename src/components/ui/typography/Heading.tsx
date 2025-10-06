import React from 'react'
import clsx from 'clsx'

interface HeadingProps {
  /** Niveau HTML du titre (h1–h6) */
  level?: 1 | 2 | 3 | 4 | 5 | 6

  /** Poids typographique (light → bold) */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'

  /** Mise en majuscules */
  uppercase?: boolean

  /** Espacement des lettres */
  tracking?: 'tight' | 'normal' | 'wide'

  /** Alignement du texte */
  align?: 'left' | 'center' | 'right'

  /** Classes personnalisées */
  className?: string

  /** Contenu du heading */
  children: React.ReactNode
}

/**
 * 🔠 Heading — composant typographique basé sur les tokens Tailwind
 * - utilise `fontSize`, `fontWeight`, `lineHeight`, `tracking`, `textAlign`
 * - cohérent avec ton design system global
 */
export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  weight,
  uppercase = false,
  tracking = 'normal',
  align = 'left',
  className = '',
  children
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  // 🔤 Échelle typographique — basée sur les tokens Tailwind
  const sizeMap: Record<number, string> = {
    1: 'text-3xl leading-tight',
    2: 'text-2xl leading-snug',
    3: 'text-xl leading-normal',
    4: 'text-lg leading-normal',
    5: 'text-base leading-relaxed',
    6: 'text-sm leading-relaxed'
  }

  // 🏋️ Poids
  const weightMap: Record<string, string> = {
    light: 'font-light',
    regular: 'font-regular',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }

  // 🔠 Espacement des lettres
  const trackingMap: Record<string, string> = {
    tight: 'tracking-tight',
    normal: '',
    wide: 'tracking-wide'
  }

  // 📐 Alignement
  const alignMap: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <Tag
      className={clsx(
        'text-text-primary', // 🔧 Couleur par défaut tokenisée
        sizeMap[level],
        weight && weightMap[weight],
        uppercase && 'uppercase',
        trackingMap[tracking],
        alignMap[align],
        className
      )}
    >
      {children}
    </Tag>
  )
}
