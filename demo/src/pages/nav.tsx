import React, { useState } from 'react'
import { Container } from '@/components/layout/container/Container'
import { Stack } from '@/components/layout/stack/Stack'
import { Button } from '@/components/ui/button/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('accueil')

  const navLinks = [
    { id: 'accueil', label: 'Accueil', href: '#accueil' },
    { id: 'galerie', label: 'Galerie', href: '#galerie' },
    { id: 'produits', label: 'Produits', href: '#produits' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="bg-ds-background-surface border-b border-ds-border-default sticky top-0 z-50">
      <Container size="full">
        <Stack
          direction="horizontal"
          gap="md"
          align="center"
          justify="between"
          padding="md"
          className="relative"
        >
          {/* Logo */}
          <Stack direction="horizontal" gap="md" align="center">
            <div className="bg-ds-accent-primary rounded-ds-md p-ds-2 flex items-center justify-center w-10 h-10">
              <svg
                className="text-ds-white w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <span className="text-ds-xl font-ds-bold text-ds-text-primary">
              VotreMarque
            </span>
          </Stack>

          {/* Desktop Navigation */}
          <Stack
            direction="horizontal"
            gap="lg"
            align="center"
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`text-ds-base font-ds-medium transition-all duration-ds-normal ${
                  activeLink === link.id
                    ? 'text-ds-accent-primary border-b-2 border-ds-accent-primary pb-1'
                    : 'text-ds-text-secondary hover:text-ds-accent-hover'
                }`}
              >
                {link.label}
              </a>
            ))}
          </Stack>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              dsSize="md"
              label="Commander"
              className="shadow-ds-sm"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ds-text-primary p-ds-2 hover:bg-ds-background-app rounded-ds-sm transition-all duration-ds-fast flex items-center justify-center"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </Stack>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-ds-md">
            <Stack
              gap="sm"
              padding="md"
              className="bg-ds-background-card rounded-ds-lg border border-ds-border-default"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.id)
                    setIsOpen(false)
                  }}
                  className={`text-ds-base font-ds-medium p-ds-3 rounded-ds-sm transition-all duration-ds-fast ${
                    activeLink === link.id
                      ? 'bg-ds-accent-primary text-ds-white'
                      : 'text-ds-text-secondary hover:bg-ds-background-app hover:text-ds-accent-hover'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                dsSize="md"
                label="Commander"
                className="w-full mt-ds-2"
              />
            </Stack>
          </div>
        )}
      </Container>
    </nav>
  )
}
