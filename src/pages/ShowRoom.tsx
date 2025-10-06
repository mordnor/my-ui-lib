import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button/Button'
import { Card } from '@/components/ui/card/Card'
import { applyTheme } from '@theme/applyTheme'

export default function ShowRoom() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    applyTheme(next ? 'dark' : 'light')
  }

  return (
    <div className="bg-background text-text min-h-screen transition-colors duration-700">
      {/* 🌙 NAVBAR */}
      <nav className="bg-surface/70 border-border sticky top-0 z-50 flex items-center justify-between border-b px-10 py-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <i className="pi pi-bolt text-primary text-2xl" />
          <span className="text-xl font-bold tracking-tight">
            🎨 FlowSync Design System
          </span>
        </div>
        <Button
          onClick={toggleTheme}
          label={darkMode ? '☀️' : '🌙'}
          variant="outline"
          dsSize="sm"
        />
      </nav>

      {/* 🚀 HERO */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center md:px-20">
        <div className="from-primary/20 via-background to-background absolute inset-0 bg-gradient-to-br" />
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-4 text-5xl font-extrabold"
        >
          Composants & Thèmes <span className="text-primary">FlowSync DS</span>
        </motion.h1>
        <p className="text-muted-text relative z-10 max-w-2xl text-lg">
          Un Design System moderne basé sur tokens, Tailwind et PrimeReact.
        </p>
      </section>

      {/* 🔘 BUTTONS – VARIANTS & STATES */}
      <section className="px-10 py-20 text-center">
        <h2 className="mb-10 text-3xl font-semibold">
          Boutons – Variantes & États
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Outline" variant="outline" />
          <Button label="Success" variant="success" />
          <Button label="Danger" variant="danger" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Button label="Hover" variant="primary" className="hover:scale-105" />
          <Button label="Disabled" variant="primary" disabled />
          <Button label="Loading" variant="primary" loading />
          <Button label="Avec icône" icon="pi pi-heart" variant="primary" />
        </div>

        <h3 className="mb-8 mt-16 text-2xl font-semibold">Tailles</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <Button label="Small" dsSize="sm" />
          <Button label="Medium" dsSize="md" />
          <Button label="Large" dsSize="lg" />
        </div>
      </section>

      {/* 🧱 CARDS – VARIANTS & LAYOUTS */}
      <section className="bg-surface/70 border-border border-t px-10 py-24 text-center">
        <h2 className="mb-12 text-3xl font-semibold">
          Cartes – Variantes & Layouts
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1️⃣ Card complète */}
          <Card
            variant="default"
            hoverable
            title="Sac Atelier"
            subTitle="Cuir pleine fleur"
            header="https://picsum.photos/400/300?random=1"
            footer={
              <div className="flex items-center justify-between">
                <span className="text-primary text-lg font-semibold">
                  129 €
                </span>
                <Button label="Ajouter" variant="primary" dsSize="sm" />
              </div>
            }
          >
            <p className="text-muted-text text-left">
              Fabriqué à la main, coutures sellier et doublure en coton bio.
            </p>
          </Card>

          {/* 2️⃣ Card minimaliste */}
          <Card
            variant="outlined"
            hoverable
            title="Sac minimaliste"
            subTitle="Édition limitée"
            header={
              <div className="h-40 w-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)]" />
            }
          >
            <p className="text-muted-text text-left">
              Élégant et discret. Idéal pour le quotidien.
            </p>
          </Card>

          {/* 3️⃣ Card image + hover */}
          <Card
            variant="elevated"
            hoverable
            header="https://picsum.photos/400/300?random=2"
            title="Sac de voyage"
            subTitle="Weekender 48h"
          >
            <p className="text-muted-text text-left">
              Léger, spacieux et pratique. Parfait pour les escapades du
              week-end.
            </p>
          </Card>
        </div>
      </section>

      {/* 👜 CARDS + BUTTONS COMBINÉS */}
      <section className="bg-background border-border border-t px-10 py-24">
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Grille de produits
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                hoverable
                variant="elevated"
                title={`Sac ${i + 1}`}
                header={`https://picsum.photos/400/300?random=${i + 3}`}
                footer={
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">129 €</span>
                    <Button
                      label="Acheter"
                      variant="primary"
                      dsSize="sm"
                      className="shadow-md"
                    />
                  </div>
                }
              >
                <p className="text-muted-text text-left">
                  Pièce unique, fabriquée main avec des matériaux
                  écoresponsables.
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✍️ TYPOGRAPHY */}
      <section className="px-10 py-24 text-center">
        <h2 className="mb-12 text-3xl font-semibold">Typographie</h2>
        <div className="space-y-6">
          <p className="text-5xl font-extrabold">Heading 1</p>
          <p className="text-3xl font-semibold">Heading 2</p>
          <p className="text-xl font-medium">Heading 3</p>
          <p className="text-base">Body text — Regular</p>
          <p className="text-muted-text text-sm">Muted text — Subtle</p>
        </div>
      </section>

      {/* ⚡ FOOTER */}
      <footer className="bg-background border-border border-t py-10 text-center">
        <p className="text-muted-text">
          © {new Date().getFullYear()} FlowSync DS — Thème{' '}
          {darkMode ? 'Sombre' : 'Clair'} ⚡
        </p>
      </footer>
    </div>
  )
}
