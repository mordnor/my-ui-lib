import React from 'react';
export type BadgeVariant = 'default' | 'success' | 'danger' | 'warning' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';
export interface BadgeProps {
    /** Variante visuelle basée sur les états du DS */
    variant?: BadgeVariant;
    /** Taille typographique et padding */
    size?: BadgeSize;
    /** Icône optionnelle à gauche */
    icon?: React.ReactNode;
    /** Contenu textuel ou JSX du badge */
    children: React.ReactNode;
    /** Classes personnalisées */
    className?: string;
}
/**
 * 🏷️ Badge — indicateur visuel basé sur le Design System.
 * Full tokenisé via classes `ds-*` (couleurs, typographie, espacement, radius…)
 */
export declare const Badge: React.FC<BadgeProps>;
