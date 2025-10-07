import React from 'react'
import clsx from 'clsx'

export interface TextOwnProps {
  /** Variante de couleur DS */
  variant?: 'default' | 'muted' | 'success' | 'danger' | 'warning' | 'info'

  /** Taille de texte (DS token) */
  size?: 'sm' | 'md' | 'lg'

  /** Alignement */
  align?: 'left' | 'center' | 'right'

  /** Poids typographique DS */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'

  /** Classes additionnelles */
  className?: string

  /** Contenu du texte */
  children: React.ReactNode
}

export type TextProps<T extends React.ElementType = 'p'> = TextOwnProps & {
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof TextOwnProps | 'as'>

/**
 * 🧾 Text — composant de texte du Design System
 * Full tokenisé via classes `ds-*` (typographie, couleurs, line-height)
 */
export const Text = <T extends React.ElementType = 'p'>({
  as,
  variant = 'default',
  size = 'md',
  align = 'left',
  weight = 'regular',
  className,
  children,
  ...rest
}: TextProps<T>) => {
  const Tag = as || 'p'

  /** 🎨 Couleurs DS */
  const colorClasses: Record<string, string> = {
    default: 'text-ds-text-primary',
    muted: 'text-ds-text-secondary',
    success: 'text-ds-state-success',
    danger: 'text-ds-state-danger',
    warning: 'text-ds-state-warning',
    info: 'text-ds-state-info'
  }

  /** 📏 Taille et interlignage DS */
  const sizeClasses: Record<string, string> = {
    sm: 'text-ds-font-size-sm leading-ds-line-height-snug',
    md: 'text-ds-font-size-base leading-ds-line-height-normal',
    lg: 'text-ds-font-size-lg leading-ds-line-height-relaxed'
  }

  /** 🏋️ Poids DS */
  const weightClasses: Record<string, string> = {
    light: 'font-ds-font-weight-light',
    regular: 'font-ds-font-weight-regular',
    medium: 'font-ds-font-weight-medium',
    semibold: 'font-ds-font-weight-semibold',
    bold: 'font-ds-font-weight-bold'
  }

  /** 📐 Alignement */
  const alignClasses: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <Tag
      {...rest}
      className={clsx(
        colorClasses[variant],
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Tag>
  )
}

Text.displayName = 'Text'
