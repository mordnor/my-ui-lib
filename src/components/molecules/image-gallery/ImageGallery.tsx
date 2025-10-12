import { forwardRef, useState } from 'react'
import { cn } from '@/utils/cn'
import { Stack, Grid } from '@/components'
import type { ImageGalleryProps } from './ImageGallery.types'

/**
 * ImageGallery component - Interactive image gallery with thumbnails
 * Perfect for product pages and media showcases
 */
export const ImageGallery = forwardRef<HTMLDivElement, ImageGalleryProps>(
  (
    {
      images,
      aspectRatio = 'square',
      thumbnailCols = 4,
      showThumbnails = true,
      onImageChange,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleImageChange = (index: number) => {
      setSelectedIndex(index)
      onImageChange?.(index)
    }

    const aspectRatioClasses = {
      square: 'aspect-square',
      portrait: 'aspect-[3/4]',
      landscape: 'aspect-[4/3]',
      wide: 'aspect-[16/9]',
    }

    return (
      <Stack ref={ref} spacing="md" className={className} {...props}>
        {/* Main Image */}
        <div
          className={cn(
            'relative overflow-hidden rounded-ds-lg bg-ds-muted',
            aspectRatioClasses[aspectRatio]
          )}
        >
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt || `Image ${selectedIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {images[selectedIndex].badge && (
            <div className="absolute top-4 left-4">
              {images[selectedIndex].badge}
            </div>
          )}
        </div>

        {/* Thumbnail Grid */}
        {showThumbnails && images.length > 1 && (
          <Grid cols={thumbnailCols} gap="md">
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  'aspect-square rounded-ds-md overflow-hidden cursor-pointer border-2 transition-all',
                  selectedIndex === index
                    ? 'border-ds-primary ring-2 ring-ds-primary ring-opacity-50'
                    : 'border-transparent hover:border-ds-border'
                )}
                onClick={() => handleImageChange(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt || `Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Grid>
        )}
      </Stack>
    )
  }
)

ImageGallery.displayName = 'ImageGallery'
