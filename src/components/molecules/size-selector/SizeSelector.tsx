import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { Flex, Text, Stack } from '@/components'
import type { SizeSelectorProps, SizeOption } from './SizeSelector.types'

/**
 * SizeSelector component - Interactive size selector
 * Perfect for product variants (clothing, shoes, etc.)
 */
export const SizeSelector = forwardRef<HTMLDivElement, SizeSelectorProps>(
  (
    {
      sizes,
      selectedSize,
      onChange,
      variant = 'outline',
      size = 'md',
      showLabel = true,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-ds-3 py-ds-1 text-ds-sm min-w-[2rem]',
      md: 'px-ds-4 py-ds-2 text-ds-base min-w-[2.5rem]',
      lg: 'px-ds-5 py-ds-3 text-ds-lg min-w-[3rem]',
    }

    const handleSizeSelect = (sizeOption: SizeOption) => {
      if (!disabled && !sizeOption.disabled) {
        onChange(sizeOption.value)
      }
    }

    const getVariantClasses = (isSelected: boolean, isDisabled: boolean | undefined) => {
      if (variant === 'solid') {
        return cn(
          'border border-ds-border',
          isSelected
            ? 'bg-ds-primary text-white border-ds-primary'
            : 'bg-ds-background hover:bg-ds-muted text-ds-text-primary',
          isDisabled && 'bg-ds-muted'
        )
      }

      return cn(
        'border-2',
        isSelected
          ? 'border-ds-primary bg-ds-primary bg-opacity-10 text-ds-primary font-ds-semibold'
          : 'border-ds-border hover:border-ds-primary text-ds-text-primary',
        isDisabled && 'border-ds-border'
      )
    }

    return (
      <Stack ref={ref} spacing="sm" className={className} {...props}>
        {showLabel && (
          <Text size="sm" weight="medium">
            Taille
          </Text>
        )}
        <Flex gap="2" className="flex-wrap">
          {sizes.map((sizeOption) => {
            const isSelected = selectedSize === sizeOption.value
            const isDisabled = disabled || sizeOption.disabled

            return (
              <button
                key={sizeOption.value}
                onClick={() => handleSizeSelect(sizeOption)}
                disabled={isDisabled}
                aria-label={`Select size ${sizeOption.label}`}
                className={cn(
                  'relative rounded-ds-md transition-all',
                  'focus:outline-none focus:ring-2 focus:ring-ds-primary focus:ring-offset-2',
                  sizeClasses[size],
                  getVariantClasses(isSelected, isDisabled),
                  isDisabled
                    ? 'opacity-50 cursor-not-allowed line-through'
                    : 'cursor-pointer'
                )}
                title={
                  sizeOption.disabled
                    ? `${sizeOption.label} - Indisponible`
                    : sizeOption.label
                }
              >
                {sizeOption.label}
              </button>
            )
          })}
        </Flex>
        {showLabel && selectedSize && (
          <Text size="xs" color="secondary">
            Taille sélectionnée : {sizes.find((s) => s.value === selectedSize)?.label}
          </Text>
        )}
      </Stack>
    )
  }
)

SizeSelector.displayName = 'SizeSelector'
