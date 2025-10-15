import { forwardRef } from 'react'
import { Card } from '../card/Card'
import { Badge, Button, Flex, Heading, Stack, Text } from '@/components'
import { cn } from '@/utils/cn'

export interface ProductCardProps {
  image: string
  title: string
  description: string
  price: string
  badge?: string
  badgeVariant?: 'solid' | 'soft' | 'outline'
  badgeColorScheme?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  variant?: 'elevated' | 'outlined' | 'filled'
  hoverable?: boolean
  onClick?: () => void
  onAddToCart?: () => void
  className?: string
}

/**
 * ProductCard component - Card specialized for product display
 * Extends Card component with product-specific layout
 */
export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      image,
      title,
      description,
      price,
      badge,
      badgeVariant = 'solid',
      badgeColorScheme = 'primary',
      variant = 'elevated',
      hoverable = true,
      onClick,
      onAddToCart,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        variant={variant}
        padding="none"
        hoverable={hoverable}
        className={cn('overflow-hidden group cursor-pointer', className)}
        onClick={onClick}
        {...props}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-64 bg-ds-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-ds-slow"
          />
          {badge && (
            <Badge
              variant={badgeVariant}
              colorScheme={badgeColorScheme}
              className="absolute top-3 left-3"
            >
              {badge}
            </Badge>
          )}
        </div>

        {/* Body */}
        <Stack spacing="md" className="p-ds-6">
          <Heading as="h3" className="text-ds-xl">
            {title}
          </Heading>
          <Text size="sm" color="muted" className="line-clamp-2">
            {description}
          </Text>
        </Stack>

        {/* Footer CTA */}
        <Flex
          justify="between"
          align="center"
          className="px-ds-6 pb-ds-6 pt-0"
        >
          <Text size="lg" weight="bold" className="text-ds-primary">
            {price}
          </Text>
          <Button
            size="sm"
            variant="outline"
            colorScheme="primary"
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart?.()
            }}
          >
            {onAddToCart ? 'Ajouter' : 'Découvrir'}
          </Button>
        </Flex>
      </Card>
    )
  }
)

ProductCard.displayName = 'ProductCard'
