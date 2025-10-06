/* eslint-disable */
import fs from 'fs'
import StyleDictionary from 'style-dictionary'

// 🧩 Déclaration globale du format custom
StyleDictionary.registerFormat({
  name: 'css/theme',
  format: ({ dictionary, options }) => {
    const selector = options.theme === 'dark' ? '[data-theme="dark"]' : ':root'
    const vars = dictionary.allTokens
      .filter((t) => typeof t.value === 'string' || typeof t.value === 'number')
      .map((t) => `  --${t.name}: ${t.value};`)
      .join('\n')
    return `${selector} {\n${vars}\n}`
  }
})

// 🏗️ Fonction de build pour un thème donné
async function buildTheme(themeName) {
  const sd = new StyleDictionary({
    source: [
      'tokens/global/**/*.json',
      'tokens/semantic/**/*.json',
      `tokens/themes/${themeName}.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'theme/tokens-build/css/',
        files: [
          {
            destination: `${themeName}.css`,
            format: 'css/theme',
            options: { theme: themeName }
          }
        ]
      }
    }
  })

  await sd.buildAllPlatforms()
  console.log(`✔︎ Thème "${themeName}" généré ✅`)
}

// 🚀 Build light + dark
await buildTheme('light')
await buildTheme('dark')

// 🧹 Fusion finale
const lightCSS = fs.readFileSync('theme/tokens-build/css/light.css', 'utf8')
const darkCSS = fs.readFileSync('theme/tokens-build/css/dark.css', 'utf8')

fs.writeFileSync(
  'theme/tokens-build/css/themes.css',
  `${lightCSS}\n\n${darkCSS}`
)

console.log('🎨 Fichier combiné généré : theme/tokens-build/css/themes.css ✅')
