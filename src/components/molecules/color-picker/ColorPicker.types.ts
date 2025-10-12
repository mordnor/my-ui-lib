export interface ColorOption {
  value: string
  label: string
  hex: string
  disabled?: boolean
}

export interface ColorPickerProps {
  colors: ColorOption[]
  selectedColor: string
  onChange: (value: string) => void
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  disabled?: boolean
  className?: string
}
