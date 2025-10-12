import { LabelHTMLAttributes, ReactNode } from 'react'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Label size
   * @default 'base'
   */
  size?: 'sm' | 'base'

  /**
   * Required indicator
   */
  isRequired?: boolean

  /**
   * Disabled state
   */
  isDisabled?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Label content
   */
  children: ReactNode
}
