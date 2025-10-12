import { useEffect, useState } from 'react'
import {
  applyTheme,
  getCurrentTheme,
  watchSystemTheme
} from '@/theme/applyTheme'
import type { ThemeName } from '@/theme/theme.types'

/**
 * Hook to manage theme state and persistence
 */
export function useTheme() {
  const [theme, setThemeState] = useState<ThemeName>(() => getCurrentTheme())

  // Set theme and apply to DOM
  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme)
    applyTheme(newTheme)
  }

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme: ThemeName = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // Watch for system preference changes
  useEffect(() => {
    const cleanup = watchSystemTheme((systemTheme) => {
      // Only update if user hasn't set a preference
      const storedTheme = localStorage.getItem('ds-theme')
      if (!storedTheme) {
        setThemeState(systemTheme)
      }
    })

    return cleanup
  }, [])

  return {
    theme,
    setTheme,
    toggleTheme
  }
}
