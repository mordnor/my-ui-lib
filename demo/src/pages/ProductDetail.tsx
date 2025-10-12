import { useEffect, useState } from 'react'
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
  Badge
} from '@dorian-ui/my-ui-lib'

interface ProductDetailProps {
  onNavigate?: (page: 'home' | 'gallery') => void
}

export const ProductDetail = ({ onNavigate }: ProductDetailProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Product images
  const productImages = [
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800'
  ]

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

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
          { label: 'Contact' }
        ]}
        actions={
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i
              className={`pi ${theme === 'light' ? 'pi-moon' : 'pi-sun'} text-ds-lg`}
            ></i>
          </Button>
        }
      />

      {/* Breadcrumb */}
      <Section padding="sm" className="border-b border-ds-border">
        <Container size="xl">
          <Flex align="center" gap="2" className="text-ds-sm">
            <Text
              className="text-ds-secondary cursor-pointer hover:text-ds-primary"
              onClick={() => onNavigate?.('home')}
            >
              Accueil
            </Text>
            <i className="pi pi-chevron-right text-ds-xs text-ds-secondary"></i>
            <Text
              className="text-ds-secondary cursor-pointer hover:text-ds-primary"
              onClick={() => onNavigate?.('gallery')}
            >
              Produits
            </Text>
            <i className="pi pi-chevron-right text-ds-xs text-ds-secondary"></i>
            <Text weight="medium">Le Voyageur</Text>
          </Flex>
        </Container>
      </Section>

      {/* Product Detail Section */}
      <Section padding="md">
        <Container size="xl">
          <Grid cols={2} gap="xl">
            {/* Images Gallery */}
            <Stack spacing="md">
              {/* Main Image */}
              <div className="relative aspect-square rounded-ds-lg overflow-hidden bg-ds-muted">
                <img
                  src={productImages[selectedImage]}
                  alt="Le Voyageur"
                  className="w-full h-full object-cover"
                />
                <Badge
                  variant="solid"
                  colorScheme="success"
                  className="absolute top-4 left-4"
                >
                  Bestseller
                </Badge>
              </div>

              {/* Thumbnail Images */}
              <Grid cols={4} gap="md">
                {productImages.map((img, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-ds-md overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === index
                        ? 'border-ds-primary'
                        : 'border-transparent hover:border-ds-border'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={img}
                      alt={`Vue ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Grid>
            </Stack>

            {/* Product Info */}
            <Stack spacing="lg">
              {/* Title & Price */}
              <Stack spacing="md">
                <Heading as="h1" className="text-ds-4xl">
                  Le Voyageur
                </Heading>
                <Flex align="center" gap="3">
                  <Heading as="h2" className="text-ds-3xl text-ds-primary">
                    289 euros
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
                  Sac a dos en cuir pleine fleur, ideal pour vos escapades
                  urbaines. Design moderne alliant style et fonctionnalite.
                </Text>
                <Text color="secondary" className="leading-ds-relaxed">
                  Fabrique a la main dans nos ateliers parisiens, Le Voyageur
                  est concu pour durer. Son cuir de qualite premium developpera
                  une belle patine au fil du temps, rendant chaque piece unique.
                </Text>
              </Stack>

              {/* Features */}
              <Card padding="md" className="bg-ds-muted">
                <Stack spacing="sm">
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Cuir pleine fleur premium</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Fabrique a la main en France</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Compartiment ordinateur 15 pouces</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Garantie a vie</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-check-circle text-ds-success text-ds-lg"></i>
                    <Text size="sm">Livraison offerte</Text>
                  </Flex>
                </Stack>
              </Card>

              {/* Quantity & Add to Cart */}
              <Stack spacing="md">
                <Stack spacing="sm">
                  <Text size="sm" weight="medium">
                    Quantite
                  </Text>
                  <Flex gap="3" align="center">
                    <Flex
                      align="center"
                      gap="3"
                      className="border border-ds-border rounded-ds-md px-ds-4 py-ds-2"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <i className="pi pi-minus"></i>
                      </Button>
                      <Text weight="medium">{quantity}</Text>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <i className="pi pi-plus"></i>
                      </Button>
                    </Flex>
                  </Flex>
                </Stack>

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
                        Livraison en 3-5 jours ouvres
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
                        Garantie a vie
                      </Text>
                      <Text size="xs" color="secondary">
                        Reparations gratuites a vie
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
          <Stack spacing="xl">
            {/* Specifications */}
            <Card padding="lg">
              <Stack spacing="md">
                <Heading as="h3" className="text-ds-2xl">
                  Caracteristiques techniques
                </Heading>
                <Grid cols={2} gap="md">
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
                      Materiau
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
                    <Text weight="medium">Rabat magnetique + boucles</Text>
                  </Stack>
                  <Stack spacing="sm">
                    <Text size="sm" color="secondary">
                      Compartiments
                    </Text>
                    <Text weight="medium">3 principaux + 5 poches</Text>
                  </Stack>
                </Grid>
              </Stack>
            </Card>

            {/* Care Instructions */}
            <Card padding="lg">
              <Stack spacing="md">
                <Heading as="h3" className="text-ds-2xl">
                  Entretien du cuir
                </Heading>
                <Stack spacing="sm">
                  <Flex align="start" gap="3">
                    <i className="pi pi-info-circle text-ds-primary text-ds-lg mt-1"></i>
                    <Text size="sm">
                      Nettoyez regulierement avec un chiffon doux et sec
                    </Text>
                  </Flex>
                  <Flex align="start" gap="3">
                    <i className="pi pi-info-circle text-ds-primary text-ds-lg mt-1"></i>
                    <Text size="sm">
                      Appliquez un lait nourrissant 2-3 fois par an
                    </Text>
                  </Flex>
                  <Flex align="start" gap="3">
                    <i className="pi pi-info-circle text-ds-primary text-ds-lg mt-1"></i>
                    <Text size="sm">
                      Evitez l'exposition prolongee au soleil et a l'humidite
                    </Text>
                  </Flex>
                  <Flex align="start" gap="3">
                    <i className="pi pi-info-circle text-ds-primary text-ds-lg mt-1"></i>
                    <Text size="sm">
                      Le cuir developpera une patine naturelle avec le temps
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Section>

      {/* Customer Reviews */}
      <Section padding="md">
        <Container size="xl">
          <Stack spacing="xl">
            <Stack spacing="md" align="center" className="text-center">
              <Heading as="h2" className="text-ds-3xl">
                Avis clients
              </Heading>
              <Flex align="center" gap="3">
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
            </Stack>

            <Grid cols={2} gap="lg">
              {[
                {
                  name: 'Marc Lefebvre',
                  avatar: 'ML',
                  rating: 5,
                  date: 'Il y a 2 semaines',
                  title: 'Qualite exceptionnelle',
                  text: "J'ai achete ce sac il y a 6 mois et je l'utilise tous les jours. La qualite du cuir est vraiment exceptionnelle, et le sac vieillit magnifiquement. Tres content de mon achat !"
                },
                {
                  name: 'Sophie Durand',
                  avatar: 'SD',
                  rating: 5,
                  date: 'Il y a 1 mois',
                  title: 'Parfait pour le quotidien',
                  text: 'Ideal pour transporter mon ordinateur et mes affaires. Le sac est tres confortable a porter et les finitions sont impeccables. Je recommande vivement !'
                },
                {
                  name: 'Thomas Martin',
                  avatar: 'TM',
                  rating: 4,
                  date: 'Il y a 1 mois',
                  title: 'Beau produit',
                  text: 'Tres beau sac, bien fini. Le cuir a une odeur agreable et la fabrication francaise se ressent dans la qualite. Seul bemol : le prix, mais on en a pour son argent.'
                },
                {
                  name: 'Julie Petit',
                  avatar: 'JP',
                  rating: 5,
                  date: 'Il y a 2 mois',
                  title: 'Mon sac prefere',
                  text: "C'est mon troisieme sac Nomade Creation et je ne suis jamais decue. Le Voyageur est parfait pour mes deplacements professionnels. Spacieux et elegant !"
                }
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

            <Flex justify="center">
              <Button variant="outline" colorScheme="primary">
                Voir tous les avis
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Related Products */}
      <Section padding="md" className="bg-ds-muted">
        <Container size="xl">
          <Stack spacing="xl">
            <Heading as="h2" className="text-ds-3xl text-center">
              Vous aimerez aussi
            </Heading>
            <Grid cols={3} gap="lg">
              {[
                {
                  image:
                    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
                  title: "L'Elegant",
                  price: '249 euros'
                },
                {
                  image:
                    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
                  title: 'Le Nomade',
                  price: '319 euros'
                },
                {
                  image:
                    'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=400',
                  title: 'La Citadine',
                  price: '199 euros'
                }
              ].map((product, i) => (
                <Card key={i} padding="none" className="overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-ds-base"
                    />
                  </div>
                  <Stack spacing="sm" className="p-ds-4">
                    <Text weight="semibold">{product.title}</Text>
                    <Text color="secondary">{product.price}</Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="bg-ds-slate-900 text-white">
        <Container size="xl">
          <Stack spacing="xl" className="py-ds-16">
            <Grid cols={4} gap="lg">
              {/* About */}
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
                  Maroquinerie artisanale francaise depuis 2009.
                </Text>
              </Stack>

              {/* Links */}
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

              {/* Contact */}
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

              {/* Newsletter */}
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
                2025 Nomade Creation. Tous droits reserves.
              </Text>
            </div>
          </Stack>
        </Container>
      </footer>
    </div>
  )
}

export default ProductDetail
