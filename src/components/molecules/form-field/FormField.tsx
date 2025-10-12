import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { Label } from '@/components/atoms/label'
import { Text } from '@/components/atoms/text'
import type { FormFieldProps } from './FormField.types'

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { label, helperText, errorText, isRequired, isInvalid, children, htmlFor },
    ref
  ) => {
    return (
      <div ref={ref} className="ds-space-y-2">
        {label && (
          <Label htmlFor={htmlFor} isRequired={isRequired}>
            {label}
          </Label>
        )}
        {children}
        {!isInvalid && helperText && (
          <Text size="sm" className="text-ds-text-secondary">
            {helperText}
          </Text>
        )}
        {isInvalid && errorText && (
          <Text size="sm" className="text-ds-state-error">
            {errorText}
          </Text>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'
