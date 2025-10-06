import React from 'react'

interface BadgeProps {
  variant?: 'default' | 'success' | 'danger' | 'warning' | 'info'
  children: React.ReactNode
  className?: string
}

/**
 * 🏷️ Badge — petit indicateur coloré basé sur le design system
 * Utilise les tokens de couleur (`state.*`, `text.*`, `border.*`, etc.)
 * et le spacing / radius définis dans Tailwind.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = ''
}) => {
  const styles: Record<string, string> = {
    default: 'bg-background-surface text-text-primary border border-border',
    success:
      'bg-state-success/10 text-state-success border border-state-success/20',
    danger:
      'bg-state-danger/10 text-state-danger border border-state-danger/20',
    warning:
      'bg-state-warning/10 text-state-warning border border-state-warning/20',
    info: 'bg-state-info/10 text-state-info border border-state-info/20'
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-3 py-1 font-medium text-sm ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
