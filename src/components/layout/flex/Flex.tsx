import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { FlexProps } from './Flex.types'

const directionClasses = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
}

const wrapClasses = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
}

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

/**
 * Flex component - Flexible box layout
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      wrap = 'nowrap',
      align,
      justify,
      gap,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          directionClasses[direction],
          wrapClasses[wrap],
          align && alignClasses[align],
          justify && justifyClasses[justify],
          gap && `gap-ds-${gap}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Flex.displayName = 'Flex'
