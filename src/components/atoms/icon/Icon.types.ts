import { SVGAttributes } from 'react'

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Icon name/type - placeholder for icon system
   */
  name?: string
  
  /**
   * Icon size
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  
  /**
   * Additional CSS classes
   */
  className?: string
}
