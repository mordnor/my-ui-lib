// src/theme/themes/light.ts
import { baseColors } from '../tokens'

export const lightTheme = {
  primary: baseColors.blue[600],
  'primary-hover': baseColors.blue[700],
  secondary: baseColors.gray[700],
  success: baseColors.green[500],
  danger: baseColors.red[500],
  warning: baseColors.yellow[500],

  background: baseColors.gray[50],
  surface: baseColors.white,
  text: baseColors.gray[900],
  'muted-text': baseColors.gray[600],
  border: baseColors.gray[200],
  shadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
}
