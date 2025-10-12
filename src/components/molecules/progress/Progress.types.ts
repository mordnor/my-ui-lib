import type { HTMLAttributes } from 'react'

export type ProgressSize = 'sm' | 'md' | 'lg'
export type ProgressColorScheme = 'primary' | 'success' | 'warning' | 'error' | 'info'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: ProgressSize
  colorScheme?: ProgressColorScheme
  showLabel?: boolean
  isIndeterminate?: boolean
}
