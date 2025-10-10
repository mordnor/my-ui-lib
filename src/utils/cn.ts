import clsx, { ClassValue } from 'clsx'

/**
 * 🎨 cn — Utility for merging className values
 * Wrapper around clsx for consistent className handling
 *
 * @example
 * cn('base-class', isActive && 'active', className)
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
