import { ReactNode } from 'react'

export interface ImageGalleryImage {
  src: string
  alt?: string
  badge?: ReactNode
}

export interface ImageGalleryProps {
  images: ImageGalleryImage[]
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
  thumbnailCols?: 2 | 3 | 4 | 5 | 6
  showThumbnails?: boolean
  onImageChange?: (index: number) => void
  className?: string
}
