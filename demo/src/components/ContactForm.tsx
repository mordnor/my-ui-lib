import { useState } from 'react'
import { Button, Card, Stack, Text } from '@dorian-ui/my-ui-lib'

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card variant="elevated" padding="lg">
      <form onSubmit={handleSubmit}>
        <Stack spacing="lg">
          <div>
            <label htmlFor="name" className="block text-ds-sm font-ds-medium text-ds-foreground mb-ds-2">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-ds-4 py-ds-3 rounded-ds-md border border-ds-border bg-ds-background text-ds-foreground focus:outline-none focus:ring-2 focus:ring-ds-primary focus:border-transparent transition-all"
              placeholder="Jean Dupont"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-ds-sm font-ds-medium text-ds-foreground mb-ds-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-ds-4 py-ds-3 rounded-ds-md border border-ds-border bg-ds-background text-ds-foreground focus:outline-none focus:ring-2 focus:ring-ds-primary focus:border-transparent transition-all"
              placeholder="jean.dupont@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-ds-sm font-ds-medium text-ds-foreground mb-ds-2">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-ds-4 py-ds-3 rounded-ds-md border border-ds-border bg-ds-background text-ds-foreground focus:outline-none focus:ring-2 focus:ring-ds-primary focus:border-transparent transition-all"
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-ds-sm font-ds-medium text-ds-foreground mb-ds-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-ds-4 py-ds-3 rounded-ds-md border border-ds-border bg-ds-background text-ds-foreground focus:outline-none focus:ring-2 focus:ring-ds-primary focus:border-transparent transition-all resize-none"
              placeholder="Votre message..."
            />
          </div>

          <Button type="submit" variant="solid" colorScheme="primary" size="lg" isFullWidth>
            Envoyer le message
          </Button>
        </Stack>
      </form>
    </Card>
  )
}
