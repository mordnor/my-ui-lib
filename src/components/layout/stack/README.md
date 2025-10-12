# Stack Component

Layout flexbox pour empiler des éléments verticalement ou horizontalement.

## Usage

```tsx
import { Stack } from '@dorian-ui/my-ui-lib'

<Stack spacing="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Direction d'empilement |
| `spacing` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Espacement entre items |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | - | Alignement items |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around'` | - | Justification |

## Exemples

```tsx
// Stack vertical (défaut)
<Stack spacing="lg">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Stack>

// Stack horizontal
<Stack direction="horizontal" spacing="sm">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
  <Button>Action 3</Button>
</Stack>

// Stack centré
<Stack align="center" justify="center">
  <Icon />
  <Heading>Centered Content</Heading>
</Stack>

// Stack avec espacement between
<Stack direction="horizontal" justify="between">
  <Text>Left</Text>
  <Text>Right</Text>
</Stack>
```

## Cas d'usage

- Lister des items avec espacement cohérent
- Créer des groupes de boutons
- Empiler des cartes ou sections
- Layouts de formulaires

## Stack vs Flex

- **Stack**: Simplifié, direction + espacement prédéfini
- **Flex**: Plus de contrôle, pour layouts complexes
