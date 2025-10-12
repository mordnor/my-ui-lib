# Grid Component

Layout CSS Grid pour créer des grilles.

## Usage

```tsx
import { Grid } from '@dorian-ui/my-ui-lib'

<Grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 12` | `12` | Nombre de colonnes |
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Espacement |

## Exemples

```tsx
// Grille 3 colonnes
<Grid cols={3} gap="lg">
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
</Grid>

// Grille 12 colonnes (pour layouts complexes)
<Grid cols={12}>
  <div className="ds-col-span-8">Main</div>
  <div className="ds-col-span-4">Sidebar</div>
</Grid>

// Grille de cartes produits
<Grid cols={4} gap="md">
  {products.map(p => <ProductCard key={p.id} {...p} />)}
</Grid>
```

## Cas d'usage

- Galeries d'images
- Grilles de cartes/produits
- Layouts de dashboard
- Layouts complexes avec CSS Grid
