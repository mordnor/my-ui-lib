import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Custom tailwind-merge configuration for design system tokens
 * Extends default config to properly handle ds-* prefixed classes
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Font sizes: text-ds-xs, text-ds-sm, text-ds-base, etc.
      'font-size': [
        {
          text: [
            'ds-xs',
            'ds-sm',
            'ds-base',
            'ds-lg',
            'ds-xl',
            'ds-2xl',
            'ds-3xl',
            'ds-4xl',
            'ds-5xl',
            'ds-6xl',
            'ds-7xl'
          ]
        }
      ],
      // Text colors: text-ds-foreground, text-ds-primary, etc.
      'text-color': [
        {
          text: [
            'ds-foreground',
            'ds-muted-foreground',
            'ds-card-foreground',
            'ds-popover-foreground',
            'ds-primary',
            'ds-primary-foreground',
            'ds-secondary',
            'ds-secondary-foreground',
            'ds-accent',
            'ds-accent-foreground',
            'ds-destructive',
            'ds-destructive-foreground',
            'ds-success',
            'ds-success-foreground',
            'ds-warning',
            'ds-warning-foreground',
            'ds-info',
            'ds-info-foreground',
            // Slate palette
            'ds-slate-50',
            'ds-slate-100',
            'ds-slate-200',
            'ds-slate-300',
            'ds-slate-400',
            'ds-slate-500',
            'ds-slate-600',
            'ds-slate-700',
            'ds-slate-800',
            'ds-slate-900',
            'ds-slate-950'
          ]
        }
      ],
      // Background colors
      'bg-color': [
        {
          bg: [
            'ds-background',
            'ds-foreground',
            'ds-card',
            'ds-muted',
            'ds-primary',
            'ds-secondary',
            'ds-accent',
            'ds-destructive',
            'ds-success',
            'ds-warning',
            'ds-info',
            // Slate palette
            'ds-slate-50',
            'ds-slate-100',
            'ds-slate-200',
            'ds-slate-300',
            'ds-slate-400',
            'ds-slate-500',
            'ds-slate-600',
            'ds-slate-700',
            'ds-slate-800',
            'ds-slate-900',
            'ds-slate-950',
            // Color palettes for alerts
            'ds-blue-50',
            'ds-green-50',
            'ds-orange-50',
            'ds-red-50'
          ]
        }
      ],
      // Border colors
      'border-color': [
        {
          border: [
            'ds-border',
            'ds-input',
            'ds-primary',
            'ds-secondary',
            'ds-accent',
            'ds-destructive',
            'ds-success',
            'ds-warning',
            'ds-info'
          ]
        }
      ],
      // Font weights
      'font-weight': [
        {
          font: [
            'ds-thin',
            'ds-light',
            'ds-regular',
            'ds-medium',
            'ds-semibold',
            'ds-bold',
            'ds-extrabold',
            'ds-black'
          ]
        }
      ],
      // Line heights
      'line-height': [
        {
          leading: [
            'ds-none',
            'ds-tight',
            'ds-snug',
            'ds-normal',
            'ds-relaxed',
            'ds-loose'
          ]
        }
      ],
      // Letter spacing
      'letter-spacing': [
        {
          tracking: [
            'ds-tighter',
            'ds-tight',
            'ds-normal',
            'ds-wide',
            'ds-wider',
            'ds-widest'
          ]
        }
      ]
    }
  }
})

/**
 * Utility function to merge Tailwind CSS classes with clsx
 * Combines clsx for conditional classes and tailwind-merge to handle conflicts
 *
 * @param inputs - Class names to merge
 * @returns Merged class string
 *
 * @example
 * cn('px-4 py-2', 'bg-blue-500', { 'text-white': true })
 * // => 'px-4 py-2 bg-blue-500 text-white'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
