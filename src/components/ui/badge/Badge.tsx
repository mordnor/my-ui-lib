import React from 'react'
import clsx from 'clsx'

export type BadgeVariant = 'default' | 'success' | 'danger' | 'warning' | 'info'

export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps {
  /** Variante visuelle basée sur les états du DS */
  variant?: BadgeVariant

  /** Taille typographique et padding */
  size?: BadgeSize

  /** Icône optionnelle à gauche */
  icon?: React.ReactNode

  /** Contenu textuel ou JSX du badge */
  children: React.ReactNode

  /** Classes personnalisées */
  className?: string
}

/**
 * 🏷️ Badge — indicateur visuel basé sur le Design System.
 * Full tokenisé via classes `ds-*` (couleurs, typographie, espacement, radius…)
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  children,
  className = ''
}) => {
  /** 🎨 Variantes couleur (DS) */
  const colorVariants: Record<BadgeVariant, string> = {
    default:
      'bg-ds-bg-surface text-ds-text-primary border border-ds-border-default',
    success:
      'bg-ds-state-success/10 text-ds-state-success border border-ds-state-success/20',
    danger:
      'bg-ds-state-danger/10 text-ds-state-danger border border-ds-state-danger/20',
    warning:
      'bg-ds-state-warning/10 text-ds-state-warning border border-ds-state-warning/20',
    info: 'bg-ds-state-info/10 text-ds-state-info border border-ds-state-info/20'
  }

  /** 📏 Tailles basées sur les tokens DS */
  const sizeVariants: Record<BadgeSize, string> = {
    sm: 'text-ds-font-size-xs px-ds-space-xs py-[0.15rem]',
    md: 'text-ds-font-size-sm px-ds-space-sm py-ds-space-xs',
    lg: 'text-ds-font-size-base px-ds-space-md py-ds-space-sm'
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center gap-ds-space-xs rounded-full',
        'font-ds-font-weight-medium select-none',
        colorVariants[variant],
        sizeVariants[size],
        className
      )}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'
