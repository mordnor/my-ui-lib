# Button Component

Composant bouton interactif principal du Design System.

## Usage

```tsx
import { Button } from '@dorian-ui/my-ui-lib'

// Bouton basique
<Button>Click me</Button>

// Bouton avec variant
<Button variant="outline" colorScheme="primary">
  Primary Outline
</Button>

// Bouton avec icône
<Button leftIcon={<IconPlus />}>Add Item</Button>

// Bouton en chargement
<Button isLoading>Loading...</Button>

// Bouton désactivé
<Button isDisabled>Disabled</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'soft' \| 'link'` | `'solid'` | Style visuel du bouton |
| `colorScheme` | `'primary' \| 'secondary' \| 'accent' \| 'success' \| 'error' \| 'warning' \| 'info' \| 'neutral'` | `'primary'` | Schéma de couleurs |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Taille du bouton |
| `isLoading` | `boolean` | `false` | Affiche un spinner de chargement |
| `isDisabled` | `boolean` | `false` | Désactive le bouton |
| `isFullWidth` | `boolean` | `false` | Le bouton prend toute la largeur |
| `isIconOnly` | `boolean` | `false` | Bouton carré pour icône seule |
| `leftIcon` | `ReactNode` | - | Icône à gauche du texte |
| `rightIcon` | `ReactNode` | - | Icône à droite du texte |

## Variants

### Solid (défaut)
Bouton plein avec fond coloré. À utiliser pour les actions principales.

```tsx
<Button variant="solid" colorScheme="primary">Primary Action</Button>
```

### Outline
Bouton avec bordure. À utiliser pour les actions secondaires.

```tsx
<Button variant="outline" colorScheme="primary">Secondary Action</Button>
```

### Ghost
Bouton sans fond. À utiliser pour les actions tertiaires ou liens d'action.

```tsx
<Button variant="ghost">Tertiary Action</Button>
```

### Soft
Bouton avec fond léger. À utiliser pour mettre en valeur sans trop attirer l'attention.

```tsx
<Button variant="soft" colorScheme="accent">Soft Action</Button>
```

### Link
Bouton style lien. À utiliser pour les actions de navigation légères.

```tsx
<Button variant="link">Learn more</Button>
```

## Color Schemes

- **primary**: Actions principales de l'application
- **secondary**: Actions secondaires
- **accent**: Actions spéciales ou promotionnelles
- **success**: Confirmations positives
- **error**: Actions destructives ou erreurs
- **warning**: Avertissements
- **info**: Informations
- **neutral**: Actions neutres

## Exemples

### Groupe de boutons
```tsx
<Stack direction="horizontal" spacing="sm">
  <Button variant="solid">Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="ghost">Reset</Button>
</Stack>
```

### Bouton avec icônes
```tsx
<Button leftIcon={<IconDownload />} rightIcon={<IconChevronDown />}>
  Download
</Button>
```

### Bouton pleine largeur
```tsx
<Button isFullWidth>Sign In</Button>
```

### Bouton icône seul
```tsx
<Button isIconOnly aria-label="Settings">
  <IconSettings />
</Button>
```

## Accessibilité

- Utilise la balise sémantique `<button>`
- Support complet du focus keyboard
- États `disabled` gérés correctement
- Pensez à ajouter `aria-label` pour les boutons icon-only
