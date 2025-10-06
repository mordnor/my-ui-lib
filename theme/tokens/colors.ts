// theme/tokens/colors.ts

export const baseColors = {
  white: '#ffffff',
  black: '#000000',

  // 🎨 Palette neutre SLATE — douce, équilibrée, professionnelle
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  },

  // 💙 Palette principale BLUE — accent moderne et rassurant
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },

  // ✅ Couleurs d'état modernisées
  green: {
    500: '#22c55e',
    600: '#16a34a'
  },
  red: {
    500: '#ef4444',
    600: '#dc2626'
  },
  yellow: {
    500: '#facc15',
    600: '#eab308'
  },
  cyan: {
    500: '#06b6d4',
    600: '#0891b2'
  }
}

// 🎨 Couleurs thématiques pour Tailwind & CSS vars
export const colors = {
  primary: 'var(--color-primary)',
  'primary-hover': 'var(--color-primary-hover)',
  secondary: 'var(--color-secondary)',
  success: 'var(--color-success)',
  danger: 'var(--color-danger)',
  warning: 'var(--color-warning)',
  info: 'var(--color-info)',
  background: 'var(--color-background)',
  surface: 'var(--color-surface)',
  text: 'var(--color-text)',
  'muted-text': 'var(--color-muted-text)',
  border: 'var(--color-border)'
}
