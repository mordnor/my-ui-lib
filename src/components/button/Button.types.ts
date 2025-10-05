import { ButtonProps as PrimeButtonProps } from 'primereact/button'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'success'

export interface ButtonProps extends PrimeButtonProps {
  /**
   * Variante du bouton selon le design system
   */
  variant?: ButtonVariant

  /**
   * Active un effet "loading"
   */
  loading?: boolean
}
