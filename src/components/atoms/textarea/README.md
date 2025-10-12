# Textarea Component

Champ de saisie multi-lignes.

## Usage

```tsx
import { Textarea } from '@dorian-ui/my-ui-lib'

<Textarea placeholder="Enter your message" />
<Textarea rows={5} />
<Textarea disabled />
```

## Props

Hérite de tous les attributs HTML `<textarea>` natifs.

## Exemples

```tsx
// Textarea contrôlée
const [message, setMessage] = useState('')
<Textarea 
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Your message"
/>

// Textarea avec label
<Stack spacing="xs">
  <Label htmlFor="bio">Bio</Label>
  <Textarea 
    id="bio" 
    rows={4}
    placeholder="Tell us about yourself"
  />
</Stack>
```
