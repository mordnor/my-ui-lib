# Spinner Component

Indicateur de chargement animé.

## Usage

```tsx
import { Spinner } from '@dorian-ui/my-ui-lib'

<Spinner />
<Spinner size="lg" />
<Spinner color="primary" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Taille |
| `color` | `string` | - | Couleur (token de couleur) |

## Exemples

```tsx
// Différentes tailles
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />

// Centré dans une page
<Flex justify="center" align="center" className="ds-h-screen">
  <Spinner size="xl" />
</Flex>
```
