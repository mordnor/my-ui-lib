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
    inline-flex items-center justify-center gap-2
    font-medium transition-colors duration-150
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:opacity-disabled disabled:cursor-not-allowed
    rounded text-center whitespace-normal leading-snug min-h-[2.5rem]
  `

  const sizes: Record<string, string> = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-3'
  }

  const variants: Record<string, string> = {
    primary:
      'bg-accent-primary text-white hover:bg-accent-hover focus:ring-accent-primary',
    secondary:
      'bg-background-surface text-text-primary border border-border hover:opacity-90',
    outline:
      'border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus:ring-accent-primary',
    success:
      'bg-state-success text-white hover:opacity-90 focus:ring-state-success',
    danger:
      'bg-state-danger text-white hover:opacity-90 focus:ring-state-danger'
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
