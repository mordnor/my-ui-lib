import React from 'react';
export interface HeadingProps {
    /** Niveau HTML (h1–h6) */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Poids typographique */
    weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
    /** Passage en majuscules */
    uppercase?: boolean;
    /** Espacement des lettres */
    tracking?: 'tight' | 'normal' | 'wide';
    /** Alignement du texte */
    align?: 'left' | 'center' | 'right';
    /** Classes supplémentaires */
    className?: string;
    /** Contenu */
    children: React.ReactNode;
}
/**
 * 🔠 Heading — composant typographique DS avec rythme vertical intégré
 */
export declare const Heading: React.FC<HeadingProps>;
