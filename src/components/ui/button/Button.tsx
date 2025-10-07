import React from 'react'
import { Button as PrimeButton } from 'primereact/button'
import clsx from 'clsx'
import type { ButtonProps } from './Button.types'

/**
 * 🧱 Button — composant du design system
 * Basé sur PrimeReact, totalement tokenisé via classes Tailwind `ds-*`
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  variant = 'primary',
  dsSize = 'md',
  loading = false,
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  /* 🧩 Styles de base */
  const base = `
    inline-flex items-center justify-center gap-ds-space-xs
    font-ds-font-weight-medium transition-colors duration-150
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:opacity-ds-disabled disabled:cursor-not-allowed
    rounded text-center whitespace-normal leading-ds-line-height-snug
    min-h-[var(--sizes-button-height)]
  `

  /* 📏 Tailles (padding + typo + spacing tokenisés) */
  const sizes: Record<string, string> = {
    sm: 'text-ds-font-size-sm px-ds-space-sm py-ds-space-xs',
    md: 'text-ds-font-size-base px-ds-space-md py-ds-space-sm',
    lg: 'text-ds-font-size-lg px-ds-space-lg py-ds-space-md'
  }

  /* 🎨 Variantes visuelles, full tokens */
  const variants: Record<string, string> = {
    primary: `
      bg-ds-accent-primary text-ds-text-inverse
      hover:bg-ds-accent-hover
      focus:ring-ds-accent-primary
    `,
    secondary: `
      bg-ds-bg-surface text-ds-text-primary border border-ds-border-default
      hover:opacity-90
    `,
    outline: `
      border border-ds-accent-primary text-ds-accent-primary
      hover:bg-ds-accent-primary hover:text-ds-text-inverse
      focus:ring-ds-accent-primary
    `,
    success: `
      bg-ds-state-success text-ds-text-inverse
      hover:opacity-90 focus:ring-ds-state-success
    `,
    danger: `
      bg-ds-state-danger text-ds-text-inverse
      hover:opacity-90 focus:ring-ds-state-danger
    `
  }

  const resolvedIcon = loading ? 'pi pi-spin pi-spinner' : icon
  const content = label ?? children

  return (
    <PrimeButton
      unstyled
      {...props}
      icon={resolvedIcon}
      iconPos={iconPosition}
      disabled={loading || props.disabled}
      className={clsx(base, sizes[dsSize], variants[variant], className)}
    >
      {content}
    </PrimeButton>
  )
}
