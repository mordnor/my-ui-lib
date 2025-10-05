import React from 'react'
import { Button as PrimeButton } from 'primereact/button'
import { ButtonProps } from './Button.types'

/**
 * Composant Button - Wrapper Tailwind autour du PrimeButton
 * Relié au système de design (thème + tokens Tailwind)
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  loading = false,
  className = '',
  ...props
}) => {
  const base = `
    inline-flex items-center justify-center gap-2
    px-4 py-2 rounded-base font-medium text-sm
    transition-all duration-150
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:opacity-60 disabled:cursor-not-allowed
  `

  const variants: Record<string, string> = {
    primary: `
      bg-primary text-white 
      hover:bg-primary-hover 
      focus:ring-primary
    `,
    secondary: `
      bg-secondary text-white 
      hover:opacity-90 
      focus:ring-secondary
    `,
    outline: `
      border border-primary text-primary 
      hover:bg-primary hover:text-white 
      focus:ring-primary
    `,
    success: `
      bg-success text-white 
      hover:opacity-90 
      focus:ring-success
    `,
    danger: `
      bg-danger text-white 
      hover:opacity-90 
      focus:ring-danger
    `
  }

  return (
    <PrimeButton
      {...props}
      label={label}
      icon={loading ? 'pi pi-spin pi-spinner' : props.icon}
      className={`${base} ${variants[variant]} ${className}`}
      disabled={loading || props.disabled}
    />
  )
}
