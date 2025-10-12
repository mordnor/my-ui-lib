# Image Component

Image optimisée et responsive.

## Usage

```tsx
import { Image } from '@dorian-ui/my-ui-lib'

<Image src="/photo.jpg" alt="Description" />
```

## Props

Hérite de tous les attributs HTML `<img>` natifs.

## Exemples

```tsx
// Image responsive
<Image 
  src="/hero.jpg" 
  alt="Hero image"
  className="ds-w-full ds-h-auto"
/>

// Image avec dimensions fixes
<Image 
  src="/avatar.jpg" 
  alt="Avatar"
  className="ds-w-32 ds-h-32 ds-rounded-full"
/>
```
