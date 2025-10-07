import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// -------------------------------------------------
// ⚙️ MÉTA STORYBOOK
// -------------------------------------------------
const meta: Meta<typeof Button> = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### 🧱 DS Button — composant action principal du design system

Prend en charge :
- des **variants** sémantiques (\`primary\`, \`secondary\`, \`outline\`, \`success\`, \`danger\`)
- des **tailles** basées sur les tokens DS (\`sm\`, \`md\`, \`lg\`)
- une gestion **de l’état loading**
- des **icônes PrimeIcons** et la position de l’icône (\`left\`, \`right\`, etc.)

Chaque style repose exclusivement sur les tokens DS (\`ds-accent-*\`, \`ds-space-*\`, \`ds-font-size-*\`).
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'success', 'danger']
    },
    dsSize: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    icon: {
      control: 'text',
      description: 'PrimeIcons class name (ex: pi pi-check)'
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom']
    },
    loading: { control: 'boolean' },
    label: { control: 'text' }
  },
  args: {
    label: 'Bouton DS',
    variant: 'primary',
    dsSize: 'md',
    loading: false,
    icon: undefined
  }
}

export default meta
type Story = StoryObj<typeof Button>

// -------------------------------------------------
// 🧩 STORIES
// -------------------------------------------------

// 🌈 Story de base
export const Basic: Story = {
  name: '🌈 Basique',
  args: {
    label: 'Bouton principal'
  }
}

// 🎨 Showcase de toutes les variantes
export const VariantsShowcase: Story = {
  name: '🎨 Showcase — Variantes',
  render: () => (
    <div className="gap-ds-space-lg flex flex-wrap items-center justify-center">
      {(['primary', 'secondary', 'outline', 'success', 'danger'] as const).map(
        (v) => (
          <Button key={v} label={v} variant={v} />
        )
      )}
    </div>
  )
}

// 📏 Showcase des tailles
export const SizesShowcase: Story = {
  name: '📏 Showcase — Tailles',
  render: () => (
    <div className="gap-ds-space-lg flex flex-wrap items-center justify-center">
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <Button key={s} label={`Taille ${s}`} dsSize={s} />
      ))}
    </div>
  )
}

// ⚙️ Icône à gauche/droite
export const WithIcon: Story = {
  name: '⚙️ Icône + Label',
  args: {
    label: 'Valider',
    icon: 'pi pi-check',
    iconPosition: 'left'
  }
}

// ⏳ État loading
export const LoadingState: Story = {
  name: '⏳ État loading',
  args: {
    label: 'Chargement...',
    loading: true
  }
}

// 🧠 Playground interactif
export const Playground: Story = {
  name: '🧠 Playground interactif',
  parameters: {
    controls: { expanded: true }
  }
}
