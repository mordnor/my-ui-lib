# Spacer Component

Crée un espace vide pour layout.

## Usage

```tsx
import { Spacer } from '@dorian-ui/my-ui-lib'

<Spacer size="md" />
<Spacer size="lg" axis="horizontal" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | `'md'` | Taille |
| `axis` | `'horizontal' \| 'vertical' \| 'both'` | `'vertical'` | Axe |

## Exemples

```tsx
// Espace vertical
<div>
  <Text>Content</Text>
  <Spacer size="lg" />
  <Text>More content</Text>
</div>

// Espace horizontal
<Flex>
  <Button>Left</Button>
  <Spacer size="md" axis="horizontal" />
  <Button>Right</Button>
</Flex>

// Espace carré
<Spacer size="xl" axis="both" />
```

## Cas d'usage

- Ajouter de l'espace sans margin/padding
- Contrôler précisément les espacements
- Alternative à margin quand on veut un élément visible dans le DOM
