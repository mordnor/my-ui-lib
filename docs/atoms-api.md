# Atoms API Reference

Documentation des composants Atoms avec leurs APIs cohérentes et optimisées.

## 🎨 Cohérence de l'API

### Composants interactifs (Button, Badge)
Les composants interactifs utilisent un système de couleurs basé sur les rôles sémantiques :
- **variant** : Style visuel du composant
- **colorScheme** : Couleur sémantique du composant

### Composants typographiques (Text, Heading)
Les composants de texte utilisent un système de couleurs simplifié pour le texte :
- **color** : Intensité/importance du texte

---

## 📦 Badge

Badge pour afficher des statuts, labels ou compteurs.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'soft' \| 'link'` | `'solid'` | Style visuel du badge |
| `colorScheme` | `'primary' \| 'secondary' \| 'accent' \| 'success' \| 'error' \| 'warning' \| 'info' \| 'neutral'` | `'primary'` | Couleur sémantique |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Taille du badge |
| `className` | `string` | - | Classes CSS additionnelles |
| `children` | `ReactNode` | - | Contenu du badge |

### Exemples

```tsx
<Badge variant="solid" colorScheme="success">Actif</Badge>
<Badge variant="soft" colorScheme="warning" size="sm">En attente</Badge>
<Badge variant="outline" colorScheme="info">Info</Badge>
```

---

## 🔘 Button

Bouton interactif avec support des icônes et états de chargement.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'soft' \| 'link'` | `'solid'` | Style visuel du bouton |
| `colorScheme` | `'primary' \| 'secondary' \| 'accent' \| 'success' \| 'error' \| 'warning' \| 'info' \| 'neutral'` | `'primary'` | Couleur sémantique |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Taille du bouton |
| `isLoading` | `boolean` | `false` | État de chargement |
| `isDisabled` | `boolean` | `false` | État désactivé |
| `isFullWidth` | `boolean` | `false` | Bouton pleine largeur |
| `isIconOnly` | `boolean` | `false` | Bouton icône uniquement (carré) |
| `leftIcon` | `ReactNode` | - | Icône à gauche |
| `rightIcon` | `ReactNode` | - | Icône à droite |
| `className` | `string` | - | Classes CSS additionnelles |
| `children` | `ReactNode` | - | Contenu du bouton |

### Exemples

```tsx
<Button variant="solid" colorScheme="primary">Enregistrer</Button>
<Button variant="outline" colorScheme="secondary" size="sm">Annuler</Button>
<Button isLoading colorScheme="success">Chargement...</Button>
<Button leftIcon={<Icon name="plus" />}>Ajouter</Button>
```

---

## 📝 Text

Composant de texte avec système de typographie complet.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'p' \| 'span' \| 'div' \| 'label'` | `'p'` | Élément HTML à utiliser |
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg'` | `'base'` | Taille du texte |
| `weight` | `'regular' \| 'medium' \| 'semibold' \| 'bold'` | `'regular'` | Graisse de la police |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | - | Alignement du texte |
| `color` | `'default' \| 'muted' \| 'subtle' \| 'inverse'` | `'default'` | Couleur/intensité du texte |
| `isTruncated` | `boolean` | `false` | Tronquer avec ellipse |
| `className` | `string` | - | Classes CSS additionnelles |
| `children` | `ReactNode` | - | Contenu du texte |

### Couleurs

- **default** : Couleur principale du texte (`text-ds-foreground`)
- **muted** : Texte secondaire/atténué (`text-ds-muted-foreground`)
- **subtle** : Texte tertiaire/très atténué (`text-ds-muted-foreground/70`)
- **inverse** : Texte sur fond sombre (`text-ds-primary-foreground`)

### Exemples

```tsx
<Text size="lg" weight="bold">Titre important</Text>
<Text color="muted" size="sm">Texte secondaire</Text>
<Text as="span" isTruncated>Texte très long qui sera tronqué...</Text>
```

---

## 🎯 Heading

Titres sémantiques avec système de typographie.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h2'` | Niveau sémantique HTML |
| `size` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | (même que `as`) | Taille visuelle (peut différer du niveau sémantique) |
| `color` | `'default' \| 'muted' \| 'subtle' \| 'inverse'` | `'default'` | Couleur/intensité du texte |
| `className` | `string` | - | Classes CSS additionnelles |
| `children` | `ReactNode` | - | Contenu du titre |

### Couleurs

Identique à Text :
- **default** : Couleur principale
- **muted** : Texte secondaire
- **subtle** : Texte tertiaire
- **inverse** : Sur fond sombre

### Exemples

```tsx
<Heading as="h1">Titre principal</Heading>
<Heading as="h2" size="h1">Grand titre mais h2 sémantiquement</Heading>
<Heading as="h3" color="muted">Sous-titre atténué</Heading>
```

---

## 🎨 Patterns d'utilisation

### Cohérence variant + colorScheme

Pour les composants interactifs (Button, Badge), utilisez toujours la combinaison `variant` + `colorScheme` :

```tsx
// ✅ Bon
<Button variant="solid" colorScheme="primary">Action</Button>
<Badge variant="soft" colorScheme="success">Status</Badge>

// ❌ Éviter
<Button colorScheme="primary">Action</Button> // variant manquant mais OK car default='solid'
```

### Couleurs de texte cohérentes

Pour Text et Heading, utilisez le système de couleurs simplifié :

```tsx
// ✅ Bon - Hiérarchie claire
<Heading color="default">Titre principal</Heading>
<Text color="muted">Description secondaire</Text>
<Text color="subtle" size="sm">Note tertiaire</Text>

// ❌ Éviter - Anciennes valeurs
<Text color="secondary">...</Text> // N'existe plus
<Text color="tertiary">...</Text>  // N'existe plus
```

### Tailles cohérentes

Tous les composants utilisent le même système de tailles lorsqu'applicable :

```tsx
// xs, sm, md, lg, xl
<Button size="md">Button</Button>
<Badge size="sm">Badge</Badge>
<Text size="lg">Text</Text>
```

---

## ✨ Résumé

### Props cohérentes entre composants

| Prop | Button | Badge | Text | Heading |
|------|--------|-------|------|---------|
| `variant` | ✅ | ✅ | ❌ | ❌ |
| `colorScheme` | ✅ | ✅ | ❌ | ❌ |
| `color` | ❌ | ❌ | ✅ | ✅ |
| `size` | ✅ | ✅ | ✅ | ✅ |
| `className` | ✅ | ✅ | ✅ | ✅ |
| `children` | ✅ | ✅ | ✅ | ✅ |

### Philosophie de design

1. **Composants interactifs** : Utilisent `variant` + `colorScheme` pour leur rôle visuel et sémantique
2. **Composants typographiques** : Utilisent `color` pour l'intensité/importance du texte
3. **Tailles** : Système unifié `xs` → `xl` selon le composant
4. **Extensibilité** : `className` toujours disponible pour personnalisation
