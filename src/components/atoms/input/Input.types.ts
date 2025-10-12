import type { InputHTMLAttributes } from 'react'
import type { Size } from '@/types/common.types'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input size
   * @default 'md'
   */
  size?: Exclude<Size, 'xl'>

  /**
   * Invalid/error state
   */
  isInvalid?: boolean

  /**
   * Disabled state
   */
  isDisabled?: boolean

  /**
   * Full width
   */
  isFullWidth?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}
