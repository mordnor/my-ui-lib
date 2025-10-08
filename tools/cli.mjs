#!/usr/bin/env node
import { buildTokens } from './token-engine.mjs'
import path from 'path'
import fs from 'fs'

const args = process.argv.slice(2)

const getArg = (flag, def) => {
  const found = args.find((a) => a.startsWith(`--${flag}=`))
  return found ? found.split('=')[1] : def
}

const showHelp = () => {
  console.log(`
🧩 Dorian UI CLI — Design Tokens Builder
----------------------------------------
Usage:
  my-ui-lib [--tokens=path] [--output=path] [--themes=list]

Options:
  --tokens   Path to tokens directory      (default: ./tokens)
  --output   Output directory              (default: ./theme/tokens-build)
  --themes   Comma-separated list of themes (default: light,dark)

Examples:
  my-ui-lib
  my-ui-lib --tokens=./tokens --output=./theme/tokens-build
  my-ui-lib --themes=light,dark,high-contrast
`)
  process.exit(0)
}

if (args.includes('--help')) showHelp()

const tokensDir = getArg('tokens', './tokens')
const outputDir = getArg('output', './theme/tokens-build')
const themes = getArg('themes', 'light,dark').split(',')

if (!fs.existsSync(tokensDir)) {
  console.error(`❌ Tokens directory not found: ${tokensDir}`)
  process.exit(1)
}

console.log(`🚀 Building tokens...
📂 Tokens: ${path.resolve(tokensDir)}
📦 Output: ${path.resolve(outputDir)}
🎨 Themes: ${themes.join(', ')}`)

await buildTokens({ tokensDir, outputDir, themes })

console.log(`\n✅ Tokens built successfully! 🎉`)
