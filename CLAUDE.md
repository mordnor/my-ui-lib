# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@dorian-ui/my-ui-lib` is a modular React Design System library built with TypeScript, TailwindCSS, and Vite. It uses a token-based theming system powered by Style Dictionary, allowing for complete customization through JSON design tokens.

The library is published as an npm package with dual ESM/CJS builds and includes a CLI tool for token generation.

## Key Commands

### Development
```bash
pnpm run dev              # Start Vite dev server with demo environment
pnpm run typecheck        # Type-check without emitting files
pnpm run lint             # Run ESLint (max-warnings=0)
```

### Building
```bash
pnpm run build            # Full build: tokens → lib (ES+CJS) → types
pnpm run build:tokens     # Generate design tokens only
pnpm run build:types      # Generate TypeScript declarations only
```

### Testing
```bash
pnpm run test             # Run vitest
pnpm run test:ui          # Run vitest with UI
```

### Local Testing
```bash
pnpm run pack:local       # Build, pack, and install in ../my-landing/
```

## Project Structure

**See `docs/architecture.md` for complete architecture documentation.**

The project follows a clear separation between library code and demo application:

- `src/` - Library source code (exported to npm)
  - `components/` - React components (ui/, layout/, utilities/)
  - `hooks/` - Reusable React hooks
  - `utils/` - Utility functions
  - `types/` - Shared TypeScript types
  - `theme/` - Theme management
- `demo/` - Demo application (not exported)
  - Used for local development and testing
  - Consumes the library as if it were an external package
- `tokens/` - Design token definitions (JSON)
- `theme/` - Compiled tokens and Tailwind config
- `tests/` - Test configuration and utilities

## Architecture

### Design Token System

The design system is **token-driven**. All visual properties (colors, spacing, typography, etc.) are defined in JSON files under `tokens/` and compiled to CSS variables and Tailwind config.

**Token Directory Structure:**
- `tokens/global/` - Primitive tokens (color.json, spacing.json, typography.json, etc.)
- `tokens/semantic/` - Semantic mappings (color.json, component.json)
- `tokens/themes/` - Theme-specific values (light/, dark/)

**Token Build Pipeline:**
1. `scripts/build-tokens.mjs` orchestrates the build
2. `tools/token-engine.mjs` uses Style Dictionary to transform tokens
3. Outputs:
   - `theme/tokens-build/tailwind.tokens.js` - JS export for Tailwind
   - `theme/tokens-build/css/light.css` - CSS vars for light theme
   - `theme/tokens-build/css/dark.css` - CSS vars for dark theme
   - `theme/tokens-build/css/themes.css` - Combined CSS file
4. `theme/tailwind.config.mjs` is auto-generated from template

**Important:** Always run `pnpm run build:tokens` after modifying any JSON files in `tokens/`.

### Component Architecture

**Component Categories:**
- `src/components/ui/` - Core UI components (Button, Card, Badge, Typography, Input)
- `src/components/layout/` - Layout primitives (Container, Grid, Section, Stack)
- `src/components/utilities/` - Utility components (Avatar, avatar-group, Divider, icon)

**Naming Conventions:**
- Component folders: **kebab-case** (e.g., `avatar-group/`, `icon/`)
- Component files: **PascalCase** (e.g., `Button.tsx`, `AvatarGroup.tsx`)
- Type files: **kebab-case** with `.types.ts` extension (e.g., `Button.types.ts`)
- Hooks: **kebab-case** with `use-` prefix (e.g., `use-theme.ts`)

**Component Pattern:**
Each component follows this structure:
- `ComponentName.tsx` - Implementation
- `ComponentName.types.ts` - TypeScript types (note: `.types.ts` not `.type.tsx`)
- `ComponentName.stories.tsx` - Storybook stories
- `ComponentName.test.tsx` - Tests (optional)
- `index.ts` - Barrel export

**Design Token Usage in Components:**
All components use the `ds-*` prefix for Tailwind classes that map to design tokens:
```tsx
// Example from Button.tsx
className="bg-ds-accent-primary text-ds-text-inverse"
```

These classes reference CSS variables generated from tokens:
- `bg-ds-accent-primary` → `var(--ds-accent-primary)`
- `text-ds-text-inverse` → `var(--ds-text-inverse)`

### Theme System

**Runtime Theme Switching:**
- `src/theme/applyTheme.ts` - Functions to apply/get themes dynamically
- Themes are applied via `[data-theme="light|dark"]` attribute on `<html>`
- Theme preference is persisted in localStorage

**Available Functions:**
- `applyTheme(theme)` - Apply a theme ('light' | 'dark')
- `getCurrentTheme()` - Get current theme from localStorage
- `initTheme()` - Initialize theme on app load

### Build Configuration

**Vite (vite.config.ts):**
- Dual mode configuration based on `LIB_BUILD` environment variable
  - **Library build** (`LIB_BUILD=true`): Builds `src/` as ESM/CJS bundle
  - **Demo mode** (default): Serves `demo/` directory for development
- Entry: `src/index.ts` for library, `demo/index.html` for demo
- Externalizes React, react-dom, and all dependencies in library mode
- Generates source maps
- Uses SWC for React transforms

**TypeScript:**
- `tsconfig.json` - Main config (noEmit: true, includes demo/)
- `tsconfig.build.json` - Build config for generating .d.ts files (excludes demo/)
- Path aliases:
  - `@/*` → `src/*`
  - `@theme/*` → `src/theme/*`
  - `@dorian-ui/my-ui-lib` → `src/index.ts` (for demo imports)

### Package Exports

The package.json defines specific exports:
```json
{
  ".": "dist/index.es.js" (ESM) / "dist/index.cjs.js" (CJS),
  "./style.css": "dist/style.css",
  "./theme/tailwind.config.mjs": "theme/tailwind.config.mjs",
  "./theme/*": "theme/*"
}
```

Consumers can import:
```tsx
import { Button } from '@dorian-ui/my-ui-lib'
import '@dorian-ui/my-ui-lib/style.css'
import { applyTheme } from '@dorian-ui/my-ui-lib/theme/applyTheme'
```

## CLI Tool

The package includes a CLI (`tools/cli.mjs`) for token generation:

```bash
npx my-ui-lib --tokens=./tokens --output=./theme/tokens-build --themes=light,dark
```

**Flags:**
- `--tokens` - Source directory (default: ./tokens)
- `--output` - Output directory (default: ./theme/tokens-build)
- `--themes` - Comma-separated theme list (default: light,dark)

## Development Workflow

### Adding a New Component

1. Create component files in appropriate directory (ui/layout/utilities)
2. Follow naming convention: `ComponentName.tsx`, `ComponentName.types.tsx`
3. Use `ds-*` prefixed Tailwind classes for token-based styling
4. Export from component's `index.ts`
5. Add export to `src/index.ts`
6. Run `pnpm run build` to verify types and build

### Modifying Design Tokens

1. Edit JSON files in `tokens/global/`, `tokens/semantic/`, or `tokens/themes/`
2. Run `pnpm run build:tokens` to regenerate CSS and Tailwind config
3. Test changes in dev mode with `pnpm run dev`
4. Token changes automatically propagate to all components using `ds-*` classes

### Adding a New Theme

1. Create `tokens/themes/newtheme/` directory or `tokens/themes/newtheme.json` file
2. Define theme-specific token values
3. Run `pnpm run build:tokens` (auto-detects new themes)
4. Update `ThemeName` type in `src/theme/applyTheme.ts` if needed

## Path Aliases

When importing files, use these aliases:
- `@/` - Points to `src/` directory
- `@theme/` - Points to `src/theme/` (dev) or `theme/` (build)

Example:
```tsx
import { Button } from '@/components/ui/button'
import { applyTheme } from '@theme/applyTheme'
```

## Storybook

The project includes Storybook 8 for component documentation. Stories are colocated with components (*.stories.tsx).

## Testing

Tests use Vitest with happy-dom. Test files should be placed alongside components with `*.test.tsx` extension (excluded from build via tsconfig.build.json).
