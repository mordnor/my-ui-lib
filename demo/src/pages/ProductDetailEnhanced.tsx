import { useState } from 'react'
import {
  Navbar,
  Container,
  Section,
  Stack,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  Avatar,
  Badge,
  Tabs,
  Accordion,
  ImageGallery,
  QuantitySelector,
  ColorPicker,
  SizeSelector,
} from '@dorian-ui/my-ui-lib'
import type {
  ImageGalleryImage,
  ColorOption,
  SizeOption,
  ThemeName
} from '@dorian-ui/my-ui-lib'
import { ThemeSelector } from '../components/ThemeSelector'

interface ProductDetailEnhancedProps {
  productId?: number | null
  onNavigate?: (page: 'home' | 'gallery' | 'product', productId?: number) => void
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

export const ProductDetailEnhanced = ({ productId, onNavigate, theme, onThemeChange }: ProductDetailEnhancedProps) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('cognac')
  const [selectedSize, setSelectedSize] = useState('M')

  // Product images for gallery
  const productImages: ImageGalleryImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      alt: 'Le Voyageur - Vue principale',
      badge: (
        <Badge variant="solid" colorScheme="success">
          Bestseller
        </Badge>
      ),
    },
    {
      src: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800',
      alt: 'Le Voyageur - Vue de côté',
    },
    {
      src: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
      alt: 'Le Voyageur - Détails',
    },
    {
      src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
      alt: 'Le Voyageur - Intérieur',
    },
  ]

  // Color options
  const colorOptions: ColorOption[] = [
    { value: 'cognac', label: 'Cognac', hex: '#8B4513' },
    { value: 'noir', label: 'Noir', hex: '#1a1a1a' },
    { value: 'marron', label: 'Marron Foncé', hex: '#3e2723' },
    { value: 'camel', label: 'Camel', hex: '#C19A6B', disabled: true },
  ]

  // Size options
  const sizeOptions: SizeOption[] = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL', disabled: true },
  ]

  return (
    <div className="min-h-screen bg-ds-background">
      {/* Navbar */}
      <Navbar
        sticky
        blurred
        logo={
          <>
            <div className="w-10 h-10 bg-ds-primary rounded-ds-md flex items-center justify-center">
              <i className="pi pi-shopping-bag text-ds-xl text-white"></i>
            </div>
            <Heading as="h3" className="text-ds-xl font-ds-semibold">
              Nomade Creation
            </Heading>
          </>
        }
        links={[
          { label: 'Accueil', onClick: () => onNavigate?.('home') },
          { label: 'Produits', onClick: () => onNavigate?.('gallery') },
          { label: 'A propos' },
          { label: 'Contact' },
        ]}
        actions={
          <ThemeSelector
            currentTheme={theme}
            onThemeChange={onThemeChange}
          />
        }
      />

      {/* Product Detail Section */}
      <Section padding="md">
        <Container size="xl">
          <Grid cols={2} gap="xl">
            {/* Image Gallery */}
            <ImageGallery
              images={productImages}
              aspectRatio="square"
              thumbnailCols={4}
            />

            {/* Product Info */}
            <Stack spacing="lg">
              {/* Title & Price */}
              <Stack spacing="md">
                <Heading as="h1" className="text-ds-4xl">
                  Le Voyageur
                </Heading>
                <Flex align="center" gap="3">
                  <Heading as="h2" className="text-ds-3xl text-ds-primary">
                    289 €
                  </Heading>
                  <Badge variant="soft" colorScheme="success">
                    En stock
                  </Badge>
                </Flex>
                <Flex align="center" gap="2">
                  <Flex align="center" gap="1">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="pi pi-star-fill text-ds-warning text-ds-base"
                      ></i>
                    ))}
                  </Flex>
                  <Text size="sm" color="secondary">
                    (47 avis)
                  </Text>
                </Flex>
              </Stack>

              {/* Description */}
              <Stack spacing="sm">
                <Text size="lg" className="leading-ds-relaxed">
                  Sac à dos en cuir pleine fleur, idéal pour vos escapades urbaines.
                  Design moderne alliant style et fonctionnalité.
                </Text>
                <Text color="secondary" className="leading-ds-relaxed">
                  Fabriqué à la main dans nos ateliers parisiens, Le Voyageur est conçu
                  pour durer. Son cuir de qualité premium développera une belle patine au
                  fil du temps, rendant chaque pièce unique.
                </Text>
              </Stack>

              {/* Color Picker */}
              <ColorPicker
                colors={colorOptions}
                selectedColor={selectedColor}
                onChange={setSelectedColor}
                size="lg"
              />

              {/* Size Selector */}
              <SizeSelector
                sizes={sizeOptions}
                selectedSize={selectedSize}
                onChange={setSelectedSize}
                variant="outline"
                size="md"
              />

              {/* Features */}
              <Card padding="md" className="bg-ds-muted">
                <Stack spacing="sm">
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Cuir pleine fleur premium</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Fabriqué à la main en France</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Compartiment ordinateur 15 pouces</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Garantie à vie</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Livraison offerte</Text>
                  </Flex>
                </Stack>
              </Card>

              {/* Quantity & Add to Cart */}
              <Stack spacing="md">
                <QuantitySelector
                  value={quantity}
                  onChange={setQuantity}
                  min={1}
                  max={10}
                  size="md"
                />

                <Flex gap="3">
                  <Button size="lg" colorScheme="primary" className="flex-1">
                    <i className="pi pi-shopping-cart text-ds-base mr-ds-2"></i>
                    Ajouter au panier
                  </Button>
                  <Button size="lg" variant="outline" colorScheme="primary">
                    <i className="pi pi-heart text-ds-base"></i>
                  </Button>
                </Flex>
              </Stack>

              {/* Additional Info */}
              <Card padding="md">
                <Stack spacing="md">
                  <Flex align="center" gap="3">
                    <i className="pi pi-truck text-ds-2xl text-ds-primary"></i>
                    <Stack spacing="xs">
                      <Text size="sm" weight="medium">
                        Livraison gratuite
                      </Text>
                      <Text size="xs" color="secondary">
                        Livraison en 3-5 jours ouvrés
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex align="center" gap="3">
                    <i className="pi pi-replay text-ds-2xl text-ds-primary"></i>
                    <Stack spacing="xs">
                      <Text size="sm" weight="medium">
                        Retours gratuits
                      </Text>
                      <Text size="xs" color="secondary">
                        30 jours pour changer d'avis
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex align="center" gap="3">
                    <i className="pi pi-verified text-ds-2xl text-ds-primary"></i>
                    <Stack spacing="xs">
                      <Text size="sm" weight="medium">
                        Garantie à vie
                      </Text>
                      <Text size="xs" color="secondary">
                        Réparations gratuites à vie
                      </Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Container>
      </Section>

      {/* Product Details Tabs */}
      <Section padding="md" className="bg-ds-muted">
        <Container size="xl">
          <Tabs
            tabs={[
              {
                id: 'specifications',
                label: 'Caractéristiques',
                icon: <i className="pi pi-list"></i>,
                content: (
                  <Card padding="lg">
                    <Grid cols={2} gap="lg">
                      <Stack spacing="sm">
                        <Text size="sm" color="secondary">
                          Dimensions
                        </Text>
                        <Text weight="medium">45 x 30 x 15 cm</Text>
                      </Stack>
                      <Stack spacing="sm">
                        <Text size="sm" color="secondary">
                          Poids
                        </Text>
                        <Text weight="medium">1.2 kg</Text>
                      </Stack>
                      <Stack spacing="sm">
                        <Text size="sm" color="secondary">
                          Matériau
                        </Text>
                        <Text weight="medium">Cuir pleine fleur</Text>
                      </Stack>
                      <Stack spacing="sm">
                        <Text size="sm" color="secondary">
                          Couleur
                        </Text>
                        <Text weight="medium">Marron cognac</Text>
                      </Stack>
                      <Stack spacing="sm">
                        <Text size="sm" color="secondary">
                          Fermeture
                        </Text>
                        <Text weight="medium">Rabat magnétique + boucles</Text>
                      </Stack>
                      <Stack spacing="sm">
                        <Text size="sm" color="secondary">
                          Compartiments
                        </Text>
                        <Text weight="medium">3 principaux + 5 poches</Text>
                      </Stack>
                    </Grid>
                  </Card>
                ),
              },
              {
                id: 'care',
                label: 'Entretien',
                icon: <i className="pi pi-shield"></i>,
                content: (
                  <Card padding="lg">
                    <Accordion
                      items={[
                        {
                          id: 'cleaning',
                          icon: <i className="pi pi-sparkles"></i>,
                          title: 'Nettoyage du cuir',
                          content: (
                            <Stack spacing="sm">
                              <Text size="sm">
                                • Nettoyez régulièrement avec un chiffon doux et sec
                              </Text>
                              <Text size="sm">
                                • En cas de tache, utilisez un savon doux spécial cuir
                              </Text>
                              <Text size="sm">
                                • Ne jamais utiliser de produits abrasifs ou à base
                                d'alcool
                              </Text>
                            </Stack>
                          ),
                        },
                        {
                          id: 'maintenance',
                          icon: <i className="pi pi-wrench"></i>,
                          title: 'Entretien régulier',
                          content: (
                            <Stack spacing="sm">
                              <Text size="sm">
                                • Appliquez un lait nourrissant 2-3 fois par an
                              </Text>
                              <Text size="sm">
                                • Évitez l'exposition prolongée au soleil et à l'humidité
                              </Text>
                              <Text size="sm">
                                • Rangez dans un endroit sec avec du papier de soie
                              </Text>
                            </Stack>
                          ),
                        },
                        {
                          id: 'patina',
                          icon: <i className="pi pi-sun"></i>,
                          title: 'Patine naturelle',
                          content: (
                            <Text size="sm">
                              Le cuir développera une belle patine naturelle avec le
                              temps, rendant votre sac unique. Ce processus est normal
                              et souhaitable, c'est une des qualités du cuir premium.
                            </Text>
                          ),
                        },
                      ]}
                    />
                  </Card>
                ),
              },
              {
                id: 'reviews',
                label: 'Avis',
                icon: <i className="pi pi-star"></i>,
                content: (
                  <Stack spacing="lg">
                    <Flex align="center" gap="3" justify="center">
                      <Flex align="center" gap="1">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="pi pi-star-fill text-ds-warning text-ds-xl"
                          ></i>
                        ))}
                      </Flex>
                      <Text size="lg" weight="semibold">
                        4.9/5
                      </Text>
                      <Text color="secondary">(47 avis)</Text>
                    </Flex>

                    <Grid cols={2} gap="lg">
                      {[
                        {
                          name: 'Marc Lefebvre',
                          avatar: 'ML',
                          rating: 5,
                          date: 'Il y a 2 semaines',
                          title: 'Qualité exceptionnelle',
                          text: "J'ai acheté ce sac il y a 6 mois et je l'utilise tous les jours. La qualité du cuir est vraiment exceptionnelle.",
                        },
                        {
                          name: 'Sophie Durand',
                          avatar: 'SD',
                          rating: 5,
                          date: 'Il y a 1 mois',
                          title: 'Parfait pour le quotidien',
                          text: 'Idéal pour transporter mon ordinateur. Le sac est très confortable et les finitions impeccables.',
                        },
                      ].map((review, i) => (
                        <Card key={i} padding="lg">
                          <Stack spacing="md">
                            <Flex justify="between" align="start">
                              <Flex gap="3" align="center">
                                <Avatar name={review.name} size="md" />
                                <Stack spacing="xs">
                                  <Text weight="semibold">{review.name}</Text>
                                  <Text size="xs" color="secondary">
                                    {review.date}
                                  </Text>
                                </Stack>
                              </Flex>
                              <Flex align="center" gap="1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <i
                                    key={i}
                                    className="pi pi-star-fill text-ds-warning text-ds-sm"
                                  ></i>
                                ))}
                              </Flex>
                            </Flex>
                            <Stack spacing="sm">
                              <Text weight="medium">{review.title}</Text>
                              <Text size="sm" color="secondary">
                                {review.text}
                              </Text>
                            </Stack>
                          </Stack>
                        </Card>
                      ))}
                    </Grid>
                  </Stack>
                ),
              },
            ]}
            variant="line"
          />
        </Container>
      </Section>

      {/* Footer */}
      <footer className="bg-ds-slate-900 text-white">
        <Container size="xl">
          <Stack spacing="xl" className="py-ds-16">
            <Grid cols={4} gap="lg">
              <Stack spacing="md">
                <Flex align="center" gap="2">
                  <div className="w-10 h-10 bg-ds-primary rounded-ds-md flex items-center justify-center">
                    <i className="pi pi-shopping-bag text-ds-xl text-white"></i>
                  </div>
                  <Heading as="h4" className="text-white">
                    Nomade Creation
                  </Heading>
                </Flex>
                <Text size="sm" className="text-ds-slate-300">
                  Maroquinerie artisanale française depuis 2009.
                </Text>
              </Stack>

              <Stack spacing="md">
                <Text weight="semibold" className="text-white">
                  Navigation
                </Text>
                <Stack spacing="xs">
                  <Text
                    size="sm"
                    className="text-ds-slate-300 cursor-pointer hover:text-white"
                    onClick={() => onNavigate?.('home')}
                  >
                    Accueil
                  </Text>
                  <Text
                    size="sm"
                    className="text-ds-slate-300 cursor-pointer hover:text-white"
                    onClick={() => onNavigate?.('gallery')}
                  >
                    Nos Produits
                  </Text>
                </Stack>
              </Stack>

              <Stack spacing="md">
                <Text weight="semibold" className="text-white">
                  Contact
                </Text>
                <Stack spacing="xs">
                  <Flex align="center" gap="2">
                    <i className="pi pi-map-marker text-ds-base text-ds-slate-300"></i>
                    <Text size="sm" className="text-ds-slate-300">
                      12 Rue de la Paix, Paris
                    </Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-phone text-ds-base text-ds-slate-300"></i>
                    <Text size="sm" className="text-ds-slate-300">
                      +33 1 23 45 67 89
                    </Text>
                  </Flex>
                </Stack>
              </Stack>

              <Stack spacing="md">
                <Text weight="semibold" className="text-white">
                  Newsletter
                </Text>
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="primary"
                  className="w-full"
                >
                  S'inscrire
                </Button>
              </Stack>
            </Grid>

            <div className="border-t border-ds-slate-800 pt-ds-6">
              <Text size="sm" className="text-ds-slate-400 text-center">
                © 2025 Nomade Creation. Tous droits réservés.
              </Text>
            </div>
          </Stack>
        </Container>
      </footer>
    </div>
  )
}

export default ProductDetailEnhanced
