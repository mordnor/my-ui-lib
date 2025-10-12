# Checkbox Component

Case à cocher pour la sélection binaire.

## Usage

```tsx
import { Checkbox } from '@dorian-ui/my-ui-lib'

<Checkbox />
<Checkbox checked onChange={(e) => console.log(e.target.checked)} />
<Checkbox disabled />
```

## Props

Hérite de tous les attributs HTML `<input type="checkbox">` natifs.

## Exemples

```tsx
// Checkbox avec label
<Label className="flex items-center gap-2">
  <Checkbox />
  <span>Accept terms and conditions</span>
</Label>

// Checkbox contrôlée
const [checked, setChecked] = useState(false)
<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
```
