import type { CardProps as PrimeCardProps } from 'primereact/card'
import type React from 'react'

export type CardVariant = 'default' | 'outlined' | 'elevated'

/**
 * 🎨 Design System Card Props
 * Étend directement PrimeReact.CardProps pour compatibilité complète,
 * en ajoutant les variantes visuelles et les comportements du DS.
 */
export interface DSCardProps extends PrimeCardProps {
  /** Variante visuelle (ombrage + fond) */
  variant?: CardVariant

  /** Active un effet hover */
  hoverable?: boolean

  /** Gestion du clic (si la card est interactive) */
  onClick?: () => void

  /** Classes utilitaires supplémentaires */
  className?: string

  /** En-tête facultatif (image, node ou composant JSX) */
  header?: React.ReactNode | string

  /** Pied facultatif (actions, CTA, etc.) */
  footer?: React.ReactNode

  /** Contenu libre à l'intérieur de la carte */
  children?: React.ReactNode
}
