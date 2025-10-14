/**
 * 🧱 Design System Tailwind Config — namespace `ds-*`
 * Auto-synced with Style Dictionary tokens
 * 3-layer architecture: base → semantic → theme
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isDev = process.env.NODE_ENV !== 'production'

const tokensPath = path.resolve(__dirname, './tokens-build/tailwind.tokens.js')
let tokens = {}
if (fs.existsSync(tokensPath)) {
  try {
    tokens = require(tokensPath)
    if (tokens.default) tokens = tokens.default
    console.log('✅ Tokens loaded successfully')
  } catch (err) {
    console.warn('⚠️ Failed to import tokens:', err.message)
  }
} else {
  console.warn('⚠️ Tokens file missing — run "pnpm run build:tokens" first.')
}

/* --------------------------------------------------
   🧮 Utils
-------------------------------------------------- */
const toKebab = str =>
  str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()

const toCssVar = key => `var(--${toKebab(key)})`

/**
 * Extract tokens by nested path
 * Example: extractNested(['ds', 'color', 'slate']) → { '50': '#f8fafc', ... }
 */
const extractNested = pathArray => {
  let current = tokens
  for (const key of pathArray) {
    if (!current || typeof current !== 'object') return {}
    current = current[key]
  }
  return current || {}
}

/**
 * Flatten nested tokens into Tailwind-friendly format
 * Example: { text: { primary: '...' } } → { 'text-primary': '...' }
 */
const flattenTokens = (obj, prefix = '', separator = '-') => {
  const result = {}

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}${separator}${key}` : key

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenTokens(value, newKey, separator))
    } else {
      result[newKey] = value
    }
  }

  return result
}

/**
 * Map tokens to CSS variables with ds- prefix
 */
const mapToCssVars = (obj, basePath = '') => {
  const result = {}

  for (const [key, value] of Object.entries(obj)) {
    const fullPath = basePath ? `${basePath}-${key}` : key
    const cssVarName = `--${fullPath}`
    result[key] = `var(${cssVarName})`
  }

  return result
}

/* --------------------------------------------------
   ⚙️ Tailwind Config étendue - DS namespace `ds-*`
-------------------------------------------------- */
export default {
  darkMode: ['class', '[data-theme="dark"]'],

  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    './demo/**/*.{ts,tsx,js,jsx}',
    ...(isDev
      ? [path.resolve(__dirname, '../my-landing/src/**/*.{ts,tsx,js,jsx}')]
      : [])
  ],

  safelist: [
    { pattern: /^bg-ds-/, variants: ['hover', 'focus', 'active', 'dark'] },
    { pattern: /^text-ds-/, variants: ['hover', 'focus', 'active', 'dark'] },
    { pattern: /^border-ds-/, variants: ['hover', 'focus', 'active', 'dark'] },
    { pattern: /^shadow-ds-/, variants: ['hover', 'focus'] },
    { pattern: /^ring-ds-/, variants: ['focus'] },
    { pattern: /^duration-ds-/ },
    { pattern: /^ease-ds-/ },
    { pattern: /^gap-ds-/ },
    { pattern: /^rounded-ds-/ },
    { pattern: /^font-ds-/ },
    { pattern: /^leading-ds-/ },
    { pattern: /^tracking-ds-/ },
    { pattern: /^p?-?x?-?y?-?m?-?b?-?t?-?l?-?r?-?ds-/ },
    // Explicit color utilities for text
    'text-ds-foreground',
    'text-ds-muted-foreground',
    'text-ds-primary',
    'text-ds-primary-foreground',
    'text-ds-secondary',
    'text-ds-secondary-foreground',
    'text-ds-accent',
    'text-ds-accent-foreground'
  ],

  theme: {
    extend: {
      /* 🎨 Colors — all semantic color tokens */
      colors: (() => {
        const dsColor = extractNested(['ds', 'color'])
        const flattened = flattenTokens(dsColor)
        const mapped = {}

        for (const [key, value] of Object.entries(flattened)) {
          mapped[`ds-${key}`] = `var(--ds-color-${key})`
        }

        return mapped
      })(),

      /* 🌀 Background gradients */
      backgroundImage: {
        'ds-brand-gradient': 'var(--ds-color-brand-gradient)'
      },

      /* 📏 Spacing */
      spacing: (() => {
        const dsSpacing = extractNested(['ds', 'spacing'])
        const flattened = flattenTokens(dsSpacing)
        const mapped = {}

        for (const [key, value] of Object.entries(flattened)) {
          mapped[`ds-${key}`] = `var(--ds-spacing-${key})`
        }

        return mapped
      })(),

      /* 🧩 Typography */
      fontFamily: {
        'ds-sans': 'var(--ds-typography-font-family-sans)',
        'ds-mono': 'var(--ds-typography-font-family-mono)'
      },
      fontSize: (() => {
        const sizes = extractNested(['ds', 'typography', 'font-size'])
        const mapped = {}

        for (const [key, value] of Object.entries(sizes)) {
          mapped[`ds-${key}`] = `var(--ds-typography-font-size-${key})`
        }

        return mapped
      })(),
      fontWeight: (() => {
        const weights = extractNested(['ds', 'typography', 'font-weight'])
        const mapped = {}

        for (const [key, value] of Object.entries(weights)) {
          mapped[`ds-${key}`] = `var(--ds-typography-font-weight-${key})`
        }

        return mapped
      })(),
      lineHeight: (() => {
        const lineHeights = extractNested(['ds', 'typography', 'line-height'])
        const mapped = {}

        for (const [key, value] of Object.entries(lineHeights)) {
          mapped[`ds-${key}`] = `var(--ds-typography-line-height-${key})`
        }

        return mapped
      })(),
      letterSpacing: (() => {
        const letterSpacing = extractNested([
          'ds',
          'typography',
          'letter-spacing'
        ])
        const mapped = {}

        for (const [key, value] of Object.entries(letterSpacing)) {
          mapped[`ds-${key}`] = `var(--ds-typography-letter-spacing-${key})`
        }

        return mapped
      })(),

      /* 🧱 Border Radius */
      borderRadius: (() => {
        const radii = extractNested(['ds', 'radius'])
        const mapped = {}

        for (const [key, value] of Object.entries(radii)) {
          mapped[`ds-${key}`] = `var(--ds-radius-${key})`
        }

        return mapped
      })(),

      /* 🌑 Shadows */
      boxShadow: (() => {
        const shadows = extractNested(['ds', 'shadow'])
        const mapped = {}

        for (const [key, value] of Object.entries(shadows)) {
          mapped[`ds-${key}`] = `var(--ds-shadow-${key})`
        }

        return mapped
      })(),

      /* ⏱️ Motion */
      transitionDuration: (() => {
        const durations = extractNested(['ds', 'motion', 'duration'])
        const mapped = {}

        for (const [key, value] of Object.entries(durations)) {
          mapped[`ds-${key}`] = `var(--ds-motion-duration-${key})`
        }

        return mapped
      })(),
      transitionTimingFunction: (() => {
        const easings = extractNested(['ds', 'motion', 'easing'])
        const mapped = {}

        for (const [key, value] of Object.entries(easings)) {
          mapped[`ds-${key}`] = `var(--ds-motion-easing-${key})`
        }

        return mapped
      })(),

      /* 🧩 Z-index */
      zIndex: (() => {
        const zIndices = extractNested(['ds', 'z-index'])
        const mapped = {}

        for (const [key, value] of Object.entries(zIndices)) {
          mapped[`ds-${key}`] = `var(--ds-z-index-${key})`
        }

        return mapped
      })(),

      /* 🎯 Focus Ring */
      ringColor: {
        'ds-focus': 'var(--ds-effect-focus-ring-color)'
      },
      ringWidth: {
        'ds-focus': 'var(--ds-effect-focus-ring-width)'
      },
      ringOffsetWidth: {
        'ds-focus': 'var(--ds-effect-focus-ring-offset)'
      },

      /* 🖼️ Opacity */
      opacity: (() => {
        const opacities = extractNested(['ds', 'opacity'])
        const mapped = {}

        for (const [key, value] of Object.entries(opacities)) {
          mapped[`ds-${key}`] = `var(--ds-opacity-${key})`
        }

        return mapped
      })(),

      /* 🧩 Component-specific sizes */
      height: (() => {
        const components = extractNested(['ds', 'component'])
        const mapped = {}

        // Add button heights
        if (components.button) {
          mapped['ds-button-sm'] = 'var(--ds-component-button-height-sm)'
          mapped['ds-button-md'] = 'var(--ds-component-button-height-md)'
          mapped['ds-button-lg'] = 'var(--ds-component-button-height-lg)'
        }

        // Add input height
        if (components.input?.height) {
          mapped['ds-input'] = 'var(--ds-component-input-height)'
        }

        // Add avatar sizes
        if (components.avatar) {
          mapped['ds-avatar-xs'] = 'var(--ds-component-avatar-size-xs)'
          mapped['ds-avatar-sm'] = 'var(--ds-component-avatar-size-sm)'
          mapped['ds-avatar-md'] = 'var(--ds-component-avatar-size-md)'
          mapped['ds-avatar-lg'] = 'var(--ds-component-avatar-size-lg)'
          mapped['ds-avatar-xl'] = 'var(--ds-component-avatar-size-xl)'
        }

        return mapped
      })(),

      width: (() => {
        const components = extractNested(['ds', 'component'])
        const mapped = {}

        // Add button widths (for icon-only buttons)
        if (components.button) {
          mapped['ds-button-sm'] = 'var(--ds-component-button-height-sm)'
          mapped['ds-button-md'] = 'var(--ds-component-button-height-md)'
          mapped['ds-button-lg'] = 'var(--ds-component-button-height-lg)'
        }

        // Add avatar sizes
        if (components.avatar) {
          mapped['ds-avatar-xs'] = 'var(--ds-component-avatar-size-xs)'
          mapped['ds-avatar-sm'] = 'var(--ds-component-avatar-size-sm)'
          mapped['ds-avatar-md'] = 'var(--ds-component-avatar-size-md)'
          mapped['ds-avatar-lg'] = 'var(--ds-component-avatar-size-lg)'
          mapped['ds-avatar-xl'] = 'var(--ds-component-avatar-size-xl)'
        }

        // Add modal max-width
        if (components.modal?.['max-width']) {
          mapped['ds-modal'] = 'var(--ds-component-modal-max-width)'
        }

        return mapped
      })()
    }
  },

  plugins: []
}
