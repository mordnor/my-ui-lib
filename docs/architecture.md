# 🏗️ Architecture du projet

## 📁 Structure des répertoires

```
my-ui-lib/
├── src/                    # 📦 Code de la librairie (exporté npm)
│   ├── components/         # Composants React
│   │   ├── ui/            # Composants UI (Button, Card, Badge, etc.)
│   │   ├── layout/        # Composants de layout (Container, Grid, Section, Stack)
│   │   └── utilities/     # Composants utilitaires (Avatar, Icon, Divider)
│   ├── hooks/             # Hooks React réutilisables
│   ├── utils/             # Fonctions utilitaires
│   ├── types/             # Types TypeScript partagés
│   ├── theme/             # Gestion du thème
│   └── index.ts           # Point d'entrée principal de la lib
│
├── demo/                   # 🎪 Application de démonstration (non exportée)
│   ├── src/
│   │   ├── pages/         # Pages de démo
│   │   ├── assets/        # Assets de la démo
│   │   └── App.tsx        # Application React de démo
│   ├── index.html
│   └── public/
│
├── tokens/                 # 🎨 Design tokens (JSON)
│   ├── global/            # Tokens primitifs
│   ├── semantic/          # Tokens sémantiques
│   └── themes/            # Tokens par thème (light/dark)
│
├── theme/                  # 🔧 Tokens compilés & config Tailwind
│   ├── tokens-build/      # Sortie de la compilation des tokens
│   └── tailwind.config.mjs
│
├── tools/                  # 🛠️ Outils de build
│   ├── cli.mjs            # CLI pour générer les tokens
│   └── token-engine.mjs   # Moteur de génération des tokens
│
├── scripts/                # 📜 Scripts de build
│   └── build-tokens.mjs
│
└── tests/                  # 🧪 Configuration et utilitaires de test
    └── setup.ts
```

## 🎯 Conventions de nommage

### Fichiers et dossiers
- **Composants**: PascalCase (ex: `Button.tsx`, `Container.tsx`)
- **Hooks**: kebab-case avec préfixe `use-` (ex: `use-theme.ts`)
- **Utils**: kebab-case (ex: `cn.ts`)
- **Types**: kebab-case avec `.types.ts` (ex: `Button.types.ts`)
- **Dossiers de composants**: kebab-case (ex: `avatar-group/`, `icon/`)

### Structure d'un composant

```
component-name/
├── ComponentName.tsx        # Implémentation
├── ComponentName.types.ts   # Types TypeScript
├── ComponentName.stories.tsx # Stories Storybook
├── ComponentName.test.tsx   # Tests (optionnel)
└── index.ts                 # Barrel export
```

## 🔄 Pipeline de build

### 1. Tokens → CSS + Tailwind
```bash
pnpm run build:tokens
```
- Lit les tokens JSON depuis `tokens/`
- Génère CSS variables dans `theme/tokens-build/css/`
- Génère config Tailwind dans `theme/tokens-build/tailwind.tokens.js`

### 2. Library → ESM + CJS
```bash
pnpm run build:lib  # ou LIB_BUILD=true vite build
```
- Compile `src/` en bundle ESM et CJS
- Externalise React, react-dom et dépendances
- Génère `dist/index.es.js` et `dist/index.cjs.js`

### 3. Types → .d.ts
```bash
pnpm run build:types
```
- Génère les déclarations TypeScript dans `dist/types/`

### Build complet
```bash
pnpm run build
```
Exécute les 3 étapes ci-dessus en séquence.

## 📦 Exports npm

Le package exporte :
- **Composants**: via `@dorian-ui/my-ui-lib`
- **Styles**: via `@dorian-ui/my-ui-lib/style.css`
- **Theme utils**: `applyTheme`, `ThemeProvider`, `useTheme`, etc.
- **Config Tailwind**: via `@dorian-ui/my-ui-lib/theme/tailwind.config.mjs`
- **CLI**: commande `my-ui-lib` pour regénérer les tokens

## 🎨 Système de thème

### Architecture

1. **Tokens JSON** (`tokens/`) définissent les valeurs brutes
2. **Style Dictionary** compile les tokens en CSS variables
3. **Tailwind** utilise ces variables via le préfixe `ds-*`
4. **Composants** utilisent les classes Tailwind `ds-*`

### Changement de thème

```tsx
import { applyTheme } from '@dorian-ui/my-ui-lib'

applyTheme('dark') // Applique [data-theme="dark"] sur <html>
```

### Avec Context Provider

```tsx
import { ThemeProvider, useThemeContext } from '@dorian-ui/my-ui-lib'

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <MyApp />
    </ThemeProvider>
  )
}

function MyComponent() {
  const { theme, setTheme } = useThemeContext()
  // ...
}
```

## 🧪 Tests

Configuration dans `tests/setup.ts`.
- Framework: Vitest
- Environment: happy-dom
- Testing Library: React Testing Library

```bash
pnpm run test          # Run tests
pnpm run test:ui       # Run tests with UI
pnpm run test:coverage # Generate coverage report
```

## 🔧 Mode développement

### Dev de la lib
```bash
pnpm run dev
```
Lance Vite en mode dev, sert `demo/` sur `http://localhost:5173`

### Dev d'un composant
1. Créer le composant dans `src/components/`
2. L'exporter dans `src/index.ts`
3. L'utiliser dans `demo/src/` pour tester

## 📝 Principes de design

1. **Séparation lib/demo**: Le code de la lib (`src/`) ne doit jamais dépendre de la démo (`demo/`)
2. **Token-driven**: Tous les styles utilisent les tokens via classes `ds-*`
3. **Composants polymorphes**: Utiliser `as` prop pour flexibilité du tag HTML
4. **Type-safe**: TypeScript strict mode activé
5. **Barrel exports**: Chaque module expose via `index.ts`
