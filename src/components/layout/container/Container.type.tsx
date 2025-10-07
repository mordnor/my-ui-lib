import React from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ContainerProps {
  children: React.ReactNode

  size?: ContainerSize

  fluid?: boolean

  className?: string

  as?: keyof JSX.IntrinsicElements
}
