import { useState, useCallback } from 'react'

/**
 * Hook to manage open/close state (for modals, dropdowns, etc.)
 *
 * @param defaultOpen - Initial open state (default: false)
 * @returns Object with state and handlers
 *
 * @example
 * const { isOpen, open, close, toggle } = useDisclosure()
 */
export function useDisclosure(defaultOpen: boolean = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    open,
    close,
    toggle,
    setIsOpen
  }
}
