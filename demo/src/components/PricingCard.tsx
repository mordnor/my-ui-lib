import { Button, Card, Stack, Heading, Text, Badge, Flex } from '@dorian-ui/my-ui-lib'

interface PricingFeature {
  label: string
  included: boolean
}

interface PricingCardProps {
  badge?: string
  badgeColor?: string
  title: string
  description: string
  price: string
  priceUnit: string
  priceSubtext: string
  features: PricingFeature[]
  ctaLabel: string
  onCtaClick: () => void
  variant?: 'default' | 'featured'
  ctaVariant?: 'solid' | 'outline'
}

export function PricingCard({
  badge,
  badgeColor = 'bg-ds-muted text-ds-foreground',
  title,
  description,
  price,
  priceUnit,
  priceSubtext,
  features,
  ctaLabel,
  onCtaClick,
  variant = 'default',
  ctaVariant = 'outline',
}: PricingCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Card
      variant={isFeatured ? 'elevated' : 'outlined'}
      padding="lg"
      hoverable
      className={
        isFeatured
          ? 'relative border-2 border-ds-primary shadow-ds-2xl scale-105 md:scale-110'
          : 'relative'
      }
    >
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-ds-primary text-ds-primary-foreground shadow-ds-lg">
            ⭐ Populaire
          </Badge>
        </div>
      )}

      <Stack spacing="lg">
        {/* Header */}
        <div>
          {badge && <Badge className={`mb-ds-3 ${badgeColor}`}>{badge}</Badge>}
          <Heading as="h3" size="h4" className="mb-ds-2">
            {title}
          </Heading>
          <Text size="sm" color="muted">
            {description}
          </Text>
        </div>

        {/* Price */}
        <div className="py-4 border-y border-ds-border">
          <Flex align="baseline" gap="2" className="mb-ds-1">
            <Heading as="h3" size="h2" className="text-ds-primary">
              {price}
            </Heading>
            <Text color="muted" size="sm">
              {priceUnit}
            </Text>
          </Flex>
          <Text size="sm" color="muted">
            {priceSubtext}
          </Text>
        </div>

        {/* Features */}
        <Stack spacing="xs">
          {features.map((feature, index) => (
            <Flex key={index} gap="2" align="center">
              <span className={feature.included ? 'text-ds-success text-ds-sm' : 'text-ds-muted text-ds-sm'}>
                {feature.included ? '✓' : '✗'}
              </span>
              <Text size="sm" color={feature.included ? 'default' : 'muted'}>
                {feature.label}
              </Text>
            </Flex>
          ))}
        </Stack>

        {/* CTA */}
        <Button
          variant={ctaVariant}
          colorScheme="primary"
          isFullWidth
          onClick={onCtaClick}
        >
          {ctaLabel}
        </Button>
      </Stack>
    </Card>
  )
}
