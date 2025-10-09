import React from "react"
import clsx from "clsx"

export interface LabelProps {
  /** Contenu du label (texte ou éléments JSX) */
  children: React.ReactNode

  /** ID de l’input associé */
  htmlFor?: string

  /** Classes personnalisées */
  className?: string

  /** Désactive visuellement le label */
  disabled?: boolean

  /** Affiche une étoile rouge pour les champs requis */
  required?: boolean

  /** Variante de taille du label */
  size?: "sm" | "md" | "lg"
}

/**
 * 🏷️ DS Label — élément de formulaire typographique
 * Basé sur les tokens DS : `text-ds-*`, `font-ds-*`, `mb-ds-*`, `duration-ds-*`
 */
export const Label: React.FC<LabelProps> = ({
                                              children,
                                              htmlFor,
                                              className = "",
                                              disabled = false,
                                              required = false,
                                              size = "sm",
                                            }) => {
  const sizeClasses: Record<string, string> = {
    sm: "text-ds-sm",
    md: "text-ds-base",
    lg: "text-ds-lg",
  }

  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        "block select-none font-ds-medium leading-ds-snug transition-colors duration-ds-normal ease-ds-standard",
        sizeClasses[size],
        disabled
          ? "text-ds-text-muted cursor-not-allowed"
          : "text-ds-text-secondary hover:text-ds-text-primary",
        "mb-ds-xs",
        className
      )}
    >
      {children}
      {required && (
        <span className="text-ds-state-danger ml-ds-xs" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
}

Label.displayName = "Label"
