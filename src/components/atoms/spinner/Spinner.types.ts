import { HTMLAttributes } from 'react'
import type { Size } from '@/types/common.types'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Spinner size
   * @default 'md'
   */
  size?: Size

  /**
   * Spinner color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'inverse'

  /**
   * Additional CSS classes
   */
  className?: string
}
