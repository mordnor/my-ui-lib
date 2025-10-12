# Badge Component

Indicateurs de statut et étiquettes.

## Usage

```tsx
import { Badge } from '@dorian-ui/my-ui-lib'

<Badge>New</Badge>
<Badge variant="outline" colorScheme="success">Active</Badge>
<Badge variant="soft" colorScheme="warning">Pending</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'soft' \| 'ghost' \| 'link'` | `'solid'` | Style visuel |
| `colorScheme` | `'primary' \| 'secondary' \| 'accent' \| 'success' \| 'error' \| 'warning' \| 'info' \| 'neutral'` | `'primary'` | Couleur |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Taille |

## Exemples

```tsx
// Statuts
<Badge colorScheme="success">Completed</Badge>
<Badge colorScheme="warning">In Progress</Badge>
<Badge colorScheme="error">Failed</Badge>
<Badge colorScheme="info">Info</Badge>

// Différentes tailles
<Badge size="xs">XS</Badge>
<Badge size="sm">SM</Badge>
<Badge size="md">MD</Badge>
<Badge size="lg">LG</Badge>

// Avec compteur
<Badge>{count}</Badge>
```

## Cas d'usage

- Indicateurs de statut
- Compteurs de notifications
- Catégories/tags
- Labels de mise en avant ("New", "Hot", etc.)
