import type { PopoverProps } from './Popover.types'

// TODO: Implement with @floating-ui/react
export const Popover = ({ trigger, content }: PopoverProps) => {
  return <div className="relative ds-inline-block">{trigger}</div>
}

Popover.displayName = 'Popover'
