import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { Container, Flex, Text } from '@/components'
import type { NavbarProps } from './Navbar.types'

/**
 * Navbar component - Modern navigation bar for application header
 * Responsive, with optional sticky positioning and blur effect
 */
export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      logo,
      links = [],
      actions,
      sticky = true,
      blurred = true,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          // Base styles
          'w-full border-b border-ds-border transition-all duration-ds-base',
          // Background
          blurred
            ? 'bg-ds-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-ds-card/80'
            : 'bg-ds-card',
          // Sticky positioning
          sticky && 'sticky top-0 z-50',
          className
        )}
        {...props}
      >
        <Container size="full">
          <Flex justify="between" align="center" className="h-16">
            {/* Logo / Brand */}
            {logo && (
              <Flex align="center" gap="3" className="flex-shrink-0">
                {logo}
              </Flex>
            )}

            {/* Navigation Links + Actions */}
            <Flex align="center" gap="6" className="flex-shrink-0">
              {/* Navigation Links */}
              {links.length > 0 && (
                <Flex gap="6" align="center" className="hidden md:flex">
                  {links.map((link, index) => (
                    <Text
                      key={index}
                      as={link.href ? 'a' : 'button'}
                      size="sm"
                      weight="medium"
                      className={cn(
                        'cursor-pointer transition-colors duration-ds-fast',
                        'hover:text-ds-primary',
                        link.active ? 'text-ds-primary' : 'text-ds-foreground'
                      )}
                      onClick={link.onClick}
                      {...(link.href && { href: link.href })}
                    >
                      {link.label}
                    </Text>
                  ))}
                </Flex>
              )}

              {/* Actions (theme toggle, user menu, etc.) */}
              {actions && (
                <Flex align="center" gap="3" className="flex-shrink-0">
                  {actions}
                </Flex>
              )}
            </Flex>
          </Flex>
        </Container>
      </nav>
    )
  }
)

Navbar.displayName = 'Navbar'
