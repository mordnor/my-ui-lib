export interface IconProps {
    /** Nom de l’icône PrimeReact — sans le préfixe `pi pi-` */
    name: string;
    /** Taille DS */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Couleur DS */
    color?: 'primary' | 'secondary' | 'muted' | 'inverse' | 'success' | 'danger' | 'warning' | 'info';
    /** Si `true`, l’icône tourne (pour spinner, etc.) */
    spin?: boolean;
    /** Classes personnalisées */
    className?: string;
    /** Label ARIA (accessibilité) */
    ariaLabel?: string;
}
