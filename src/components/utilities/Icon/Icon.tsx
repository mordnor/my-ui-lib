import React from 'react'
import clsx from 'clsx'
import type { IconProps } from './Icon.types'

/**
 * 🧩 Icon — wrapper PrimeIcons full tokenisé
 * Utilise les classes `pi pi-*` mais ajoute sizing et couleurs via le DS.
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'primary',
  spin = false,
  className,
  ariaLabel
}) => {
  /** 📏 Tailles DS */
  const sizeMap: Record<string, string> = {
    xs: 'text-ds-font-size-xs',
    sm: 'text-ds-font-size-sm',
    md: 'text-ds-font-size-base',
    lg: 'text-ds-font-size-lg',
    xl: 'text-ds-font-size-xl'
  }

  /** 🎨 Couleurs DS */
  const colorMap: Record<string, string> = {
    primary: 'text-ds-text-primary',
    secondary: 'text-ds-text-secondary',
    muted: 'text-ds-text-muted',
    inverse: 'text-ds-text-inverse',
    success: 'text-ds-state-success',
    danger: 'text-ds-state-danger',
    warning: 'text-ds-state-warning',
    info: 'text-ds-state-info'
  }

  return (
    <i
      aria-label={ariaLabel || name}
      className={clsx(
        `pi pi-${name}`,
        sizeMap[size],
        colorMap[color],
        spin && 'pi-spin',
        'inline-flex items-center justify-center leading-none',
        className
      )}
    />
  )
}

Icon.displayName = 'Icon'
