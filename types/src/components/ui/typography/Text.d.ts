import React from 'react';
export interface TextOwnProps {
    /** Variante de couleur DS */
    variant?: 'default' | 'muted' | 'success' | 'danger' | 'warning' | 'info';
    /** Taille de texte (DS token) */
    size?: 'sm' | 'md' | 'lg';
    /** Alignement */
    align?: 'left' | 'center' | 'right';
    /** Poids typographique DS */
    weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
    /** Classes additionnelles */
    className?: string;
    /** Contenu du texte */
    children: React.ReactNode;
}
export type TextProps<T extends React.ElementType = 'p'> = TextOwnProps & {
    as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof TextOwnProps | 'as'>;
/**
 * 🧾 Text — composant de texte du Design System
 * Full tokenisé via classes `ds-*` (typographie, couleurs, line-height)
 */
export declare const Text: {
    <T extends React.ElementType = "p">({ as, variant, size, align, weight, className, children, ...rest }: TextProps<T>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
