import React from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

/**
 * 📦 Props du composant DS Container
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Contenu interne du conteneur */
  children: React.ReactNode

  /** Taille maximale du conteneur (responsive breakpoint) */
  size?: ContainerSize

  /** Si `true`, le container prend 100% de la largeur (désactive les limites max) */
  fluid?: boolean

  /** Élément HTML à utiliser comme wrapper (ex: section, main, article, etc.) */
  as?: keyof React.JSX.IntrinsicElements
}
