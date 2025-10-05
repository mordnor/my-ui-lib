// src/theme/themes/dark.ts
import { baseColors } from '../tokens'

export const darkTheme = {
  primary: baseColors.blue[500],
  'primary-hover': baseColors.blue[400],
  secondary: baseColors.gray[300],
  success: baseColors.green[500],
  danger: baseColors.red[500],
  warning: baseColors.yellow[500],

  background: baseColors.gray[900],
  surface: baseColors.gray[800],
  text: baseColors.gray[100],
  'muted-text': baseColors.gray[400],
  border: baseColors.gray[700],
  shadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
}
