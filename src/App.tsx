import { useState } from 'react'
import { Button } from '@/components/atoms/button'
import { Heading } from '@/components/atoms/heading'
import { Text } from '@/components/atoms/text'
import { Card } from '@/components/molecules/card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { applyTheme, getCurrentTheme } from '@theme/applyTheme'
import type { ThemeName } from '@/theme/theme.types'

export default function App() {
  const [theme, setTheme] = useState<ThemeName>(getCurrentTheme())

  const handleToggleTheme = () => {
    const newTheme: ThemeName = theme === 'light' ? 'dark' : 'light'
    applyTheme(newTheme)
    setTheme(newTheme)
  }

  return (
    <div className="min-h-screen bg-ds-background">
      <Section>
        <Container>
          <div className="py-16">
            <div className="text-center mb-12">
              <Heading size="h1" className="mb-4">
                React + Tailwind Boilerplate
              </Heading>
              <Text color="muted" size="lg">
                A production-ready boilerplate with Design System, Theming, and
                TypeScript
              </Text>
            </div>

            <div className="flex justify-center mb-12">
              <Button onClick={handleToggleTheme} variant="solid">
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <Heading size="h3" className="mb-3">
                  🎨 Design Tokens
                </Heading>
                <Text color="muted">
                  Token-based design system with light and dark themes.
                  Customize colors, spacing, and typography via JSON.
                </Text>
              </Card>

              <Card>
                <Heading size="h3" className="mb-3">
                  ⚡ Fast Development
                </Heading>
                <Text color="muted">
                  Built with Vite for lightning-fast HMR and optimized builds.
                  TypeScript and ESLint configured.
                </Text>
              </Card>

              <Card>
                <Heading size="h3" className="mb-3">
                  🧩 Component Library
                </Heading>
                <Text color="muted">
                  Pre-built UI components ready to use. Fully customizable and
                  accessible.
                </Text>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Text color="muted" className="mb-4">
                Edit <code className="text-ds-accent-primary">src/App.tsx</code>{' '}
                to get started
              </Text>
              <div className="flex justify-center gap-4">
                <Button variant="solid" size="lg">
                  Get Started
                </Button>
                <Button variant="solid" size="lg">
                  View Docs
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
