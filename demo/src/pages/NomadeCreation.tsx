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
  ProductCard
} from '@dorian-ui/my-ui-lib'
import type { ThemeName } from '@dorian-ui/my-ui-lib'
import { ThemeSelector } from '../components/ThemeSelector'

interface NomadeCreationProps {
  onNavigate?: (
    page: 'home' | 'gallery' | 'product',
    productId?: number
  ) => void
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

export const NomadeCreation = ({
  onNavigate,
  theme,
  onThemeChange
}: NomadeCreationProps) => {
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
              Nomade Création
            </Heading>
          </>
        }
        links={[
          { label: 'Accueil', active: true },
          { label: 'Produits', onClick: () => onNavigate?.('gallery') },
          { label: 'À propos' },
          { label: 'Contact' }
        ]}
        actions={
          <ThemeSelector currentTheme={theme} onThemeChange={onThemeChange} />
        }
      />

      {/* Hero Section */}
      <Section
        padding="none"
        className="relative overflow-hidden min-h-[80vh] flex items-center"
      >
        {/* Background Image Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-ds-slate-900 to-ds-slate-700">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ds-background/90 to-transparent"></div>

        <Container size="xl" className="relative z-10">
          <Grid cols={2} gap="xl" className="items-center">
            <Stack spacing="xl">
              <Badge variant="soft" colorScheme="primary" size="lg">
                Artisanat Francais
              </Badge>

              <Stack spacing="md">
                <Heading
                  as="h1"
                  className="text-ds-6xl font-ds-black text-white"
                >
                  L'Art du Cuir
                </Heading>
                <Heading
                  as="h2"
                  className="text-ds-4xl font-ds-light text-ds-slate-300"
                >
                  Fait Main, Fait Cœur
                </Heading>
              </Stack>

              <Text
                size="lg"
                className="text-ds-slate-200 max-w-xl leading-ds-relaxed"
              >
                Découvrez nos sacs en cuir artisanaux, créés avec passion dans
                nos ateliers français. Chaque pièce est unique et raconte une
                histoire.
              </Text>

              <Flex gap="4">
                <Button size="lg" colorScheme="primary">
                  Découvrir la Collection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Notre Histoire
                </Button>
              </Flex>
            </Stack>

            {/* Stats */}
            <Grid cols={2} gap="md" className="hidden lg:grid">
              {[
                { icon: 'pi-star', value: '15+', label: "Annees d'experience" },
                { icon: 'pi-palette', value: '100%', label: 'Fait main' },
                { icon: 'pi-leaf', value: 'Cuir', label: 'Ethique & Durable' },
                {
                  icon: 'pi-heart',
                  value: '2000+',
                  label: 'Clients satisfaits'
                }
              ].map((stat, i) => (
                <Card
                  key={i}
                  padding="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/20"
                >
                  <Stack spacing="xs" align="center" className="text-center">
                    <i className={`pi ${stat.icon} text-ds-3xl text-white`}></i>
                    <Text size="lg" weight="bold" className="text-white">
                      {stat.value}
                    </Text>
                    <Text size="sm" className="text-ds-slate-300">
                      {stat.label}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Values Section */}
      <Section padding="md" className="bg-ds-muted">
        <Container size="xl">
          <Stack spacing="xl">
            {/* Section Header */}
            <Stack
              spacing="md"
              align="center"
              className="text-center max-w-3xl mx-auto"
            >
              <Badge variant="soft" colorScheme="secondary">
                Nos Valeurs
              </Badge>
              <Heading as="h2" className="text-ds-4xl">
                L'Excellence au Service du Savoir-Faire
              </Heading>
              <Text size="lg" color="muted">
                Nous croyons en un artisanat responsable et durable, où chaque
                détail compte.
              </Text>
            </Stack>

            {/* Values Grid */}
            <Grid cols={3} gap="lg">
              {[
                {
                  icon: 'pi pi-heart',
                  title: 'Passion Artisanale',
                  description:
                    'Chaque sac est confectionné à la main avec amour et expertise par nos artisans.'
                },
                {
                  icon: 'pi pi-shield',
                  title: 'Qualité Premium',
                  description:
                    'Nous sélectionnons les meilleurs cuirs pour garantir durabilité et élégance.'
                },
                {
                  icon: 'pi pi-globe',
                  title: 'Engagement Éthique',
                  description:
                    "Production locale, cuirs tracés et respect de l'environnement."
                },
                {
                  icon: 'pi pi-star',
                  title: 'Design Intemporel',
                  description:
                    'Des créations qui traversent les modes et vous accompagnent des années.'
                },
                {
                  icon: 'pi pi-users',
                  title: 'Service Client',
                  description:
                    'Une équipe passionnée à votre écoute pour vous conseiller.'
                },
                {
                  icon: 'pi pi-verified',
                  title: 'Garantie à Vie',
                  description:
                    "Nous réparons gratuitement tous nos produits, quelle que soit l'année."
                }
              ].map((value, i) => (
                <Card
                  key={i}
                  padding="lg"
                  className="hover:shadow-ds-xl transition-shadow duration-ds-base"
                >
                  <Stack spacing="md">
                    <div className="w-12 h-12 bg-ds-primary/10 rounded-ds-lg flex items-center justify-center">
                      <i
                        className={`${value.icon} text-ds-2xl text-ds-primary`}
                      ></i>
                    </div>
                    <Heading as="h4" className="text-ds-xl">
                      {value.title}
                    </Heading>
                    <Text
                      size="sm"
                      color="muted"
                      className="leading-ds-relaxed"
                    >
                      {value.description}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Products Section */}
      <Section padding="md">
        <Container size="xl">
          <Stack spacing="xl">
            {/* Section Header */}
            <Stack
              spacing="md"
              align="center"
              className="text-center max-w-3xl mx-auto"
            >
              <Badge variant="soft" colorScheme="accent">
                Nos Créations
              </Badge>
              <Heading as="h2" className="text-ds-4xl">
                Collection Signature
              </Heading>
              <Text size="lg" color="muted">
                Découvrez notre sélection de sacs en cuir, pensés pour vous
                accompagner au quotidien.
              </Text>
            </Stack>

            {/* Products Grid */}
            <Grid cols={3} gap="lg">
              <ProductCard
                image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
                title="Le Voyageur"
                description="Sac à dos en cuir pleine fleur, idéal pour vos escapades urbaines. Compartiments multiples et finitions soignées."
                price="289€"
                badge="Bestseller"
                badgeVariant="solid"
                badgeColorScheme="success"
                onClick={() => onNavigate?.('product', 1)}
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400"
                title="L'Élégant"
                description="Sac messager en cuir tanné végétal. Design épuré pour un style intemporel et professionnel."
                price="249€"
                onClick={() => onNavigate?.('product', 2)}
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
                title="Le Nomade"
                description="Besace en cuir vintage, patine naturelle. Parfait pour transporter ordinateur et documents."
                price="319€"
                badge="Nouveau"
                badgeVariant="solid"
                badgeColorScheme="info"
                onClick={() => onNavigate?.('product', 3)}
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=400"
                title="La Citadine"
                description="Sac à main compact en cuir souple. Élégance et praticité pour vos sorties en ville."
                price="199€"
                onClick={() => onNavigate?.('product', 4)}
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=400"
                title="Le Baroudeur"
                description="Grand sac de voyage en cuir robuste. Résistant et spacieux pour toutes vos aventures."
                price="399€"
                badge="Premium"
                badgeVariant="solid"
                badgeColorScheme="warning"
                onClick={() => onNavigate?.('product', 5)}
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400"
                title="Le Raffiné"
                description="Porte-documents en cuir grain naturel. Sophistication et professionnalisme au rendez-vous."
                price="269€"
                onClick={() => onNavigate?.('product', 6)}
              />
            </Grid>

            {/* CTA */}
            <Flex justify="center">
              <Button
                size="lg"
                variant="outline"
                colorScheme="primary"
                onClick={() => onNavigate?.('gallery')}
              >
                Voir Toute la Collection
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section padding="md" className="bg-ds-muted">
        <Container size="xl">
          <Stack spacing="xl">
            {/* Section Header */}
            <Stack
              spacing="md"
              align="center"
              className="text-center max-w-3xl mx-auto"
            >
              <Badge variant="soft" colorScheme="success">
                Témoignages
              </Badge>
              <Heading as="h2" className="text-ds-4xl">
                Ce Que Disent Nos Clients
              </Heading>
              <Text size="lg" color="muted">
                Plus de 2000 clients nous font confiance pour leur quotidien.
              </Text>
            </Stack>

            {/* Testimonials Grid */}
            <Grid cols={3} gap="lg">
              {[
                {
                  name: 'Sophie Martin',
                  role: 'Architecte',
                  avatar: 'SM',
                  text: "Mon sac Nomade Création m'accompagne depuis 3 ans et il est magnifique ! La qualité du cuir est exceptionnelle."
                },
                {
                  name: 'Thomas Dubois',
                  role: 'Photographe',
                  avatar: 'TD',
                  text: 'Artisanat français de qualité. Le service client est irréprochable et les finitions sont parfaites. Je recommande vivement !'
                },
                {
                  name: 'Marie Laurent',
                  role: 'Consultante',
                  avatar: 'ML',
                  text: 'Un investissement qui en vaut la peine. Mon sac est devenu mon compagnon quotidien, robuste et élégant à la fois.'
                },
                {
                  name: 'Pierre Rousseau',
                  role: 'Entrepreneur',
                  avatar: 'PR',
                  text: "La patine du cuir avec le temps est sublime. C'est un vrai plaisir de voir son sac évoluer et se bonifier."
                },
                {
                  name: 'Julie Mercier',
                  role: 'Designer',
                  avatar: 'JM',
                  text: "Design intemporel et fabrication irréprochable. J'adore le fait que chaque pièce soit unique et faite à la main."
                },
                {
                  name: 'Lucas Bernard',
                  role: 'Journaliste',
                  avatar: 'LB',
                  text: 'Rapport qualité-prix excellent. Le service après-vente est au top, ils ont réparé gratuitement une couture après 2 ans !'
                }
              ].map((testimonial, i) => (
                <Card
                  key={i}
                  padding="lg"
                  className="hover:shadow-ds-lg transition-shadow duration-ds-base"
                >
                  <Stack spacing="md">
                    <Flex gap="3" align="center">
                      <Avatar name={testimonial.name} size="md" />
                      <Stack spacing="xs">
                        <Text size="base" weight="semibold">
                          {testimonial.name}
                        </Text>
                        <Text size="sm" color="muted">
                          {testimonial.role}
                        </Text>
                      </Stack>
                    </Flex>
                    <Text size="sm" className="leading-ds-relaxed italic">
                      "{testimonial.text}"
                    </Text>
                    <Flex gap="1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-ds-warning text-ds-lg">
                          ★
                        </span>
                      ))}
                    </Flex>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="md" className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-ds-primary to-ds-secondary"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <Container size="xl" className="relative z-10">
          <Grid cols={2} gap="xl" className="items-center">
            <Stack spacing="lg">
              <Heading as="h2" className="text-ds-5xl text-white">
                Prêt à Trouver Votre Compagnon Idéal ?
              </Heading>
              <Text size="lg" className="text-white/90 leading-ds-relaxed">
                Visitez notre atelier à Paris ou commandez en ligne. Livraison
                offerte en France métropolitaine et retours gratuits sous 30
                jours.
              </Text>
              <Flex gap="4">
                <Button
                  size="lg"
                  variant="solid"
                  className="bg-white text-ds-primary hover:bg-white/90"
                >
                  Commander Maintenant
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Visiter l'Atelier
                </Button>
              </Flex>
            </Stack>

            <Card
              padding="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20"
            >
              <Stack spacing="md">
                <Heading as="h4" className="text-white">
                  Offre Spéciale
                </Heading>
                <Text className="text-white/90">
                  -15% sur votre première commande avec le code
                </Text>
                <div className="bg-white/20 rounded-ds-md p-ds-4 text-center">
                  <Text
                    size="lg"
                    weight="bold"
                    className="text-white tracking-ds-wider"
                  >
                    BIENVENUE15
                  </Text>
                </div>
                <Text size="sm" className="text-white/80">
                  Valable jusqu'au 31 décembre 2025
                </Text>
              </Stack>
            </Card>
          </Grid>
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
                    Nomade Création
                  </Heading>
                </Flex>
                <Text size="sm" className="text-ds-slate-300">
                  Maroquinerie artisanale française depuis 2009. Sacs en cuir
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
                    À Propos
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
                  Recevez nos nouveautés et offres exclusives.
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
                  © 2025 Nomade Création. Tous droits réservés.
                </Text>
                <Flex gap="6">
                  <Text
                    size="sm"
                    className="text-ds-slate-400 cursor-pointer hover:text-white"
                  >
                    Mentions légales
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
                    Politique de confidentialité
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

export default NomadeCreation
