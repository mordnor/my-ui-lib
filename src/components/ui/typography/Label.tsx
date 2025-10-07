import React from 'react'
import clsx from 'clsx'

export interface LabelProps {
  /** Contenu du label (texte ou éléments JSX) */
  children: React.ReactNode

  /** ID de l’input associé */
  htmlFor?: string

  /** Classes personnalisées */
  className?: string

  /** Désactive visuellement le label */
  disabled?: boolean
}

/**
 * 🏷️ Label — élément de formulaire basé sur le Design System
 * Full tokenisé (`ds-*`), gère l’état désactivé et la typographie DS.
 */
export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  className = '',
  disabled = false
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        'block select-none text-ds-font-size-sm font-ds-font-weight-medium',
        disabled
          ? 'text-ds-text-muted cursor-not-allowed'
          : 'text-ds-text-secondary',
        'mb-ds-space-xs',
        className
      )}
    >
      {children}
    </label>
  )
}

Label.displayName = 'Label'
