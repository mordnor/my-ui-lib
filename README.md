# React + Tailwind + Design System Boilerplate

> **A production-ready boilerplate for building scalable React applications with a token-based Design System, Tailwind CSS, and TypeScript.**

## Features

- **React 18** with TypeScript
- **Tailwind CSS 3** with custom Design System tokens
- **Token-based theming** (light/dark) via Style Dictionary
- **Vite** for lightning-fast development
- **Component library** with pre-built UI components
- **Testing** with Vitest and Testing Library
- **ESLint + Prettier** preconfigured
- **Zero-config theme switching** via `data-theme` attribute

## Quick Start

### 1. Clone and Install

```bash
# Clone this repository
git clone <your-repo-url> my-new-project
cd my-new-project

# Install dependencies
pnpm install
# or npm install / yarn install
```

### 2. Start Development

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
pnpm build
```

Your production-ready app will be in the `dist/` directory.

## Using Components

Import and use pre-built components:

```tsx
import { Button, Card, Typography } from '@/components'

export default function App() {
  return (
    <Card>
      <Typography.Heading level={2}>Hello World!</Typography.Heading>
      <Button intent="primary">Click me</Button>
    </Card>
  )
}
```

## Theme Switching

The boilerplate includes a simple theme system:

```tsx
import { applyTheme, getCurrentTheme, toggleTheme } from '@theme/applyTheme'

// Get current theme
const theme = getCurrentTheme() // 'light' or 'dark'

// Apply a theme
applyTheme('dark')

// Toggle between light and dark
toggleTheme()
```

Themes are automatically persisted in `localStorage` and respect system preferences.

## Project Structure

```
.
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Core UI components (Button, Card, Input, etc.)
│   │   ├── layout/       # Layout components (Container, Grid, Stack, etc.)
│   │   └── utilities/    # Utility components (Avatar, Icon, Divider, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── theme/            # Theme management (applyTheme, toggleTheme)
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
│
├── tokens/               # Design tokens (JSON)
│   ├── primitives/       # Base tokens (colors, spacing, typography)
│   ├── semantic/         # Semantic tokens (component styles)
│   └── themes/           # Theme-specific tokens (light.json, dark.json)
│
├── theme/                # Generated theme files
│   ├── tokens-build/     # Auto-generated CSS and JS
│   │   ├── css/          # light.css, dark.css, themes.css
│   │   └── tailwind.tokens.js
│   └── tailwind.config.mjs
│
└── scripts/              # Build scripts
    └── build-tokens.mjs  # Token generation script
```

## Design System

### How It Works

This boilerplate uses a **3-layer token architecture**:

1. **Primitives** (`tokens/primitives/`) - Base design values (colors, spacing, typography)
2. **Semantic** (`tokens/semantic/`) - Purpose-driven tokens (primary, secondary, success, etc.)
3. **Themes** (`tokens/themes/`) - Theme-specific values (light.json, dark.json)

### Token Workflow

1. Edit JSON files in `tokens/`
2. Run `pnpm build:tokens` to generate CSS variables and Tailwind config
3. Use `ds-*` prefixed classes in your components

Example:
```tsx
<button className="bg-ds-accent-primary text-ds-text-inverse">
  Click me
</button>
```

This maps to CSS variables:
```css
.bg-ds-accent-primary {
  background-color: var(--ds-accent-primary);
}
```

### Modifying Design Tokens

1. Edit token files in `tokens/primitives/`, `tokens/semantic/`, or `tokens/themes/`
2. Run `pnpm build:tokens`
3. Changes automatically propagate to all components using `ds-*` classes

Example - Change primary color:
```json
// tokens/themes/light.json
{
  "ds": {
    "accent": {
      "primary": { "value": "#3b82f6" }
    }
  }
}
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm build:tokens` | Generate design tokens |
| `pnpm preview` | Preview production build |
| `pnpm test` | Run tests |
| `pnpm test:ui` | Run tests with UI |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm lint` | Lint code |
| `pnpm lint:fix` | Lint and fix code |
| `pnpm typecheck` | Type-check TypeScript |
| `pnpm format` | Format code with Prettier |

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Style Dictionary** - Token transformation
- **Vitest** - Unit testing
- **Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## Customization Guide

### 1. Rename the Project

Update `package.json`:
```json
{
  "name": "your-project-name",
  "author": "Your Name <your.email@domain.com>"
}
```

### 2. Customize Tokens

Edit files in `tokens/` to match your brand:
- `tokens/primitives/colors.json` - Base color palette
- `tokens/semantic/colors.json` - Semantic color mapping
- `tokens/themes/light.json` - Light theme values
- `tokens/themes/dark.json` - Dark theme values

Then run:
```bash
pnpm build:tokens
```

### 3. Remove Unwanted Components

This boilerplate includes many pre-built components. Feel free to remove any you don't need.

## Best Practices

### Use Design Tokens

Always use `ds-*` prefixed classes instead of hardcoded values:

✅ **Good:**
```tsx
<div className="bg-ds-surface text-ds-text-primary" />
```

❌ **Bad:**
```tsx
<div className="bg-white text-gray-900" />
```

## License

MIT

---

**Ready to build something amazing?** 🚀

This boilerplate gives you everything you need to start a new React project with a professional Design System, theming, and component library out of the box.

Just clone, install, and start coding!
