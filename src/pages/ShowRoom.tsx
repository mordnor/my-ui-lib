import React, { useState } from 'react'
import { motion } from 'framer-motion'

// DS
import { Button } from '@/components/ui/button/Button'
import { Card } from '@/components/ui/card/Card'
import { Heading } from '@/components/ui/typography/Heading'
import { Text } from '@/components/ui/typography/Text'

// Thème
import { applyTheme } from '@theme/applyTheme'

export default function LandingAtelierNomade() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    applyTheme(next ? 'dark' : 'light')
  }

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
    <div className="bg-background-app text-text-primary min-h-screen transition-colors duration-700 font-sans">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-background-surface/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-space-xl py-space-md">
          <div className="flex items-center gap-space-sm">
            <i className="pi pi-bolt text-accent-primary text-xl" />
            <span className="font-semibold tracking-tight">Atelier Nomade</span>
          </div>
          <Button
            onClick={toggleTheme}
            label={darkMode ? '☀️' : '🌙'}
            variant="outline"
            dsSize="sm"
          />
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
      radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%),
      url('https://picsum.photos/1600/900?random=115')
    `
        }}
      >
        <div className="container mx-auto px-space-xl py-space-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text
              size="sm"
              className="uppercase tracking-widest text-white mb-space-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            >
              Atelier Nomade
            </Text>
            <Heading
              level={1}
              weight="bold"
              className="text-5xl sm:text-6xl mb-space-md text-white leading-tight"
            >
              L’art du cuir,{' '}
              <span className="text-accent-primary">fait main.</span>
            </Heading>
            <Text
              size="lg"
              className="text-white mb-space-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Des pièces durables et élégantes, confectionnées avec passion dans
              notre atelier français.
            </Text>
            <Button
              label="Découvrir la collection"
              variant="primary"
              dsSize="lg"
              className="shadow-lg hover:scale-105 transition-transform"
            />
          </motion.div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-background-surface">
        <div className="container mx-auto px-space-xl py-space-3xl">
          <Heading
            level={2}
            className="text-3xl font-semibold text-center mb-space-3xl"
          >
            L’essence de notre savoir-faire
          </Heading>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-2xl">
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
                className="rounded-xl bg-background-app p-space-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center mb-space-md">
                  <i className={`${v.icon} text-xl`} />
                </div>
                <Heading
                  level={3}
                  className="text-xl font-semibold mb-space-xs"
                >
                  {v.title}
                </Heading>
                <Text variant="muted">{v.text}</Text>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section>
        <div className="container mx-auto px-space-xl py-space-3xl">
          <Heading
            level={2}
            className="text-3xl font-semibold text-center mb-space-3xl"
          >
            Nos créations
          </Heading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-2xl">
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
                        className="font-semibold"
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
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section className="bg-background-surface">
        <div className="container mx-auto px-space-xl py-space-3xl">
          <Heading
            level={2}
            className="text-3xl font-semibold text-center mb-space-3xl"
          >
            Témoignages de nos clients
          </Heading>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-2xl">
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
                  className="p-space-xl text-left shadow-sm hover:shadow-md transition-shadow bg-background-app rounded-xl"
                >
                  <div className="flex items-center gap-space-md mb-space-md">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <Text size="md" className="font-semibold">
                        {t.name}
                      </Text>
                      <Text variant="muted" size="sm">
                        {t.role}
                      </Text>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-space-sm text-accent-primary">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <i key={j} className="pi pi-star-fill text-sm" />
                    ))}
                  </div>
                  <Text className="text-text-secondary leading-relaxed italic">
                    “{t.quote}”
                  </Text>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white py-space-6xl px-space-6xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url('https://picsum.photos/1600/800?random=42')"
        }}
      >
        <div className="relative z-10 bg-black/50 backdrop-blur-sm p-space-6 rounded-lg shadow-lg max-w-2xl">
          <h2 className="text-4xl font-bold mb-space-md text-white">
            Rejoignez{' '}
            <span className="text-accent-primary">l’aventure Nomade</span>
          </h2>
          <p className="text-gray-100 mb-space-2xl drop-shadow-md">
            Des sacs faits main, pensés pour durer et se patiner avec vous.
          </p>
          <div className="flex justify-center gap-space-3 flex-wrap">
            <Button
              label="Découvrir la collection"
              variant="primary"
              dsSize="lg"
              className="shadow-lg hover:scale-105 transition-transform"
            />
            <Button label="Nous contacter" variant="outline" dsSize="lg" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background-surface border-t border-border">
        <div className="container mx-auto px-space-xl py-space-lg text-center">
          <Text variant="muted" size="sm">
            © {new Date().getFullYear()} Atelier Nomade — Créé avec passion en
            France 🇫🇷
          </Text>
        </div>
      </footer>
    </div>
  )
}
