import { forwardRef, useState } from 'react'
import { cn } from '@/utils/cn'
import { Input } from '@/components/atoms/input'
import type { SearchInputProps } from './SearchInput.types'

export const SearchInput = forwardRef<HTMLDivElement, SearchInputProps>(
  ({ size = 'md', onSearch, onClear, isLoading, className, ...props }, ref) => {
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      props.onChange?.(e)
    }

    const handleClear = () => {
      setValue('')
      onClear?.()
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSearch?.(value)
    }

    return (
      <div ref={ref} className={cn('relative', className)}>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 ds-pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-ds-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Input
              type="search"
              size={size}
              value={value}
              onChange={handleChange}
              className="ds-pl-10 ds-pr-10"
              {...props}
            />
            {(value || isLoading) && (
              <div className="absolute inset-y-0 right-0 ds-pr-3 flex items-center">
                {isLoading ? (
                  <svg className="ds-animate-spin h-4 w-4 text-ds-text-tertiary" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-ds-text-tertiary hover:text-ds-text-primary"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    )
  }
)

SearchInput.displayName = 'SearchInput'
