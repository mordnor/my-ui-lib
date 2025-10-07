import React from 'react'
import clsx from 'clsx'
import type { ContainerProps } from 'src/components/layout/container/Container.type'

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  fluid = false,
  as: Tag = 'div',
  className = ''
}) => {
  const sizeMap: Record<string, string> = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full'
  }

  return (
    <Tag
      className={clsx(
        'px-ds-space-xl mx-auto w-full',
        !fluid && sizeMap[size],
        className
      )}
    >
      {children}
    </Tag>
  )
}

Container.displayName = 'Container'
