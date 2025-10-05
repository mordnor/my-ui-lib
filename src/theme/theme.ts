import { lightTheme } from './themes/light'
import { darkTheme } from './themes/dark'
import { typography } from './tokens'
import { spacing } from './tokens'
import { radii } from './tokens'
import { shadows } from './tokens'
import { sizes } from './tokens'
import { zIndex } from './tokens'
import { opacity } from './tokens'

type ThemeName = 'light' | 'dark'

export function applyTheme(themeName: ThemeName = 'light') {
  const theme = themeName === 'dark' ? darkTheme : lightTheme
  const root = document.documentElement

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value)
  })

  Object.entries(typography.fontSize).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value)
  })
  Object.entries(typography.fontWeight).forEach(([key, value]) => {
    root.style.setProperty(`--font-weight-${key}`, value.toString())
  })
  Object.entries(typography.lineHeight).forEach(([key, value]) => {
    root.style.setProperty(`--line-height-${key}`, value.toString())
  })
  root.style.setProperty('--font-family', typography.fontFamily)

  Object.entries(spacing).forEach(([key, value]) => {
    root.style.setProperty(`--space-${key}`, value)
  })

  Object.entries(radii).forEach(([key, value]) => {
    root.style.setProperty(`--radius-${key}`, value)
  })

  Object.entries(shadows).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value)
  })

  Object.entries(sizes).forEach(([key, value]) => {
    root.style.setProperty(`--size-${key}`, value)
  })

  Object.entries(zIndex).forEach(([key, value]) => {
    root.style.setProperty(`--z-${key}`, value.toString())
  })

  Object.entries(opacity).forEach(([key, value]) => {
    root.style.setProperty(`--opacity-${key}`, value.toString())
  })
}

applyTheme('light')

export function toggleTheme() {
  const current = document.documentElement.dataset.theme as ThemeName
  const next = current === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  document.documentElement.dataset.theme = next
}
