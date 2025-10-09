import React from "react"

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "danger"
  | "brand"
  | "gradient"

export type ButtonSize = "sm" | "md" | "lg"
export type ButtonIconPosition = "left" | "right"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visuelle du bouton */
  variant?: ButtonVariant

  /** Taille du bouton (padding + typo) */
  dsSize?: ButtonSize

  /** Indicateur de chargement */
  loading?: boolean

  /** Icône (PrimeIcons, Lucide ou classe custom) */
  icon?: string

  /** Position de l’icône */
  iconPosition?: ButtonIconPosition

  /** Texte du bouton */
  label?: string

  /** Contenu enfant (si pas de label) */
  children?: React.ReactNode
}
