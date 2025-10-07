import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Design System/Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
🧱 **Container** — composant de structure du Design System.
Il gère la largeur maximale, le centrage horizontal et le padding interne horizontal (\`px-ds-space-xl\`).

**Props principales :**
- \`size\` : contrôle la largeur max (sm → xl, full)
- \`fluid\` : supprime la contrainte de largeur
- \`as\` : élément HTML rendu (par défaut \`div\`)
        `
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full']
    },
    fluid: {
      control: 'boolean'
    },
    as: {
      control: 'text'
    },
    className: {
      control: 'text'
    }
  },
  args: {
    size: 'lg',
    fluid: false
  }
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  name: '🌐 Default Container',
  render: (args) => (
    <Container {...args} className="bg-ds-bg-card py-ds-space-xl text-center">
      <div className="text-ds-text-primary">Contenu dans un container</div>
    </Container>
  )
}

export const AllSizes: Story = {
  name: '📏 Showcase — Toutes tailles',
  render: () => (
    <div className="flex flex-col gap-ds-space-lg">
      {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
        <Container
          key={size}
          size={size}
          className="bg-ds-bg-card py-ds-space-md text-center border border-ds-border-default"
        >
          <span className="text-ds-text-secondary">Container size="{size}"</span>
        </Container>
      ))}
    </div>
  )
}

export const Fluid: Story = {
  name: '🌊 Fluid',
  args: {
    fluid: true
  },
  render: (args) => (
    <Container {...args} className="bg-ds-bg-card py-ds-space-xl text-center">
      <span className="text-ds-text-secondary">Container fluide (100%)</span>
    </Container>
  )
}
