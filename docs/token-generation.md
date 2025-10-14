# Guide de Génération des Design Tokens

## Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture en 3 couches](#architecture-en-3-couches)
3. [Processus de génération](#processus-de-génération)
4. [Exemples de tokens](#exemples-de-tokens)
5. [Formats de sortie](#formats-de-sortie)
6. [Utilisation dans le code](#utilisation-dans-le-code)
7. [Création de nouveaux tokens](#création-de-nouveaux-tokens)

---

## Vue d'ensemble

Le système de design tokens de `@dorian-ui/my-ui-lib` est basé sur [Style Dictionary](https://amzn.github.io/style-dictionary/) et suit une architecture à 3 couches qui permet une personnalisation complète du design system.

### Préfixe et Conventions

- **Préfixe global** : `ds` (design system)
- **Format CSS** : Variables CSS avec `--ds-*` (ex: `--ds-color-primary`)
- **Format Tailwind** : Classes avec préfixe `ds-*` (ex: `bg-ds-primary`)
- **Format JSON** : Nested objects avec clé racine `ds`

---

## Architecture en 3 couches

### 1. Primitives (`tokens/primitives/`)

Les tokens primitifs sont les valeurs de base, les "atomes" du design system. Ils ne dépendent de rien d'autre.

**Fichiers primitifs :**
- `colors.json` - Palettes de couleurs brutes
- `spacing.json` - Échelle d'espacement
- `typography.json` - Tailles de police, familles, poids
- `radius.json` - Rayons de bordure
- `shadow.json` - Ombres
- `motion.json` - Durées et fonctions d'accélération
- `opacity.json` - Niveaux d'opacité
- `breakpoint.json` - Points de rupture responsive
- `z-index.json` - Niveaux de z-index

**Exemple - `tokens/primitives/colors.json` :**

```json
{
  "ds": {
    "color": {
      "base": {
        "white": { "value": "#ffffff", "type": "color" },
        "black": { "value": "#000000", "type": "color" }
      },
      "purple": {
        "500": { "value": "#a855f7", "type": "color", "description": "Base purple" },
        "600": { "value": "#9333ea", "type": "color", "description": "Darker purple" }
      }
    }
  }
}
```

### 2. Semantic (`tokens/semantic/`)

Les tokens sémantiques donnent un sens métier aux primitives. Ils **référencent** les primitives via la syntaxe `{ds.path.to.token}`.

**Fichiers sémantiques :**
- `colors.json` - Couleurs sémantiques (primary, secondary, destructive...)
- `typography.json` - Styles de texte composés
- `spacing.json` - Espacements sémantiques (component, layout, section)
- `component.json` - Propriétés spécifiques aux composants
- `effect.json` - Effets (elevation, focus, transitions)

**Exemple - `tokens/semantic/colors.json` :**

```json
{
  "ds": {
    "color": {
      "primary": {
        "value": "{ds.color.purple.500}",
        "type": "color",
        "description": "Primary brand color"
      },
      "primary-foreground": {
        "value": "{ds.color.base.white}",
        "type": "color",
        "description": "Text on primary background"
      },
      "destructive": {
        "value": "{ds.color.red.500}",
        "type": "color",
        "description": "Destructive/error action color"
      }
    }
  }
}
```

### 3. Themes (`tokens/themes/`)

Les thèmes **overrident** les valeurs sémantiques pour créer des variantes visuelles (light, dark, custom brands...).

**Fichiers de thème :**
- `light.json` - Thème clair par défaut
- `dark.json` - Thème sombre
- `material-light.json` / `material-dark.json` - Style Material Design
- `linear-light.json` / `linear-dark.json` - Style Linear

**Exemple - `tokens/themes/light.json` :**

```json
{
  "ds": {
    "color": {
      "foreground": {
        "value": "#0f172a",
        "type": "color",
        "description": "Main text - slate-900"
      },
      "background": {
        "value": "#ffffff",
        "type": "color",
        "description": "Main background - white"
      },
      "primary": {
        "value": "#a855f7",
        "type": "color",
        "description": "Primary brand - purple-500"
      }
    }
  }
}
```

**Exemple - `tokens/themes/dark.json` :**

```json
{
  "ds": {
    "color": {
      "foreground": {
        "value": "#f8fafc",
        "type": "color",
        "description": "Main text - slate-50 (inversé)"
      },
      "background": {
        "value": "#0f172a",
        "type": "color",
        "description": "Main background - slate-900 (inversé)"
      },
      "primary": {
        "value": "#c084fc",
        "type": "color",
        "description": "Primary brand - purple-400 (plus clair pour le dark)"
      }
    }
  }
}
```

---

## Processus de génération

### Pipeline de build

```
tokens/primitives/*.json
         ↓
tokens/semantic/*.json  ← Référence les primitives
         ↓
tokens/themes/*.json    ← Override les valeurs sémantiques
         ↓
    Style Dictionary
         ↓
    ┌────┴────┬──────────┬──────────┐
    ↓         ↓          ↓          ↓
  CSS       JS         TS        JSON
```

### Commande de build

```bash
# Build complet (tokens + lib + types)
pnpm run build

# Build tokens uniquement
pnpm run build:tokens
```

### Détails techniques (`tools/token-engine.mjs`)

Le moteur de tokens utilise Style Dictionary 5.x avec des formats personnalisés :

1. **Format CSS** (`css/variables`)
   - Génère des variables CSS `--ds-*`
   - Appliquées via sélecteur `[data-theme='light']`
   - Supporte les références entre tokens

2. **Format JavaScript** (`javascript/tailwind`)
   - Génère un objet JS pour la config Tailwind
   - Exporte default `tailwind.tokens.js`

3. **Format TypeScript** (`typescript/tokens`)
   - Génère des constantes typées
   - Type-safe pour l'autocomplétion

4. **Format JSON** (`json/nested`)
   - JSON brut pour debug ou import direct

---

## Exemples de tokens

### Exemple 1 : Couleur primitive → sémantique → theme

**Primitive** (`tokens/primitives/colors.json`) :
```json
"purple": {
  "500": { "value": "#a855f7", "type": "color" }
}
```

**Sémantique** (`tokens/semantic/colors.json`) :
```json
"primary": {
  "value": "{ds.color.purple.500}",
  "type": "color"
}
```

**Theme Light** (`tokens/themes/light.json`) :
```json
"primary": {
  "value": "#a855f7",
  "type": "color"
}
```

**Sortie CSS** (`theme/tokens-build/css/light.css`) :
```css
[data-theme='light'] {
  --ds-color-purple-500: #a855f7;
  --ds-color-primary: #a855f7;
}
```

**Sortie JS** (`theme/tokens-build/tailwind.tokens.js`) :
```js
export default {
  ds: {
    color: {
      purple: {
        500: "#a855f7"
      },
      primary: "#a855f7"
    }
  }
}
```

### Exemple 2 : Spacing avec référence

**Primitive** (`tokens/primitives/spacing.json`) :
```json
"ds": {
  "spacing": {
    "4": { "value": "16px", "type": "dimension" },
    "6": { "value": "24px", "type": "dimension" }
  }
}
```

**Sémantique** (`tokens/semantic/spacing.json`) :
```json
"ds": {
  "spacing": {
    "component": {
      "md": { "value": "{ds.spacing.3}", "type": "dimension" },
      "lg": { "value": "{ds.spacing.4}", "type": "dimension" }
    }
  }
}
```

**Sortie CSS** :
```css
[data-theme='light'] {
  --ds-spacing-4: 1rem;
  --ds-spacing-component-lg: var(--ds-spacing-4);
}
```

### Exemple 3 : Composant Button

**Sémantique** (`tokens/semantic/component.json`) :
```json
"ds": {
  "component": {
    "button": {
      "padding-x": { "value": "{ds.spacing.component.lg}", "type": "dimension" },
      "padding-y": { "value": "{ds.spacing.component.md}", "type": "dimension" },
      "radius": { "value": "{ds.radius.md}", "type": "dimension" },
      "height-md": { "value": "2.5rem", "type": "dimension" }
    }
  }
}
```

**Sortie CSS** :
```css
[data-theme='light'] {
  --ds-component-button-padding-x: var(--ds-spacing-component-lg);
  --ds-component-button-padding-y: var(--ds-spacing-component-md);
  --ds-component-button-radius: var(--ds-radius-md);
  --ds-component-button-height-md: 2.5rem;
}
```

**Utilisation dans composant** (`src/components/ui/button/Button.tsx`) :
```tsx
<button className="
  px-[var(--ds-component-button-padding-x)]
  py-[var(--ds-component-button-padding-y)]
  rounded-[var(--ds-component-button-radius)]
  h-[var(--ds-component-button-height-md)]
  bg-ds-primary
  text-ds-primary-foreground
">
  Click me
</button>
```

### Exemple 4 : Typography composite

**Primitive** (`tokens/primitives/typography.json`) :
```json
"ds": {
  "typography": {
    "font-size": {
      "xl": { "value": "22px", "type": "dimension" }
    },
    "font-weight": {
      "semibold": { "value": "600", "type": "number" }
    },
    "line-height": {
      "normal": { "value": "1.43", "type": "number" }
    }
  }
}
```

**Sémantique** (`tokens/semantic/typography.json`) :
```json
"ds": {
  "typography": {
    "heading": {
      "h5": {
        "font-size": { "value": "{ds.typography.font-size.xl}" },
        "font-weight": { "value": "{ds.typography.font-weight.semibold}" },
        "line-height": { "value": "{ds.typography.line-height.normal}" }
      }
    }
  }
}
```

**Sortie CSS** :
```css
[data-theme='light'] {
  --ds-typography-heading-h5-font-size: var(--ds-typography-font-size-xl);
  --ds-typography-heading-h5-font-weight: var(--ds-typography-font-weight-semibold);
  --ds-typography-heading-h5-line-height: var(--ds-typography-line-height-normal);
}
```

---

## Formats de sortie

### 1. CSS Variables (`theme/tokens-build/css/`)

**Fichiers générés :**
- `light.css` - Thème light
- `dark.css` - Thème dark
- `material-light.css`, `material-dark.css`, etc.
- `themes.css` - Combinaison de tous les thèmes

**Format :**
```css
[data-theme='light'] {
  --ds-color-primary: #a855f7;
  --ds-spacing-4: 1rem;
}

[data-theme='dark'] {
  --ds-color-primary: #c084fc;
  --ds-spacing-4: 1rem;
}
```

**Utilisation :**
```tsx
// Appliqué automatiquement via data-theme sur <html>
import '@dorian-ui/my-ui-lib/style.css'
```

### 2. JavaScript/Tailwind (`theme/tokens-build/tailwind.tokens.js`)

**Format :**
```js
export default {
  ds: {
    color: {
      primary: "#a855f7",
      secondary: "#2dd4bf"
    },
    spacing: {
      4: "16px",
      component: {
        lg: "16px"
      }
    }
  }
}
```

**Utilisation dans `tailwind.config.mjs` :**
```js
import tokens from './theme/tokens-build/tailwind.tokens.js'

export default {
  theme: {
    extend: {
      colors: tokens.ds.color,
      spacing: tokens.ds.spacing
    }
  }
}
```

### 3. TypeScript (`theme/tokens-build/ts/`)

**Fichiers générés :**
- `light.ts`, `dark.ts`, etc.
- `index.ts` - Barrel export

**Format :**
```ts
export const tokens = {
  color: {
    primary: '#a855f7',
    secondary: '#2dd4bf',
  },
  spacing: {
    '4': '16px',
    component: {
      lg: '16px',
    },
  },
} as const

export type Tokens = typeof tokens
export default tokens
```

**Utilisation :**
```tsx
import { lightTokens } from '@dorian-ui/my-ui-lib/theme/tokens-build/ts'

// Type-safe access
const primaryColor = lightTokens.color.primary // string
```

### 4. JSON (`theme/tokens-build/*.json`)

**Format :**
```json
{
  "ds": {
    "color": {
      "primary": "#a855f7"
    }
  }
}
```

**Utilisation :**
```js
import tokens from './theme/tokens-build/light.json'
```

---

## Utilisation dans le code

### Dans les composants React

**Avec Tailwind (recommandé) :**
```tsx
// Classes Tailwind générées depuis les tokens
<Button className="bg-ds-primary text-ds-primary-foreground" />
<Card className="p-ds-component-xl rounded-ds-lg shadow-ds-md" />
```

**Avec CSS variables :**
```tsx
// Accès direct aux variables CSS
<div style={{
  backgroundColor: 'var(--ds-color-primary)',
  padding: 'var(--ds-spacing-4)'
}} />
```

**Avec styled-components :**
```tsx
import styled from 'styled-components'

const StyledButton = styled.button`
  background: var(--ds-color-primary);
  padding: var(--ds-component-button-padding-y) var(--ds-component-button-padding-x);
  border-radius: var(--ds-component-button-radius);
`
```

### Changement de thème runtime

```tsx
import { applyTheme } from '@dorian-ui/my-ui-lib/theme/applyTheme'

// Appliquer un thème
applyTheme('dark')        // Thème dark
applyTheme('light')       // Thème light
applyTheme('material-dark') // Thème Material dark

// Récupérer le thème actuel
const currentTheme = getCurrentTheme() // 'light' | 'dark' | ...

// Initialiser au chargement
initTheme() // Lit depuis localStorage ou utilise 'light' par défaut
```

---

## Création de nouveaux tokens

### Ajouter une primitive

1. Créer ou éditer un fichier dans `tokens/primitives/`

```json
{
  "ds": {
    "color": {
      "amber": {
        "500": { "value": "#f59e0b", "type": "color", "description": "Amber base" }
      }
    }
  }
}
```

2. Build les tokens :
```bash
pnpm run build:tokens
```

3. Utiliser dans Tailwind ou CSS :
```tsx
<div className="bg-ds-amber-500" />
<div style={{ color: 'var(--ds-color-amber-500)' }} />
```

### Ajouter un token sémantique

1. Éditer `tokens/semantic/colors.json` :

```json
{
  "ds": {
    "color": {
      "tertiary": {
        "value": "{ds.color.amber.500}",
        "type": "color",
        "description": "Tertiary brand color"
      },
      "tertiary-foreground": {
        "value": "{ds.color.base.white}",
        "type": "color"
      }
    }
  }
}
```

2. Build et utiliser :
```tsx
<Button className="bg-ds-tertiary text-ds-tertiary-foreground" />
```

### Créer un nouveau thème

1. Créer `tokens/themes/mybrand-light.json` :

```json
{
  "ds": {
    "color": {
      "foreground": { "value": "#1a202c", "type": "color" },
      "background": { "value": "#f7fafc", "type": "color" },
      "primary": { "value": "#3182ce", "type": "color" },
      "primary-foreground": { "value": "#ffffff", "type": "color" }
    }
  }
}
```

2. Build :
```bash
pnpm run build:tokens
```

3. Appliquer le thème :
```tsx
applyTheme('mybrand-light')
```

### Ajouter un token de composant

1. Éditer `tokens/semantic/component.json` :

```json
{
  "ds": {
    "component": {
      "dropdown": {
        "padding": { "value": "{ds.spacing.component.md}", "type": "dimension" },
        "radius": { "value": "{ds.radius.md}", "type": "dimension" },
        "shadow": { "value": "{ds.shadow.lg}", "type": "shadow" },
        "max-height": { "value": "320px", "type": "dimension" }
      }
    }
  }
}
```

2. Utiliser dans le composant :
```tsx
<div className="
  p-[var(--ds-component-dropdown-padding)]
  rounded-[var(--ds-component-dropdown-radius)]
  shadow-[var(--ds-component-dropdown-shadow)]
  max-h-[var(--ds-component-dropdown-max-height)]
" />
```

---

## Meilleures pratiques

### ✅ À faire

- **Utiliser les références** dans semantic et themes : `{ds.color.purple.500}`
- **Ajouter des descriptions** pour documenter l'usage
- **Suivre la hiérarchie** : primitives → semantic → themes
- **Préfixer avec `ds-`** dans Tailwind pour éviter les conflits
- **Grouper logiquement** les tokens (color, spacing, component...)

### ❌ À éviter

- **Hardcoder des valeurs** dans les composants (utiliser les tokens)
- **Dupliquer les valeurs** entre primitives et semantic (utiliser références)
- **Modifier directement** les fichiers générés (`theme/tokens-build/`)
- **Oublier de rebuild** après modification des tokens

---

## CLI pour consommateurs

Les consommateurs de la lib peuvent générer leurs propres tokens :

```bash
npx my-ui-lib --tokens=./my-tokens --output=./output --themes=light,dark,custom
```

**Options :**
- `--tokens` : Répertoire source (défaut: `./tokens`)
- `--output` : Répertoire de sortie (défaut: `./theme/tokens-build`)
- `--themes` : Liste de thèmes séparés par virgule (défaut: `light,dark`)

---

## Ressources

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Design Tokens W3C Spec](https://design-tokens.github.io/community-group/format/)
- [Architecture docs](./architecture.md)
- [CLAUDE.md](../CLAUDE.md) - Instructions pour Claude Code

---

**Dernière mise à jour** : 2025-10-13
