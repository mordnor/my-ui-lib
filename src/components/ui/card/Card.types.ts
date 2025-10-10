import type { HTMLAttributes, ReactNode } from 'react'

/**
 * 🔹 Props du composant DSCard
 * Corrigé pour éviter le conflit entre `title` HTML et `dsTitle` DS
 */
export interface DSCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Titre principal de la carte (à la place de `title` HTML) */
  dsTitle?: ReactNode | ((props: DSCardProps) => ReactNode)

  /** Sous-titre optionnel */
  subTitle?: ReactNode | ((props: DSCardProps) => ReactNode)

  /** Variante visuelle du composant */
  variant?:
    | 'default'
    | 'elevated'
    | 'outlined'
    | 'subtle'
    | 'brand'
    | 'gradient'

  /** Active l’effet hover avec ombre et légère élévation */
  hoverable?: boolean

  /** Padding intérieur (DS spacing) */
  padding?: 'none' | 'sm' | 'md' | 'lg'

  /** En-tête de la carte : texte, image ou JSX */
  header?: ReactNode | string

  /** Pied de carte */
  footer?: ReactNode

  /** Contenu interne */
  children?: ReactNode
}
