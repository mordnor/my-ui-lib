import StyleDictionary from 'style-dictionary'
import path from 'path'
import fs from 'fs'

const tokensDir = path.resolve('./tokens')
const themeName = 'clientB'

const themeFolder = path.join(tokensDir, 'themes', themeName)
const themePath = fs.existsSync(themeFolder)
  ? `${themeFolder}/**/*.json`
  : path.join(tokensDir, 'themes', `${themeName}.json`)

const sources = [
  `${tokensDir}/global/**/*.json`,
  `${tokensDir}/semantic/**/*.json`,
  themePath
]

console.log(`🔍 Checking missing references for "${themeName}" ...\n`)

try {
  const sd = new StyleDictionary({
    log: { verbosity: 'verbose' },
    source: sources,
    platforms: {
      debug: {
        transformGroup: 'css',
        buildPath: './.tmp/',
        files: [
          {
            destination: `${themeName}.debug.css`,
            format: 'css/variables'
          }
        ]
      }
    }
  })

  sd.buildPlatform('debug')
  console.log('\n✅ No missing references detected!')
} catch (err) {
  console.error('\n❌ Full error message:\n')
  console.error(err.message)
  console.log('\n🔍 Extracted missing references:\n')
  const regex = /ReferenceError: (.*?) not found/g
  const matches = [...err.message.matchAll(regex)]
  if (matches.length === 0) {
    console.log('⚠️ No explicit missing tokens found — check references manually.')
  } else {
    matches.forEach((m) => console.log('→', m[1]))
  }
}
