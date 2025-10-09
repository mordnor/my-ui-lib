import React from "react"

export type StackDirection = "vertical" | "horizontal"
export type StackGap =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
export type StackPadding = StackGap

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction de la pile (verticale par défaut) */
  direction?: StackDirection

  /** Espacement entre les enfants */
  gap?: StackGap

  /** Ajoute un padding global autour du stack */
  padding?: StackPadding

  /** Centre le contenu verticalement et horizontalement (utile pour hero/cta) */
  fullCenter?: boolean

  /** Alignement vertical (items) */
  align?: "start" | "center" | "end" | "stretch" | "baseline"

  /** Alignement horizontal (justify-content) */
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"

  /** Active le wrapping */
  wrap?: boolean

  /** Classes additionnelles */
  className?: string

  children: React.ReactNode
}
