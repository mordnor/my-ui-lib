import React from 'react'
import { Section } from '@/components/layout/section/Section'
import { Stack } from '@/components/layout/stack/Stack'
import { Text } from '@/components/ui/typography/Text'
import { Heading } from '@/components/ui/typography/Heading'
import { Button } from '@/components/ui/button/Button'

export default function HeroSection() {
  return (
    <Section bg="app" size="xl" vertical="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-ds-3xl items-center">
        {/* Contenu texte */}
        <Stack gap="xl" className="order-2 lg:order-1">
          <Stack gap="md">
            <div className="inline-block">
              <Text
                size="sm"
                weight="semibold"
                variant="info"
                className="bg-ds-blue100 text-ds-blue700 px-ds-md py-ds-xs rounded-ds-lg uppercase tracking-wide"
              >
                Nouveauté 2025
              </Text>
            </div>

            <Heading level={1} weight="bold" className="text-ds-text-primary">
              Découvrez notre collection exclusive
            </Heading>

            <Text size="lg" variant="muted" className="max-w-xl">
              Des produits soigneusement sélectionnés pour transformer votre
              quotidien. Qualité premium, design moderne et prix accessibles.
            </Text>
          </Stack>

          <Stack direction="horizontal" gap="md" className="flex-wrap">
            <Button
              variant="primary"
              dsSize="lg"
              label="Découvrir la galerie"
              className="shadow-ds-lg"
            />
            <Button variant="outline" dsSize="lg" label="En savoir plus" />
          </Stack>

          {/* Stats */}
          <Stack
            direction="horizontal"
            gap="xl"
            className="pt-ds-lg border-t border-ds-border-default"
          >
            <Stack gap="xs">
              <Heading
                level={3}
                weight="bold"
                className="text-ds-accent-primary"
              >
                500+
              </Heading>
              <Text size="sm" variant="muted">
                Produits disponibles
              </Text>
            </Stack>

            <Stack gap="xs">
              <Heading
                level={3}
                weight="bold"
                className="text-ds-accent-primary"
              >
                2.5k+
              </Heading>
              <Text size="sm" variant="muted">
                Clients satisfaits
              </Text>
            </Stack>

            <Stack gap="xs">
              <Heading
                level={3}
                weight="bold"
                className="text-ds-accent-primary"
              >
                4.9★
              </Heading>
              <Text size="sm" variant="muted">
                Note moyenne
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <div className="order-1 lg:order-2 relative">
          <div className="grid grid-cols-2 gap-ds-md">
            <div className="col-span-2 relative overflow-hidden rounded-ds-lg shadow-ds-lg">
              <img
                src="https://picsum.photos/600/400?random=1"
                alt="Produit principal"
                className="w-full h-[400px] object-cover transition-transform duration-ds-slow hover:scale-105"
              />
              <div className="absolute top-ds-md right-ds-md bg-ds-state-success text-ds-white px-ds-md py-ds-xs rounded-ds-lg font-ds-semibold text-ds-sm">
                -30%
              </div>
            </div>

            {/* Deux petites images */}
            <div className="relative overflow-hidden rounded-ds-lg shadow-ds-md">
              <img
                src="https://picsum.photos/300/300?random=2"
                alt="Produit secondaire"
                className="w-full h-[200px] object-cover transition-transform duration-ds-slow hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden rounded-ds-lg shadow-ds-md">
              <img
                src="https://picsum.photos/300/300?random=3"
                alt="Produit tertiaire"
                className="w-full h-[200px] object-cover transition-transform duration-ds-slow hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
