# Label Component

Label pour les champs de formulaire.

## Usage

```tsx
import { Label } from '@dorian-ui/my-ui-lib'

<Label htmlFor="email">Email address</Label>
<Input id="email" type="email" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Taille du label |
| `isRequired` | `boolean` | `false` | Affiche un astérisque |
| `isDisabled` | `boolean` | `false` | Style désactivé |

## Exemples

```tsx
// Label requis
<Label htmlFor="name" isRequired>Name</Label>
<Input id="name" />

// Label désactivé
<Label htmlFor="disabled" isDisabled>Disabled field</Label>
<Input id="disabled" disabled />

// Label avec taille
<Label size="lg">Large label</Label>
```
