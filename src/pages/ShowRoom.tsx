import React, { useState } from 'react'
import { motion } from 'framer-motion'

// 🧱 DS Components
import { Button } from '@/components/ui/button/Button'
import { Card } from '@/components/ui/card/Card'
import { Heading } from '@/components/ui/typography/Heading'
import { Text } from '@/components/ui/typography/Text'
import { Container } from '@/components/layout/container/Container'
import { Section } from '@/components/layout/section/Section'
import { Grid } from '@/components/layout/grid/Grid'

// 🎨 Thème
import { applyTheme } from '@theme/applyTheme'

export default function LandingAtelierNomade() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    applyTheme(next ? 'dark' : 'light')
  }

  // --- Données ---
  const products = [
    {
      title: 'Sac Atelier',
      subtitle: 'Cuir pleine fleur',
      img: 'https://picsum.photos/seed/atelier/800/520',
      price: '139 €'
    },
    {
      title: 'Sac Minimaliste',
      subtitle: 'Édition limitée',
      img: 'https://picsum.photos/seed/minimal/800/520',
      price: '149 €'
    },
    {
      title: 'Sac de Voyage',
      subtitle: 'Weekender 48h',
      img: 'https://picsum.photos/seed/weekender/800/520',
      price: '179 €'
    }
  ]

  const testimonials = [
    {
      name: 'Camille R.',
      role: 'Paris',
      img: 'https://picsum.photos/seed/client1/96/96',
      rating: 5,
      quote:
        'Un savoir-faire exceptionnel. Le cuir est souple, les finitions sont d’une précision incroyable. Une pièce d’artisanat à garder longtemps.'
    },
    {
      name: 'Martin L.',
      role: 'Lyon',
      img: 'https://picsum.photos/seed/client2/96/96',
      rating: 5,
      quote:
        'Mon sac “Atelier” vieillit magnifiquement bien. On sent la qualité dès la première utilisation. L’attention au détail est remarquable.'
    },
    {
      name: 'Anaïs D.',
      role: 'Bordeaux',
      img: 'https://picsum.photos/seed/client3/96/96',
      rating: 4,
      quote:
        'Service client impeccable et produit d’exception. J’adore le toucher du cuir et l’élégance du design minimaliste.'
    }
  ]

  return (
    <div className="bg-ds-bg-app text-ds-text-primary min-h-screen font-sans transition-colors duration-700">
      {/* 🌙 NAV */}
      <nav className="bg-ds-bg-surface/80 border-ds-border-default sticky top-0 z-50 border-b backdrop-blur-md">
        <Container
          size="xl"
          className="py-ds-space-md flex items-center justify-between"
        >
          <div className="gap-ds-space-sm flex items-center">
            <i className="pi pi-bolt text-ds-accent-primary text-xl" />
            <span className="font-ds-font-weight-semibold tracking-tight">
              Atelier Nomade
            </span>
          </div>
          <Button
            onClick={toggleTheme}
            label={darkMode ? '☀️' : '🌙'}
            variant="outline"
            dsSize="sm"
          />
        </Container>
      </nav>

      {/* 🏞 HERO */}
      <Section
        bg="inverse"
        vertical="xl"
        className="relative bg-cover bg-center bg-no-repeat text-center"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.85) 100%),
            url('https://picsum.photos/1600/900?random=115')
          `
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            size="sm"
            className="mb-ds-space-md uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          >
            Atelier Nomade
          </Text>
          <Heading
            level={1}
            weight="bold"
            className="mb-ds-space-md text-5xl leading-tight text-white sm:text-6xl"
          >
            L’art du cuir,{' '}
            <span className="text-ds-accent-primary">fait main.</span>
          </Heading>
          <Text
            size="lg"
            className="mb-ds-space-2xl mx-auto max-w-2xl leading-relaxed text-white"
          >
            Des pièces durables et élégantes, confectionnées avec passion dans
            notre atelier français.
          </Text>
          <Button
            label="Découvrir la collection"
            variant="primary"
            dsSize="lg"
            className="shadow-ds-lg transition-transform hover:scale-105"
          />
        </motion.div>
      </Section>

      {/* ⚒️ VALEURS */}
      <Section bg="surface" vertical="lg">
        <Heading
          level={2}
          className="mb-ds-space-3xl font-ds-font-weight-semibold text-left text-3xl"
        >
          L’essence de notre savoir-faire
        </Heading>

        <Grid cols={{ base: 1, sm: 3 }} gap="3xl">
          {[
            {
              icon: 'pi pi-hammer',
              title: 'Fait main',
              text: 'Chaque sac est une pièce unique, façonnée avec soin par nos artisans.'
            },
            {
              icon: 'pi pi-shield',
              title: 'Durable',
              text: 'Un cuir pleine fleur, tannage végétal, coutures solides — conçus pour durer.'
            },
            {
              icon: 'pi pi-star',
              title: 'Élégant',
              text: 'Des lignes épurées et intemporelles qui subliment chaque tenue.'
            }
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="bg-ds-bg-app p-ds-space-2xl shadow-ds-sm hover:shadow-ds-md rounded-xl transition-shadow"
            >
              <div className="bg-ds-accent-primary/10 text-ds-accent-primary mb-ds-space-md flex size-14 items-center justify-center rounded-full">
                <i className={`${v.icon} text-xl`} />
              </div>
              <Heading
                level={3}
                className="mb-ds-space-xs font-ds-font-weight-semibold text-xl"
              >
                {v.title}
              </Heading>
              <Text variant="muted">{v.text}</Text>
            </motion.div>
          ))}
        </Grid>
      </Section>

      {/* 👜 PRODUITS */}
      <Section vertical="lg">
        <Heading
          level={2}
          className="mb-ds-space-3xl font-ds-font-weight-semibold text-left text-3xl"
        >
          Nos créations
        </Heading>

        <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="3xl">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card
                hoverable
                variant="elevated"
                title={p.title}
                subTitle={p.subtitle}
                header={p.img}
                footer={
                  <div className="flex items-center justify-between">
                    <Text
                      variant="success"
                      size="lg"
                      className="font-ds-font-weight-semibold"
                    >
                      {p.price}
                    </Text>
                    <Button label="Ajouter" variant="primary" dsSize="sm" />
                  </div>
                }
              >
                <Text variant="muted">
                  Un compagnon intemporel pour vos journées et escapades.
                </Text>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Section>

      {/* 💬 TÉMOIGNAGES */}
      <Section bg="surface" vertical="lg">
        <Heading
          level={2}
          className="mb-ds-space-3xl font-ds-font-weight-semibold text-left text-3xl"
        >
          Témoignages de nos clients
        </Heading>

        <Grid cols={{ base: 1, sm: 3 }} gap="3xl">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card
                variant="outlined"
                className="p-ds-space-xl bg-ds-bg-app shadow-ds-sm hover:shadow-ds-md rounded-xl text-left transition-shadow"
              >
                <div className="gap-ds-space-md mb-ds-space-md flex items-center">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <Text size="md" className="font-ds-font-weight-semibold">
                      {t.name}
                    </Text>
                    <Text variant="muted" size="sm">
                      {t.role}
                    </Text>
                  </div>
                </div>
                <div className="mb-ds-space-sm text-ds-accent-primary flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <i key={j} className="pi pi-star-fill text-sm" />
                  ))}
                </div>
                <Text className="text-ds-text-secondary italic leading-relaxed">
                  “{t.quote}”
                </Text>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Section>

      {/* 🎯 CTA */}
      <Section
        bg="inverse"
        vertical="xl"
        noContainer
        className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url('https://picsum.photos/1600/800?random=42')"
        }}
      >
        <div className="p-ds-space-md sm:p-ds-space-4xl bg-ds-bg-inverse/60 shadow-ds-lg relative z-10 w-full max-w-md rounded-lg backdrop-blur-sm sm:max-w-2xl">
          <h2 className="mb-ds-space-md font-ds-font-weight-bold text-3xl text-white sm:text-4xl">
            Rejoignez{' '}
            <span className="text-ds-accent-primary">l’aventure Nomade</span>
          </h2>
          <p className="mb-ds-space-2xl text-base text-white/90 drop-shadow-md sm:text-lg">
            Des sacs faits main, pensés pour durer et se patiner avec vous.
          </p>
          <div className="gap-ds-space-3 flex flex-col items-center justify-center sm:flex-row">
            <Button
              label="Découvrir la collection"
              variant="primary"
              dsSize="md"
              className="shadow-ds-lg w-full transition-transform hover:scale-105 sm:w-auto"
            />
            <Button
              label="Nous contacter"
              variant="outline"
              dsSize="md"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </Section>

      {/* ⚓ FOOTER */}
      <footer className="bg-ds-bg-surface border-ds-border-default border-t">
        <Container size="xl" className="py-ds-space-lg text-center">
          <Text variant="muted" size="sm">
            © {new Date().getFullYear()} Atelier Nomade — Créé avec passion en
            France 🇫🇷
          </Text>
        </Container>
      </footer>
    </div>
  )
}
