import { ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source
   */
  src: string
  
  /**
   * Alt text (required for accessibility)
   */
  alt: string
  
  /**
   * Additional CSS classes
   */
  className?: string
}
