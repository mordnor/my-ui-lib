# Divider Component

Séparateur visuel horizontal ou vertical.

## Usage

```tsx
import { Divider } from '@dorian-ui/my-ui-lib'

<Divider />
<Divider orientation="vertical" />
<Divider variant="dashed" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation |
| `variant` | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Style de ligne |

## Exemples

```tsx
// Divider horizontal (défaut)
<Stack>
  <Text>Section 1</Text>
  <Divider />
  <Text>Section 2</Text>
</Stack>

// Divider vertical
<Flex>
  <Text>Left</Text>
  <Divider orientation="vertical" />
  <Text>Right</Text>
</Flex>

// Divider style dashed
<Divider variant="dashed" />
```

## Cas d'usage

- Séparer des sections de contenu
- Délimiter des groupes dans une liste
- Séparer des éléments inline
