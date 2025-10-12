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
  Badge,
  ProductCard
} from '@dorian-ui/my-ui-lib'
import type { ThemeName } from '@dorian-ui/my-ui-lib'
import { ThemeSelector } from '../components/ThemeSelector'

interface ProductGalleryProps {
  onNavigate?: (page: 'home' | 'gallery' | 'product', productId?: number) => void
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

type Category = 'all' | 'backpacks' | 'bags' | 'briefcases' | 'travel'

interface Product {
  id: number
  image: string
  title: string
  description: string
  price: string
  category: Category
  badge?: string
}

const mockProducts: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    title: 'Le Voyageur',
    description:
      'Sac a dos en cuir pleine fleur, ideal pour vos escapades urbaines. Compartiments multiples et finitions soignees.',
    price: '289 euros',
    category: 'backpacks',
    badge: 'Bestseller'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
    title: "L'Elegant",
    description:
      'Sac messager en cuir tanne vegetal. Design epure pour un style intemporel et professionnel.',
    price: '249 euros',
    category: 'bags'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
    title: 'Le Nomade',
    description:
      'Besace en cuir vintage, patine naturelle. Parfait pour transporter ordinateur et documents.',
    price: '319 euros',
    category: 'bags',
    badge: 'Nouveau'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=400',
    title: 'La Citadine',
    description:
      'Sac a main compact en cuir souple. Elegance et praticite pour vos sorties en ville.',
    price: '199 euros',
    category: 'bags'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=400',
    title: 'Le Baroudeur',
    description:
      'Grand sac de voyage en cuir robuste. Resistant et spacieux pour toutes vos aventures.',
    price: '399 euros',
    category: 'travel',
    badge: 'Premium'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400',
    title: 'Le Raffine',
    description:
      'Porte-documents en cuir grain naturel. Sophistication et professionnalisme au rendez-vous.',
    price: '269 euros',
    category: 'briefcases'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    title: "L'Urbain",
    description:
      'Sac a dos compact en cuir souple. Parfait pour le quotidien avec style et confort.',
    price: '229 euros',
    category: 'backpacks'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
    title: 'Le Classique',
    description:
      'Sacoche en cuir traditionnel. Un grand classique revisite avec elegance et modernite.',
    price: '209 euros',
    category: 'bags'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
    title: "L'Aventurier",
    description:
      'Sac bandouliere en cuir resistant. Concu pour accompagner toutes vos explorations.',
    price: '279 euros',
    category: 'travel',
    badge: 'Edition Limitee'
  }
]

const categories = [
  { id: 'all' as Category, label: 'Tous les produits' },
  { id: 'backpacks' as Category, label: 'Sacs a dos' },
  { id: 'bags' as Category, label: 'Besaces & Messagers' },
  { id: 'briefcases' as Category, label: 'Porte-documents' },
  { id: 'travel' as Category, label: 'Voyage' }
]

export const ProductGallery = ({ onNavigate, theme, onThemeChange }: ProductGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  // Filter products
  const filteredProducts =
    activeCategory === 'all'
      ? mockProducts
      : mockProducts.filter((p) => p.category === activeCategory)

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
          { label: 'Produits', active: true },
          { label: 'A propos' },
          { label: 'Contact' }
        ]}
        actions={
          <ThemeSelector
            currentTheme={theme}
            onThemeChange={onThemeChange}
          />
        }
      />

      {/* Hero Section */}
      <Section padding="lg" className="bg-ds-muted">
        <Container size="xl">
          <Stack spacing="lg" align="center" className="text-center">
            <Badge variant="soft" colorScheme="primary" size="lg">
              Collection 2025
            </Badge>
            <Stack spacing="md" align="center">
              <Heading as="h1" className="text-ds-5xl font-ds-black">
                Notre Collection
              </Heading>
              <Text size="lg" color="secondary" className="max-w-2xl">
                Découvrez tous nos sacs en cuir artisanaux, créés avec passion
                dans nos ateliers français. Chaque pièce est unique.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Filter Section */}
      <Section padding="md" className="border-b border-ds-border">
        <Container size="xl">
          <Stack spacing="md">
            <Flex justify="between" align="center">
              <Text size="lg" weight="semibold">
                Filtrer par catégorie
              </Text>
              <Text size="sm" color="secondary">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
              </Text>
            </Flex>
            <Flex justify="start" gap="3" className="flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? 'solid' : 'outline'}
                  colorScheme="primary"
                  size="md"
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </Button>
              ))}
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Products Grid */}
      <Section padding="lg">
        <Container size="xl">
          <Grid cols={3} gap="lg">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                badge={product.badge}
                badgeVariant="solid"
                badgeColorScheme={
                  product.badge === 'Bestseller'
                    ? 'success'
                    : product.badge === 'Nouveau'
                    ? 'info'
                    : product.badge === 'Premium'
                    ? 'warning'
                    : 'primary'
                }
                onClick={() => onNavigate?.('product', product.id)}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="md" className="bg-ds-muted">
        <Container size="xl">
          <Stack spacing="lg" align="center" className="text-center py-ds-12">
            <Heading as="h2" className="text-ds-4xl">
              Creation Sur Mesure
            </Heading>
            <Text size="lg" color="secondary" className="max-w-2xl">
              Vous avez un projet specifique ? Nos artisans peuvent creer le
              sac de vos reves sur mesure. Contactez-nous pour discuter de
              votre projet.
            </Text>
            <Flex gap="4">
              <Button size="lg" colorScheme="primary">
                <i className="pi pi-envelope text-ds-base mr-ds-2"></i>
                Nous contacter
              </Button>
              <Button size="lg" variant="outline" colorScheme="primary">
                <i className="pi pi-calendar text-ds-base mr-ds-2"></i>
                Prendre RDV
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="bg-ds-slate-900 text-white">
        <Container size="xl">
          <Stack spacing="xl" className="py-ds-16">
            {/* Footer Main */}
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
                  Maroquinerie artisanale francaise depuis 2009. Sacs en cuir
                  fait main avec passion.
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
                  >
                    Nos Produits
                  </Text>
                  <Text
                    size="sm"
                    className="text-ds-slate-300 cursor-pointer hover:text-white"
                  >
                    A Propos
                  </Text>
                  <Text
                    size="sm"
                    className="text-ds-slate-300 cursor-pointer hover:text-white"
                  >
                    Contact
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
                      12 Rue de la Paix, 75002 Paris
                    </Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-phone text-ds-base text-ds-slate-300"></i>
                    <Text size="sm" className="text-ds-slate-300">
                      +33 1 23 45 67 89
                    </Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <i className="pi pi-envelope text-ds-base text-ds-slate-300"></i>
                    <Text size="sm" className="text-ds-slate-300">
                      contact@nomade-creation.fr
                    </Text>
                  </Flex>
                </Stack>
              </Stack>

              {/* Newsletter */}
              <Stack spacing="md">
                <Text weight="semibold" className="text-white">
                  Newsletter
                </Text>
                <Text size="sm" className="text-ds-slate-300">
                  Recevez nos nouveautes et offres exclusives.
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

            {/* Footer Bottom */}
            <div className="border-t border-ds-slate-800 pt-ds-6">
              <Flex
                justify="between"
                align="center"
                className="flex-wrap gap-4"
              >
                <Text size="sm" className="text-ds-slate-400">
                  2025 Nomade Creation. Tous droits reserves.
                </Text>
                <Flex gap="6">
                  <Text
                    size="sm"
                    className="text-ds-slate-400 cursor-pointer hover:text-white"
                  >
                    Mentions legales
                  </Text>
                  <Text
                    size="sm"
                    className="text-ds-slate-400 cursor-pointer hover:text-white"
                  >
                    CGV
                  </Text>
                  <Text
                    size="sm"
                    className="text-ds-slate-400 cursor-pointer hover:text-white"
                  >
                    Politique de confidentialite
                  </Text>
                </Flex>
              </Flex>
            </div>
          </Stack>
        </Container>
      </footer>
    </div>
  )
}

export default ProductGallery
