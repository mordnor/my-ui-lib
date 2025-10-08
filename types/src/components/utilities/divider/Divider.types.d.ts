export interface DividerProps {
    /** Orientation du séparateur */
    orientation?: 'horizontal' | 'vertical';
    /** Variante de couleur */
    variant?: 'default' | 'strong' | 'muted' | 'inverse';
    /** Ajoute un texte centré entre les traits */
    label?: string;
    /** Taille du margin top/bottom */
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    /** Pleine largeur ou hauteur selon l’orientation */
    full?: boolean;
    /** Classes additionnelles */
    className?: string;
}
