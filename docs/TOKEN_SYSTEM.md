# 🎨 Token System Architecture

## Overview

This design system uses a **3-layer hierarchical token architecture** powered by Style Dictionary:

```
Base Tokens → Semantic Tokens → Theme Tokens
```

All tokens use the `ds-*` namespace consistently across CSS variables, Tailwind classes, and TypeScript constants.

---

## 📦 3-Layer Architecture

### Layer 1: Base Tokens (`tokens/base/`)

**Purpose**: Raw, context-agnostic primitive values
**Examples**: Color palettes, spacing scales, typography scales
**Usage**: Never referenced directly in components

```json
{
  "ds": {
    "color": {
      "blue": {
        "600": { "value": "#2563eb", "type": "color" }
      }
    },
    "spacing": {
      "4": { "value": "1rem", "type": "dimension" }
    }
  }
}
```

**Base token files**:
- `color.json` - Color palettes (slate, blue, cyan, indigo, emerald, rose, amber)
- `spacing.json` - Spacing scale (0-64 + responsive)
- `typography.json` - Font families, sizes, weights, line-heights, letter-spacing
- `radius.json` - Border radius values
- `shadow.json` - Box shadow definitions
- `motion.json` - Animation durations and easing functions
- `breakpoint.json` - Responsive breakpoints
- `opacity.json` - Opacity scale
- `z-index.json` - Z-index layering system

### Layer 2: Semantic Tokens (`tokens/semantic/`)

**Purpose**: Purpose-driven tokens that reference base tokens
**Examples**: text.primary, background.surface, spacing.layout.md
**Usage**: Referenced in React components and Tailwind classes

```json
{
  "ds": {
    "color": {
      "text": {
        "primary": { "value": "{ds.color.slate.900}", "type": "color" }
      },
      "background": {
        "app": { "value": "{ds.color.slate.50}", "type": "color" }
      }
    }
  }
}
```

**Semantic token files**:
- `color.json` - text.*, background.*, border.*, brand.*, accent.*, state.*, interaction.*
- `spacing.json` - component.*, layout.*, section.*, container.*
- `typography.json` - heading.*, body.*, label.*, code.*
- `component.json` - button.*, input.*, card.*, avatar.*, badge.*, modal.*, tooltip.*
- `effect.json` - elevation.*, focus.*, interaction.*

### Layer 3: Theme Tokens (`tokens/themes/`)

**Purpose**: Theme-specific overrides of semantic tokens
**Examples**: Dark mode adjustments, brand variants
**Usage**: Applied via `data-theme` attribute

```json
{
  "ds": {
    "color": {
      "text": {
        "primary": { "value": "{ds.color.slate.100}", "type": "color" }
      },
      "background": {
        "app": { "value": "{ds.color.slate.950}", "type": "color" }
      }
    }
  }
}
```

**Theme files**:
- `light.json` - Light theme (default semantic values or overrides)
- `dark.json` - Dark theme with inverted colors
- `brand-a.json` - Optional brand variant A
- `brand-b.json` - Optional brand variant B

---

## 🔄 Token Flow Example

```
1. Base Token Definition
   └─> ds.color.blue.600 = "#2563eb"

2. Semantic Token Reference
   └─> ds.color.brand.primary = "{ds.color.blue.600}"

3. Theme Override (optional)
   └─> [dark] ds.color.brand.primary = "{ds.color.blue.400}"

4. CSS Output
   └─> --ds-color-brand-primary: #2563eb;  (light theme)
   └─> --ds-color-brand-primary: #60a5fa;  (dark theme)

5. Tailwind Usage
   └─> text-ds-brand-primary
   └─> bg-ds-brand-primary

6. TypeScript Usage
   └─> import { tokens } from '@/theme/tokens-build/ts'
   └─> tokens.color.brand.primary
```

---

## 🛠️ Token Generation Pipeline

### Build Process

```bash
pnpm run build:tokens
```

**Pipeline steps**:

1. **Read token files** in order: `base/**/*.json` → `semantic/**/*.json` → `themes/{theme}.json`
2. **Process with Style Dictionary** using custom formats
3. **Generate outputs**:
   - CSS Variables (`theme/tokens-build/css/{theme}.css`)
   - TypeScript Constants (`theme/tokens-build/ts/{theme}.ts`)
   - JavaScript for Tailwind (`theme/tokens-build/tailwind.tokens.js`)
   - JSON for debugging (`theme/tokens-build/{theme}.json`)
4. **Combine CSS themes** into single file (`theme/tokens-build/css/themes.css`)
5. **Update Tailwind config** with new token mappings

### Output Examples

**CSS Variables** (`--ds-*` prefix):
```css
[data-theme='light'] {
  --ds-color-text-primary: var(--ds-color-slate-900);
  --ds-color-background-app: var(--ds-color-slate-50);
  --ds-spacing-layout-md: var(--ds-spacing-8);
  --ds-radius-md: 0.375rem;
}

[data-theme='dark'] {
  --ds-color-text-primary: var(--ds-color-slate-100);
  --ds-color-background-app: var(--ds-color-slate-950);
}
```

**TypeScript Constants**:
```typescript
export const tokens = {
  color: {
    text: {
      primary: '#0f172a',
      secondary: '#475569'
    },
    background: {
      app: '#f8fafc',
      surface: '#ffffff'
    }
  },
  spacing: {
    layout: {
      md: '2rem',
      lg: '3rem'
    }
  }
} as const

export type Tokens = typeof tokens
```

---

## 🎯 Usage in React Components

### Method 1: Tailwind Classes (Recommended)

```tsx
import { Section } from '@/components/layout/section/Section'

export function MyComponent() {
  return (
    <Section bg="app" vertical="lg">
      <div className="bg-ds-background-surface text-ds-text-primary p-ds-layout-md rounded-ds-md shadow-ds-md">
        <h1 className="text-ds-2xl font-ds-bold text-ds-brand-primary">
          Hello World
        </h1>
      </div>
    </Section>
  )
}
```

**Available Tailwind utilities**:
- Colors: `text-ds-{token}`, `bg-ds-{token}`, `border-ds-{token}`
- Spacing: `p-ds-{token}`, `m-ds-{token}`, `gap-ds-{token}`
- Typography: `text-ds-{size}`, `font-ds-{weight}`, `leading-ds-{height}`
- Borders: `rounded-ds-{radius}`, `border-ds-{width}`
- Shadows: `shadow-ds-{elevation}`
- Motion: `duration-ds-{speed}`, `ease-ds-{curve}`

### Method 2: CSS Variables (Direct)

```tsx
export function MyComponent() {
  return (
    <div style={{
      backgroundColor: 'var(--ds-color-background-surface)',
      color: 'var(--ds-color-text-primary)',
      padding: 'var(--ds-spacing-layout-md)',
      borderRadius: 'var(--ds-radius-md)'
    }}>
      Content
    </div>
  )
}
```

### Method 3: TypeScript Tokens (Type-Safe)

```tsx
import { lightTokens } from '@/theme/tokens-build/ts'

export function MyComponent() {
  return (
    <div style={{
      backgroundColor: lightTokens.color.background.surface,
      color: lightTokens.color.text.primary,
      padding: lightTokens.spacing.layout.md
    }}>
      Content with type-safe tokens
    </div>
  )
}
```

---

## 🎨 Theme Switching

### Apply Theme

```typescript
import { applyTheme } from '@dorian-ui/my-ui-lib'

// Apply theme (sets data-theme attribute and localStorage)
applyTheme('dark')
applyTheme('light')
```

### React Hook

```typescript
import { useTheme } from '@dorian-ui/my-ui-lib'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  )
}
```

### React Context

```tsx
import { ThemeProvider } from '@dorian-ui/my-ui-lib'

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  )
}
```

---

## ➕ Adding New Tokens

### 1. Add Base Token

```json
// tokens/base/color.json
{
  "ds": {
    "color": {
      "purple": {
        "600": { "value": "#9333ea", "type": "color" }
      }
    }
  }
}
```

### 2. Create Semantic Token

```json
// tokens/semantic/color.json
{
  "ds": {
    "color": {
      "brand": {
        "tertiary": { "value": "{ds.color.purple.600}", "type": "color" }
      }
    }
  }
}
```

### 3. Add Theme Override (Optional)

```json
// tokens/themes/dark.json
{
  "ds": {
    "color": {
      "brand": {
        "tertiary": { "value": "{ds.color.purple.400}", "type": "color" }
      }
    }
  }
}
```

### 4. Rebuild Tokens

```bash
pnpm run build:tokens
```

### 5. Use in Components

```tsx
// Automatically available in Tailwind
<div className="text-ds-brand-tertiary">
  Purple text!
</div>

// Or via CSS variable
<div style={{ color: 'var(--ds-color-brand-tertiary)' }}>
  Purple text!
</div>

// Or via TypeScript
import { lightTokens } from '@/theme/tokens-build/ts'
<div style={{ color: lightTokens.color.brand.tertiary }}>
  Purple text!
</div>
```

---

## 🏗️ Design Decisions

### Why 3 Layers?

1. **Separation of Concerns**
   - Base: Pure values, no context
   - Semantic: Purpose-driven, context-aware
   - Theme: Visual variants, overrides

2. **Maintainability**
   - Change a base color → automatically updates all semantic references
   - Add new theme → only override what's different
   - Refactor semantic layer → components don't break

3. **Scalability**
   - Add new brand variants easily
   - Support unlimited themes
   - Consistent token structure

### Why `ds-*` Namespace?

1. **Avoid Conflicts**: Prevents clashes with other libraries
2. **Clear Intent**: Immediately recognizable as design system tokens
3. **Consistent API**: Same prefix across CSS, Tailwind, and TypeScript

### Why Style Dictionary?

1. **Industry Standard**: Battle-tested token transformation tool
2. **Multi-Platform**: Generates CSS, JS, TS, JSON, iOS, Android
3. **Extensible**: Custom formats and transforms
4. **Token References**: Automatic resolution of `{token.path}` syntax

---

## 📁 Project Structure

```
my-ui-lib/
├── tokens/                      # Source tokens
│   ├── base/                    # Layer 1: Primitive values
│   │   ├── color.json
│   │   ├── spacing.json
│   │   ├── typography.json
│   │   ├── radius.json
│   │   ├── shadow.json
│   │   ├── motion.json
│   │   ├── breakpoint.json
│   │   ├── opacity.json
│   │   └── z-index.json
│   ├── semantic/                # Layer 2: Purpose-driven
│   │   ├── color.json
│   │   ├── spacing.json
│   │   ├── typography.json
│   │   ├── component.json
│   │   └── effect.json
│   └── themes/                  # Layer 3: Theme overrides
│       ├── light.json
│       ├── dark.json
│       ├── brand-a.json
│       └── brand-b.json
├── theme/
│   ├── tokens-build/            # Generated outputs
│   │   ├── css/
│   │   │   ├── light.css
│   │   │   ├── dark.css
│   │   │   └── themes.css       # Combined
│   │   ├── ts/
│   │   │   ├── light.ts
│   │   │   ├── dark.ts
│   │   │   └── index.ts
│   │   ├── tailwind.tokens.js
│   │   ├── light.json
│   │   └── dark.json
│   └── tailwind.config.mjs      # Tailwind integration
├── tools/
│   └── token-engine.mjs         # Style Dictionary builder
└── scripts/
    └── build-tokens.mjs         # Build script
```

---

## 🔧 Token Engine Configuration

### Style Dictionary 5.x API

```javascript
// tools/token-engine.mjs
import StyleDictionary from 'style-dictionary'

// Register custom TypeScript format
StyleDictionary.registerFormat({
  name: 'typescript/tokens',
  format: ({ dictionary }) => {
    // Generate typed TypeScript constants
  }
})

// Build for each theme
const config = {
  source: [
    'tokens/base/**/*.json',
    'tokens/semantic/**/*.json',
    'tokens/themes/light.json'
  ],
  platforms: {
    css: { /* CSS variables */ },
    js: { /* Tailwind tokens */ },
    ts: { /* TypeScript constants */ },
    json: { /* Debug output */ }
  }
}

const SD = new StyleDictionary(config)
await SD.buildAllPlatforms()
```

### Tailwind Integration

```javascript
// theme/tailwind.config.mjs
import tokens from './tokens-build/tailwind.tokens.js'

export default {
  theme: {
    extend: {
      colors: {
        'ds-text-primary': 'var(--ds-color-text-primary)',
        'ds-background-app': 'var(--ds-color-background-app)',
        // ... auto-generated from tokens
      },
      spacing: {
        'ds-layout-md': 'var(--ds-spacing-layout-md)',
        // ... auto-generated from tokens
      }
    }
  }
}
```

---

## 🚀 Best Practices

### ✅ DO

- Use semantic tokens in components (`text-ds-text-primary`)
- Reference base tokens in semantic layer (`{ds.color.blue.600}`)
- Override only what's different in themes
- Use TypeScript tokens for type safety
- Keep token names descriptive and consistent

### ❌ DON'T

- Use base tokens directly in components
- Hard-code colors or spacing values
- Create circular token references
- Skip the semantic layer
- Mix token systems (CSS vars + hardcoded values)

---

## 📚 Additional Resources

- [Style Dictionary Documentation](https://styledictionary.com/)
- [Design Tokens W3C Spec](https://www.w3.org/community/design-tokens/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🎉 Summary

This token system provides:

✅ **3-layer architecture** for scalability
✅ **Consistent `ds-*` namespace** across all platforms
✅ **Auto-generation** of CSS, TypeScript, and Tailwind tokens
✅ **Type-safe** token usage in React
✅ **Multi-theme support** with easy theme switching
✅ **Maintainable** and **future-proof** design system

**Next steps**: Build your library, run `pnpm run build`, and start using tokens in your components!
