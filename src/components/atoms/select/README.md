# Select Component

Menu déroulant de sélection.

## Usage

```tsx
import { Select } from '@dorian-ui/my-ui-lib'

<Select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
```

## Props

Hérite de tous les attributs HTML `<select>` natifs.

## Exemples

```tsx
// Select contrôlé
const [value, setValue] = useState('')
<Select value={value} onChange={(e) => setValue(e.target.value)}>
  <option value="">Choose an option</option>
  <option value="react">React</option>
  <option value="vue">Vue</option>
  <option value="angular">Angular</option>
</Select>

// Select avec label
<Stack spacing="xs">
  <Label htmlFor="country">Country</Label>
  <Select id="country">
    <option>France</option>
    <option>USA</option>
    <option>Canada</option>
  </Select>
</Stack>
```
