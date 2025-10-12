import { useEffect, useRef, type RefObject } from 'react'

/**
 * Hook to detect clicks outside of a specified element
 *
 * @param handler - Callback function to run when click outside is detected
 * @returns Ref to attach to the element
 *
 * @example
 * const ref = useOutsideClick(() => setIsOpen(false))
 * return <div ref={ref}>Content</div>
 */
export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  handler: (event: MouseEvent | TouchEvent) => void
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref.current

      // Do nothing if clicking element or its children
      if (!element || element.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [handler])

  return ref
}
