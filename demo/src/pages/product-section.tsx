import React from 'react'
import { Section } from '@/components/layout/section/Section'
import { Stack } from '@/components/layout/stack/Stack'
import { Heading } from '@/components/ui/typography/Heading'
import { Text } from '@/components/ui/typography/Text'
import { Button } from '@/components/ui/button/Button'
import { Card } from '@/components/ui/card/Card'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'Montre Élégance',
      category: 'Accessoires',
      price: '149€',
      oldPrice: '199€',
      image: 'https://picsum.photos/400/500?random=10',
      badge: '-25%',
      rating: '4.8',
      reviews: '124'
    },
    {
      id: 2,
      name: 'Sac Premium',
      category: 'Maroquinerie',
      price: '89€',
      oldPrice: null,
      image: 'https://picsum.photos/400/500?random=11',
      badge: 'Nouveau',
      rating: '4.9',
      reviews: '89'
    },
    {
      id: 3,
      name: 'Lunettes Solaires',
      category: 'Accessoires',
      price: '119€',
      oldPrice: '159€',
      image: 'https://picsum.photos/400/500?random=12',
      badge: '-25%',
      rating: '4.7',
      reviews: '203'
    }
  ]

  return (
    <Section bg="surface" size="xl" vertical="xl" id="produits">
      <Stack gap="3xl">
        {/* En-tête de section */}
        <Stack
          gap="md"
          align="center"
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-block">
            <Text
              size="sm"
              weight="semibold"
              className="bg-ds-accent-primary bg-opacity-10 text-ds-accent-primary px-ds-md py-ds-xs rounded-ds-lg uppercase tracking-wide"
            >
              Notre Collection
            </Text>
          </div>

          <Heading level={2} weight="bold" align="center">
            Produits Sélectionnés Pour Vous
          </Heading>

          <Text size="lg" variant="muted" align="center">
            Découvrez notre sélection de produits premium, conçus avec soin et
            pensés pour durer.
          </Text>
        </Stack>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-ds-lg">
          {products.map((product) => (
            <Card
              key={product.id}
              variant="subtle"
              hoverable
              padding="none"
              className="group"
            >
              {/* Image produit avec badge */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[280px] object-cover transition-transform duration-ds-slow group-hover:scale-110"
                />

                {/* Badge promo/nouveau */}
                <div
                  className={`absolute top-ds-sm right-ds-sm px-ds-sm py-ds-xs rounded-ds-md font-ds-semibold text-ds-sm ${
                    product.badge === 'Nouveau'
                      ? 'bg-ds-blue500 text-ds-white'
                      : product.badge === 'Top vente'
                        ? 'bg-ds-yellow500 text-ds-slate900'
                        : 'bg-ds-state-success text-ds-white'
                  }`}
                >
                  {product.badge}
                </div>

                {/* Bouton Quick view au survol */}
                <div className="absolute inset-0 bg-ds-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-ds-normal flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    variant="primary"
                    dsSize="md"
                    label="Voir le produit"
                    className="shadow-ds-lg"
                  />
                </div>
              </div>

              {/* Contenu de la carte */}
              <Stack gap="sm" padding="md">
                {/* Catégorie */}
                <Text
                  size="xs"
                  variant="muted"
                  weight="medium"
                  className="uppercase tracking-wide"
                >
                  {product.category}
                </Text>

                {/* Nom du produit */}
                <Heading level={4} weight="semibold" className="min-h-[3rem]">
                  {product.name}
                </Heading>

                {/* Note et avis */}
                <Stack direction="horizontal" gap="xs" align="center">
                  <div className="flex gap-ds-xs text-ds-yellow500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <Text size="sm" variant="muted">
                    {product.rating} ({product.reviews})
                  </Text>
                </Stack>

                {/* Prix */}
                <Stack
                  direction="horizontal"
                  gap="sm"
                  align="center"
                  className="mt-ds-xs"
                >
                  <Text
                    size="xl"
                    weight="bold"
                    className="text-ds-accent-primary"
                  >
                    {product.price}
                  </Text>
                  {product.oldPrice && (
                    <Text size="sm" variant="muted" className="line-through">
                      {product.oldPrice}
                    </Text>
                  )}
                </Stack>
              </Stack>
            </Card>
          ))}
        </div>

        {/* CTA Voir plus */}
        <div className="flex justify-center pt-ds-lg">
          <Button
            variant="outline"
            dsSize="lg"
            label="Voir toute la collection"
            className="min-w-[240px]"
          />
        </div>
      </Stack>
    </Section>
  )
}
