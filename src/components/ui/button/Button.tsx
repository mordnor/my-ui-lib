import React from 'react'
import { Button as PrimeButton } from 'primereact/button'
import { ButtonProps } from './Button.types'

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  dsSize = 'md',
  loading = false,
  className = '',
  icon,
  ...props
}) => {
  const base = `
    inline-flex items-center justify-center gap-[var(--space-2)]
    font-medium transition-colors duration-150
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed
    rounded-[var(--radius-md)]
  `

  const sizes: Record<string, string> = {
    sm: 'text-sm px-[var(--space-3)] py-[var(--space-1_5)] h-[var(--size-buttonHeight)]',
    md: 'text-base px-[var(--space-4)] py-[var(--space-2)] h-[var(--size-buttonHeight)]',
    lg: 'text-lg px-[var(--space-5)] py-[var(--space-3)] h-[var(--size-buttonHeight)]'
  }

  const variants: Record<string, string> = {
    primary: `
      !bg-primary text-white hover:!bg-primary-hover focus:!ring-primary
    `,
    secondary: `
      !bg-secondary text-white hover:opacity-90 focus:!ring-secondary
    `,
    outline: `
      border border-primary text-primary hover:!bg-primary hover:text-white focus:!ring-primary
    `,
    success: `
      !bg-success text-white hover:opacity-90 focus:!ring-success
    `,
    danger: `
      !bg-danger text-white hover:opacity-90 focus:!ring-danger
    `
  }

  return (
    <PrimeButton
      unstyled
      {...props}
      label={label}
      icon={loading ? 'pi pi-spin pi-spinner' : icon}
      className={`${base} ${sizes[dsSize]} ${variants[variant]} ${className}`}
      disabled={loading || props.disabled}
    />
  )
}
