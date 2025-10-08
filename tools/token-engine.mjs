// tools/token-engine.mjs
import fs from 'fs'
import path from 'path'
import StyleDictionary from 'style-dictionary'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 🧱 Build design tokens from JSON sources
 */
export async function buildTokens({
  tokensDir = './tokens',
  outputDir = './theme/tokens-build',
  themes = ['light', 'dark']
} = {}) {
  console.log(`🧩 Building tokens from → ${tokensDir}\n`)

  StyleDictionary.registerFormat({
    name: 'css/theme',
    format: ({ dictionary, options }) => {
      const selector =
        options.theme === 'dark' ? "[data-theme='dark']" : ':root'
      const vars = dictionary.allTokens
        .map((t) => `  --${t.name}: ${t.value};`)
        .join('\n')
      return `${selector} {\n${vars}\n}`
    }
  })

  fs.mkdirSync(path.join(outputDir, 'css'), { recursive: true })

  for (const themeName of themes) {
    const sd = new StyleDictionary({
      source: [
        `${tokensDir}/global/**/*.json`,
        `${tokensDir}/semantic/**/*.json`,
        `${tokensDir}/themes/${themeName}.json`
      ],
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath: `${outputDir}/css/`,
          files: [
            {
              destination: `${themeName}.css`,
              format: 'css/theme',
              options: { theme: themeName }
            }
          ]
        },
        js: {
          transformGroup: 'js',
          buildPath: `${outputDir}/`,
          files: [
            {
              destination: 'tailwind.tokens.js',
              format: 'javascript/es6'
            }
          ]
        }
      }
    })

    await sd.buildAllPlatforms()
    console.log(`✔︎ Theme "${themeName}" built`)
  }

  const merged = themes
    .map((t) => fs.readFileSync(`${outputDir}/css/${t}.css`, 'utf8'))
    .join('\n\n')

  fs.writeFileSync(`${outputDir}/css/themes.css`, merged)
  console.log('🎨 Combined CSS file: theme/tokens-build/css/themes.css ✅')

  const templatePath = path.join(
    __dirname,
    'templates/tailwind.config.template.mjs'
  )
  const themeConfigPath = path.resolve('./theme/tailwind.config.mjs')
  fs.copyFileSync(templatePath, themeConfigPath)

  console.log('🧩 Tailwind template copied to theme/tailwind.config.mjs ✅')
}
