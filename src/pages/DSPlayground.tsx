import React from 'react'
import { Section } from '@/components/layout/section/Section'
import { Container } from '@/components/layout/container/Container'
import { Grid } from '@/components/layout/grid/Grid'
import { Stack } from '@/components/layout/stack/Stack'
import { Heading } from '@/components/ui/typography/Heading'
import { Text } from '@/components/ui/typography/Text'
import { Label } from '@/components/ui/typography/Label'
import { Button } from '@/components/ui/button/Button'
import { Card } from '@/components/ui/card/Card'
import { Badge } from '@/components/ui/typography/Badge'

export default function DSPlayground() {
  return (
    <div className="bg-ds-bg-app text-ds-text-primary min-h-screen font-sans">
      {/* 🧱 TYPOGRAPHY */}
      <Section>
        <Heading level={2}>Typography</Heading>
        <Stack gap="lg">
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>

          <Text>
            Texte par défaut — Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Text>
          <Text variant="muted">Texte muted</Text>
          <Text variant="success">Texte success</Text>
          <Text variant="danger">Texte danger</Text>
          <Text variant="warning">Texte warning</Text>
          <Text variant="info">Texte info</Text>

          <Label>Label standard</Label>
          <Label disabled>Label désactivé</Label>
        </Stack>
      </Section>

      {/* 🎨 BUTTONS */}
      <Section bg="surface">
        <Heading level={2}>Buttons</Heading>
        <Stack direction="horizontal" gap="lg" wrap>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button loading>Loading</Button>
        </Stack>
      </Section>

      {/* 🏷️ BADGES */}
      <Section>
        <Heading level={2}>Badges</Heading>
        <Stack direction="horizontal" gap="lg" wrap>
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </Stack>
      </Section>

      {/* 🧾 CARDS */}
      <Section bg="surface">
        <Heading level={2}>Cards</Heading>
        <Grid cols={{ sm: 2, md: 3 }} gap="xl">
          <Card title="Default Card" subTitle="Variant: default">
            Exemple de contenu basique avec texte tokenisé.
          </Card>

          <Card variant="outlined" title="Outlined" subTitle="Minimal border">
            Variante légère, sans ombre.
          </Card>

          <Card variant="elevated" hoverable title="Elevated + Hoverable">
            Monte légèrement au survol, utile pour les grilles de contenu.
          </Card>

          <Card
            variant="flat"
            title="Flat Card"
            subTitle="Pas de fond ni de border"
          >
            Variante ultra neutre pour contenus encastrés.
          </Card>
        </Grid>
      </Section>

      {/* ⚙️ LAYOUT TEST */}
      <Section>
        <Heading level={2}>Layout Components</Heading>
        <Text variant="muted" size="sm">
          Test des marges verticales et espacements entre éléments.
        </Text>

        <Container size="md" className="border-ds-border-default border">
          <Text>Container MD (max-width: md)</Text>
        </Container>

        <Grid cols={{ base: 1, sm: 2, md: 3 }} gap="2xl">
          <div className="bg-ds-bg-surface p-ds-space-lg border-ds-border-default rounded border text-center">
            Colonne 1
          </div>
          <div className="bg-ds-bg-surface p-ds-space-lg border-ds-border-default rounded border text-center">
            Colonne 2
          </div>
          <div className="bg-ds-bg-surface p-ds-space-lg border-ds-border-default rounded border text-center">
            Colonne 3
          </div>
        </Grid>

        <Stack direction="horizontal" gap="xl" className="mt-ds-space-2xl">
          <div className="bg-ds-bg-surface p-ds-space-md border-ds-border-default rounded border">
            Élément 1
          </div>
          <div className="bg-ds-bg-surface p-ds-space-md border-ds-border-default rounded border">
            Élément 2
          </div>
          <div className="bg-ds-bg-surface p-ds-space-md border-ds-border-default rounded border">
            Élément 3
          </div>
        </Stack>
      </Section>
    </div>
  )
}
