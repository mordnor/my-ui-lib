import React from 'react'
import clsx from 'clsx'
import type { AvatarProps } from './Avatar.types'

/**
 * 👤 Avatar — composant visuel DS pour représenter un utilisateur ou une entité.
 * Full tokenisé : tailles, couleurs, bordures et typographie via classes `ds-*`.
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallback,
  size = 'md',
  variant = 'default',
  ring = false,
  className
}) => {
  /** 📏 Tailles basées sur les tokens DS */
  const sizeMap: Record<string, string> = {
    sm: 'w-[var(--sizes-avatar-sm)] h-[var(--sizes-avatar-sm)] text-ds-font-size-sm',
    md: 'w-[var(--sizes-avatar-md)] h-[var(--sizes-avatar-md)] text-ds-font-size-base',
    lg: 'w-[var(--sizes-avatar-lg)] h-[var(--sizes-avatar-lg)] text-ds-font-size-lg',
    xl: 'w-[calc(var(--sizes-avatar-lg)*1.25)] h-[calc(var(--sizes-avatar-lg)*1.25)] text-ds-font-size-xl'
  }

  /** 🎨 Variantes de fond */
  const variantMap: Record<string, string> = {
    default: 'bg-ds-bg-card text-ds-text-primary',
    surface: 'bg-ds-bg-surface text-ds-text-secondary',
    inverse: 'bg-ds-bg-inverse text-ds-text-inverse'
  }

  /** 🧿 Bordure annulaire optionnelle */
  const ringClass = ring
    ? 'ring-2 ring-ds-border-focus ring-offset-2 ring-offset-ds-bg-surface'
    : ''

  /** 🖼️ Contenu : image ou fallback */
  const content = src ? (
    <img
      src={src}
      alt={alt}
      className="size-full select-none rounded-full object-cover"
      draggable={false}
    />
  ) : (
    <span
      className={clsx(
        'font-ds-font-weight-medium flex size-full select-none items-center justify-center'
      )}
    >
      {typeof fallback === 'string'
        ? fallback.charAt(0).toUpperCase()
        : fallback}
    </span>
  )

  return (
    <div
      className={clsx(
        'inline-flex overflow-hidden rounded-full',
        sizeMap[size],
        variantMap[variant],
        ringClass,
        className
      )}
    >
      {content}
    </div>
  )
}

Avatar.displayName = 'Avatar'
