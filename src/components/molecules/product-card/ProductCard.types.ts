export interface ProductCardProps {
  image: string
  title: string
  description: string
  price: string
  variant?: 'elevated' | 'outlined' | 'filled'
  hoverable?: boolean
  className?: string
}
