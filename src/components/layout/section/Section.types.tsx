import React from "react"

export type SectionBg = "app" | "surface" | "inverse" | "brand" | "gradient"
export type SectionSize = "sm" | "md" | "lg" | "xl" | "full"
export type SectionVertical = "sm" | "md" | "lg" | "xl"

/**
 * 🧱 Props du composant DS Section
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  /** Couleur de fond (basée sur les tokens DS) */
  bg?: SectionBg
  /** Taille du container interne (si utilisé) */
  size?: SectionSize
  /** Espacement vertical haut/bas */
  vertical?: SectionVertical
  /** Désactive le Container interne */
  noContainer?: boolean
  /** Élément HTML à utiliser (section, div, main, etc.) */
  as?: keyof JSX.IntrinsicElements
  /** Classes personnalisées */
  className?: string
}
