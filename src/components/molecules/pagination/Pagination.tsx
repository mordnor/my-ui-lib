import { forwardRef, useMemo } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/atoms/button'
import type { PaginationProps } from './Pagination.types'

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      showFirstLast = true,
      siblingCount = 1,
      className,
      ...props
    },
    ref
  ) => {
    const paginationRange = useMemo(() => {
      const totalPageNumbers = siblingCount + 5

      if (totalPageNumbers >= totalPages) {
        return range(1, totalPages)
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

      const shouldShowLeftDots = leftSiblingIndex > 2
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2

      const firstPageIndex = 1
      const lastPageIndex = totalPages

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount
        const leftRange = range(1, leftItemCount)
        return [...leftRange, '...', totalPages]
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount
        const rightRange = range(totalPages - rightItemCount + 1, totalPages)
        return [firstPageIndex, '...', ...rightRange]
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex)
        return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex]
      }

      return []
    }, [currentPage, totalPages, siblingCount])

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn('flex items-center gap-ds-1', className)}
        {...props}
      >
        {showFirstLast && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            aria-label="First page"
          >
            ««
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          ‹
        </Button>

        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === '...') {
            return (
              <span key={`dots-${index}`} className="px-ds-2 text-ds-text-tertiary">
                ...
              </span>
            )
          }

          return (
            <Button
              key={pageNumber}
              variant={pageNumber === currentPage ? 'solid' : 'ghost'}
              size="sm"
              onClick={() => onPageChange(Number(pageNumber))}
              aria-label={`Page ${pageNumber}`}
              aria-current={pageNumber === currentPage ? 'page' : undefined}
            >
              {pageNumber}
            </Button>
          )
        })}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          ›
        </Button>
        {showFirstLast && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Last page"
          >
          »»
          </Button>
        )}
      </nav>
    )
  }
)

Pagination.displayName = 'Pagination'
