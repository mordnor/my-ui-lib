# Text Component

Composant de texte avec variantes de style.

## Usage

```tsx
import { Text } from '@dorian-ui/my-ui-lib'

<Text>Default text</Text>
<Text size="lg">Large text</Text>
<Text weight="bold">Bold text</Text>
<Text align="center">Centered text</Text>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl'` | `'base'` | Taille du texte |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | Graisse de la police |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Alignement |
| `as` | `'p' \| 'span' \| 'div'` | `'p'` | Balise HTML |

## Exemples

```tsx
// Différentes tailles
<Stack>
  <Text size="xs">Extra small text</Text>
  <Text size="sm">Small text</Text>
  <Text size="base">Base text</Text>
  <Text size="lg">Large text</Text>
  <Text size="xl">Extra large text</Text>
</Stack>

// Différentes graisses
<Text weight="normal">Normal</Text>
<Text weight="medium">Medium</Text>
<Text weight="semibold">Semibold</Text>
<Text weight="bold">Bold</Text>

// Texte en tant que span inline
<Text as="span" weight="bold">Important:</Text>
<Text as="span"> This is a message.</Text>
```
