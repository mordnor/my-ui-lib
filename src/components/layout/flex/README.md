# Flex Component

Layout flexbox avec contrôle complet.

## Usage

```tsx
import { Flex } from '@dorian-ui/my-ui-lib'

<Flex direction="row" justify="between" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'row' \| 'row-reverse' \| 'col' \| 'col-reverse'` | `'row'` | Direction flex |
| `wrap` | `'wrap' \| 'nowrap' \| 'wrap-reverse'` | `'nowrap'` | Comportement wrap |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | - | align-items |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | - | justify-content |
| `gap` | `string` | - | Gap (utiliser tokens) |

## Exemples

```tsx
// Layout header
<Flex justify="between" align="center">
  <Logo />
  <Navigation />
  <UserMenu />
</Flex>

// Grid responsif
<Flex wrap="wrap" gap="4">
  <Card />
  <Card />
  <Card />
</Flex>

// Centrage parfait
<Flex justify="center" align="center" className="ds-h-screen">
  <LoginForm />
</Flex>

// Colonnes inversées
<Flex direction="col-reverse">
  <Footer />
  <Content />
  <Header />
</Flex>
```

## Cas d'usage

- Navbars et headers
- Layouts complexes nécessitant wrap
- Alignements précis
- Grilles flexibles
