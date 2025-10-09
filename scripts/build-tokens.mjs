// scripts/build-tokens.mjs
import { buildTokens } from '../tools/token-engine.mjs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// Permet de forcer la régénération du fichier Tailwind
const force = process.argv.includes('--force')

// 🧠 Détection automatique des thèmes présents dans /tokens/themes/
function detectThemes(tokensDir) {
  const themesPath = path.join(tokensDir, 'themes')
  return fs
    .readdirSync(themesPath)
    .filter((entry) => {
      const full = path.join(themesPath, entry)
      return (
        fs.statSync(full).isDirectory() || entry.endsWith('.json')
      )
    })
    .map((entry) => entry.replace('.json', ''))
}

async function run() {
  try {
    const tokensDir = path.join(rootDir, 'tokens')
    const outputDir = path.join(rootDir, 'theme/tokens-build')
    const themes = detectThemes(tokensDir)

    console.log(`🎨 Detected themes: ${themes.join(', ')}`)

    // 1️⃣ Génère les tokens (via token-engine)
    await buildTokens({ tokensDir, outputDir, themes })

    // 2️⃣ Copie le template vers /theme/
    const templatePath = path.join(
      rootDir,
      'tools/templates/tailwind.config.template.mjs'
    )
    const themeConfigPath = path.join(rootDir, 'theme/tailwind.config.mjs')

    if (!fs.existsSync(themeConfigPath) || force) {
      fs.copyFileSync(templatePath, themeConfigPath)
      console.log(`🧩 Tailwind config created → ${themeConfigPath}`)
    } else {
      console.log('✅ theme/tailwind.config.mjs already exists (use --force to replace)')
    }

    // 3️⃣ Crée la config root si manquante
    const rootConfigPath = path.join(rootDir, 'tailwind.config.mjs')
    if (!fs.existsSync(rootConfigPath)) {
      fs.writeFileSync(
        rootConfigPath,
        `import config from './theme/tailwind.config.mjs'\nexport default config\n`
      )
      console.log(`🧩 Created root Tailwind config → ${rootConfigPath}`)
    } else {
      console.log('✅ Root tailwind.config.mjs already exists')
    }

    console.log('\n✅ Tokens + Tailwind config generated successfully!\n')
  } catch (err) {
    console.error('❌ Error building tokens:', err)
    process.exit(1)
  }
}

run()
