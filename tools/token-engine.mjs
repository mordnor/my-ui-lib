// tools/token-engine.mjs
import * as SDpkg from "style-dictionary"
import path from "path"
import fs from "fs"

/**
 * 🧠 DS Token Builder — génère CSS, JS et JSON pour chaque thème
 * Compatible multi-thème (light/dark/clientA/clientB)
 * Préfixe DS : toutes les variables utilisent --ds-*
 */

// ✅ Compatibilité universelle (Style Dictionary 4.x / 5.x / ESM / CJS)
const StyleDictionary =
  SDpkg?.createStyleDictionary?.() ??
  SDpkg?.default?.createStyleDictionary?.() ??
  SDpkg?.default ??
  SDpkg

export async function buildTokens({ tokensDir, outputDir, themes = [] }) {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

  const cssOut = path.join(outputDir, "css")
  if (!fs.existsSync(cssOut)) fs.mkdirSync(cssOut, { recursive: true })

  console.log(`\n🧩 Building tokens from → ${tokensDir}\n`)

  for (const theme of themes) {
    const themeDir = path.join(tokensDir, "themes", theme)
    const themeFile = path.join(tokensDir, "themes", `${theme}.json`)
    const sourcePath = fs.existsSync(themeDir) ? `${themeDir}/**/*.json` : themeFile

    console.log(`📁 Using source for theme "${theme}" → ${sourcePath}`)

    const sources = [sourcePath]

    const semanticColor = path.join(tokensDir, "semantic", "color.json")
    const semanticComponent = path.join(tokensDir, "semantic", "component.json")
    if (fs.existsSync(semanticColor)) {
      sources.push(semanticColor)
      console.log(`🌍 + semantic/color.json`)
    }
    if (fs.existsSync(semanticComponent)) {
      sources.push(semanticComponent)
      console.log(`🌍 + semantic/component.json`)
    }

    /* 🧱 Création instance SD */
    const SD = (StyleDictionary.extend ?? StyleDictionary.create ?? (() => StyleDictionary))({
      log: { verbosity: "default" },
      source: sources,
      platforms: {
        /**
         * 🎨 CSS Variables — appliquées sur [data-theme="x"]
         */
        css: {
          transformGroup: "css",
          buildPath: path.join(cssOut, "/"),
          files: [
            {
              destination: `${theme}.css`,
              format: "css/variables",
              options: {
                showFileHeader: false,
                outputReferences: true,
                variablePrefix: "ds-",
                selector: `[data-theme='${theme}']`
              }
            }
          ]
        },

        /**
         * 💾 JS (ESM) — tokens utilisés par Tailwind
         */
        js: {
          transformGroup: "js",
          buildPath: outputDir + "/",
          files: [
            {
              destination: "tailwind.tokens.js",
              format: "javascript/es6",
              options: {
                showFileHeader: false,
                variablePrefix: "",
                outputReferences: true
              }
            }
          ]
        },

        /**
         * 🧰 JSON brut (debug ou import direct)
         */
        json: {
          transformGroup: "js",
          buildPath: outputDir + "/",
          files: [
            {
              destination: `${theme}.json`,
              format: "json/nested",
              options: { showFileHeader: false }
            }
          ]
        }
      }
    })

    SD.cleanAllPlatforms?.()
    SD.buildAllPlatforms?.()

    console.log(`✔︎ Theme "${theme}" built successfully\n`)
  }

  // 🧩 Combine les CSS thèmes en un seul fichier
  const combinedCss = themes
    .map((theme) => fs.readFileSync(path.join(cssOut, `${theme}.css`), "utf8"))
    .join("\n\n")

  fs.writeFileSync(path.join(cssOut, "themes.css"), combinedCss)
  console.log(`🎨 Combined CSS file: ${path.join(cssOut, "themes.css")} ✅`)
}
