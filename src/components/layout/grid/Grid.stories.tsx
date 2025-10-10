import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from './Grid'

const meta: Meta<typeof Grid> = {
  title: 'Design System/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
🧮 **Grid** — composant de mise en page basé sur CSS Grid.
Il simplifie la gestion des colonnes responsives, des gaps et des alignements via des tokens DS.

**Fonctionnalités :**
- Colonnes définies par \`cols={{ base: 1, sm: 2, lg: 3 }}\`
- \`gap\` tokenisé : \`xs → 7xl\`
- Modes \`autoFit\` / \`autoFill\` pour les grilles fluides
- Alignements horizontaux et verticaux (justify / align)
        `
      }
    }
  },
  argTypes: {
    cols: {
      control: 'object',
      description: 'Configuration responsive des colonnes',
      table: {
        defaultValue: { summary: '{ base: 1 }' }
      }
    },
    gap: {
      control: 'select',
      options: [
        'none',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl'
      ],
      description: 'Espacement entre les items (token DS)'
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Justification horizontale'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Alignement vertical'
    },
    autoFit: { control: 'boolean' },
    autoFill: { control: 'boolean' },
    className: { control: 'text' }
  },
  args: {
    cols: { base: 1, sm: 2, lg: 3 },
    gap: 'lg'
  }
}

export default meta
type Story = StoryObj<typeof Grid>

// ----------------------------------------------------
// 🧱 Stories
// ----------------------------------------------------

const DemoItem = ({ i }: { i: number }) => (
  <div className="bg-ds-bg-card text-ds-text-primary border-ds-border-default p-ds-space-lg shadow-ds-sm rounded border text-center">
    Élément {i + 1}
  </div>
)

export const Default: Story = {
  name: '📦 Grille par défaut',
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }).map((_, i) => (
        <DemoItem key={i} i={i} />
      ))}
    </Grid>
  )
}

export const Responsive: Story = {
  name: '📱 Responsive (1→3 colonnes)',
  render: () => (
    <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="xl">
      {Array.from({ length: 6 }).map((_, i) => (
        <DemoItem key={i} i={i} />
      ))}
    </Grid>
  )
}

export const AutoFit: Story = {
  name: '♻️ Auto-Fit dynamique',
  render: () => (
    <Grid autoFit gap="lg">
      {Array.from({ length: 8 }).map((_, i) => (
        <DemoItem key={i} i={i} />
      ))}
    </Grid>
  )
}

export const Alignment: Story = {
  name: '🎯 Alignement & Justify',
  render: () => (
    <div className="bg-ds-bg-surface gap-ds-space-2xl flex h-[300px] flex-col justify-center">
      <Grid cols={{ base: 3 }} align="center" justify="center" gap="md">
        {Array.from({ length: 3 }).map((_, i) => (
          <DemoItem key={i} i={i} />
        ))}
      </Grid>
    </div>
  )
}

export const Playground: Story = {
  name: '🧠 Playground interactif',
  parameters: {
    controls: { expanded: true }
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 9 }).map((_, i) => (
        <DemoItem key={i} i={i} />
      ))}
    </Grid>
  )
}
