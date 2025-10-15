import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { Flex, Text, Stack } from '@/components'
import type { ColorPickerProps, ColorOption } from './ColorPicker.types'

/**
 * ColorPicker component - Interactive color selector
 * Perfect for product variants and theme selection
 */
export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      colors,
      selectedColor,
      onChange,
      size = 'md',
      showLabel = true,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
    }

    const handleColorSelect = (color: ColorOption) => {
      if (!disabled && !color.disabled) {
        onChange(color.value)
      }
    }

    return (
      <Stack ref={ref} spacing="sm" className={className} {...props}>
        {showLabel && (
          <Text size="sm" weight="medium">
            Couleur
          </Text>
        )}
        <Flex gap="3" className="flex-wrap">
          {colors.map((color) => {
            const isSelected = selectedColor === color.value
            const isDisabled = disabled || color.disabled

            return (
              <button
                key={color.value}
                onClick={() => handleColorSelect(color)}
                disabled={isDisabled}
                aria-label={`Select ${color.label}`}
                className={cn(
                  'relative rounded-full border-2 transition-all',
                  'focus:outline-none focus:ring-2 focus:ring-ds-primary focus:ring-offset-2',
                  sizeClasses[size],
                  isSelected
                    ? 'border-ds-primary ring-2 ring-ds-primary ring-opacity-30'
                    : 'border-ds-border hover:border-ds-primary',
                  isDisabled && 'opacity-50 cursor-not-allowed',
                  !isDisabled && 'cursor-pointer'
                )}
                style={{ backgroundColor: color.hex }}
                title={color.label}
              >
                {/* Checkmark for selected color */}
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i
                      className={cn(
                        'pi pi-check text-white',
                        size === 'sm' && 'text-[10px]',
                        size === 'md' && 'text-xs',
                        size === 'lg' && 'text-sm'
                      )}
                      style={{
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
                      }}
                    ></i>
                  </div>
                )}
                {/* Strikethrough for unavailable colors */}
                {color.disabled && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-ds-border rotate-45" />
                  </div>
                )}
              </button>
            )
          })}
        </Flex>
        {showLabel && selectedColor && (
          <Text size="xs" color="muted">
            {colors.find((c) => c.value === selectedColor)?.label}
          </Text>
        )}
      </Stack>
    )
  }
)

ColorPicker.displayName = 'ColorPicker'
