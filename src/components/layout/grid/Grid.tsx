import React from 'react'
import clsx from 'clsx'
import type { GridProps } from './Grid.types'

const gridColsMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  8: 'grid-cols-8',
  12: 'grid-cols-12'
}

export const Grid: React.FC<GridProps> = ({
  cols,
  gap = 'md',
  justify,
  align,
  autoFit = false,
  autoFill = false,
  className,
  children,
  ...rest
}) => {
  // 🧠 Si aucune colonne définie → active automatiquement autoFit
  const isAutoMode = !cols || Object.keys(cols).length === 0

  // Génère les classes Tailwind pour les colonnes responsives
  const colClasses = cols
    ? Object.entries(cols)
        .map(([bp, val]) => {
          const prefix = bp === 'base' ? '' : `${bp}:`
          const colClass = gridColsMap[val as number]
          return colClass ? `${prefix}${colClass}` : ''
        })
        .join(' ')
    : ''

  // Gap basé sur tokens DS
  const gapClass = gap !== 'none' ? `gap-ds-space-${gap}` : ''

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

  // Auto-fit / auto-fill intelligent
  const gridTemplate =
    autoFit || autoFill || isAutoMode
      ? {
          gridTemplateColumns: `repeat(${
            autoFit || isAutoMode ? 'auto-fit' : 'auto-fill'
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
