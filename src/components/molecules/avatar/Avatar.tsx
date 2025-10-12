import { forwardRef, useState } from 'react'
import { cn } from '@/utils/cn'
import type { AvatarProps } from './Avatar.types'

const sizeStyles = {
  xs: 'w-ds-avatar-xs h-ds-avatar-xs text-ds-xs',
  sm: 'w-ds-avatar-sm h-ds-avatar-sm text-ds-sm',
  md: 'w-ds-avatar-md h-ds-avatar-md text-ds-base',
  lg: 'w-ds-avatar-lg h-ds-avatar-lg text-ds-lg',
  xl: 'w-ds-avatar-xl h-ds-avatar-xl text-ds-xl',
  '2xl': 'w-20 h-20 text-ds-2xl',
}

const getInitials = (name: string) => {
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

/**
 * Avatar component - User profile picture or initials
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ size = 'md', name, src, alt, className, ...props }, ref) => {
    const [imageError, setImageError] = useState(false)
    const showInitials = !src || imageError

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center',
          'rounded-full bg-ds-primary text-ds-primary-foreground',
          'font-ds-medium overflow-hidden flex-shrink-0',
          sizeStyles[size],
          className
        )}
      >
        {!showInitials && src ? (
          <img
            src={src}
            alt={alt || name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            {...props}
          />
        ) : name ? (
          getInitials(name)
        ) : (
          <svg className="w-2/3 h-2/3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'
