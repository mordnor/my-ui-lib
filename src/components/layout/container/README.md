# Container Component

Conteneur qui contraint la largeur du contenu avec padding responsive.

## Usage

```tsx
import { Container } from '@dorian-ui/my-ui-lib'

<Container>
  <h1>Your content here</h1>
</Container>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'` | Largeur maximale |
| `centered` | `boolean` | `true` | Centre horizontalement |

## Tailles

```tsx
<Container size="sm">Small container (640px)</Container>
<Container size="md">Medium container (768px)</Container>
<Container size="lg">Large container (1024px)</Container>
<Container size="xl">XL container (1280px)</Container>
<Container size="full">Full width</Container>
```

## Exemples

```tsx
// Container de page typique
<Container>
  <Heading level="h1">Page Title</Heading>
  <Text>Page content...</Text>
</Container>

// Container non centré
<Container centered={false}>
  <Text>Left-aligned content</Text>
</Container>

// Container full width
<Container size="full">
  <Text>Takes full viewport width</Text>
</Container>
```

## Cas d'usage

- Wrapper principal de contenu de page
- Contraindre la largeur pour améliorer la lisibilité
- Créer des layouts cohérents sur toutes les pages

## Padding responsive

Le Container applique automatiquement un padding responsive:
- Mobile: 16px (1rem)
- Tablet: 24px (1.5rem)  
- Desktop: 32px (2rem)
