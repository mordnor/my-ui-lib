import React, { useEffect, useState } from "react"
import { applyTheme, getCurrentTheme, ThemeName } from "@/theme/applyTheme"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Grid } from "@/components/layout/grid"
import { Stack } from "@/components/layout/stack"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heading, Text } from "@/components/ui/typography"

const THEMES: ThemeName[] = ["light", "dark"]
const THEME_ICONS: Record<ThemeName, string> = { light: "☀️", dark: "🌙" }

export default function LandingPage() {
  const [theme, setTheme] = useState<ThemeName>("light")

  useEffect(() => {
    const current = getCurrentTheme()
    setTheme(current)
    applyTheme(current)
  }, [])

  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme)
    const nextTheme = THEMES[(currentIndex + 1) % THEMES.length]
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <div className="bg-ds-background-app text-ds-text-primary font-sans">
      {/* 🔝 NAVBAR avec toggle de thème */}
      <nav className="sticky top-0 z-50 bg-ds-background-surface/80 border-b border-ds-border-default backdrop-blur-md">
        <Container size="full" className="py-ds-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-ds-sm">
              <i className="pi pi-cube text-ds-accent-primary text-ds-xl" />
              <span className="font-ds-semibold tracking-tight">DS Landing</span>
            </div>

            <div className="flex items-center gap-ds-sm">
              <Button variant="outline" dsSize="sm">Produits</Button>
              <Button variant="outline" dsSize="sm">Prix</Button>
              <Button variant="outline" dsSize="sm">Docs</Button>
              <Button variant="outline" dsSize="sm" onClick={toggleTheme}>
                {THEME_ICONS[theme]}
              </Button>
            </div>
          </div>
        </Container>
      </nav>

      {/* 🦸 HERO (texte + image) */}
      <Section bg="surface" vertical="xl" noContainer>
        <Container size="xl">
          <Grid cols={{ base: 1, md: 2 }} gap="xl" className="items-center">
            {/* Texte */}
            <Stack direction="vertical" gap="lg">
              <Heading level={1} className="text-ds-text-primary text-ds-3xl leading-ds-tight">
                Construis des interfaces élégantes <br /> avec ton Design System ✨
              </Heading>
              <Text size="lg" variant="muted" className="max-w-[50ch]">
                Crée des expériences cohérentes, modernes et accessibles grâce à
                une bibliothèque de composants tokenisée.
              </Text>
              <Stack direction="horizontal" gap="md">
                <Button variant="brand" dsSize="lg">🚀 Commencer</Button>
                <Button variant="outline" dsSize="lg">Voir la démo</Button>
              </Stack>
            </Stack>

            {/* Image */}
            <div className="relative">
              {/* petit fond gradient soft derrière l’image */}
              <div className="absolute -inset-4 rounded-ds-lg bg-ds-gradient opacity-ds-overlay blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop"
                alt="Aperçu produit"
                className="relative w-full rounded-ds-lg shadow-ds-lg border border-ds-border-default object-cover"
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 💎 FEATURES */}
      <Section bg="app" vertical="xl" noContainer>
        <Container size="xl">
          <Stack direction="vertical" gap="2xl" fullCenter>
            <Heading level={2}>Pourquoi choisir ce Design System ?</Heading>

            <Grid cols={{ base: 1, md: 3, lg: 4 }} gap="xl">
              {[
                { icon: "pi pi-bolt", title: "Performance", text: "Optimisé avec des tokens réactifs. Rendering fluide." },
                { icon: "pi pi-palette", title: "Thémable", text: "Change de thème instantanément (clair / sombre)." },
                { icon: "pi pi-heart", title: "Cohérence", text: "Spacing, typo, couleurs et motion 100 % DS." },
              ].map((f) => (
                <Card key={f.title} variant="elevated" hoverable dsTitle={f.title}>
                  <Stack direction="vertical" gap="sm" align="center">
                    <i className={`${f.icon} text-ds-xl text-ds-accent-primary`} />
                    <Text variant="muted" align="center">{f.text}</Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* 💬 TESTIMONIALS */}
      <Section bg="surface" vertical="xl" noContainer>
        <Container size="xl">
          <Stack direction="vertical" gap="2xl" fullCenter>
            <Heading level={2}>Ils l’utilisent déjà 💬</Heading>

            <Grid cols={{ base: 1, md: 3, lg:2 }} gap="lg">
              {[
                {
                  name: "Dorian P.",
                  role: "Frontend Developer",
                  img: "https://i.pravatar.cc/150?img=12",
                  text: "Ce DS m’a permis de créer des UI ultra propres. J’adore l’approche token-first 💚",
                },
                {
                  name: "Sarah L.",
                  role: "UX Designer",
                  img: "https://i.pravatar.cc/150?img=32",
                  text: "Les composants sont cohérents, modulaires et hyper stylés. Le thème dark est top !",
                },
                {
                  name: "Julien R.",
                  role: "Tech Lead",
                  img: "https://i.pravatar.cc/150?img=45",
                  text: "Enfin un DS facile à intégrer, sans compromis sur le style.",
                },
              ].map((u) => (
                <Card key={u.name} variant="subtle" hoverable className="text-center">
                  <Stack direction="vertical" gap="md" fullCenter>
                    <img
                      src={u.img}
                      alt={u.name}
                      className="w-20 h-20 rounded-full object-cover shadow-ds-sm"
                    />
                    <Text size="sm" variant="muted" className="italic">“{u.text}”</Text>
                    <Text weight="semibold">{u.name}</Text>
                    <Text variant="muted" size="sm">{u.role}</Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* 🎯 CTA (texte + image) */}
      <Section
        bg="inverse"
        vertical="xl"
        noContainer
        className="relative overflow-hidden"
      >
        {/* 🖼️ Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://picsum.photos/1920/1080?grayscale')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* 🌓 Overlay gradient pour contraste */}
        <div className="absolute inset-0 bg-ds-gradient opacity-70 mix-blend-multiply" />

        {/* 🧱 Contenu */}
        <Container size="xl" className="relative z-10">
          <Stack direction="vertical" gap="lg" fullCenter className="text-center">
            <Heading
              level={2}
              className="text-ds-text-inverse leading-ds-tight drop-shadow-md"
            >
              Prêt à créer quelque chose d’incroyable ?
            </Heading>

            <Text
              variant="default"
              size="lg"
              className="text-ds-text-inverse/90 max-w-[60ch] mx-auto drop-shadow-sm"
            >
              Rejoins la nouvelle ère du design systémique — réutilisable,
              performant et beau.
            </Text>

            <Stack direction="horizontal" gap="md" justify="center">
              <Button variant="gradient" dsSize="lg">
                🚀 Démarrer maintenant
              </Button>
              <Button variant="outline" dsSize="lg">
                En savoir plus
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* 📜 FOOTER */}
      <footer className="bg-ds-background-surface border-t border-ds-border-default py-ds-lg text-center text-ds-text-secondary text-ds-sm">
        <Text variant="muted">
          © {new Date().getFullYear()} Design System — Fait avec ❤️ par ton équipe Frontend.
        </Text>
      </footer>
    </div>
  )
}
