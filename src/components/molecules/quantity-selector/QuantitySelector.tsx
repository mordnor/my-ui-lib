import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { Button, Flex, Text } from '@/components'
import type { QuantitySelectorProps } from './QuantitySelector.types'

/**
 * QuantitySelector component - Interactive quantity selector
 * Allows users to increment/decrement values with customizable limits
 */
export const QuantitySelector = forwardRef<HTMLDivElement, QuantitySelectorProps>(
  (
    {
      value,
      onChange,
      min = 1,
      max = 99,
      size = 'md',
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const handleDecrement = () => {
      if (value > min && !disabled) {
        onChange(value - 1)
      }
    }

    const handleIncrement = () => {
      if (value < max && !disabled) {
        onChange(value + 1)
      }
    }

    const sizeClasses = {
      sm: 'px-ds-3 py-ds-1',
      md: 'px-ds-4 py-ds-2',
      lg: 'px-ds-5 py-ds-3',
    }

    const textSizeClasses = {
      sm: 'text-ds-sm min-w-[2rem]',
      md: 'text-ds-base min-w-[2.5rem]',
      lg: 'text-ds-lg min-w-[3rem]',
    }

    return (
      <Flex
        ref={ref}
        align="center"
        gap="3"
        className={cn(
          'border border-ds-border rounded-ds-md',
          sizeClasses[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        <Button
          variant="ghost"
          size={size}
          onClick={handleDecrement}
          disabled={disabled || value <= min}
          aria-label="Decrease quantity"
          className="p-0 h-auto min-w-0"
        >
          <i className="pi pi-minus"></i>
        </Button>
        <Text
          weight="medium"
          className={cn('text-center', textSizeClasses[size])}
        >
          {value}
        </Text>
        <Button
          variant="ghost"
          size={size}
          onClick={handleIncrement}
          disabled={disabled || value >= max}
          aria-label="Increase quantity"
          className="p-0 h-auto min-w-0"
        >
          <i className="pi pi-plus"></i>
        </Button>
      </Flex>
    )
  }
)

QuantitySelector.displayName = 'QuantitySelector'
