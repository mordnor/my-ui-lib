/**
 * 🧱 Design System Tailwind Config — namespace `ds-*`
 * Auto-synced with Style Dictionary tokens
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isDev = process.env.NODE_ENV !== "production"

const tokensPath = path.resolve(__dirname, "./tokens-build/tailwind.tokens.js")
let tokens = {}
if (fs.existsSync(tokensPath)) {
  try {
    tokens = require(tokensPath)
    if (tokens.default) tokens = tokens.default
    console.log("✅ Tokens loaded successfully")
  } catch (err) {
    console.warn("⚠️ Failed to import tokens:", err.message)
  }
} else {
  console.warn('⚠️ Tokens file missing — run "pnpm run build:tokens" first.')
}

/* --------------------------------------------------
   🧮 Utils
-------------------------------------------------- */
const toKebab = (str) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase()

const toCssVar = (key) => `var(--${toKebab(key)})`

const extract = (prefix) =>
  Object.entries(tokens)
    .filter(([k]) => k.startsWith(prefix))
    .reduce((acc, [k, v]) => {
      let name = k.replace(prefix, "")
      name = toKebab(name)
      name = name.replace(/^color-/, "").replace(/^shadow-/, "")
      acc[name] = v
      return acc
    }, {})

/* --------------------------------------------------
   ⚙️ Tailwind Config étendue - DS namespace `ds-*`
-------------------------------------------------- */
export default {
  darkMode: ["class", '[data-theme="dark"]'],

  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    ...(isDev ? [path.resolve(__dirname, "../my-landing/src/**/*.{ts,tsx,js,jsx}")] : [])
  ],

  safelist: [
    { pattern: /^bg-ds-/ },
    { pattern: /^text-ds-/ },
    { pattern: /^border-ds-/ },
    { pattern: /^shadow-ds-/ },
    { pattern: /^ring-ds-/ },
    { pattern: /^duration-ds-/ },
    { pattern: /^gap-ds-/ },
    { pattern: /^p?-?x?-?y?-?m?-?b?-?t?-?l?-?r?-?ds-/ },
  ],

  theme: {
    extend: {
      /* 🎨 Couleurs (text / bg / border) */
      colors: Object.fromEntries(
        Object.keys(tokens)
          .filter((k) => k.startsWith("Color") || k.startsWith("Brand") || k.startsWith("Highlight"))
          .map((k) => [`ds-${toKebab(k).replace(/^color-/, "")}`, toCssVar(k)])
      ),

      /* 🌀 Background image → gradients */
      backgroundImage: {
        "ds-brand-gradient": "var(--brand-gradient)",
      },

      /* 🧱 Layout / Radius / Border / Shadow / Motion */
      borderRadius: Object.fromEntries(
        Object.entries(extract("LayoutRadius")).map(([k, v]) => [`ds-${k}`, v])
      ),
      borderWidth: Object.fromEntries(
        Object.entries(extract("LayoutBorderWidth")).map(([k, v]) => [`ds-${k}`, v])
      ),
      boxShadow: Object.fromEntries(
        Object.entries(extract("Shadows")).map(([k, v]) => [`ds-${k}`, v])
      ),
      transitionDuration: Object.fromEntries(
        Object.entries(extract("MotionDuration")).map(([k, v]) => [`ds-${k}`, v])
      ),
      transitionTimingFunction: Object.fromEntries(
        Object.entries(extract("MotionEasing")).map(([k, v]) => [`ds-${k}`, v])
      ),

      /* 🧩 Typography */
      fontFamily: { sans: toCssVar("typography-font-family") },
      fontSize: Object.fromEntries(
        Object.entries(extract("TypographyFontSize")).map(([k, v]) => [`ds-${k}`, v])
      ),
      fontWeight: Object.fromEntries(
        Object.entries(extract("TypographyFontWeight")).map(([k, v]) => [`ds-${k}`, v])
      ),

      /* 📏 Spacing */
      spacing: Object.fromEntries(
        Object.entries(extract("Spacing")).map(([k, v]) => [`ds-${k}`, v])
      ),

      /* 🧩 Ring */
      ringColor: { "ds-focus": toCssVar("interaction-focusRing-color") },
      ringWidth: { "ds-focus": toCssVar("interaction-focusRing-width") },
    }
  },

  plugins: []
}
