import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '@/components/ui/button/Button'
import { Text } from '@/components/ui/typography/Text'
import { Badge } from '@/components/ui/badge/Badge'
import { Heading } from '@/components/ui/typography/Heading'

const meta: Meta<typeof Card> = {
  title: 'Design System/Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
🧱 **Card** — composant conteneur polyvalent du Design System.

### 🎨 Variantes disponibles
- \`default\` → carte standard avec fond et bordure douce
- \`elevated\` → carte mise en avant avec ombre forte
- \`outlined\` → carte encadrée sans fond
- \`subtle\` → carte douce et contextuelle, idéale pour les encadrés d’information

### ✨ Fonctionnalités
- Header avec image ou contenu libre
- Body avec titre, sous-titre, texte
- Footer personnalisable (CTA, texte, etc.)
- Gestion du hover, du padding, et du thème light/dark
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'subtle']
    },
    hoverable: { control: 'boolean' },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg']
    }
  },
  args: {
    variant: 'default',
    hoverable: true,
    padding: 'md'
  }
}

export default meta
type Story = StoryObj<typeof Card>

//
// ---------------------------------------------------------------------------
// 🪶 1. Carte produit (cas d’usage principal)
// ---------------------------------------------------------------------------
export const ProductCard: Story = {
  name: '👜 Carte Produit (Basique)',
  args: {
    title: 'Sac Atelier',
    subTitle: 'Cuir pleine fleur',
    header: 'https://picsum.photos/seed/atelier/800/520',
    children: (
      <Text variant="muted">
        Une pièce unique façonnée à la main dans notre atelier français.
      </Text>
    ),
    footer: (
      <div className="flex items-center justify-between">
        <Text variant="success" weight="semibold" className="mr-ds-space-sm">
          139 €
        </Text>
        <Button label="Ajouter" variant="primary" dsSize="sm" />
      </div>
    )
  }
}

//
// ---------------------------------------------------------------------------
// 🎖️ 2. Produit Highlight avec badge (elevated)
// ---------------------------------------------------------------------------
export const HighlightedCard: Story = {
  name: '🎖️ Produit mis en avant',
  args: {
    title: 'Édition Limitée',
    subTitle: 'Disponible en précommande',
    variant: 'elevated',
    header: (
      <div className="relative">
        <img
          src="https://picsum.photos/seed/edition/800/520"
          alt="Produit édition limitée"
          className="h-[220px] w-full object-cover"
        />
        <div className="right-ds-space-sm top-ds-space-sm absolute">
          <Badge variant="danger" size="sm">
            NEW
          </Badge>
        </div>
      </div>
    ),
    children: (
      <Text>
        Fabriqué à la main, disponible uniquement jusqu’à la fin du mois.
      </Text>
    ),
    footer: (
      <div className="flex items-center justify-between">
        <Text variant="success" weight="semibold" className="mr-ds-space-sm">
          149 €
        </Text>
        <Button label="Précommander" variant="secondary" dsSize="md" />
      </div>
    )
  }
}

//
// ---------------------------------------------------------------------------
// 🌿 3. Carte “subtle” — information contextuelle
// ---------------------------------------------------------------------------
export const InfoSubtleCard: Story = {
  name: '🌿 Encadré informatif (Subtle)',
  args: {
    variant: 'subtle',
    hoverable: false,
    children: (
      <div className="flex flex-col items-start text-left">
        <div className="bg-ds-accent-primary/10 text-ds-accent-primary mb-ds-space-sm flex size-12 items-center justify-center rounded-full">
          <i className="pi pi-hammer text-lg" />
        </div>
        <Heading level={3} className="mb-ds-space-xs">
          Fait main
        </Heading>
        <Text variant="muted">
          Chaque sac est une pièce unique, façonnée avec soin par nos artisans.
        </Text>
      </div>
    )
  }
}

//
// ---------------------------------------------------------------------------
// 👤 4. Carte profil utilisateur
// ---------------------------------------------------------------------------
export const UserProfileCard: Story = {
  name: '👤 Profil utilisateur',
  args: {
    variant: 'outlined',
    hoverable: true,
    children: (
      <div className="gap-ds-space-md flex items-center">
        <img
          src="https://picsum.photos/seed/user/120"
          alt="Utilisateur"
          className="size-16 rounded-full object-cover"
        />
        <div>
          <Text weight="semibold">Camille R.</Text>
          <Text variant="muted" size="sm">
            Artisan Cuir & Sellier
          </Text>
          <div className="text-ds-accent-primary mt-ds-space-xs flex gap-1 text-sm">
            {Array.from({ length: 4 }).map((_, i) => (
              <i key={i} className="pi pi-star-fill" />
            ))}
            <i className="pi pi-star" />
          </div>
        </div>
      </div>
    )
  }
}

//
// ---------------------------------------------------------------------------
// 🧾 5. Minimal / encadré simple
// ---------------------------------------------------------------------------
export const MinimalCard: Story = {
  name: '🧾 Encadré minimaliste',
  args: {
    title: 'Encadré simple',
    variant: 'outlined',
    hoverable: false,
    children: (
      <Text>
        Idéal pour afficher une information courte ou une section neutre.
      </Text>
    )
  }
}

//
// ---------------------------------------------------------------------------
// 🧱 6. Showroom — toutes les variantes côte à côte
// ---------------------------------------------------------------------------
export const VariantsShowcase: Story = {
  name: '🎨 Showcase complet',
  render: () => (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
      {(['default', 'outlined', 'elevated', 'subtle'] as const).map(
        (variant) => (
          <Card
            key={variant}
            variant={variant}
            hoverable
            title={variant.toUpperCase()}
            subTitle="Exemple de sous-titre"
            header={`https://picsum.photos/seed/${variant}/800/520`}
            footer={
              variant !== 'subtle' && (
                <Button
                  label="Action"
                  variant={variant === 'outlined' ? 'secondary' : 'primary'}
                  dsSize="sm"
                />
              )
            }
          >
            <Text>
              Cette carte utilise la variante <strong>{variant}</strong>.
            </Text>
          </Card>
        )
      )}
    </div>
  )
}

//
// ---------------------------------------------------------------------------
// 🧩 7. Gallery / Mix & Match — rendu complet
// ---------------------------------------------------------------------------
export const MixedGallery: Story = {
  name: '🏛️ Showroom global',
  render: () => {
    const showcase = [
      ProductCard,
      HighlightedCard,
      InfoSubtleCard,
      UserProfileCard,
      MinimalCard
    ]
    return (
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showcase.map((story, i) => (
          <Card key={i} {...story.args!} />
        ))}
      </div>
    )
  }
}

//
// ---------------------------------------------------------------------------
// 🎮 8. Playground interactif
// ---------------------------------------------------------------------------
export const Playground: Story = {
  name: '🎮 Playground Interactif',
  args: {
    title: 'Titre éditable',
    subTitle: 'Sous-titre dynamique',
    header: 'https://picsum.photos/seed/playground/800/520',
    children: (
      <Text>
        Utilisez les *Controls* Storybook pour modifier le rendu en temps réel :
        variante, hover, padding...
      </Text>
    ),
    footer: (
      <div className="flex justify-end">
        <Button label="Tester" variant="primary" dsSize="sm" />
      </div>
    ),
    variant: 'default'
  },
  parameters: {
    controls: { expanded: true }
  }
}
