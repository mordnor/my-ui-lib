export type ThemeMode = 'light' | 'dark'

export function applyTheme(mode: ThemeMode) {
  const html = document.documentElement
  html.setAttribute('data-theme', mode)
  localStorage.setItem('theme', mode)
}

export function initTheme(): ThemeMode {
  const stored = localStorage.getItem('theme') as ThemeMode | null
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const mode: ThemeMode = stored || (prefersDark ? 'dark' : 'light')
  applyTheme(mode)
  return mode
}
