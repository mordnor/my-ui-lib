import { Button, Flex } from '@dorian-ui/my-ui-lib'
import type { ThemeName } from '@dorian-ui/my-ui-lib'

interface ThemeSelectorProps {
  currentTheme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

export const ThemeSelector = ({ currentTheme, onThemeChange }: ThemeSelectorProps) => {
  return (
    <Flex gap="2">
      <Button
        variant={currentTheme === 'light' ? 'solid' : 'ghost'}
        size="sm"
        onClick={() => onThemeChange('light')}
        className="min-w-[80px]"
      >
        <i className="pi pi-sun text-ds-base mr-ds-2"></i>
        Light
      </Button>
      <Button
        variant={currentTheme === 'dark' ? 'solid' : 'ghost'}
        size="sm"
        onClick={() => onThemeChange('dark')}
        className="min-w-[80px]"
      >
        <i className="pi pi-moon text-ds-base mr-ds-2"></i>
        Dark
      </Button>
    </Flex>
  )
}
