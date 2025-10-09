import React from "react"
import clsx from "clsx"
import type { ButtonProps } from "./Button.types"

export const Button: React.FC<ButtonProps> = ({
                                                label,
                                                children,
                                                variant = "primary",
                                                dsSize = "md",
                                                loading = false,
                                                className = "",
                                                icon,
                                                iconPosition = "left",
                                                disabled,
                                                ...props
                                              }) => {
  const base = `
    inline-flex items-center justify-center gap-ds-xs
    font-ds-medium transition-colors duration-ds-normal
    focus:outline-none focus:ring-ds-focus
    disabled:opacity-ds-disabled disabled:cursor-not-allowed
    rounded-ds-md text-center whitespace-nowrap
    leading-ds-snug min-h-[var(--ds-size-button-height)]
  `

  const sizes: Record<string, string> = {
    sm: "text-ds-sm px-ds-sm py-ds-xs",
    md: "text-ds-base px-ds-md py-ds-sm",
    lg: "text-ds-lg px-ds-lg py-ds-md",
  }

  const variants: Record<string, string> = {
    primary: `
      bg-ds-accent-primary text-ds-text-inverse
      hover:bg-ds-accent-hover active:bg-ds-accent-active
      focus:ring-ds-accent-primary
    `,
    secondary: `
      bg-ds-background-surface text-ds-text-primary border border-ds-border-default
      hover:border-ds-border-focus
    `,
    outline: `
      border border-ds-accent-primary text-ds-accent-primary
      hover:bg-ds-accent-primary hover:text-ds-text-inverse
      focus:ring-ds-accent-primary
    `,
    success: `
      bg-ds-state-success text-ds-text-inverse hover:opacity-90
      focus:ring-ds-state-success
    `,
    danger: `
      bg-ds-state-danger text-ds-text-inverse hover:opacity-90
      focus:ring-ds-state-danger
    `,
    brand: `
      bg-ds-brand-primary text-ds-text-inverse
      hover:bg-ds-brand-secondary active:opacity-90
      focus:ring-ds-brand-primary
    `,
    gradient: `
      bg-ds-brand-gradient text-ds-text-inverse
      hover:opacity-90 focus:ring-ds-brand-primary
    `,
  }

  const iconOnly = !label && !children
  const iconElement = icon && (
    <i
      className={clsx(
        icon,
        loading && "pi pi-spin pi-spinner",
        iconPosition === "right" && "order-last",
        "text-[1.1em]"
      )}
    />
  )

  return (
    <button
      type="button"
      {...props}
      disabled={disabled || loading}
      className={clsx(
        base,
        sizes[dsSize],
        variants[variant],
        iconOnly && "p-ds-sm aspect-square",
        className
      )}
    >
      {iconElement}
      {label || children}
    </button>
  )
}
