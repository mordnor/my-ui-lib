import React from 'react'
import clsx from 'clsx'
import type { StackProps } from './Stack.types'

export const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  gap = 'lg',
  padding,
  fullCenter = false,
  align,
  justify,
  wrap = false,
  className,
  children,
  ...rest
}) => {
  const directionClass = direction === 'vertical' ? 'flex-col' : 'flex-row'
  const gapClass = gap !== 'none' ? `gap-ds-space-${gap}` : ''
  const paddingClass = padding ? `p-ds-space-${padding}` : ''

  const alignMap: Record<string, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline'
  }

  const justifyMap: Record<string, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  }

  return (
    <div
      {...rest}
      className={clsx(
        'flex',
        directionClass,
        gapClass,
        paddingClass,
        align && alignMap[align],
        justify && justifyMap[justify],
        wrap && 'flex-wrap',
        fullCenter && 'items-center justify-center text-center',
        className
      )}
    >
      {children}
    </div>
  )
}

Stack.displayName = 'Stack'
