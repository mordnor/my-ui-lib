import React from 'react'
import clsx from 'clsx'
import type { DividerProps } from './Divider.types'

/**
 * ─ Avatar — séparateur visuel tokenisé du Design System
 * Full `ds-*` : couleurs, spacing, typographie cohérentes.
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'default',
  label,
  spacing = 'md',
  full = true,
  className
}) => {
  /** 🎨 Couleurs DS */
  const colorMap: Record<string, string> = {
    default: 'border-ds-border-default',
    strong: 'border-ds-border-strong',
    muted: 'border-ds-text-muted/20',
    inverse: 'border-ds-border-focus'
  }

  /** 📏 Espacement vertical/horizontal DS */
  const spacingMap: Record<string, string> = {
    none: '',
    sm: 'my-ds-space-sm',
    md: 'my-ds-space-md',
    lg: 'my-ds-space-lg',
    xl: 'my-ds-space-xl'
  }

  /** 🧱 Layout selon orientation */
  const baseClass =
    orientation === 'vertical'
      ? clsx(
          'border-l',
          colorMap[variant],
          spacingMap[spacing],
          full ? 'h-full' : 'h-auto'
        )
      : clsx(
          'border-t',
          colorMap[variant],
          spacingMap[spacing],
          full ? 'w-full' : 'w-auto'
        )

  /** 🏷️ Variante avec label centré */
  if (label) {
    return (
      <div
        className={clsx(
          'flex w-full items-center',
          spacingMap[spacing],
          className
        )}
      >
        <div className={clsx('flex-1 border-t', colorMap[variant])} />
        <span className="mx-ds-space-md text-ds-text-muted text-ds-font-size-sm select-none">
          {label}
        </span>
        <div className={clsx('flex-1 border-t', colorMap[variant])} />
      </div>
    )
  }

  return <div className={clsx(baseClass, className)} role="separator" />
}

Divider.displayName = 'Divider'
