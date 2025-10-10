import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'
import { applyTheme, getCurrentTheme, ThemeName } from './apply-theme'

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: ThemeName
}

/**
 * 🎨 ThemeProvider — Context provider for theme management
 * Provides theme state and setter to all children components
 */
export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(
    defaultTheme || getCurrentTheme()
  )

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * 🪝 useTheme — Hook to access theme context
 * Must be used within ThemeProvider
 */
export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
