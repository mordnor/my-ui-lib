import { ButtonHTMLAttributes, ReactNode } from 'react'
import type { Size, ColorVariant, Variant } from '@/types/common.types'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button visual variant
   * @default 'solid'
   */
  variant?: Variant

  /**
   * Button color variant
   * @default 'primary'
   */
  colorScheme?: ColorVariant

  /**
   * Button size
   * @default 'md'
   */
  size?: Size

  /**
   * Loading state
   */
  isLoading?: boolean

  /**
   * Disabled state
   */
  isDisabled?: boolean

  /**
   * Full width button
   */
  isFullWidth?: boolean

  /**
   * Icon only button (square)
   */
  isIconOnly?: boolean

  /**
   * Left icon
   */
  leftIcon?: ReactNode

  /**
   * Right icon
   */
  rightIcon?: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Button content
   */
  children?: ReactNode
}
