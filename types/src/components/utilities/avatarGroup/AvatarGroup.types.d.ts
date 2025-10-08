import type { AvatarProps } from '../avatar/Avatar.types';
export interface AvatarGroupProps {
    /** Liste d’avatars à afficher */
    avatars: AvatarProps[];
    /** Taille des avatars (héritée si non définie par l’avatar) */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Nombre max d’avatars visibles avant le "+X" */
    maxVisible?: number;
    /** Affiche un compteur "+X" si plus d’avatars */
    showCounter?: boolean;
    /** Espacement négatif entre avatars (tokenisé) */
    overlap?: 'sm' | 'md' | 'lg';
    /** Classes supplémentaires */
    className?: string;
}
