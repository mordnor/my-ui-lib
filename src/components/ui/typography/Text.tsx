import React from 'react'
import clsx from 'clsx'

export interface TextOwnProps {
  /** Variante de couleur : cohérente avec les tokens Tailwind */
  variant?: 'default' | 'muted' | 'success' | 'danger' | 'warning' | 'info'

  /** Taille du texte */
  size?: 'sm' | 'md' | 'lg'

  /** Alignement du texte */
  align?: 'left' | 'center' | 'right'

  /** Poids optionnel */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'

  /** Classes personnalisées */
  className?: string

  /** Contenu du texte */
  children: React.ReactNode
}

export type TextProps<T extends React.ElementType = 'p'> = TextOwnProps & {
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof TextOwnProps | 'as'>

export const Text = <T extends React.ElementType = 'p'>({
  as,
  variant = 'default',
  size = 'md',
  align = 'left',
  weight,
  className,
  children,
  ...rest
}: TextProps<T>) => {
  const Tag = as || 'p'

  const colorClasses: Record<string, string> = {
    default: 'text-text-primary',
    muted: 'text-text-secondary',
    success: 'text-state-success',
    danger: 'text-state-danger',
    warning: 'text-state-warning',
    info: 'text-state-info'
  }

  const sizeClasses: Record<string, string> = {
    sm: 'text-sm leading-snug',
    md: 'text-base leading-normal',
    lg: 'text-lg leading-relaxed'
  }

  const alignClasses: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const weightMap: Record<string, string> = {
    light: 'font-light',
    regular: 'font-regular',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }

  return (
    <Tag
      {...rest}
      className={clsx(
        colorClasses[variant],
        sizeClasses[size],
        alignClasses[align],
        weight && weightMap[weight],
        className
      )}
    >
      {children}
    </Tag>
  )
}
