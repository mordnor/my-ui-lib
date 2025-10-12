import type { HTMLAttributes, ReactNode } from 'react'

export type AlertVariant = 'solid' | 'soft' | 'left-accent'
export type AlertStatus = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant
   * @default 'soft'
   */
  variant?: AlertVariant

  /**
   * Alert status/type
   * @default 'info'
   */
  status?: AlertStatus

  /**
   * Alert title
   */
  title?: string

  /**
   * Show close button
   * @default false
   */
  closable?: boolean

  /**
   * Close handler
   */
  onClose?: () => void

  /**
   * Icon element
   */
  icon?: ReactNode

  /**
   * Children elements
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}
