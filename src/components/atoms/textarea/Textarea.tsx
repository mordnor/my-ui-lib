import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { TextareaProps } from './Textarea.types'

/**
 * Textarea component - Multiline text input
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full rounded-ds-md border border-ds-input',
          'bg-ds-background text-ds-foreground',
          'px-ds-component-md py-ds-component-sm',
          'min-h-[80px] resize-y',
          'placeholder:text-ds-muted-foreground',
          'focus:outline-none focus:ring-2 focus:ring-ds-ring focus:border-ds-primary',
          'hover:border-ds-ring',
          'disabled:cursor-not-allowed disabled:opacity-ds-50 disabled:bg-ds-muted',
          'transition-all duration-ds-normal',
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
