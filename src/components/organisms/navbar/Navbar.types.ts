import { ReactNode } from 'react'

export interface NavbarLink {
  label: string
  href?: string
  onClick?: () => void
  active?: boolean
}

export interface NavbarProps {
  /**
   * Brand logo/name (left side)
   */
  logo?: ReactNode
  /**
   * Navigation links
   */
  links?: NavbarLink[]
  /**
   * Actions on the right side (theme toggle, user menu, etc.)
   */
  actions?: ReactNode
  /**
   * Make navbar sticky to top
   */
  sticky?: boolean
  /**
   * Use blur effect on background
   */
  blurred?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
}
