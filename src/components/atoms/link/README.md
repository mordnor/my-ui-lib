# Link Component

Lien hypertexte stylisé.

## Usage

```tsx
import { Link } from '@dorian-ui/my-ui-lib'

<Link href="/about">About</Link>
<Link href="/docs" external>Documentation</Link>
<Link href="#section">Anchor link</Link>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'muted' \| 'accent'` | `'default'` | Style du lien |
| `underline` | `'always' \| 'hover' \| 'never'` | `'hover'` | Comportement soulignement |
| `external` | `boolean` | `false` | Ouvre dans un nouvel onglet |

## Exemples

```tsx
// Lien externe
<Link href="https://example.com" external>
  External Link
</Link>

// Lien sans soulignement
<Link href="/page" underline="never">
  No underline
</Link>

// Lien accentué
<Link href="/important" variant="accent">
  Important Link
</Link>
```
