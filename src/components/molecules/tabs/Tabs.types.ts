import type { ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
  icon?: ReactNode
  disabled?: boolean
}

export interface TabsProps {
  tabs: TabItem[]
  defaultTab?: string
  activeTab?: string
  onChange?: (tabId: string) => void
  variant?: 'line' | 'enclosed' | 'soft'
}
