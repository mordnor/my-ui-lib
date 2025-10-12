import type { ReactNode } from 'react'

export interface FormFieldProps {
  label?: string
  helperText?: string
  errorText?: string
  isRequired?: boolean
  isInvalid?: boolean
  children: ReactNode
  htmlFor?: string
}
