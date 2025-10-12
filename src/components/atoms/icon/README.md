# Icon Component

Conteneur pour icônes SVG.

## Usage

```tsx
import { Icon } from '@dorian-ui/my-ui-lib'

<Icon size="md">
  <svg>...</svg>
</Icon>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Taille |

## Exemples

```tsx
// Avec icône SVG
<Icon size="lg">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="..." />
  </svg>
</Icon>

// Dans un bouton
<Button leftIcon={<Icon><SearchIcon /></Icon>}>
  Search
</Button>
```
