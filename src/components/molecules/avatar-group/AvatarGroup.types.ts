import type { HTMLAttributes, ReactNode } from 'react'

export type AvatarGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar size for all avatars
   * @default 'md'
   */
  size?: AvatarGroupSize

  /**
   * Maximum avatars to show
   * @default 5
   */
  max?: number

  /**
   * Children (Avatar components)
   */
  children: ReactNode
}
