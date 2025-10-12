# Input Component

Composant de champ de saisie texte.

## Usage

```tsx
import { Input } from '@dorian-ui/my-ui-lib'

// Input basique
<Input placeholder="Enter your name" />

// Input avec erreur
<Input isInvalid placeholder="Email" />

// Input désactivé
<Input isDisabled value="Read only" />

// Input pleine largeur
<Input isFullWidth placeholder="Full width" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Taille de l'input |
| `isInvalid` | `boolean` | `false` | État d'erreur |
| `isDisabled` | `boolean` | `false` | Désactive l'input |
| `isFullWidth` | `boolean` | `false` | Prend toute la largeur |
| + tous les attributs HTML `<input>` natifs | | | type, placeholder, value, onChange, etc. |

## Tailles

```tsx
<Stack spacing="sm">
  <Input size="xs" placeholder="Extra small" />
  <Input size="sm" placeholder="Small" />
  <Input size="md" placeholder="Medium (default)" />
  <Input size="lg" placeholder="Large" />
</Stack>
```

## États

### Normal
```tsx
<Input placeholder="Normal state" />
```

### Invalide
```tsx
<Input isInvalid placeholder="Error state" />
```

### Désactivé
```tsx
<Input isDisabled placeholder="Disabled" />
```

## Exemples

### Input contrôlé
```tsx
const [value, setValue] = useState('')

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled input"
/>
```

### Input avec label
```tsx
<Stack spacing="xs">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="your@email.com" 
  />
</Stack>
```

### Input avec validation
```tsx
const [email, setEmail] = useState('')
const isValid = email.includes('@')

<Input 
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  isInvalid={email.length > 0 && !isValid}
  placeholder="Email"
/>
```

## Types supportés

L'Input supporte tous les types HTML natifs:
- `text` (défaut)
- `email`
- `password`
- `number`
- `tel`
- `url`
- `search`
- etc.

## Accessibilité

- Support complet du focus keyboard
- États aria gérés automatiquement
- Associez toujours avec un `<Label>` pour l'accessibilité
