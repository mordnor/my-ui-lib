import { useEffect, useState } from 'react'
import { applyTheme, getCurrentTheme, ThemeName } from './applyTheme'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(getCurrentTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return { theme, setTheme }
}
