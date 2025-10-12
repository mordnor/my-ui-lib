import type { DropdownProps } from './Dropdown.types'

// TODO: Implement Dropdown with proper positioning library
export const Dropdown = ({ trigger, children }: DropdownProps) => {
  return (
    <div className="relative ds-inline-block">
      {trigger}
      <div className="ds-hidden">{children}</div>
      {/* Placeholder - implement with floating-ui or PrimeReact */}
    </div>
  )
}

Dropdown.displayName = 'Dropdown'
