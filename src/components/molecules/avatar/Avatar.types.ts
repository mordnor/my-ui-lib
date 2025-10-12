import type { ImgHTMLAttributes } from 'react'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  /**
   * Avatar size
   * @default 'md'
   */
  size?: AvatarSize

  /**
   * Fallback name (shows initials)
   */
  name?: string

  /**
   * Image source
   */
  src?: string

  /**
   * Alt text
   */
  alt?: string
}
