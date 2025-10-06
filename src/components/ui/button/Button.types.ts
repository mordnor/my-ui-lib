import { ButtonProps as PrimeButtonProps } from 'primereact/button'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'success'
  | 'danger'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends Omit<PrimeButtonProps, 'size'> {
  variant?: ButtonVariant

  dsSize?: ButtonSize

  loading?: boolean
}
