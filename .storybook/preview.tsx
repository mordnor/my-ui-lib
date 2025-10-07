import '../src/index.css'
import type { Preview } from '@storybook/react'
import { applyTheme, initTheme } from '../theme/applyTheme'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--color-background-app, #f8fafc)' },
        { name: 'dark', value: 'var(--color-background-app, #020617)' }
      ]
    },
    docs: {
      source: { type: 'code' }
    }
  },

  decorators: [
    (Story, context) => {
      applyTheme(context.globals.theme === 'dark' ? 'dark' : 'light')
      return <Story />
    }
  ],

  globalTypes: {
    theme: {
      description: 'Thème global du Design System',
      defaultValue: initTheme(),
      toolbar: {
        title: 'Mode',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: '☀️ Light' },
          { value: 'dark', title: '🌙 Dark' }
        ],
        dynamicTitle: true
      }
    }
  }
}

export default preview
