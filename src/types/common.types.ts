import { ReactNode } from 'react'

/**
 * Common types used across the design system
 */

/**
 * Size variants for components
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Color variants for components
 */
export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'neutral'

/**
 * Visual variants/styles for components
 */
export type Variant = 'solid' | 'outline' | 'ghost' | 'link' | 'soft'

/**
 * Radius/roundness variants
 */
export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'full'

/**
 * Alignment options
 */
export type Alignment = 'start' | 'center' | 'end' | 'stretch'

/**
 * Spacing scale based on design tokens
 */
export type Spacing =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32

/**
 * Responsive value type
 */
export type ResponsiveValue<T> =
  | T
  | { base?: T; sm?: T; md?: T; lg?: T; xl?: T }

/**
 * Children prop type
 */
export type Children = ReactNode

/**
 * As prop for polymorphic components
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<Props = any> = React.ElementType<Props>

/**
 * Polymorphic component props
 */
export type PolymorphicComponentProps<
  T extends As,
  Props = Record<string, never>
> = Props & {
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof Props | 'as'>

/**
 * Loading state
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

/**
 * Direction/Orientation
 */
export type Orientation = 'horizontal' | 'vertical'

/**
 * Position
 */
export type Position = 'top' | 'right' | 'bottom' | 'left'

/**
 * Placement (combination of position and alignment)
 */
export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
