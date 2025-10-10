import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

// -------------------------------------------------
// ⚙️ MÉTA STORYBOOK
// -------------------------------------------------
const meta: Meta<typeof Badge> = {
  title: 'Design System/Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
🏷️ **Badge** — indicateur visuel compact basé sur le Design System.
Utilisé pour signaler un état, une catégorie ou une information.

**Caractéristiques :**
- Variantes sémantiques : \`default\`, \`success\`, \`danger\`, \`warning\`, \`info\`
- Tailles : \`sm\`, \`md\`, \`lg\`
- Icône optionnelle à gauche
- Tokenisé via \`ds-*\` (couleurs, radius, spacing, typo)
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'danger', 'warning', 'info']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    icon: {
      control: false,
      description:
        'Icône React optionnelle à gauche (ex: <i className="pi pi-info" />)'
    },
    children: {
      control: 'text',
      description: 'Contenu textuel ou JSX du badge'
    },
    className: {
      control: 'text',
      description: 'Classes utilitaires additionnelles'
    }
  },
  args: {
    variant: 'default',
    size: 'md',
    children: 'Badge'
  }
}

export default meta
type Story = StoryObj<typeof Badge>

// -------------------------------------------------
// 🧩 STORIES
// -------------------------------------------------

export const Basic: Story = {
  name: '🌈 Basique',
  args: {
    children: 'Étiquette'
  }
}

export const VariantsShowcase: Story = {
  name: '🎨 Showcase — Variantes',
  render: () => (
    <div className="gap-ds-space-md flex flex-wrap items-center justify-center">
      {(['default', 'success', 'danger', 'warning', 'info'] as const).map(
        (v) => (
          <Badge key={v} variant={v}>
            {v}
          </Badge>
        )
      )}
    </div>
  )
}

export const SizesShowcase: Story = {
  name: '📏 Showcase — Tailles',
  render: () => (
    <div className="gap-ds-space-md flex flex-wrap items-center justify-center">
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <Badge key={s} size={s}>
          Taille {s}
        </Badge>
      ))}
    </div>
  )
}

export const WithIcon: Story = {
  name: '⚙️ Icône + Texte',
  render: () => (
    <div className="gap-ds-space-md flex flex-wrap items-center justify-center">
      <Badge variant="info" icon={<i className="pi pi-info" />}>
        Info
      </Badge>
      <Badge variant="success" icon={<i className="pi pi-check" />}>
        Succès
      </Badge>
      <Badge variant="danger" icon={<i className="pi pi-times" />}>
        Erreur
      </Badge>
    </div>
  )
}

export const Playground: Story = {
  name: '🧠 Playground interactif',
  parameters: {
    controls: { expanded: true }
  }
}
