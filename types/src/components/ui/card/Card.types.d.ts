import type { CardProps as PrimeCardProps } from 'primereact/card';
import type React from 'react';
export type CardVariant = 'default' | 'outlined' | 'elevated' | 'subtle';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
/**
 * 🎨 Design System Card Props
 * Wrapper du composant PrimeReact.Card avec tokens Tailwind.
 */
export interface DSCardProps extends Omit<PrimeCardProps, 'children'> {
    /** Variante visuelle */
    variant?: CardVariant;
    /** Active un effet hover */
    hoverable?: boolean;
    /** Taille du padding interne (basée sur les tokens `space-*`) */
    padding?: CardPadding;
    /** Classes utilitaires supplémentaires */
    className?: string;
    /** Gestion du clic (si la carte est interactive) */
    onClick?: () => void;
    /** En-tête facultatif (image, JSX, composant) */
    header?: React.ReactNode | string;
    /** Titre ou fonction dynamique */
    title?: React.ReactNode | ((props: PrimeCardProps) => React.ReactNode);
    /** Sous-titre ou fonction dynamique */
    subTitle?: React.ReactNode | ((props: PrimeCardProps) => React.ReactNode);
    /** Pied facultatif (CTA, actions) */
    footer?: React.ReactNode;
    /** Contenu principal */
    children?: React.ReactNode;
}
