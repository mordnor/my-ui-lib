import type { HTMLAttributes, ReactNode } from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Container max width
   * @default 'lg'
   */
  size?: ContainerSize

  /**
   * Center the container
   * @default true
   */
  centered?: boolean

  /**
   * Children elements
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}
