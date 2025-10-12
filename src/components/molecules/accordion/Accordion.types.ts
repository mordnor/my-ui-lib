import type { ReactNode } from 'react'

export interface AccordionItem {
  id: string
  title: string
  content: ReactNode
  icon?: ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpenItems?: string[]
}
