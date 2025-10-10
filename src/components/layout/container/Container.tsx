import React from 'react'
import clsx from 'clsx'
import type { ContainerProps, ContainerSize } from './Container.types'

/**
 * 📦 DS Container — composant de layout basé sur les tokens DS
 */
export function Container({
  children,
  size = 'lg',
  fluid = false,
  as,
  className = '',
  ...rest
}: ContainerProps) {
  const Tag = (as || 'div') as React.ElementType

  const sizeMap: Record<ContainerSize, string> = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full'
  }

  return (
    <Tag
      {...rest}
      className={clsx(
        'px-ds-xl mx-auto w-full',
        !fluid && sizeMap[size],
        'duration-ds-normal ease-ds-standard transition-all',
        className
      )}
    >
      {children}
    </Tag>
  )
}

Container.displayName = 'Container'
