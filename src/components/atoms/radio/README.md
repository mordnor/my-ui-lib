# Radio Component

Bouton radio pour sélection unique dans un groupe.

## Usage

```tsx
import { Radio } from '@dorian-ui/my-ui-lib'

<Radio name="option" value="1" />
<Radio name="option" value="2" checked />
<Radio name="option" value="3" disabled />
```

## Props

Hérite de tous les attributs HTML `<input type="radio">` natifs.

## Exemples

```tsx
// Groupe de radios
<Stack spacing="sm">
  <Label className="flex items-center gap-2">
    <Radio name="size" value="small" />
    <span>Small</span>
  </Label>
  <Label className="flex items-center gap-2">
    <Radio name="size" value="medium" />
    <span>Medium</span>
  </Label>
  <Label className="flex items-center gap-2">
    <Radio name="size" value="large" />
    <span>Large</span>
  </Label>
</Stack>
```
