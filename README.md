# 🎨 @dorian-ui/my-ui-lib

> **Design System React + Tailwind + Vite + TypeScript** — créé par **Dorian**

Un **Design System modulaire et extensible**, conçu pour être utilisé tel quel ou personnalisé via des **Design Tokens
JSON**.
Basé sur **TailwindCSS**, **React 18**, et un pipeline **Style Dictionary** pour gérer les thèmes *light/dark*.

---

## 🚀 Installation

```bash
pnpm add @dorian-ui/my-ui-lib
# ou
npm install @dorian-ui/my-ui-lib
```

---

## 🧱 Utilisation de base

### Importer les styles globaux :

```tsx
import '@dorian-ui/my-ui-lib/style.css'
```

### Importer et utiliser les composants :

```tsx
import { Button, Card, Typography } from '@dorian-ui/my-ui-lib'

export default function App() {
  return (
    <Card>
      <Typography.Heading level={2}>Hello My UI Lib!</Typography.Heading>
      <Button intent="primary">Click me</Button>
    </Card>
  )
}
```

---

## 🌗 Gestion du thème (light/dark)

Tu peux basculer dynamiquement entre les thèmes générés grâce à la fonction `applyTheme()` :

```tsx
import { applyTheme } from '@dorian-ui/my-ui-lib/theme/applyTheme'

applyTheme('dark') // ou 'light'
```

Ceci applique automatiquement les variables CSS de ton thème (`themes.css`, `dark.css`, `light.css`).

---

## 🧩 Structure du Design System

| Dossier                     | Description                                            |
|-----------------------------|--------------------------------------------------------|
| `src/components/ui/`        | Composants UI (Button, Card, Badge, etc.)              |
| `src/components/layout/`    | Composants de layout (Grid, Container, Section, Stack) |
| `src/components/utilities/` | Avatars, Dividers, Icons, etc.                         |
| `theme/`                    | Gestion des thèmes, tokens compilés et config Tailwind |
| `tokens/`                   | Design Tokens sources (JSON)                           |
| `tools/`                    | CLI + Template de génération                           |
| `scripts/`                  | Script `build-tokens.mjs` pour régénérer le thème      |

---

## 🧪 Commandes principales

### 🧩 Développement local

```bash
pnpm run dev
```

Lance Vite avec un environnement de démo local.

---

### 🗷️ Build complet (lib + tokens + types)

```bash
pnpm run build
```

* Génère les tokens (`theme/tokens-build/*`)
* Compile la lib en ESM + CJS (`dist/`)
* Génère les types TypeScript (`dist/types`)

---

### 🎨 Générer les tokens uniquement

```bash
pnpm run build:tokens
```

* Compile tous les JSON dans `tokens/`
* Produit :

  * `theme/tokens-build/tailwind.tokens.js`
  * `theme/tokens-build/css/` (light/dark)
  * `theme/tailwind.config.mjs`

---

### 🧪 Tester la lib dans un autre projet localement

```bash
pnpm run pack:local
```

Cette commande :

1. Build la lib
2. Crée un `.tgz`
3. Copie le package dans ton projet `../my-landing/`
4. Installe automatiquement le paquet

Tu peux alors tester :

```tsx
import { Button } from '@dorian-ui/my-ui-lib'
```

---

## 🎨 Personnalisation du Design System

Le Design System est **basé sur des tokens JSON**.
Tu peux modifier les fichiers du dossier :

```
tokens/
├─ global/
│  ├─ color.json
│  ├─ spacing.json
│  ├─ typography.json
│  └─ ...
├─ semantic/
│  └─ color.json
└─ themes/
   ├─ light.json
   └─ dark.json
```

Puis relancer :

```bash
pnpm run build:tokens
```

💥 Les CSS, variables et config Tailwind seront régénérées automatiquement.

---

## 🧱 Fichiers importants

| Fichier                                        | Rôle                                                         |
|------------------------------------------------|--------------------------------------------------------------|
| `theme/tailwind.config.mjs`                    | Config Tailwind générée automatiquement à partir des tokens  |
| `theme/applyTheme.ts`                          | Fonction d’application de thème runtime                      |
| `tools/cli.mjs`                                | CLI pour re-générer les tokens                               |
| `tools/templates/tailwind.config.template.mjs` | Template utilisé pour générer la config Tailwind             |
| `scripts/build-tokens.mjs`                     | Script de build appelé par la CLI et `pnpm run build:tokens` |

---

## 🧬 Exemple d’architecture générée après build

```
theme/
├── applyTheme.ts
├── tailwind.config.mjs
└── tokens-build/
    ├── tailwind.tokens.js
    └── css/
        ├── light.css
        ├── dark.css
        └── themes.css
```

---

## ⚙️ API CLI

### 📦 Générer les tokens

```bash
npx my-ui-lib --tokens=./tokens --themes=light,dark
```

### 🧰 Arguments

| Flag       | Description                   | Par défaut             |
|------------|-------------------------------|------------------------|
| `--tokens` | Dossier des tokens à compiler | `./tokens`             |
| `--output` | Dossier de sortie             | `./theme/tokens-build` |
| `--themes` | Liste des thèmes à générer    | `light,dark`           |

---

## 🧑‍💻 Pour les contributeurs

### 1️⃣ Cloner et installer :

```bash
git clone https://github.com/dorian-ui/my-ui-lib.git
cd my-ui-lib
pnpm install
```

### 2️⃣ Lancer la démo :

```bash
pnpm run dev
```

### 3️⃣ Modifier les composants ou tokens :

* Les composants se trouvent dans `src/components/`
* Les tokens dans `tokens/`

### 4️⃣ Rebuild :

```bash
pnpm run build
```

---

## 🧪 Stack technique

* ⚡ **Vite 5**
* 💅 **TailwindCSS 3**
* 🧠 **React 18 + TypeScript**
* 🎨 **Style Dictionary** pour la génération des tokens
* 🧰 **Storybook 8** (en option)
* 🧱 **pnpm** pour la gestion mono-repo rapide

---

## 📄 Licence

MIT © Dorian
Libre d’utilisation, de modification et de distribution.
