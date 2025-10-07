import React from 'react'
import clsx from 'clsx'
import type { GridProps } from './Grid.types'

export const Grid: React.FC<GridProps> = ({
  cols = { base: 1 },
  gap = 'md',
  justify,
  align,
  autoFit = false,
  autoFill = false,
  className,
  children,
  ...rest
}) => {
  // 🧱 Génère les classes Tailwind pour les colonnes responsives
  const colClasses = Object.entries(cols)
    .map(([bp, val]) => {
      const prefix = bp === 'base' ? '' : `${bp}:`
      return `${prefix}grid-cols-${val}`
    })
    .join(' ')

  // 🎨 Gap basé sur les tokens DS
  const gapClass = gap !== 'none' ? `gap-ds-space-${gap}` : ''

  // 🧭 Alignements
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

  // 🧮 Auto-fit / auto-fill → inline style CSS grid-template
  const gridTemplate =
    autoFit || autoFill
      ? {
          gridTemplateColumns: `repeat(${
            autoFit ? 'auto-fit' : 'auto-fill'
          }, minmax(250px, 1fr))`
        }
      : undefined

  return (
    <div
      {...rest}
      style={gridTemplate}
      className={clsx(
        'grid',
        colClasses,
        gapClass,
        align && alignMap[align],
        justify && justifyMap[justify],
        className
      )}
    >
      {children}
    </div>
  )
}

Grid.displayName = 'Grid'
