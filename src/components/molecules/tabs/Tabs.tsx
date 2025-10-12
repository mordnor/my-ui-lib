import { useState } from 'react'
import { cn } from '@/utils/cn'
import type { TabsProps } from './Tabs.types'

export const Tabs = ({
  tabs,
  defaultTab,
  activeTab: controlledActiveTab,
  onChange,
  variant = 'line',
}: TabsProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultTab || tabs[0]?.id
  )

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab

  const handleTabChange = (tabId: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId)
    }
    onChange?.(tabId)
  }

  const variantStyles = {
    line: {
      container: 'ds-border-b border-ds-border-primary',
      tab: 'ds-border-b-2 ds-border-transparent ds-pb-3',
      active: 'border-ds-brand-primary text-ds-brand-primary',
      inactive: 'hover:border-ds-border-strong text-ds-text-secondary hover:text-ds-text-primary',
    },
    enclosed: {
      container: 'ds-border-b border-ds-border-primary',
      tab: 'ds-border ds-border-b-0 rounded-t-md px-ds-4 py-ds-2 ds-mb-[-1px]',
      active: 'bg-ds-surface-primary border-ds-border-primary text-ds-text-primary',
      inactive: 'bg-ds-surface-secondary ds-border-transparent text-ds-text-secondary hover:bg-ds-surface-tertiary',
    },
    soft: {
      container: 'bg-ds-surface-secondary rounded-md p-ds-1',
      tab: 'rounded px-ds-3 py-ds-2',
      active: 'bg-ds-surface-primary shadow-sm text-ds-text-primary',
      inactive: 'text-ds-text-secondary hover:text-ds-text-primary hover:bg-ds-surface-tertiary',
    },
  }

  const styles = variantStyles[variant]
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div>
      <div
        className={cn('flex gap-ds-1', styles.container)}
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && handleTabChange(tab.id)}
              className={cn(
                'flex items-center gap-ds-2 px-ds-4 py-ds-2',
                'ds-font-medium ds-text-sm ds-transition-all',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                styles.tab,
                isActive ? styles.active : styles.inactive
              )}
            >
              {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
              {tab.label}
            </button>
          )
        })}
      </div>
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        className="py-ds-4"
      >
        {activeContent}
      </div>
    </div>
  )
}

Tabs.displayName = 'Tabs'
