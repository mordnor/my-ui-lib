# Section Component

Balise sémantique `<section>` avec padding vertical.

## Usage

```tsx
import { Section } from '@dorian-ui/my-ui-lib'

<Section>
  <Container>
    <Heading>Section Title</Heading>
  </Container>
</Section>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Padding vertical |
| `fullWidth` | `boolean` | `false` | Supprime contraintes |

## Exemples

```tsx
// Section de hero
<Section padding="xl">
  <Container>
    <Heading level="h1">Welcome</Heading>
    <Text>Hero content</Text>
  </Container>
</Section>

// Section compacte
<Section padding="sm">
  <Container>
    <Text>Compact section</Text>
  </Container>
</Section>

// Section sans padding
<Section padding="none">
  <Image src="/banner.jpg" />
</Section>
```

## Cas d'usage

- Diviser une page en sections logiques
- Appliquer un espacement vertical cohérent
- Structure sémantique HTML5
