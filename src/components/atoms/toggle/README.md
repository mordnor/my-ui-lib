# Toggle Component

Interrupteur on/off (switch).

## Usage

```tsx
import { Toggle } from '@dorian-ui/my-ui-lib'

<Toggle />
<Toggle checked />
<Toggle disabled />
```

## Props

Hérite de tous les attributs HTML `<input type="checkbox">` natifs avec un style switch.

## Exemples

```tsx
// Toggle contrôlé
const [enabled, setEnabled] = useState(false)
<Toggle checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />

// Toggle avec label
<Label className="flex items-center gap-2">
  <Toggle />
  <span>Enable notifications</span>
</Label>
```
