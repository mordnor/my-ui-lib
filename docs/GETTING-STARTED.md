# Getting Started with React + Tailwind Boilerplate

Welcome! This guide will help you get started with your new React + Tailwind + Design System boilerplate.

## What's Inside

This boilerplate provides everything you need to build a modern React application:

- **Design System** with light/dark theming
- **Component Library** with pre-built UI components
- **Token-based styling** via Style Dictionary
- **TypeScript** for type safety
- **Vite** for fast development
- **ESLint & Prettier** configured out of the box

## First Steps

### 1. Install Dependencies

```bash
pnpm install
# or npm install / yarn install
```

### 2. Generate Design Tokens

Before starting development, generate the CSS variables from design tokens:

```bash
pnpm build:tokens
```

This creates:
- `theme/tokens-build/css/light.css` - Light theme variables
- `theme/tokens-build/css/dark.css` - Dark theme variables
- `theme/tokens-build/css/themes.css` - Combined themes
- `theme/tokens-build/tailwind.tokens.js` - Tailwind config tokens

### 3. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:5173` to see your app!

## Project Structure Overview

```
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom hooks
│   ├── theme/            # Theme utilities
│   ├── App.tsx           # Main app
│   └── main.tsx          # Entry point
│
├── tokens/               # Design token definitions (JSON)
│   ├── primitives/       # Base tokens
│   ├── semantic/         # Semantic tokens
│   └── themes/           # light.json, dark.json
│
├── theme/                # Generated files (auto-generated)
│   ├── tokens-build/     # CSS and JS outputs
│   └── tailwind.config.mjs
│
└── scripts/              # Build scripts
```

## Customizing Your Brand

### Step 1: Update Colors

Edit `tokens/primitives/colors.json` to define your brand colors:

```json
{
  "primitives": {
    "color": {
      "brand": {
        "primary": { "value": "#your-color" }
      }
    }
  }
}
```

### Step 2: Map to Semantic Tokens

Update `tokens/semantic/colors.json` to map your colors:

```json
{
  "ds": {
    "accent": {
      "primary": { "value": "{primitives.color.brand.primary}" }
    }
  }
}
```

### Step 3: Regenerate Tokens

```bash
pnpm build:tokens
```

All components using `bg-ds-accent-primary` will now use your brand color!

## Adding Components

### Create a New Component

```bash
mkdir -p src/components/ui/my-component
```

Create `src/components/ui/my-component/MyComponent.tsx`:

```tsx
import type { MyComponentProps } from './MyComponent.types'

export function MyComponent({ children }: MyComponentProps) {
  return (
    <div className="bg-ds-surface text-ds-text-primary p-4 rounded-lg">
      {children}
    </div>
  )
}
```

Create `src/components/ui/my-component/MyComponent.types.ts`:

```tsx
export interface MyComponentProps {
  children?: React.ReactNode
}
```

Create `src/components/ui/my-component/index.ts`:

```tsx
export { MyComponent } from './MyComponent'
export type { MyComponentProps } from './MyComponent.types'
```

### Use Your Component

```tsx
import { MyComponent } from '@/components/ui/my-component'

function App() {
  return <MyComponent>Hello!</MyComponent>
}
```

## Theme Switching

### Basic Usage

```tsx
import { applyTheme, toggleTheme, getCurrentTheme } from '@theme/applyTheme'

// Get current theme
const theme = getCurrentTheme() // 'light' | 'dark'

// Set a specific theme
applyTheme('dark')

// Toggle between themes
toggleTheme()
```

### React Hook Example

```tsx
import { useState, useEffect } from 'react'
import { getCurrentTheme, applyTheme } from '@theme/applyTheme'

function ThemeSwitcher() {
  const [theme, setTheme] = useState(getCurrentTheme())

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    applyTheme(newTheme)
    setTheme(newTheme)
  }

  return (
    <button onClick={handleToggle}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
```

## Design Token Classes

All design system tokens are available as Tailwind classes with the `ds-` prefix:

### Colors
- `bg-ds-surface` - Surface backgrounds
- `bg-ds-accent-primary` - Primary accent color
- `text-ds-text-primary` - Primary text
- `text-ds-text-secondary` - Secondary text
- `border-ds-border` - Border colors

### Spacing
- `p-ds-4` - Padding from tokens
- `m-ds-6` - Margin from tokens
- `gap-ds-3` - Gap from tokens

### Typography
- `text-ds-body-md` - Body text
- `text-ds-heading-lg` - Large heading

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server at localhost:5173 |
| `pnpm build` | Build for production (with token generation) |
| `pnpm build:tokens` | Generate design tokens only |
| `pnpm preview` | Preview production build |
| `pnpm test` | Run tests |
| `pnpm lint` | Check code quality |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm typecheck` | Check TypeScript types |
| `pnpm format` | Format code with Prettier |

## Building for Production

```bash
pnpm build
```

Your production-ready files will be in `dist/`:
- `dist/assets/` - Bundled JS and CSS
- `dist/index.html` - Entry point

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Static Hosting

Simply upload the contents of `dist/` to any static hosting service.

## Tips & Best Practices

### ✅ DO

- Use `ds-*` classes for styling (e.g., `bg-ds-surface`)
- Modify tokens in `tokens/` directory
- Run `pnpm build:tokens` after changing tokens
- Use path aliases (`@/` for src, `@theme/` for theme)

### ❌ DON'T

- Use hardcoded colors like `bg-blue-500`
- Edit files in `theme/tokens-build/` (auto-generated)
- Edit `theme/tailwind.config.mjs` (auto-generated)
- Forget to regenerate tokens after changes

## Need Help?

- Check the main [README.md](../README.md) for more details
- Review example components in `src/components/`
- Look at token structure in `tokens/`
- Check the demo in `demo-example/` for advanced usage

## Next Steps

1. Customize your brand colors in `tokens/primitives/colors.json`
2. Update `package.json` with your project name
3. Modify `src/App.tsx` to build your application
4. Add your own components
5. Deploy!

Happy coding! 🚀
