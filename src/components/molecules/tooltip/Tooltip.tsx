import type { TooltipProps } from './Tooltip.types'

// TODO: Implement with @floating-ui/react
export const Tooltip = ({ children, content }: TooltipProps) => {
  return <div className="ds-inline-block" title={String(content)}>{children}</div>
}

Tooltip.displayName = 'Tooltip'
