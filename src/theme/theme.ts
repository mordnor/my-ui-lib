import { colors } from './tokens/colors'
import { sizes } from './tokens/sizes'
import { shadows } from './tokens/shadows'

export function applyTheme() {
  const root = document.documentElement

  Object.entries(colors).forEach(([key, value]) =>
    root.style.setProperty(`--color-${key}`, value)
  )

  Object.entries(sizes).forEach(([key, value]) =>
    root.style.setProperty(`--size-${key}`, value)
  )

  Object.entries(shadows).forEach(([key, value]) =>
    root.style.setProperty(`--shadow-${key}`, value)
  )
}

applyTheme()
