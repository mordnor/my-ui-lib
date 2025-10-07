import React from 'react'
import clsx from 'clsx'
import { Container } from '@/components/layout/container/Container'
import type { SectionProps } from './Section.types'

export const Section: React.FC<SectionProps> = ({
  children,
  bg = 'app',
  size = 'xl',
  vertical = 'lg',
  noContainer = false,
  className,
  ...rest
}) => {
  const verticalPadding: Record<string, string> = {
    sm: 'py-ds-space-xl',
    md: 'py-ds-space-2xl',
    lg: 'py-ds-space-4xl',
    xl: 'py-ds-space-6xl'
  }

  const bgColor: Record<string, string> = {
    app: 'bg-ds-bg-app',
    surface: 'bg-ds-bg-surface',
    inverse: 'bg-ds-bg-inverse text-ds-text-inverse'
  }

  return (
    <section
      {...rest}
      className={clsx(bgColor[bg], verticalPadding[vertical], className)}
    >
      {noContainer ? children : <Container size={size}>{children}</Container>}
    </section>
  )
}

Section.displayName = 'Section'
