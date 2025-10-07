export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
export type AvatarVariant = 'default' | 'surface' | 'inverse'

export interface AvatarProps {
  /** URL de l’image */
  src?: string

  /** Texte alternatif pour l’image */
  alt?: string

  /** Taille de l’avatar (tokenisée) */
  size?: AvatarSize

  /** Variante de fond (DS) */
  variant?: AvatarVariant

  /** Fallback — initiales ou icône */
  fallback?: string | React.ReactNode

  /** Affiche un anneau (bordure autour de l’avatar) */
  ring?: boolean

  /** Classes supplémentaires */
  className?: string
}
