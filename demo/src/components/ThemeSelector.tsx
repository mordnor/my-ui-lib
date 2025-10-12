import { useState } from 'react'
import { Button, Flex, Text, Stack } from '@dorian-ui/my-ui-lib'
import type { ThemeName } from '@dorian-ui/my-ui-lib'

interface ThemeSelectorProps {
  currentTheme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

export const ThemeSelector = ({
  currentTheme,
  onThemeChange
}: ThemeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const themes: { value: ThemeName; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: 'pi-sun' },
    { value: 'dark', label: 'Dark', icon: 'pi-moon' },
  ]

  const currentThemeData = themes.find((t) => t.value === currentTheme)

  return (
    <div className="relative">
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select theme"
        className="min-w-[140px]"
      >
        <Flex align="center" gap="2">
          <i className={`pi ${currentThemeData?.icon} text-ds-base`}></i>
          <Text size="sm">{currentThemeData?.label}</Text>
          <i className="pi pi-chevron-down text-ds-xs"></i>
        </Flex>
      </Button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 z-50 w-48 bg-ds-card border border-ds-border rounded-ds-lg shadow-ds-lg overflow-hidden">
            <Stack spacing="xs" className="p-ds-2">
              {themes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => {
                    onThemeChange(theme.value)
                    setIsOpen(false)
                  }}
                  className={`
                    w-full text-left px-ds-3 py-ds-2 rounded-ds-md transition-colors
                    ${
                      currentTheme === theme.value
                        ? 'bg-ds-primary text-white'
                        : 'hover:bg-ds-muted text-ds-text-primary'
                    }
                  `}
                >
                  <Flex align="center" gap="2">
                    <i className={`pi ${theme.icon} text-ds-base`}></i>
                    <Text
                      size="sm"
                      weight={
                        currentTheme === theme.value ? 'semibold' : 'regular'
                      }
                    >
                      {theme.label}
                    </Text>
                  </Flex>
                </button>
              ))}
            </Stack>
          </div>
        </>
      )}
    </div>
  )
}
