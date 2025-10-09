import React, { useEffect, useState } from "react"

// 🎨 DS — Thèmes & composants
import { applyTheme, getCurrentTheme, ThemeName } from "../theme/applyTheme"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Grid } from "@/components/layout/grid"

const THEMES: ThemeName[] = ["light", "dark"]

const THEME_ICONS: Record<ThemeName, string> = {
  light: "☀️",
  dark: "🌙",
}

export default function ComponentsShowcase() {
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
    <div className="bg-ds-background-app text-ds-text-primary min-h-screen font-sans transition-colors duration-ds-slow ease-ds-in-out">
      {/* 🌙 NAVBAR */}
      <nav className="bg-ds-background-surface/80 border-b border-ds-border-default sticky top-0 z-50 backdrop-blur-md">
        <Container
          size="full"
          className="py-ds-md flex items-center justify-between"
        >
          <div className="flex items-center gap-ds-sm">
            <i className="pi pi-cube text-ds-accent-primary text-xl" />
            <span className="font-ds-semibold tracking-tight">
              DS Components Showcase
            </span>
          </div>

          <Button
            onClick={toggleTheme}
            label={THEME_ICONS[theme]}
            variant="outline"
            dsSize="sm"
            title={`Thème actuel : ${theme}`}
          />
        </Container>
      </nav>

      {/* 🎨 BUTTONS */}
      <Section bg="surface" vertical="xl">
        <Container size="xl">
          <Heading
            level={2}
            className="text-center mb-ds-2xl text-ds-text-primary"
          >
            🎨 Buttons
          </Heading>

          <div className="flex flex-wrap justify-center gap-ds-md">
            {["primary", "secondary", "outline", "success", "danger", "brand", "gradient"].map(
              (variant) => (
                <Button key={variant} variant={variant as any}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              )
            )}
          </div>
        </Container>
      </Section>

      {/* 📏 BUTTON SIZES */}
      <Section bg="app" vertical="xl">
        <Container size="xl">
          <Heading
            level={2}
            className="text-center mb-ds-2xl text-ds-text-primary"
          >
            📏 Button Sizes
          </Heading>

          <div className="flex justify-center flex-wrap gap-ds-md">
            <Button dsSize="sm">Small</Button>
            <Button dsSize="md">Medium</Button>
            <Button dsSize="lg">Large</Button>
          </div>
        </Container>
      </Section>

      {/* ⭐ BUTTONS WITH ICONS */}
      <Section bg="surface" vertical="xl">
        <Container size="xl">
          <Heading
            level={2}
            className="text-center mb-ds-2xl text-ds-text-primary"
          >
            ⭐ Buttons with Icons
          </Heading>

          <div className="flex justify-center flex-wrap gap-ds-md">
            <Button icon="pi pi-bolt" variant="primary">Bolt</Button>
            <Button icon="pi pi-star" variant="secondary">Star</Button>
            <Button icon="pi pi-cog" variant="outline">Cog</Button>
            <Button icon="pi pi-heart" variant="brand">Love</Button>
            <Button icon="pi pi-send" variant="gradient">Send</Button>
          </div>
        </Container>
      </Section>

      {/* ⏳ STATES */}
      <Section bg="app" vertical="xl">
        <Container size="xl">
          <Heading
            level={2}
            className="text-center mb-ds-2xl text-ds-text-primary"
          >
            ⏳ States (Loading & Disabled)
          </Heading>

          <div className="flex justify-center flex-wrap gap-ds-md">
            <Button variant="primary" loading>
              Loading
            </Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </div>
        </Container>
      </Section>

      {/* 🧱 CARDS VARIANTS */}
      <Section bg="surface" vertical="xl">
        <Container size="xl">
          <Heading
            level={2}
            className="text-center mb-ds-2xl text-ds-text-primary"
          >
            🧱 Cards Variants
          </Heading>

          {/* 💎 Grid DS */}
          <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="lg" justify="center" align="start">
            {["default", "outlined", "elevated", "subtle", "brand", "gradient"].map(
              (variant) => (
                <Card
                  key={variant}
                  variant={variant as any}
                  hoverable
                  dsTitle={`Card ${variant}`}
                  subTitle="Sous-titre exemple"
                  footer={
                    <div className="flex justify-end">
                      <Button dsSize="sm" variant="outline">
                        Action
                      </Button>
                    </div>
                  }
                >
                  <Text size="sm">
                    Exemple de carte <b>{variant}</b> avec tokens DS appliqués.
                  </Text>
                </Card>
              )
            )}
          </Grid>
        </Container>
      </Section>

      {/* 🖼️ CARDS WITH IMAGES */}
      <Section bg="app" vertical="xl">
        <Container size="xl">
          <Heading
            level={2}
            className="text-center mb-ds-2xl text-ds-text-primary"
          >
            🖼️ Cards with Header Image
          </Heading>

          <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="lg" justify="center">
            <Card
              variant="elevated"
              hoverable
              header="https://picsum.photos/400/220?grayscale"
              dsTitle="Card avec image"
              subTitle="Exemple illustré"
              footer={<Button dsSize="sm" variant="primary">Learn more</Button>}
            >
              <Text size="sm">
                Carte avec image d’en-tête et variant <b>elevated</b>.
              </Text>
            </Card>

            <Card
              variant="brand"
              hoverable
              header="https://picsum.photos/400/220"
              dsTitle="Brand Card"
              subTitle="Accent visuel"
            >
              <Text size="sm">
                Utilise les couleurs de ton <b>brand DS</b>.
              </Text>
            </Card>

            <Card
              variant="gradient"
              header="https://picsum.photos/400/220?grayscale"
              hoverable
              dsTitle="Gradient Card"
              subTitle="Effet spécial"
              footer={<Button dsSize="sm" variant="outline">Action</Button>}
            >
              <Text size="sm">
                Exemple de carte avec fond dégradé et effet hover.
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>
    </div>
  )
}
