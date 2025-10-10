import React from 'react'
import { Section } from '@/components/layout/section/Section'
import { Stack } from '@/components/layout/stack/Stack'
import { Heading } from '@/components/ui/typography/Heading'
import { Text } from '@/components/ui/typography/Text'
import { Card } from '@/components/ui/card/Card'

/**
 * 🧭 DS — Section "Nos valeurs"
 * Utilise PrimeIcons pour les icônes, cohérence visuelle et tokens DS.
 */
export default function ValuesSection() {
  const values = [
    {
      id: 1,
      icon: 'pi pi-hammer',
      title: 'Fait Main',
      description:
        'Chaque produit est façonné avec passion par nos artisans. Un savoir-faire transmis de génération en génération pour garantir une qualité exceptionnelle.'
    },
    {
      id: 2,
      icon: 'pi pi-leaf',
      title: 'Durable & Éco-responsable',
      description:
        'Nous sélectionnons des matériaux durables et éthiques. Notre engagement pour la planète se reflète dans chaque étape de production.'
    },
    {
      id: 3,
      icon: 'pi pi-star-fill',
      title: 'Qualité Premium',
      description:
        'Nous ne faisons aucun compromis sur la qualité. Chaque pièce est rigoureusement contrôlée pour vous offrir le meilleur.'
    }
  ]

  return (
    <Section bg="app" size="xl" vertical="xl">
      <Stack gap="3xl">
        {/* Bloc principal avec image + texte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-ds-3xl items-center">
          {/* Image artisan */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-ds-lg shadow-ds-lg">
              <img
                src="https://picsum.photos/700/600?random=20"
                alt="Artisan au travail"
                className="w-full h-[500px] object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ds-black/60 via-transparent to-transparent"></div>

              {/* Badge sur l’image */}
              <div className="absolute bottom-ds-lg left-ds-lg right-ds-lg">
                <div className="bg-ds-white/95 backdrop-blur-sm rounded-ds-lg p-ds-lg">
                  <Stack direction="horizontal" gap="md" align="center">
                    <div className="bg-ds-accent-primary rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <Text size="xl" weight="bold" className="text-ds-white">
                        25+
                      </Text>
                    </div>
                    <Stack gap="xs">
                      <Text weight="semibold" size="lg">
                        Années d'expertise
                      </Text>
                      <Text size="sm" variant="muted">
                        Un savoir-faire reconnu
                      </Text>
                    </Stack>
                  </Stack>
                </div>
              </div>
            </div>
          </div>

          {/* Texte descriptif */}
          <Stack gap="lg" className="order-1 lg:order-2">
            <div className="inline-block">
              <Text
                size="sm"
                weight="semibold"
                className="bg-ds-accent-primary bg-opacity-10 text-ds-accent-primary px-ds-md py-ds-xs rounded-ds-lg uppercase tracking-tight"
              >
                Nos Valeurs
              </Text>
            </div>

            <Heading level={2} weight="bold">
              L'Excellence Artisanale au Cœur de Notre Métier
            </Heading>

            <Text size="lg" variant="muted" className="leading-ds-relaxed">
              Depuis plus de 25 ans, nous perpétuons un savoir-faire unique.
              Chaque produit est le fruit d'un travail minutieux, réalisé à la
              main par nos artisans passionnés. Nous croyons en la qualité, la
              durabilité et le respect de l'environnement.
            </Text>

            <Stack gap="sm" className="pt-ds-md">
              {[
                '✓ Fabrication 100% artisanale',
                '✓ Matériaux durables et éthiques',
                '✓ Contrôle qualité rigoureux',
                '✓ Garantie satisfaction 30 jours'
              ].map((item, index) => (
                <Stack
                  key={index}
                  direction="horizontal"
                  gap="sm"
                  align="center"
                >
                  <div className="w-6 h-6 bg-ds-state-success rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="pi pi-check text-ds-white text-[0.8rem]" />
                  </div>
                  <Text size="md" weight="medium">
                    {item.substring(2)}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </div>

        {/* Grille des 3 valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-ds-lg pt-ds-2xl">
          {values.map((value) => (
            <Card
              key={value.id}
              variant="elevated"
              hoverable
              padding="lg"
              className="text-center"
            >
              <Stack gap="md" align="center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-ds-accent-primary">
                  <i className={`${value.icon} text-3xl`} />
                </div>

                <Heading level={3} weight="semibold" align="center">
                  {value.title}
                </Heading>

                <Text
                  size="md"
                  variant="muted"
                  align="center"
                  className="leading-ds-relaxed"
                >
                  {value.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </div>
      </Stack>
    </Section>
  )
}
