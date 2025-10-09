import React from "react"
import clsx from "clsx"

export interface TextOwnProps {
  /** Variante de couleur DS */
  variant?: "default" | "muted" | "success" | "danger" | "warning" | "info"

  /** Taille de texte (tokens DS) */
  size?: "xs" | "sm" | "md" | "lg" | "xl"

  /** Alignement du texte */
  align?: "left" | "center" | "right"

  /** Poids typographique DS */
  weight?: "light" | "regular" | "medium" | "semibold" | "bold"

  /** Style italique */
  italic?: boolean

  /** Ajoute une transition subtile sur la couleur */
  animated?: boolean

  /** Classes additionnelles */
  className?: string

  /** Contenu textuel */
  children: React.ReactNode
}

export type TextProps<T extends React.ElementType = "p"> = TextOwnProps & {
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof TextOwnProps | "as">

/**
 * 🧾 DS Text — composant typographique de base
 * Full tokenisé (`text-ds-*`, `font-ds-*`, `leading-ds-*`)
 * Adapté pour la lecture, les labels, et la doc produit.
 */
export const Text = <T extends React.ElementType = "p">({
                                                          as,
                                                          variant = "default",
                                                          size = "md",
                                                          align = "left",
                                                          weight = "regular",
                                                          italic = false,
                                                          animated = false,
                                                          className,
                                                          children,
                                                          ...rest
                                                        }: TextProps<T>) => {
  const Tag = as || "p"

  /** 🎨 Couleurs DS */
  const colorClasses: Record<string, string> = {
    default: "text-ds-text-primary",
    muted: "text-ds-text-secondary",
    success: "text-ds-state-success",
    danger: "text-ds-state-danger",
    warning: "text-ds-state-warning",
    info: "text-ds-state-info",
  }

  /** 📏 Taille + interlignage DS */
  const sizeClasses: Record<string, string> = {
    xs: "text-ds-xs leading-ds-tight",
    sm: "text-ds-sm leading-ds-snug",
    md: "text-ds-base leading-ds-normal",
    lg: "text-ds-lg leading-ds-relaxed",
    xl: "text-ds-xl leading-ds-loose",
  }

  /** 🏋️ Poids typographique DS */
  const weightClasses: Record<string, string> = {
    light: "font-ds-light",
    regular: "font-ds-regular",
    medium: "font-ds-medium",
    semibold: "font-ds-semibold",
    bold: "font-ds-bold",
  }

  /** 📐 Alignement */
  const alignClasses: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <Tag
      {...rest}
      className={clsx(
        colorClasses[variant],
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        italic && "italic",
        animated && "transition-colors duration-ds-normal ease-ds-standard",
        className
      )}
    >
      {children}
    </Tag>
  )
}

Text.displayName = "Text"
