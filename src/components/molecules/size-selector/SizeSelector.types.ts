export interface SizeOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SizeSelectorProps {
  sizes: SizeOption[]
  selectedSize: string
  onChange: (value: string) => void
  variant?: 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  disabled?: boolean
  className?: string
}
