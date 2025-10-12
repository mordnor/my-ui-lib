import { useEffect } from 'react'
import { cn } from '@/utils/cn'
import type { ModalProps } from './Modal.types'

const sizeStyles = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full m-ds-4',
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 ds-z-50 flex items-center justify-center p-ds-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 ds-bg-black ds-bg-opacity-50 ds-backdrop-blur-sm"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      <div
        className={cn(
          'relative bg-ds-surface-primary rounded-lg shadow-xl',
          'w-full max-h-[90vh] overflow-auto',
          sizeStyles[size]
        )}
      >
        {title && (
          <div className="flex items-center justify-between p-ds-6 ds-border-b border-ds-border-primary">
            <h2 className="ds-text-xl ds-font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="p-ds-1 rounded hover:bg-ds-surface-secondary ds-transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
        <div className="p-ds-6">{children}</div>
      </div>
    </div>
  )
}

Modal.displayName = 'Modal'
