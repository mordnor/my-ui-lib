import type { InputHTMLAttributes } from 'react'

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: 'sm' | 'md' | 'lg'
  onSearch?: (value: string) => void
  onClear?: () => void
  isLoading?: boolean
}
