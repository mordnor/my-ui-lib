import { useState } from 'react'
import type { ThemeName } from '@dorian-ui/my-ui-lib'
import {
  Navbar,
  Container,
  Heading,
  Text,
  Button,
  Card,
  Stack,
  Grid,
  Flex,
  Badge
} from '@dorian-ui/my-ui-lib'
import { ContactForm, type ContactFormData } from '../components/ContactForm'
import { ThemeSelector } from '../components/ThemeSelector'
import { PricingCard } from '../components/PricingCard'

interface HotelLandingProps {
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

export function HotelLanding({ theme, onThemeChange }: HotelLandingProps) {
  const [activeSection, setActiveSection] = useState<string>('accueil')

  const handleContactSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data)
    alert(
      'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.'
    )
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-ds-background overflow-hidden">
      {/* Navbar */}
      <Navbar
        logo={
          <Flex align="center" gap="3">
            <div className="w-10 h-10 bg-gradient-to-br from-ds-primary to-ds-accent rounded-ds-lg flex items-center justify-center shadow-ds-md">
              <span className="text-ds-primary-foreground font-ds-bold text-ds-xl">
                H
              </span>
            </div>
            <Heading as="h6" className="!text-ds-xl !mb-0 hidden sm:block">
              Hôtel du Pont
            </Heading>
          </Flex>
        }
        links={[
          {
            label: 'Accueil',
            onClick: () => scrollToSection('accueil'),
            active: activeSection === 'accueil'
          },
          {
            label: 'Découvrir',
            onClick: () => scrollToSection('presentation'),
            active: activeSection === 'presentation'
          },
          {
            label: 'Tarifs',
            onClick: () => scrollToSection('services'),
            active: activeSection === 'services'
          },
          {
            label: 'Contact',
            onClick: () => scrollToSection('contact'),
            active: activeSection === 'contact'
          }
        ]}
        actions={<ThemeSelector theme={theme} onThemeChange={onThemeChange} />}
        sticky
        blurred
      />

      {/* Hero Section - Plus impactant */}
      <section
        id="accueil"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background avec effet parallaxe */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-ds-primary via-ds-secondary to-ds-accent opacity-90"
            style={{
              backgroundImage: 'url(/hotel-hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <Container size="lg" className="relative z-10 py-20">
          <Stack spacing="xl" align="center" className="text-center">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 !px-6 !py-2">
              🏔️ Bagnols-les-Bains · UNESCO
            </Badge>

            <div className="space-y-6 max-w-4xl">
              <Heading
                as="h1"
                className="text-white !text-6xl md:!text-7xl !font-ds-bold animate-fade-in"
              >
                Hôtel du Pont
              </Heading>

              <Text
                size="lg"
                className="text-white/95 max-w-2xl mx-auto text-ds-xl md:text-ds-2xl !leading-relaxed"
              >
                Votre havre de paix au cœur des Cévennes
              </Text>

              <Text className="text-white/80 max-w-xl mx-auto">
                Curistes, randonneurs, amateurs de nature : découvrez notre
                accueil chaleureux à 200m des thermes
              </Text>
            </div>

            <Flex gap="4" className="flex-wrap justify-center pt-4">
              <Button
                variant="solid"
                colorScheme="primary"
                size="xl"
                className="!bg-white !text-ds-primary hover:!bg-white/90 shadow-ds-xl"
                onClick={() => scrollToSection('contact')}
              >
                Réserver maintenant
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="!bg-white/10 !backdrop-blur-sm !border-white/50 !text-white hover:!bg-white/20"
                onClick={() => scrollToSection('services')}
              >
                Voir nos offres
              </Button>
            </Flex>

            {/* Stats rapides */}
            <Grid
              cols={3}
              gap="lg"
              className="max-w-2xl mx-auto pt-12 border-t border-white/20"
            >
              <Stack spacing="xs" align="center">
                <Heading as="h3" size="h2" className="text-white">
                  200m
                </Heading>
                <Text size="sm" className="text-white/70">
                  des thermes
                </Text>
              </Stack>
              <Stack spacing="xs" align="center">
                <Heading as="h3" size="h2" className="text-white">
                  WiFi
                </Heading>
                <Text size="sm" className="text-white/70">
                  gratuit
                </Text>
              </Stack>
              <Stack spacing="xs" align="center">
                <Heading as="h3" size="h2" className="text-white">
                  ★★★
                </Heading>
                <Text size="sm" className="text-white/70">
                  confort
                </Text>
              </Stack>
            </Grid>
          </Stack>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Section Expérience - Plus visuelle */}
      <section id="presentation" className="py-24 relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ds-muted/30 to-transparent" />

        <Container size="lg" className="relative z-10">
          <Stack spacing="xl">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
              <Text
                color="muted"
                className="uppercase tracking-wider text-ds-sm font-ds-semibold mb-ds-3"
              >
                Une expérience unique
              </Text>
              <Heading as="h2" className="mb-ds-4">
                Au cœur du patrimoine UNESCO
              </Heading>
              <Text color="muted" size="lg">
                Découvrez Bagnols-les-Bains, station thermale au charme
                authentique
              </Text>
            </div>

            {/* Features Grid - Plus épuré */}
            <Grid
              cols={1}
              gap="lg"
              className="md:grid-cols-3 max-w-6xl mx-auto"
            >
              <Card
                variant="elevated"
                padding="lg"
                hoverable
                className="text-center group cursor-pointer transition-all hover:shadow-ds-2xl"
              >
                <Stack spacing="md" align="center">
                  <div className="w-16 h-16 bg-gradient-to-br from-ds-primary to-ds-accent rounded-full flex items-center justify-center text-3xl shadow-ds-lg group-hover:scale-110 transition-transform">
                    🏔️
                  </div>
                  <Heading as="h3" size="h5">
                    Nature Préservée
                  </Heading>
                  <Text color="muted" size="sm" align="center">
                    Au flanc du Mont Lozère, entre Gorges du Tarn et Parc des
                    Cévennes
                  </Text>
                </Stack>
              </Card>

              <Card
                variant="elevated"
                padding="lg"
                hoverable
                className="text-center group cursor-pointer transition-all hover:shadow-ds-2xl"
              >
                <Stack spacing="md" align="center">
                  <div className="w-16 h-16 bg-gradient-to-br from-ds-secondary to-ds-info rounded-full flex items-center justify-center text-3xl shadow-ds-lg group-hover:scale-110 transition-transform">
                    💧
                  </div>
                  <Heading as="h3" size="h5">
                    Thermalisme
                  </Heading>
                  <Text color="muted" size="sm" align="center">
                    Sources naturelles reconnues depuis l'époque romaine pour
                    leurs bienfaits
                  </Text>
                </Stack>
              </Card>

              <Card
                variant="elevated"
                padding="lg"
                hoverable
                className="text-center group cursor-pointer transition-all hover:shadow-ds-2xl"
              >
                <Stack spacing="md" align="center">
                  <div className="w-16 h-16 bg-gradient-to-br from-ds-accent to-ds-warning rounded-full flex items-center justify-center text-3xl shadow-ds-lg group-hover:scale-110 transition-transform">
                    🍽️
                  </div>
                  <Heading as="h3" size="h5">
                    Gastronomie
                  </Heading>
                  <Text color="muted" size="sm" align="center">
                    Restaurant & pizzeria, produits du terroir dans la tradition
                    française
                  </Text>
                </Stack>
              </Card>
            </Grid>

            {/* CTA intermédiaire */}
            <Container size="xl" className="max-w-6xl">
              <Card
                variant="filled"
                padding="lg"
                className="!bg-gradient-to-r from-ds-primary/10 to-ds-accent/10 border border-ds-primary/20"
              >
                <Flex
                  justify="between"
                  align="center"
                  className="flex-col md:flex-row gap-6"
                >
                  <div className="flex-1 text-center md:text-left">
                    <Heading as="h4" size="h5" className="mb-ds-2">
                      Profitez de nos forfaits cure
                    </Heading>
                    <Text color="muted">
                      Tarifs préférentiels pour les curistes en partenariat avec
                      l'établissement thermal
                    </Text>
                  </div>
                  <Button
                    variant="solid"
                    colorScheme="primary"
                    size="lg"
                    onClick={() => scrollToSection('services')}
                  >
                    Découvrir les forfaits
                  </Button>
                </Flex>
              </Card>
            </Container>
          </Stack>
        </Container>
      </section>

      {/* Section Tarifs - Plus digestible */}
      <section id="services" className="py-24 bg-ds-muted/20">
        <Container size="lg">
          <Stack spacing="xl">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
              <Text
                color="muted"
                className="uppercase tracking-wider text-ds-sm font-ds-semibold mb-ds-3"
              >
                Nos offres
              </Text>
              <Heading as="h2" className="mb-ds-4">
                Choisissez votre séjour
              </Heading>
              <Text color="muted">
                Chambres confortables avec douche/bain, TV, WiFi ·
                Petit-déjeuner dès 7h
              </Text>
            </div>

            {/* Pricing Cards - Focus sur les formules principales */}
            <Container size="xl" className="max-w-6xl">
              <Grid cols={1} gap="lg" className="md:grid-cols-3">
                <PricingCard
                  badge="Séjour libre"
                  badgeColor="bg-ds-muted text-ds-foreground"
                  title="Nuitée"
                  description="Chambre + petit déjeuner"
                  price="55€"
                  priceUnit="/ nuit"
                  priceSubtext="1 personne · basse saison"
                  features={[
                    { label: 'Chambre équipée', included: true },
                    { label: 'WiFi gratuit', included: true },
                    { label: 'Petit déjeuner inclus', included: true }
                  ]}
                  ctaLabel="Réserver"
                  onCtaClick={() => scrollToSection('contact')}
                  ctaVariant="outline"
                />

                <PricingCard
                  badge="Soirée étape"
                  badgeColor="bg-ds-primary/10 text-ds-primary"
                  title="Demi-Pension"
                  description="Nuit + repas + petit déjeuner"
                  price="75€"
                  priceUnit="/ nuit"
                  priceSubtext="1 personne · basse saison"
                  features={[
                    { label: "Tout l'équipement", included: true },
                    { label: 'Repas du terroir', included: true },
                    { label: 'Service en salle', included: true }
                  ]}
                  ctaLabel="Réserver"
                  onCtaClick={() => scrollToSection('contact')}
                  variant="featured"
                  ctaVariant="solid"
                />

                <PricingCard
                  badge="20 jours"
                  badgeColor="bg-ds-accent/10 text-ds-accent"
                  title="Forfait Cure"
                  description="Demi-pension curiste"
                  price="1020€"
                  priceUnit="/ cure"
                  priceSubtext="1 personne · 20 jours"
                  features={[
                    { label: 'Tarif préférentiel', included: true },
                    { label: 'Partenariat thermal', included: true },
                    { label: 'Repas + collation soir', included: true }
                  ]}
                  ctaLabel="Demander un devis"
                  onCtaClick={() => scrollToSection('contact')}
                  ctaVariant="outline"
                />
              </Grid>
            </Container>

            {/* Info supplémentaires - Plus compact */}
            <Container size="xl" className="max-w-6xl">
              <Card variant="soft" padding="md">
                <Flex
                  justify="between"
                  align="center"
                  className="flex-wrap gap-4"
                >
                  <Text size="sm" color="muted">
                    <span className="font-ds-semibold text-ds-foreground">
                      Haute saison
                    </span>{' '}
                    (Juillet-Août) : +10-15%
                  </Text>
                  <Text size="sm" color="muted">
                    •
                  </Text>
                  <Text size="sm" color="muted">
                    <span className="font-ds-semibold text-ds-foreground">
                      Enfants -12 ans
                    </span>{' '}
                    : à partir de 25€
                  </Text>
                  <Text size="sm" color="muted">
                    •
                  </Text>
                  <Text size="sm" color="muted">
                    <span className="font-ds-semibold text-ds-foreground">
                      Animaux
                    </span>{' '}
                    : 5€/jour
                  </Text>
                </Flex>
              </Card>
            </Container>
          </Stack>
        </Container>
      </section>

      {/* Section Contact - Plus aéré */}
      <section id="contact" className="py-24 relative">
        {/* Background décoratif */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ds-primary/5 to-transparent" />

        <Container size="lg" className="relative z-10">
          <Stack spacing="xl">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
              <Text
                color="muted"
                className="uppercase tracking-wider text-ds-sm font-ds-semibold mb-ds-3"
              >
                Contactez-nous
              </Text>
              <Heading as="h2" className="mb-ds-4">
                Prêt pour votre séjour ?
              </Heading>
              <Text color="muted" size="lg">
                Notre équipe est à votre disposition pour toute question
              </Text>
            </div>

            <Grid
              cols={1}
              gap="xl"
              className="lg:grid-cols-5 max-w-6xl mx-auto"
            >
              {/* Contact Form - Prend plus de place */}
              <div className="lg:col-span-3">
                <ContactForm onSubmit={handleContactSubmit} />
              </div>

              {/* Contact Info - Plus compact */}
              <Stack spacing="lg" className="lg:col-span-2">
                {/* Coordonnées */}
                <Card variant="elevated" padding="lg">
                  <Stack spacing="md">
                    <Heading as="h5" size="h6" className="mb-ds-2">
                      Nous trouver
                    </Heading>

                    <Stack spacing="sm">
                      <Flex gap="3" align="start">
                        <span className="text-ds-primary mt-1">📍</span>
                        <Stack spacing="xs">
                          <Text weight="semibold" size="sm">
                            Adresse
                          </Text>
                          <Text size="sm" color="muted">
                            48190 Bagnols-les-Bains
                            <br />
                            Lozère, France
                          </Text>
                        </Stack>
                      </Flex>

                      <Flex gap="3" align="start">
                        <span className="text-ds-primary mt-1">📞</span>
                        <Stack spacing="xs">
                          <Text weight="semibold" size="sm">
                            Téléphone
                          </Text>
                          <Text size="sm" color="muted">
                            +33 4 66 47 60 00
                          </Text>
                        </Stack>
                      </Flex>

                      <Flex gap="3" align="start">
                        <span className="text-ds-primary mt-1">✉️</span>
                        <Stack spacing="xs">
                          <Text weight="semibold" size="sm">
                            Email
                          </Text>
                          <Text size="sm" color="muted">
                            contact@hoteldupont.fr
                          </Text>
                        </Stack>
                      </Flex>
                    </Stack>
                  </Stack>
                </Card>

                {/* Horaires */}
                <Card variant="soft" padding="lg">
                  <Stack spacing="sm">
                    <Heading as="h6" size="h6" className="mb-ds-2">
                      Horaires
                    </Heading>
                    <Flex justify="between">
                      <Text size="sm" color="muted">
                        Réception
                      </Text>
                      <Text size="sm" weight="medium">
                        7h - 22h
                      </Text>
                    </Flex>
                    <Flex justify="between">
                      <Text size="sm" color="muted">
                        Restaurant
                      </Text>
                      <Text size="sm" weight="medium">
                        12h - 14h · 19h - 21h
                      </Text>
                    </Flex>
                  </Stack>
                </Card>

                {/* Distance thermes */}
                <Card
                  variant="outlined"
                  padding="md"
                  className="!bg-ds-primary/5 border-ds-primary/30"
                >
                  <Flex gap="3" align="center">
                    <div className="w-12 h-12 bg-ds-primary/10 rounded-full flex items-center justify-center text-xl">
                      🏥
                    </div>
                    <div className="flex-1">
                      <Text weight="semibold" size="sm">
                        À 200m des thermes
                      </Text>
                      <Text size="sm" color="muted">
                        2 min à pied
                      </Text>
                    </div>
                  </Flex>
                </Card>
              </Stack>
            </Grid>

            {/* Map - Plus grand */}
            <Card
              variant="elevated"
              padding="none"
              className="overflow-hidden h-[400px] max-w-6xl mx-auto shadow-ds-2xl"
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.6461%2C44.5198%2C3.6561%2C44.5298&layer=mapnik&marker=44.5248%2C3.6511"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Localisation de Bagnols-les-Bains"
              />
            </Card>
          </Stack>
        </Container>
      </section>

      {/* Footer - Simplifié */}
      <footer className="bg-ds-card border-t border-ds-border py-12">
        <Container size="lg">
          <Stack spacing="lg">
            <Grid cols={1} gap="xl" className="md:grid-cols-4">
              <div className="md:col-span-2">
                <Flex align="center" gap="3" className="mb-ds-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ds-primary to-ds-accent rounded-ds-lg flex items-center justify-center shadow-ds-md">
                    <span className="text-ds-primary-foreground font-ds-bold text-ds-xl">
                      H
                    </span>
                  </div>
                  <Heading as="h5" size="h5">
                    Hôtel du Pont
                  </Heading>
                </Flex>
                <Text size="sm" color="muted" className="max-w-md">
                  Votre havre de paix au cœur des Cévennes, à 200m des thermes
                  de Bagnols-les-Bains.
                </Text>
              </div>

              <Stack spacing="sm">
                <Text weight="semibold" size="sm" className="mb-ds-2">
                  Navigation
                </Text>
                <Text
                  as="button"
                  size="sm"
                  color="muted"
                  className="hover:text-ds-primary cursor-pointer text-left transition-colors"
                  onClick={() => scrollToSection('accueil')}
                >
                  Accueil
                </Text>
                <Text
                  as="button"
                  size="sm"
                  color="muted"
                  className="hover:text-ds-primary cursor-pointer text-left transition-colors"
                  onClick={() => scrollToSection('presentation')}
                >
                  Découvrir
                </Text>
                <Text
                  as="button"
                  size="sm"
                  color="muted"
                  className="hover:text-ds-primary cursor-pointer text-left transition-colors"
                  onClick={() => scrollToSection('services')}
                >
                  Tarifs
                </Text>
              </Stack>

              <Stack spacing="sm">
                <Text weight="semibold" size="sm" className="mb-ds-2">
                  Contact
                </Text>
                <Text size="sm" color="muted">
                  📞 +33 4 66 47 60 00
                </Text>
                <Text size="sm" color="muted">
                  ✉️ contact@hoteldupont.fr
                </Text>
                <Text size="sm" color="muted">
                  📍 48190 Bagnols-les-Bains
                </Text>
              </Stack>
            </Grid>

            <div className="pt-6 border-t border-ds-border">
              <Flex
                justify="between"
                align="center"
                className="flex-col sm:flex-row gap-4"
              >
                <Text size="sm" color="muted">
                  © 2024 Hôtel du Pont · Tous droits réservés
                </Text>
                <Flex gap="6">
                  <Text
                    size="sm"
                    color="muted"
                    className="hover:text-ds-primary cursor-pointer transition-colors"
                  >
                    Mentions légales
                  </Text>
                  <Text
                    size="sm"
                    color="muted"
                    className="hover:text-ds-primary cursor-pointer transition-colors"
                  >
                    CGV
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
