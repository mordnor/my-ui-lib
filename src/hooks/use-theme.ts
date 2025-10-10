import { useEffect, useState } from 'react'
import { applyTheme, getCurrentTheme, ThemeName } from '../theme/apply-theme'

/**
 * 🪝 useTheme — Standalone hook for theme management
 * Use this hook when you don't need ThemeProvider context
 * For context-based theme management, use useThemeContext from ThemeProvider
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(getCurrentTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return { theme, setTheme }
}
