// tools/generate-ds-classes.mjs
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tokensPath = path.resolve(__dirname, "../theme/tokens-build/tailwind.tokens.js")

console.log("🔍 Loading tokens from:", tokensPath)

const raw = await import(tokensPath)
const tokens = raw?.default ?? raw

if (!tokens || Object.keys(tokens).length === 0) {
  console.error("❌ No tokens found. Did you run `pnpm run build:tokens` first?")
  process.exit(1)
}

/* --------------------------------------------------
   🧮 Utils
-------------------------------------------------- */
const toKebab = (str) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase()

// Map automatique des prefix → type de classe Tailwind
const CLASS_PREFIXES = {
  Color: ["bg", "text", "border"],
  Brand: ["bg", "text"],
  Highlight: ["bg", "text"],
  Shadows: ["shadow"],
  LayoutRadius: ["rounded"],
  LayoutBorderWidth: ["border"],
  MotionDuration: ["duration"],
  MotionEasing: ["ease"],
  Spacing: ["p", "m", "gap"],
  TypographyFontSize: ["text"],
  TypographyFontWeight: ["font"],
  TypographyLineHeight: ["leading"],
  Opacity: ["opacity"],
}

/* --------------------------------------------------
   🏗️ Génération
-------------------------------------------------- */
const generatedClasses = []

for (const [prefix, props] of Object.entries(CLASS_PREFIXES)) {
  const matching = Object.keys(tokens).filter((k) => k.startsWith(prefix))
  for (const k of matching) {
    let name = k.replace(prefix, "")
    name = toKebab(name)

    for (const prop of props) {
      // exemple : "bg-ds-text-primary"
      generatedClasses.push(`${prop}-ds-${name}`)
    }
  }
}

/* --------------------------------------------------
   🧾 Export fichier
-------------------------------------------------- */
const outPath = path.resolve(__dirname, "../.tmp/ds-classes.txt")
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, generatedClasses.sort().join("\n"), "utf8")

console.log(`✅ ${generatedClasses.length} DS classes generated → ${outPath}`)
