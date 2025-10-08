import React from 'react'

export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export interface GridColumns {
  base?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Nombre de colonnes par breakpoint (ex: { base: 1, sm: 2, lg: 3 }) */
  cols?: GridColumns

  /** Espacement entre les cellules (basé sur les tokens DS) */
  gap?: GridGap

  /** Aligne le contenu horizontalement */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

  /** Aligne le contenu verticalement */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'

  /** Active auto-fit pour une grille fluide */
  autoFit?: boolean

  /** Active auto-fill pour remplir les espaces restants */
  autoFill?: boolean

  /** Classes additionnelles */
  className?: string

  children?: React.ReactNode | React.ReactNode[]


}
