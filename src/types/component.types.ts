import {
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes
} from 'react'

/**
 * Component-specific types
 */

/**
 * Base component props that all components should accept
 */
export interface BaseComponentProps extends HTMLAttributes<HTMLElement> {
  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Test ID for testing
   */
  testId?: string
}

/**
 * Button base props
 */
export interface ButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Loading state
   */
  isLoading?: boolean

  /**
   * Disabled state
   */
  isDisabled?: boolean

  /**
   * Full width
   */
  isFullWidth?: boolean

  /**
   * Icon only button
   */
  isIconOnly?: boolean
}

/**
 * Input base props
 */
export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Error state
   */
  isInvalid?: boolean

  /**
   * Disabled state
   */
  isDisabled?: boolean

  /**
   * Read only
   */
  isReadOnly?: boolean

  /**
   * Required field
   */
  isRequired?: boolean

  /**
   * Full width
   */
  isFullWidth?: boolean
}

/**
 * Disclosure/Toggle state props
 */
export interface DisclosureProps {
  /**
   * Open state
   */
  isOpen?: boolean

  /**
   * Default open state
   */
  defaultOpen?: boolean

  /**
   * On open change callback
   */
  onOpenChange?: (isOpen: boolean) => void
}

/**
 * Clickable/Interactive props
 */
export interface InteractiveProps {
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent) => void

  /**
   * Hover handler
   */
  onHover?: () => void

  /**
   * Focus handler
   */
  onFocus?: () => void

  /**
   * Blur handler
   */
  onBlur?: () => void
}
