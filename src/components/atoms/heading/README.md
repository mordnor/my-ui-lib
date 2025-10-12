# Heading Component

Titres sémantiques H1-H6.

## Usage

```tsx
import { Heading } from '@dorian-ui/my-ui-lib'

<Heading level="h1">Main Title</Heading>
<Heading level="h2">Section Title</Heading>
<Heading level="h3">Subsection</Heading>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h2'` | Niveau sémantique HTML |
| `className` | `string` | - | Classes CSS additionnelles |

## Niveaux

```tsx
<Stack spacing="md">
  <Heading level="h1">Heading 1</Heading>
  <Heading level="h2">Heading 2</Heading>
  <Heading level="h3">Heading 3</Heading>
  <Heading level="h4">Heading 4</Heading>
  <Heading level="h5">Heading 5</Heading>
  <Heading level="h6">Heading 6</Heading>
</Stack>
```

## Bonnes pratiques

- Utiliser un seul H1 par page
- Respecter la hiérarchie (ne pas sauter de niveaux)
- Les tailles visuelles sont gérées par les tokens de design
