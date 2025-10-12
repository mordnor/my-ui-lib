import { useEffect, useState } from 'react'
import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormField,
  Grid,
  Heading,
  Input,
  Label,
  Modal,
  Progress,
  Radio,
  SearchInput,
  Section,
  Select,
  Skeleton,
  Spinner,
  Stack,
  Text,
  Textarea,
  Toggle
} from '@dorian-ui/my-ui-lib'

export const ShowcaseNew = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="min-h-screen bg-ds-background text-ds-foreground">
      {/* Theme Toggle Button - Fixed position */}
      <div className="fixed top-8 right-8 z-50">
        <Button
          variant="ghost"
          size="lg"
          onClick={toggleTheme}
          className="bg-ds-card border border-ds-border shadow-ds-lg hover:shadow-ds-xl transition-shadow"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <span className="flex items-center gap-2">
              🌙 <span className="hidden sm:inline font-ds-medium">Dark Mode</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              ☀️ <span className="hidden sm:inline font-ds-medium">Light Mode</span>
            </span>
          )}
        </Button>
      </div>

      {/* Hero Header */}
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ds-primary/10 via-ds-secondary/10 to-ds-accent/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-ds-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-ds-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <Container size="xl" className="relative z-10">
          <Stack spacing="xl" align="center" className="text-center py-ds-16">
            <Badge variant="soft" colorScheme="primary" size="lg">
              v0.2.3 · Design System
            </Badge>

            <Heading as="h1" className="text-ds-5xl md:text-ds-6xl">
              Design System Moderne
            </Heading>

            <Text size="lg" color="secondary" className="max-w-3xl">
              Une bibliothèque de composants React moderne avec système de
              tokens robuste, multi-thèmes (light/dark) et entièrement
              personnalisable. Plus de 40 composants pour créer des interfaces
              exceptionnelles.
            </Text>

            <Flex gap="4" className="flex-wrap justify-center">
              <Button size="lg" variant="solid" colorScheme="primary">
                Explorer les composants
              </Button>
              <Button size="lg" variant="outline">
                Voir sur GitHub
              </Button>
            </Flex>

            {/* Stats */}
            <Grid cols={4} gap="md" className="pt-ds-12 w-full max-w-4xl">
              {[
                { value: '40+', label: 'Composants' },
                { value: '350+', label: 'Design Tokens' },
                { value: '100%', label: 'TypeScript' },
                { value: '2', label: 'Thèmes' }
              ].map((stat, i) => (
                <Stack key={i} spacing="xs" align="center">
                  <Text
                    size="lg"
                    weight="bold"
                    className="text-ds-foreground text-3xl"
                  >
                    {stat.value}
                  </Text>
                  <Text size="sm" color="secondary">
                    {stat.label}
                  </Text>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Theme Demo Section */}
      <Section padding="xl" className="bg-ds-muted/30">
        <Container size="xl">
          <Stack spacing="xl">
            <Stack spacing="md" align="center" className="text-center">
              <Badge variant="soft" colorScheme="accent">
                🎨 Nouveauté
              </Badge>
              <Heading as="h2">Système Multi-Thèmes</Heading>
              <Text size="lg" color="secondary" className="max-w-2xl">
                Basé sur Slate avec une architecture 3-layer (primitives →
                semantic → themes). Tous les composants s'adaptent
                automatiquement au thème.
              </Text>
            </Stack>

            <Grid cols={3} gap="lg">
              {/* Semantic Colors */}
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="md">
                  <Text
                    size="sm"
                    weight="semibold"
                    color="secondary"
                    className="uppercase tracking-wide"
                  >
                    Semantic Tokens
                  </Text>
                  <div className="space-y-2">
                    <div className="h-12 bg-ds-primary rounded-ds-md flex items-center justify-center">
                      <Text size="sm" className="text-ds-primary-foreground">
                        Primary
                      </Text>
                    </div>
                    <div className="h-12 bg-ds-secondary rounded-ds-md flex items-center justify-center">
                      <Text size="sm" className="text-ds-secondary-foreground">
                        Secondary
                      </Text>
                    </div>
                    <div className="h-12 bg-ds-accent rounded-ds-md flex items-center justify-center">
                      <Text size="sm" className="text-ds-accent-foreground">
                        Accent
                      </Text>
                    </div>
                  </div>
                </Stack>
              </Card>

              {/* State Colors */}
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="md">
                  <Text
                    size="sm"
                    weight="semibold"
                    color="secondary"
                    className="uppercase tracking-wide"
                  >
                    States
                  </Text>
                  <div className="space-y-2">
                    <div className="h-10 bg-ds-success rounded-ds-md flex items-center justify-center">
                      <Text size="sm" className="text-ds-success-foreground">
                        Success
                      </Text>
                    </div>
                    <div className="h-10 bg-ds-warning rounded-ds-md flex items-center justify-center">
                      <Text size="sm" className="text-ds-warning-foreground">
                        Warning
                      </Text>
                    </div>
                    <div className="h-10 bg-ds-destructive rounded-ds-md flex items-center justify-center">
                      <Text
                        size="sm"
                        className="text-ds-destructive-foreground"
                      >
                        Error
                      </Text>
                    </div>
                    <div className="h-10 bg-ds-info rounded-ds-md flex items-center justify-center">
                      <Text size="sm" className="text-ds-info-foreground">
                        Info
                      </Text>
                    </div>
                  </div>
                </Stack>
              </Card>

              {/* Neutral Colors */}
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="md">
                  <Text
                    size="sm"
                    weight="semibold"
                    color="secondary"
                    className="uppercase tracking-wide"
                  >
                    Slate Palette
                  </Text>
                  <div className="space-y-2">
                    <div className="h-10 bg-ds-slate-900 rounded-ds-md flex items-center justify-center">
                      <Text size="sm" className="text-white">
                        900
                      </Text>
                    </div>
                    <div className="h-10 bg-ds-slate-600 rounded-ds-md flex items-center justify-center">
                      <Text size="sm" className="text-white">
                        600
                      </Text>
                    </div>
                    <div className="h-10 bg-ds-slate-300 rounded-ds-md flex items-center justify-center">
                      <Text size="sm">300</Text>
                    </div>
                    <div className="h-10 bg-ds-slate-100 rounded-ds-md flex items-center justify-center border border-ds-border">
                      <Text size="sm">100</Text>
                    </div>
                  </div>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Typography */}
      <Section padding="xl">
        <Container size="xl">
          <Stack spacing="xl">
            <Stack spacing="md" align="center" className="text-center">
              <Badge variant="soft" colorScheme="secondary">
                Typographie
              </Badge>
              <Heading as="h2">Hiérarchie Visuelle</Heading>
            </Stack>

            <Grid cols={2} gap="lg">
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Text
                    size="sm"
                    weight="semibold"
                    color="secondary"
                    className="uppercase tracking-wide"
                  >
                    Headings
                  </Text>
                  <Stack spacing="md">
                    <Heading as="h1">Heading 1 - Hero</Heading>
                    <Heading as="h2">Heading 2 - Section</Heading>
                    <Heading as="h3">Heading 3 - Subsection</Heading>
                    <Heading as="h4">Heading 4 - Card Title</Heading>
                  </Stack>
                </Stack>
              </Card>

              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Text
                    size="sm"
                    weight="semibold"
                    color="secondary"
                    className="uppercase tracking-wide"
                  >
                    Body Text
                  </Text>
                  <Stack spacing="md">
                    <div className="p-ds-4 bg-ds-muted rounded-ds-md">
                      <Text
                        size="xs"
                        weight="semibold"
                        color="secondary"
                        className="mb-2 uppercase"
                      >
                        Large • 1.25rem • Medium
                      </Text>
                      <Text size="lg" weight="medium">
                        Large text pour les introductions importantes
                      </Text>
                    </div>
                    <div className="p-ds-4 bg-ds-muted rounded-ds-md">
                      <Text
                        size="xs"
                        weight="semibold"
                        color="secondary"
                        className="mb-2 uppercase"
                      >
                        Base • 1rem • Regular
                      </Text>
                      <Text size="base" weight="regular">
                        Base text pour le contenu principal
                      </Text>
                    </div>
                    <div className="p-ds-4 bg-ds-muted rounded-ds-md">
                      <Text
                        size="xs"
                        weight="semibold"
                        color="secondary"
                        className="mb-2 uppercase"
                      >
                        Small • 0.875rem • Regular
                      </Text>
                      <Text size="sm" weight="regular">
                        Small text pour les descriptions secondaires
                      </Text>
                    </div>
                    <div className="p-ds-4 bg-ds-muted rounded-ds-md">
                      <Text
                        size="xs"
                        weight="semibold"
                        color="secondary"
                        className="mb-2 uppercase"
                      >
                        Weights Demo
                      </Text>
                      <Stack spacing="xs">
                        <Text size="base" weight="regular">
                          Regular (400)
                        </Text>
                        <Text size="base" weight="medium">
                          Medium (500)
                        </Text>
                        <Text size="base" weight="semibold">
                          Semibold (600)
                        </Text>
                        <Text size="base" weight="bold">
                          Bold (700)
                        </Text>
                      </Stack>
                    </div>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Buttons Showcase */}
      <Section padding="xl" className="bg-ds-muted/30">
        <Container size="xl">
          <Stack spacing="xl">
            <Stack spacing="md" align="center" className="text-center">
              <Badge variant="soft" colorScheme="success">
                Interactions
              </Badge>
              <Heading as="h2">Boutons & Actions</Heading>
            </Stack>

            <Grid cols={2} gap="lg">
              {/* Variants */}
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Heading as="h4">Variants</Heading>
                  <Flex gap="3" wrap="wrap">
                    <Button variant="solid">Solid</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="soft">Soft</Button>
                    <Button variant="link">Link</Button>
                  </Flex>
                </Stack>
              </Card>

              {/* Colors */}
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Heading as="h4">Color Schemes</Heading>
                  <Flex gap="3" wrap="wrap">
                    <Button colorScheme="primary">Primary</Button>
                    <Button colorScheme="secondary">Secondary</Button>
                    <Button colorScheme="accent">Accent</Button>
                    <Button colorScheme="success">Success</Button>
                    <Button colorScheme="error">Error</Button>
                  </Flex>
                </Stack>
              </Card>

              {/* Sizes */}
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Heading as="h4">Sizes</Heading>
                  <Flex gap="3" wrap="wrap" align="center">
                    <Button size="xs">XS</Button>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">XL</Button>
                  </Flex>
                </Stack>
              </Card>

              {/* States */}
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Heading as="h4">States</Heading>
                  <Flex gap="3" wrap="wrap">
                    <Button>Normal</Button>
                    <Button isLoading>Loading</Button>
                    <Button isDisabled>Disabled</Button>
                  </Flex>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Forms */}
      <Section padding="xl">
        <Container size="xl">
          <Stack spacing="xl">
            <Stack spacing="md" align="center" className="text-center">
              <Badge variant="soft" colorScheme="warning">
                Formulaires
              </Badge>
              <Heading as="h2">Inputs & Controls</Heading>
            </Stack>

            <Grid cols={2} gap="lg">
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <FormField
                    label="Email"
                    helperText="Nous ne partagerons jamais votre email"
                    isRequired
                  >
                    <Input type="email" placeholder="votre@email.com" />
                  </FormField>

                  <FormField label="Mot de passe" isRequired>
                    <Input type="password" placeholder="••••••••" />
                  </FormField>

                  <FormField label="Bio">
                    <Textarea rows={4} placeholder="Parlez-nous de vous..." />
                  </FormField>

                  <FormField label="Pays">
                    <Select>
                      <option>France</option>
                      <option>Belgique</option>
                      <option>Suisse</option>
                      <option>Canada</option>
                    </Select>
                  </FormField>
                </Stack>
              </Card>

              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Stack spacing="md">
                    <Label className="flex items-center gap-ds-2">
                      <Checkbox />
                      <span>J'accepte les conditions d'utilisation</span>
                    </Label>
                    <Label className="flex items-center gap-ds-2">
                      <Checkbox />
                      <span>Recevoir la newsletter</span>
                    </Label>
                  </Stack>

                  <Divider />

                  <Stack spacing="md">
                    <Text size="sm" weight="medium">
                      Type de compte
                    </Text>
                    <Label className="flex items-center gap-ds-2">
                      <Radio name="account" />
                      <span>Personnel</span>
                    </Label>
                    <Label className="flex items-center gap-ds-2">
                      <Radio name="account" />
                      <span>Professionnel</span>
                    </Label>
                  </Stack>

                  <Divider />

                  <Stack spacing="md">
                    <Label className="flex items-center justify-between">
                      <span>Notifications</span>
                      <Toggle />
                    </Label>
                    <Label className="flex items-center justify-between">
                      <span>Mode sombre</span>
                      <Toggle
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                      />
                    </Label>
                  </Stack>

                  <Divider />

                  <SearchInput
                    placeholder="Rechercher..."
                    onSearch={(val) => console.log(val)}
                  />
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Feedback Components */}
      <Section padding="xl" className="bg-ds-muted/30">
        <Container size="xl">
          <Stack spacing="xl">
            <Stack spacing="md" align="center" className="text-center">
              <Badge variant="soft" colorScheme="info">
                Feedback
              </Badge>
              <Heading as="h2">Alerts & Indicators</Heading>
            </Stack>

            <Stack spacing="lg">
              <Alert status="success" title="Succès!">
                Votre profil a été mis à jour avec succès.
              </Alert>
              <Alert status="warning" title="Attention">
                Votre session expirera dans 5 minutes.
              </Alert>
              <Alert status="error" title="Erreur">
                Une erreur s'est produite lors de l'enregistrement.
              </Alert>
              <Alert status="info" title="Information">
                Une nouvelle mise à jour est disponible.
              </Alert>
            </Stack>

            <Divider />

            <Grid cols={2} gap="lg">
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Heading as="h4">Progress Bars</Heading>
                  <Stack spacing="md">
                    <Progress value={25} showLabel />
                    <Progress value={50} colorScheme="success" />
                    <Progress value={75} colorScheme="warning" showLabel />
                    <Progress value={90} colorScheme="error" size="lg" />
                  </Stack>
                </Stack>
              </Card>

              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Heading as="h4">Loading States</Heading>
                  <Flex gap="4" align="center">
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                  </Flex>
                  <Skeleton variant="text" count={3} />
                  <Skeleton variant="rectangular" height="100px" />
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Badges & Avatars */}
      <Section padding="xl">
        <Container size="xl">
          <Stack spacing="xl">
            <Stack spacing="md" align="center" className="text-center">
              <Badge variant="soft" colorScheme="primary">
                Composants UI
              </Badge>
              <Heading as="h2">Badges & Avatars</Heading>
            </Stack>

            <Grid cols={2} gap="lg">
              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Heading as="h4">Badges</Heading>
                  <Stack spacing="md">
                    <div>
                      <Text size="sm" weight="medium" className="mb-2">
                        Variants
                      </Text>
                      <Flex gap="2" wrap="wrap">
                        <Badge variant="solid">Solid</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="soft">Soft</Badge>
                        <Badge variant="ghost">Ghost</Badge>
                      </Flex>
                    </div>
                    <div>
                      <Text size="sm" weight="medium" className="mb-2">
                        Colors
                      </Text>
                      <Flex gap="2" wrap="wrap">
                        <Badge colorScheme="primary">Primary</Badge>
                        <Badge colorScheme="success">Success</Badge>
                        <Badge colorScheme="warning">Warning</Badge>
                        <Badge colorScheme="error">Error</Badge>
                        <Badge colorScheme="info">Info</Badge>
                      </Flex>
                    </div>
                  </Stack>
                </Stack>
              </Card>

              <Card padding="lg" className="bg-ds-card border border-ds-border">
                <Stack spacing="lg">
                  <Heading as="h4">Avatars</Heading>
                  <Stack spacing="md">
                    <div>
                      <Text size="sm" weight="medium" className="mb-2">
                        Sizes
                      </Text>
                      <Flex gap="3" align="center">
                        <Avatar size="xs" name="John Doe" />
                        <Avatar size="sm" name="Jane Smith" />
                        <Avatar size="md" name="Bob Wilson" />
                        <Avatar size="lg" name="Alice Brown" />
                        <Avatar size="xl" name="Charlie Davis" />
                      </Flex>
                    </div>
                    <div>
                      <Text size="sm" weight="medium" className="mb-2">
                        Avatar Group
                      </Text>
                      <AvatarGroup max={3}>
                        <Avatar name="John Doe" />
                        <Avatar name="Jane Smith" />
                        <Avatar name="Bob Wilson" />
                        <Avatar name="Alice Brown" />
                        <Avatar name="Charlie Davis" />
                      </AvatarGroup>
                    </div>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Modal Example */}
      <Section padding="xl" className="bg-ds-muted/30">
        <Container size="xl">
          <Card padding="lg" className="bg-ds-card border border-ds-border">
            <Stack spacing="lg" align="center">
              <Heading as="h4">Modal Component</Heading>
              <Text align="center" color="secondary">
                Cliquez sur le bouton pour ouvrir une modale
              </Text>
              <Button onClick={() => setIsModalOpen(true)}>
                Ouvrir la modale
              </Button>

              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Exemple de Modale"
                size="md"
              >
                <Stack spacing="lg">
                  <Text>
                    Ceci est un exemple de modale. Vous pouvez y placer
                    n'importe quel contenu.
                  </Text>
                  <FormField label="Nom" isRequired>
                    <Input placeholder="Votre nom" />
                  </FormField>
                  <Flex gap="3" justify="end">
                    <Button
                      variant="ghost"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Annuler
                    </Button>
                    <Button onClick={() => setIsModalOpen(false)}>
                      Confirmer
                    </Button>
                  </Flex>
                </Stack>
              </Modal>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* Footer CTA */}
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ds-primary/10 via-ds-secondary/10 to-ds-accent/10"></div>
        <Container size="xl" className="relative z-10">
          <Stack spacing="lg" align="center" className="text-center py-ds-12">
            <Heading as="h2">Prêt à démarrer ?</Heading>
            <Text size="lg" color="secondary" className="max-w-2xl">
              Installez notre design system et commencez à créer des interfaces
              magnifiques avec un système de tokens moderne
            </Text>
            <Flex gap="4" className="flex-wrap justify-center">
              <Button size="lg" colorScheme="primary">
                npm install @dorian-ui/my-ui-lib
              </Button>
              <Button size="lg" variant="outline">
                Documentation
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>
    </div>
  )
}

export default ShowcaseNew
