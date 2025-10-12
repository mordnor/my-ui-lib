import { useState } from 'react'
import { cn } from '@/utils/cn'
import type { AccordionProps } from './Accordion.types'

export const Accordion = ({ items, allowMultiple = false, defaultOpenItems = [] }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems)

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      )
    } else {
      setOpenItems(prev => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className="ds-divide-y ds-divide-ds-border-primary ds-border border-ds-border-primary rounded-md">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id)
        return (
          <div key={item.id}>
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                'w-full flex items-center justify-between p-ds-4',
                'ds-text-left ds-font-medium hover:bg-ds-surface-secondary',
                'ds-transition-colors'
              )}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-ds-2">
                {item.icon && <span>{item.icon}</span>}
                <span>{item.title}</span>
              </div>
              <svg
                className={cn(
                  'w-5 h-5 ds-transition-transform',
                  isOpen && 'rotate-180'
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="p-ds-4 ds-pt-0 text-ds-text-secondary">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

Accordion.displayName = 'Accordion'
